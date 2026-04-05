import { Block } from "payload";

export const Services: Block = {
    slug: "services",
    interfaceName: "ServicesBlock",
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
    ],
    labels: {
        singular: "Service",
        plural: "Services",
    }
};