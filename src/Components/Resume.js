import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <div className="resume">
        <div className="title-section">
       <span className="experience">6+ YEARS OF EXPERIENCE</span> 
       <span className="title">My Resume</span> 
       </div>
       <ul className="sections">
        <li><span className='active'>Professional Skills</span></li>
        <li><span>Experience</span></li>
        <li><span>Projects</span></li>
        </ul>
        <div className="features-container">
        <span className="experience">Features</span> 
        <span className="features-title">Development Skill</span> 
        
        <div className="progress-bar">
            <span className="progress-title">HTML</span>
            <div className="progress">
                <span className="bar-value">90%</span>
            </div>
        </div>
        
        </div>
    </div>
  )
}
