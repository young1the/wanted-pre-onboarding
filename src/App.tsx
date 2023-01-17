import React, { useEffect } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { getComments } from "./util/redux/comments/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getComments());
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
