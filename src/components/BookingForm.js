import React, { useState } from 'react';

const BookingForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactMethod, setContactMethod] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }

    const handleContact = (e) => {
        setContactMethod(e.target.value);
        setContactInfo("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    return (
        <main>
            <section className="formContent">
                <header>
                    <h1>RESERVE A TABLE</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="rows">
                            <div>
                                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="ex. John"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="ex. Doe"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="rows">
                            <div>
                                <label htmlFor="contactMethod">Form of Contact <span className="required">*</span></label>
                                <select
                                    id="contactMethod"
                                    value={contactMethod}
                                    onChange={handleContact}
                                    required
                                >
                                    <option value=""></option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>
                            {contactMethod === "email" ? (
                                <div>
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="ex. john@gmail.com"
                                        value={contactInfo}
                                        onChange={(e) => setContactInfo(e.target.value)}
                                        required
                                    />
                                </div>
                            ) :
                            contactMethod === "phone" ? (
                                <div>
                                    <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                        placeholder="ex. 1234567890"
                                        value={contactInfo}
                                        onChange={(e) => setContactInfo(e.target.value)}
                                        required
                                    />
                                    </div>
                            ) : null}
                        </div>
                        <div className="rows">
                            <div>
                                <label htmlFor="date">Choose Date <span className="required">*</span></label>
                                <input
                                    id="date"
                                    type="date"
                                    value={date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="time">Choose Time <span className="required">*</span></label>
                                <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                    <option></option>
                                    {props.availableTimes.map(availableTime => (
                                        <option key={availableTime} value={availableTime}>{availableTime}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="rows">
                            <div>
                                <label htmlFor="guest">Number of Guests <span className="required">*</span></label>
                                <input
                                    id="guest"
                                    type="number"
                                    min="1" max="10"
                                    value={guest}
                                    onChange={(e) => setGuest(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="occasion">Occasion <span className="required">*</span></label>
                                <select
                                    id="occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value=""></option>
                                    <option value="None">None</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="notes">Additional Notes</label>
                            <textarea id="notes" name="notes" placeholder="(Optional)" />
                        </div>
                    </fieldset>
                    <div id="submitBtn">
                        <button
                            aria-label="On Click"
                            type="submit"
                            className="submitBtn"
                            disabled={
                                !firstName ||
                                !lastName ||
                                !contactMethod ||
                                !contactInfo ||
                                !date ||
                                !time ||
                                !guest ||
                                !occasion
                            }
                        >
                            Reserve Table
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default BookingForm;
