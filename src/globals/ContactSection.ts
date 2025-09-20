import { GlobalConfig } from 'payload'

export const ContactSection: GlobalConfig = {
  slug: 'contactSection',
  fields: [
    // Ticker
    {
      name: "ticker",
      type: "group",
      label: "Ticker Section",
      fields: [
        {
          name: "items",
          type: "array",
          admin: {
            description: "Lorem ipsum"
          },
          fields: [
            {
              name: "text",
              type: "text",
              admin: {
                description: "Lorem ipsum"
              }
            },
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
              admin: {
                description: "Lorem ipsum"
              }
            },
          ],
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Lorem ipsum',
      },
    },
    {
      name: 'email',
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
    {
      name: 'buttonText',
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
