import { configureStore } from "@reduxjs/toolkit";
import page from "./page";
import comments from "./comments";

const store = configureStore({
  reducer: {
    page, comments,
  },
});

export default store;
