import React, { useState } from "react";
import IssueManager from "../issue/IssueManager";
import IssueTitle from "../issue/IssueTitle";
import IssueTime from "../issue/IssueTime";
import IssueContent from "../issue/IssueContent";
import useInput from "../../hooks/useInput";
import { useQueryClient } from "react-query";
import useToggle from "../../hooks/useToggle";
import { deleteIssue } from "../../apis/asyncFns";
import { useDetailDispatch } from "../../hooks/useDetail";
import { useMutation } from "react-query";

const DetailForm = ({ props }) => {
  const { value: title, onChange: onChangeTitle } = useInput(props.title);
  const { value: time, onChange: onChangeTime } = useInput(props.time);
  const { value: content, onChange: onChangeContent } = useInput(props.content);
  const [managers, setManagers] = useState(props.managers);
  const {state: mode, on, off} = useToggle();
  const queryClient = useQueryClient();
  const dispatch = useDetailDispatch();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    ()=>{return deleteIssue(props.id)},
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issues");
        dispatch({type: "OFF"});
      },
    }
  );

  return (
    <div className="w-[30rem] p-4 rounded-lg bg-white p-8 shadow-lg">
      <div className="w-full h-full flex justify-end space-x-4 mb-4">
        {!mode ? (
          <>
            <button onClick={on}>
              🛠️
            </button>
            <button onClick={mutate}>🗑️</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                queryClient.invalidateQueries("issue");
              }}
            >
              ✅
            </button>
            <button
              onClick={()=>{off(); queryClient.invalidateQueries("issue");}}>
              🔙
            </button>
          </>
        )}
      </div>
      <form action="" className="space-y-4">
        <IssueTitle value={title} onChange={onChangeTitle} readOnly={!mode} />
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
