/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        midxl: "1400px",
      },
      fontFamily: {
        mfaCustom: ["var(--font-mfa)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        black2: "#333333",
        primary: "#232946",
        "primary-light": "#2E2E37",
        bg: "#E9EBF7",
        pink: "#F0C2C9",
        deepBlue: "#393E59",
        userblack: "#17161D",
      },
      gridTemplateColumns: {
        userTable: "208px 151px 172px 168px 150px 150px 150px",
        guideTable: "208px 351px 272px 268px 180px 200px 80px",
        contentTable: "308px 350px 172px 268px 150px 200px 150px 80px",
        categoryTable: "228px 320px 382px 168px 150px 250px 50px",
        quickreadsTable: "320px 320px 300px 300px 250px 50px",
        calmnessTable: "400px 200px 200px 200px 300px 200px 50px",
        subscriptionTable : "450px 200px 220px 220px 220px 200px 50px",
        communityTable : "300px 350px 220px 220px 220px 200px 50px",
        revenueTable : "200px 350px 250px 250px 250px 180px 50px",
        notificationTable : "250px 300px 300px 250px 400px 50px",
        badgeTable : "150px 300px 300px 250px 500px 50px",
      },

      fontSize: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
};
