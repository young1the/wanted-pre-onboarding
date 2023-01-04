import React, { useMemo } from "react";

const COLORS = [
  "bg-slate-100 text-slate-600",
  "bg-blue-100 text-blue-600",
  "bg-green-100 text-green-600",
  "bg-violet-100 text-violet-600",
  "bg-pink-100 text-pink-600",
  "bg-lime-100 text-lime-600",
  "bg-orange-100 text-orange-600",
];

const Tag = ({ name, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs
    ${COLORS[name.charCodeAt(0) % (COLORS.length - 1)]}`}
    >
      {name}
    </span>
  );
};

function compare(prev, next) {
  return prev.name === next.name;
}

export default React.memo(Tag, compare);
