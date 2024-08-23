import React from 'react';
import marioImg from '../images/Mario and Adrian A.jpg'
import adrianImg from '../images/Mario and Adrian b.jpg'

const About = () => {
    return (
        <header className="about" id="about-section">
            <h1 className="about-heading">About Us</h1>
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, owned by the Itallian brothers Mario and Adrian. Our food is focused on traditional recipes served with a modern twist. </p>
                </div>
                <div className="owners">
                    <img id="mario" src={marioImg} alt="Mario and Adrian" />
                    <img id="adrian" src={adrianImg} alt="Adrian and Mario" />
                </div>
            </section>
        </header>
    );
};

export default About;