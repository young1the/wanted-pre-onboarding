import React from "react";

const Tag = ({name}) => {
    const index = Math.floor(Math.random() * 4);
    const COLOR = [
        "bg-slate-100 text-slate-600",
        "bg-red-100 text-red-600",
        "bg-blue-100 text-blue-600",
        "bg-green-100 text-green-600",
        "bg-yellow-100 text-yellow-600",
    ]
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs
    ${COLOR[index]}`}
    >
      {name}
    </span>
  );
};

export default Tag;
