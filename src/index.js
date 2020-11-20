import "amfe-flexible";
import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-snapshot";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "./index.css";
// import App from './App';
import App from "./Container/Layout";
import reportWebVitals from "./reportWebVitals";

// import initReactFastclick from "react-fastclick";

// initReactFastclick();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
