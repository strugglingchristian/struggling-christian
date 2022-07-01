import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Raleway/Raleway-Bold.ttf";
import "./fonts/Raleway/Raleway-Italic.ttf";
import "./fonts/Raleway/Raleway-Light.ttf";
import "./fonts/Raleway/Raleway-Medium.ttf";
import "./fonts/Raleway/Raleway-Regular.ttf";
import "./fonts/Raleway/Raleway-SemiBold.ttf";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
