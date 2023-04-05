import { NavLink } from 'react-router-dom' // activeClassName de Navlink applique du style au lien cliqué en cours
import '../styles/Header.css'
import logo from '../assets/logoofficiel.png'

// import ExtLinksBar from './ExtLinksBar';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header({ className }) {

//   const [isOpen, setIsOpen] = useState(false);

//   function toggleNav() {
//     setIsOpen(!isOpen);
//   }

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    }



    return (
        <header>
            {/* voir pour mettre null a la place de string vide */}
            <div className={`logo-div ${ className ? 'logo-anim' : ""}`}>
                <img src={logo} alt="logo du groupe Neat" />
            </div>
            <nav className="navbar">
                <div className="container">
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink activeclassname='active' to='/'>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' to='/biography'>BIO</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' to='/discography'>DISCOGRAPHY</NavLink>
                            </li>
                            <li>
                                <a href='https://neatofficial.bandcamp.com/merch' target="_blank" rel="noreferrer noopener">SHOP</a>
                            </li>
                            <li>
                                <NavLink activeclassname='active' to='/tour'>TOUR</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' to='/contact'>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav>
                <div className='mainNav'>
                    <button type="button" className="navbar-toggle" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className={`navbar-collapse ${isOpen ? 'collapse-in' : ''}`}>
                        <ul className="nav navbar-nav">
                            <Link className='active' to='/'>HOME</Link>
                            <Link to='/biography'>BIO</Link>
                            <Link to='/discography'>DISCOGRAPHY</Link>
                            <a href='https://neatofficial.bandcamp.com/merch'>SHOP</a>
                            <Link to='/tour'>TOUR</Link>
                        </ul>
                    </div>
                </div>
                <ExtLinksBar className="extLinksBar-header" />
            </nav> */}


        </header>
    )
}

export default Header;