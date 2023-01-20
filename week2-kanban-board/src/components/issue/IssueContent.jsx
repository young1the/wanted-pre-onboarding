import React from "react";

const IssueContent = ({value, onChange, readOnly=false}) => {
  return (
    <textarea
      className={`w-full rounded-lg border border-gray-200 p-3
      ${ readOnly ? "cursor-pointer focus:outline-none" : ""}`}
      placeholder="Content"
      rows="8"
      id="message"
	  value={value}
	  onChange={onChange}
    ></textarea>
  );
};

export default IssueContent;
