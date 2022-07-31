import "./about.scss";
import Marquee from "react-fast-marquee";
// @ts-ignore
import jQuery from 'jquery';
function Skills() {
  let langList = [
    "TYPESCIPT",
    "JAVASCRIPT",
    "JAVA",
    "C",
    "C++",
    "PYTHON",
    "PHP",
    "HTML",
    "CSS",
    "SASS",
    "SQL",
  ];
  let skillToolsList = [
    "TENSORFLOW",
    "REACT",
    "GITHUB",
    "NODEJS",
    "MYSQL",
    "VUE",
    "AWS",
    "LINUX",
    "JQUERY",
  ];
  return (
    <div className={"skillsLayout"}>
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
          speed={30}
          direction={"right"}
          pauseOnClick={true}
        >
          {skillToolsList.map((elem) => (
            <span className={"marqueeElem medium"}>{elem}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="aboutLayout">
      <div className={"skillsHeader"}>
        <Skills />
      </div>
    </div>
  );
}
export default About;
