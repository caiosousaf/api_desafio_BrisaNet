//import './SideBar.modules.css'
import { Link } from "react-router-dom";


function SideBar() {
    return(
        <div>
            <header className="col-1 col-lg-1 d-flex flex-column justify-content-center">
                <img className="logo mb-5" src='./assets/icons/logo.svg'/>
            <ul className="nav flex-column align-items-center">
                <li className="nav-item">
                <Link to="/">
                    <img src={"../../assets/icons/home.svg"}/>
                </Link>               
                </li>
                <li className="nav-item">
                <Link to="/projetos">
                    <img src={'../../assets/icons/project.svg'}/>
                </Link>  
                </li>
                <li className="nav-item">
                <Link to="/equipes">
                    <img src={'../../assets/icons/team.svg'}/>
                </Link>  
                </li>
                <li className="nav-item">
                <Link to="/pessoas">
                    <img src={'../../assets/icons/person.svg'}/>
                </Link>  
                </li>
            </ul>
            </header>
        </div>
    );
}

export default SideBar;