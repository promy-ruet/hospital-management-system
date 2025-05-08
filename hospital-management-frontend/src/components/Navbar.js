import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const history = useHistory();
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  // Create refs for the dropdown containers
  const departmentsRef = useRef(null);
  const servicesRef = useRef(null);
  
  const departments = [
    { name: "Cardiology", path: "/departments/cardiology" },
    { name: "General Medicine", path: "/departments/general-medicine" },
    { name: "Orthopedics", path: "/departments/orthopedics" },
    { name: "Paediatrics", path: "/departments/paediatrics" },
    { name: "Anaesthesia", path: "/departments/anaesthesia" },
    { name: "Urology", path: "/departments/urology" }
  ];
  
  const services = [
    { name: "Laboratory Service", path: "/services/laboratory" },
    { name: "Ambulance Service", path: "/services/ambulance" },
    { name: "ATM", path: "/services/atm" },
    { name: "Blood Bank", path: "/services/blood-bank" },
    { name: "Cafeteria", path: "/services/cafeteria" },
    { name: "Car Parking", path: "/services/car-parking" },
    { name: "Medical Records", path: "/services/medical-records" },
    { name: "Pharmacy", path: "/services/pharmacy" },
    { name: "Vaccination Center", path: "/services/vaccination" },
    { name: "Emergency Service", path: "/services/emergency" }
  ];

  // Effect to set active item based on current path
  useEffect(() => {
    if (location.pathname === '/') setActiveItem('home');
    else if (location.pathname.startsWith('/about')) setActiveItem('about');
    else if (location.pathname.startsWith('/departments')) setActiveItem('departments');
    else if (location.pathname.startsWith('/services')) setActiveItem('services');
    else if (location.pathname.startsWith('/consultants')) setActiveItem('consultants');
    else if (location.pathname.startsWith('/testimonials')) setActiveItem('testimonials');
    else if (location.pathname.startsWith('/contact')) setActiveItem('contact');
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close dropdown if clicking outside both dropdown areas
      if (departmentsRef.current && !departmentsRef.current.contains(event.target)) {
        setDepartmentsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when navigating
  useEffect(() => {
    setDepartmentsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleAppointmentClick = () => {
    if (!isAuthenticated) {
      history.push('/login');
    } else {
      history.push('/appointment');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    history.push('/');
  };

  // Common styles for navigation items
  const navItemStyle = {
    textDecoration: 'none',
    padding: '10px 15px',
    margin: '0 5px',
    transition: 'all 0.3s ease',
    position: 'relative',
    color: '#333',
    cursor: 'pointer'
  };

  const activeStyle = {
    ...navItemStyle,
    color: '#4CAF50',
    fontWeight: 'bold'
  };

  // Hover style function for menu items
  const getHoverStyle = (itemName) => {
    return {
      ...navItemStyle,
      backgroundColor: activeItem === itemName ? '#4CAF50' : 'transparent',
      color: activeItem === itemName ? 'white' : '#333',
      ':hover': {
        backgroundColor: '#4CAF50',
        color: 'white'
      }
    };
  };

  // Function to toggle dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (dropdown === 'departments') {
      setDepartmentsOpen(!departmentsOpen);
      setServicesOpen(false);
    } else if (dropdown === 'services') {
      setServicesOpen(!servicesOpen);
      setDepartmentsOpen(false);
    }
  };

  return (
    <nav style={{ 
      padding: '20px', 
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1000
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5px'
      }}>
        <Link 
          to="/" 
          className="nav-item"
          onMouseEnter={() => setActiveItem('home')}
          onMouseLeave={() => setActiveItem(null)}
          style={{
            ...navItemStyle,
            backgroundColor: activeItem === 'home' ? '#4CAF50' : 'transparent',
            color: activeItem === 'home' ? 'white' : '#333',
          }}
        >
          HOME
        </Link>
        
        <Link 
          to="/about"
          className="nav-item" 
          onMouseEnter={() => setActiveItem('about')}
          onMouseLeave={() => setActiveItem(null)}
          style={{
            ...navItemStyle,
            backgroundColor: activeItem === 'about' ? '#4CAF50' : 'transparent',
            color: activeItem === 'about' ? 'white' : '#333',
          }}
        >
          ABOUT US
        </Link>
        
        {/* Departments Dropdown */}
        <div 
          ref={departmentsRef} 
          style={{ position: 'relative' }}
          onMouseEnter={() => setActiveItem('departments')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <button
            onClick={() => toggleDropdown('departments')}
            className="nav-item"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 15px',
              margin: '0 5px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: activeItem === 'departments' ? '#4CAF50' : 'transparent',
              color: activeItem === 'departments' ? 'white' : '#333',
            }}
          >
            DEPARTMENTS {' '}
            <span style={{ marginLeft: '5px' }}>
              ▼
            </span>
          </button>
          
          {departmentsOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              width: '200px',
              zIndex: 1000
            }}>
              {departments.map((dept) => (
                <Link
                  key={dept.name}
                  to={dept.path}
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    textDecoration: 'none',
                    color: '#333',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {dept.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Services Dropdown */}
        <div 
          ref={servicesRef} 
          style={{ position: 'relative' }}
          onMouseEnter={() => setActiveItem('services')}
          onMouseLeave={() => setActiveItem(null)}
        >
          <button
            onClick={() => toggleDropdown('services')}
            className="nav-item"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 15px',
              margin: '0 5px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: activeItem === 'services' ? '#4CAF50' : 'transparent',
              color: activeItem === 'services' ? 'white' : '#333',
            }}
          >
            OUR SERVICES {' '}
            <span style={{ marginLeft: '5px' }}>
              ▼
            </span>
          </button>
          
          {servicesOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              width: '200px',
              zIndex: 1000
            }}>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    textDecoration: 'none',
                    color: '#333',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <Link 
          to="/consultants"
          className="nav-item" 
          onMouseEnter={() => setActiveItem('consultants')}
          onMouseLeave={() => setActiveItem(null)}
          style={{
            ...navItemStyle,
            backgroundColor: activeItem === 'consultants' ? '#4CAF50' : 'transparent',
            color: activeItem === 'consultants' ? 'white' : '#333',
          }}
        >
          CONSULTANTS
        </Link>
        
        <Link 
          to="/testimonials"
          className="nav-item" 
          onMouseEnter={() => setActiveItem('testimonials')}
          onMouseLeave={() => setActiveItem(null)}
          style={{
            ...navItemStyle,
            backgroundColor: activeItem === 'testimonials' ? '#4CAF50' : 'transparent',
            color: activeItem === 'testimonials' ? 'white' : '#333',
          }}
        >
          TESTIMONIALS
        </Link>
        
        <Link 
          to="/contact"
          className="nav-item" 
          onMouseEnter={() => setActiveItem('contact')}
          onMouseLeave={() => setActiveItem(null)}
          style={{
            ...navItemStyle,
            backgroundColor: activeItem === 'contact' ? '#4CAF50' : 'transparent',
            color: activeItem === 'contact' ? 'white' : '#333',
          }}
        >
          CONTACT US
        </Link>
        
        <button 
          onClick={handleAppointmentClick}
          style={{
            textDecoration: 'none',
            backgroundColor: '#e67e22',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            margin: '0 5px'
          }}
        >
          APPOINTMENT
        </button>
        
        {isAuthenticated && (
          <button 
            onClick={handleLogout}
            style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              margin: '0 5px'
            }}
          >
            LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;