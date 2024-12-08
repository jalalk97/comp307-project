import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Landing = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <button style={styles.navButton}>Appointment History</button>
          <button style={styles.navButton}>Have a URL? Click Here</button>
        </div>
        <div style={styles.navRight}>
          <button style={styles.navButton} onClick={() => navigate("/login")}>
            Login
          </button>
          <button style={styles.navButton} onClick={() => navigate("/register")}>Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div> {/* Semi-transparent overlay */}
        <div style={styles.heroContent}>
          <img
            src="/logo.png" // Reference to the logo in the public folder
            alt="Logo"
            style={styles.logo}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutBox}>
          <h2 style={styles.aboutTitle}>ABOUT US</h2>
          <p style={styles.aboutText}>
            We are a specialized booking platform that enables Computer Science
            students to seamlessly schedule appointments with their professors
            and teaching assistants. Our platform aims to simplify the academic
            support process by offering streamlined booking features, appointment
            history tracking, and easy integration with course resources. We
            strive to enhance the learning experience by making it more
            accessible, organized, and efficient for both students and staff.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="/" style={styles.footerLink}>
            Example
          </a>
          <a href="/" style={styles.footerLink}>
            Example
          </a>
          <a href="/" style={styles.footerLink}>
            Example
          </a>
        </div>
      </footer>
    </div>
  );
};

// Styles
const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: 0,
    backgroundColor: "#ffffff",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#990000",
    flexWrap: "wrap",
  },
  navLeft: {
    display: "flex",
    gap: "20px",
    flexWrap: "nowrap",
    padding: "8px 1px",
  },
  navRight: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "8px 1px",
  },
  navButton: {
    backgroundColor: "#ffffff",
    border: "1px solid #ffffff",
    color: "#990000",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
  hero: {
    position: "relative",
    height: "50vh",
    backgroundImage: `url('https://grantme.com/wp-content/uploads/2021/09/mcgill.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },
  logo: {
    width: "30%",
    height: "auto",
  },
  aboutSection: {
    padding: "20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    flex: "1 0 auto",
  },
  aboutBox: {
    backgroundColor: "#918e8e",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "80%",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  aboutTitle: {
    fontSize: "clamp(18px, 3vw, 24px)",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#3d2c2c",
  },
  aboutText: {
    fontSize: "clamp(14px, 2vw, 16px)",
    color: "#000000",
    lineHeight: "1.5",
  },
  footer: {
    backgroundColor: "#000000",
    padding: "20px",
    textAlign: "center",
    flexShrink: 0,
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  footerLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Landing;