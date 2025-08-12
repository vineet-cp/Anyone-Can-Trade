// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite', // slower speed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // only scroll half because we duplicate the array
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
