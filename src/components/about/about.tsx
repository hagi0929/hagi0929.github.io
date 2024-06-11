import "./about.scss";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { EZIO } from "../animation/animation";
import { useEffect, useRef } from "react";
import data from "../../assets/variables/TechStacks.json";

interface Skill {
  categories: string;
  name: string;
}

const skills: Skill[] = data;

function AboutContent() {
  const quoteContainerRef = useRef<HTMLDivElement>(null);
  const introTypeRef = useRef<HTMLDivElement>(null);

  const changeTypeColor = (val: string) => {
    if (introTypeRef.current) {
      introTypeRef.current.style.background = val;
    }
  };

  useEffect(() => {
    const changeTypeColor = (val: string) => {
      if (introTypeRef.current) {
        introTypeRef.current.style.background = val;
      }
    };
  }, []);

  // Categorize skills
  const languages = skills.filter(skill => skill.categories === "Language").map(skill => skill.name).reverse().join(' ');
  const frameworks = skills.filter(skill => skill.categories === "Framework").map(skill => skill.name).reverse().join(' ');
  const tools = skills.filter(skill => skill.categories === "Tool").map(skill => skill.name).reverse().join(' ');

  return (
    <div className={"aboutLayout"}>
      <div className={"skillsContainer"}>
        <EZIO className={"line skillIntro"} onIntersect={(refs: any) => {
          refs.current.className += " activateAnimation";
        }}>
          <div className={"skillIntroText down animation"}>I do&nbsp;</div>
          <div ref={introTypeRef} className={"skillIntroType down animation"}>
            <Typewriter
              onInit={(typewriter) => {
                const temps = [
                  ["Algorithm", "#1877F2"],
                  ["Front-end", "#ffff00"],
                  ["Back-End", "#f05650"],
                ];
                for (const temp of temps)
                  typewriter
                    .callFunction(() => {
                      changeTypeColor(temp[1]);
                    })
                    .pauseFor(500)
                    .typeString(temp[0])
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </EZIO>
        <EZIO className={"techStackContainer"} onIntersect={(refs: any) => {
          refs.current.className += " activateAnimation";
        }}>
          <div className={"line reverse"}>
            <div className={"languageT down animation"}>Language</div>
          </div>
          <div className={"line"}>
            <div className={"languageC down animation gray"}>{languages}</div>
          </div>
          <div className={"line reverse"}>
            <div className={"frameworkT down animation"}>Framework</div>
          </div>
          <div className={"line"}>
            <div className={"frameworkC down animation gray"}>{frameworks}</div>
          </div>
          <div className={"line reverse"}>
            <div className={"toolsT down animation"}>Tools</div>
          </div>
          <div className={"line"}>
            <div className={"toolsC down animation gray"}>{tools}</div>
          </div>
        </EZIO>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className={"mainLayout"}>
      <AboutContent />
    </div>
  );
}

export default About;
