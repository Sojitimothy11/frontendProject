import "./Navbar.css";

import React,{useState} from "react";

import { Link } from 'react-router-dom';
import iconOne from "../../assets/top.svg";
import iconTwo from "../../assets/close.svg";
import logo from "../../assets/logo.png";
import small from "../../assets/Smalllogo.png";

const Navbar = () => {

  const[isActive,setIsActive] = useState(false);
  return (
    <>
    <nav>
      <div className="navbar">
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
        <div className="smalllogo">
        <img src={small} alt="logo" />
        </div>
        <div className="others">
          <ul>
            <li>
              <Link to="/aboutpage" >About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
             </ul>
             <button className="buttonOne">Get Started</button>
        </div>
      </div>
        <div onClick={()=>setIsActive(true)} className="menu-icon">
          <img src={iconOne} alt="" />
        </div>

    </nav>
    <div className={`mobile-container ${isActive ? "active": ""} `}>
     <div onClick={()=>setIsActive(false)} className="close"> <img src={iconTwo} alt="closebutton" /></div>
     
     <ul>
            <li>
              <a onClick={()=>setIsActive(false)}  href="#aboutPage" >About</a>
            </li>
            <li>
              <a onClick={()=>setIsActive(false)}  href="#">Services</a>
            </li>
            <li>
              <a onClick={()=>setIsActive(false)}  href="#">Careers</a>
            </li>
            <li>
              <a onClick={()=>setIsActive(false)}  href="#">Contact</a>
            </li>
            <button onClick={()=>setIsActive(false)}  className="btnOOO">Get Started</button>
             </ul>
             
    </div>
    </>
  )
}

export default Navbar