import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../assets/styles";
import { ModalContext } from "../Context/ModalContext";
const Navbar = () => {
  const [toglle, setToglle] = useState(false);
  const menuRef = useRef(null);

  let { modal, setModal } = useContext(ModalContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToglle(false);
      }
    };
    // شغّل عند كل كليك
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const location = useLocation();
  const currentPath = location.pathname;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
      setCart(storedCart);
    };

    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  let showData =
    cart.length > 0 ? (
      cart.map((item, key) => (
        <div
          key={key}
          className="flex items-center gap-3 bg-white text-black rounded-lg px-4 py-2 mb-2 shadow"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-md"
          />
          <div className="flex-1">
            <h4 className="font-bold text-sm">{item.name}</h4>
            <span className="text-sm font-medium">{item.price}$</span>
          </div>
          <div
            onClick={() => handleDelete(item.id)}
            className="justify-self-end bg-red-700 p-1 px-2 rounded-full cursor-pointer text-white font-bold"
          >
            ×
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-white">The cart is empty 🛒</p>
    );

  let [showSuccess, setShowSuccess] = useState(false);

  let handleBuy = () => {
    localStorage.removeItem("Cart");
    setCart([]);

    window.dispatchEvent(new Event("cartUpdated"));

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <>
      <div
        className={`w-full sm:h-16 h-12 shadow-2xl shadow-red-300 transition-all ease-in-out duration-500`}
      >
        <nav className="w-full h-full bg-gradient-primary flex items-center justify-between px-10">
          <h1 className="text-gradient-black sm:text-5xl text-2xl font-dancing drop-shadow-md">
            <Link to="/">Floré</Link>
          </h1>
          <ul className="hidden sm:flex gap-5 list-none sm:text-2xl">
            <li
              className={`${currentPath === "/" ? styles.liActive : styles.li}`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                currentPath === "/about" ? styles.liActive : styles.li
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`${
                currentPath === "/shop" ? styles.liActive : styles.li
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
          </ul>

          <div className="w-[30px] h-[30px] sm:hidden flex flex-col justify-between">
            <img
              src={"/Img/bars.png"}
              alt="bars"
              onClick={() => setToglle((prev) => !prev)}
            />
          </div>
          <button
            className="bg-pink-100 p-1 md:p-4 rounded-full"
            onClick={() => {
              setModal(true);
            }}
          >
            🛒
          </button>
        </nav>

        {/* ✅ القائمة المنسدلة في الموبايل */}
        <ul
          ref={menuRef}
          className={`fixed top-16 left-1/2 transform -translate-x-1/2
        sm:hidden flex flex-col gap-4 text-center
        bg-white/90 backdrop-blur-md text-gray-900 
        border border-pink-300 rounded-xl shadow-xl p-6 w-[90%] z-[9999]
        transition-all duration-500 ease-in-out
        ${
          toglle
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        >
          <li
            className={`${currentPath === "/" ? styles.liActive : styles.li}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${
              currentPath === "/about" ? styles.liActive : styles.li
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`${
              currentPath === "/shop" ? styles.liActive : styles.li
            }`}
          >
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      {modal && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  p-4 sm:p-6 rounded-2xl bg-primary w-[95%] sm:w-3/4 md:w-1/2 
                  max-w-xl h-auto z-50 shadow-lg overflow-auto max-h-[90vh]"
        >
          {/* محتوى الكارتات */}
          <div className="w-full">{showData}</div>

          {/* زرارين في الأسفل */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
            <button
              className="w-full sm:w-1/3 bg-red-800 text-white py-2 px-4 rounded-full hover:scale-105 transition duration-300"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              className="w-full sm:w-1/3 bg-green-400 text-black py-2 px-4 rounded-full hover:scale-105 transition duration-300"
              onClick={() => {
                handleBuy();
                setModal(false);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] transition-all duration-300">
          Succesfully Buy ✅
        </div>
      )}
    </>
  );
};

export default Navbar;
