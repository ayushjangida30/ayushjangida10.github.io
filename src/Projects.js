import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Projects.css';

function Projects() {
  const [androidHovered, setAndroidHovered] = useState(false);
  const [machineHovered, setMachineHovered] = useState(false);

  const handleEarthquakeClick = () => {
    window.open('https://github.com/ayushjangida30/EarthquakeApp', '_blank');
  };

  return (
    <div id='projects' className='project-container'>
        <div className='project-info-box-container' style={{padding: '10px'}}>

            <div className='project-info-box' onMouseEnter={() => setAndroidHovered(true)} onMouseLeave={() => setAndroidHovered(false)}>
              <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>ANDROID PROJECTS</h3>

              {
                androidHovered ? (
                  <>
                    <div className='project-info-container' onClick={handleEarthquakeClick}>
                      <p className='info-subtitle'>Earthqauke App</p>
                      <p className='info-pointer'>An App that can be used to check latest information on earthquakes all across on the globe displayed on Google Maps.</p>
                    </div>
                    <div className='project-info-container' onClick={handleEarthquakeClick}>
                      <p className='info-subtitle'>Instagram Clone</p>
                      <p className='info-pointer'>An App that clones basic functionalities of Instagram such as having User Account, Upload Posts, Liking Posts, etc</p>
                    </div>
                    <div className='project-info-container' onClick={handleEarthquakeClick}>
                      <p className='info-subtitle'>Twitter Clone</p>
                      <p className='info-pointer'>An App that clones basic functionalities of Twitter such as having User Account, Upload Posts, Liking Posts, etc</p>
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )
              }
            </div>


            <div className='project-info-box' onMouseEnter={() => setMachineHovered(true)} onMouseLeave={() => setMachineHovered(false)}>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>MACHINE LEARNING PROJECTS</h3>

                {
                machineHovered ? (
                  <>
                    <div className='project-info-container' style={{marginBottom: '15px', backgroundColor: 'rgb(255,186,186)', padding: '5px'}}>
                      <p className='info-subtitle'>Stock Price Predictor</p>
                      <p className='info-pointer'>In a team of two developed LSTM Neural Networks (Keras & TensorFlow), and Random Forest Algorithm in Python to predict closing price of a stock at n + 1 day using past n days of data.</p>
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )
              }

            </div>

            <div className='project-info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>UNITY PROJECTS</h3>
            </div>
            <div className='project-info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>OTHERS</h3>
            </div>
        </div>
    </div>
    
  );
}

export default Projects;
