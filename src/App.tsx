import React, { useEffect } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { getComments } from "./util/redux/comments/actions";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if (isInitial) {
      dispatch(getComments());
      isInitial = false;
    }
  },[dispatch])
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
