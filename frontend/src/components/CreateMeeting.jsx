import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/logo2.png";
import Home from "../assests/photo.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const CreateBorrowMeeting = () => {
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

  const [formData, setFormData] = useState({
    bookingName: "",
    name: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    bookingType: "",
  });

  const [generatedURL, setGeneratedURL] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (type) => {
    setFormData({ ...formData, bookingType: type });
  };

  const getButtonStyle = (type) => ({
    margin: "5px",
    padding: "10px 20px",
    borderRadius: "5px",
    background: formData.bookingType === type ? "#990000" : "#fff",
    color: formData.bookingType === type ? "#fff" : "#000",
    border: "1px solid black",
    cursor: "pointer",
  });

  const handleSubmit = async () => {
    const randomURL = `https://meeting.com/${Math.random().toString(36).substr(2, 9)}`;
    setGeneratedURL(randomURL);

    const meetingData = {
      bookingName: formData.bookingName,
      name: formData.name,
      dateRange: {
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
      timeRange: {
        startTime: formData.startTime,
        endTime: formData.endTime,
      },
      bookingType: formData.bookingType,
      url: randomURL,
      host: currentUser.id,
    };

    try {
      const response = await fetch("http://localhost:4000/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetingData),
      });

      const data = await response.json();
      console.log("Meeting created:", data);
      setGeneratedURL(data.bookingUrl); // Set the URL after creation
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

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
            onClick={() => navigate("/dashboard")}
          >
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

          <div style={{ marginBottom: "10px", marginTop: "30px" }}>
            <h3>Name of Booking</h3>
            <input
              name="bookingName"
              value={formData.bookingName}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>
          {/* <div style={{ marginTop: "16px" }}>
            <h3>Name</h3>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div> */}

          <div style={{ paddingTop: "30px" }}>
            <h1>Booking type</h1>
            {["Bi-Weekly"].map((type) => (
              <button
                key={type}
                style={getButtonStyle(type)}
                onClick={() => handleButtonClick(type)}
              >
                {type}
              </button>
            ))}
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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ margin: "10px" }}>
            <h3>Start Date</h3>
            <input
              name="startDate"
              value={formData.startDate}
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
              value={formData.endDate}
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
              value={formData.startTime}
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
              value={formData.endTime}
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

      <div style={{ padding: "10px 20px" }}>
        <button
          onClick={handleSubmit}
          style={{ padding: "10px 20px", background: "#990000", color: "#fff" }}
        >
          GET URL
        </button>
        {generatedURL && (
          <div style={{ marginTop: "20px" }}>
            <h3>Generated URL:</h3>
            <p>{generatedURL}</p>
          </div>
        )}
      </div>

      <footer style={{ background: "#000", color: "#fff", padding: "20px" }}>
        <h3>Additional Link</h3>
        <div
          style={{
            display: "flex",
            paddingTop: "20px",
            gap: 20,
            paddingLeft: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p>Example</p>
            <p>Example</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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
};

export default CreateBorrowMeeting;
