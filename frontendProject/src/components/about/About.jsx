import "./About.css";

import oneImage from "../../assets/Rectangle 458.png";
import square from "../../assets/square.svg";

const About = () => {
  return (
    <div>
      <div className="parent">

        <div className="child">
          <div className="left">
            <img src={square} alt="svg" className="square" />
              <img src={oneImage} className="carousel" alt="" />
          

          </div>
          <div className="right">
            <h2 className="aboutone">ABOUT US</h2>
            <div className="flex">
              <div> <h1 className="side">"</h1></div>
              <div> <h2 className="abouttwo"> Spark innovation, fuel growth</h2></div>
            </div>
          
            <p>
            At Styleplus, we're passionate about harnessing the power of <br />
            technology to drive innovation and growth. As a leading tech <br />
            service company, we specialize in providing cutting-edge <br />
            solutions that help businesses thrive in an ever-evolving <br />
             digital landscape. With a keen eye for emerging trends and<br />
             a deep understanding of our clients' needs, we craft tailored<br />
             solutions that empower companies to stay ahead of the curve, <br />
             drive efficiency, and achieve their goals.</p> <br /><br />
              <button className="read">Read more</button>            
          </div>
        </div>
    </div>
    </div>
  )
}

export default About