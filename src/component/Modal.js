import React from "react";

const Modal = ({ modalContent }) => {
  return (
    <>
      <article className="modal">
        <span>{modalContent}</span>
      </article>
    </>
  );
};

export default Modal;
