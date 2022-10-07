import { Children, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";

function Modal({ children, isOpen }) {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, closeModal);
  return (
    isOpen && (
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-60 z-20 flex justify-center items-center">
        <div ref={modalRef}>{children}</div>
      </div>
    )
  );
}

export default Modal;
