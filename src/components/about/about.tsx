import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../data/skills/techstack.json";
import awards from "../../data/skills/techstack.json";
// @ts-ignore
import jQuery from "jquery";

function AboutContent() {
  return(<div className={"aboutLayout"}>
    <div className={"title1 titleText"}>first solve the problem,</div>
    <div className={"title2 titleText"}>then write the code.</div>
    <div className={"author"}>- John Jhonson -</div>
  </div>)
}

function About() {
  return (
    <div className={"mainLayout"}>
      <AboutContent />
    </div>
  );
}

export default About;
