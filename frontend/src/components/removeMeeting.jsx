import React from "react";
import { useNavigate } from "react-router-dom";

const removeMeeting = () => {
    const navigate = useNavigate();
    const urlInput = "";

    const handleDashboardButton = () =>{
        navigate('/Dashboard');}
    
    const handleDeleteButton = async () => {
        //TODO valueInput
        return;
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
          <nav style={styles.navbar}>
            <div style={styles.navLeft}>
              <img src='/logo2.png' alt="logo" width={150} height={100} />

            </div>
            <div>
              <button onClick={handleDashboardButton} style={styles.backButton}>Back to Dashboard</button>
            </div>
          </nav>
    
          <div style={styles.container}>
            <div style={styles.leftPanel}>
              <h1 style={{ marginBottom: "20px" }}>Remove Meeting</h1>
    
              <div style={{ marginBottom: "20px" }}>
                <h3>Url of Meeting to Remove</h3>
                <input
                  style={{
                    value:{urlInput},
                    display: "block",
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  placeholder="Enter the meeting URL"
                />
                <p style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
                  Note, you must be the host to delete a meeting
                </p>
              </div>
    
              <button onClick={handleDashboardButton} style={styles.removeButton}>Remove</button>
            </div>
    
            <div style={styles.rightPanel}>
              <div style={styles.imageContainer}></div>
            </div>
          </div>
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
        alignItems: "center",
        gap: "20px",
      },
      brand: {
        display: "flex",
        flexDirection: "column",
      },
      backButton: {
        padding: "10px 20px",
        background: "#990000",
        border: "1px solid #fff",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
        borderRadius: "4px",
      },
      container: {
        display: "flex",
        width: "100%",
        padding: "20px",
        justifyContent: "center",
        alignItems: "flex-start",
        boxSizing: "border-box",
      },
      leftPanel: {
        marginTop: "50px",
        width: "50%",
        padding: "0 20px",
        boxSizing: "border-box",
      },
      rightPanel: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      },
      imageContainer: {
        width: "70%",
        height: "300px",
        backgroundImage: `url('/redpath.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "4px solid red",
      },
      removeButton: {
        padding: "10px 20px",
        background: "#990000",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        borderRadius: "4px",
      },
    };
    
    export default removeMeeting;