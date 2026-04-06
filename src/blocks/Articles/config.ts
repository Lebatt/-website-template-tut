import { Block } from "payload";

export const Articles: Block = {
    slug: "articles",
    interfaceName: "ArticlesBlock",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "subtitle",
            type: "text",
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "posts",
            type: "relationship",
            relationTo: "posts",
            hasMany: true,
        }
    ],
    labels: {
        singular: "Articles Block",
        plural: "Articles Blocks",
    }
};