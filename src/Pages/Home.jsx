// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

let Visible = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

let parentVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

let spanVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};
let imgVariant = {
  hidden: { y: 0 },
  show: {
    y: [0, -30, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse", 
      ease: "easeInOut",
    },
  },
};
export default function Home() {
  let text1 = "Floré – Beauty in every petal .";
  return (
    <motion.div
      className="flex flex-col sm:flex-row w-full mt-1 bg-gradient-love transition-opacity duration-1000 ease-in-out mb-3 sm:mb-0 "
      style={{ height: "calc(100vh - 4.25rem)" }}
      variants={Visible}
      initial="hidden"
      animate="show"
    >
      {/* LEFT SIDE - TEXT */}
      <div
        className="sm:w-1/2 sm:h-full h-1/2 bg-transparent flex flex-col items-center justify-center 
        transform transition-all duration-1000 ease-in-out"
      >
        <motion.h1
          variants={parentVariant}
          initial="hidden"
          animate="show"
          className="text-2xl sm:text-4xl md:text-[60px] font-dancing text-gradient-black sm:p-10 p-7"
        >
          {text1.split("").map((char, index) => (
            <motion.span key={index} variants={spanVariant}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <h1 className="sm:text-4xl md:text-[60px] text-lg font-dancing text-gradient-black sm:p-10 p-7">
          Welcome to Floré
        </h1>

        <Link
          to="/shop"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-pinkfire rounded-full shadow-md
           hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          To Shop
        </Link>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <motion.div
        variants={imgVariant}
        className="sm:w-1/3  sm:h-3/4 h-1/2 sm:my-auto  rounded-full overflow-hidden"
      >
        <picture>
          <source srcSet="/Img/roses/home.webp" type="image/webp" />
          <img
            className="w-full h-full object-cover"
            src="/Img/roses/home.jpg"
            alt="beautiful roses"
            loading="lazy"
          />
        </picture>
      </motion.div>
    </motion.div>
  );
}
