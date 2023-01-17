import React from "react";
import CommentList from "../components/CommentList";
import { useSelector } from "react-redux";

function CommentListContainer() {
  const {comments, apiStatus} = useSelector<any, any>(state=>state.comments)
  return (
    apiStatus === "LOADING" ? <p>loading</p> :
    apiStatus === "DONE" ? <CommentList comments={comments}/> :
    apiStatus === "ERROR" ? <p>error</p> : null
  )
  ;
}

export default CommentListContainer;
