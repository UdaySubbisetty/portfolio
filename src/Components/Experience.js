import React from "react";
import { experienceData } from "../helpers/constants";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-sub-container">
        <span className="experience-years">20016 - Present</span>
        <span className="job-experience">Job Experience</span>
      </div>
      {experienceData.map((item) => {
        return (
        <div className="experience-card-container">
        <div className="line">
            <span></span>
        </div>
          <div className="experience-card">
          {item.isInternShip && <span className="intern-ship">*Internship</span>}
            <div className="company-name">
              <span className="job-title">{item.title}</span>
              <span className="location">{item.location}</span>
            </div>
            <span className="duration">{item.duration}</span>
            <ul className="content">
                {item.content.map(points=>{
                    return <li><span>{points}</span></li>
                })}
              
            </ul>
          </div>
        </div>  
        );
      })}
    </div>
  );
}
