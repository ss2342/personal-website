import { useState } from "react";
import "./skills.scss";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function Skills() {
  console.log("The public url is: ", process.env.PUBLIC_URL)
    useEffect(() => {
        Aos.init({duration: 2000});
    })
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: process.env.PUBLIC_URL + "/assets/ml.png",
      title: "Deep Learning",
      img:
      process.env.PUBLIC_URL + "/assets/ai_tech.png",
    },
    {
      id: "2",
      icon: process.env.PUBLIC_URL + "/assets/swe.png",
      title: "Languages",
      img:
        process.env.PUBLIC_URL + "/assets/languages.png",
    },
    {
      id: "3",
      icon: process.env.PUBLIC_URL + "/assets/sde.png",
      title: "Software Development",
      img:
      process.env.PUBLIC_URL + "/assets/swetools.png",
    },
    {
        id: "4",
        icon: process.env.PUBLIC_URL + "/assets/cloud-services.png",
        title: "Cloud and Container Tools",
        img:
        process.env.PUBLIC_URL + "/assets/cloud.png",
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div data-aos="fade-up" className="skills" id="skills">
        <div className="title">
            <h1>Areas of Expertise</h1>
        </div>
        
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
