import React from "react";

const Button = ({onClick}) => {
  return (
    <button
      type="submit"
      className="inline-flex w-full
	items-center justify-center rounded-lg
	bg-indigo-600 px-5 py-3 text-white sm:w-auto"
	onClick={onClick}
    >
      Create Issue
    </button>
  );
};

export default Button;
