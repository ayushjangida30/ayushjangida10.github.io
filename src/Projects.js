import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Projects.css';
import ProjectCard from './ProjectCard';
import {ProjectData} from './ProjectData';

function Projects() {

  const handleEarthquakeClick = () => {
    window.open('https://github.com/ayushjangida30/EarthquakeApp', '_blank');
  };

  return (
    <div id='projects' className='project-container'>
        <div className='project-info-box-container' style={{padding: '10px'}}>
          {
            ProjectData.map((val, key) => {
              return  (
                <ProjectCard title={val.title} desc={val.desc} link={val.link}/>
              )
            })
          }
        </div>
    </div>
    
  );
}

export default Projects;
