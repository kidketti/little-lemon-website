import '../App.css';
import '../index.js';
import Header from './Header';
import Nav from './Nav';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingPage from './BookingPage';

const HomePage = () => {
  return (
    <div>
        <Nav />
        <Header />
        <Testimonials />
        <About />
        <Footer />
    </div>
  );
}

export default HomePage;
