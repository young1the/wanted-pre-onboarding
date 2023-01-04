import React from "react";
import Tag from "./Tag";

const ManagerDetail = () => {
  return (
    <details className="overflow-hidden w-full rounded-lg border border-gray-200 p-3">
      <summary className="flex items-center justify-between text-gray-400 transition cursor-pointer p-1">
        {/* <span className="text-sm font-medium">담당자</span> */}
        <Tag name="조영일" />
      </summary>

      <div className="bg-white border-t border-gray-200">
        <header className="flex items-center justify-between p-4">
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
            placeholder="이름을 입력하세요"
          />
          <button
            type="button"
            className="text-xl text-gray-900 ml-4"
          >
            🔍
          </button>
        </header>
        <div className="flex flex-col items-start space-y-4 p-4">
          <Tag name="조영일" />
          <Tag name="조영일" />
          <Tag name="조영일" />
        </div>
      </div>
    </details>
  );
};

export default ManagerDetail;
