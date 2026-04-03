import { Block } from "payload";

export const Brands: Block = {
    slug: "brands",
    interfaceName: "BrandsBlock",
    fields: [
        {
            name: "brands",
            type: "array",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                },
            ],
        },
    ],
    labels: {
        plural: "Brands",
        singular: "Brand",
    },
};