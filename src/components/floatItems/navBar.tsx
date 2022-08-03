import "./navBar.scss";
import React, { useEffect, useState } from "react";
import { inflate } from "zlib";
interface NavBarPropType {
  menuNum: any;
  options: any;
}
function NavBar(props: NavBarPropType) {
  const [focusNum, setFocus] = useState(props.options[1]);
  let focus = Array(5).fill(props.options[0]);
  focus[focusNum] += props.options[2];

  useEffect(() => {
    let focus = Array(5).fill(props.options[0]);
    focus[focusNum] += props.options[2];
  }, [focusNum]);
  function changeFocus(rcv: number) {
    setFocus(rcv);
  }
  const menuClicked = (event: React.MouseEvent<HTMLElement>) =>{
    props.menuNum(focusNum)
  }
  return (
    <div className={"navBar"}>
      <div className={"navBarMenu"}>
        <a
          className={focus[0]}
          onMouseEnter={() => changeFocus(0)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          Home
        </a>
        <a
          className={focus[1]}
          onMouseEnter={() => changeFocus(1)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          About
        </a>
        <a
          className={focus[2]}
          onMouseEnter={() => changeFocus(2)}
          onMouseLeave={() => changeFocus(props.options[1])}
          onClick={menuClicked}
        >
          Projects
        </a>
        <a
          className={focus[3]}
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
