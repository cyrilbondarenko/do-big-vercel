import { BasePayload } from 'payload'
import { UploadedMedia, uploadMedia, uploadMediaBatch } from '../utils/media'

export const seedContactPage = async (payload: BasePayload) => {
  const background = await uploadMedia(payload, 'contactPage/background.png', 'Background')

  const icons: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'contactPage/icons',
    [
      { filename: 'star.svg', alt: 'Star' },
      { filename: 'communication.svg', alt: 'Communication' },
      { filename: 'like.svg', alt: 'Like' },
      { filename: 'bag.svg', alt: 'Bag' },
    ],
  )

  await payload.updateGlobal({
    slug: 'contactPage',
    data: {
      hero: {
        background: background?.id,
        title: 'let’s...',
        stats: [
          { icon: icons[0], title: 'Publish Your Game'},
          { icon: icons[1], title: 'Promote Your Brand'},
          { icon: icons[2], title: 'Partner as Creators'},
          { icon: icons[3], title: 'Build Your Career'},
        ]
      },
    },
  })
}
