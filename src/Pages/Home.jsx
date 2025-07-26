import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-row w-full mt-1 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ height: "calc(100vh - 4.25rem)" }}
    >
      {/* LEFT SIDE - TEXT */}
      <div
        className={`sm:w-1/2 sm:h-full h-1/2 bg-gradient-love flex flex-col items-center justify-center 
        transform transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-[60px] font-dancing text-gradient-black sm:p-10 p-7">
          Floré – Beauty in every petal.
        </h1>

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
      <div
        className={`sm:w-1/2 sm:h-full h-1/2 transform transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src="/Img/roses/home.jpg"
          alt="beautiful roses"
        />
      </div>
    </div>
  );
}
