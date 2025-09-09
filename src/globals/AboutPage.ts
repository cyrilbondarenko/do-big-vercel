import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'aboutPage',
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
          name: 'yearsValue',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'yearsText',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'membersValue',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'membersText',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
      ],
    },
    // Story section
    {
      name: 'story',
      type: 'group',
      label: 'Story',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'text',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
      ],
    },
    // Mission section
    {
      name: 'mission',
      type: 'group',
      label: 'Mission',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'text',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
      ],
    },
    // Values section
    {
      name: 'values',
      type: 'group',
      label: 'Values Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'items',
          type: 'array',
          admin: {
            description: 'Lorem ipsum',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              admin: {
                description: 'Lorem ipsum',
              },
            },
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'Lorem ipsum',
              },
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Lorem ipsum',
              },
            },
          ],
        },
      ],
    },
    // Investors section
    {
      name: 'investors',
      type: 'group',
      label: 'Investors Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Lorem ipsum',
          },
        },
        {
          name: 'items',
          type: 'array',
          admin: {
            description: 'Lorem ipsum',
          },
          fields: [
            {
              name: 'href',
              type: 'text',
              admin: {
                description: 'Lorem ipsum',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Lorem ipsum',
              },
            },
          ],
        },
      ],
    },
  ],
  access: {
    read: () => true,
  },
}
