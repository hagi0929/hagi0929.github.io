import "./project.scss";
import Marquee from "react-fast-marquee";
import tech from "../../../assets/techstack.json";
import awards from "../../../assets/techstack.json";
import Typewriter from "typewriter-effect";

import {createRef, useEffect, useMemo, useRef, useState} from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Pagination} from "swiper";

const project = [{
  image: "..../assets/projectImage/mathboard.svg",
  title: "title1"

}, {
  image: "https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg",
  title: "title1"

}]

function ProjectContent() {
  const [my_swiper, set_my_swiper] = useState(useSwiper());
  const [swiperIndex, setSwiperIndex] = useState<number>(0)
  const mainProjectRef = useMemo(
    () =>
      Array(project.length)
        .fill(0)
        .map((i) => createRef<HTMLDivElement>()),
    []
  );

  // @ts-ignore
  let mainProjectCards = []
  const mainProjectContainerRef = useRef() as any;
  for (let i in mainProjectRef) {
    console.log(project[i])
    const title = project[i]["title"]
    const image = project[i]["image"]
    mainProjectCards.push(
      <SwiperSlide className={"slide"}>
        <div className={"cardFront"}
             style={{backgroundImage: "url('" + image + "')"}}></div>
        <div className={"cardBack"} ref={mainProjectRef[i]}>
          <span></span>
        </div>
      </SwiperSlide>
    )
  }
  useEffect(() => {
    for (let i = 0; i < mainProjectRef.length; i++) {
      if (swiperIndex == i) {
        mainProjectRef[i].current!.style.top = "-30px"
        mainProjectRef[i].current!.style.opacity = "1"
      }
      else{
        mainProjectRef[i].current!.style.top = "-100%"
        mainProjectRef[i].current!.style.opacity = "0"
      }
    }
  }, [swiperIndex])
  return (
    <div className={"projectLayout"}>
      <div className={"primaryProjectContainer"}>
        <div className={"primaryProjectText"}>
          <span className={"titleStyle"}>Projects</span>
          <span
            className={"contentStyle"}>Throughout 6 years of programming experience I have made planty of projects</span>
          <span className={"subContentStyle"}>here are some of the list...</span>
          <div className={"control"}>
            <div className={"controlButton"} onClick={() => my_swiper.slidePrev()}>{"<"}</div>
            <div className={"controlButton"} onClick={() => my_swiper.slideNext()}>{">"}</div>
          </div>
        </div>
        <div className={"primaryProjectSlideContainer"}>
          <Swiper
            onInit={(ev) => {
              set_my_swiper(ev)
            }
            }
            className={"primaryProjectSlide"}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            onSlideChange={
              (ev) => {
                setSwiperIndex(ev.activeIndex)
              }
            }
            modules={[Pagination]}
          >
            {mainProjectCards}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className={"mainLayout"}>
      <ProjectContent/>
    </div>
  );
}

export default Project;
