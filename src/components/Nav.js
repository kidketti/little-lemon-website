import React, {useState} from 'react';
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
            <a href="App.js">
                <img src={logo} alt="Little Lemon Logo" />
            </a>
            <ul className={`navlink ${navDisplay ? "visible" : ""}`}>
                <li>
                    <a href="App.js">Home</a>
                </li>
                <li>
                    <a href="#about" onClick={handleClick("about")}>About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
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