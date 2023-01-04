import React from "react";

const IssueTime = ({ value, onChange, readOnly = false }) => {
  const date = new Date(value).toLocaleString('ko-KR');

  return readOnly ? (
    <time dateTime={value} className="block w-full rounded-lg border 
    border-gray-200 p-3 text-sm cursor-pointer focus:outline-none">
      {`${date}`}
    </time>
  ) : (
    <input
      type="datetime-local"
      className={`w-full rounded-lg border border-gray-200 p-3 text-sm`}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(IssueTime);
