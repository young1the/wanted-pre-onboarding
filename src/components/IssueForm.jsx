import React from "react";
import ManagerDetail from "./ManagerDetail";

const IssueForm = () => {
  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <form action="" className="space-y-4">
        <div>
          <input
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
            placeholder="Title"
            type="text"
            id="title"
          />
        </div>
        <ManagerDetail />
        <div>
          <input
            type="datetime-local"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
          />
        </div>
        <div>
          <textarea
            className="w-full rounded-lg border border-gray-200 p-3"
            placeholder="Content"
            rows="8"
            id="message"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-end ">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white sm:w-auto"
          >
            <span className="font-medium ">Create Issue</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
