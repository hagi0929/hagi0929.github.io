import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
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
  const [page, setPage] = useState(0);
  useEffect(() => {
    goToPage(page);
  }, [page]);
  const pages = useRef<HTMLDivElement[]>([]);

  const goToPage = (pageNo: number) => {
    if (pages.current[pageNo] != null) {
      pages.current[pageNo].scrollIntoView({
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
        <div
          ref={(el) => {
            if (el) {
              pages.current[0] = el;
            }
          }}
          className={"gridHome "}
        >
          <Home />
        </div>
        <div
          ref={(el) => {
            if (el) {
              pages.current[1] = el;
            }
          }}
          className={"gridAboutMe "}
        >
          <About />
        </div>
        <div
          ref={(el) => {
            if (el) {
              pages.current[2] = el;
            }
          }}
          className={"gridProjects"}
        ></div>
        <div
          ref={(el) => {
            if (el) {
              pages.current[3] = el;
            }
          }}
          className={"gridContacts"}
        ></div>
        <div className={"gridRightSpace"}></div>
      </div>
    </div>
  );
}

export default App;
