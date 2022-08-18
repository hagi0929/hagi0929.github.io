import "./home.scss";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import FadeIn from "../animation/animation";
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
          <span className={"homeHeaderTitleText"}><FadeIn delay={1} duration={0.3} text={["Hi,","I'm","Jaehak"]} /></span>
          <div className={"shaker"}><img src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/118/waving-hand-sign_1f44b.png"} className={"homeHeaderTitleIcon"} ></img></div>
      </div>
          <div className={"content"}>
            <FadeIn delay={4} duration={0.2} text={["An","enthusiastic","university","student,", "and", "a", "math", "lover", "who's",
            "interested", "in", "combining", "mathematics", "into", "programming"]
}/>
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
