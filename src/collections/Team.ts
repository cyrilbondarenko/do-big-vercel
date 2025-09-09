import {CollectionConfig} from "payload";

export const TeamMembers: CollectionConfig = {
    slug: "teamMembers",
    fields: [
        {
            name: "photo",
            label: "Photo",
            type: "upload",
            relationTo: "media",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "name",
            type: "text",
            label: "Default Name",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "position",
            type: "text",
            label: "Default Position",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "linkedIn",
            type: "text",
            label: "LinkedIn URL",
            admin: {
                description: "Lorem ipsum"
            }
        },
    ],
    access: {
        read: () => true,
    }
}