import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe.js';
import Image from './Image.js';
import myPhoto from './Content/LinkedIn_Photo.jpg';

function About() {
  return (
   <>
   <div id='about' className='about-container'>
    <div className='image-container'>
        <img src={myPhoto} alt='A description of the photo' style={{ width: '300px', height: 'auto', }}/>
    </div>

    <AboutMe />
   </div>

   </>
    
  );
}

export default About;
