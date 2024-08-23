import React from "react";
import {Link} from 'react-router-dom';

const ConfirmedBooking = () => {
    return(
        <section className="message">
            <div>
                <h2>You've successfully submitted a reservation for a table at Little Lemon!</h2>
            </div>
            <div>
                <p>We will contact you about your reservation as soon as we can!</p>
            </div>
            <Link to="/">
                <button id="okBtn">OK</button>
            </Link>
        </section>
    );
};

export default ConfirmedBooking;