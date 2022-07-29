import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import { Navigate, Route } from "react-router-dom";

function App() {
  const focusHome = useRef(null);
  function fuck () {
    focusHome.current?.scrollIntoView({ behavior: 'smooth' })
  }
  <Route path={"/test"} render={fuck()}></Route>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕하세요?</p>
        <a
          className="App-link"
          href="https://youtu.be/Arr03aiuDB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          d 누르지 마세요s
        </a>
      </header>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={focusHome}>ㅆㅅㅌㅊ</p>
        <a
          className="App-link"
          href="https://youtu.be/Arr03aiuDB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          누르지 마세요
        </a>
      </header>
      <header id="test1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ㅆㅅㅌㅊ</p>
        <a
          className="App-link"
          href="https://youtu.be/Arr03aiuDB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          누르지 마세요
        </a>
      </header>
      <header id="test2">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ㅆㅅㅌㅊ</p>
        <a
          className="App-link"
          href="https://youtu.be/Arr03aiuDB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          누르지 마세요
        </a>
      </header>
    </div>
  );
}

export default App;
