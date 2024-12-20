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

    const goToLogout = () => {
        dispatch(userLoggedOut())
        console.log("user has been logged out");
        //Potentially have to notify backend
        navigate("/");
    };


    return (
        <div className="body">
          <header className="header">
            <div className="logo">
              <img onClick={() => navigate("/")} src="logo2.png" alt="McGill CS EZ Booking Logo" />
            </div>
    
            <div className="nav-buttons">
              <button onClick={(goToLogout)}>Logout</button>
              <button onClick={() => navigate("/active-appointment-history")}>
                All Appointments
              </button>
              <button onClick={() => navigate('/')}>Home</button>
              <button onClick={() => navigate("/alternate-meeting")}>Alternate Meeting</button>
            </div>
          </header>
    

          <main className="main-content">
            {/*need to add user name*/}
            <h2 style={{ marginTop: "5vw" }}>{`Welcome Back ${currentUser?.name ?? ""}!`}</h2>
            <div className="grid-container">
              <div className="grid-item" onClick={() => navigate("/create-meeting")}>Create a Meeting</div>
              <div className="grid-item" onClick={() => navigate("/remove-meeting")}>Remove a Meeting</div>
              <div className="grid-item" onClick={() => navigate("/create-borrow-meeting")}>Create Borrow an Item</div>
              <div className="grid-item" onClick={() => navigate("/feedback")}>Feedback</div>
              <div className="grid-item" onClick={() => navigate("/availability")}>Availability</div>
              <button className="grid-item" onClick={() => navigate("/book-with-url")}>BookWithURL</button>
            </div>
          </main>
        </div>
      );
    };


export default Dashboard;
