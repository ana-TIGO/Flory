import { useEffect, useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // delay بسيط بعد التحميل
  }, []);

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 mt-2 z-40"
      style={{
        height: "calc(100vh - 4.5rem - 2px)",
        backgroundImage: "url('/Img/roses/about.jpg')",
      }}
    >
      <div
        className={`
          transition-all duration-1000 ease-out transform 
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          bg-gradient-to-r from-white/60 via-pink-50/60 to-white/60 backdrop-blur-sm rounded-2xl shadow-xl 
          p-8 max-w-2xl text-center z-40
        `}
      >
        <h1 className="text-4xl font-dancing text-gradient-black mb-6">
          Our Story
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-dancing text-3xl">Floré</span> is more than just
          flowers – it’s a feeling.
          <br />
          Every bouquet is a crafted message, handpicked with love.
          <br />
          Whether you’re saying “thank you”, “I love you”, or simply brightening
          a day – Floré brings that moment to life.
          <br />
          <span className="font-dancing text-3xl">
            Let flowers speak your heart.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
