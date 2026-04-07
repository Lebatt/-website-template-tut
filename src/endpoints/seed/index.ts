import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import { generateWork } from './generateWork'
import { generateImage } from './generateImage'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'works',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = ['Technology', 'News', 'Finance', 'Design', 'Software', 'Engineering']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [
    image1Buffer,
    image2Buffer,
    image3Buffer,
    hero1Buffer,
    work1Buffer,
    work2Buffer,
    work3Buffer,
    work4Buffer,
    work5Buffer,
    work6Buffer,
    work7Buffer,
    work8Buffer,
    work9Buffer,
    work10Buffer,
    work11Buffer,
    work12Buffer,
    brand1Buffer,
    brand2Buffer,
    brand3Buffer,
    brand4Buffer,
    brand5Buffer,
  ] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
    // Work Images
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/EDO_square_02.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/RWH_square_04.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/bluegreen-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/cvgt-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/dfat-poster.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/dropbottle-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/key-insights.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/map-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/oxfam-appeal-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/unwrapped-animated-thumbnail-poster.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/welcome-home-project-square.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/works/Ader-square.webp',
    ),
    // Brand Images
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/brands/Fictional%20company%20logo.png',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/brands/Fictional%20company%20logo2.png',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/brands/Fictional%20company%20logo3.png',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/brands/Fictional%20company%20logo4.png',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/Lebatt/-website-template-tut/refs/heads/portfolio-block/public/brands/Fictional%20company%20logo5.png',
    ),
  ])

  const [
    demoAuthor, 
    image1Doc, 
    image2Doc, 
    image3Doc, 
    imageHomeDoc,
  ] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
      }),
    ),
  ])

  // brand Images
  let brandImages = []
  const brandBuffers = [brand1Buffer, brand2Buffer, brand3Buffer, brand4Buffer, brand5Buffer]
  for (const buffer of brandBuffers) {
    const image = await payload.create({
      collection: 'media',
      data: generateImage(),
      file: buffer,
    })
    brandImages.push(image)
  }

  // works 
  let workDocs = []
  const workBuffers = [ work1Buffer, work2Buffer, work3Buffer, work4Buffer, work5Buffer, work6Buffer, work7Buffer, work8Buffer, work9Buffer, work10Buffer, work11Buffer, work12Buffer]
  for (const buffer of workBuffers) {
    const image = await payload.create({
      collection: 'media',
      data: generateImage(),
      file: buffer,
    })

    // generate work
    const workDate = generateWork({ image })
    
    const workDoc = await payload.create({
      collection: 'works',
      data: workDate,
    })

    workDocs.push(workDoc)
  }

  payload.logger.info(`— Seeding services...`)
  const services = [
    'Web design & UI',
    'Social media visuals',
    'Infographics',
    'Design System',
    'Email design',
    'Stationery',
    'Icons',
    'Packaging & merch',
    'Signage',
    'Brochures',
    'Logos & branding',
    'Digital ads',
    'Wireframes'
  ]
  for (const service of services) {
    await payload.create({
      collection: 'services',
      data: {
        title: service,
      },
    })
  }

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ 
        heroImage: imageHomeDoc, 
        brandImages, 
        works: workDocs,
        posts: [post1Doc, post2Doc, post3Doc],
      }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Process',
              url: '/process',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Benefits',
              url: '/benefits',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Service',
              url: '/service',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Portfolio',
              url: '/portfolio',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'FAQ',
              url: '/faq',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Get Started',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        shortText: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Kornix - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.',
                    type: 'text',
                    version: 1,
                  }
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              }
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          }
        },
        copyrightText: "Kornix. All rights reserved.",
        contact: {
          email: "info@kornix.com",
          phone: "+44 1234 567890"
        },
        socialLinks: [
          {
            link: {
              type: 'custom',
              newTab: true,
              icon: brandImages[0].id,
              url: '/instagram',
              label: 'Instagram',
            }
          },
          {
            link: {
              type: 'custom',
              newTab: true,
              icon: brandImages[1].id,
              url: '/linkedin',
              label: 'LinkedIn',
            }
          },
          {
            link: {
              type: 'custom',
              newTab: true,
              icon: brandImages[2].id,
              url: '/dribbble',
              label: 'Dribbble',
            }
          }
        ],
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Process',
              url: '/process',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Benefits',
              url: '/benefits',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Services',
              url: '/services',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Portfolio',
              url: '/portfolio',
            }
          },
          {
            link: {
              type: 'custom',
              label: 'FAQ',
              url: '/faq',
            }
          }
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
