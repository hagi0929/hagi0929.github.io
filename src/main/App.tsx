import "./App.scss";
import React, { useState, useRef, useEffect, useMemo, createRef } from "react";
import "./globalStyle.scss";
import { Navigate, Route } from "react-router-dom";
import NavBar from "../components/floatItems/navBar";
import { useMediaQuery } from "react-responsive";
import Home from "../components/home/home";
import About from "../components/about/about";
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
  const fullpageObserver = new Array(4);
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
  const [fullPage, setFullPage] = useState(0);
  const [destination, setDestination] = useState<any>(null);
  const [viewPage, setViewPage] = useState<any>(0);
  useEffect(() => {
    console.log("viewPage", viewPage);
    console.log("page", page);
    console.log("des:", destination);
    if (viewPage == destination || destination === null) {
      if (page > viewPage) {
        console.log("going Up");
      } else if (page < viewPage) {
        console.log("going Down");
      }
      setPage(viewPage);
      setDestination(null);
      // @ts-ignore
    }
  }, [viewPage]);
  useEffect(() => {
    console.log(destination);
    if (destination !== null) {
      goToPage(destination);
    }
  }, [destination]);
  useEffect(() => {
    let snapCon = Array(4).fill(true);
    snapCon.fill(false, 0, fullPage);
    let snapAlign = (i: boolean) => {
      if (i) {
        return "start";
      } else {
        return "end";
      }
    };
  }, [fullPage]);
  const goToPage = (pageNo: number, top: boolean = true) => {
    console.log(
      pageRef[pageNo].current!.getBoundingClientRect().top + window.scrollY
    );
    if (top) {
      window.scroll({
        top:
          pageRef[pageNo].current!.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top:
          // @ts-ignore
          pageRef[pageNo].current!.getBoundingClientRect().top +
          window.scrollY +
          // @ts-ignore
          pageRef[pageNo].current?.clientHeight -
          // @ts-ignore
          height,
        behavior: "smooth",
      });
    }
  };
  const menuClicked = (pageClicked: number) => {
    setDestination(pageClicked);
  };
  useEffect(() => {
    const temp = new Array(4).fill(false);
    for (let i = 0; i < 4; i += 1) {
      // @ts-ignore
      const ratio = height / 2 / pageRef[i].current?.clientHeight - 0.01;
      const observerOption = {
        rootMargin: "10px",
        threshold: [ratio],
      };
      pagesObserver[i] = new IntersectionObserver((entries) => {
        temp[i] = entries[0].intersectionRatio > ratio;
        if (entries[0].intersectionRatio > ratio * 2 && i) {
          console.log("fullPage", i);
        }
        if (temp.filter(Boolean).length == 1) {
          setViewPage(temp.indexOf(true));
        }
      }, observerOption);
      fullpageObserver[i] = new IntersectionObserver(
        (entries) => {
          if (entries[0].intersectionRatio > ratio * 2 && i) {
            if (fullPage !== i) {
              setFullPage(i);
            }
          }
        },
        { threshold: [ratio * 2] }
      );

      pagesObserver[i].observe(pageRef[i].current);
      fullpageObserver[i].observe(pageRef[i].current);
    }
  }, [
    height,
    width,
    pageRef[0].current?.clientHeight,
    pageRef[1].current?.clientHeight,
    pageRef[2].current?.clientHeight,
    pageRef[3].current?.clientHeight,
  ]);
  useEffect(() => {}, [page]);
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
