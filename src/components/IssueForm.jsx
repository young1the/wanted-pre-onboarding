import React from "react";
import ManagerDetail from "./ManagerDetail";

const IssueForm = () => {
  return (
    <div class="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <form action="" class="space-y-4">
        <div>
          <input
            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
            placeholder="Title"
            type="text"
            id="title"
          />
        </div>
        {/* <div class="w-full rounded-lg border border-gray-200 p-3"> */}
        <ManagerDetail />
        {/* </div> */}
        <div>
          <input
            type="datetime-local"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
          />
        </div>

        <div>
          <textarea
            class="w-full rounded-lg border border-gray-200 p-3"
            placeholder="Content"
            rows="8"
            id="message"
          ></textarea>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
          >
            <span class="font-medium">Create Issue</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
