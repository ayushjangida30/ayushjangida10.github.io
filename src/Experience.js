import logo from './logo.svg';
import './App.css';
import './Experience.css';

function Experience() {
  return (
    <div id='experience' className='experience-container'>

        <div className='experience-info-container'>
            <p className='info-date'>September 2023 - December 2023</p>
            <p className='info-title'>Associate Software Developer, Co-op</p>
            <p className='info-subtitle'>HP, Burnaby, BC, Canada</p>

            <p className='info-techstack'>Tech Stack: React.js, Node.js, Python, Linux, Bash, Docker, Azure Kubernetes Service, Terraform, Microservice, Unit test, E2E test, Postman</p>
            <ul>
                <li>
                    <p className='info-pointer'>Successfully integrated Fleet Manager VMs using Node.js and Python into Anyware Manager portal (a SaaS website having 1000+ customers globally) deployed on Azure Kubernetes Service.</p>
                </li>
                <li>
                <p className='info-pointer'>Improved system vulnerability by updating the Redis cache naming convention, thus ensuring 99.99% SLA uptime.</p>
                </li>
                <li>
                <p className='info-pointer'>Improved CI/CD pipeline that enabled multiple teams to release code into production.</p>
                </li>
                <li>
                <p className='info-pointer'>Enhanced UX using React.js to update real-time front-end machine state information on Anyware Manager portal.</p>
                </li>
                <li>
                <p className='info-pointer'>Used version control like Git and Jira to collaborate with the team on the latest code.</p>
                </li>
            </ul>
        </div>


        <div className='experience-info-container'>
            <p className='info-date'>June 2023 - August 2023</p>
            <p className='info-title'>IT Developer, Co-op</p>
            <p className='info-subtitle'>BC Ferries, Victoria, BC, Canada</p>
            <p className='info-techstack'>Tech Stack: React.js, HTML, CSS, Node.js, Java, Swagger</p>
            <ul>
                <li>
                    <p className='info-pointer'>Designed Trailer Movement web services using React.js and Node.js that is used by 50+ customers.</p>
                </li>
                <li>
                <p className='info-pointer'>Developed PL/SQL scripts, Java Spring Boot APIs, and SQL database schemas.</p>
                </li>
                <li>
                <p className='info-pointer'>Documented and tested APIs with Swagger, ensuring clarity, and also utilized it for comprehensive API endpoint testing.</p>
                </li>
                <li>
                <p className='info-pointer'>Maintained code logs and version control using Bitbucket for effective tracking and team collaboration.</p>
                </li>
            </ul>
        </div>

        <div className='experience-info-container'>
            <p className='info-date'>May 2022 - September 2022</p>
            <p className='info-title'>Research Intern</p>
            <p className='info-subtitle'>LlamaZoo, Victoria, BC, Canada</p>
            <p className='info-techstack'>Tech Stack: Unity, C#, HLSL, QGIS, 3D</p>
            <ul>
                <li>
                    <p className='info-pointer'>Developed 3D interactive prototypes in Unity using C# and HLSL language to work on the Cumulative Effects project, an environmental analysis project conducted by the BC Government and Indigenous People.</p>
                </li>
                <li>
                    <p className='info-pointer'>Converted shapefile to GeoJSON using QGIS and transformed it into 1000+ meshes for terrain data display in Unity.</p>
                </li>
                <li>
                    <p className='info-pointer'>Brainstormed visualization ideas with the company mentor, research supervisor, and a post-doc colleague.</p>
                </li>
                <li>
                    <p className='info-pointer'>Identified issues and documented methods to enhance the company’s current visualization.</p>
                </li>
            </ul>
        </div>

        <div className='experience-info-container'>
            <p className='info-date'>January 2022 - April 2022 | January 2023 - April 2023</p>
            <p className='info-title'>Teaching Assistant - Introduction to Computer Graphics</p>
            <p className='info-subtitle'>University of Victoria, Victoria, BC, Canada</p>
            <p className='info-techstack'>Tech Stack: C++, Visual Studio</p>
            <ul>
                <li>
                    <p className='info-pointer'>Supervised two lab sections with a total of 50 assignments graded per week.</p>
                </li>
                <li>
                    <p className='info-pointer'>Designed lab experiments that explained basic concepts like convex hull, shadows, and ray tracing in C++.</p>
                </li>
                <li>
                    <p className='info-pointer'>Provided individual feedback and regular invigilation for examinations.</p>
                </li>
            </ul>
        </div>

        <div className='experience-info-container'>
            <p className='info-date'>June 2019 - May 2020</p>
            <p className='info-title'>Software Developer Intern</p>
            <p className='info-subtitle'>RSva Solutions, Mumbai, India</p>
            <p className='info-techstack'>Tech Stack: HTML, CSS, JavaScript</p>
            <ul>
                <li>
                    <p className='info-pointer'>Focused on developing UI components using Javascript, HTML, and CSS.</p>
                </li>
                <li>
                    <p className='info-pointer'>Proactively resolved bugs and conducted thorough testing and debugging to ensure high-quality software deliverables.</p>
                </li>
                <li>
                    <p className='info-pointer'>Actively engaged in daily stand-ups and team meetings to discuss progress and challenges.</p>
                </li>
            </ul>
        </div>
    </div>
    
  );
}

export default Experience;
