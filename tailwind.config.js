/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        s: "290px",
        // => @media (min-width: 300px) { ... }

        sl: "320px",
        // => @media (min-width: 320px) { ... }

        sm: "440px",
        // => @media (min-width: 440px) { ... }

        "1sm": "530px",
        // => @media (min-width: 530px) { ... }

        "2sm": "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        "2md": "905px",
        // => @media (min-width: 905px) { ... }

        lg: "1074px",
        // => @media (min-width: 1074px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
