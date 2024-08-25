import React from 'react';
import peteImg from '../images/pete.png';
import obamaImg from '../images/obama.jpg';
import oprahImg from '../images/oprah.png';
import gordonImg from '../images/gordon.jpg';


const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Pete Herr",
            image: peteImg,
            rating:
                <>
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9734;
                </>,
            review: "The Lemon Dessert was a delight! Super refeshing. Tastes just like a grandma's baking at home.",
        },
        {
            id: 2,
            name: "Barrack Obama",
            image: obamaImg,
            rating:
            <>
                &#9733;
                &#9733;
                &#9733;
                &#9733;
                &#9734;
            </>,
            review: "All the food was delicious. Everything tasted fresh, not frozen. Michelle was pressed to say it might even be better than her own food!",
        },
        {
            id: 3,
            name: "Oprah Winfrey",
            image: oprahImg,
            rating:
                <>
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                    &#9733;
                </>,
            review: "This restaurant is amazing! There has been no cooking that had me singing any louder than what I experienced! I will always love you, Little Lemon!",
        },
        {
            id: 4,
            name: "Gordon Ramsay",
            image: gordonImg,
            rating:
            <>
                &#9733;
                &#9733;
                &#9733;
                &#9734;
                &#9734;
            </>,
            review: "The phrase \"modern twist\" had me a bit concerned to begin with. I didn't understand, why put a twist on traditional food that's already good? Don't get me wrong, it's good, just unnecessary.",
        },
    ]

    return (
        <main className="testimonials">
            <header className="testimonials-heading">
                <h1>Testimonials</h1>
            </header>
            <div className="testimonials-content">
                {
                    reviews.map((person) => (
                        <div key={person.id} className="review-card">
                            <div className="review-rating">
                                <h3>Rating: </h3>
                                <h3 id="stars">{person.rating}</h3>
                            </div>
                            <div className="reviewer">
                                <img src={person.image} alt="Reviewers" />
                                <h2 id="review-name">{person.name}</h2>
                            </div>
                            <div className="review-description">
                                <p>{person.review}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default Testimonials;