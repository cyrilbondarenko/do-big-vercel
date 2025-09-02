import {GlobalConfig} from "payload";

export const LandingPage: GlobalConfig = {
    slug: 'landingPage',
    fields: [
        // Hero section
        {
            name: "hero",
            type: "group",
            label: "Hero Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "subtitle",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "sessions",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "players",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
            ],
        },
        // Portfolio section
        {
            name: "portfolio",
            type: "group",
            label: "Portfolio Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "items",
                    type: "array",
                    admin: {
                        description: "Lorem ipsum"
                    },
                    fields: [
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
                            type: "upload",
                            relationTo: "media",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                    ],
                },
            ],
        },
        // Hits section
        {
            name: "hits",
            type: "group",
            label: "Hits Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
            ],
        },
        // Cases section
        {
            name: "cases",
            type: "group",
            label: "Cases Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
            ],
        },
        // Buyout section
        {
            name: "buyout",
            type: "group",
            label: "Buyout Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "items",
                    type: "array",
                    admin: {
                        description: "Lorem ipsum"
                    },
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                        {
                            name: "description",
                            type: "text",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                        {
                            name: "icon",
                            type: "upload",
                            relationTo: "media",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                    ],
                },
            ],
        },
        // Blog section
        {
            name: "blog",
            type: "group",
            label: "Blog Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "items",
                    type: "array",
                    admin: {
                        description: "Lorem ipsum"
                    },
                    fields: [
                        {
                            name: "name",
                            type: "text",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                        {
                            name: "description",
                            type: "text",
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
                            type: "upload",
                            relationTo: "media",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                    ],
                },
            ],
        },
        // Ticker section
        {
            name: "ticker",
            type: "group",
            label: "Ticker Section",
            fields: [
                {
                    name: "items",
                    type: "array",
                    admin: {
                        description: "Lorem ipsum"
                    },
                    fields: [
                        {
                            name: "text",
                            type: "text",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                        {
                            name: "icon",
                            type: "upload",
                            relationTo: "media",
                            required: true,
                            admin: {
                                description: "Lorem ipsum"
                            }
                        },
                    ],
                },
            ],
        },
        // Contacts section
        {
            name: "contacts",
            type: "group",
            label: "Contacts Section",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "email",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "text",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "buttonText",
                    type: "text",
                    required: true,
                    admin: {
                        description: "Lorem ipsum"
                    }
                },
            ],
        },
    ],
    access: {
        read: () => true,
    }
}
