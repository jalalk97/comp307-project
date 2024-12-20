/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/logo3.png";
import Home from "../assests/photo.jpg";
import { FaRegCircleUser } from "react-icons/fa6";

const AlternateMeeting = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    bookingUrl: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrorMessage(""); // Clear error when input changes
  };

  const handleSubmit = async () => {
    const { startDate, endDate } = formValues;

    // Check if end date is earlier than start date
    if (new Date(endDate) < new Date(startDate)) {
      setErrorMessage("End date cannot be earlier than the start date.");
      alert("End date cannot be earlier than the start date.");
      return;
    }

    console.log("Form Values:", formValues);

    try {
      const response = await fetch(`http://localhost:4000/meeting`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues), // Fix: Closing `body` properly with a semicolon.
      });

      const result = await response.json();

      if (response.ok) {
        setIsRequestSent(true);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img onClick={() => navigate(-1)} src={Logo} alt="logo" width={150} height={100} />
        </div>
        <div>
          <button
            style={{
              padding: "10px 20px",
              background: "#990000",
              border: "1px solid #fff",
              color: "#fff",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
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
          <h1 style={{ marginBottom: "20px" }}>Alternate Booking</h1>

          <div style={{ marginBottom: "10px", marginTop: "20px" }}>
            <h3>Booking Url</h3>
            <input
              name="bookingUrl"
              value={formValues.bookingUrl}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <h3>Start Date</h3>
                <input
                  name="startDate"
                  value={formValues.startDate}
                  onChange={handleInputChange}
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
                  name="endDate"
                  value={formValues.endDate}
                  onChange={handleInputChange}
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
                  name="startTime"
                  value={formValues.startTime}
                  onChange={handleInputChange}
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
                  name="endTime"
                  value={formValues.endTime}
                  onChange={handleInputChange}
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
        <h1>Please Choose an Alternative Date and Time</h1>
      </div>

      <div style={{ padding: "10px 20px" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#990000",
            color: "#fff",
          }}
          onClick={handleSubmit}
        >
          Send Request
        </button>
      </div>

      {/* {isRequestSent && (
        <div style={{ padding: "10px 20px" }}>
          <h3>Generated URL: {formValues.bookingUrl}</h3>
        </div>
      )} */}

      {errorMessage && (
        <div style={{ color: "red", padding: "10px 20px" }}>
          <h4>{errorMessage}</h4>
        </div>
      )}
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
};

export default AlternateMeeting;
