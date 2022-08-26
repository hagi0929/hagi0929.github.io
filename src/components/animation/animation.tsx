import {useEffect, useRef, useState} from "react";
import "./animation.scss";
import {} from "../../assets/data.json"

interface FadeInInputs {
  text: String[];
  duration: number;
  delay: number;
}

function FadeIn(props: FadeInInputs) {
  let textNum = props.text.length;
  let displayList = [];
  for (let i = 0; i < textNum; i++) {
    displayList.push(
      <span
        style={{
          animation:
            "fade-in 0.8s " +
            (props.delay + i * props.duration) +
            "s forwards cubic-bezier(0.11, 0, 0.5, 0)",
        }}
      >
        {props.text[i]}&nbsp;
      </span>
    );
  }
  return <div className={"FadeIn"}>{displayList}</div>;
}

function EZIO(props: any) {
  const component = useRef(null)
  useEffect(() => {
      let observer = new IntersectionObserver(([entry]) => {
          if (entry.intersectionRatio>=0.99) {
            props.handleIntersect(component)
            observer.disconnect()
          }
        },
        {
          threshold: [1],
        }
      )
      observer.observe(component.current!)
    }

    ,
    []
  )
  return (<div className={props.className} ref={component}>
    {props.children}
  </div>)
}

export {FadeIn, EZIO}