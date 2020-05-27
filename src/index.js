import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router";
import "./styles/main.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
