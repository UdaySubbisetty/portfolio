import React, { memo, useMemo, useState } from "react";
import Experience from "./Experience";
import OpenSource from "./OpenSource";
import "./Resume.css";

class Technology {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }
}

function Resume() {
  const sectionTitles = ["Professional Skills", "Experience","Open Source"];
  const technologies = [
    new Technology("Java Script", "90%"),
    new Technology("React", "90%"),
    new Technology("React Native", "90%"),
    new Technology("HTML", "90%"),
    new Technology("CSS", "90%"),
    new Technology("Type Script", "80%"),
    new Technology("Swift", "80%"),
    new Technology("Objective-c", "80%"),
  ];
  console.log(technologies);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onSelectSection(index) {
    setSelectedIndex(index);
  }

  function RenderUI(){
    switch (selectedIndex) {
      case 0:
        return <TechnologyUI/>
      case 1:
        return <Experience/>
        break;
      case 2:
          return <OpenSource/>
          break;
      default:
        break;
    }
  }
  function TechnologyUI()
  {
    return(<div className="features-container">
    <span className="experience">Features</span>
    <span className="features-title">Development Skill</span>
    <div className="development-skills">
      {technologies.map((item,index)=>{
        return(
      <div className="progress-bar">
        <span className="progress-title">{item.name}</span>
        <div className="progress">
          <div className="progress-value" style={{ width:item.percentage}}>
            <span className="bar-value">{item.percentage}</span>
          </div>
        </div>
      </div>
      )})}

    </div>
  </div>)
  }
  return (
    <div className="resume">
      <div className="title-section">
        <span className="experience">6+ YEARS OF EXPERIENCE</span>
        <span className="title">My Resume</span>
      </div>
      <ul className="sections">
        {sectionTitles.map((title, index) => {
          return (
            <li
              onClick={() => onSelectSection(index)}
              className={selectedIndex == index ? "active" : ""}
            >
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
      <RenderUI/>
    </div>
  );
}

export default memo(Resume)
