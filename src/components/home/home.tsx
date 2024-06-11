import "./home.scss";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import {FadeIn} from "../animation/animation";
import handimoji from './waving-hand_1f44b.png';

function HomeContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="homeLayout">
      <div className={"homeHeader"}>
        <div className={"TitleContainer"}>
          <span className={"homeHeaderTitleText"}>
            <FadeIn delay={0} duration={0.2} text={["Hi,", "I'm", "Jaehak", "Kim"]} />
          </span>
          <div className={"shaker"}>
            <img
              src={
                handimoji
              }
              className={"homeHeaderTitleIcon"}
            ></img>
          </div>
        </div>
        <div className={"content"}>
          <FadeIn
            delay={2}
            duration={0.01}
            text={[
              "CS",
              "@",
              "U",
              "Waterloo",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className={"mainLayoutHome"}>
      <HomeContent />
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Home;
