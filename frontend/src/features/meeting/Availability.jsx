import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAvailabilityQuery } from "./meetingApiSlice"; // RTK Query mutation
import { startFetchMeeting, fetchMeeting } from "./meetingSlice";


const Availability = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const { meetingdata, loading, error } = useSelector((state) => state.meeting);

    
    const [urlInput, setUrlInput] = useState("");
    const [meetingId, setMeetingId] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { data, error, isLoading } = useGetAvailabilityQuery(meetingId, {
      skip: !meetingId, // Prevents query execution until meetingId is set
    });

    const DashboardButtonClick = () => {
        navigate("/Dashboard");
    };


    const RequestAltButtonClick = () => {
      navigate("/alternate-meeting");
  };

    const onSubmitButton = async (e) => {

      e.preventDefault();
      const meetingUrl = e.target.elements[0].value.trim();
      console.log("Meeting URL:", meetingUrl);


      const urlSegments = meetingUrl.split("/").filter(Boolean);
      const id = urlSegments.pop();
      console.log("Meeting ID:", id);

      setMeetingId(id);


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
      width: '100%',
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
      color: 'black',
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
          <h3>Url of Meeting to check Hosts availability</h3>
            <form style={formStyle} onSubmit={onSubmitButton}>
              <input
                type="text"
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter URL here"
                style={inputStyle}
              />
              <button style={submitStyle} type="submit">
                SUBMIT
              </button>
            </form>
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
                    <th style={thTdStyle}>Multiple People</th>
                    <th style={thTdStyle}>To Borrow an Item?</th>
                    <th style={thTdStyle}>Occuring Weekly?</th>
                  </tr>
                </thead>
                  <tbody>
                  {isLoading ? (
                    <tr>
                      <td style={thTdStyle} colSpan="7">Loading...</td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td style={thTdStyle} colSpan="7">
                        {error?.data?.message || "Error fetching meeting data"}
                      </td>
                    </tr>
                  ) : data && data.meeting_data && data.meeting_data.length > 0 ? (
                    data.meeting_data.map((meeting) => (
                      <tr key={meeting._id}>
                        <td style={thTdStyle}>
                            {meeting.url}
                        </td>
                        <td style={thTdStyle}>{meeting.host.email}</td>
                        <td style={thTdStyle}>
                          {new Date(meeting.dateRange.startDate).toLocaleDateString()} to{" "}
                          {new Date(meeting.dateRange.endDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                          {meeting.timeRange.startTime} to {meeting.timeRange.endTime}
                        </td>
                        <td style={thTdStyle}>
                        {meeting.multiple_people ? "Yes" : "No"}
                        </td>
                        <td style={thTdStyle}>
                            {meeting.to_borrow ? "Yes" : "No"}
                        </td>
                        <td style={thTdStyle}>
                            {meeting.is_weekly ? "Yes" : "No"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td style={thTdStyle} colSpan="7">No meeting data available</td>
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
