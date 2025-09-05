import {CollectionConfig} from "payload";

export const Emails: CollectionConfig = {
    slug: "emails",
    fields: [
        {
            name: "type",
            type: "text",
            label: "Type",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "email",
            type: "email",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
        {
            name: "message",
            type: "text",
            required: true,
            admin: {
                description: "Lorem ipsum"
            }
        },
    ],
    hooks: {
        afterChange: [
            async ({ doc, req, operation }) => {
                if (operation === 'create') {
                    await req.payload.sendEmail({
                        to: 'you@mywebsite.com',
                        subject: 'New Contact Form Submission',
                        text: `Type: ${doc.type}\nEmail: ${doc.email}\nMessage: ${doc.message}`,
                    });
                }
            },
        ],
    },
    access: {
        create: () => true,
    },
}