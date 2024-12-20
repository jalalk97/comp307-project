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
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    multiple_people: false,
    is_weekly: false,
  });

  const [generatedURL, setGeneratedURL] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const randomURL = `https://items-to-borrow.com/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setGeneratedURL(randomURL);

    const meetingData = {
      dateRange: {
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
      timeRange: {
        startTime: formData.startTime,
        endTime: formData.endTime,
      },
      host: currentUser?.id,
      multiple_people: formData.multiple_people,
      is_weekly: formData.is_weekly,
      url: randomURL,
    };

    try {
      const response = await fetch("http://localhost:4000/borrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetingData),
      });

      const data = await response.json();
      console.log("Borrow request created:", data);
      setGeneratedURL(data.url); // Update URL from response if needed
    } catch (error) {
      console.error("Error creating borrow request:", error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5vw" }}>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img onClick={() => navigate(-1)}
            src={Logo}
            alt="logo"
            style={{ width: "15vw", height: "auto" }}
          />
        </div>
        <div>
          <button
            style={styles.backButton}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      
      </nav>

      <div style={styles.mainContainer}>
        <div style={styles.leftPanel}>
          <h1 style={{ marginBottom: "2vw", fontSize: "2.5vw" }}>Items to Borrow</h1>

          <div style={{ marginBottom: "2vw" }}>
            <h3 style={{ fontSize: "1.8vw", margin: 0 }}>Item</h3>
            <input
              name="item"
              value={formData.item}
              onChange={handleInputChange}
              style={styles.input}
              placeholder=""
            />
          </div>

          <div style={styles.dateTimeRow}>
            <div style={styles.dateTimeField}>
              <h3 style={{ fontSize: "1.8vw", margin: 0 }}>Borrow Date *</h3>
              <input
                name="borrowDate"
                value={formData.startDate}
                onChange={handleInputChange}
                style={styles.smallInput}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div style={styles.dateTimeField}>
              <h3 style={{ fontSize: "1.8vw", margin: 0 }}>Return Date *</h3>
              <input
                name="returnDate"
                value={formData.endDate}
                onChange={handleInputChange}
                style={styles.smallInput}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div style={styles.dateTimeField}>
              <h3 style={{ fontSize: "1.8vw", margin: 0 }}>Borrow Time *</h3>
              <div style={styles.timeContainer}>
                <input
                  name="borrowTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  style={styles.timeInput}
                  placeholder="00:00"
                />
                <select
                  name="borrowAmPm"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  style={styles.amPmSelect}
                >
                  <option value="am">am</option>
                  <option value="pm">pm</option>
                </select>
              </div>
            </div>
            <div style={styles.dateTimeField}>
              <h3 style={{ fontSize: "1.8vw", margin: 0 }}>Return Time *</h3>
              <div style={styles.timeContainer}>
                <input
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleInputChange}
                  style={styles.timeInput}
                  placeholder="00:00"
                />
                <select
                  name="returnAmPm"
                  value={formData.returnAmPm}
                  onChange={handleInputChange}
                  style={styles.amPmSelect}
                >
                  <option value="am">am</option>
                  <option value="pm">pm</option>
                </select>
              </div>
            </div>
          </div>

          <button style={styles.getUrlButton} onClick={handleSubmit}>
            GET URL
          </button>

          {generatedURL && (
            <div style={{ marginTop: "2vw" }}>
              <h3 style={{ fontSize: "2vw", margin: 0 }}>Generated URL:</h3>
              <p style={{ fontSize: "1.5vw" }}>{generatedURL}</p>
            </div>
          )}
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
    padding: "1vw 2vw",
    backgroundColor: "#990000",
    flexWrap: "wrap",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "2vw",
  },
  navRight: {
    display: "flex",
    gap: "2vw",
    padding: "1vw 0.5vw",
  },
  backButton: {
    padding: "1vw 2vw",
    background: "#990000",
    border: "0.2vw solid #fff",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "0.5vw",
    fontSize: "1.5vw",
  },
  mainContainer: {
    display: "flex",
    width: "100%",
    padding: "2vw",
    justifyContent: "center",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  leftPanel: {
    width: "50%",
    paddingRight: "2vw",
    boxSizing: "border-box",
  },
  rightPanel: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  imageContainer: {
    width: "50vw",
    height: "30vh",
    border: "0.4vw solid red",
    backgroundImage: `url(${Home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  input: {
    display: "block",
    width: "40vw",
    padding: "1vw",
    marginTop: "0.5vw",
    border: "0.2vw solid #ccc",
    borderRadius: "0.5vw",
    fontSize: "1.5vw",
  },
  dateTimeRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2vw",
    marginBottom: "2vw",
  },
  dateTimeField: {
    display: "flex",
    flexDirection: "column",
  },
  smallInput: {
    display: "block",
    width: "15vw",
    padding: "1vw",
    marginTop: "0.5vw",
    border: "0.2vw solid #000",
    borderRadius: "0.5vw",
    fontSize: "1.5vw",
  },
  timeContainer: {
    display: "flex",
    gap: "1vw",
    marginTop: "0.5vw",
    alignItems: "center",
  },
  timeInput: {
    width: "10vw",
    padding: "1vw",
    border: "0.2vw solid #000",
    borderRadius: "0.5vw",
    fontSize: "1.5vw",
  },
  amPmSelect: {
    padding: "1vw",
    border: "0.2vw solid #000",
    borderRadius: "0.5vw",
    background: "#fff",
    cursor: "pointer",
    fontSize: "1.5vw",
  },
  getUrlButton: {
    padding: "1vw 2vw",
    background: "#990000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "0.5vw",
    fontSize: "1.5vw",
  },
};

export default CreateBorrowMeeting;