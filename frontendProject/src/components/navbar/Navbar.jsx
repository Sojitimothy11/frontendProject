import "./Navbar.css";

import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="./" className="navbar">
        <div className="logo">
        <img src={logo} alt="logo" />
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
             <button>Get Started</button>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar