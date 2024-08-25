import React from 'react';
import marioImg from '../images/Mario and Adrian A.jpg'
import adrianImg from '../images/Mario and Adrian b.jpg'

const About = () => {
    return (
        <main className="about" id="about-section">
            <header>
                <h1 className="about-heading">About Us</h1>
            </header>
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, owned by the Italian brothers Mario and Adrian. Our food is focused on traditional recipes served with a modern twist. </p>
                </div>
                <div className="owners">
                    <img id="mario" src={marioImg} alt="Mario and Adrian" />
                    <img id="adrian" src={adrianImg} alt="Adrian and Mario" />
                </div>
            </section>
        </main>
    );
};

export default About;