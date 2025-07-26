import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  let dataShow = data.map((item) => (
    <Link
      to={`/product/${item.id}`}
      key={item.id}
      className="col-span-1 bg-light p-4 rounded-xl shadow-md text-center"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-4
        opacity-0 translate-x-[-40px] animate-fadeInLeft"
      />

      <h2
        className="text-xl font-bold text-deep mb-2
        opacity-0 translate-y-[-20px] animate-fadeInDown delay-200"
      >
        {item.name}
      </h2>

      <p
        className="text-primary font-semibold mb-1
        opacity-0 translate-y-[-20px] animate-fadeInDown delay-300"
      >
        {item.price} $
      </p>

      <p
        className="text-sm text-gray-600
        opacity-0 translate-y-[-20px] animate-fadeInDown delay-400"
      >
        {item.description}
      </p>

      <button
        className="mt-3 bg-deep text-white py-2 px-4 rounded hover:bg-deep/90 transition-all duration-300
        opacity-0 translate-y-[-20px] animate-fadeInDown delay-500 flex justify-center items-center gap-2"
      >
        Add to Cart 🛒
      </button>
    </Link>
  ));

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-3 ">
        {dataShow}
      </div>
      ;
    </div>
  );
};

export default Shop;
