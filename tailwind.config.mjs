/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: { xl: '1280px' },
    },
    extend: {
      colors: {
        brand: {
          // Color-picked from the source logo file itself (public/images/logo/logo-luceat.jpg),
          // not eyeballed — the true LUCEAT mark is a rich navy-blue, not a cyan/teal.
          blue: '#1597C7',
          'blue-dark': '#063A70',
          navy: '#063A70',
          silver: '#CFCECC',
        },
        surface: {
          white: '#FFFFFF',
          ivory: '#F6FCFE',
          'soft-blue': '#EAF8FC',
          'soft-lavender': '#F1EEF7',
          'soft-gold': '#FAF1E1',
          'soft-pink': '#FAEEF1',
          'soft-green': '#EEF6EE',
        },
        text: {
          primary: '#17364F',
          body: '#496778',
          muted: '#7C8791',
          inverse: '#FFFFFF',
        },
        border: {
          subtle: '#D5E7ED',
          soft: '#D5E7ED',
          brand: '#1597C7',
        },
        state: {
          focus: '#14458C',
          error: '#B23B30',
          success: '#3F7D52',
        },
        category: {
          bath: '#3FAFAE',
          'bath-soft': '#E3F5F4',
          change: '#C08A34',
          'change-soft': '#FAF1E1',
          hydration: '#C77FA0',
          'hydration-soft': '#FAEEF1',
          comfort: '#5C9A6B',
          'comfort-soft': '#EEF6EE',
          lice: '#94A83A',
          'lice-soft': '#F5F7E6',
          travel: '#14458C',
          'travel-soft': '#EAF4F7',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 2.1rem + 2.6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'page-title': ['clamp(2.25rem, 1.85rem + 1.6vw, 3.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'section-heading': ['clamp(1.75rem, 1.5rem + 1vw, 2.75rem)', { lineHeight: '1.15' }],
        'card-title': ['clamp(1.25rem, 1.15rem + 0.4vw, 1.625rem)', { lineHeight: '1.3' }],
        'body-lg': ['clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      borderRadius: {
        sm: '10px',
        md: '18px',
        lg: '30px',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(12,47,69,0.04), 0 12px 28px -16px rgba(12,47,69,0.18)',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        36: '9rem',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
