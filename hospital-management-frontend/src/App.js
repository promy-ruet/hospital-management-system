import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';

// Import components
import HospitalManagement from './components/HospitalManagement';
import Carousel from './components/Carousel';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { DepartmentsRouter, DepartmentsDropdown } from './components/DepartmentsPage';
import ConsultantsPage from './components/ConsultantsPage';
import DepartmentDoctors from './components/DepartmentDoctors';
import DoctorProfile from './components/DoctorProfile';
import TestimonialsPage from './components/TestimonialsPage';
import ServicesDropdown from './components/ServicesDropdown';
import ServicePage from './components/ServicePage';
import LaboratoryServicePage from './components/LaboratoryServicePage';
import AmbulanceServicePage from './components/AmbulanceServicePage';
import BloodBankPage from './components/BloodBankPage';
import CafeteriaPage from './components/CafeteriaPage';
import AtmPage from './components/AtmPage';
import CarParkingPage from './components/CarParkingPage';
import MedicalRecordsPage from './components/MedicalRecordsPage';
import PharmacyPage from './components/PharmacyPage';
import VaccinationPage from './components/VaccinationPage';
import EmergencyServicePage from './components/EmergencyServicePage';
import ContactUs from './components/ContactUs';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AppointmentPage from './components/AppointmentPage';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

// PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

// DepartmentsPreview component for home page
const DepartmentsPreview = () => {
  const history = useHistory();
  const previewDepartments = [
    {
      id: 1,
      title: "Cardiology",
      description: "Advanced cardiac care with state-of-the-art facilities for all heart-related conditions.",
      icon: "❤️"
    },
    {
      "id": 2,
      "title": "General Medicine",
      "description": "Primary care for adults, diagnosis and treatment of common illnesses.",
      "icon": "🩺"
    },
    {
      id: 3,
      title: "Orthopedics",
      description: "Comprehensive bone and joint care with surgical and non-surgical treatments.",
      icon: "🦴"
    }
  ];

  return (
    <section style={{ 
      padding: '50px 20px', 
      backgroundColor: '#f8f9fa',
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '32px', 
          color: '#333', 
          marginBottom: '30px',
          fontWeight: '600'
        }}>
          Our Departments
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px',
          marginBottom: '30px'
        }}>
          {previewDepartments.map(dept => (
            <div 
              key={dept.id} 
              style={{ 
                backgroundColor: 'white', 
                padding: '30px', 
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                
              }}
              
            >
              <div style={{ 
                fontSize: '48px', 
                marginBottom: '20px', 
                color: '#2c9687', 
                textAlign: 'center' 
              }}>
                {dept.icon}
              </div>
              <h3 style={{ 
                fontSize: '22px', 
                marginBottom: '15px', 
                color: '#333', 
                fontWeight: '600', 
                textAlign: 'center' 
              }}>
                {dept.title}
              </h3>
              <p style={{ 
                color: '#666', 
                fontSize: '16px', 
                lineHeight: '1.6', 
                marginBottom: '20px', 
                textAlign: 'center' 
              }}>
                {dept.description}
              </p>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => history.push('/departments')}
          style={{
            backgroundColor: '#16a085',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
          }}
        >
          View All Departments
        </button>
      </div>
    </section>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        {/* Navigation - Use Navbar component instead of Navigation */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        {/* Main Content */}
        <main style={{ flex: '1' }}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <FullAboutUs />
            </Route>
            <Route path="/departments">
              <DepartmentsRouter />
            </Route>
            <Route exact path="/consultants">
              <ConsultantsPage />
            </Route>
            <Route exact path="/consultants/:department">
              <DepartmentDoctors />
            </Route>
            <Route path="/consultants/:department/:doctorId">
              <DoctorProfile />
            </Route>
            <Route path="/testimonials">
              <TestimonialsPage />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            
            {/* Services Routes */}
            <Route path="/services/laboratory">
              <LaboratoryServicePage />
            </Route>
            <Route path="/services/ambulance">
              <AmbulanceServicePage />
            </Route>
            <Route path="/services/blood-bank">
              <BloodBankPage />
            </Route>
            <Route path="/services/cafeteria">
              <CafeteriaPage />
            </Route>
            <Route path="/services/atm">
              <AtmPage />
            </Route>
            <Route path="/services/car-parking">
              <CarParkingPage />
            </Route>
            <Route path="/services/medical-records">
              <MedicalRecordsPage />
            </Route>
            <Route path="/services/pharmacy">
              <PharmacyPage />
            </Route>
            <Route path="/services/vaccination">
              <VaccinationPage />
            </Route>
            <Route path="/services/emergency">
              <EmergencyServicePage />
            </Route>
            
            {/* Auth Routes */}
            <Route path="/login">
              {isAuthenticated ? (
                <Redirect to="/appointment" />
              ) : (
                <LoginPage setIsAuthenticated={setIsAuthenticated} />
              )}
            </Route>
            <Route path="/register">
              {isAuthenticated ? (
                <Redirect to="/appointment" />
              ) : (
                <RegistrationPage setIsAuthenticated={setIsAuthenticated} />
              )}
            </Route>
            
            {/* Private Routes */}
            <PrivateRoute path="/appointment">
              <AppointmentPage />
            </PrivateRoute>
            
            {/* 404 Redirect */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

// Home Page Components
function HomePage() {
  return (
    <>
      <Carousel />
      <HospitalManagement />
      <AboutUsPreview />
      <DepartmentsPreview />
      <Blog />
    </>
  );
}

function AboutUsPreview() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '50px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#16a085',
        textTransform: 'uppercase',
        marginBottom: '10px',
        textAlign: 'left'
      }}>
        ABOUT US
      </h3>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '30px',
      }}>
        <div style={{ flex: '1' }}>
          <h2 style={{
            color: '#0d6efd',
            fontSize: '28px',
            marginBottom: '15px',
            textAlign: 'left'
          }}>
            We Provide Essential Services For Your Health Care
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}>
            Meditrust hospital is a super specialty hospital. Meditrust hospital is located at Dhanmondi, a rich industrial town of Dhaka.
            <br /><br />
            Quality healthcare comes only with commitment. A commitment to serve patients and ensure their well-being and recovery in the shortest possible time. Choosing the right hospital for your medical needs is always a difficult choice for a patient or guardian.
          </p>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#16a085',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '15px',
              transition: 'all 0.3s ease',
            }}>
              READ MORE +
            </button>
          </Link>
        </div>
        
        <div style={{ flex: '1', textAlign: 'center' }}>
          <img 
            src="/doctor.jpg" 
            alt="Hospital" 
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      </div>
    </section>
  );
}

function FullAboutUs() {
  return (
    <div>
      {/* Full-width image section */}
      <div style={{ 
        width: '100%',
        marginBottom: '40px'
      }}>
        <img 
          src="/aboutus.png" 
          alt="Hospital" 
          style={{
            width: '100%',
            height: '400px', 
            objectFit: 'cover'
          }} 
        />
      </div>

      {/* Original content container */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 50px 50px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#16a085',
          textTransform: 'uppercase',
          marginBottom: '10px',
          textAlign: 'left'
        }}>
          ABOUT US
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '30px',
          marginBottom: '40px',
        }}>
          <div style={{ flex: '1' }}>
            <h2 style={{
              color: '#0d6efd',
              fontSize: '28px',
              marginBottom: '15px',
              textAlign: 'left'
            }}>
              We Provide Essential Services For Your Health Care
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              Meditrust hospital is a super specialty hospital. Meditrust hospital is located at Dhanmondi, a rich industrial town of Dhaka.
              <br /><br />
              Quality healthcare comes only with commitment. A commitment to serve patients and ensure their well-being and recovery in the shortest possible time. Choosing the right hospital for your medical needs is always a difficult choice for a patient or guardian.
              <br /><br />
              Our hospital is equipped with the latest medical technologies and staffed by experienced healthcare professionals dedicated to providing the highest standard of care. We offer a wide range of medical services across various specialties to meet all your healthcare needs.
            </p>
          </div>
          
          <div style={{ flex: '1', textAlign: 'center' }}>
            <img 
              src="/doctor.jpg" 
              alt="Hospital" 
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div style={{ 
          backgroundColor: '#f0f8ff',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '40px',
          width: '100%'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px',
            color: '#0d6efd'
          }}>
            Vision & Mission
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            "Our Mission is to bring healthcare of highest standards in our region by providing access to 
            exceptional, affordable, and patient-centered care within the reach of every individual."
          </p>
        </div>

        {/* Values Section */}
        <div style={{ 
          backgroundColor: '#f0f8ff',
          padding: '30px',
          borderRadius: '10px',
          width: '100%'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '30px',
            color: '#0d6efd'
          }}>
            Our Core Values
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {[
              {
                title: "Transparency",
                description: "Every aspect of our business is clear and comprehensive to the relevant stakeholder."
              },
              {
                title: "Teamwork",
                description: "A collaborative work ecosystem where all collective efficiencies are harnessed."
              },
              {
                title: "Empathy & Compassion",
                description: "Understanding and responding to the feelings of both patients and employees."
              },
              {
                title: "Excellence",
                description: "Each team member strives for quality in every action and process."
              },
              {
                title: "Education",
                description: "Continuous learning to create an advanced and sustainable healthcare system."
              },
              {
                title: "Equity",
                description: "Mutual trust based on fair and impartial consideration of all matters."
              }
            ].map((value, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ 
                  color: '#16a085',
                  marginBottom: '10px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
