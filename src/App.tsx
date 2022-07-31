import "./App.scss";
import React, { useState, useRef } from "react";
import "./globalStyle.scss";
import { Navigate, Route } from "react-router-dom";
import NavBar from "./components/floatItems/navBar";
import { useMediaQuery } from "react-responsive";
import Home from "./components/home/home";
import About from "./components/about/about";
import { HomeTheme, AboutTheme } from "./globalStyle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import createScrollSnap from 'scroll-snap';

function App() {

  const themeChooser = [<HomeTheme />, <AboutTheme />];
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
  const focusAbout = useRef<HTMLDivElement>(null);
  const focusProjects = useRef<HTMLDivElement>(null);
  const focusContact = useRef<HTMLDivElement>(null);

  const goToPage = (pageNo: number) => {
    switch (pageNo) {
      case 0:
        focusHome.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;

      case 1:
        focusAbout.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;

      case 2:
        focusProjects.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;

      case 3:
        focusContact.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
    }
  };
  let page = 0;
  let optionList = [
    ["lightFont", 0, " focus"],
    ["blackFont", 1, " focus"],
  ];
  return (
    <div className="App">
      {themeChooser[page]}
      <div className={"layoutMain"}>
        <div className={"gridLeftSpace"}>
          <NavBar options={optionList[page]} />
        </div>
        <div ref={focusHome} className={"gridHome "}>
          <Home />
        </div>
        <div ref={focusAbout} className={"gridAboutMe "}>
          <About />
        </div>
        <div ref={focusProjects} className={"gridProjects"}></div>
        <div ref={focusContact} className={"gridContainer"}></div>
        <div className={"gridRightSpace"}></div>
      </div>
    </div>
  );
}

export default App;
