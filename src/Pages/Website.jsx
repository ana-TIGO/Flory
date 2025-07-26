import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ModalContext } from "../Context/ModalContext";
import { useContext } from "react";
const Website = () => {
  let { modal } = useContext(ModalContext);

  return (
    <>
      <Navbar />
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full  bg-black opacity-70 z-40 "></div>
      )}
      <Outlet />
    </>
  );
};

export default Website;
