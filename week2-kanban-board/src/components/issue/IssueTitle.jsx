import React from "react";

const IssueTitle = ({ value, onChange, readOnly = false }) => {
  return (
    <input
      className={`w-full rounded-lg border border-gray-200 p-3 text-sm 
      ${ readOnly ? "cursor-pointer focus:outline-none" : ""}`}
      placeholder="Title"
      type="text"
      id="title"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

function compare(prev, next) {
  return prev.value === next.value && prev.readOnly === next.readOnly;
}

export default IssueTitle;
