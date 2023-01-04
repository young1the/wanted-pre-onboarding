import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { worker } from "./mocks/worker";

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
