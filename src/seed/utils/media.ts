import { BasePayload } from 'payload'
import path from 'node:path'
import * as fs from 'node:fs'

export const detectMimeType = (filename: string): string => {
  const lower = filename.toLowerCase()
  if (lower.endsWith('.svg')) return 'image/svg+xml'
  if (lower.endsWith('.webp')) return 'image/webp'
  if (lower.endsWith('.png')) return 'image/png'
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg'
  if (lower.endsWith('.mp4')) return 'video/mp4'
  return 'application/octet-stream'
}

export type UploadedMedia = {
  id: number
}

export const uploadMedia = async (
  payload: BasePayload,
  relativeFilename: string,
  alt: string,
): Promise<UploadedMedia | null> => {
  const filePath = path.join(process.cwd(), 'media/seedFiles', relativeFilename)

  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`)
    return null
  }

  const fileBuffer = fs.readFileSync(filePath)
  const stats = fs.statSync(filePath)
  const mimetype = detectMimeType(relativeFilename)

  const created = await payload.create({
    collection: 'media',
    data: { alt, filename: path.basename(relativeFilename) },
    file: {
      data: fileBuffer,
      mimetype,
      name: path.basename(relativeFilename),
      size: stats.size,
    },
  })

  return created as unknown as UploadedMedia
}

export const uploadMediaBatch = async (
  payload: BasePayload,
  baseDir: string,
  items: Array<{ filename: string; alt: string }>,
): Promise<UploadedMedia[]> => {
  const results: UploadedMedia[] = []
  for (const item of items) {
    const created = await uploadMedia(payload, path.posix.join(baseDir, item.filename), item.alt)
    if (created) results.push(created)
  }
  return results
}
