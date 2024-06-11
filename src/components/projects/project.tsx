import "./project.scss";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import InfoCard from "../UI/card";
import data from "../../assets/variables/Projects.json";
import { EZIO } from "../animation/animation";

interface Project {
  Techstack: string[];
  Description: string | null;
  Website: string | null;
  Github: string | null;
  Thumbnail: string[];
  isPrimary: boolean;
  name: string;
}

const projects: Project[] = data;
const fileDir: string = process.env.PUBLIC_URL + "/files";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function ProjectContent() {
  const [my_swiper, set_my_swiper] = useState(useSwiper());
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const mainProjects = projects.filter((project) => project.isPrimary);
  const secondaryProjects = projects.filter((project) => !project.isPrimary);

  const mainProjectRef = useMemo(
    () =>
      Array(mainProjects.length)
        .fill(0)
        .map(() => createRef<any>()),
    [mainProjects.length]
  );

  let mainProjectCards = [];
  for (let i in mainProjectRef) {
    const image = mainProjects[i].Thumbnail[0] || "";
    mainProjectCards.push(
      <SwiperSlide
        key={i}
        onClick={() => {
          my_swiper.slideTo(parseInt(i));
        }}
        className={"slide"}
      >
        <div
          className={"cardFront"}
          style={{ backgroundImage: `url(${fileDir}/${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
        >
        <img src="" alt="" /></div>
        <InfoCard
          ref={mainProjectRef[i]}
          project={mainProjects[i]}
          colorfulSkill={true}
        />
      </SwiperSlide>
    );
  }

  let secondaryProjectCards = [];
  for (let i in secondaryProjects.reverse()) {
    const image = secondaryProjects[i].Thumbnail[0] || "";
    const TColor = getRandomColor();
    secondaryProjectCards.push(
      <EZIO
        key={i}
        className={"line P100"}
        onIntersect={(refs: any) => {
          refs.current.className += " activateAnimation";
        }}
      >
        <div className={"secondaryProjectComponent up animation"}>
          <div
            className={"container"}
            style={{
              color: TColor,
              background:
                "linear-gradient(180deg, " +
                TColor +
                "00 2.58%, " +
                TColor +
                "14 100%)",
            }}
          >
            <div
              className={"thumbnail"}
              style={{ backgroundImage: `url(${fileDir}/${image})` }}
            ></div>
            <InfoCard project={secondaryProjects[i]} colorfulSkill={true} />
          </div>
        </div>
      </EZIO>
    );
  }

  useEffect(() => {
    for (let i = 0; i < mainProjectRef.length; i++) {
      if (swiperIndex === i) {
        mainProjectRef[i].current!.style.top = "calc(100% - 60px)";
        mainProjectRef[i].current!.style.opacity = "1";
      } else {
        mainProjectRef[i].current!.style.top = "0";
        mainProjectRef[i].current!.style.opacity = "0";
      }
    }
  }, [swiperIndex, mainProjectRef]);

  return (
    <div className={"projectLayout"}>
      <EZIO
        className={"primaryProjectContainer"}
        onIntersect={(refs: any) => {
          refs.current.className += " activateAnimation";
        }}
        threshold={0.5}
      >
        <div className={"primaryProjectText left animation"}>
          <span className={"titleStyle"}>Projects</span>
          <span className={"contentStyle"}>
            Throughout 6 years of programming experience I have made plenty of
            projects
          </span>
          <span className={"subContentStyle"}>
            here are some of the list...
          </span>
          <div className={"control"}>
            <div
              className={"controlButton"}
              onClick={() => my_swiper.slidePrev()}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className={"controlButton"}
              onClick={() => my_swiper.slideNext()}
            >
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div className={"primaryProjectSlideContainer right animation"}>
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            className={"primaryProjectSlide"}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(ev) => {
              setSwiperIndex(ev.activeIndex);
            }}
            modules={[Pagination]}
          >
            {mainProjectCards}
          </Swiper>
        </div>
      </EZIO>
      <div className={"secondaryProjectContainer"}>
        <EZIO
          className={"secondaryProjectText"}
          onIntersect={(refs: any) => {
            refs.current.className += " activateAnimation";
          }}
        >
          <div className={"line titleStyle"}>
            <div className={"up animation foo"}>Other Noteworthy Projects</div>
          </div>
          <div className={"line subContentStyle"}>
            <div className={"up animation foo"}>all made with love</div>
          </div>
        </EZIO>
        <div className={"secondaryProjectDisplay"}>
          {secondaryProjectCards}
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className={"mainLayout"}>
      <ProjectContent />
    </div>
  );
}

export default Project;
