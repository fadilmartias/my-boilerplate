/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(var(--color-primary) / 1)",
        "primary-dark": "rgb(var(--color-primary-dark) / 1)",
        "primary-hover": "rgb(var(--color-primary-hover) / 1)",
        "primary-dark-hover": "rgb(var(--color-primary-dark-hover) / 1)",
        "secondary": "rgb(var(--color-secondary) / 1)",
        "secondary-dark": "rgb(var(--color-secondary-dark) / 1)",
        "secondary-hover": "rgb(var(--color-secondary-hover) / 1)",
        "secondary-dark-hover": "rgb(var(--color-secondary-dark-hover) / 1)",
        "warning": "rgb(var(--color-warning) / 1)",
        "warning-hover": "rgb(var(--color-warning-hover) / 1)",
        "danger": "rgb(var(--color-danger) / 1)",
        "danger-hover": "rgb(var(--color-danger-hover) / 1)",
        "success": "rgb(var(--color-success) / 1)",
        "success-hover": "rgb(var(--color-success-hover) / 1)",
        //
        hover: "rgb(var(--color-hover) / 1)",
        "hover-dark": "rgb(var(--color-hover-dark) / 1)",
        tertiary: "rgb(var(--color-tertiary) / 1)",
        accent: "rgb(var(--color-accent) / 1)",
        "tertiary-hover": "rgb(var(--color-tertiary-hover) / 1)",
        "accent-hover": "rgb(var(--color-accent-hover) / 1)",
        border: "rgb(var(--color-border) / 1)",
        "border-dark": "rgb(var(--color-border-dark) / 1)",
      },
    },
  },
  plugins: [],
};
