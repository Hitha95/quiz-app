import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QuestionsContextProvider } from "./context/questions/QuestionsContext";

ReactDOM.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuestionsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
