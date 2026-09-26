
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faFolderOpen,
    faScrewdriverWrench,
    faGraduationCap,
    faEnvelope,
    faBars,
    faTimes,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";


const FlexHoriz = 'flex gap-4 items-center';
  const handleContactClick = () => {
    alert('bouton fonctionnne ')
    // window.location.href = 'mailto:your-email@example.com';
  };

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className={`fixed top-0 left-0 z-50 w-full h-14 bg-[#030810] md:hidden ${isOpen ? 'bg-transparent border-none' : 'bg-[#030810] border border-white/20'   }`}>
            <button
                onClick={toggleMenu}
                className="text-white text-2xl m-3"
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            </div>


            <aside
                className={`
                    fixed top-0 left-0  z-40
                    flex flex-col
                    w-64 h-screen
                    bg-[#0B1120]  border-r  border-white/10
                    shadow-lg  shadow-black/30
                    transition-transform
                    duration-300

                    ${isOpen 
                        ? 'translate-x-0'
                        : '-translate-x-full'
                    }
                    md:relative
                    md:translate-x-0
                    md:w-1/5
                `}
            >

                {/* LOGO */}
                <div className="flex flex-col">

                    <div
                        className={`
                            ${FlexHoriz}
                            my-5
                            mx-7
                            pb-4
                            border-b
                            border-white/10
                        `}
                    >

                        <img
                            src="src/assets/images/LogoXBamCyber.png"
                            alt="Logo XBAM Cyber"
                            className="w-16 rounded-3xl"
                        />

                        <h2 className="text-white font-bold">
                            XBAM Cyber
                        </h2>

                    </div>


                    {/* MENU */}
                    <nav className="flex flex-col gap-6 px-4">
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${FlexHoriz}
                                text-white
                                p-3
                                rounded-lg
                                hover:bg-white/10
                            `}
                        >
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="w-5"
                            />
                            <span>Accueil</span>
                        </NavLink>


                        <NavLink
                            to="/projets"
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${FlexHoriz}
                                text-white
                                p-3
                                rounded-lg
                                hover:bg-white/10
                            `}
                        >
                            <FontAwesomeIcon
                                icon={faFolderOpen}
                                className="w-5"
                            />
                            <span>Projets</span>
                        </NavLink>


                        <NavLink
                            to="/skills"
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${FlexHoriz}
                                text-white
                                p-3
                                rounded-lg
                                hover:bg-white/10
                            `}
                        >
                            <FontAwesomeIcon
                                icon={faScrewdriverWrench}
                                className="w-5"
                            />
                            <span>Skills</span>
                        </NavLink>


                        <NavLink
                            to="/parcours"
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${FlexHoriz}
                                text-white
                                p-3
                                rounded-lg
                                hover:bg-white/10
                            `}
                        >
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="w-5"
                            />
                            <span>Parcours</span>
                        </NavLink>


                        <NavLink
                            to="/Reseaux"
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${FlexHoriz}
                                text-white
                                p-3
                                rounded-lg
                                hover:bg-white/10
                            `}
                        >
                            <FontAwesomeIcon
                                icon={faGlobe}
                                className="w-5"
                            />
                            <span>Réseaux</span>
                        </NavLink>

                    </nav>

                </div>


                <button
                    className="  mt-auto  mx-4  mb-6  flex  items-center  justify-center  gap-3  bg-blue-500 
                        hover:bg-blue-600  text-white  p-3 rounded-lg shadow-lg shadow-blue-500/50 transition
                        "
                    onClick={handleContactClick}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Me contacter</span>
                </button>

            </aside>
        </>
    );
};

export default Navbar;
