import React from "react";

const IssueContent = ({value, onChange}) => {
  return (
    <textarea
      className="w-full rounded-lg border border-gray-200 p-3"
      placeholder="Content"
      rows="8"
      id="message"
	  value={value}
	  onChange={onChange}
    ></textarea>
  );
};

export default React.memo(IssueContent);
