import React from 'react';
    import { FiCalendar, FiPhone, FiClock } from 'react-icons/fi';

    const Hero = () => {
      return (
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Your Smile, Our Passion</h1>
                <p>
                  Experience exceptional dental care with our team of skilled professionals. 
                  We combine advanced technology with compassionate service to give you the 
                  healthy, beautiful smile you deserve.
                </p>
                <div className="hero-buttons">
                  <a href="#appointment" className="btn">Book Appointment</a>
                  <a href="#services" className="btn btn-secondary">Our Services</a>
                </div>
              </div>
              
              <div className="hero-info">
                <div className="info-card">
                  <div className="info-icon">
                    <FiCalendar />
                  </div>
                  <div className="info-text">
                    <h3>Opening Hours</h3>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FiPhone />
                  </div>
                  <div className="info-text">
                    <h3>Emergency Line</h3>
                    <p>(123) 456-7890</p>
                    <p>24/7 Available</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <FiClock />
                  </div>
                  <div className="info-text">
                    <h3>Quick Booking</h3>
                    <p>Same-day appointments</p>
                    <p>Online scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
