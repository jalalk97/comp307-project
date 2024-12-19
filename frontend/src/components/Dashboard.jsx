import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link} from "react-router-dom";

import './css/Dashboard.css'
import { selectCurrentUser, userLoggedOut } from "../features/auth/authSlice";

const Dashboard = () => {
    //allowing navigation between routes if a button press is ativated
    //need to add a function for checking if tokens are valid
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(selectCurrentUser);

    const goToLanding = () => {
        navigate("/");
    };
    const goToAlternate = () => {
        navigate("/alternate-meeting");
    };
    const goToActiveAppointmentAndHistory = () => {
        navigate("/active-appointment-history");
    };
    const goToBookWithURL = () => {
        navigate("/book-with-url");
    };
    const goToLogout = () => {
        dispatch(userLoggedOut())
        console.log("user has been logged out");
        //Potentially have to notify backend
        navigate("/");
    };
    const goToCreateMeeting = () => {
        navigate("/create-meeting");
    };
    const goToRemoveMeeting = () => {
        navigate("/remove-meeting");
    };
    const goToBorrow = () => {
        navigate("/create-borrow-meeting");
    };
    const goToFeedback = () => {
        navigate("/feedback");
    };
    const goToAvailability = () => {
        navigate("/availability");
    };

    const linkButton = {
        padding: "8px 18px",
        background: "none",
        border: "2px solid white",
        color: "white",
        borderRadius: "10px", 
        cursor: "pointer",
        fontSize: "2vw",
        transition: "0.3s, color 0.3s",
   }

    return (
        <div className="body">
          <header className="header">
            <div className="logo">
              <img src="logo2.png" alt="McGill CS EZ Booking Logo" />
            </div>
    
            <div className="nav-buttons">
              <button onClick={goToLogout}>Logout</button>
              <button onClick={goToBookWithURL}>BookWithURL</button>
              <button onClick={goToActiveAppointmentAndHistory}>
                All Appointments
              </button>
              <Link style={linkButton} to="/">Home</Link>
              <button onClick={goToAlternate}>Alternate Meeting</button>
            </div>
          </header>
    

          <main className="main-content">
            {/*need to add user name*/}
            <h2 style={{ marginTop: "5vw" }}>{`Welcome Back ${currentUser?.name ?? ""}!`}</h2>
            <div className="grid-container">
              <div className="grid-item" onClick={goToCreateMeeting}>Create a Meeting</div>
              <div className="grid-item" onClick={goToRemoveMeeting}>Remove a Meeting</div>
              <div className="grid-item" onClick={goToBorrow}>Create Borrow an Item</div>
              <div className="grid-item" onClick={goToFeedback}>Feedback</div>
              <div className="grid-item" onClick={goToAvailability}>Availability</div>
              <div className="grid-item" onClick={goToLanding}>Landing</div>
            </div>
          </main>
        </div>
      );
    };

export default Dashboard;
