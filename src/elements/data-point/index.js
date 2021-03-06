import { createSVGElement } from '../helpers'

export default function createDataPoint(x, y, maxX, maxY) {
  const bar = createSVGElement('line')
  bar.setAttribute('x1', `${x/maxX * 100}%`)
  bar.setAttribute('y1', `${(1 - y/maxY) * 100}%`)
  bar.setAttribute('x2', `${x/maxX * 100}%`)
  bar.setAttribute('y2', `${ 100}%`)
  bar.classList.add('bar')

  return bar
}
