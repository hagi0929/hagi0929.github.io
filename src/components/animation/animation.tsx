import { useEffect, useState } from "react";
import "./animation.scss";

interface FadeInInputs {
  text: String[];
  duration: number;
  delay: number;
}

function FadeIn(props: FadeInInputs) {
  let textNum = props.text.length;
  let displayList = [];
  for (let i = 0; i < textNum; i++) {
    console.log(
        props.text[i])
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
  console.log(displayList)
  return <div className={"FadeIn"}>{displayList}</div>;
}
export default FadeIn