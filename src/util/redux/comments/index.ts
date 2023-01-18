import { createSlice } from "@reduxjs/toolkit";
import { TComment } from "../../../types/comment";
import { TApiStatus } from "../../../types/common";

type TCommentSliceState = {
  comments: TComment[] | null;
  apiStatus: TApiStatus;
};

const initialState: TCommentSliceState = {
  comments: null,
  apiStatus: "NONE",
};

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.apiStatus = action.payload.status;
    },
    get(state, action) {
      state.comments = action.payload.comments;
      state.apiStatus = "DONE";
    },
  },
});

export const commentsActions = comments.actions;

export default comments.reducer;
