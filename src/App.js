import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Resume from './Resume.js';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills'
import Projects from './Projects';
import Research from './Research';
import MyGame from './MyGame';
import MyMusic from './MyMusic';
import Sidebar from './Sidebar';

function App() {
  return (
   <div className='parent'>
    <div className='sidebar'>
      <Sidebar />
    </div>
    <div className='web-container'>
      <Home />
      <About />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Projects />
      <MyGame />
      <MyMusic />
    </div>
   </div>
    
  );
}

export default App;
