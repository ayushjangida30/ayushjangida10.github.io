import './App.css';
import './Sidebar.css';
import {SidebarData} from './SidebarData';

const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with id ${targetId} not found.`);
    }
};

function Sidebar() {
  return (
    <div className='sidebar-container'>
        {SidebarData.map((val, key) => {
            return (
                <li key={key} className='sidebar-li'>
                    <a 
                        href={`${val.section}`} 
                        onClick={(e) => handleClick(e, val.section)}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {val.title}
                    </a>
                </li>
            )
        })}
    </div>
  );
}

export default Sidebar;
