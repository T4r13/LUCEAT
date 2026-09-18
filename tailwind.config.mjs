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
          // #1597C7 is only 3.34:1 on white and #007fc6 only 4.33:1, so neither
          // clears 4.5:1 for normal-size text. Blue text uses brand-navy and
          // blue surfaces behind white text use blue-bg (6.19:1 with white).
          'blue-bg': '#00669E',
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
          muted: '#68737D', // 4.84:1 on white (#7C8791 was 3.66:1)
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
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3.25rem', { lineHeight: '1.06', letterSpacing: '0' }],
        h1: ['2.5rem', { lineHeight: '1.12', letterSpacing: '0' }],
        h2: ['2rem', { lineHeight: '1.18', letterSpacing: '0' }],
        h3: ['1.375rem', { lineHeight: '1.3', letterSpacing: '0' }],
        h4: ['1.125rem', { lineHeight: '1.35', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0' }],
        body: ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65', letterSpacing: '0' }],
        label: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        button: ['0.9375rem', { lineHeight: '1.2', letterSpacing: '0' }],
        nav: ['0.9375rem', { lineHeight: '1.25', letterSpacing: '0' }],
        caption: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0' }],
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
