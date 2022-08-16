import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../data/skills/techstack.json";
import awards from "../../data/skills/techstack.json";
// @ts-ignore
import jQuery from "jquery";

function AboutContent() {
  return (
    <div className={"aboutLayout"}>
      <div className={"title1 titleText"}>
        <span className={"translucent"}>first solve the</span> problem,
      </div>
      <div className={"title2 titleText"}>
        <span className={"translucent"}>then write the</span> code.
      </div>
      <div className={"author titleSubText translucent"}>- John Jhonson -</div>
      <div className={"description titleSubText translucent"}>
        Lorem ipsum dolor sit amet. Ea repellat nobis aut eius perspiciatis vel
        laborum dolore id numquam consectetur non similique molestiae. Et ipsa
        minima non mollitia laborum ab commodi fugit. Sed libero quos et
        necessitatibus dignissimos et omnis aperiam in exercitationem molestias
        id asperiores dolores. sibal cex.
      </div>
    </div>
  );
}

function About() {
  return (
    <div className={"mainLayout"}>
      <div className={"side"}></div>
      <AboutContent />
      <div className={"side1"}></div>
    </div>
  );
}

export default About;
