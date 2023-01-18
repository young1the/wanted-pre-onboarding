import { createSlice } from "@reduxjs/toolkit";
import { TApiStatus } from "../../../types/common";
import { TComment } from "../../../types/comment";

type TFormTodo = "POST" | "PUT";

type TFormSliceState = {
  apiStatus: TApiStatus;
  formTodo: TFormTodo;
  comment: TComment | undefined;
};

const initialState: TFormSliceState = {
  apiStatus: "NONE",
  formTodo: "POST",
  comment: undefined,
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.apiStatus = action.payload.status;
    },
    needModify(state, action) {
      state.comment = { ...action.payload.comment };
      state.formTodo = "PUT";
    },
    solved(state) {
      state.apiStatus = "DONE";
      state.formTodo = "POST";
      state.comment = undefined;
    },
  },
});

export const formActions = form.actions;

export default form.reducer;
