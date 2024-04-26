import React from "react";
import pfpgif from "../assets/pfpgif.gif";
import { Link } from "react-router-dom";
import "../Styles/NavBarStyles.css";

const NavBar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  };

  return (
    <>
      <div className="pfpgif-container">
        <br />
        <img src={pfpgif} alt="" className="pfpgif-img" />
      </div>
      <div className="menu">
        <div className="menu-links">
          <Link to="/homepage" className="menu__link">
            Home
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>
          <Link to="/about" className="menu__link">
            About
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>
          <Link to="/fun" className="menu__link">
            Fun!
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>
          <Link to="/contact" className="menu__link">
            Contact
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 152.9 43.4"
              xmlSpace="preserve"
            >
              <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
            </svg>
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-toggle-container">🍔</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
