module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      'max-w-8xl': 'max-width: 84rem',
    },
    extend: {
      fontFamily: {
        'sans': ["'Interstate Condensed'", "Arial", "sans-serif"],
        'serif' : ["'FF Meta Serif Pro'", "serif"],
        'body': ["'Open Sans'", "sans-serif"],
        'mono' : ["'Base Mono Wide'", "monospace"]
      },
      height: {
        '150': '38rem'
      }
    },
  },
  plugins: [],
}


