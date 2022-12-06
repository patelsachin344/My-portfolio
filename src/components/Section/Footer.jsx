import React from "react";
import "../../styles/Footer.css";

import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer_logo">
          Sachin Patel
        </a>

        <ul className="permalinks">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="social_media">
          <a
            href={"https://github.com/patelsachin344"}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={"https://www.instagram.com/patelsachin71344/"}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          {/* <a
            href={"https://twitter.com/twxey_"}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a> */}
          <a
            href={"https://www.facebook.com/patelsachin71344"}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href={"https://www.linkedin.com/in/pasachin/"}
            target="_blank"
            rel="noreferrer"
          >
            <SiLinktree />
          </a>
        </div>
        <div className="rocket_container">
          <a href={"/#"} className="rocket">
            <IoMdRocket className="rocket-img" />
          </a>
          <p className="rocket_p">Beam me up, Shawty!</p>
        </div>
        <div className="copyright">
          <small>&copy; patelsachin344. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
