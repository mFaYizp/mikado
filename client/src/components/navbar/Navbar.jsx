import React from "react";
import "./navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="/assets/immerso-ai-logo-1.png"
            alt="immerso-logo"
            className="immerso-logo-1"
          />
        </div>
        <div className="">
          <ul className="menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">
              Products <ExpandMoreIcon />
            </li>
            <li className="nav-item">
              Company <ExpandMoreIcon />
            </li>
            <li className="nav-item">Pricing</li>
            <div className="nav-button">Beta Site</div>
          </ul>
        </div>
      </div>
     
    </section>
  );
};

export default Navbar;
