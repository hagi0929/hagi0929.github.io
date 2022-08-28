import "./contact.scss";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const backgrounderRef = useRef(null);
  useEffect(() => {}, []);
  const [top, setTop] = useState<any>(
    <div className={"block animation down"}>
      I love connecting with different people
    </div>
  );
  const [bottom, setBottom] = useState<any>(
    <div className={"block animation up"}>
      if you want to know more about me, I'll be more than happy to meet you
    </div>
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const [hoverBoolean, setHover] = useState<boolean>(true);
  const handleMouseEnter = () => {
    if (hoverBoolean) {
      ref.current!.className = "mainLayoutContact activateAnimation";
    }
  };
  const handleMouseLeave = () => {
    if (hoverBoolean) {
      ref.current!.className = "mainLayoutContact";
    }
  };
  const handleButtonClick = () => {
    ref.current!.className = "mainLayoutContact clicked";
    setTop(<div className={"block animation"}>ministove3yo@gmail.com</div>);

    setBottom(<div className={"block animation"}>j54kim@uwaterloo.ca</div>);
    setHover(false);
  };
  return (
    <div ref={ref} className={"mainLayoutContact"}>
      <div className={"contactLayout"}>
        <a className={"contactMainContainer"}
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={"connectContainer"}>
            <div className={"line lets"}>
              <div className={"effectContainer"}>
                <span>LET'S</span>
                <span>CLICK TO</span>
              </div>
            </div>
            <span>CONNECT</span>
          </div>
        </a>
        <div className={"upper"}>{top}</div>
        <div className={"lower"}>{bottom}</div>
      </div>
    </div>
  );
}

export default Contact;
{
  /*
        <div className={"contactIntro"}>
          <div className={"line"}>{top}</div>
          <div className={"line"}>{bottom}</div>
        </div>*/
}
