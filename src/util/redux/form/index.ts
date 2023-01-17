import { createSlice } from "@reduxjs/toolkit";
import { TApiStatus } from "../../../types/common";
import { TComment } from "../../../types/comment";

type TFormTodo = "POST" | "PUT";

type TFormSliceState = {
  apiStatus: TApiStatus;
  formTodo: TFormTodo;
  comment: TComment | null;
};

const initialState: TFormSliceState = {
  apiStatus: "NONE",
  formTodo: "POST",
  comment: null,
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.apiStatus = action.payload.status;
    },
  },
});

export const formActions = form.actions;

export default form.reducer;
