/*
|-------------------------------------------------------------------------------
| Tailwind – The Utility-First CSS Framework
|-------------------------------------------------------------------------------
|
| Documentation at https://tailwindcss.com
|
*/

/**
 * Global Styles Plugin
 *
 * This plugin modifies Tailwind’s base styles using values from the theme.
 * https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
 */
const globalStyles = ({ addBase, config }) => {
  addBase({
    a: {
      color: config('theme.colors.black'),
      textDecoration: 'none',
      // borderBottom: '1px solid transparent',
      transition: '0.2s ease',
      // opacity: '0.4',
    },
    'a:hover': {
      // borderColor: config('theme.borderColor.primary'),
      // opacity: '1'
    },
    'a:active': {
      // opacity: '1'
    },
    p: {
      marginBottom: config('theme.margin.3'),
      lineHeight: config('theme.lineHeight.normal'),
    },
    'h1, h2, h3, h4, h5': {
      marginBottom: config('theme.margin.2'),
      lineHeight: config('theme.lineHeight.tight'),
    },
    h1: { fontSize: config('theme.fontSize.5xl') },
    h2: { fontSize: config('theme.fontSize.4xl') },
    h3: { fontSize: config('theme.fontSize.3xl') },
    h4: { fontSize: config('theme.fontSize.2xl') },
    h5: { fontSize: config('theme.fontSize.xl') },
    'ol, ul': { paddingLeft: config('theme.padding.4') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
  });
}

/**
 * Configuration
 */
module.exports = {
  theme: {
    colors: {
      primary: '#525ddc',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      transparent: 'transparent',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    minHeight: {
      '50': '50px'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: ['visited', 'active'],
      colors: {
        merino: '#F9F6EE',
        satinLinen: '#E2DED1',
        tradewind: '#51ACAF',
      },
      // fontSize: {
      //   xs: ['0.75rem', 1.5], // 12px/18px
      //   sm: ['0.875rem', 1.7], // 14px/24px
      //   base: ['1rem', 1.5], // 16px/24px
      //   lg: ['1.25rem', 1.5], // 20px/30px
      //   xl: ['1.375rem', 1.5], // 22px/33px
      //   '2xl': ['1.5rem', 1.5], // 24px/36px
      //   '3xl': ['2rem', 1.5], // 32px/48px
      //   '4xl': ['2.5rem', 1], // 40px/40px
      //   '5xl': ['3rem', 1], // 48px/48px
      //   '6xl': ['3.5rem', 1], // 56px/56px
      // },
    },
  },
  variants: {
    // Define variants
  },
  plugins: [
    globalStyles,
  ],
}
