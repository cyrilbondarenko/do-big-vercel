import { BasePayload } from 'payload'
import { uploadMediaBatch, UploadedMedia } from '../utils/media'

export const seedContactSection = async (payload: BasePayload) => {
  const starsData = [
    { filename: 'stars (1).svg', alt: 'Star' },
    { filename: 'stars (2).svg', alt: 'Star' },
    { filename: 'stars (3).svg', alt: 'Star' },
    { filename: 'stars (4).svg', alt: 'Star' },
    { filename: 'stars (5).svg', alt: 'Star' },
  ]
  const starsMedia: UploadedMedia[] = await uploadMediaBatch(payload, 'contactSection', starsData)

  await payload.updateGlobal({
    slug: 'contactSection',
    data: {
      ticker: {
        items: [
          { text: "Let's talk", icon: starsMedia[0] ? starsMedia[0].id : undefined },
          { text: 'We bring your ideas to success', icon: starsMedia[1] ? starsMedia[1].id : undefined },
          { text: 'Exit strategy', icon: starsMedia[2] ? starsMedia[2].id : undefined },
        ],
      },
      title: 'connect with us',
      email: 'info@dobigstudios.com',
      text: 'or write your message here',
      buttonText: 'Message Us',
    },
  })
}
