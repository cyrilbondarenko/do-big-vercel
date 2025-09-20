import { GlobalConfig } from 'payload'

export const CareersPage: GlobalConfig = {
  slug: 'careersPage',
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
          ],
        },
      ],
    },
    {
      name: 'creators',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
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
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'text',
          type: 'text',
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
    {
      name: 'benefits',
      type: 'group',
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
    {
      name: 'positions',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
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
        {
          name: 'positions',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'employment',
              type: 'text',
            },
            {
              name: 'linkedIn',
              type: 'text',
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
