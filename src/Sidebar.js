import './App.css';
import './Sidebar.css';
import {SidebarData} from './SidebarData';
import { useState, useEffect } from 'react';


const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    console.log(targetElement); 
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with id ${targetId} not found.`);
    }
};

function Sidebar() {
    const [topSection, setTopSection] = useState({});
    const [middleSection, setMiddleSection] = useState({});
    const [bottomSection, setBottomSection] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const sectionTopState = {};
            const sectionMiddleState = {};
            const sectionBottomState = {};

            SidebarData.forEach((item) => {
                const sectionElement = document.getElementById(item.section);
                if(sectionElement)  {
                    const rect = sectionElement.getBoundingClientRect();
                    
                    sectionTopState[item.section] = rect.top < -window.innerHeight / 2 ? true : false;
                    sectionMiddleState[item.section] = rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2 ? true : false;
                    sectionBottomState[item.section] = rect.top > window.innerHeight / 2 ? true : false;
                }
            });
            
            setTopSection(sectionTopState);
            setMiddleSection(sectionMiddleState);
            setBottomSection(sectionBottomState);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

  return (
    <div className='sidebar-container'>
        <div className='sidebar-top-container'>
            {SidebarData.map((val, key) => {
                const isSectionPast = topSection[val.section];

                return (
                        <li key={key} className={`sidebar-li-top${isSectionPast ? '-show' : ''}`}>
                            <a 
                                href={`${val.section}`} 
                                onClick={(e) => handleClick(e, val.section)}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {val.title}
                            </a>
                        </li>
                );
            })}
        </div>

        <div className='sidebar-middle-container'>
            {SidebarData.map((val, key) => {
                const isSection = middleSection[val.section];

                const isSectionPast = topSection[val.section];


                return (
                        <li key={key} className={`sidebar-li-middle${isSection ? '-show' : isSectionPast ? '-top' : '-bottom'}`}>
                            <a 
                                href={`${val.section}`} 
                                onClick={(e) => handleClick(e, val.section)}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {val.title}
                            </a>
                        </li>
                );
            })}
        </div>


        <div className='sidebar-bottom-container'>
            {SidebarData.map((val, key) => {
                const isSectionRemaining = bottomSection[val.section];

                return (
                        <li key={key} className={`sidebar-li-bottom${isSectionRemaining ? '-show' : ''}`}>
                            <a 
                                href={`${val.section}`} 
                                onClick={(e) => handleClick(e, val.section)}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {val.title}
                            </a>
                        </li>
                );
            })}
        </div>
    </div>
  );
}

export default Sidebar;
