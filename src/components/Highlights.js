import React from 'react';
import greekSalad from '../images/greek salad.jpg';
import bruschettaImg from '../images/bruschetta.png';
import lemonDessert from '../images/lemon dessert.jpg';

const Highlights = () => {
    const specials = [
        {
            id: 1,
            name: "Greek Salad",
            image: greekSalad,
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        },
        {
            id: 2,
            name: "Bruschetta",
            image: bruschettaImg,
            price: 5.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            id: 3,
            name: "Lemon Dessert",
            image: lemonDessert,
            price: 5.00,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ]

    return (
        <main className="highlights">
            <header className="highlights-heading">
                <h1>This weeks specials!</h1>
                <button className="altBtn">Online Menu</button>
            </header>
            <div className="highlights-content">
                {
                    specials.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt="Images of this weeks specials" />
                            <div className="content-heading">
                                <h2>{item.name}</h2>
                                <h2 id="price">${item.price.toFixed(2)}</h2>
                            </div>
                            <div className="content-description">
                                <p>{item.description}</p>
                                <button className="deliveryBtn">Order a delivery &#128690;</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default Highlights;