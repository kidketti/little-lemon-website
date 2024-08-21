import React from 'react';
import {Link} from 'react-router-dom';
import headerImg from '../images/restaurantfood.jpg'

const Header = () => {
    return (
        <header className="header">
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button className="mainBtn" aria-label="On Click">Reserve a Table</button>
                    </Link>
                </div>
                <div>
                    <img src={headerImg} alt="restaurant food on display" />
                </div>
            </section>
        </header>
    );
};

export default Header;