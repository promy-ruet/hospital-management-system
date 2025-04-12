import React from "react";
import { useHistory } from "react-router-dom";

// Simple icon components to replace lucide-react
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);


const Footer = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#fff", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>

        {/* Hospital Info Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ borderBottom: "2px solid #fff", display: "inline-block", paddingBottom: "5px" }}>Meditrust Hospital</h3>
          <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.6" }}>
            Meditrust hospital is a super specialty hospital. Meditrust hospital is located at Dhanmondi, a rich industrial town of Dhaka.
          </p>
        </div>
        
        {/* Useful Links */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ borderBottom: "2px solid #fff", display: "inline-block", paddingBottom: "5px" }}>Useful Links</h3>
          <ul style={{ listStyle: "none", padding: "0", marginTop: "10px" }}>
            <li style={{ marginBottom: "5px" }}>
              &gt; <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigation("/about"); }} style={{ textDecoration: "none", color: "#fff", fontSize: "14px" }}>About Us</a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              &gt; <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigation("/contact"); }} style={{ textDecoration: "none", color: "#fff", fontSize: "14px" }}>Contact Us</a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              &gt; <a href="/appointment" onClick={(e) => { e.preventDefault(); handleNavigation("/appointment"); }} style={{ textDecoration: "none", color: "#fff", fontSize: "14px" }}>Appointment</a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ borderBottom: "2px solid #fff", display: "inline-block", paddingBottom: "5px" }}>Opening Hours</h3>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>We are open 24 Hours</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>Ambulance: 24 Hours</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>Pharmacy: 24 Hours</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>Emergency: 24 Hours</p>
        </div>

        {/* Contact Us */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ borderBottom: "2px solid #fff", display: "inline-block", paddingBottom: "5px" }}>Contact Us</h3>
          <p style={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "10px" }}>
            <span style={{ marginRight: "8px", color: "#16a085" }}><PhoneIcon /></span> 019712889348
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "10px" }}>
            <span style={{ marginRight: "8px", color: "#16a085" }}><MailIcon /></span> meditrusthospital@gmail.com
          </p>
          <p style={{ display: "flex", alignItems: "center", fontSize: "14px", marginTop: "10px" }}>
            <span style={{ marginRight: "8px", color: "#16a085" }}><MapPinIcon /></span> Dhanmondi, Dhaka
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ textAlign: "center", fontSize: "14px", marginTop: "40px", borderTop: "1px solid #444", paddingTop: "15px" }}>
        Copyright ©2025 Meditrust Hospital (P) Ltd.
      </div>

      {/* Scroll to Top Button */}
      <a href="#" style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#16a085",
        color: "white",
        padding: "10px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontSize: "18px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
      }}>
        <ArrowUpIcon />
      </a>
    </footer>
  );
};

export default Footer;