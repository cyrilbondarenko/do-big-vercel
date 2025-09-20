import { BasePayload } from 'payload'
import { uploadMedia, uploadMediaBatch, UploadedMedia } from '../utils/media'

export const seedCasesPage = async (payload: BasePayload) => {
  const background = await uploadMedia(payload, 'casesPage/background.png', 'Background')

  const casesIconsData = [
    { filename: 'diamond.svg', alt: 'Diamond' },
    { filename: 'man.svg', alt: 'Man' },
  ]
  const icons: UploadedMedia[] = await uploadMediaBatch(payload, 'casesPage/icons', casesIconsData)

  await payload.updateGlobal({
    slug: 'casesPage',
    data: {
      hero: {
        background: background?.id,
        title: 'case studies: Proven Growth & Profit Wins',
        stats: [
          { icon: icons[0]?.id, title: 'average roi', value: '25%' },
          { icon: icons[1]?.id, title: 'players made at least one in-game purchase', value: '40%' },
        ],
      },
    },
  })
}

