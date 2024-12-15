import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetMeetingMutation } from "./meetingApiSlice"; // RTK Query mutation
import { startFetchMeeting, fetchMeeting } from "./meetingSlice";


const Availability = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { meetingdata, loading, error } = useSelector((state) => state.meeting);

    const [getMeeting] = useGetMeetingMutation();
    const [urlInput, setUrlInput] = useState("");

    const DashboardButtonClick = () => {
        navigate("/Dashboard");
    };


    const RequestAltButtonClick = () => {
      navigate("/alternate-meeting");
  };

    const onSubmitButton = async () => {
      if(!urlInput) {
        alert("Please enter a valid URL");
        return;
      }
      try {
        dispatch(startFetchMeeting());
        const { data } = await getMeeting({url : urlInput});
        if(data){
          dispatch(fetchMeeting(data.meeting));
        } else {
            alert("No data found for the provided URL");
        } 
      } catch (err) {
        console.error("Error fetching meeting data", err);
        alert("Failed to get meeting data. Try again.");
      }
    };


    const containerStyle = {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#fff',
      minHeight: '100vh',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      position: 'relative',
    };
  
    const headerStyle = {
      backgroundColor: '#990000',
      color: '#fff',
      padding: '0',
      fontSize: '2vw',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Helvetica, sans-serif',
      width: '100%',
      position: 'fixed', // Ensures the header remains flush at the top
      top: '0',
      left: '0',
      zIndex: 3,

    };
  
    const buttonStyle = {
      backgroundColor: 'transparent',
      border: '0.2vw solid #fff',
      color: '#fff',
      padding: '1.3vw 3vw',
      borderRadius: '1vw',
      cursor: 'pointer',
      fontSize: '1.2vw',
      fontWeight: 'bold',
      fontFamily: 'Helvetica, sans-serif',
      margin: '3vw',
    };
  
    const imgContainerStyle = {
      width: '10vw',
      height: '8vw',
      margin:'0vw 0vw 0vw 3vw',
      display: 'block',
    };
  
    const backgroundImageWrapper = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('redpath.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
    };
  
    const contentWrapperStyle = {
      position: 'relative',
      zIndex: 1,
      padding: '10vw 5vw', // Extra padding to account for the fixed header
      marginTop: '8vw',
    };
  
    const formStyle = {
      margin: '2vw auto',
      maxWidth: '60vw',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1vw',
    };
  
    const inputStyle = {
      flex: 1,
      padding: '1vw',
      border: '0.3vw solid #ccc',
      borderRadius: '0.5vw',
      fontSize: '1.2vw',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '400',
    };
  
    const submitStyle = {
      backgroundColor: '#990000',
      color: '#fff',
      padding: '1vw 3vw',
      border: 'none',
      borderRadius: '0.5vw',
      fontSize: '1.2vw',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'Helvetica, sans-serif',
    };
  
    const sectionStyle = {
      marginTop: '4vw',
      textAlign: 'center',
    };
  
    const titleStyle = {
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 'bold',
      fontSize: '2vw',
      color: '#990000',
      marginBottom: '1vw',
    };
  
    const captionStyle = {
      color: '#918383',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '300',
      fontSize: '1vw',
      marginBottom: '2vw',
    };
  
    const tableWrapperStyle = {
      backgroundColor: '#fff', // Fully opaque white background
      padding: '2vw',
      borderRadius: '0.5vw',
      boxShadow: '0 0.5vw 1vw rgba(0, 0, 0, 0.1)',
      margin: '2vw auto',
      width: '80%',
    };
  
    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
    };
  
    const thTdStyle = {
      border: '0.2vw solid #ccc',
      padding: '1vw',
      fontSize: '1.2vw',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '400',
    };
  
    return (
      <div style={containerStyle}>
        <div style={backgroundImageWrapper}></div>
        <div style={headerStyle}>
          <div>
            <img style={imgContainerStyle} src="logo2.png" alt="Logo" />
          </div>
          <button onClick={DashboardButtonClick} style={buttonStyle}>Back to Dashboard</button>
          <button onClick={RequestAltButtonClick} style={buttonStyle}>Alternate Meeting</button>
        </div>
        <div style={contentWrapperStyle}>
          <div style={formStyle}>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Enter URL here"
              style={inputStyle}
            />
            <button style={submitStyle} onClick={onSubmitButton}>
              {loading ? "Loading..." : "SUBMIT"}
            </button>
          </div>
          <div style={sectionStyle}>
            <h2 style={titleStyle}>Availability</h2>
            <p style={captionStyle}>Check the available time slots below:</p>
            <div style={tableWrapperStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Meeting URL</th>
                    <th style={thTdStyle}>Host</th>
                    <th style={thTdStyle}>Dates</th>
                    <th style={thTdStyle}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {meetingdata ? (
                    <tr>
                      <td style={thTdStyle}>{meetingdata.url}</td>
                      <td style={thTdStyle}>{meetingdata.host}</td>
                      <td style={thTdStyle}>{meetingdata.dateRange}</td>
                      <td style={thTdStyle}>{meetingdata.timeRange}</td>
                    </tr>
                  ) : (
                    <tr>
                      <td style={thTdStyle} colSpan="4">
                        No meeting data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
   
export default Availability;