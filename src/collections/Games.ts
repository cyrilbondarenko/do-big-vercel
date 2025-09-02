import {CollectionConfig} from "payload";

export const Games: CollectionConfig = {
    slug: "games",
    fields: [
        {
            name: "title",
            type: "text",
            label: "Default Title",
            required: true,
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
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "players",
            type: "number",
            label: "Estimated players",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "href",
            type: "text",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "image",
            label: "Estimated image",
            type: "upload",
            relationTo: "media",
            required: true,
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