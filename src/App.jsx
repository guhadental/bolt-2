import React, { useState } from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Services from './components/Services';
    import About from './components/About';
    import Testimonials from './components/Testimonials';
    import Appointment from './components/Appointment';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    function App() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
        <div className="App">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Appointment />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
