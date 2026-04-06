import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media, Post, Work } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  brandImages: Media[]
  works: Work[]
  posts: Post[]
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  brandImages,
  works,
  posts,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'All posts',
            url: '/posts',
          },
        },
        {
          link: {
            type: 'custom',
            appearance: 'outline',
            label: 'Contact',
            url: '/contact',
          },
        },
      ],
      media: heroImage.id,
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Payload Website Template',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'link',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'Visit the admin dashboard',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  fields: {
                    linkType: 'custom',
                    newTab: false,
                    url: '/admin',
                  },
                  format: '',
                  indent: 0,
                  version: 3,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: " to begin managing this site's content. The code for this template is completely open-source and can be found ",
                  version: 1,
                },
                {
                  type: 'link',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'on our Github',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  fields: {
                    linkType: 'custom',
                    newTab: true,
                    url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
                  },
                  format: '',
                  indent: 0,
                  version: 3,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '. ',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      // Brands Block
      {
        blockName: 'Brands Block',
        blockType: 'brands',
        media: brandImages.map((image) => ({
          image: image.id,
        })),
      },

      // Portfolio Block
      {
        blockName: 'Portfolio Block',
        blockType: 'portfolio',
        title: 'Featured Work',
        description: 'A selection of recent work showcasing the flexibility of Payload as a headless CMS.',
        works: works.map((work) => work.id),
      },
      {
        blockName: 'Services Block',
        blockType: 'services',
        title: 'We can help you with...',
        description: 'Our Capabilities',
      },
      {
        blockName: 'Articles Block',
        blockType: 'articles',
        title: 'News & Articles',
        subtitle: "Blogs",
        description: 'Best Articles to get started',
        posts: posts.map((post) => post.id),
      },
      {
        blockName: 'Call to Action Block',
        blockType: 'cta',
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Become part of the design revolution',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h2',
                version: 1,
              },
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: "Jump on a membership and start requesting designs right away!",
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'View pricing',
              url: '/pricing',
            },
          },
        ],
      }
    ],
    meta: {
      description: 'An open-source website built with Payload and Next.js.',
      image: heroImage.id,
      title: 'Payload Website Template',
    },
    title: 'Home',
  }
}
