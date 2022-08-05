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
  ["blackFont", 2, " focus"],
  ["blackFont", 3, " focus"],
];

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();
  const pagesObserver = new Array(4);
  const themeChooser = [
    <HomeTheme />,
    <AboutTheme />,
    <AboutTheme />,
    <AboutTheme />,
  ];
  const pageRef = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((i) => createRef<HTMLInputElement>()),
    []
  );
  const [page, setPage] = useState(0);

  const goToPage = (pageNo: number) => {
    if (pageRef[pageNo].current != null) {
      pageRef[pageNo].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const menuClicked = (pageClicked: number) => {
    goToPage(pageClicked);
  };
  useEffect(() => {
    const temp = new Array(4).fill(false);
    for (let i = 0; i < 4; i += 1) {
      // @ts-ignore
      const ratio = height / 2 / pageRef[i].current?.clientHeight -0.01;
      const observerOption = {
        rootMargin: "10px",
        threshold: [ratio,ratio+0.02],
      };
      console.log("ratio:", i, observerOption["threshold"])
      pagesObserver[i] = new IntersectionObserver((entries, observer) => {
        console.log(i, entries[0].intersectionRatio);
        temp[i] = entries[0].intersectionRatio > ratio;
        if (temp.filter(Boolean).length == 1) {
          setPage(temp.indexOf(true));
        }
      }, observerOption);
      pagesObserver[i].observe(pageRef[i].current);
    }
  }, [
    height,
    width,
    pageRef[0].current?.clientHeight,
    pageRef[1].current?.clientHeight,
    pageRef[2].current?.clientHeight,
    pageRef[3].current?.clientHeight,
  ]);
  return (
    <div className="App">
      {themeChooser[page]}
      <div className={"layoutMain"}>
        <div className={"gridLeftSpace"}>
          <NavBar options={optionList[page]} menuNum={menuClicked} />
        </div>
        <div ref={pageRef[0]} className={"gridHome"}>
          <Home />
        </div>
        <div ref={pageRef[1]} className={"gridAboutMe"}>
          <About />
        </div>
        <div ref={pageRef[2]} className={"gridProjects"}>
          <About />
        </div>
        <div ref={pageRef[3]} className={"gridContacts"}>
          <About />
        </div>
        <div className={"gridRightSpace"}></div>
      </div>
    </div>
  );
}

export default App;
