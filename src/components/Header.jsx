import React from 'react';
    import { Link } from 'react-router-dom';
    import { FiMenu, FiX } from 'react-icons/fi';

    const Header = ({ isMenuOpen, setIsMenuOpen }) => {
      const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/#services' },
        { name: 'About', path: '/#about' },
        { name: 'Testimonials', path: '/#testimonials' },
        { name: 'Appointment', path: '/#appointment' },
        { name: 'Contact', path: '/#contact' },
      ];

      return (
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <Link to="/">
                  <h2>SmileCare</h2>
                </Link>
              </div>
              
              <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                  {navLinks.map((link, index) => (
                    <li key={index} className="nav-item">
                      <a 
                        href={link.path} 
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="header-actions">
                <a href="#appointment" className="btn btn-outline">Book Now</a>
                <button 
                  className="menu-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    };

    export default Header;
