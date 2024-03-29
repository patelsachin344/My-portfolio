import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a
          href={"https://github.com/patelsachin344"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href={"https://www.linkedin.com/in/pasachin/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href={"mailto:sachinpatel7038@gmail.com"}>
          <BsEnvelope />
        </a>
      </div>

      <div className="mail-container">
        <a href={"mailto:sachinpatel7038@gmail.com"} className="mail">
          sachinpatel7038@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
