import { useState, useEffect } from "react";
import { getManagerList } from "../apis/asyncFns";
import { requestAxios } from "../apis/axios";
import useInput from "../hooks/useInput";
import Tag from "./Tag";

const ManagerDetail = ({dispatch}) => {
  const { value, onChange } = useInput();
  const [managerArray, setManagerArray] = useState([]);
  const [selectedManagerArray, setSelectedManagerArray] = useState([]);

  const fetchManager = async () => {
    const [data, error] = await requestAxios(getManagerList());
    if (data) {
      console.log(data);
      await setManagerArray([...data]);
    }
    if (error) {
      console.log(error);
    }
  };

  const searchManager = async () => {
    setManagerArray((prev) =>
      prev.filter((ele) => {
        return ele.name.indexOf(value) >= 0;
      })
    );
  };

  useEffect(() => {
    fetchManager();
  }, []);

  const onclickHandler = (e) => {
    const _target = e.target.innerHTML;
    setSelectedManagerArray((prev) => [...prev, _target]);
    setManagerArray((prev) =>
      prev.filter((ele) => {
        return (_target !== ele.name) 
      }));
  };

  return (
    <details className="overflow-hidden w-full rounded-lg border border-gray-200 p-3">
      <summary className="flex items-center text-gray-400 transition cursor-pointer p-1">
        {selectedManagerArray.length !== 0 ? (
          selectedManagerArray.map((ele) => {
            return <Tag name={ele} id={ele} onClick={() => {}} />;
          })
        ) : (
          <p>담당자를 추가해주세요.</p>
        )}
      </summary>

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
            onClick={searchManager}
          >
            🔍
          </button>
        </header>
        <div className="flex flex-col items-start space-y-4 p-4">
          {managerArray.map((ele) => {
            return (
              <Tag name={ele.name} key={ele.name} onClick={onclickHandler} />
            );
          })}
        </div>
      </div>
    </details>
  );
};

export default ManagerDetail;
