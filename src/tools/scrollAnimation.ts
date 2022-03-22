/* eslint-disable */

interface ScrollAnimParams {
  animationClass?: string
  animationClassStart?: string
  reverse?: boolean
  elements?: HTMLElement[]
  animationType?: 'transition' | 'animation'
  delayStep?: number
  offsetTop?: number
  offsetBottom?: number
  trigger?: boolean
  callback?: (e: HTMLElement) => void
  callbackFromTopIn?: (e: HTMLElement) => void
  callbackFromBottomIn?: (e: HTMLElement) => void
  callbackToTopOut?: (e: HTMLElement) => void
  callbackToBottomOut?: (e: HTMLElement) => void
}

function scrollAnim(params: ScrollAnimParams) {
  //==== Class name reg mask

  const classNameReg = /^([A-Z,a-z,\-,_])+([A-Z,a-z,\-,_,0-9])*$/m

  //==== Input data

  const animationClass =
      typeof params.animationClass === 'string' &&
      classNameReg.test(params.animationClass)
        ? params.animationClass
        : 'anim',
    animationClassStart =
      typeof params.animationClassStart === 'string' &&
      classNameReg.test(params.animationClassStart)
        ? params.animationClassStart
        : 'animStart',
    reverse = typeof params.reverse === 'boolean' ? params.reverse : false,
    elements = Array.isArray(params.elements) ? params.elements : [],
    animationType =
      params.animationType === 'transition' ||
      params.animationType === 'animation'
        ? params.animationType
        : 'transition',
    delayStep =
      typeof params.delayStep === 'number' && params.delayStep > 0
        ? params.delayStep
        : 0,
    offsetTop = typeof params.offsetTop === 'number' ? params.offsetTop : 0,
    offsetBottom =
      typeof params.offsetBottom === 'number' ? params.offsetBottom : 0,
    trigger = typeof params.trigger === 'boolean' ? params.trigger : false,
    callback = typeof params.callback === 'function' ? params.callback : null,
    callbackFromTopIn =
      typeof params.callbackFromTopIn === 'function'
        ? params.callbackFromTopIn
        : null,
    callbackFromBottomIn =
      typeof params.callbackFromBottomIn === 'function'
        ? params.callbackFromBottomIn
        : null,
    callbackToTopOut =
      typeof params.callbackToTopOut === 'function'
        ? params.callbackToTopOut
        : null,
    callbackToBottomOut =
      typeof params.callbackToBottomOut === 'function'
        ? params.callbackToBottomOut
        : null

  //==== Functions

  //Add specialty animation class
  const addAnimationClass = () => {
    if (elements.length > 0) {
      elements.forEach((element) => {
        element.dataset.scrollVisibleStatus = 'false'
        element.classList.add(animationClass)
      })
    } else {
      document.querySelectorAll(`.${animationClass}`).forEach((element) => {
        ;(element as HTMLElement).dataset.scrollVisibleStatus = 'false'
        elements.push(element as HTMLElement)
      })
    }
  }

  //Set animation delay
  const smoothDelay = (x: number): number =>
    x === 0 ? 0 : (2 * delayStep) / (x + 1) + smoothDelay(x - 1)

  const setAnimationDelay = (element: HTMLElement, number: number): void => {
    if (delayStep !== 0)
      element.style[`${animationType}Delay`] = `${smoothDelay(number)}ms`
  }

  const getFullOffsetTop = (element: HTMLElement): number =>
    element.offsetTop +
    (element.offsetParent && element.offsetParent === document.body
      ? 0
      : getFullOffsetTop(element.offsetParent as HTMLElement))

  //Add animation delay for group
  const setVisibleStatus = (element: HTMLElement) => {
    const coords = {
        top: getFullOffsetTop(element) - window.pageYOffset,
        bottom:
          getFullOffsetTop(element) - window.pageYOffset + element.offsetHeight,
      },
      windowHeight = document.documentElement.clientHeight,
      visibleStatus = element.dataset.scrollVisibleStatus === 'true',
      visibleOnScreen =
        (coords.top > offsetTop && coords.top < windowHeight - offsetBottom) ||
        (coords.bottom > offsetTop &&
          coords.bottom < windowHeight - offsetBottom) ||
        (coords.top < offsetTop && coords.bottom > offsetTop),
      direction = coords.top <= windowHeight - coords.bottom

    if (visibleOnScreen && !visibleStatus) {
      setAnimationDelay(element, i)
      i++
      element.dataset.scrollVisibleStatus = 'true'
      element.classList.add(animationClassStart)

      if (callback !== null) callback(element)

      if (direction) {
        if (callbackFromTopIn !== null) callbackFromTopIn(element)
      } else {
        if (callbackFromBottomIn !== null) callbackFromBottomIn(element)
      }
    }

    if (!visibleOnScreen && visibleStatus && reverse) {
      element.dataset.scrollVisibleStatus = 'false'
      element.classList.remove(animationClassStart)
      setAnimationDelay(element, 0)

      if (direction) {
        if (callbackToTopOut !== null) callbackToTopOut(element)
      } else {
        if (callbackToBottomOut !== null) callbackToBottomOut(element)
      }
    }
  }
  let i = 0
  // Checking all elements
  const listenElements = () => {
    i = 0
    elements.forEach((element) => {
      setVisibleStatus(element)
    })
  }

  // Creating triggers
  if (trigger) {
    let triggerStyle = `
            position: fixed;
            left: 0;
            z-index: 99999;
            width: 100%;
            box-sizing: border-box;
            opacity: .75;
            pointer-events: none;
            filter: drop-shadow(0 1px 0 #fff);
        `

    if (offsetTop > 0) {
      let offsetTopTrigger = document.createElement('div')
      offsetTopTrigger.style.cssText = `
                ${triggerStyle}
                top: 0;
                border-bottom: 1px dashed red;
                height: ${offsetTop}px;
                transform-origin: 0 100%;
            `
      document.body.append(offsetTopTrigger)
    }
    if (offsetBottom > 0) {
      let offsetBottomTrigger = document.createElement('div')
      offsetBottomTrigger.style.cssText = `
                ${triggerStyle}
                bottom: 0;
                border-top: 1px dashed red;
                height: ${offsetBottom}px;
            `
      document.body.append(offsetBottomTrigger)
    }
  }

  //Synchronous start
  const promiseAnimation = new Promise((next) => {
    addAnimationClass()
    next(true)
  })
  promiseAnimation
    .then(() => {
      listenElements()
    })
    .then(() => {
      window.addEventListener('scroll', listenElements)
    })

  return () => window.removeEventListener('scroll', listenElements)
}

export default scrollAnim
