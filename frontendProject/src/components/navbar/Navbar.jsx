import "./Navbar.css";

import logo from "../../assets/logo.png";



const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
        <div className="others">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
             </ul>
             <button>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar