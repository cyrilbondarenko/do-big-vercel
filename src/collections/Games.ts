import {CollectionConfig} from "payload";

export const Games: CollectionConfig = {
    slug: "games",
    fields: [
        {
            name: "title",
            type: "text",
            label: "Default Title",
                  admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "description",
            type: "text",
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "visits",
            type: "number",
            label: "Estimated visits",
                  admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "players",
            type: "number",
            label: "Estimated players",
                  admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "href",
            type: "text",
                  admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "image",
            label: "Estimated image",
            type: "upload",
            relationTo: "media",
                  admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "place",
            type: "text",
            label: "Place ID",
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "latestData",
            type: "checkbox",
            admin: {
                description: "This will replace these values with the latest data from Roblox's API"
            }
        },
    ],
    access: {
        read: () => true,
    }
}