/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts,md,svx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        interactive: 'var(--color-interactive)',
        'interactive-foreground': 'var(--color-interactive-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)'
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: '1rem',
        xl: '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(0,0,0,0.08)',
        accent: '0 2px 8px 0 rgba(15,118,110,0.15)',
      },
      spacing: {
        'section': '4rem',
        'card': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-foreground)',
            a: {
              color: 'var(--color-primary)',
              'text-decoration': 'underline',
              'font-weight': '500',
            },
            h1: {
              'font-family': 'Merriweather, ui-serif, Georgia',
              'font-weight': '700',
              'letter-spacing': '-0.025em',
            },
            h2: {
              'font-family': 'Merriweather, ui-serif, Georgia',
              'font-weight': '700',
              'letter-spacing': '-0.02em',
            },
            h3: {
              'font-family': 'Merriweather, ui-serif, Georgia',
              'font-weight': '600',
            },
            code: {
              'background': 'var(--color-muted)',
              'padding': '0.2em 0.4em',
              'border-radius': '4px',
            },
            blockquote: {
              'border-left': '4px solid var(--color-primary)',
              'padding-left': '1em',
              'color': 'var(--color-muted-foreground)',
              'font-style': 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
