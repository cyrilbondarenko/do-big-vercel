import { BasePayload } from 'payload'
import { UploadedMedia, uploadMedia, uploadMediaBatch } from '../utils/media'

export const seedAboutPage = async (payload: BasePayload) => {
  const background = await uploadMedia(payload, 'aboutPage/background.png', 'Background')

  const aboutIconsData = [
    { filename: 'diamond.svg', alt: 'Diamond' },
    { filename: 'man.svg', alt: 'Man' },
    { filename: 'message.svg', alt: 'Message' },
    { filename: 'heart.svg', alt: 'Heart' },
  ]
  const icons: UploadedMedia[] = await uploadMediaBatch(payload, 'aboutPage/icons', aboutIconsData)

  const aboutImagesData = [
    { filename: '1.png', alt: 'Image' },
    { filename: '2.png', alt: 'Image' },
  ]
  const images: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'aboutPage/blocks',
    aboutImagesData,
  )

  const aboutValues = [
    { filename: '1.svg', alt: 'Value' },
    { filename: '2.svg', alt: 'Value' },
    { filename: '3.svg', alt: 'Value' },
    { filename: '4.svg', alt: 'Value' },
  ]
  const aboutValuesImages: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'aboutPage/values',
    aboutValues,
  )

  const portfolioData = [
    { filename: 'portfolio (1).png', alt: 'Portfolio' },
    { filename: 'portfolio (2).png', alt: 'Portfolio' },
    { filename: 'portfolio (3).png', alt: 'Portfolio' },
    { filename: 'portfolio (4).png', alt: 'Portfolio' },
    { filename: 'portfolio (5).png', alt: 'Portfolio' },
    { filename: 'portfolio (6).png', alt: 'Portfolio' },
    { filename: 'portfolio (7).png', alt: 'Portfolio' },
    { filename: 'portfolio (8).png', alt: 'Portfolio' },
  ]
  const portfolioMedia: UploadedMedia[] = await uploadMediaBatch(
    payload,
    'landingPage',
    portfolioData,
  )

  await payload.updateGlobal({
    slug: 'aboutPage',
    data: {
      hero: {
        background: background ? background.id : undefined,
        title: 'we’re do big studios',
        stats: [
          { icon: icons[0] ? icons[0].id : undefined, title: 'years of making big', value: '8' },
          { icon: icons[1] ? icons[1].id : undefined, title: 'remote team members', value: '20' },
        ],
      },
      blocks: [
        {
          image: images[0] ? images[0].id : undefined,
          title: { text: 'our Story', icon: icons[2] ? icons[2].id : undefined },
          subtitle: 'From a small, passionate team in 2016 to a globally recognized Roblox studio',
          description:
            'College friends started coding simple games in their dorm room. What began as weekend experiments soon exploded into a community of thousands. Today, Do Big studio creates worlds that bring millions of players together.',
        },
        {
          image: images[1] ? images[1].id : undefined,
          title: { text: 'Our mission', icon: icons[3] ? icons[3].id : undefined },
          subtitle: 'To be the leading hub for captivating games that bring people together',
          description:
            'We aspire to be every player’s favorite destination on Roblox. By crafting unforgettable, social experiences, we make sure every visit sparks connection, laughter, and lasting memories.',
        },
      ],
      values: {
        title: 'Our values',
        items: [
          {
            icon: aboutValuesImages[0].id,
            name: 'Player-First',
            description:
              'Always put the player experience at the center of every decision. We listen to feedback, empathize with diverse playstyles, and strive to exceed expectations.',
          },
          {
            icon: aboutValuesImages[1].id,
            name: 'Creativity & Innovation',
            description:
              'Encourage bold ideas and experimentation. We celebrate imaginative risk-taking, and continuously explore new mechanics, art styles, and storytelling approaches.',
          },
          {
            icon: aboutValuesImages[2].id,
            name: 'Quality & Polish',
            description:
              'Commit to high standards in art, design, and performance. A refined, bug-free experience not only delights players—it builds trust and loyalty.',
          },
          {
            icon: aboutValuesImages[3].id,
            name: 'Collaboration & Teamwork',
            description:
              'Break down silos across disciplines. By sharing knowledge, tools, and feedback early and often, we produce richer, more cohesive games.',
          },
        ],
      },
      investors: {
        title: 'Our Investors',
        items: portfolioMedia
          .slice(0, 8)
          .map((m) => ({ href: 'https://www.google.com', image: m.id as number })),
      },
    },
  })
}
