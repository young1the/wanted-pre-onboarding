import { createSlice } from "@reduxjs/toolkit";
import { PARAMS } from "../../../constants/page";

type TPageSliceState = {
  totalAmount: number;
  commentPerPage: number;
  pageAmount: number;
  pageIndex: number;
};

const initialState: TPageSliceState = {
  totalAmount: 0,
  commentPerPage: PARAMS.COMMENT_PER_PAGE,
  pageAmount: 0,
  pageIndex: 1,
};

const page = createSlice({
  name: "page",
  initialState,
  reducers: {
    init(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.pageIndex = 1;
      state.pageAmount = Math.ceil(state.totalAmount / state.commentPerPage);
    },
    change(state, action) {
      state.pageIndex = action.payload.pageIndex;
    },
  },
});

export const pageActions = page.actions;

export default page.reducer;
