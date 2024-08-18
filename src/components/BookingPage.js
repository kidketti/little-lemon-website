import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';

const BookingPage = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    return (
        <header>
            <Nav/>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input id="date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <label htmlFor="time">Time</label>
                            <select id="time" onChange={(e) => setTime(e.target.value) } required>
                                <option value="">Select a Time</option>
                                {
                                    //props.availableTimes.availableTimes.map(availableTimes => {
                                        //return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="guests">Guests</label>
                            <input id="guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value) } required />
                        </div>
                        <div>
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" onChange={(e) => setOccasion(e.target.value) } required>
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value={"Reserve Table"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
            <Footer />
        </header>
    );
};

export default BookingPage;