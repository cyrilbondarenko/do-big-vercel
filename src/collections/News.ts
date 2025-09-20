import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
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
      name: 'text',
      type: 'richText',
      admin: {
        description: 'Lorem ipsum',
      },
    },
    {
      name: 'date',
      type: 'date',
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
  access: {
    read: () => true,
  }
}
