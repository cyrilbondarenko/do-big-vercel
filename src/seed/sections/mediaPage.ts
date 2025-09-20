import { BasePayload } from 'payload'
import { UploadedMedia, uploadMedia, uploadMediaBatch } from '../utils/media'

export const seedMediaPage = async (payload: BasePayload) => {
  const background = await uploadMedia(payload, 'careersPage/background.png', 'Background')

  const mediaIconsData = [
    { filename: 'fire_purple.svg', alt: 'Fire' },
    { filename: 'fire.svg', alt: 'Fire' },
  ]
  const icons: UploadedMedia[] = await uploadMediaBatch(payload, 'mediaPage/icons', mediaIconsData)

  await payload.updateGlobal({
    slug: 'mediaPage',
    data: {
      hero: {
        background: background ? background.id : undefined,
        title: 'WHAT’S HAPPENING',
        stats: [
          { icon: icons[0] ? icons[0].id : undefined, title: 'total play sessions', value: '55B' },
          { icon: icons[1] ? icons[1].id : undefined, title: 'playing now', value: '2,6m' },
        ],
      },
    },
  })
}
