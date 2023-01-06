import React, { useState } from "react";
import IssueManager from "../issue/IssueManager";
import IssueTitle from "../issue/IssueTitle";
import IssueTime from "../issue/IssueTime";
import IssueRadio from "../issue/IssueRadio";
import IssueContent from "../issue/IssueContent";
import useInput from "../../hooks/useInput";
import { useQueryClient } from "react-query";
import useToggle from "../../hooks/useToggle";
import { deleteIssue, updateIssue } from "../../apis/asyncFns";
import { useDetailDispatch } from "../../hooks/useDetail";
import { useMutation } from "react-query";

const DetailForm = ({ props }) => {
  const { value: title, onChange: onChangeTitle } = useInput(props.title);
  const { value: time, onChange: onChangeTime } = useInput(props.time);
  const { value: status, onChange: onChangeStatus } = useInput(props.status);
  const { value: content, onChange: onChangeContent } = useInput(props.content);
  const [managers, setManagers] = useState(props.managers);
  const { state: mode, on, off } = useToggle();
  const queryClient = useQueryClient();
  const dispatch = useDetailDispatch();
  const { mutate } = useMutation(
    () => {
      return deleteIssue({id: props.id, status: props.status});
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(props.status);
        queryClient.invalidateQueries('datail');
        dispatch({ type: "OFF" });
      },
    }
  );
  const { mutate:mutateUpdate } = useMutation(
    () => {
      return updateIssue(props.status,{
        title,
        time,
        content,
        managers,
        id: props.id,
        status,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(props.status);
        queryClient.invalidateQueries(status);
        queryClient.invalidateQueries('datail');
        dispatch({ type: "OFF" });
      },
    }
  );

  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <div className="w-full h-full flex justify-end space-x-4 mb-4">
        {!mode ? (
          <>
            <button onClick={on}>🛠️</button>
            <button onClick={mutate}>🗑️</button>
          </>
        ) : (
          <>
            <button onClick={mutateUpdate}>✅</button>
            <button
              onClick={() => {
                off();
                queryClient.invalidateQueries("detail");
              }}
            >
              🔙
            </button>
          </>
        )}
      </div>
      <form action="" className="space-y-4">
        <IssueTitle value={title} onChange={onChangeTitle} readOnly={!mode} />
        <IssueRadio value={status} onChange={onChangeStatus}/>
        <IssueManager
          managers={managers}
          setManagers={setManagers}
          readOnly={!mode}
        />
        <IssueTime value={time} onChange={onChangeTime} readOnly={!mode} />
        <IssueContent
          value={content}
          onChange={onChangeContent}
          readOnly={!mode}
        />
        <div className="mt-4 flex justify-end "></div>
      </form>
    </div>
  );
};

export default DetailForm;
