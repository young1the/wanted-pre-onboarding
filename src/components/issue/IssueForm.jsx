import React, { useState } from "react";
import IssueManager from "./IssueManager";
import IssueTitle from "./IssueTitle";
import IssueTime from "./IssueTime";
import IssueContent from "./IssueContent";
import Button from "../common/Button";
import useInput from "../../hooks/useInput";
import { requestAxios } from "../../apis/axios";
import { createIssue } from "../../apis/asyncFns";
import { useMutation, useQueryClient } from "react-query";

const IssueForm = () => {
  const {value: title, onChange: onChangeTitle} = useInput("");
  const {value: time, onChange: onChangeTime} = useInput("");
  const {value: content, onChange: onChangeContent} = useInput("");
  const [managers, setManagers] = useState([]);
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(createIssue, {
    onSuccess: ()=>{queryClient.invalidateQueries('issues');}
  });

  const onClickSubmitHandler = async (e) => {
    e.preventDefault();
    mutate({title, time, content, managers});
  }

  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <form action="" className="space-y-4">
          <IssueTitle value={title} onChange={onChangeTitle}/>
          <IssueManager managers={managers} setManagers={setManagers}/>
          <IssueTime value={time} onChange={onChangeTime} />
          <IssueContent value={content} onChange={onChangeContent} />
        <div className="mt-4 flex justify-end ">
          <Button onClick={onClickSubmitHandler} title="Submit"/>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
