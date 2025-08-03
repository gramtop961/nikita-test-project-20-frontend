/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neo-red': '#ff0000',
        'neo-green': '#00ff00',  
        'neo-blue': '#0000ff',
        'neo-yellow': '#ffff00',
        'neo-pink': '#ff00ff',
        'neo-cyan': '#00ffff',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Courier New', 'monospace'],
      },
      boxShadow: {
        'neo-brutal': '4px 4px 0px #000000',
        'neo-brutal-lg': '8px 8px 0px #000000',
        'neo-brutal-hover': '6px 6px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [],
}; 