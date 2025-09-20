import { BasePayload } from 'payload'
import { UploadedMedia } from '../utils/media'

export const seedNews = async (
  payload: BasePayload,
  deps?: { gamesMedia?: UploadedMedia[] },
) => {
  const pickImage = (idx: number) => deps?.gamesMedia?.[idx]?.id

  const text = {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,

      "children": [

        {
          "type": "paragraph",
          "format": "start",
          "indent": 0,
          "version": 1,

          "children": [

            {
              "mode": "normal",
              "text": "When we first started testing ideas for our games, the art was anything but polished. Characters were blocky, colors clashed, and the worlds looked more like placeholders than finished products. But instead of hiding these “ugly” prototypes, we put them in players’ hands — and the reaction surprised us. The rough edges made the games feel approachable, editable, and alive. What began as quick sketches to validate mechanics soon turned into one of our most powerful marketing tools: players weren’t just testing features, they were obsessing over the raw, unfinished worlds and sharing them. When we first started testing ideas for our games, the art was anything but polished. Characters were blocky, colors clashed, and the worlds looked more like placeholders than finished products. But instead of hiding these “ugly” prototypes, we put them in players’ . The rough edges made the games feel approachable, editable, and alive.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr",
          "textStyle": "",
          "textFormat": 0
        },

        {
          "tag": "h2",
          "type": "heading",
          "format": "start",
          "indent": 0,
          "version": 1,

          "children": [

            {
              "mode": "normal",
              "text": "From Placeholder Art to Player Obsession",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },

        {
          "type": "paragraph",
          "format": "start",
          "indent": 0,
          "version": 1,

          "children": [

            {
              "mode": "normal",
              "text": "When we first started testing ideas for our games, the art was anything but polished. Characters were blocky, colors clashed, and the worlds looked more like placeholders than finished products. But instead of hiding these “ugly” prototypes, we put them in players’ hands — and the reaction surprised us. The rough edges made the games feel approachable, editable, and alive. What began as quick sketches to validate mechanics soon turned into one of our most powerful marketing tools: players weren’t just testing features, they were obsessing over the raw, unfinished worlds and sharing them. When we first started testing ideas for our games, the art was anything but polished. Characters were blocky, colors clashed, and the worlds looked more like placeholders than finished products. But instead of hiding these “ugly” prototypes, we put them in players’ . The rough edges made the games feel approachable, editable, and alive.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr",
          "textStyle": "",
          "textFormat": 0
        },

        {
          "tag": "h2",
          "type": "heading",
          "format": "start",
          "indent": 0,
          "version": 1,

          "children": [

            {
              "mode": "normal",
              "text": "From Placeholder Art",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr"
        },

        {
          "type": "paragraph",
          "format": "start",
          "indent": 0,
          "version": 1,

          "children": [

            {
              "mode": "normal",
              "text": "When we first started testing ideas for our games, the art was anything but polished. Characters were blocky, colors clashed, and the worlds looked more like placeholders than finished products. But instead of hiding these “ugly” prototypes, we put them in players’ hands — and the reaction surprised us. The rough edges made the games feel approachable, editable, and alive. What began as quick sketches to validate mechanics soon turned into one of our most powerful marketing tools: players weren’t just testing features, they were obsessing over the raw, unfinished worlds.",
              "type": "text",
              "style": "",
              "detail": 0,
              "format": 0,
              "version": 1
            }
          ],
          "direction": "ltr",
          "textStyle": "",
          "textFormat": 0
        }
      ],
      "direction": "ltr"
    }
  }

  const blogData = [
    {
      name: 'From Placeholder Art to Player Obsession',
      description:
        "DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games.",
      image: pickImage(0),
      date: '01/23/2025',
      text: text
    },
    {
      name: "From Placeholder Art to Player Obsession: How Our 'Ugly' Prototypes Became Our Best Marketing Tool",
      description:
        "DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games.",
      image: pickImage(1),
      date: '01/23/2025',
      text: text
    },
    {
      name: 'The 2 AM Bug That Accidentally Created Our Most Popular Game Mode',
      description:
        "DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games.",
      image: pickImage(2),
      date: '01/23/2025',
      text: text
    },
  ]

  for (const newsData of blogData) {
    // @ts-ignore
    await payload.create({ collection: 'news', data: newsData })
  }
  for (const newsData of blogData) {
    // @ts-ignore
    await payload.create({ collection: 'news', data: newsData })
  }
  for (const newsData of blogData) {
    // @ts-ignore
    await payload.create({ collection: 'news', data: newsData })
  }
  for (const newsData of blogData) {
    // @ts-ignore
    await payload.create({ collection: 'news', data: newsData })
  }
}

