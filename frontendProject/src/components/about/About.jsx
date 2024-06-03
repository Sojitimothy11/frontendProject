import "./About.css";

import imgFive from "../../assets/Rectangle 463.png";
import imgFour from "../../assets/Rectangle 454.png";
import imgThree from "../../assets/Rectangle 4662.png";
import imgTwo from "../../assets/Rectangle 4460.png";
import oneImage from "../../assets/Rectangle 458.png";
import square from "../../assets/square.svg";

const About = () => {
  return (
    <div>
      <div className="parent">

        <div className="child">
          <div className="left">
            <img src={square} alt="svg" className="square" />
    
    <div className="carousel">
			
			<div className="change_outer">
				<div className="change_inner">
					<div className="element"> <img src={oneImage}  alt="image"/> </div>
					<div className="element"><img src={imgTwo}  alt="image" /></div>
					<div className="element"><img src={imgThree}  alt="image" /></div>
					<div className="element"><img src={imgFour}  alt="image" /></div>
					<div className="element"><img src={imgFive}  alt="image" /></div>
				</div>
			</div>
		</div>
          

          </div>
          <div className="right">
            <h2 className="aboutone">ABOUT US</h2>
      
               <h2 className="abouttwo"> Spark innovation, fuel growth</h2>
        
          
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