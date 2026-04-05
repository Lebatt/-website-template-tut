import { Block } from "payload";

export const Portfolio: Block = {
    slug: "portfolio",
    interfaceName: "PortfolioBlock",
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "works",
            type: "relationship",
            relationTo: "works",
            hasMany: true,
        }
    ],
    labels: {
        singular: "Portfolio",
        plural: "Portfolios",
    }
};