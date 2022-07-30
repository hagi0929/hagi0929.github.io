import "./navBar.scss";
interface NavBarPropType {
  options: any;
}
function NavBar(props: NavBarPropType) {
  let focus = Array(5).fill(props.options[0]);
  focus[props.options[1]] += props.options[2];
  return (
    <div className={"navBar"}>
      <div className={"navBarMenu"}>
        <a className={focus[0]}>Home</a>
        <a className={focus[1]}>About</a>
        <a className={focus[3]}>Projects</a>
        <a className={focus[4]}>Contact</a>
      </div>
      <style>{}</style>
    </div>
  );
}
export default NavBar;
