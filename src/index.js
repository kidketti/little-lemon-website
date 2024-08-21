import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Little Lemon Restaurant" />
      <meta property="og:type"  content="website" />
      <meta property="og:image" content="logo.png" />
      <meta property="og:url"   content="https://littlelemon/" />
      <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Little Lemon" />
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
