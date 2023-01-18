import React from "react";
import styled from "styled-components";
import { TComment } from "../types/comment";
import { useDispatch } from "react-redux";
import { changePage } from "../util/redux/page/action";
import ApiService from "../util/axios";
import { formActions } from "../util/redux/form";

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > p {
    display: inline;
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentList({ comments }: { comments: TComment[] }) {
  const dispatch = useDispatch();
  const deleteHandler = async (id: string) => {
    dispatch(formActions.changeStatus("LOADING"));
    await ApiService.deleteComment(id);
    dispatch(formActions.changeStatus("DONE"));
    dispatch(changePage(1));
  };
  const modifyHandler = async (comment: TComment) => {
    dispatch(formActions.needModify({comment}));
  };
  return (
    <>
      {comments.map((comment: TComment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt={comment.author} />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <p onClick={()=>{modifyHandler(comment)}}>수정</p>
            <p
              onClick={() => {
                deleteHandler(comment.id);
              }}
            >
              삭제
            </p>
          </Button>

          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;
