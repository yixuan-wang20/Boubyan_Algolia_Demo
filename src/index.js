import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import App from "./components/App";
import config from "./config";
import "./index.scss";

document.documentElement.style.setProperty("--color-primary", config.primary);
document.documentElement.style.setProperty("--blur-weight", config.blurWeight);
ReactDOM.render(<App />, document.getElementById("root"));
