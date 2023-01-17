import { configureStore } from "@reduxjs/toolkit";
import comments from "./comments";

const store = configureStore({
  reducer: {
    comments,
  },
});

export default store;
