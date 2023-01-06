const IssueRadio = ({value, onChange, readOnly= false}) => {
  return (
    <fieldset className="flex space-x-4">
      <div className="w-full">
        <input
          type="radio"
          name="todo"
          value="TODO"
          id="todo"
          className="peer hidden"
          onChange={onChange}
          checked={"TODO" === value}
          readOnly={readOnly}
        />
        <label
          htmlFor="todo"
          className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
        >
          <p className="text-sm font-medium">할 일</p>
        </label>
      </div>
      <div className="w-full">
        <input
          type="radio"
          name="progress"
          value="PROGRESS"
          id="progress"
          className="peer hidden"
          onChange={onChange}
          checked={"PROGRESS" === value}
          readOnly={readOnly}
        />
        <label
          htmlFor="progress"
          className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
        >
          <p className="text-sm font-medium">진행중</p>
        </label>
      </div>
      <div className="w-full">
        <input
          type="radio"
          name="complete"
          value="COMPLETE"
          id="complete"
          className="peer hidden"
          onChange={onChange}
          checked={"COMPLETE" === value}
          readOnly={readOnly}
        />
        <label
          htmlFor="complete"
          className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
        >
          <p className="text-sm font-medium">완료</p>
        </label>
      </div>
    </fieldset>
  );
};

export default IssueRadio;
