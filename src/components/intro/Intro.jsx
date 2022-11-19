import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Intro() {

    useEffect(() => {
        Aos.init({duration: 2000});
    })

    const textRef = useRef(); 
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Engineer", "Developer", "Student", "Enthusiast"]
        })
    }, [])
    return (
        <div data-aos="fade-up" className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/satyen.png"} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Satyen Singh</h1>
                    <h3>Machine Learning <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt=""/>
                </a>
            </div>
        </div>
    )
}
