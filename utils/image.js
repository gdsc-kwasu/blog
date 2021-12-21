import canvas, { loadImage } from 'canvas'
import path from 'path'
import * as StackBlur from 'stackblur-canvas'

export const getImageDataURL = async (imageUrl) => {
  const absPath = path.join(process.cwd(), 'public', imageUrl)
  const image = await loadImage(absPath)

  const shrinkWidth = 10
  const shrinkHeight = Math.floor((shrinkWidth / image.width) * image.height)

  const cv = canvas.createCanvas(shrinkWidth, shrinkHeight)
  const context = cv.getContext('2d')
  context.drawImage(image, 0, 0, shrinkWidth, shrinkHeight)
  StackBlur.canvasRGB(cv, 0, 0, shrinkWidth, shrinkHeight, 5)

  return cv.toDataURL()
}
