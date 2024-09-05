import logo from './logo.svg';
import './App.css';
import './InfoBox.css';
import './Skills.css';

function Skills() {
  return (
    <div id='skills' className='skills-container'>
        <h3 className='info-heading'>Skills</h3>
        <div className='info-box-container' style={{marginBottom: '30px'}}>
            <div className='info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>PROGRAMMING LANGUAGES</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>C#, C++, Java, Python, PHP, .NET, JavaScript/Typescript, HLSL, HTML5, CSS3, MongoDB, PL/SQL, NoSQL</p>
            </div>
            <div className='info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>DEVOPS AND API TOOLS</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Docker, Kubernetes, Nginx, Redis, Azure, AWS Terraform, Git, Bitbucket, Postman, Swagger</p>
            </div>
            <div className='info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>SOFTWARES</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Unity, Visual Studio, Jupyter, PowerBI, Android Studio, QGIS, Bash, Powershell, Linux, JIRA, O365</p>
            </div>
            <div className='info-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>OTHERS</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Agile (Scrum/Kanban), Debugging, Microservices, Data Visualization, MS Office</p>
            </div>
        </div>
    </div>
    
  );
}

export default Skills;
