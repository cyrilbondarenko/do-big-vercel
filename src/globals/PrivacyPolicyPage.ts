import { GlobalConfig } from 'payload'

export const PrivacyPolicyPage: GlobalConfig = {
  slug: 'privacyPolicyPage',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Add the title for the privacy policy page.',
      }
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        description: 'Add the title for the privacy policy page.',
      }
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Add the privacy policy content here.',
      }
    }
  ],
  access: {
    read: () => true,
  },
}
