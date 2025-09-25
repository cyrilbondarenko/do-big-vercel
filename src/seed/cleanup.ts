import { BasePayload } from 'payload'

type GlobalSlug =
  | 'landingPage'
  | 'contactSection'
  | 'gamesPage'
  | 'casesPage'
  | 'aboutPage'
  | 'careersPage'
  | 'mediaPage'
  | 'contactPage'
  | 'globals'
  | 'privacyPolicyPage'

type CollectionSlug = 'games' | 'news' | 'teamMembers' | 'media'

export const clearGlobals = async (payload: BasePayload) => {
  const resets: Array<{ slug: GlobalSlug; data: Record<string, unknown> }> = [
    {
      slug: 'landingPage',
      data: {
        hero: {},
        portfolio: { items: [] },
        hits: {},
        cases: {},
        buyout: { items: [] },
      },
    },
    {
      slug: 'globals',
      data: {
        logo: null,
        logoDark: null,
        copyright: '',
      },
    },
    {
      slug: 'contactSection',
      data: { ticker: { items: [] }, title: '', email: '', text: '', buttonText: '' },
    },
    { slug: 'gamesPage', data: { hero: {} } },
    { slug: 'casesPage', data: { hero: { stats: [] } } },
    {
      slug: 'aboutPage',
      data: {
        hero: { stats: [] },
        blocks: [],
        values: { title: '', items: [] },
        investors: { title: '', items: [] },
      },
    },
    {
      slug: 'careersPage',
      data: {
        hero: { stats: [] },
        creators: {},
        benefits: { items: [] },
        positions: { positions: [] },
      },
    },
    { slug: 'mediaPage', data: { hero: {} } },
    { slug: 'contactPage', data: { hero: {} } },
    { slug: 'privacyPolicyPage', data: { title: '', date: null, content: null } },
  ]

  for (const r of resets) {
    try {
      await payload.updateGlobal({ slug: r.slug, data: r.data })
    } catch (e) {
      console.warn(`Skipping clear for global ${r.slug}:`, (e as Error)?.message)
    }
  }
}

export const clearCollections = async (payload: BasePayload) => {
  const collections: CollectionSlug[] = ['games', 'news', 'teamMembers', 'media']
  for (const collection of collections) {
    try {
      await payload.delete({ collection, where: {} })
    } catch (e) {
      console.warn(`Skipping clear for collection ${collection}:`, (e as Error)?.message)
    }
  }
}
