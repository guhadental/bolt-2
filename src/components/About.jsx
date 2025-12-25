import React from 'react';
    import dentistImage from '../assets/dentist.jpg';

    const About = () => {
      return (
        <section className="about section" id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image">
                <img src="https://images.pexels.com/photos/4047106/pexels-photo-4047106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Dentist with patient" />
              </div>
              
              <div className="about-text">
                <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                  <h2>About Our Clinic</h2>
                  <p>Providing exceptional dental care for over 15 years</p>
                </div>
                
                <p>
                  At SmileCare Dental Clinic, we believe that a healthy smile is the foundation of overall well-being. 
                  Our team of experienced dentists and hygienists are committed to delivering personalized care in a 
                  comfortable and welcoming environment.
                </p>
                
                <p>
                  We utilize the latest dental technology and techniques to ensure the highest quality of care. 
                  From routine cleanings to complex restorative procedures, we're here to help you achieve and 
                  maintain optimal oral health.
                </p>
                
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>15+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>5000+</h3>
                    <p>Happy Patients</p>
                  </div>
                  <div className="stat-item">
                    <h3>12</h3>
                    <p>Expert Dentists</p>
                  </div>
                </div>
                
                <a href="#appointment" className="btn">Schedule Visit</a>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default About;
