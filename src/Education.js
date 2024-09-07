import logo from './logo.svg';
import './App.css';
import Uvic from './Content/UVIC.png';

function Education() {
  return (
    <div id='education' className='education-container'>

        <div className='info-container' style={{marginTop: '60px', paddingBottom: '30px'}}>
            <p className='info-date'>September 2021 - April 2024</p>
            <p className='info-title'>Master of Science - Computer Science</p>
            <p className='info-sub-title'>University of Victoria, British Columbia, Canada</p>
            <p className = 'info-note'>Worked under the guidance of my supervisor Dr. Charles Perin and member of the Vixi Labs at the University of Victoria.</p>
        </div>

        <div className='info-container'>
            <p className='info-date'>June 2017 - May 2021</p>
            <p className='info-title'>Bachelor of Engineering - Information Technology</p>
            <p className='info-sub-title'>University of Mumbai, India</p>
        </div>
    </div>
    
  );
}

export default Education;
