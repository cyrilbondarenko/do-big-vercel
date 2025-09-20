import { getPayload } from 'payload'
import { clearCollections, clearGlobals } from './seed/cleanup'
import { seedLandingPage } from './seed/sections/landingPage'
import { seedGames } from './seed/collections/games'
import { seedNews } from './seed/collections/news'
import { seedContactSection } from './seed/sections/contactSection'
import { seedGamesPage } from './seed/sections/gamesPage'
import { seedCasesPage } from './seed/sections/casesPage'
import { seedTeamMembers } from './seed/collections/teamMembers'
import { seedAboutPage } from './seed/sections/aboutPage'
import { seedCareersPage } from './seed/sections/careersPage'
import { seedMediaPage } from '@/seed/sections/mediaPage'
import { seedContactPage } from '@/seed/sections/contactPage'

const seed = async () => {
  const { default: config } = await import('./payload.config')
  const payload = await getPayload({ config })

  try {
    // Cleanup
    await clearGlobals(payload)
    await clearCollections(payload)

    // Seed sections/pages
    await seedLandingPage(payload)

    // Collections
    const { gamesMedia } = await seedGames(payload)
    await seedNews(payload, { gamesMedia })
    await seedTeamMembers(payload)

    // Other pages
    await seedContactSection(payload)
    await seedGamesPage(payload)
    await seedCasesPage(payload)
    await seedAboutPage(payload)
    await seedCareersPage(payload)
    await seedMediaPage(payload)
    await seedContactPage(payload)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const run = async () => {
  await seed()
  process.exit(0)
}

run()
