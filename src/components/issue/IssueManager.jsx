import { useState, useEffect } from "react";
import { getManagerList } from "../../apis/asyncFns";
import { requestAxios } from "../../apis/axios";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";
import Tag from "../Tag";
import IssueManagerDetail from "./IssueManagerDetail";

const IssueManager = ({managers, setManagers, readOnly=false}) => {
  const { state: detail, toggle} = useToggle();
  const onClickRemoveHandler = (e) => {
    e.stopPropagation();
    const _target = e.target.innerHTML;
    setManagers((prev)=>prev.filter((ele)=>{
      return ele.name !== _target;
    }));
  }
  return (
    <div className="overflow-hidden w-full rounded-lg border border-gray-200">
      <div className="w-full h-full flex items-center text-gray-400 transition cursor-pointer p-3"
            onClick={readOnly ? undefined : toggle}>
        {managers && managers.length !== 0 ? (
          managers.map((ele) => {
            return <Tag name={ele.name} key={ele.name} onClick={readOnly ? undefined : onClickRemoveHandler} />;
          })
        ) : (
          <p>담당자를 추가해주세요.</p>
        )}
      </div>
    { detail ?
      <IssueManagerDetail managers={managers} setManagers={setManagers}/>
      : null }
    </div>
  );
};

export default IssueManager;
