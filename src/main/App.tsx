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
        goToPage(viewPage, false);
      } else if (page < viewPage) {
        console.log("going Down");
        goToPage(viewPage, true);
      }
      setPage(viewPage);
      setDestination(null);
      // @ts-ignore
    }
  }, [viewPage]);
  useEffect(() => {
    if (viewPage == destination || destination === null) {
    }
  }, [fullPage]);
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
    if (top) {
      const adder = 0;
    } else {
      // @ts-ignore
      const adder = pageRef[pageNo].current?.clientHeight - height;
    }

    window.scroll({
      top:
        pageRef[pageNo].current!.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
  };
  const menuClicked = (pageClicked: number) => {
    setDestination(pageClicked);
  };
  useEffect(() => {
    const calculateRatio = (r: number, i: number) => {
      // @ts-ignore
      return (height * r) / pageRef[i].current?.clientHeight;
    };
    const temp = new Array(4).fill(false);
    for (let i = 0; i < 4; i += 1) {
        const ratioHalf = calculateRatio(0.5, i)
        const ratioFull = calculateRatio(1, i)
      pagesObserver[i] = new IntersectionObserver(
        (entries) => {
          temp[i] = entries[0].intersectionRatio > ratioHalf;
          if (temp.filter(Boolean).length == 1) {
            setViewPage(temp.indexOf(true));
          }
        },
        {
          rootMargin: "2px",
          threshold: [ratioHalf],
        }
      );
      fullpageObserver[i] = new IntersectionObserver(
        (entries) => {
          if (entries[0].intersectionRatio > calculateRatio(1,i) && i) {
            if (fullPage !== i) {
              setFullPage(i);
            }
          }
        },
        { threshold: [ratioFull] }
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
