import { BasePayload } from 'payload'
import { uploadMediaBatch, UploadedMedia } from '../utils/media'

export const seedGlobals = async (payload: BasePayload) => {
  const logosData = [
    { filename: 'logo.svg', alt: 'Logo' },
    { filename: 'logo_dark.svg', alt: 'Dark Logo' },
  ]
  const logosMedia: UploadedMedia[] = await uploadMediaBatch(payload, 'globals', logosData)

  await payload.updateGlobal({
    slug: 'globals',
    data: {
      logo: logosMedia[0] ? logosMedia[0].id : undefined,
      logoDark: logosMedia[1] ? logosMedia[1].id : undefined,
      copyright: "Mobile Game Advertising & More Inc, Copyright 2025"
    },
  })
}
