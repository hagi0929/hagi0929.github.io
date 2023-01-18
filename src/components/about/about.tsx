import "./about.scss";
import Marquee from "react-fast-marquee";
import tech from "../../assets/data.json";
import awards from "../../assets/data.json";
import Typewriter from "typewriter-effect";
import {EZIO} from "../animation/animation";
import {useEffect, useRef, useState} from "react";

function AboutContent() {
    const quoteContainerRef = useRef<HTMLDivElement>(null);
    const introTypeRef = useRef<HTMLDivElement>(null);
    const changeTypeColor = (val: String) => {
        // @ts-ignore
        introTypeRef.current.style.background = val;
    };
    useEffect(() => {
        const changeTypeColor = (val: String) => {
            // @ts-ignore
            introTypeRef.current.style.background = val;
        };
    }, []);
    return (
        <div className={"aboutLayout"}>
            <div className={"aboutIntroContainer"}>
                <EZIO className={"line quoteContainer"} onIntersect={(refs: any) => {
                    refs.current.className += " activateAnimation"
                }}>
                    <div className={"quote left animation titleText"}>first solve the problem,</div>
                    <div className={"quote right reverse animation titleText"}>then write the code.</div>
                </EZIO>
                <EZIO className={"line descriptionContainer titleSubText"} onIntersect={(refs: any) => {
                    refs.current.className += " activateAnimation"
                }}>
                    <div className={"quote down animation description gray"}> I am a problem-solver at heart, driven to
                        tackle complex challenges and find innovative solutions. As a software developer, I strive to
                        live by the mantra 'first solve the problem, then write the code' in order to deliver impactful
                        and efficient solutions to my clients and users.
                    </div>
                </EZIO>
            </div>
            <div className={"skillsContainer"}>
                <EZIO className={"line skillIntro"} onIntersect={(refs: any) => {
                    refs.current.className += " activateAnimation"
                }}>
                    <div className={"skillIntroText down animation"}>I do&nbsp;</div>
                    <div ref={introTypeRef} className={"skillIntroType down animation"}>
                        <Typewriter
                            onInit={(typewriter) => {
                                const temps = [
                                    ["Algorithm", "#1877F2"],
                                    ["Front-end", "#ffff00"],
                                    ["Back-End", "#f05650"],
                                ];
                                for (const temp in temps)
                                    typewriter
                                        .callFunction(() => {
                                            changeTypeColor(temps[temp][1])
                                        })
                                        .pauseFor(500)
                                        .typeString(temps[temp][0])
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </EZIO>
                <EZIO className={"techStackContainer"} onIntersect={(refs: any) => {
                    refs.current.className += " activateAnimation"
                }}>
                    <div className={"line reverse"}>
                        <div className={"languageT down animation"}>Language</div>
                    </div>
                    <div className={"line"}>
                        <div className={"languageC down animation gray"}>Python C++ Java Javascript Typescript CSS/Scss
                            HTML PHP SQL
                        </div>
                    </div>
                    <div className={"line reverse"}>
                        <div className={"frameworkT down animation"}>Framework</div>
                    </div>
                    <div className={"line"}>
                        <div className={"frameworkC down animation gray"}>React.js Node.js django</div>
                    </div>
                    <div className={"line reverse"}>
                        <div className={"toolsT down animation"}>Tools</div>
                    </div>
                    <div className={"line"}>
                        <div className={"toolsC down animation gray"}>MySQL Tensorflow Git AWS</div>
                    </div>
                </EZIO>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className={"mainLayout"}>
            <AboutContent/>
        </div>
    );
}

export default About;
