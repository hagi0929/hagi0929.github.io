import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../data/skills/techstack.json";
import awards from "../../data/skills/techstack.json";
// @ts-ignore
import jQuery from "jquery";

function Skills() {
  let langList = tech.languages;
  let skillToolsList = tech.skillsTools;
  return (
    <div className={"skillsHeader"}>
      <div className={"techStack"}>
        <div>
          <p className={"skillsTitle big"}>TECH STACKS</p>
        </div>
        <div>
          <p className={"skillsTitle medium"}>LANGUAGES</p>
          <Marquee
            className={"marquee"}
            gradient={false}
            speed={40}
            pauseOnClick={true}
          >
            {langList.map((elem) => (
              <span className={"marqueeElem medium"}>{elem}</span>
            ))}
          </Marquee>
        </div>
        <div>
          <p className={"skillsTitle medium"}>SKILLS & TOOLS</p>
          <Marquee
            className={"marquee"}
            gradient={false}
            speed={40}
            direction={"right"}
            pauseOnClick={true}
          >
            {skillToolsList.map((elem) => (
              <span className={"marqueeElem medium"}>{elem}</span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="aboutLayout">
      <div className={"aboutHeader"}>
        ABOUT
      </div>
      <div className={"aboutDescription"}>
        Lorem ipsum dolor sit amet. Ea repellat nobis aut eius perspiciatis vel laborum dolore id numquam consectetur non similique molestiae. Et ipsa minima non mollitia laborum ab commodi fugit. Sed libero quos et necessitatibus dignissimos et omnis aperiam in exercitationem molestias id asperiores dolores.

      </div>
      <div className={"skillsHeader"}>
        <Skills />
      </div>
    </div>
  );
}

export default About;
