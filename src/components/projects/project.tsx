import "./project.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
import Typewriter from "typewriter-effect";
import {BiLinkExternal} from 'react-icons/bi';
import {FiGithub} from 'react-icons/fi';
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Pagination} from "swiper";
import InfoCard from "../UI/card"

const project = [{
  image: "https://raw.githubusercontent.com/hagi0929/personal-website-v2/a84e72c9cff8445114a265aaf20a1e867f03a1ac/assets/projectImage/mathboard.svg",
  title: "MATH BOARD",
  description: "This is a website made for people who are interested in mathematics. ",
  github: "https://github.com/hagi0929/MATH-BOARD",
  link: "http://www.mathboard.online/",
  skills: ["Django", "TypeScript", "SCSS", "HTML", "MySql", "AWS"],
}, {
  image: "https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg",
  title: "title1",
  content: "",
  skills: ["React"],
}]
const skillsColor = {
  react: "#01d0f7",
  typescript: "#007acc",
  scss: "#cd679a",
  django: "#218c65",
  aws: "#f79918",
  php: "#8993be",
  html: "#ff5722",
  mysql: "#4379a1"
}

function ProjectContent() {
  const [my_swiper, set_my_swiper] = useState(useSwiper());
  const [swiperIndex, setSwiperIndex] = useState<number>(0)
  const mainProjectRef = useMemo(
    () =>
      Array(project.length)
        .fill(0)
        .map((i) => createRef<HTMLDivElement>()),
    []
  );

  // @ts-ignore
  let mainProjectCards = []
  const mainProjectContainerRef = useRef() as any;
  for (let i in mainProjectRef) {
    let skillsElements = []
    console.log(project[i])
    const title = project[i]["title"]
    const description = project[i]["description"]
    const image = project[i]["image"]
    const externalLink = () => {
      if (typeof project[i]["link"] !== 'undefined') {
        return <a href={project[i]["link"]} target="_blank"><BiLinkExternal/></a>
      }
    }
    const githubLink = () => {
      if (typeof project[i]["github"] !== 'undefined') {
        return <a href={project[i]["github"]} target="_blank"><FiGithub/></a>
      }
    }

    for (const skill of project[i]["skills"]) {

      skillsElements.push(<span className="skill"
                                style={{
                                  // @ts-ignore
                                  color: skillsColor[skill.toLowerCase()],
                                  // @ts-ignore
                                  background: skillsColor[skill.toLowerCase()] + "40"
                                }}>{skill}</span>)
    }
    mainProjectCards.push(
      <SwiperSlide onClick={() => {
        my_swiper.slideTo(parseInt(i))
      }} className={"slide"}>
        <div className={"cardFront"}
             style={{backgroundImage: "url('" + image + "')"}}></div>
        <div  ref={mainProjectRef[i]}>
          <div className={"titleContainer"}>
            <span className={"titleStyle"}>{title}</span>
            <div className={"linkContainer"}>{externalLink()}{githubLink()}
            </div>
          </div>
          <span className={"contentStyle"}>{description}</span>
          <span className={"skillContainer"}>{skillsElements}</span>
        </div>
      </SwiperSlide>
    )
  }
  useEffect(() => {
    for (let i = 0; i < mainProjectRef.length; i++) {
      if (swiperIndex == i) {
        mainProjectRef[i].current!.style.top = "calc(100% - 60px)"
        mainProjectRef[i].current!.style.opacity = "1"
      } else {
        mainProjectRef[i].current!.style.top = "0"
        mainProjectRef[i].current!.style.opacity = "0"
      }
    }
  }, [swiperIndex])
  return (
    <div className={"projectLayout"}>
      <div className={"primaryProjectContainer"}>
        <div className={"primaryProjectText"}>
          <span className={"titleStyle"}>Projects</span>
          <span
            className={"contentStyle"}>Throughout 6 years of programming experience I have made planty of projects</span>
          <span className={"subContentStyle"}>here are some of the list...</span>
          <div className={"control"}>
            <div className={"controlButton"} onClick={() => my_swiper.slidePrev()}>{"<"}</div>
            <div className={"controlButton"} onClick={() => my_swiper.slideNext()}>{">"}</div>
          </div>
        </div>
        <div className={"primaryProjectSlideContainer"}>
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev)
            }
            }
            className={"primaryProjectSlide"}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            onSlideChange={
              (ev) => {
                setSwiperIndex(ev.activeIndex)
              }
            }
            modules={[Pagination]}
          >
            {mainProjectCards}
          </Swiper>
        </div>
      </div>
      <div className={"secondaryProjectContainer"}>
        <div className={"secondaryProjectText"}>
          <span className={"titleStyle"}>Other Noteworthy Projects</span>
          <span className={"subContentStyle"}>all made with love</span>
        </div>
        <div className={"secondaryProjectDisplay"}>
          <div></div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className={"mainLayout"}>
      <ProjectContent/>
    </div>
  );
}

export default Project;
