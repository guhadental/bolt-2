import React from 'react';
    import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

    const Footer = () => {
      return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-info">
                <h3>SmileCare Dental Clinic</h3>
                <p>Your trusted partner for exceptional dental care and beautiful smiles.</p>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><FiFacebook /></a>
                  <a href="#" aria-label="Twitter"><FiTwitter /></a>
                  <a href="#" aria-label="Instagram"><FiInstagram /></a>
                  <a href="#" aria-label="YouTube"><FiYoutube /></a>
                </div>
              </div>
              
              <div className="footer-links">
                <div className="footer-column">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#appointment">Book Appointment</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h4>Our Services</h4>
                  <ul>
                    <li><a href="#">General Dentistry</a></li>
                    <li><a href="#">Cosmetic Dentistry</a></li>
                    <li><a href="#">Orthodontics</a></li>
                    <li><a href="#">Dental Implants</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h4>Contact</h4>
                  <ul>
                    <li>123 Dental Avenue</li>
                    <li>Smile City, SC 12345</li>
                    <li>(123) 456-7890</li>
                    <li>info@smilecare.com</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
