/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flyonui/dist/js/*.js",
],

  theme: {
    extend: {},
    
  },
  plugins: [require('daisyui') ,require("flyonui"), require("flyonui/plugin")] 
  ,
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite ",
      },
    },
  },
  plugins: [],
};
