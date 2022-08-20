import "./project.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
import Typewriter from "typewriter-effect";

import { useEffect, useRef, useState } from "react";

function ProjectContent() {
  return <div className={"projectLayout"}>
    <div className={"primaryProjectContainer"}>

    </div>
  </div>;
}

function Project() {
  return (
    <div className={"mainLayout"}>
      <div className={"side "}></div>
      <ProjectContent />
      <div className={"side1 "}></div>
    </div>
  );
}

export default Project;
