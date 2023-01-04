import React from "react";
const Tag = ({name, onClick}) => {
    const COLOR = [
        "bg-slate-100 text-slate-600",
        "bg-blue-100 text-blue-600",
        "bg-green-100 text-green-600",
        "bg-yellow-100 text-yellow-600",
    ]
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs
    ${COLOR[Math.floor(Math.random()*3)]}`}
    >
      {name}
    </span>
  );
};

function compare(prev, next) {
  return (prev.name === next.name);
}

export default React.memo(Tag, compare);
