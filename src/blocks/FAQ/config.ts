import { Block } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FAQ: Block = {
    slug: "faq",
    interfaceName: "FAQBlock",
    fields: [
        {
            name: "title",
            type: "text",
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "items",
            type: "array",
            fields: [
                {
                    name: "question",
                    type: "text",
                },
                {
                    name: "answer",
                    type: "richText",
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                            return [
                            ...rootFeatures,
                            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                            FixedToolbarFeature(),
                            InlineToolbarFeature(),
                            ]
                        },
                    }),
                    label: false,
                },
            ],
        },
    ],
};