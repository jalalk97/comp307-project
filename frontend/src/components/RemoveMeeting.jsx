/* 
Contributors:
    - Jalal Kalyati (logic only, not view)
*/

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRemoveMeetingMutation } from "../features/meeting/meetingApiSlice";
import { toastHelper } from "../../utils/toastHelper";

const RemoveMeeting = () => {
  const navigate = useNavigate();
  const [urlInput, setUrlInput] = useState("");
  const [removeMeeting, { isLoading }] = useRemoveMeetingMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const meetingUrl = elements.url.value;
    const meetingId = meetingUrl.split("/").filter(Boolean).pop();
    try {
      await removeMeeting(meetingId).unwrap();
      navigate("/dashboard");
      setTimeout(() => {
        toastHelper("Meeting was successfully removed");
      }, 1);
    } catch (err) {
      if (err.data) {
        toastHelper(err.data.message, "error");
      } else {
        console.log(err);
        toastHelper("An unexpected error occured", "error");
      }
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <ToastContainer />

      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img
            onClick={() => navigate(-1)}
            src="/logo2.png"
            alt="logo"
            width={150}
            height={100}
          />
        </div>
        <div>
          <Link to="/dashboard" style={styles.backButton}>
            Back to Dashboard
          </Link>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <h1 style={{ marginBottom: "20px" }}>Remove Meeting</h1>

          <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
            <label htmlFor="url">
              <h3>Url of Meeting to Remove</h3>
            </label>
            <input
              id="url"
              name="url"
              style={{
                value: { urlInput },
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              placeholder="Enter the meeting URL"
              required
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
              Note, you must be the host to delete a meeting
            </p>
            <button
              type="submit"
              style={styles.removeButton}
              disabled={isLoading}
            >
              Remove
            </button>
          </form>
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
    textDecoration: "none",
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

export default RemoveMeeting;
