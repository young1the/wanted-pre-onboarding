import React from "react";

const IssueTitle = ({value, onChange}) => {
  return (
    <input
      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
      placeholder="Title"
      type="text"
      id="title"
	  value={value}
	  onChange={onChange}
    />
  );
};

export default React.memo(IssueTitle);
