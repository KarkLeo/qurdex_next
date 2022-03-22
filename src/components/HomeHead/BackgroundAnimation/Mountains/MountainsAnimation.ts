import { DOMElement } from 'react'

interface BackgroundProp {
  height: string
  bgSize: string
  bgPosition: [
    { x: string; y: string },
    { x: string; y: string },
    { x: string; y: string },
    { x: string; y: string },
    { x: string; y: string }
  ]
}

export default (root: HTMLDivElement) => {
  //const imgRation = 1.47516053 // OriginalImageWidth / OriginalImageHeight
  const imgRation = 1.77777777 // Аspect ratio in the original layout
  let isRatio = window.innerWidth / window.innerHeight > imgRation

  const globalBgP: BackgroundProp = {
    height: isRatio ? `${100 / imgRation}vw` : '100vh',
    bgSize: isRatio ? `110% auto` : `auto 135%`,
    bgPosition: [
      { x: '50%', y: '50%' },
      { x: '50%', y: '50%' },
      { x: '50%', y: '50%' },
      { x: '50%', y: '50%' },
      { x: '50%', y: '50%' },
    ],
  }

  const renderBg = (bgImg: HTMLDivElement, prop: BackgroundProp) => {
    bgImg.setAttribute(
      'style',
      `
        min-height: ${prop.height};
        height: 100%;
        background-size: ${prop.bgSize};
        background-position:
          ${prop.bgPosition[0].x} ${prop.bgPosition[0].y},
          ${prop.bgPosition[1].x} ${prop.bgPosition[1].y},
          ${prop.bgPosition[2].x} ${prop.bgPosition[2].y},
          ${prop.bgPosition[3].x} ${prop.bgPosition[3].y},
          ${prop.bgPosition[4].x} ${prop.bgPosition[4].y}
    `
    )
  }

  const mouse_monitor = (e: MouseEvent) => {
    e.preventDefault()

    if (window.pageYOffset < root.clientHeight) {
      let x = e.clientX
      let y = e.clientY

      let xCenterItem = root.offsetLeft + root.clientWidth / 2
      let yCenterItem = root.offsetTop + root.clientHeight / 2

      x =
        e.clientX >= xCenterItem
          ? (e.clientX - xCenterItem) /
              ((window.innerWidth - xCenterItem) * 2) +
            0.5
          : e.clientX / (xCenterItem * 2)
      y =
        e.clientY >= yCenterItem
          ? (e.clientY - yCenterItem) /
              ((window.innerHeight - yCenterItem) * 2) +
            0.5
          : e.clientY / (yCenterItem * 2)

      let dX = (i = 1) =>
        x >= 0.5 ? (x - 0.5) / (i + 0.5) + 0.5 : 0.5 - (0.5 - x) / (i + 0.5)
      let dY = (i = 1) =>
        y >= 0.5 ? (y - 0.5) / (i + 0.5) + 0.5 : 0.5 - (0.5 - y) / (i + 0.5)
      let positionImg = root.getBoundingClientRect()

      globalBgP.bgPosition[0].x = `${x * 100}%`
      globalBgP.bgPosition[0].y =
        positionImg.y === 0 ? `${dY(3) * 100}%` : globalBgP.bgPosition[0].y
      globalBgP.bgPosition[1].x = `${dX() * 100}%`
      globalBgP.bgPosition[1].y =
        positionImg.y === 0 ? `${dY(6) * 100}%` : globalBgP.bgPosition[1].y
      globalBgP.bgPosition[2].x = `${dX(2) * 100}%`
      globalBgP.bgPosition[2].y =
        positionImg.y === 0 ? `${dY(9) * 100}%` : globalBgP.bgPosition[2].y
      globalBgP.bgPosition[3].x = `${dX(3) * 100}%`
      globalBgP.bgPosition[3].y =
        positionImg.y === 0 ? `${dY(12) * 100}%` : globalBgP.bgPosition[3].y
      globalBgP.bgPosition[4].x = `50%`
      globalBgP.bgPosition[4].y =
        positionImg.y === 0 ? `50%` : globalBgP.bgPosition[4].y
      renderBg(root, globalBgP)
    }
  }

  let resizeImg = () => {
    isRatio = window.innerWidth / window.innerHeight > imgRation
    globalBgP.height = isRatio ? `${100 / imgRation}vw` : '100vh'
    globalBgP.bgSize = isRatio ? `110% auto` : `auto 135%`
    renderBg(root, globalBgP)
  }

  let scrollBackground = () => {
    let scrollBgStep = 0.075
    let positionImg = root.getBoundingClientRect()
    if (window.pageYOffset < positionImg.height) {
      let scrollProcent = (positionImg.y / positionImg.height) * 100
      if (scrollProcent < 0) {
        globalBgP.bgPosition[0].y = `calc(${50 + scrollProcent / 2}% + ${
          -3 * scrollBgStep * scrollProcent
        }vh)`
        globalBgP.bgPosition[1].y = `calc(${50 + scrollProcent / 2}% + ${
          -4 * scrollBgStep * scrollProcent
        }vh)`
        globalBgP.bgPosition[2].y = `calc(${50 + scrollProcent / 2}% + ${
          -5 * scrollBgStep * scrollProcent
        }vh)`
        globalBgP.bgPosition[3].y = `calc(${50 + scrollProcent / 2}% + ${
          -6 * scrollBgStep * scrollProcent
        }vh)`
        globalBgP.bgPosition[4].y = `calc(${50 + scrollProcent / 2}% + ${
          -7 * scrollBgStep * scrollProcent
        }vh)`
      } else {
        globalBgP.bgPosition[0].y =
          globalBgP.bgPosition[1].y =
          globalBgP.bgPosition[2].y =
          globalBgP.bgPosition[3].y =
          globalBgP.bgPosition[4].y =
            `50%`
      }
      renderBg(root, globalBgP)
    }
  }

  let initBackground = () => {
    resizeImg()
    scrollBackground()
  }
  initBackground() //Init background options

  window.addEventListener('mousemove', mouse_monitor)
  window.addEventListener('resize', resizeImg)
  window.addEventListener('scroll', scrollBackground)

  return () => {
    window.removeEventListener('mousemove', mouse_monitor)
    window.removeEventListener('resize', resizeImg)
    window.removeEventListener('scroll', scrollBackground)
  }
}
