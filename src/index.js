import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = "https://createx1.herokuapp.com";
// http://localhost:4000/
// https://createx1.herokuapp.com

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
