import React, { useState } from "react";
import IssueManager from "./IssueManager";
import IssueTitle from "./IssueTitle";
import IssueTime from "./IssueTime";
import IssueRadio from "./IssueRadio";
import IssueContent from "./IssueContent";
import Button from "../common/Button";
import useInput from "../../hooks/useInput";
import { createIssue } from "../../apis/asyncFns";
import { useMutation, useQueryClient } from "react-query";
import Loader from "../common/Loader";

const IssueForm = ({offModal}) => {
  const { value: title, onChange: onChangeTitle } = useInput("");
  const { value: time, onChange: onChangeTime } = useInput("");
  const { value: content, onChange: onChangeContent } = useInput("");
  const { value: status, onChange: onChangeStatus } = useInput("");
  const [managers, setManagers] = useState([]);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    createIssue,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(status);
      },
    }
  );

  const onClickSubmitHandler = async (e) => {
    e.preventDefault();
    const _ok = title && time && content && managers.length > 0;
    if (_ok) {
      mutate({ title, time, content, managers, status });
      offModal();
    } else {
      alert("모든 칸을 채워주세요!");
    }
  };

  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      {!isLoading ? (
        <form action="" className="space-y-4">
          <IssueTitle value={title} onChange={onChangeTitle} />
          <IssueRadio value={status} onChange={onChangeStatus}/>
          <IssueManager managers={managers} setManagers={setManagers} />
          <IssueTime value={time} onChange={onChangeTime} />
          <IssueContent value={content} onChange={onChangeContent} />
          <div className="mt-4 flex justify-end ">
            <Button onClick={onClickSubmitHandler} title="Submit" />
          </div>
        </form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default IssueForm;