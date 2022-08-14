import "./home.scss";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

function Home() {
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
          <span className={"homeHeaderTitleText"}>Hi, I'm Jaehak</span>
          <span className={"homeHeaderTitleIcon"}>👋</span>
        </div>
        <div className={"content"}>
          An enthusiastic university student, and a math lover who's interested
          in combining mathematics into programming
        </div>
      </div>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Home;
