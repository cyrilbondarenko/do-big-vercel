import { GlobalConfig } from 'payload'

export const Globals: GlobalConfig = {
  slug: 'globals',
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Lorem ipsum"
      }
    },
    {
      name: 'copyright',
      type: 'text',
      admin: {
        description: 'Lorem ipsum',
      },
    },
  ],
  access: {
    read: () => true,
  }
}
