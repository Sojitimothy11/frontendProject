import "./Header.css";

import Jumper from "../../assets/Group 48095926.png";
import React from 'react';
import svg from "../../assets/Line.svg";

const Header = () => {
  return (
    <>
    <div className="wrapper">
      <div className="left">
        <div className="heading">
          <h1>Partner for <br />every <span>marketing</span> <br /> activities</h1>
        </div>
        <div className="paragraph">
          <div className="yellowImg">
            <img src={svg} alt="arrow" />
            </div >
            
            <div className="texts">
            <p>We can support you with content marketing,<br />
             employer branding, web development, <br />
             performance marketing or social media marketing</p>
            </div>
        </div>

      </div>
      <div className="right">
          <img src={Jumper} className="image" alt="image" />
      </div>
     
    <div className="bubble">
      
    </div>
    </div>
    </>
  )
}

export default Header