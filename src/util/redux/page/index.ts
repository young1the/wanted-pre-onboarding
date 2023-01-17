import { createSlice } from '@reduxjs/toolkit';

type TPageSliceState = {
  totalAmount: number,
  commentPerPage: number,
  pageAmount: number,
  pageIndex: number,
  init: boolean,
}

const initialState : TPageSliceState = {
  totalAmount: 0,
  commentPerPage: 5,
  pageAmount: 0,
  pageIndex: 1,
  init: false,
};

const page = createSlice({
  name: 'page',
  initialState,
  reducers: {
    init(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.pageAmount = Math.ceil(state.totalAmount / state.commentPerPage);
      state.init = true;
    },
    change(state, action) {
      state.pageIndex = action.payload.pageIndex;
    },
  },
});

export const pageActions = page.actions;

export default page.reducer;
