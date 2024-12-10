import React from "react";
import { useNavigate  } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
    //allowing navigation between routes if a button press is ativated
    //need to add a function for checking if tokens are valid
    const navigate = useNavigate();

    const goToLanding = () => {
        navigate("/Landing");
    };
    const goToAlternate = () => {
        navigate("/AlternateMeeting");
    };
    const goToActiveAppointmentAndHistory = () => {
        navigate("/ActiveAppointmentsAndHistory");
    };
    const goToBookWithURL = () => {
        navigate("/BookWithURL");
    };
    const goToLogout = () => {
        navigate("/Logout");
    };
    const goToCreateMeeting = () => {
        navigate("/CreateMeeting");
    };
    const goToRemoveMeeting = () => {
        navigate("/RemoveMeeting");
    };
    const goToCreatePoll = () => {
        navigate("/CreatePoll");
    };
    const goToFeedback = () => {
        navigate("/Feedback");
    };
    const goToAvailability = () => {
        navigate("/Availability");
    };
    return (
        <div className="body">
          <header className="header">
            <div className="logo">
              <img src="/logo.png" alt="McGill CS EZ Booking Logo" />
            </div>
    
            <div className="nav-buttons">
              <button onClick={goToLogout}>Logout</button>
              <button onClick={goToBookWithURL}>BookWithURL</button>
              <button onClick={goToActiveAppointmentAndHistory}>
                All Appointments
              </button>
              <button onClick={goToAlternate}>Alternate Meeting</button>
            </div>
          </header>
    

          <main className="main-content">
            {/*need to add user name*/}
            <h2 style={{ marginTop: "5vw" }}>Welcome Back, Firstname</h2>
            <div className="grid-container">
              <div className="grid-item" onClick={goToCreateMeeting}>
                Create a Meeting
              </div>
              <div className="grid-item" onClick={goToRemoveMeeting}>
                Remove a Meeting
              </div>
              <div className="grid-item" onClick={goToCreatePoll}>Create Poll</div>
              <div className="grid-item" onClick={goToFeedback}>Feedback</div>
              <div className="grid-item" onClick={goToAvailability}>
                Availability
              </div>
            </div>
          </main>
        </div>
      );
    };

export default Dashboard;