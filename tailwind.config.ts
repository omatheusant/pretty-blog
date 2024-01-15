import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FFA7C9",
          "secondary": "#FF6BA4",
          "white": "#fff",
          "primary-content": "#FFD7E6",
          "neutral": "#FF6BA4",
        },
        dark: {
          "primary": "#FFA7C9",
          "secondary": "#FF6BA4",
          "white": "#fff",
          "primary-content": "#FFD7E6"
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  }
}
export default config
