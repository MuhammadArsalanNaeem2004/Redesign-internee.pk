import React from "react";

const Btn = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg bg-[#6366f1] text-white hover:bg-[#4f46e5] transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
