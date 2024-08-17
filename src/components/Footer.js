import React from 'react';
import logo_alt from '../images/Asset 20@4x.png';

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

const Footer = () => {
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
                            <a href="/App">Home</a>
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
                            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="https://x.com/" target="_blank">Twitter (X)</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;