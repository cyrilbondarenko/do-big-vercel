import { BasePayload } from 'payload'
import { uploadMediaBatch, UploadedMedia } from '../utils/media'

export const seedTeamMembers = async (payload: BasePayload) => {
  const teamImageData = [
    { filename: '1.png', alt: 'Team Member' },
    { filename: '2.png', alt: 'Team Member' },
    { filename: '3.png', alt: 'Team Member' },
    { filename: '4.png', alt: 'Team Member' },
    { filename: '5.png', alt: 'Team Member' },
    { filename: '6.png', alt: 'Team Member' },
    { filename: '7.png', alt: 'Team Member' },
  ]
  const teamMedia: UploadedMedia[] = await uploadMediaBatch(payload, 'teamCollection', teamImageData)

  const teamData = [
    { photo: teamMedia[0]?.id, name: 'Julia Parker', position: 'Founder', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[1]?.id, name: 'Liam Thompson', position: 'Level Artist', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[2]?.id, name: 'Joe Bridges', position: 'Sound Engineer', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[3]?.id, name: 'Maxwell Carter', position: 'Game Designer', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[4]?.id, name: 'Lucas Reed', position: 'Quality Assurance Tester', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[5]?.id, name: 'Noah Bennett', position: 'Narrative Writer', linkedIn: 'https://www.linkedin.com/' },
    { photo: teamMedia[6]?.id, name: 'Oliver Hayes', position: 'Gameplay Programmer', linkedIn: 'https://www.linkedin.com/' },
  ]

  for (const member of teamData) {
    await payload.create({ collection: 'teamMembers', data: member })
  }
}

