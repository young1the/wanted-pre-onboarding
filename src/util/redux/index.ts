import { configureStore } from "@reduxjs/toolkit";
import page from "./page";
import comments from "./comments";
import form from "./form";

const store = configureStore({
  reducer: {
    page, comments, form,
  },
});

export default store;
