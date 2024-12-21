import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/logo2.png";
import Home from "../assests/photo.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useCreateMeetingMutation } from "../features/meeting/meetingApiSlice";

const CreateBorrowMeeting = () => {
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);

  const [createMeeting] = useCreateMeetingMutation();

  const [generatedURL, setGeneratedURL] = useState(null);

  const [formData, setFormData] = useState({
    itemName: "",
    name: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const meetingData = {
      dateRange: {
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
      timeRange: {
        startTime: formData.startTime,
        endTime: formData.endTime,
      },
      host: currentUser.id,
      is_borrow: true,
    };

    try{
      console.log("creating meeting");
      const meeting = await createMeeting(meetingData);
      if (meeting) {
        console.log("Meeting created:", meeting);
        setGeneratedURL(`${meeting.data.url}`);
      }
    } catch (error) {
      console.error("Error creating meeting:", error);
    }
  };

  return (
      <div>
        <nav style={styles.navbar}>
          <div style={styles.navLeft}>
            <img
              onClick={() => navigate(-1)}
              src={Logo}
              alt="logo"
              width={150}
              height={100}
            />
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
            <h2 style={{ marginBottom: "10px", marginTop: "30px" }}>Create a Meeting for Students to Borrow an item</h2>
  
            <div style={{ marginBottom: "10px", marginTop: "60px" }}>
              <h3>Item to Borrow</h3>
              <input
                name="itemName"
                value={formData.itemName}
                onChange={handleInputChange}
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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ margin: "10px" }}>
              <h3>Borrow Date</h3>
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
              <h3>Return Date</h3>
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
              <h3>Pick up Time</h3>
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
              <h3>Retun Time</h3>
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