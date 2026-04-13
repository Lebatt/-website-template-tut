/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
                fontWeight: 600,
              },
              h2: {
                fontSize: '2.25rem',
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '4.5rem',
                fontWeight: 600,
              },
              h2: {
                fontSize: '2.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
