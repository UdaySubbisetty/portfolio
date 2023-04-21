import React,{useState} from "react";
import { githubLink, linkedinLink } from "../helpers/constants";
import "./Dashboard.css";

export default function Dashboard() {
    const [showMenu, setShowMenu] = useState(false)
    function onClickSkills(link)
    {
      window.open(link,"_blank")
    }
  return (
    <div className="dashboard">
      <div className="header">
        <p>Portfolio</p>
        {/* <ul className="options">
          <li>
            <span>Dashboard</span>
            <span>Resume</span>
            <span>Open source</span>
          </li>
        </ul>
        {
        showMenu &&
        <ul className="options-mobile">
          <li>
            <span>Dashboard</span>
            <span>Resume</span>
            <span>Open source</span>
          </li>
        </ul>
    }
     <img className="list" src={require("../images/list.png")} onClick={()=>{
            setShowMenu(pre=>!pre)
        }}/> */}
      </div>
      <div className="details">
        <div>
          <span className="welcome">WELCOME TO MY WORLD</span>
          <div>
            <span className="name">
              {" "}
              Hi, I’m <span>Uday bhaskar</span>
            </span>
          </div>
          <div className="animation-container">
            <span className="first-char">a</span>
            <ul className="second-char">
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Coder</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>
          
          <p className="summary">
            Experienced React Native, React, iOS, and Android developer with a
            strong background in designing, developing, and deploying mobile
            applications. Skilled in building robust and scalable applications
            with a focus on delivering high-quality user experiences. Proficient
            in using various tools, including React Native, React, Xcode,
            Android Studio, and Git.
          </p>
          <a href={require("../images/React_Uday.pdf")} download>
          <button>Download Resume</button>
          </a>
          </div>
        <div className="skills-container">
       
        <div className="skills">
          <span>FIND WITH ME</span>
          <ul>
            <li onClick={() => onClickSkills(githubLink)}>
              <img src={require("../images/github.png")} alt="" />
            </li>
            <li onClick={() => onClickSkills(linkedinLink)}>
              <img src={require("../images/linkedin.png")} alt="" />
            </li>
          </ul>
        </div>
        <div className="skills">
          <span>BEST SKILL ON</span>
          <ul>
            <li>
              <img src={require("../images/js.png")} alt="" />
            </li>
            <li>
              <img src={require("../images/typescript.png")} alt="" />
            </li>
            <li>
              <img src={require("../images/react.png")} alt="" />
            </li>
            <li>
              <img src={require("../images/swift.webp")} alt="" />
            </li>
            <li>
              <img src={require("../images/objective.png")} alt="" />
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="photo">
        <div className="photo-background">
          <img src={require("../images/self.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
