import React from "react";
import { useNavigate } from "react-router-dom"; 

const RegisterPage = () => {
  const navigate = useNavigate(); 

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div> 

        <img
          src="/logo.png" 
          alt="Logo"
          style={styles.logo}
        />
      </div>

      <div style={styles.registerBox}>
        <h2 style={styles.title}>Register</h2>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="fullName">
          </label>
          <input
            style={styles.input}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
          />
          <label style={styles.label} htmlFor="email">
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <label style={styles.label} htmlFor="password">
          </label>
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <label style={styles.label} htmlFor="confirmPassword">
          </label>
          <input
            style={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />

          <button type="submit" style={styles.registerButton}>
            REGISTER
          </button>
        </form>

        <p style={styles.loginRedirect}>
          Already have an account?{" "}
          <span
            style={styles.loginLink}
            onClick={() => navigate("/login")} 
          >
            Login
          </span>
        </p>


        <button
          style={styles.backLink}
          onClick={() => navigate("/")}
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
    backgroundImage: `url('https://grantme.com/wp-content/uploads/2021/09/mcgill.jpeg')`, 
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
    position: "absolute", 
    top: "20px", 
    left: "20px", 
    maxWidth: "100px", 
    width: "10vw", 
    height: "auto", 
    zIndex: 3, 
  },
  registerBox: {
    position: "relative",
    zIndex: 4,
    backgroundColor: "#918e8e", 
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
    color: "#000000", 
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
    color: "#000000", 
  },
  input: {
    padding: "10px",
    border: "1px solid #ffffff", 
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#990000", 
    color: "#ffffff", 
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
    color: "#000000", 
  },
  loginLink: {
    color: "#990000",
    cursor: "pointer",
    textDecoration: "underline",
  },
  backLink: {
    marginTop: "20px",
    backgroundColor: "transparent",
    color: "#990000", 
    border: "none",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default RegisterPage;