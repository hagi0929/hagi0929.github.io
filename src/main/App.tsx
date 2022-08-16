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
import ScrollTracker from "../components/floatItems/scrollIndicator";
let optionList = [
  ["normalFont", 0, " focus"],
  ["normalFont", 1, " focus"],
  ["normalFont", 2, " focus"],
  ["normalFont", 3, " focus"],
];
const themeChooser = [
  <AboutTheme />,
  <AboutTheme />,
  <AboutTheme />,
  <Crazy />,
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
  const pageRef = useMemo(
    () =>
      Array(4)
        .fill(0)
        .map((i) => createRef<HTMLInputElement>()),
    []
  );
  const [page, setPage] = useState(0);
  const [scrollSnapSwitch, setScrollSnapSwitch] = useState<any>([null, null]);
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
    // setDestination(pageClicked);
  };
  useEffect(() => {
    const observerState = new Array(4).fill(false);
    const calculateRatio = (r: number, i: number) => {
      // @ts-ignore
      return (height * r) / pageRef[i].current?.clientHeight;
    };
    for (let i = 0; i < 4; i += 1) {
      const ratioHalf = calculateRatio(0.7, i);
      console.log(pageRef[0].current?.clientHeight);
      new IntersectionObserver(
        (entries) => {
          observerState[i] = entries[0].intersectionRatio > ratioHalf;
          if (observerState.filter(Boolean).length == 1) {
            setPage(observerState.indexOf(true));
          }
        },
        {
          rootMargin: "2px",
          threshold: [ratioHalf],
        }
      ).observe(pageRef[i].current!);
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
      <div className={"home"}>
        <Home />
      </div>
      <div className={"menuBar float"}>
        <NavBar options={optionList[page]} menuNum={menuClicked} />
      </div>
      <div className={"socials float"}>
        <div className={"socialText"}>
          <a
            href="https://www.facebook.com/hagi0929/"
            target="_blank"
            className={"facebook"}
          >
            FACEBOOK
          </a>
          <a
            href="https://www.instagram.com/ha.__.gi/"
            target="_blank"
            className={"instagram"}
          >
            INSTAGRAM
          </a>
          <a href="" target="_blank" className={"linkedIn"}>
            LINKED IN
          </a>
        </div>
        <a href="https://github.com/hagi0929/personal-website-v2" target="_blank">
          <img
            className={"githubIcon"}
            src="https://cdn.cdnlogo.com/logos/g/55/github.svg"
            width={"50px"}
            height={"50px"}
            alt="d"
          />
        </a>
      </div>
      <div className={"progress float"}>
      <ScrollTracker/></div>
      <div className={"layoutMain"}>
        <div ref={pageRef[0]} className={"gridHome page"}></div>
        <div ref={pageRef[1]} className={"gridAboutMe page"}>
          <About />
        </div>
        <div ref={pageRef[2]} className={"gridProjects page"}>
          <About />
        </div>
        <div ref={pageRef[3]} className={"gridContacts page"}>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
