const { writeFile } = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

const IMAGE_MAX_SIZE = 1024

const optimazeImages = async (logLevel = 0) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Not running in production, abort.')
    return
  }

  const { default: imagemin } = await import('imagemin')
  const { default: imageminGifsicle } = await import('imagemin-gifsicle')
  const { default: imageminJpegtran } = await import('imagemin-jpegtran')
  const { default: imageminPngquant } = await import('imagemin-pngquant')
  const { default: imageminWebp } = await import('imagemin-webp')
  const { globby } = await import('globby')

  const images = await globby('public/images/articles/**/*.{jpg,png,gif,webp}')
  const optImagePaths = await Promise.all(
    images.map(async (image) => {
      const imagePath = path.posix.join(process.cwd(), image)
      const buf = await sharp(imagePath)
        .resize({
          width: IMAGE_MAX_SIZE,
          height: IMAGE_MAX_SIZE,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toBuffer()

      const outBuf = await imagemin.buffer(buf, {
        plugins: [
          imageminPngquant(),
          imageminGifsicle(),
          imageminWebp(),
          imageminJpegtran(),
        ],
      })

      await writeFile(imagePath, outBuf)
      if (logLevel > 1) {
        console.log('Image optimized: %s', imagePath)
      }
      return imagePath
    })
  )

  if (logLevel >= 1) {
    console.log('All images optimized')
  }

  return optImagePaths
}

module.exports = { optimazeImages }

if (require.main === module) {
  optimazeImages(+process.argv[2] || 0)
}
