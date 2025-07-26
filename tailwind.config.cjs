/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.6s ease-out forwards",
        fadeInDown: "fadeInDown 0.6s ease-out forwards",
      },
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
      colors: {
        primary: "#FB6F92",
        secondary: "#FFB3C6",
        accent: "#FF8FAB",
        light: "#FFE5EC",
        danger: "#FC2D1F",
        deep: "#FB3C6C", // تم تصحيحه لـ 6 خانات
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, #FB6F92 0%, #FFB3C6 25%, #FF8FAB 50%, #FFE5EC 75%, #FC2D1F 90%, #FB3C6C 100%)",
        "gradient-love":
          "linear-gradient(90deg, #FB6F92 0%, #FFB3C6 50%, #FFE5EC 100%)",
        "gradient-rlove":
          "linear-gradient(90deg,#FFE5EC 0%, #FFB3C6 50%,  #FB6F92 100%)",
        "gradient-braight": "linear-gradient(90deg,#FFE5EC 0%, #FFB3C6 100%)",
        "gradient-rosy":
          "linear-gradient(90deg, #FC2D1F 0%, #FF8FAB 50%, #FFE5EC 100%)",
        "gradient-pinkfire":
          "linear-gradient(90deg, #FB3C6C 0%, #FC2D1F 33%, #FF8FAB 66%, #FFE5EC 100%)",
        "gradient-red": "linear-gradient(90deg, #f00 0%, #000 100%)",
      },
    },
  },
  plugins: [],
};
