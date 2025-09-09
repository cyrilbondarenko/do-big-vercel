import {postgresAdapter} from '@payloadcms/db-postgres'
import {payloadCloudPlugin} from '@payloadcms/payload-cloud'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import sharp from 'sharp'

import {Users} from './collections/Users'
import {Media} from './collections/Media'
import {Games} from "./collections/Games";
import {Emails} from "./collections/Emails";
import {LandingPage} from "./globals/LandingPage";
import {vercelBlobStorage} from "@payloadcms/storage-vercel-blob";
import { GamesPage } from '@/globals/GamesPage'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { TeamMembers } from '@/collections/Team'
import { AboutPage } from '@/globals/AboutPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media, Games, Emails, TeamMembers],
    globals: [
        LandingPage, GamesPage, AboutPage
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
        vercelBlobStorage({
            enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
            collections: {
                media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
    email: nodemailerAdapter({
        defaultFromAddress: 'morris58@ethereal.email',
        defaultFromName: 'Payload',
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
