import "./App.scss";
import React, { useState, useRef, useEffect, useMemo, createRef } from "react";
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
import createScrollSnap from "scroll-snap";

let optionList = [
  ["lightFont", 0, " focus"],
  ["blackFont", 1, " focus"],
];

function App() {
  const themeChooser = [<HomeTheme />, <AboutTheme />];
  const pageRef = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((i) => createRef<HTMLInputElement>()),
    []
  );
  const [page, setPage] = useState(0);
  useEffect(() => {
    goToPage(page);
  }, [page]);

  const goToPage = (pageNo: number) => {
    if (pageRef[pageNo].current != null) {
      pageRef[pageNo].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="App">
      {themeChooser[page]}
      <div className={"layoutMain"}>
        <div className={"gridLeftSpace"}>
          <NavBar options={optionList[page]} menuNum={setPage} />
        </div>
        <div ref={pageRef[0]} className={"gridHome "}>
          <Home />
        </div>
        <div ref={pageRef[1]} className={"gridAboutMe "}>
          <About />
        </div>
        <div ref={pageRef[2]} className={"gridProjects"}></div>
        <div ref={pageRef[3]} className={"gridContacts"}></div>
        <div className={"gridRightSpace"}></div>
      </div>
    </div>
  );
}

export default App;
