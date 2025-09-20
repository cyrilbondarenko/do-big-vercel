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
                                  admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "subtitle",
                    type: "text",
                                  admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "sessions",
                    type: "text",
                                  admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "players",
                    type: "text",
                                  admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "hours",
                    type: "text",
                                  admin: {
                        description: "Lorem ipsum"
                    }
                },
                {
                    name: "backgroundVideo",
                    type: "upload",
                    relationTo: "media",
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
                                                  admin: {
                                description: "Lorem ipsum"
                            }
                        },
                        {
                            name: "image",
                            type: "upload",
                            relationTo: "media",
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
                            name: "icon",
                            type: "upload",
                            relationTo: "media",
                                                  admin: {
                                description: "Lorem ipsum"
                            }
                        },
                    ],
                },
            ],
        },
    ],
    access: {
        read: () => true,
    }
}
