import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBookingMutation } from "./bookingApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useGetMeetingQuery } from "../meeting/meetingApiSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastHelper } from "../../../utils/toastHelper";
/* 
Contributors:
    - Patrick Wilson 
*/

function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  
const BookWithURL = () => {
  const navigate = useNavigate(); 

  //returns null if user not logged in, so need a prompt for user to input
  //name if they not logged in
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const [createBooking] = useCreateBookingMutation();
  const [meetingId, setMeetingId] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [nameInput, setnameInput] = useState(null);



  const { data, error, isLoading } = useGetMeetingQuery(meetingId, {
    skip: !meetingId,
  });

  
  const onHomeClick = () => {
    navigate(-1);
  }

  const getMeetingPress = async (e) => {
    e.preventDefault();
    const meetingUrl = e.target.elements[0].value.trim();
    console.log("Meeting URL:", meetingUrl);

    
    const urlSegments = meetingUrl.split("/").filter(Boolean);
    const id = urlSegments.pop();
    console.log("Meeting ID:", id);

    setMeetingId(id);
    
  };

  const createBookingPress = async (e) => {
    e.preventDefault();
    if(!meetingId){
        toastHelper("Please input a meeting URL before booking", "error");
        return;
    }
    const name = "";
    if(!currentUser){
        if(nameInput == "" || !nameInput){
            toastHelper("You are not logged in, Please give your name before booking", "error");
            return;
        }
    }
    const booking_data = {
        meeting: data.meeting_data.id,
        dateRange: data.meeting_data.dateRange,
        is_borrowed: data.meeting_data.to_borrowed,
        user: currentUser?.id || null,
        name: nameInput,
        item_borrow: null,
    };
    try {
        const booking = await createBooking(booking_data);
        console.log(booking);
        if(booking.error?.status === 400) {
            toastHelper("You already booked this meeting!", "error");}

        else{
            console.log("Booking created: ", booking);
            toastHelper("Meeting was successfully created!");
            }
        }
         catch (error){
            console.error("Error creating booking: ", error);
            toastHelper(error.data.message, "error")
        }
    };


  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
};

const headerStyle = {
    backgroundColor: "#990000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
};


const homeButtonStyle = {
    backgroundColor: "#fff",
    color: "#990000",
    border: "2px solid #fff",
    padding: "8px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
};

const contentStyle = {
    padding: "20px",
    flex: "1",
};

const inputContainerStyle = {
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    marginRight: "10px",
    fontSize: "1rem",
};

const submitButtonStyle = {
    backgroundColor: "#990000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
};

const resultsContainerStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "seperate",
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

const bookButtonStyle = {
    backgroundColor: "#990000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "20px",
    cursor: "pointer",
};


const nameStyle = {
    marginTop: "40px",
};

return (
    <div style={containerStyle}>
        {/* Header */}
        <ToastContainer />
        <header style={headerStyle}>
            <div>
            <img onClick={() => navigate(-1)} src="logo2.png" alt="Logo" width={"150px"} height={"120px"}/>
            </div>
            <button onClick={onHomeClick} style={homeButtonStyle}>Back</button>
        </header>

        {/* Content */}
        <div style={contentStyle}>
            {/* Add URL Section */}
            <form style={inputContainerStyle} onSubmit={getMeetingPress}>
                <h3>Add URL</h3>
                <input
                    type="text"
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Enter URL here"
                    style={inputStyle}
                />
                <button style={submitButtonStyle} type="submit">SUBMIT</button>
            </form>

            {/* Results Section */}
            <div style={resultsContainerStyle}>
                <h3>Results</h3>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thTdStyle}>Meeing URL</th>
                            <th style={thTdStyle}>Host</th>
                            <th style={thTdStyle}>Available Dates</th>
                            <th style={thTdStyle}>Times</th>
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
                    ) : data && data.meeting_data ? (
                    <tr key={data.meeting_data.url}>
                        <td style={thTdStyle}>
                            {data.meeting_data.url}
                        </td>
                        <td style={thTdStyle}>
                            {data.meeting_data.host.email}
                        </td>
                        <td style={thTdStyle}>
                            {new Date(data.meeting_data.dateRange.startDate).toLocaleDateString()} to{" "}
                            {new Date(data.meeting_data.dateRange.endDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                            {data.meeting_data.timeRange.startTime} to {data.meeting_data.timeRange.endTime}
                        </td>
                        <td style={thTdStyle}>
                        {data.meeting_data.multiple_people ? "Yes" : "No"}
                        </td>
                        <td style={thTdStyle}>
                            {data.meeting_data.to_borrow ? "Yes" : "No"}
                        </td>
                        <td style={thTdStyle}>
                            {data.meeting_data.is_weekly ? "Yes" : "No"}
                        </td>
                  </tr>
                    ) : (
                  <tr>
                        <td style={thTdStyle} colSpan="7">No meeting data available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <form style={nameStyle} onSubmit={createBookingPress}>
                <h3>*INPUT NAME IF NOT LOGGED IN*</h3>
                <input
                    type="text"
                    placeholder="Enter name here"
                    style={inputStyle}
                    onChange={(e) => setnameInput(e.target.value)}
                />
                <button type="submit" style={bookButtonStyle}>Book</button>
            </form>
        </div>
    </div>
);
};

export default BookWithURL;