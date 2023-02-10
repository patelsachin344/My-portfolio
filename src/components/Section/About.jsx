import React from "react";
import "../../styles/About.css";
import { FaAward } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
var ProjectNumber;

fetch("https://api.github.com/users/patelsachin344")
  .then((response) => response.json())
  .then((data) => {
    ProjectNumber = `${data.public_repos + data.public_gists + "+"}`;
  })
  .catch(() => {
    ProjectNumber = "5+";
  });

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="me image-card">
          <img src={require("../../assets/Pics/me2.jpeg")} alt="me" />
        </div>
        <div className="about_content">
          <div className="about_card">
            <article className="about_card-content">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>Curently studying</small>
            </article>

            <article className="about_card-content">
              <BsFolder className="about_icons" />
              <h5>Projects</h5>
              <small>{ProjectNumber}</small>
            </article>

            <article className="about_card-content">
              <BsStar className="about_icons" />
              <h5>Achivements</h5>
              <small>1+</small>
            </article>
          </div>
          <p>
            Hello! My name is <span>Sachin Patel</span>. Passionate Full Stack
            Web Developer with skills in the MERN stack, I have learned Full
            Stack Web Development in Masai school.
            <br /> Skilled in problem- solving and execution of software tasks
            from start to finish. I look forward to joining a company where I
            can contribute to individual and company growth..
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
