import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Main/>
,

  rootElement
);
