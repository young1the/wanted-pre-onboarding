import { createSlice } from '@reduxjs/toolkit';
import { TComment } from '../../../types/comment';
import { TApiStatus } from '../../../types/common';

type TCommentSliceState = {
  comments: TComment[] | null,
  apiStatus: TApiStatus,
}

const initialState : TCommentSliceState = {
  comments: null,
  apiStatus: "NONE",
};

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.apiStatus = action.payload.status;
    },
    get(state, action) {
      state.comments = action.payload.comments;
      state.apiStatus = "DONE";
    },
    post(state, action) {
      let _newArray;
      if (state.comments) {
        _newArray = state.comments.slice();
        _newArray.push(action.payload.comment);
        state.comments = _newArray;
      } else {
        _newArray = [action.payload.comment];
      }
    },
  },
});

export const commentsActions = comments.actions;

export default comments.reducer;
