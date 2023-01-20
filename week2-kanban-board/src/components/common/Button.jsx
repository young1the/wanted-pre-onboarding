import React from "react";

const Button = ({title, onClick}) => {
  return (
    <button
      type="submit"
      className="block w-auto
	items-center justify-center rounded-lg
	bg-indigo-600 px-5 py-3 text-white"
	onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
