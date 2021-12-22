import path from 'path'
import sharp from 'sharp'

export const getImagePlaceholderDataURL = async (imagePath) => {
  const absPath = path.posix.join(process.cwd(), 'public', imagePath)

  const buf = await sharp(absPath)
    .resize({
      width: 10,
      height: 10,
      fit: 'outside',
      withoutEnlargement: true,
    })
    .blur(10)
    .toFormat('png')
    .toBuffer()

  return `data:image/png;base64,${buf.toString('base64')}`
}
