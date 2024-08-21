import React from 'react';
import '../App.css';
import '../index.js';
import Header from './Header';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const HomePage = () => {
  return (
    <>
      <Header />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default HomePage;
