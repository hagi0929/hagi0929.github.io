import "./navBar.scss";
import { useEffect, useState } from "react";
import { inflate } from "zlib";
interface NavBarPropType {
  options: any;
}
function NavBar(props: NavBarPropType) {
  const [focusNum, setFocus] = useState(props.options[1]);
  let focus = Array(5).fill(props.options[0]);
  focus[focusNum] += props.options[2];

  useEffect(() => {
    let focus = Array(5).fill(props.options[0]);
    focus[focusNum] += props.options[2];
    console.log(focus)
  }, [focusNum]);
  function changeFocus(rcv: number) {
    setFocus(rcv);
  }
  return (
    <div className={"navBar"}>
      <div className={"navBarMenu"}>
        <a
          className={focus[0]}
          onMouseEnter={() => changeFocus(0)}
          onMouseLeave={() => changeFocus(props.options[1])}
        >
          Home
        </a>
        <a
          className={focus[1]}
          onMouseEnter={() => changeFocus(1)}
          onMouseLeave={() => changeFocus(props.options[1])}
        >
          About
        </a>
        <a
          className={focus[2]}
          onMouseEnter={() => changeFocus(2)}
          onMouseLeave={() => changeFocus(props.options[1])}
        >
          Projects
        </a>
        <a
          className={focus[3]}
          onMouseEnter={() => changeFocus(3)}
          onMouseLeave={() => changeFocus(props.options[1])}
        >
          Contact
        </a>
      </div>
      <style>{}</style>
    </div>
  );
}
export default NavBar;
