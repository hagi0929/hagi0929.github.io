import "./project.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
import Typewriter from "typewriter-effect";

import {useEffect, useRef, useState} from "react";

function ProjectContent() {
  return (
    <div className={"projectLayout"}>
      <div className={"primaryProjectContainer"}>
        <div className={"primaryProjectText"}>
          <span>Projects</span>
          <span>Throughout 6 years of programming experience I have made planty of projects</span>
          <span>here are some of the list...</span>
          <span> {"< >"} </span>
        </div>
        <div className={"primaryProjectSlide"}>

        </div>
      </div>
    </div>
);
}

function Project()
  {
    return (
      <div className={"mainLayout"}>
        <ProjectContent/>
      </div>
    );
  }

export default Project;
