import "./AboutPage.css";

import comment from "../../assets/comment.svg";
import imgFive from "../../assets/Rectangle 463.png";
import imgFour from "../../assets/Rectangle 454.png";
import imgThree from "../../assets/Rectangle 4662.png";
import imgTwo from "../../assets/Rectangle 4460.png";
import oneImage from "../../assets/Rectangle 458.png";
import square from "../../assets/square.svg";

const AboutPage = () => {
  return (
    <div>
      <div className="overlay">

        <div className="layer">
        <h2 className="heading">About Styleplus</h2>
          <div className="up">
         
            <img src={square} alt="svg" className="square" />
    
     <div className="images">
			
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
    
          <div className="down">

               <h2 > <img src={comment} alt="comm" className="comm"/>Spark innovation, fuel growth</h2>
          
            <p> At Styleplus, we're passionate about harnessing the power of technology to drive innovation and growth. As a leading tech service <br />
             company, we specialize in providing cutting-edge solutions that help businesses thrive in an ever-evolving digital landscape. With a keen <br />
           eye for emerging trends and a deep understanding of our clients' needs, we craft tailored solutions that empower companies to stay ahead <br />
           of the curve, drive efficiency, and achieve their goals. By combining our technical expertise with a commitment to exceptional customer <br />
            service, we help businesses unlock their full potential and succeed in today's fast-paced digital world. </p>
                         
          </div>
        </div>
    </div>
    </div>
  )
}

export default AboutPage;