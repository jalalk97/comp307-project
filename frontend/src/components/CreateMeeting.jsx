import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/logo2.png";
import Home from "../assests/photo.jpg";
import { FaRegCircleUser } from "react-icons/fa6";

const CreateMeeting = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  const getButtonStyle = (type) => ({
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "5px",
    background: selectedType === type ? "#990000" : "#fff",
    color: selectedType === type ? "#fff" : "#000",
    border: "1px solid black",
    cursor: "pointer",
  });


  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img src={Logo} alt="logo" width={150} height={100} />
        </div>
        <div>
          <button
            style={{
              padding: "10px 20px",
              background: "#990000",
              border: "1px solid #fff",
              color: "#fff",
            }}
          >
            {" "}
            Back to Dashboard
          </button>
        </div>
        <div style={styles.navRight}>
          <FaRegCircleUser
            style={{ color: "#fff", width: "40px", height: "40px" }}
          />
        </div>
      </nav>

      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1 style={{ marginBottom: "20px" }}>Create a Booking</h1>

          <div style={{ marginBottom: "10px", marginTop: "20px" }}>
            <h3>Name of Booking</h3>
            <input
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <h3>Name</h3>
            <input
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "70%",
              border: "4px solid red",
              height: "300px",
              backgroundImage: `url(${Home})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      <div style={{ padding: "10px 20px" }}>
      <h1>Booking type</h1>
      {["Bi-Weekly", "Bi-Monthly", "Daily", "One Day"].map((type) => (
        <button
          key={type}
          style={getButtonStyle(type)}
          onClick={() => handleButtonClick(type)}
        >
          {type}
        </button>
      ))}
    </div>

      <div style={{ padding: "10px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ margin: "10px" }}>
            <h3>Start Date</h3>
            <input
              style={{
                display: "block",
                width: "200px",
                padding: "10px",
                marginTop: "5px",
              }}
              type="date"
            />
          </div>
          <div style={{ margin: "10px" }}>
            <h3>End Date</h3>
            <input
              style={{
                display: "block",
                width: "200px",
                padding: "10px",
                marginTop: "5px",
              }}
              type="date"
            />
          </div>
          <div style={{ margin: "10px" }}>
            <h3>Start Time</h3>
            <input
              style={{
                display: "block",
                width: "200px",
                padding: "10px",
                marginTop: "5px",
              }}
              type="time"
            />
          </div>
          <div style={{ margin: "10px" }}>
            <h3>End Time</h3>
            <input
              style={{
                display: "block",
                width: "200px",
                padding: "10px",
                marginTop: "5px",
              }}
              type="time"
            />
          </div>
        </div>
      </div>

      <div style={{ padding: "10px 20px" }}>
        <button
          style={{ padding: "10px 20px", background: "#990000", color: "#fff" }}
        >
          GET URL
        </button>
      </div>

      <footer style={{ background: "#000", color: "#fff", padding: "20px" }}>
        <h3>Additional Link</h3>
        <div style={{ display: "flex", paddingTop: "20px", gap:20,paddingLeft:"20px" }}>
          <div style={{ display:"flex", flexDirection:"column",gap:20}}>
            <p>Example</p>
            <p>Example</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column",gap:20}}>
            <p>Example</p>
            <p>Example</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
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
    backgroundColor: "transaprent",
    border: "1px solid #ffffff",
    color: "#fff",
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

export default CreateMeeting;