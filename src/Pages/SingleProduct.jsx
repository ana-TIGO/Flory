import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  let [isExist, setIsExist] = useState(false);
  let handelAdd = (item) => {
    let data = JSON.parse(localStorage.getItem("Cart")) || [];

    const exists = data.find((el) => el.id === item.id);

    if (exists) {
      setIsExist(true);
    } else {
      let newData = [...data, item];
      localStorage.setItem("Cart", JSON.stringify(newData));
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 text-lg">{product.description}</p>
            <p className="text-2xl font-semibold text-pink-600">
              ${product.price}
            </p>

            {/* Optional Extra Info */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>{product.stock}</p>
              <p>🚚 Delivery in 2-5 Days</p>
              <p>🛡️ 1 Year Warranty</p>
            </div>
            {/* Add to Cart Button */}
            <button
              className="group mt-4 bg-pink-600 hover:bg-pink-700 hover:scale-105 text-white font-semibold
             py-3 px-6 rounded-xl transition flex items-center gap-2"
              onClick={() => handelAdd(product)}
            >
              <span className="transition duration-300 group-hover:-translate-x-2">
                🛒
              </span>
              <span className="group-hover:ml-1 transition duration-300">
                Add to Cart
              </span>
            </button>
            {isExist && (
              <p className="text-red-700">The item is already in the cart</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
