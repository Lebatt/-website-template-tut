import type { Media } from '@/payload-types'

// random alts 
const alts = [
    'Curving abstract shapes with an orange and blue gradient',
    'A vibrant sunset over a calm ocean, with hues of pink, orange, and purple reflecting on the water.',
    'A close-up of a blooming flower with intricate details and vibrant colors.',
    'A bustling cityscape at night, with skyscrapers illuminated by colorful lights and reflections on wet streets.',
    'A serene mountain landscape with a clear blue lake in the foreground and snow-capped peaks in the background.',
]

export const generateImage = (): Omit<Media, 'createdAt' | 'id' | 'updatedAt'> => ({
  alt: alts[Math.floor(Math.random() * alts.length)],
  caption: {
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
              text: 'Photo used for seeding purposes. Demo images are sourced from open APIs like Unsplash, and are not owned by us.',
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
})