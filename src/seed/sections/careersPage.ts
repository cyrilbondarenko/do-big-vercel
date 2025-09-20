import { BasePayload } from 'payload'
import { UploadedMedia, uploadMedia, uploadMediaBatch } from '../utils/media'

export const seedCareersPage = async (payload: BasePayload) => {
  const background = await uploadMedia(payload, 'careersPage/background.png', 'Background')

  const benefitsMedia: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'careersPage',
    [
      { filename: 'benefits1.svg', alt: 'Benefit' },
      { filename: 'benefits2.svg', alt: 'Benefit' },
      { filename: 'benefits3.svg', alt: 'Benefit' },
      { filename: 'benefits4.svg', alt: 'Benefit' },
    ],
  )

  const careersIcons: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'careersPage/icons',
    [
      { filename: 'globe.svg', alt: 'Globe' },
      { filename: 'medal.svg', alt: 'Medal' },
      { filename: 'sun.svg', alt: 'Sun' },
      { filename: 'bag.svg', alt: 'Bag' },
    ],
  )

  const careersMap: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'careersPage',
    [
      { filename: 'map.png', alt: 'Map' },
    ],
  )

  await payload.updateGlobal({
    slug: 'careersPage',
    data: {
      hero: {
        background: background?.id,
        title: 'Inside Do Big',
        stats: [
          { icon: careersIcons[0], title: 'of the team work remotly', value: '75%' },
          { icon: careersIcons[1], title: 'years average experience in gaming', value: '5' },
        ]
      },
      creators: {
        title: {
          text: "Creators Worldwide",
          icon: careersIcons[2],
        },
        subtitle: "At Do Big, our strength is our team.",
        text: "We bring together passionate creators with roots in UGC platforms like Roblox, Fortnite, and Minecraft, along with experienced professionals from technology, gaming, and entertainment. This mix of native builders and industry veterans gives us the ability to craft innovative worlds, scalable platforms, and community-driven gaming experiences that players love.",
        image: careersMap[0]
      },
      benefits: {
        title: 'benefits',
        subtitle: '*Benefits may vary based on location',
        items: [
          {
            name: 'remote work',
            description: 'Do your best work from anywhere in the world',
            icon: benefitsMedia[0] ? benefitsMedia[0].id : undefined,
          },
          {
            name: 'Education',
            description: 'Grow with learning support and savings programs',
            icon: benefitsMedia[1] ? benefitsMedia[1].id : undefined,
          },
          {
            name: 'Paid time off',
            description: 'Recharge with flexible vacation and personal days',
            icon: benefitsMedia[2] ? benefitsMedia[2].id : undefined,
          },
          {
            name: 'Healthcare',
            description: 'Stay healthy with comprehensive plans and parental leave',
            icon: benefitsMedia[3] ? benefitsMedia[3].id : undefined,
          },
        ],
      },
      positions: {
        title: {
          title: 'open positions',
          icon: careersIcons[3],
        },
        positions: [
          {
            title: "Senior Project Manager",
            employment: "Full Time, Remote",
            linkedIn: "https://www.linkedin.com/"
          },
          {
            title: "Game Designer",
            employment: "Full Time, Remote",
            linkedIn: "https://www.linkedin.com/"
          },
          {
            title: "Data Analyst",
            employment: "Full Time, Remote",
            linkedIn: "https://www.linkedin.com/"
          }
        ]
      }
    },
  })
}
