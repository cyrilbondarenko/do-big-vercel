import { BasePayload } from 'payload'
import { uploadMedia } from '../utils/media'

export const seedGamesPage = async (payload: BasePayload) => {
  const bg = await uploadMedia(payload, 'gamesPage/gamesPageBackground.png', 'Background')
  await payload.updateGlobal({
    slug: 'gamesPage',
    data: { hero: { background: bg ? bg.id : undefined } },
  })
}
