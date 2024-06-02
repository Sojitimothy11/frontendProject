import "./Services.css";

import React from 'react'
import corporateOne from "../../assets/corparrow.svg";
import corporateTwo from "../../assets/vectorcorp.svg";
import graphicOne from "../../assets/graphicarrow.svg";
import graphicTwo from "../../assets/vectorgraph.svg";
import mobileOne from "../../assets/mobilearrow.svg";
import mobileTwo from "../../assets/Vectormob.svg";
import webOne from "../../assets/webarrow.svg";
import webTwo from "../../assets/vectorweb.svg";

const Services = () => {
  return (
    <div className="container">
     <div className="contain"> 
      <div className="upper">
      <h2 className="headertext">OUR SERVICES</h2>
     <center> <h2 className="heading">Where Tech Meets Success</h2></center>

      <p className="paragraphtext">Transform your business with our expert tech solutions! From strategic planning to seamless implementation, we'll <br />
       help you harness the power of technology to drive growth, boost efficiency, and stay ahead of the competition</p>
      
      </div>
      
      <div className="lower">
        <div className="corporate">
        <img src={corporateTwo} className="vector" alt="" />
        <div className="breakpoint">
          <div>
          <h3>Corporate <br /> Branding</h3>
          </div>
          <div>
          <img src={corporateOne} className="icon" alt="" />
          </div>
        </div>
        
       
        </div>

        <div className="graphic">
        <img src={graphicTwo} className="vector" alt="" />
        <div className="breakpoint">
          <div>
          <h3>Graphic <br /> Design</h3>
          </div>
          <div>
          <img src={graphicOne} className="icon" alt="" />
          </div>
        </div>
        
        
        </div>

        <div className="webdesign">
        <img src={webTwo} className="vector" alt="" />
        <div className="breakpoint">
          <div>
          <h3>Web Design &<br /> Development</h3>
          </div>
          <div>
          <img src={webOne} className="icon" alt="" />
          </div>
        </div>      
        </div>

        <div className="mobile">
        <img src={mobileTwo} className="vector" alt="" />
        <div className="breakpoint">
          <div>
          <h3>Mobile Design &<br /> Development</h3>
          </div>
          <div>           
        <img src={mobileOne} className="icon" alt="" />
          </div>
        </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Services;