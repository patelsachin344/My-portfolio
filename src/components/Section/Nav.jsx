import React, { useState, useEffect } from "react";
import logo from "..//..//assets/othersPics/Navlogo.png";
import "../../styles/Nav.css";

const Nav = ({ inView }) => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(inView);
  }, [inView]);

  // const [showNav, setShowNav] = useState(() => null);

  // useEffect(() => {
  //   let lastScrollPosition = 0;
  //   setShowNav(true);
  //   document.addEventListener(
  //     "scroll",
  //     function (e) {
  //       if (window.scrollY > lastScrollPosition) {
  //         setShowNav(false);
  //       } else {
  //         setShowNav(true);
  //       }
  //       lastScrollPosition = window.scrollY;
  //     },
  //     {
  //       passive: true,
  //     }
  //   );
  // }, []);

  return (
    <nav
    // style={{
    //   opacity: showNav ? 1 : 0,
    //   top: showNav ? 0 : "-100px",
    // }}
    >
      <div className="nav-text">
        <img src={logo} alt="navlogo" />
      </div>

      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li>
            <a
              href={"/#"}
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href={"#about"}
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href={"#experience"}
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href={"#projects"}
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href={"#contact"}
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>

          {/* <span>
            <a
              href={() => false}
              onClick={() => alert("Coming Soon...")}
              className="nav_btn"
            >
              Resume
            </a>
          </span> */}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
