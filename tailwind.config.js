/* eslint-disable @typescript-eslint/no-require-imports */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        custom: {
          gray: {
            10: 'hsl(var(--custom-gray-10))',
            20: 'hsl(var(--custom-gray-20))',
            30: 'hsl(var(--custom-gray-30))',
            40: 'hsl(var(--custom-gray-40))',
            50: 'hsl(var(--custom-gray-50))',
            60: 'hsl(var(--custom-gray-60))',
            70: 'hsl(var(--custom-gray-70))',
            100: 'hsl(var(--custom-gray-100))',
          },
          green: {
            50: 'hsl(var(--custom-green-50))',
            100: 'hsl(var(--custom-green-100))',
          },
          blue: {
            50: 'hsl(var(--custom-blue-50))',
            100: 'hsl(var(--custom-blue-100))',
          },
          yellow: {
            50: 'hsl(var(--custom-yellow-50))',
            100: 'hsl(var(--custom-yellow-100))',
          },
          red: {
            50: 'hsl(var(--custom-red-50))',
            100: 'hsl(var(--custom-red-100))',
          },
          magenta: {
            50: 'hsl(var(--custom-magenta-50))',
            100: 'hsl(var(--custom-magenta-100))',
          },
          cyan: {
            50: 'hsl(var(--custom-cyan-50))',
            100: 'hsl(var(--custom-cyan-100))',
          },
          purple: {
            50: 'hsl(var(--custom-purple-50))',
            100: 'hsl(var(--custom-purple-100))',
          },
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
