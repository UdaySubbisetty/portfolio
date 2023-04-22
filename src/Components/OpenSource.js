import React from "react";
import { openSourceProjects } from "../helpers/constants";
import "./OpenSource.css";

export default function OpenSource() {
  return (
    <div className="experience-container">
      <div className="experience-sub-container">
        <span className="experience-years">Github</span>
        <span className="job-experience">Projects</span>
      </div>
      <div className="project-container">
      {openSourceProjects.map((project) => {
        return (
          <div className="Project-card-container" onClick={()=>{
            window.open(project.gitUrl,"_blank")
          }}>
            <div className="card-container">
              <img src={project.url} alt="" />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
