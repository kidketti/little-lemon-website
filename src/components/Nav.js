import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/Logo .svg';
import hamburger from '../images/icon _hamburger menu.svg';

const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
}

const Nav = () => {
    const [navDisplay, setNavDisplay] = useState(false);

    const showNav = () => {
        setNavDisplay(!navDisplay);
    }

    return (
        <nav className={`navbar ${navDisplay ? "open" : ""}`}>
            <Link to="/">
                <img src={logo} alt="Little Lemon Logo" />
            </Link>
            <ul className={`navlink ${navDisplay ? "visible" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#about" onClick={handleClick("about")}>About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
            <img src={hamburger} alt="hamburger menu" className="hamburger-icon" onClick={showNav}/>
        </nav>
    );
};

export default Nav;