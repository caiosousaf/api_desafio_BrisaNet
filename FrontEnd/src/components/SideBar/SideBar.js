import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import home from '../../assets/icons/home.svg'
import project from '../../assets/icons/project.svg'
import team from '../../assets/icons/team.svg'
import person from '../../assets/icons/person.svg'

function SideBar({location}) {
    return(
        <div>
            <header className="col-1 col-lg-1 d-flex flex-column justify-content-center">
                <img className="logo mb-5" src={logo} alt=""/>
            <ul className="nav flex-column align-items-center">
                <li className="nav-item">
                <Link to="/" /*className={location.pathname === '/' ? color : '#F46E27'}*/>
                    <img src={home} alt=""/>
                    
                </Link>               
                </li>
                <li className="nav-item">
                <Link to="/projetos">
                    <img src={project} alt=""/>
                </Link>  
                </li>
                <li className="nav-item">
                <Link to="/equipes">
                    <img src={team} alt=""/>
                </Link>  
                </li>
                <li className="nav-item">
                <Link to="/pessoas">
                    <img src={person} alt=""/>
                </Link>  
                </li>
            </ul>
            </header>
        </div>
    );
}

export default SideBar;