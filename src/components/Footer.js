import React from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import logo_alt from '../images/Asset 20@4x.png';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (anchor) => (e) => {
        e.preventDefault();
        if (location.path === "/") {
            const id = `${anchor}-section`;
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            navigate("/", {state: {scrollTo: anchor}});
        }
    };

    return (
        <footer>
            <section>
                <div>
                    <img src={logo_alt} alt="Alternative Little Lemon Logo" />
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li>
                            <a href="/" >Home</a>
                        </li>
                        <li>
                            <Link to="#about" onClick={handleClick("about")}>About</Link>
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
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>1234 NE Little Lemon St.</li>
                        <li>(123)123-1234</li>
                        <li>littlelemon123@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;