// Easy parallax
export const parallaxBG = (element: HTMLDivElement, range = 20) => {
  const parallax = () => {
    const rect = element.getBoundingClientRect()
    const H = window.innerHeight
    const h = rect.height
    if (rect.top >= -1 * h && rect.bottom <= H + h) {
      const t = rect.top
      const dh = range / 50
      const pos = (0.5 - (t + h) / (H + h)) * dh * h
      element.style.backgroundPositionY = `calc(50% ${
        pos < 0 ? '- ' + -1 * pos : '+ ' + pos
      }px)`
    }

    //1.5 default image aspect ratio
    if (rect.width / rect.height >= 1.5) {
      element.classList.add('ratio-horizontal')
    } else {
      element.classList.remove('ratio-horizontal')
    }
  }
  parallax()
  window.addEventListener('scroll', parallax)
  return () => window.removeEventListener('scroll', parallax)
}

export const parallaxHorizontalBG = (
  element: HTMLDivElement,
  range: number = 20,
  startPosition: string = '50%'
) => {
  const parallax = () => {
    const rect = element.getBoundingClientRect()
    const H = window.innerHeight
    const h = rect.height
    if (rect.top >= -1 * h && rect.bottom <= H + h) {
      const t = rect.top
      const dh = range / 50
      const pos = (0.5 - (t + h) / (H + h)) * dh * h
      element.style.backgroundPositionX = `calc(${startPosition} ${
        pos < 0 ? '+ ' + -1 * pos : '- ' + pos
      }px)`
    }
  }
  parallax()
  window.addEventListener('scroll', parallax)
  return () => window.removeEventListener('scroll', parallax)
}
