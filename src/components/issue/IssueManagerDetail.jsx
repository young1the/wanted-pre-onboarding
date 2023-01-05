import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getManagerList } from "../../apis/asyncFns";
import useInput from "../../hooks/useInput";
import Loader from "../common/Loader";
import Tag from "../common/Tag";

const IssueManagerDetail = ({ managers, setManagers }) => {
  const { value, onChange } = useInput("");
  const [managerList, setManagerList] = useState([]);
  const filterFn = (ele) => {
    if (managers.length === 0) return true;
    const isSame = (manager) => {
      return manager.name === ele.name;
    };
    return !managers.find(isSame);
  };
  const { isLoading, error, data } = useQuery("managers", getManagerList, {
    onSuccess: () => {
      if (data)
        setManagerList([
          ...data.filter((ele) => {
            return filterFn(ele);
          }),
        ]);
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

  const onClickSearchHandler = () => {
    setManagerList((prev) => {
      return prev.filter((ele) => {
        return ele.name.indexOf(value) >= 0;
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
          onClick={onClickSearchHandler}
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
