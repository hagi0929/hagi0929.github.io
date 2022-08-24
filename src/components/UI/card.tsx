import './card.scss'
import {BiLinkExternal} from 'react-icons/bi';
import {FiGithub} from 'react-icons/fi';
import {createRef, forwardRef, useEffect, useMemo, useRef, useState} from "react";
import {SwiperSlide} from "swiper/react";

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


const InfoCard = forwardRef((prop: any, ref) => {
    let skillsElements = []
    console.log(prop.project)
    const title = prop.project["title"]
    const description = prop.project["description"]
    const externalLink = () => {
      if (typeof prop.project["link"] !== 'undefined') {
        return <a href={prop.project["link"]} target="_blank"><BiLinkExternal/></a>
      }
    }
    const githubLink = () => {
      if (typeof prop.project["github"] !== 'undefined') {
        return <a href={prop.project["github"]} target="_blank"><FiGithub/></a>
      }
    }
    const skillStyle = (skill:any) => {
      if (prop.colorfulSkill) {
        return {
          // @ts-ignore
          color: skillsColor[skill.toLowerCase()],
          // @ts-ignore
          background: skillsColor[skill.toLowerCase()] + "40",
          padding: "4px 10px 4px 10px",
          opacity: 1
        }
      } else {
        return {}
      }
    }
    for (const skill of prop.project["skills"]) {
      skillsElements.push(<span className="skill"
                                style={skillStyle(skill)}>{skill}</span>)
    }
    InfoCard.defaultProps = {
      colorfulSkill: false
    }

    return (
      // @ts-ignore
      <div ref={ref} className={"cardBack cardInfo"}>
        <div className={"titleContainer"}>
          <span className={"titleStyle"}>{title}</span>
          <div className={"linkContainer"}>{externalLink()}{githubLink()}
          </div>
        </div>
        <span className={"contentStyle"}>{description}</span>
        <span className={"skillContainer"}>{skillsElements}</span>
      </div>
    )
  }
)

export default InfoCard