import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
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
    update(state, action) {
      state.comments = action.payload.comments;
    },
  },
});

export const commentsActions = comments.actions;

export default comments.reducer;
