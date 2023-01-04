import React, { useState } from "react";
import ManagerDetail from "./ManagerDetail";
import IssueTitle from "./IssueTitle";
import IssueTime from "./IssueTime";
import IssueContent from "./IssueContent";
import Button from "../common/Button";
import useInput from "../../hooks/useInput";
import { requestAxios } from "../../apis/axios";
import { createIssue } from "../../apis/asyncFns";

const IssueForm = () => {
  const {value: title, onChange: onChangeTitle} = useInput("");
  const {value: time, onChange: onChangeTime} = useInput("");
  const {value: content, onChange: onChangeContent} = useInput("");
  const [managers, setManagers] = useState([]);

  const onClickSubmitHandler = async () => {
    const _managers = managers.map((ele)=>{return {name: ele}});
    const [data, error] = await requestAxios(createIssue({title, time, content, _managers}));
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <form action="" className="space-y-4">
          <IssueTitle value={title} onChange={onChangeTitle}/>
          <ManagerDetail managers={managers} setManagers={setManagers}/>
          <IssueTime value={time} onChange={onChangeTime} />
          <IssueContent value={content} onChange={onChangeContent} />
        <div className="mt-4 flex justify-end ">
          <Button onClick={onClickSubmitHandler}/>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
