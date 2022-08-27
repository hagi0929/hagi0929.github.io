import "./project.scss";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import InfoCard from "../UI/card";
import data from "../../assets/data.json";
import { EZIO } from "../animation/animation";

const project = data.projectMain;
const projectSecondary = data.projectSub;

function ProjectContent() {
  const [my_swiper, set_my_swiper] = useState(useSwiper());
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const mainProjectRef = useMemo(
    () =>
      Array(project.length)
        .fill(0)
        .map((i) => createRef<any>()),
    []
  );

  // @ts-ignore
  let mainProjectCards = [];
  for (let i in mainProjectRef) {
    const image = project[i]["image"];
    mainProjectCards.push(
      <SwiperSlide
        onClick={() => {
          my_swiper.slideTo(parseInt(i));
        }}
        className={"slide"}
      >
        <div
          className={"cardFront"}
          style={{ backgroundImage: "url('" + image + "')" }}
        ></div>
        <InfoCard
          ref={mainProjectRef[i]}
          project={project[i]}
          colorfulSkill={true}
        />
      </SwiperSlide>
    );
  }
  let secondaryProjectCards = [];
  for (let i in projectSecondary) {
    const image = projectSecondary[i]["image"];
    const TColor = projectSecondary[i]["color"];
    secondaryProjectCards.push(
      <EZIO
        className={"line P100"}
        onIntersect={(refs: any) => {
          refs.current.className += " activateAnimation";
        }}
      >
        <div className={"secondaryProjectComponent foo up animation"}>
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
              style={{ backgroundImage: "url('" + image + "')" }}
            ></div>
            <InfoCard project={projectSecondary[i]} />
          </div>
        </div>
      </EZIO>
    );
  }
  useEffect(() => {
    for (let i = 0; i < mainProjectRef.length; i++) {
      if (swiperIndex == i) {
        mainProjectRef[i].current!.style.top = "calc(100% - 60px)";
        mainProjectRef[i].current!.style.opacity = "1";
      } else {
        mainProjectRef[i].current!.style.top = "0";
        mainProjectRef[i].current!.style.opacity = "0";
      }
    }
  }, [swiperIndex]);
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
            Throughout 6 years of programming experience I have made planty of
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
            <div className={"up animation foo"}>
              Other Noteworthy Projects
            </div>
          </div>
          <div className={"line subContentStyle"}>
            <div className={"up animation foo"}>all made with love</div>
          </div>
        </EZIO>
        <div className={"secondaryProjectDisplay"}>{secondaryProjectCards}</div>
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
