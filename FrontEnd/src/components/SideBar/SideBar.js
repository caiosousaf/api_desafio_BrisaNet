import { Link,useLocation } from "react-router-dom";
import logo from '../../assets/logo.svg'
import home from '../../assets/icons/home.svg'
import homeActive from '../../assets/icons/home-active.svg'
import project from '../../assets/icons/project.svg'
import projectActive from '../../assets/icons/project-active.svg'
import team from '../../assets/icons/team.svg'
import teamActive from '../../assets/icons/team-active.svg'
import person from '../../assets/icons/person.svg'
import personActive from '../../assets/icons/person-active.svg'

function SideBar() {
  const  location = useLocation();
    return(
        <div>
            <header className="col-1 col-lg-1 d-flex flex-column justify-content-center align-items-center">
                <img className="logo mb-5" src={logo} alt=""/>
                <ul className="nav flex-column gap-5 align-items-center">
                    <li className="nav-item">
                    <Link to="/" >
                        {location.pathname === "/"
                        ? <img src={homeActive} alt=""/>
                        : <img src={home} alt=""/>
                        }
                    </Link>               
                    </li>
                    <li className="nav-item">
                    <Link to="/projetos" >
                        {location.pathname === "/projetos" || location.pathname === "/projeto/:id"
                        ? <img src={projectActive} alt=""/>
                        : <img src={project} alt=""/>
                        }
                    </Link>  
                    </li>
                    <li className="nav-item">
                    <Link to="/equipes">
                        {location.pathname === "/equipes"
                        ? <img src={teamActive} alt=""/>
                        : <img src={team} alt=""/>
                        }
                    </Link>  
                    </li>
                    <li className="nav-item">
                    <Link to="/pessoas">
                        {location.pathname === "/pessoas"
                        ? <img src={personActive} alt=""/>
                        : <img src={person} alt=""/>
                        }
                    </Link>  
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default SideBar;