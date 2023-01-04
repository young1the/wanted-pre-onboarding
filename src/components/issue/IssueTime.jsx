import React from "react";

const IssueTime = ({value, onChange}) => {
  return (
    <input
      type="datetime-local"
      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
	  value={value}
	  onChange={onChange}
    />
  );
};

export default React.memo(IssueTime);
