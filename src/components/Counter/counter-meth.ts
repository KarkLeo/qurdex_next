import scrollAnim from 'src/tools/scrollAnimation'
import { COUNT_VALUE_CLASS } from './Count/Count'

export default (root: HTMLDivElement) => {
  let startCount = () => {
    console.log('Start count')
    document.querySelectorAll(`.${COUNT_VALUE_CLASS}`).forEach((item) => {
      const maxValue: number = Number((item as HTMLElement).dataset.count || 0)
      const step = Math.ceil(maxValue / 100)
      let value = 0

      setTimeout(function timeOut() {
        ;(item as HTMLElement).innerText = String(value)
        value += step
        if (value <= maxValue) setTimeout(timeOut, 10)
      }, 10)
    })
  }

  return scrollAnim({
    reverse: false,
    elements: [root],
    offsetTop: window.innerHeight / 2 - 100,
    offsetBottom: window.innerHeight / 2 - 100,
    callback: () => startCount(),
  })
}
