import "./App.scss";
import React, { useState, useRef } from "react";
import { Navigate, Route } from "react-router-dom";
import NavBar from "./components/floatItems/navBar";
import { useMediaQuery } from "react-responsive";
import Home from "./components/home/home";

function App() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const focusHome = useRef<HTMLDivElement>(null);
  const onHomeClick = () => {
    focusHome.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className={"layoutMain"}>
        <div className={"gridLeftSpace"}>
          <NavBar options={["lightFont",0," focus"]}/>
        </div>
        <div className={"gridHome"}>
          <Home />
        </div>
        <div className={"gridAboutMe"}></div>
        <div className={"gridProjects"}></div>
        <div className={"gridContainer"}></div>
        <div className={"gridRightSpace"}></div>
      </div>
    </div>
  );
}

export default App;
