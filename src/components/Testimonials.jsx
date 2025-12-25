import React from 'react';

    const Testimonials = () => {
      const testimonials = [
        {
          name: 'Sarah Johnson',
          text: 'The team at SmileCare transformed my smile completely. Their attention to detail and compassionate care made all the difference. I couldn\'t be happier with the results!',
          rating: 5
        },
        {
          name: 'Michael Chen',
          text: 'I\'ve been a patient for over 5 years and have never had a negative experience. The staff is professional, friendly, and always make me feel comfortable.',
          rating: 5
        },
        {
          name: 'Emily Rodriguez',
          text: 'After years of avoiding the dentist due to anxiety, SmileCare helped me overcome my fears. Their gentle approach and modern techniques are truly remarkable.',
          rating: 5
        }
      ];

      return (
        <section className="testimonials section" id="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Patient Testimonials</h2>
              <p>Hear what our patients have to say about their experience</p>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h4 className="testimonial-author">- {testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Testimonials;
