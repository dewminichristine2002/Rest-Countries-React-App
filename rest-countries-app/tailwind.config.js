// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00FFFF',
          light: '#66fcf1',
          glow: '#0ff',
        },
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          text: '#c9d1d9',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
