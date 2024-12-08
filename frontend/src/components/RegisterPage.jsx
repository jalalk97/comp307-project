import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const RegisterPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div style={styles.page}>
      {/* Background Image */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div> {/* White opaque overlay */}

        {/* Logo Positioned at the Top-Left */}
        <img
          src="/logo.png" // Reference to the logo in the public folder
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Register Form */}
      <div style={styles.registerBox}>
        <h2 style={styles.title}>Register</h2>
        <form style={styles.form}>
          {/* Full Name Field */}
          <label style={styles.label} htmlFor="fullName">
            Full Name *
          </label>
          <input
            style={styles.input}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
          />

          {/* Email Field */}
          <label style={styles.label} htmlFor="email">
            Email *
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          {/* Password Field */}
          <label style={styles.label} htmlFor="password">
            Password *
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          {/* Confirm Password Field */}
          <label style={styles.label} htmlFor="confirmPassword">
            Confirm Password *
          </label>
          <input
            style={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />

          {/* Register Button */}
          <button type="submit" style={styles.registerButton}>
            REGISTER
          </button>
        </form>

        {/* Login Link */}
        <p style={styles.loginRedirect}>
          Already have an account?{" "}
          <span
            style={styles.loginLink}
            onClick={() => navigate("/login")} // Navigate to Login Page
          >
            Login
          </span>
        </p>

        {/* Back Button */}
        <button
          style={styles.backLink}
          onClick={() => navigate("/")} // Navigate back to Landing Page
        >
          Back
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  page: {
    position: "relative",
    height: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  hero: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url('https://grantme.com/wp-content/uploads/2021/09/mcgill.jpeg')`, // Replace with your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 1,
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white overlay
    zIndex: 2,
  },
  logo: {
    position: "absolute", // Positioned relative to the page
    top: "20px", // Distance from the top
    left: "20px", // Distance from the left
    maxWidth: "100px", // Maximum width for the logo
    width: "10vw", // Makes it responsive: scales relative to viewport width
    height: "auto", // Maintain aspect ratio
    zIndex: 3, // Ensure it appears above the overlay
  },
  registerBox: {
    position: "relative",
    zIndex: 4,
    backgroundColor: "#918e8e", // Light grey
    padding: "30px",
    borderRadius: "15px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  title: {
    margin: "0 0 20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000000", // Black
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000000", // Black
  },
  input: {
    padding: "10px",
    border: "1px solid #ffffff", // White border
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#990000", // Red
    color: "#ffffff", // White
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  loginRedirect: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#000000", // Black
  },
  loginLink: {
    color: "#990000",
    cursor: "pointer",
    textDecoration: "underline",
  },
  backLink: {
    marginTop: "20px",
    backgroundColor: "transparent",
    color: "#990000", // Red
    border: "none",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default RegisterPage;