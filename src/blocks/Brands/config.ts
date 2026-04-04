import { Block } from "payload";

export const Brands: Block = {
    slug: "brands",
    interfaceName: "brandsBlock",
    fields: [
        {
            name: "media", 
            type: "array",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                }
            ]
        }
    ],
    labels: {
        singular: "Brands",
        plural: "Brands",
    }
}