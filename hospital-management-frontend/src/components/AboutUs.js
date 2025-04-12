import React from "react";

const AboutUs = () => {
  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", // Left-align everything
      justifyContent: "center",
      padding: "50px",
      maxWidth: "1200px",
      margin: "auto"
    }}>
      {/* ABOUT US Title (Left Aligned) */}
      <h3 style={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#16a085",
        textTransform: "uppercase",
        marginBottom: "10px",
        textAlign: "left" // Left align
      }}>
        ABOUT US
      </h3>
      
      {/* Content Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        {/* Text Content */}
        <div style={{ flex: "1" }}>
          <h2 style={{
            color: "#0d6efd",
            fontSize: "28px",
            marginBottom: "15px",
            textAlign: "left"
          }}>
            We Provide Essential Services For Your Health Care
          </h2>
          <p style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
            textAlign: "justify" // Justified text
          }}>
            Meditrust hospital is a super specialty hospital. Meditrust hospital is located at Dhanmondi, a rich industrial town of Dhaka.
            <br /><br />
            Quality healthcare comes only with commitment. A commitment to serve patients and ensure their well-being and recovery in the shortest possible time. Choosing the right hospital for your medical needs is always a difficult choice for a patient or guardian.
            <br /><br />
            Our hospital is equipped with the latest medical technologies and staffed by experienced healthcare professionals dedicated to providing the highest standard of care. We offer a wide range of medical services across various specialties to meet all your healthcare needs.
            <br /><br />
            At Meditrust Hospital, we believe in a patient-centered approach that focuses on your comfort, dignity, and speedy recovery. Our team of doctors, nurses, and support staff work collaboratively to ensure that you receive the best possible care during your stay with us.
          </p>
        </div>
        
        {/* Image Content */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img src="/doctor.jpg" alt="Hospital" style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px"
          }} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;