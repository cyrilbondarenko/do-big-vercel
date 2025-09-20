import { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contactPage',
  fields: [
    // Header section
    {
      name: 'hero',
      type: 'group',
      label: 'Header',
      fields: [
        {
          name: 'background',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'stats',
          type: 'array',
          admin: {
            description: 'Lorem ipsum',
          },
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Lorem ipsum',
              },
            },
            {
              name: 'title',
              type: 'text',
              admin: {
                description: 'Lorem ipsum',
              },
            },
            {
              name: 'value',
              type: 'text',
              admin: {
                description: 'Lorem ipsum',
              },
            },
          ]
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
