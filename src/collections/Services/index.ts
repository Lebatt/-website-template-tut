import { CollectionConfig } from "payload";
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Services: CollectionConfig = {
    slug: "services",
    admin: {
        useAsTitle: "title",
    },
    defaultPopulate: {
        title: true,
        description: true,
        image: true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "richText",
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                    ]
                },
            }),
            label: false,
        },
    ],
    labels: {
        singular: "Service",
        plural: "Services",
    }
};