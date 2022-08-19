import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
import Typewriter from "typewriter-effect";

import { useEffect, useRef, useState } from "react";

function AboutContent() {
  const quoteContainerRef = useRef<HTMLDivElement>(null);
  const introTypeRef = useRef<HTMLDivElement>(null);
  const changeTypeColor = (val: String) => {
    // @ts-ignore
    introTypeRef.current.style.background = val;
  };

  useEffect(() => {
    console.log("quoteContainerRef");
    new IntersectionObserver(
      (entries) => {
        console.log("cex");
        if (entries[0].isIntersecting) {
          quoteContainerRef.current!.className += " activateAnimation";
        }
      },
      {
        threshold: [0.5],
      }
    ).observe(quoteContainerRef.current!);
  }, []);
  useEffect(() => {
    const changeTypeColor = (val: String) => {
      // @ts-ignore
      introTypeRef.current.style.background = val;
    };
  }, []);
  return (
    <div className={"aboutLayout"}>
      <div ref={quoteContainerRef} className={"quoteContainer"}>
        <div className={"quote1 titleText"}>
          <span className={"translucent"}>first solve the</span> problem,
        </div>
        <div className={"quote2 titleText"}>
          <span className={"translucent"}>then write the</span> code.
        </div>
        <div className={"author titleSubText translucent"}>
          - John Jhonson -
        </div>
        <div className={"description titleSubText translucent"}>
          Lorem ipsum dolor sit amet. Ea repellat nobis aut eius perspiciatis
          vel laborum dolore id numquam consectetur non similique molestiae. Et
          ipsa minima non mollitia laborum ab commodi fugit. Sed libero quos et
          necessitatibus dignissimos et omnis aperiam in exercitationem
          molestias id asperiores dolores. sibal cex.
        </div>
      </div>
      <div className={"skillsContainer grid"}>
        <div className={"skillIntro"}>
          <span className={"skillIntroText"}>I do&nbsp;</span>
          <span ref={introTypeRef} className={"skillIntroType"}>
            <Typewriter
              onInit={(typewriter) => {
                const temps = [
                  ["Algorithm", "#1877F2"],
                  ["Front-end", "#ffff00"],
                  ["Back-End", "#f05650"],
                ];
                for (const temp in temps)
                  typewriter
                    .callFunction(() => {
                    })
                    .pauseFor(500)
                    .typeString(temps[temp][0])
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <span className={"languageT T"}>Language</span>
        <span className={"languageC C"}>Python C++ Java Javascript Typescript CSS/Scss HTML PHP SQL</span>
              <span className={"frameworkT T"}>Framework</span>
        <span className={"frameworkC C"}>React.js Node.js django</span>
        <span className={"toolsT T"}>Tools</span>
        <span className={"toolsC C"}>MySQL Tensorflow Git AWS</span>
</div>
    </div>
  );
}

function About() {
  return (
    <div className={"mainLayout"}>
      <div className={"side "}></div>
      <AboutContent />
      <div className={"side1 "}></div>
    </div>
  );
}

export default About;
