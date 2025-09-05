import { GlobalConfig } from 'payload'

export const GamesPage: GlobalConfig = {
  slug: 'gamesPage',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'background',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Lorem ipsum',
          },
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
