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
            label: 'Book A Meeting',
            url: '/book-a-meeting',
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
                  text: 'Bringing Your \nDream Into ',
                  version: 1,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 2,
                  mode: 'normal',
                  style: '',
                  text: 'Reality',
                  version: 1,
                }
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
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: "We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.",
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
      {
        blockName: 'Brands Block',
        blockType: 'brands',
        media: brandImages.map((image) => ({
          image: image.id,
        })),
      },
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
        blockName: 'FAQ Block',
        blockType: 'faq',
        title: 'FAQ\'s',
        description: 'Providing answers to your questions',
        items: [
          {
            question: 'Do you have specific princing plans to show?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "We don't have specific pricing plans to show at the moment, but we offer flexible options to accommodate various needs. Please contact us directly for a personalized quote based on your requirements.",
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
            }
          },
          {
            question: 'How many years of experience do you have?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our team has a combined experience of over 20 years in the design industry, working with a wide range of clients across various sectors. We bring a wealth of knowledge and expertise to every project we undertake.",
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
            }
          },
          {
            question: 'What companies have you worked with?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "We have had the privilege of working with a diverse range of companies, from startups to established enterprises, across various industries including technology, healthcare, finance, and retail. Our portfolio includes collaborations with innovative startups as well as well-known brands.",
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
            }
          },
          {
            question: 'What is your design process like?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Our design process is collaborative and iterative, starting with a thorough understanding of your goals and requirements. We begin with research and ideation, followed by concept development and prototyping. We value your feedback throughout the process to ensure the final design aligns with your vision and objectives.",
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
            }
          }
        ],
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
      },
    ],
    meta: {
      description: 'An open-source website built with Payload and Next.js.',
      image: heroImage.id,
      title: 'Payload Website Template',
    },
    title: 'Home',
  }
}
