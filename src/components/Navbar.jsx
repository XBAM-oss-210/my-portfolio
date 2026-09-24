import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faFolderOpen,
    faScrewdriverWrench,
    faGraduationCap,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";    

const Navbar = () => {
        return (
            <>
                <img src="src/assets/images/LogoXBamCyber.png" alt="Logo"  width={50} height={50} />
                <nav className='navbar'>
                    <NavLink to='/'> <FontAwesomeIcon icon={faHouse} />  Accueil</NavLink>
                    <NavLink  to='/projets'> <FontAwesomeIcon icon={faFolderOpen} />Projets</NavLink>
                    <NavLink to='/skills'> <FontAwesomeIcon icon={faScrewdriverWrench} />Skills</NavLink>
                    <NavLink  to='/parcours'> <FontAwesomeIcon icon={faGraduationCap} />Parcours</NavLink>
                    <NavLink to='Reseaux'> <FontAwesomeIcon icon={faGlobe} />Reseaux </NavLink>

                </nav>
            </>
        )
    };

export default Navbar;