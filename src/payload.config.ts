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
import { Globals } from '@/globals/Globals'
import { s3Storage } from '@payloadcms/storage-s3'
import { PrivacyPolicyPage } from '@/globals/PrivacyPolicyPage'

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
  globals: [
    Globals,
    LandingPage,
    GamesPage,
    AboutPage,
    CareersPage,
    MediaPage,
    CasesPage,
    ContactSection,
    ContactPage,
    PrivacyPolicyPage
  ],
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
    s3Storage({
      enabled: !!process.env.S3_BUCKET,
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
        endpoint: process.env.S3_ENDPOINT!,
      },
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
