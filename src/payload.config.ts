import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Games } from './collections/Games'
import { Emails } from './collections/Emails'
import { LandingPage } from './globals/LandingPage'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { GamesPage } from '@/globals/GamesPage'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { TeamMembers } from '@/collections/Team'
import { AboutPage } from '@/globals/AboutPage'
import { CareersPage } from '@/globals/CareersPage'
import { MediaPage } from '@/globals/MediaPage'
import { ContactSection } from '@/globals/ContactSection'
import { News } from '@/collections/News'
import { CasesPage } from '@/globals/CasesPage'
import { ContactPage } from '@/globals/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Games, Emails, TeamMembers, News],
  globals: [LandingPage, GamesPage, AboutPage, CareersPage, MediaPage, CasesPage, ContactSection, ContactPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.DEFAULT_FROM_ADDRESS!,
    defaultFromName: process.env.DEFAULT_FROM_NAME!,
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
})
