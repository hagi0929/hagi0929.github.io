import "./navBar.scss";
import React, {createRef, useEffect, useMemo, useState} from "react";
import {inflate} from "zlib";

interface NavBarPropType {
  menuNum: any;
  options: any;
}

function NavBar(props: NavBarPropType) {
  const [focusNum, setFocus] = useState(props.options[1]);
  const [menuStyle, setMenuStyle] = useState(
    new Array(4).fill(props.options[0])
  );
  useEffect(() => {
    let style = new Array(4).fill(props.options[0]);
    style[focusNum] += props.options[2];
    setMenuStyle(style);
  }, [focusNum]);

  useEffect(() => {
    setFocus(props.options[1]);
  }, [props]);

  function changeFocus(rcv: number) {
    setFocus(rcv);
  }

  const menuClicked = (event: React.MouseEvent<HTMLElement>) => {
    props.menuNum(focusNum);
  };
  return (
    <div className={"navBar"} >
      <div className={"navBarMenu"}>
        <a
          className={menuStyle[0]}
          onMouseEnter={() => changeFocus(0)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          <span className={"menuSpan"}>Home</span>
        </a>
        <a
          className={menuStyle[1]}
          onMouseEnter={() => changeFocus(1)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          <span className={"menuSpan"}>About</span>
        </a>
        <a
          className={menuStyle[2]}
          onMouseEnter={() => changeFocus(2)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          <span className={"menuSpan"}>Projects</span>
        </a>
        <a
          className={menuStyle[3]}
          onMouseEnter={() => changeFocus(3)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          <span className={"menuSpan"}>Contact</span>
        </a>
      </div>
      <style>{}</style>
    </div>
  );
}

export default NavBar;
