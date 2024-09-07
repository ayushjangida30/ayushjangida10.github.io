import React from 'react';
import { useState } from 'react';
import './Projects.css';

function ProjectCard({title, desc, link})   {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (hover) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={hover ? 'project-info-box-hover' : 'project-info-box'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
        {
            hover ? (
                <p>{desc}</p>
            ) : (
                <h3>{title}</h3>
            )
        }
        </div>
    )
}

export default ProjectCard