import React, { useEffect } from "react";
import { Button, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.scss";

function fontLiner() {
  let shinchouMenuLinks = document.querySelectorAll(".shinchou-menu li a");
  shinchouMenuLinks.forEach((link) => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      if (i < 2) {
        span.className = "highlight";
      }
      span.style.transitionDelay = `${i / 10}s`;
      link.append(span);
    });
  });
}
function App() {
  useEffect(() => {
    fontLiner();
    return () => {
      // cleanup;
    };
  }, []);
  return (
    <div className="App">
      <div className="flexdemo">
        <span>1</span>
        <span>2</span>
      </div>
      <header className="App-header">
        <div className="App-loading"></div>
        <ul className="shinchou-menu">
          <li>
            <a href="foo">ニュース</a>
          </li>
          <li>
            <a href="foo">ストーリー</a>
          </li>
          <li>
            <a href="foo">スターフ＆キャスト</a>
          </li>
          <li>
            <a href="foo">キャラクター</a>
          </li>
          <li>
            <a href="foo">放送·配信情報</a>
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
        <Button color="danger">Danger!</Button>
      </header>
    </div>
  );
}

export default App;
