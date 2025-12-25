import React from 'react';
    import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

    const Contact = () => {
      return (
        <section className="contact section" id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact Us</h2>
              <p>We're here to answer any questions you may have</p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-text">
                    <h3>Our Location</h3>
                    <p>123 Dental Avenue</p>
                    <p>Smile City, SC 12345</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone Number</h3>
                    <p>(123) 456-7890</p>
                    <p>Emergency: (123) 456-7899</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div className="contact-text">
                    <h3>Email Address</h3>
                    <p>info@smilecare.com</p>
                    <p>appointments@smilecare.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiClock />
                  </div>
                  <div className="contact-text">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133404672!2d-73.987574924525!3d40.758028871388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;
