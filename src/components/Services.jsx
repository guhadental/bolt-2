import React from 'react';
    import { FiTooth, FiHeart, FiSmile, FiDroplet, FiShield, FiStar } from 'react-icons/fi';

    const Services = () => {
      const services = [
        {
          icon: <FiTooth size={40} />,
          title: 'General Dentistry',
          description: 'Comprehensive dental care including cleanings, exams, and fillings to maintain your oral health.'
        },
        {
          icon: <FiSmile size={40} />,
          title: 'Cosmetic Dentistry',
          description: 'Transform your smile with veneers, teeth whitening, and other aesthetic treatments.'
        },
        {
          icon: <FiHeart size={40} />,
          title: 'Orthodontics',
          description: 'Straighten your teeth with braces or clear aligners for a perfect smile.'
        },
        {
          icon: <FiDroplet size={40} />,
          title: 'Root Canal Therapy',
          description: 'Save your natural teeth with our gentle and effective root canal treatments.'
        },
        {
          icon: <FiShield size={40} />,
          title: 'Dental Implants',
          description: 'Replace missing teeth with permanent, natural-looking dental implants.'
        },
        {
          icon: <FiStar size={40} />,
          title: 'Pediatric Dentistry',
          description: 'Specialized care for children to ensure healthy smiles from an early age.'
        }
      ];

      return (
        <section className="services section" id="services">
          <div className="container">
            <div className="section-title">
              <h2>Our Dental Services</h2>
              <p>We offer comprehensive dental care solutions tailored to meet your unique needs</p>
            </div>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Services;
