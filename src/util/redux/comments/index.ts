import { createSlice } from '@reduxjs/toolkit';
import { TComment } from '../../../types/comment';

type TCommentSliceState = {
  comments: TComment[] | null,
}

const initialState : TCommentSliceState = {
  comments: null,
};

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    get(state, action) {
      state.comments = action.payload.comments;
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
