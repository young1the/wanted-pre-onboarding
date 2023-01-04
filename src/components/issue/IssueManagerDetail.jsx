import React, { useState } from "react";
import { useQuery } from "react-query";
import { getManagerList } from "../../apis/asyncFns";
import useInput from "../../hooks/useInput";
import Loader from "../common/Loader";
import Tag from "../Tag";

const IssueManagerDetail = ({ managers, setManagers }) => {
  const { value, onChange } = useInput("");
  const [managerList, setManagerList] = useState([]);
  const { isLoading, error, data } = useQuery("managers", getManagerList, {
    onSuccess: () => {
      if (data)
        setManagerList([...data]);
    },
  });
  if (isLoading) return <Loader />;
  if (error) return <p>Error!</p>;

  const onClickAddHandler = (e) => {
    const _text = e.target.innerHTML;
    setManagers((prev) => {
      return [...prev, { name: _text }];
    });
    setManagerList((prev) => {
      return prev.filter((ele) => {
        return ele.name !== _text;
      });
    });
  };

  return (
    <div className="bg-white border-t border-gray-200">
      <header className="flex items-center justify-between p-4">
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
          placeholder="이름을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="text-xl text-gray-900 ml-4"
          // onClick={onClickSearchHandler}
        >
          🔍
        </button>
      </header>
      <div className="flex p-4">
        {managerList.map((ele) => {
          return (
            <Tag name={ele.name} key={ele.name} onClick={onClickAddHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default IssueManagerDetail;
