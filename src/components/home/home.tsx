import "./home.scss";
import { useMediaQuery } from "react-responsive";

function Home() {
  return (
    <div className="homeLayout">
      <div className={"homeHeader"}>
        <div className={"homeHeaderTitle"}>Hi, I'm Jaehak</div>
        <div className={"homeHeaderContent"}>
          An enthusiastic university student, and a math lover who's interested
          in combining mathematics into programming
        </div>
      </div>
    </div>
  );
}

export default Home;
