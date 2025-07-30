/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'custom-page-gradient': 'linear-gradient(180deg, #D3E4E8 0%, #E3E9E8 30.29%, #FBF3EB 69.71%, #FCE3D2 96.63%)',
      },
    },
  },
  plugins: [],
}
