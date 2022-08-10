import React, { useState } from "react";
import PropTypes from "prop-types";

const ErrorModal = ({ message, suggestion, closeModal, isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  const close = () => {
    setOpen(false);
  };
  return (
    open && (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col z-10 justify-center items-center bg-opacity-80 bg-black p-8 sm:p-none">
        <div className="border-4 border-orange-400 border-t-orange-500 rounded-b bg-orange-100 text-orange-500 font-bold text-xl px-4 py-4  sm:px-8 sm:pt-8 sm:pb-2  flex flex-col justify-center items-center">
          {message}
          <div className="mt-2">{suggestion}</div>
          <button
            className="bg-orange-500 w-1/3 text-white  hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 m-2"
            onClick={closeModal ? closeModal : close}
          >
            {suggestion ? "OK" : "Close"}
          </button>
        </div>
      </div>
    )
  );
};

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired,
  suggestion: PropTypes.string,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

export default ErrorModal;
