import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Website from "./Pages/Website";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import SingleProduct from "./Pages/SingleProduct";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Website />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
}
