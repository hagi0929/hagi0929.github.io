import "./App.scss";
import React, { useState, useRef, useEffect, useMemo, createRef } from "react";
import "./globalStyle.scss";
import { Navigate, Route } from "react-router-dom";
import NavBar from "../components/floatItems/navBar";
import { useMediaQuery } from "react-responsive";
import Home from "../components/home/home";
import About from "../components/about/about";
import { HomeTheme, AboutTheme, Crazy } from "./globalStyle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import createScrollSnap from "scroll-snap";

let optionList = [
  ["normalFont", 0, " focus"],
  ["boldFont", 1, " focus"],
  ["extraBoldFont", 2, " focus"],
  ["boldFont", 3, " focus"],
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
  const beginningObserver = new Array(4);
  const middleObserver = new Array(4);
  const endObserver = new Array(4);
  const themeChooser = [<HomeTheme />, <Crazy />, <AboutTheme />, <Crazy />];
  const pageRef = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((i) => createRef<HTMLInputElement>()),
    []
  );
  const [page, setPage] = useState(0);
  const [destination, setDestination] = useState<any>(null);
  const [viewPage, setViewPage] = useState<any>(0);
  const [triggerTemp, setTriggerTemp] = useState<any>([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);
  const [scrollSnapSwitch, setScrollSnapSwitch] = useState<any>([null, null]);
  useEffect(() => {
    console.log("sibal");
    console.log(scrollSnapSwitch);
  }, [scrollSnapSwitch]);
  const goToPage = (pageNo: number, top: boolean = true) => {
    let adder = 0;
    if (top) {
      adder = 0;
    } else {
      // @ts-ignore
      adder = pageRef[pageNo].current?.clientHeight - height;
    }

    window.scroll({
      top:
        pageRef[pageNo].current!.getBoundingClientRect().top +
        window.scrollY +
        adder,
      behavior: "smooth",
    });
  };
  const menuClicked = (pageClicked: number) => {
    setDestination(pageClicked);
  };
  useEffect(() => {
    const observerState = new Array(4).fill(false);
    const calculateRatio = (r: number, i: number) => {
      // @ts-ignore
      return (height * r) / pageRef[i].current?.clientHeight;
    };
    for (let i = 0; i < 4; i += 1) {
      const ratioHalf = calculateRatio(0.5, i);
      console.log(pageRef[0].current?.clientHeight);
      new IntersectionObserver(
        (entries) => {
          observerState[i] = entries[0].intersectionRatio > ratioHalf;
          if (observerState.filter(Boolean).length == 1) {
            setPage(observerState.indexOf(true));
            setTriggerTemp(observerState);
          }
        },
        {
          rootMargin: "2px",
          threshold: [ratioHalf],
        }
      ).observe(pageRef[i].current!);
    }
    const start = calculateRatio(0.01, 0);
    const end = calculateRatio(0.99, 0);
    const temp = [true, true];
    let snapLock = false;
    new IntersectionObserver(
      (entries) => {
        temp[0] = entries[0].intersectionRatio > end;
        if (temp != scrollSnapSwitch) {
          setScrollSnapSwitch(temp);
          if (temp.filter(Boolean).length == 1 && !snapLock) {
            snapLock = true;
            console.log("hi");
            goToPage(1);
          }
        }
      },
      {
        threshold: [end],
      }
    ).observe(pageRef[0].current!);
    new IntersectionObserver(
      (entries) => {
        temp[1] = entries[0].intersectionRatio > start;
        setScrollSnapSwitch(temp);
        if (temp.filter(Boolean).length == 1 && !snapLock) {
          snapLock = true;
          console.log("hi");
          goToPage(0);
        }
      },
      {
        threshold: [start],
      }
    ).observe(pageRef[0].current!);
    new IntersectionObserver(
      (entries) => {
        console.log("snapLock", snapLock);
        snapLock = false;
      },
      {
        threshold: [calculateRatio(0.0001, 2), calculateRatio(1, 2)],
      }
    ).observe(pageRef[0].current!);
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
      <div className={"floatLayout"}>
        <div className={"menuBar"}>
          <NavBar options={optionList[page]} menuNum={menuClicked} />
        </div>
        <div className={"socials"}>
          <NavBar options={optionList[page]} menuNum={menuClicked} />
        </div>
        <div className={"progress"}>
          <NavBar options={optionList[page]} menuNum={menuClicked} />
        </div>
      </div>
      <div className={"layoutMain"}>
        <div ref={pageRef[0]} className={"gridHome"}></div>
        <div ref={pageRef[1]} className={"gridAboutMe"}>
          <About />
        </div>
        <div ref={pageRef[2]} className={"gridProjects"}>
          <About />
        </div>
        <div ref={pageRef[3]} className={"gridContacts"}>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
