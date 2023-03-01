import React from "react";
import "../../styles/Header.css";

import HeaderSocials from "../ExternalComponents/HeaderSocials";
import TypingEffect from "../ExternalComponents/TypingEffect";
import CTA from "../ExternalComponents/CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h3>Hi 👋 I'm</h3>
          <TypingEffect />
          <span>
            An enthusiastic Full stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications.
          </span>
          <CTA />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
