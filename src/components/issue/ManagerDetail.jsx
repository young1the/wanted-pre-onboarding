import { useState, useEffect } from "react";
import { getManagerList } from "../../apis/asyncFns";
import { requestAxios } from "../../apis/axios";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import Tag from "../Tag";

const ManagerDetail = ({managers, setManagers}) => {
  const { value, onChange } = useInput();
  const { state: detail, toggle} = useToggle();
  const [allManagerList, setAllManagerList] = useState([]);

  const fetchManager = async () => {
    const [data, error] = await requestAxios(getManagerList());
    if (data) {
      await setAllManagerList([...data]);
    }
    if (error) {
      console.log(error);
    }
  };

  const searchManager = async () => {
    setAllManagerList((prev) =>
      prev.filter((ele) => {
        return (ele.name.indexOf(value) >= 0);
      })
    );
  };

  useEffect(() => {
    fetchManager();
  }, []);

  const onClickAddHandler = (e) => {
    const _target = e.target.innerHTML;
    setManagers((prev) => [...prev, _target]);
    setAllManagerList((prev) =>
      prev.filter((ele) => {
        return (_target !== ele.name)
      }));
  };
  // const onClickDeleteHandler = (e) => {
  //   const _target = e.target.innerHTML;
  //   setAllManagerList((prev) => [...prev, _target]);
  //   setSelectedManagerArray((prev) =>
  //     prev.filter((ele) => {
  //       return (_target !== ele)
  //     }));
  // }

  return (
    <div className="overflow-hidden w-full rounded-lg border border-gray-200">
      <div className="w-full h-full flex items-center text-gray-400 transition cursor-pointer p-3"
            onClick={toggle}>
        {managers.length !== 0 ? (
          managers.map((ele) => {
            return <Tag name={ele} key={ele} onClick={(e)=>{e.stopPropagation();}} />;
          })
        ) : (
          <p>담당자를 추가해주세요.</p>
        )}
      </div>
    { detail ?
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
        <div className="flex p-4">
          {allManagerList.map((ele) => {
            return (
              <Tag name={ele.name} key={ele.name} onClick={onClickAddHandler} />
            );
          })}
        </div>
      </div>
      : null }
    </div>
  );
};

export default ManagerDetail;
