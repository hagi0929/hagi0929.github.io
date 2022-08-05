import "./navBar.scss";
import React, { createRef, useEffect, useMemo, useState } from "react";
import { inflate } from "zlib";

interface NavBarPropType {
  menuNum: any;
  options: any;
}

function NavBar(props: NavBarPropType) {
  console.log(props.options);
  const [focusNum, setFocus] = useState(props.options[1]);
  let focus = Array(4).fill(props.options[0]);
  focus[focusNum] += props.options[2];
  const [menuStyle, setMenuStyle] = useState(focus);

  useEffect(() => {
    console.log("focusNum", props.options)
    let focus = Array(4).fill(props.options[0]);
    focus[focusNum] += props.options[2];
    setMenuStyle(focus);
  }, [focusNum]);
  useEffect(() => {
    console.log("focusNum", props.options)
    let focus = Array(4).fill(props.options[0]);
    focus[props.options[1]] += props.options[2];
    setMenuStyle(focus);
  }, [props]);
  useEffect(()=>{
    changeFocus(props.options[1])
  }, [props])

  function changeFocus(rcv: number) {
    setFocus(rcv);
  }

  const menuClicked = (event: React.MouseEvent<HTMLElement>) => {
    props.menuNum(focusNum);
  };
  return (
    <div className={"navBar"}>
      <div className={"navBarMenu"}>
        <a
          className={menuStyle[0]}
          onMouseEnter={() => changeFocus(0)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          Home
        </a>
        <a
          className={menuStyle[1]}
          onMouseEnter={() => changeFocus(1)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          About
        </a>
        <a
          className={menuStyle[2]}
          onMouseEnter={() => changeFocus(2)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          Projects
        </a>
        <a
          className={menuStyle[3]}
          onMouseEnter={() => changeFocus(3)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          Contact
        </a>
      </div>
      <style>{}</style>
    </div>
  );
}

export default NavBar;
