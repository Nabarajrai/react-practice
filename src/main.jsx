import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import TodolistProvider from "./context/Todolist-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodolistProvider>
      <App />
    </TodolistProvider>
  </React.StrictMode>
);
