import { useState } from "react";
import { ModalContext } from "./ModalContext"; // لو الملفين في نفس الفولدر

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
