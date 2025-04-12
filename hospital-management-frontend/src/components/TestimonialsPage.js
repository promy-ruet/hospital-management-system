import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aisha Siddiqua',
      quote: '"Dr osman(diabetologist) is really an experienced doctor. My mom\'s diabetes has been under control after being on his medication for just about 15 days. His medication together with some exercise has helped her control her diabetes."',
      category: 'Diabetes Care'
    },
    {
      id: 2,
      name: 'Mohd Mubeen',
      quote: '"One of the best and the most affordable hospital in Tollichowki and surroundings. All doctors are good and gives you a genuine advice. I recommend everyone to visit this hospital for any minor and major health related problems."',
      category: 'Hospital Services'
    },
    {
      id: 3,
      name: 'Raj Patel',
      quote: '"The cardiology department here is exceptional. Dr. Singh helped me understand my heart condition thoroughly and provided a comprehensive treatment plan that has significantly improved my quality of life."',
      category: 'Cardiology'
    },
    {
      id: 4,
      name: 'Sarah Khan',
      quote: '"I was impressed by the pediatric care my child received. The doctors were not just professional but also very compassionate. They took time to explain everything and made my child feel comfortable."',
      category: 'Pediatric Care'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      quote: '"The orthopedic surgery I underwent was handled with utmost precision. The surgical team was skilled, and my recovery has been smooth thanks to their excellent post-operative care."',
      category: 'Orthopedic Surgery'
    },
    {
      id: 6,
      name: 'Priya Reddy',
      quote: '"Exceptional urological care that addressed my concerns with professionalism and empathy. The treatment was comprehensive and the doctors made me feel completely at ease throughout the process."',
      category: 'Urology'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Cover Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        overflow: 'hidden'
      }}>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))', // Softer, more dynamic gradient overlay
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Adds depth to the text
            textAlign: 'center'
          }}>
            TESTIMONIALS
          </h1>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        padding: '50px 20px',
        background: '#f4f4f4'
      }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{
            background: 'white',
            width: 'calc(33.333% - 30px)',
            minWidth: '300px',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            position: 'relative',
            margin: '15px'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '10px',
              background: 'linear-gradient(to right, #ff6b6b, #ff8a5b)'
            }}></div>
            
            <span style={{
              fontSize: '60px',
              color: '#ff6b6b',
              position: 'absolute',
              top: '20px',
              left: '20px',
              opacity: 0.2
            }}>
              "
            </span>

            <div style={{
              textAlign: 'center',
              marginTop: '30px'
            }}>
              <h3 style={{
                color: '#333',
                fontSize: '18px',
                marginBottom: '15px',
                fontWeight: 'bold'
              }}>
                {testimonial.category}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '20px',
                height: '150px',
                overflow: 'hidden'
              }}>
                {testimonial.quote}
              </p>
              <p style={{
                color: '#333',
                fontWeight: 'bold',
                marginTop: '10px'
              }}>
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;