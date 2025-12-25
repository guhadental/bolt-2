import React, { useState } from 'react';
    import { format } from 'date-fns';

    const Appointment = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });

      const services = [
        'General Checkup',
        'Teeth Cleaning',
        'Whitening',
        'Orthodontics',
        'Implants',
        'Emergency Care'
      ];

      const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
      ];

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        alert('Appointment request submitted! We will contact you shortly to confirm.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
      };

      return (
        <section className="appointment section" id="appointment">
          <div className="container">
            <div className="section-title">
              <h2>Book an Appointment</h2>
              <p>Schedule your visit with our dental professionals</p>
            </div>
            
            <div className="appointment-content">
              <div className="appointment-info">
                <h3>Why Choose Us?</h3>
                <ul className="appointment-benefits">
                  <li>Same-day appointments available</li>
                  <li>Flexible scheduling options</li>
                  <li>Experienced dental professionals</li>
                  <li>Modern, comfortable facilities</li>
                  <li>Personalized treatment plans</li>
                  <li>Emergency dental care</li>
                </ul>
                
                <div className="contact-details">
                  <h4>Contact Information</h4>
                  <p><strong>Phone:</strong> (123) 456-7890</p>
                  <p><strong>Email:</strong> info@smilecare.com</p>
                  <p><strong>Address:</strong> 123 Dental Avenue, Smile City</p>
                </div>
              </div>
              
              <div className="appointment-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={format(new Date(), 'yyyy-MM-dd')}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or concerns..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Book Appointment</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Appointment;
