import React, {useReducer} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Booking from './Booking';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = fetchAPI(new Date());
    const updateTimes = (state, action) => fetchAPI(new Date(action));
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) =>  {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;