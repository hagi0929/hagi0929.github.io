import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
// @ts-ignore
import jQuery from "jquery";
import { useEffect, useRef, useState } from "react";

function AboutContent() {
  const quoteContainerRef = useRef<HTMLDivElement>(null);
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
