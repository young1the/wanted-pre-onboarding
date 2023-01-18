import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import page from "./page";
import comments from "./comments";
import form from "./form";

const store = configureStore({
  reducer: {
    page,
    comments,
    form,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
