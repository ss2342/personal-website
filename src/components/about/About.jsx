import './about.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
// import developer from "./developer.jpg"

export default function About() {
    useEffect(() => {
        Aos.init({duration: 2000});
    })
    return (
        <div data-aos="fade-up" className="about" id="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={process.env.PUBLIC_URL + '/assets/developer.jpg'} alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    Hello all! My name is Satyen Singh and I am a Computer Science Master's Student at New York University Tandon School of Engineering. Over the course of my education and my professional experience, I have developed a keen interest in the theoretical and practical applications of Deep Learning to real world problems. I am a strong proponent of human-centric technology believe that every Computer Scientist should strive to use scientific, computational, and ethical reasoning to positively impact the world. Great technology is more than just making faster and smarter appliations; rather, it is providing humans with the right tools to enrich their lives as well as the enviornment around them. 
                </p>
                <p className="about-desc">
                    Through my education and experience, I have gained expertise and a deeper understanding in various Computer Science disciplines. My academic background has provided me with a strong theoretical and mathematical understanding of Deep Learning frameworks, particularly in the context of Natural Language Processing and Reinforcement Learning. Through my practical and professional work, I have gained valuable experience in using Language based Transformer models as well as Vision Transformers (ViT) to solve exciting and intriguing business problems in varied domains ranging from government to healthcare.  I have experience in a plethora of programming languages such as Python, C++, and R as well as have implemented front-end frameworks using HTML, CSS, and JavaScript. Last, I am fascinated by the intertwining of Computer Science, Mathematics, and Algorithms and intend to do further research in Algorithmic Machine Learning and Reinforcement Learning to use these technologies in a more scalable and accessable way. 
                </p>


            </div>
        </div>
    )
}
