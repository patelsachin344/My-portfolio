import React from "react";
import "../../styles/githubRepo.css";

import { data } from "../ExternalComponents/demoProjectArray";

const GithubRepo = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container githubRepo_container">
        {data.map(({ id, image, title, github, demo, teckStacks, about }) => {
          return (
            <article key={id} className="githubRepo_item">
              <div className="gitProject_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div>{about}</div>

              <h2>Tech-Stacks</h2>
              <p>{teckStacks}</p>
              <div className="githubRepo_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy
                </a>
              </div>
            </article>
          );
        })}

        {/* <a href={"./project"} className="btn">
          See all projects
        </a> */}
      </div>
    </section>
  );
};

export default GithubRepo;
