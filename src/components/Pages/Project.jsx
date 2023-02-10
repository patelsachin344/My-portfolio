import React from "react";
import Nav from "../Section/Nav";
import "../../styles/project.css";
import RepoStats from "../ExternalComponents/RepoStats";

const Project = () => {
  // All projects show in new page
  return (
    <>
      <div>
        <Nav />
        <div className="project_container">
          <h2>Projects</h2>
          <h5>Some are usefull, while some are for fun</h5>
          <RepoStats />
        </div>
      </div>
    </>
  );
};

export default Project;
