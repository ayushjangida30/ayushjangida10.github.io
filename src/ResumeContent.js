import logo from './logo.svg';
import './App.css';

function ResumeContent() {
  return (
   <div className='resumeContent-container'>
        <div className='education-container' style={{marginBottom: '30px'}}>
            <h3 style={{color: 'blue', fontSize: '32px', fontWeight: '600', textDecoration: 'underline', marginBottom: '40px'}}>EDUCATION</h3>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600'}}>September 2021 - April 2024</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '25px'}}>Master of Science - Computer Science</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>University of Victoria, British Columbia, Canada</p>
                <p style={{color: 'grey', fontSize: '15px', fontWeight: '350', lineHeight: '1.2'}}>Worked under the guidance of my supervisor Dr. Charles Perin and member of the Vixi Labs at the University of Victoria.</p>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600'}}>June 2017 - May 2021</p>
                <p style={{color: 'black', fontSize: '24px', fontWeight: '900', marginBottom: '25px'}}>Bachelor of Engineering - Information Technology</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '25px'}}>University of Mumbai, India</p>
            </div>

        </div>
        <div className='experience-container' style={{marginBottom: '30px'}}>
            <h3 style={{color: 'blue', fontSize: '32px', fontWeight: '600', textDecoration: 'underline', marginBottom: '40px'}}>EXPERIENCE</h3>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600', marginBottom: '20px'}}>September 2023 - December 2023</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '15px'}}>Associate Software Developer, Co-op</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '35px'}}>HP, Burnaby, BC, Canada</p>

                <p style={{color: 'black', fontSize: '15px', fontWeight: '450', marginBottom: '25px', fontStyle: 'italic'}}>Tech Stack: React.js, Node.js, Python, Linux, Bash, Docker, Azure Kubernetes Service, Terraform, Microservice, Unit test, E2E test, Postman</p>
                <ul>
                    <li>
                        <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Successfully integrated Fleet Manager VMs using Node.js and Python into Anyware Manager portal (a SaaS website having 1000+ customers globally) deployed on Azure Kubernetes Service.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Improved system vulnerability by updating the Redis cache naming convention, thus ensuring 99.99% SLA uptime.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Improved CI/CD pipeline that enabled multiple teams to release code into production.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Enhanced UX using React.js to update real-time front-end machine state information on Anyware Manager portal.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Used version control like Git and Jira to collaborate with the team on the latest code.</p>
                    </li>
                </ul>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600', marginBottom: '20px'}}>June 2023 - August 2023</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '15px'}}>IT Developer, Co-op</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '35px'}}>BC Ferries, Victoria, BC, Canada</p>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '450', marginBottom: '25px', fontStyle: 'italic'}}>Tech Stack: React.js, HTML, CSS, Node.js, Java, Swagger</p>
                <ul>
                    <li>
                        <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Designed Trailer Movement web services using React.js and Node.js that is used by 50+ customers.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Developed PL/SQL scripts, Java Spring Boot APIs, and SQL database schemas.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Documented and tested APIs with Swagger, ensuring clarity, and also utilized it for comprehensive API endpoint testing.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Maintained code logs and version control using Bitbucket for effective tracking and team collaboration.</p>
                    </li>
                </ul>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600', marginBottom: '20px'}}>May 2022 - September 2022</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '15px'}}>Research Intern</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '35px'}}>LlamaZoo, Victoria, BC, Canada</p>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '450', marginBottom: '25px', fontStyle: 'italic'}}>Tech Stack: Unity, C#, HLSL, QGIS, 3D</p>
                <ul>
                    <li>
                        <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Developed 3D interactive prototypes in Unity using C# and HLSL language to work on the Cumulative Effects project, an environmental analysis project conducted by the BC Government and Indigenous People.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Converted shapefile to GeoJSON using QGIS and transformed it into 1000+ meshes for terrain data display in Unity.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Brainstormed visualization ideas with the company mentor, research supervisor, and a post-doc colleague.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Identified issues and documented methods to enhance the company’s current visualization.</p>
                    </li>
                </ul>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600', marginBottom: '20px'}}>January 2022 - April 2022, January 2023 - April 2023</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '15px'}}>Teaching Assistant - Introduction to Computer Graphics</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '35px'}}>University of Victoria, Victoria, BC, Canada</p>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '450', marginBottom: '25px', fontStyle: 'italic'}}>Tech Stack: C++, Visual Studio</p>
                <ul>
                    <li>
                        <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Supervised two lab sections with a total of 50 assignments graded per week.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Designed lab experiments that explained basic concepts like convex hull, shadows, and ray tracing in C++.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Provided individual feedback and regular invigilation for examinations.</p>
                    </li>
                </ul>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'blue', fontSize: '18px', fontWeight: '600', marginBottom: '20px'}}>June 2019 - May 2020</p>
                <p style={{color: 'black', fontSize: '26px', fontWeight: '900', marginBottom: '15px'}}>Software Developer Intern</p>
                <p style={{color: 'black', fontSize: '20px', fontWeight: '700', marginBottom: '35px'}}>RSva Solutions, Mumbai, India</p>
                <p style={{color: 'black', fontSize: '15px', fontWeight: '450', marginBottom: '25px', fontStyle: 'italic'}}>Tech Stack: HTML, CSS, JavaScript</p>
                <ul>
                    <li>
                        <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Focused on developing UI components using Javascript, HTML, and CSS.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Proactively resolved bugs and conducted thorough testing and debugging to ensure high-quality software deliverables.</p>
                    </li>
                    <li>
                    <p style={{color: 'grey', fontSize: '17px', fontWeight: '350', lineHeight: '1.2'}}>Actively engaged in daily stand-ups and team meetings to discuss progress and challenges.</p>
                    </li>
                </ul>
            </div>

        </div>

        <h3 style={{color: 'blue', fontSize: '32px', fontWeight: '600', textDecoration: 'underline', marginBottom: '40px'}}>SKILLS</h3>
        <div className='skills-container' style={{marginBottom: '30px'}}>
            <div className='skills-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>PROGRAMMING LANGUAGES</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>C#, C++, Java, Python, PHP, .NET, JavaScript/Typescript, HLSL, HTML5, CSS3, MongoDB, PL/SQL, NoSQL</p>
            </div>
            <div className='skills-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>DEVOPS AND API TOOLS</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Docker, Kubernetes, Nginx, Redis, Azure, AWS Terraform, Git, Bitbucket, Postman, Swagger</p>
            </div>
            <div className='skills-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>SOFTWARES</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Unity, Visual Studio, Jupyter, PowerBI, Android Studio, QGIS, Bash, Powershell, Linux, JIRA, O365</p>
            </div>
            <div className='skills-box'>
                <h3 style={{color: 'black', fontSize: '24px', fontWeight: '800', marginBottom: '25px'}}>OTHERS</h3>
                <p style={{color: 'black', fontSize: '18px', fontWeight: '500'}}>Agile (Scrum/Kanban), Debugging, Microservices, Data Visualization, MS Office</p>
            </div>
        </div>

        <div className='achievement-container' style={{marginBottom: '30px'}}>
            <h3 style={{color: 'blue', fontSize: '32px', fontWeight: '600', textDecoration: 'underline', marginBottom: '40px'}}>ACHIEVEMENTS</h3>

            <div className='resume-info-container'>
                <p style={{color: 'grey', fontSize: '18px', fontWeight: '450', lineHeight: '1.2'}}>Received the ‘University of Victoria Graduate Scholarship Award’ in Computer Science for 2021-22 and 2022-23 for
                achieving high academic standing and TA contributions.</p>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'grey', fontSize: '18px', fontWeight: '450', lineHeight: '1.2'}}>Showcased my research findings at the ‘Graphical Interface Conference 2023’.</p>
            </div>

            <div className='resume-info-container'>
                <p style={{color: 'grey', fontSize: '18px', fontWeight: '450', lineHeight: '1.2'}}>Developed a novel C# script that connects EyeLink Plus 1000 eye-tracker API to Unity for Master's Thesis Project.</p>
            </div>
        </div>

   </div>
    
  );
}

export default ResumeContent;
