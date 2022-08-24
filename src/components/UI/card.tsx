import './card.scss'
import {BiLinkExternal} from 'react-icons/bi';
import {FiGithub} from 'react-icons/fi';
import {createRef, useEffect, useMemo, useRef, useState} from "react";

function InfoCard(prop: any) {
  return (
    <div className={"cardBack cardInfo"}>
      <div className={"titleContainer"}>
        <span className={"titleStyle"}>{prop.title}</span>
        <div className={"linkContainer"}>{prop.externalLink}{prop.githubLink}
        </div>
      </div>
      <span className={"contentStyle"}>{prop.description}</span>
      <span className={"skillContainer"}>{prop.skillsElements}</span>
    </div>
  )

}
export default InfoCard