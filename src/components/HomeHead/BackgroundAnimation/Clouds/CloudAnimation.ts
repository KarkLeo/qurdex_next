const BASE_IMAGE_URL = '/clouds/'

const srcImages = [
  'cloud-1-min.png',
  'cloud-2-min.png',
  'cloud-3-min.png',
  'cloud-4-min.png',
  'cloud-5-min.png',
]

const srcImageSet = srcImages.map((i) => BASE_IMAGE_URL + i)

// ===== Utils =====
const randomGen = (min: number, max: number): number =>
  Math.random() * (max - min) + min

interface OscillationParams {
  A: number
  w: number
  phi: number
}

interface OscillationPosition {
  Ax: number
  Ay: number
  w: number
  phiA: number
  get phiB(): number
  get phiC(): number
}

const oscillation = (t: number, { A, w, phi }: OscillationParams): number =>
  A * Math.cos(((t * w + phi) * Math.PI) / 180) // todo use https://github.com/nlra/fmath.js?files=1
const oscillationPosX = (
  t: number,
  A: number,
  w: number,
  phi: number
): number => A * Math.cos(((t * w + phi) * Math.PI) / 180) - 50
const oscillationPosY = (
  t: number,
  A: number,
  w: number,
  phi: number
): number => A * Math.sin(((t * w + phi) * Math.PI) / 180) - 80

type ImagesElement = HTMLImageElement[]
type ImagesLink = string[]

// ===== Cloud class =====

class Cloud {
  spinA: HTMLImageElement
  spinB: HTMLImageElement
  spinC: HTMLImageElement

  constructor(imgs: ImagesElement, srcAr: ImagesLink) {
    this.spinA = imgs[0]
    this.spinB = imgs[1]
    this.spinC = imgs[2]

    const setSrc = (img: HTMLImageElement, scrAr: string[]) => {
      img.src = srcAr[Math.round(randomGen(0, scrAr.length - 1))]
    }

    setSrc(this.spinA, srcAr)
    setSrc(this.spinB, srcAr)
    setSrc(this.spinC, srcAr)
  }

  widthA: number = randomGen(70, 160)
  widthB: number = randomGen(70, 160)
  widthC: number = randomGen(70, 160)

  cWidth: OscillationParams = {
    A: randomGen(2, 40),
    w: randomGen(0.005, 0.05),
    phi: randomGen(0, 360),
  }
  getWidth(t: number): number {
    return (100 + oscillation(t, this.cWidth)) / 100
  }

  cHeight: OscillationParams = {
    A: randomGen(2, 40),
    w: randomGen(0.005, 0.05),
    phi: randomGen(0, 360),
  }
  getHeight(t: number): number {
    return (100 + oscillation(t, this.cHeight)) / 100
  }

  cRotate: OscillationParams = {
    A: randomGen(1, 10),
    w: randomGen(0.005, 0.05),
    phi: randomGen(0, 360),
  }
  getRotate(t: number): string {
    return oscillation(t, this.cRotate) + 'deg'
  }

  cPosition: OscillationPosition = {
    Ax: 70,
    Ay: 60,
    w: randomGen(0.001, 0.005),
    phiA: randomGen(0, 360),
    get phiB() {
      return this.phiA + 120
    },
    get phiC() {
      return this.phiA + 240
    },
  }
  getPositionX(t: number, phi: number): string {
    let posX = oscillationPosX(t, this.cPosition.Ax, this.cPosition.w, phi)
    return `calc(${posX}vw ${posX < 0 ? '- ' + Math.abs(posX) : '+ ' + posX}%)`
  }
  getPositionY(t: number, phi: number): string {
    let posY = oscillationPosY(t, this.cPosition.Ay, this.cPosition.w, phi)
    return `${posY}%`
  }
}

const createImageElement = (index: number, root: HTMLDivElement) => {
  const imgElement = document.createElement('img')
  imgElement.classList.add('clouds', `cloud--${index}`)
  imgElement.setAttribute('alt', 'clouds')
  root.append(imgElement)
  return imgElement
}

const createImageGroup = (index: number, root: HTMLDivElement) => {
  const startIndex = 1 + index * 3
  return [
    createImageElement(startIndex, root),
    createImageElement(startIndex + 1, root),
    createImageElement(startIndex + 2, root),
  ]
}

export default (root: HTMLDivElement) => {
  const initialCloudsAnimation = (cloud: Cloud) => {
    const timerId = window.requestAnimationFrame(function tick() {
      const t = Date.now()
      let translateX = `translateX(${cloud.getPositionX(
        t,
        cloud.cPosition.phiA
      )})`
      let translateY = `translateY(${cloud.getPositionY(
        t,
        cloud.cPosition.phiA
      )})`
      const scaleX = `scaleX(${cloud.getWidth(t)})`
      const scaleY = `scaleY(${cloud.getHeight(t)})`
      const rotate = `rotate(${cloud.getRotate(t)})`
      cloud.spinA.setAttribute(
        'style',
        `
          width: ${cloud.widthA}vw;
          transform: 
            ${translateX}
            ${translateY}
            ${scaleX}
            ${scaleY}
            ${rotate}
        `
      )
      translateX = `translateX(${cloud.getPositionX(t, cloud.cPosition.phiB)})`
      translateY = `translateY(${cloud.getPositionY(t, cloud.cPosition.phiB)})`
      cloud.spinB.setAttribute(
        'style',
        `
          width: ${cloud.widthB}vw;
          transform: 
            ${translateX}
            ${translateY}
            ${scaleX}
            ${scaleY}
            ${rotate}
        `
      )
      translateX = `translateX(${cloud.getPositionX(t, cloud.cPosition.phiC)})`
      translateY = `translateY(${cloud.getPositionY(t, cloud.cPosition.phiC)})`
      cloud.spinC.setAttribute(
        'style',
        `
          width: ${cloud.widthC}vw;
          transform: 
            ${translateX}
            ${translateY}
            ${scaleX}
            ${scaleY}
            ${rotate}
        `
      )

      window.requestAnimationFrame(tick)
    })
    return timerId
  }

  const imgs = [
    createImageGroup(0, root),
    createImageGroup(1, root),
    createImageGroup(2, root),
  ]

  const timers = imgs.map((imgCircle) =>
    initialCloudsAnimation(new Cloud(imgCircle, srcImageSet))
  )

  return () => {
    timers.forEach((timer) => window.cancelAnimationFrame(timer))
  }
}
