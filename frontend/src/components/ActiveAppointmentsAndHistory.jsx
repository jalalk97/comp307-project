import React from "react";
import Logo from "../assests/logo2.png";
import { useNavigate } from "react-router-dom";
import { useGetAllMeetingsQuery } from "../features/meeting/meetingApiSlice";

const ActiveAppointmentsAndHistory = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllMeetingsQuery();

  // Add debugging logs
  console.log('Query Response:', { data, error, isLoading });

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
    position: 'fixed',
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
    margin: '0vw 0vw 0vw 3vw',
    display: 'block',
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '10vw 5vw',
    marginTop: '8vw',
  };

  const tableWrapperStyle = {
    backgroundColor: '#fff',
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
    color: 'black',
  };

  const titleStyle = {
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 'bold',
    fontSize: '2vw',
    color: '#990000',
    marginBottom: '1vw',
  };

  const handleDashboardClick = () => {
    navigate('/');
  };

  const currentDate = new Date();
  const activeAppointments = data?.meetings?.filter(meeting => 
    new Date(meeting.dateRange.endDate) >= currentDate
  ) || [];
  const historyAppointments = data?.meetings?.filter(meeting => 
    new Date(meeting.dateRange.endDate) < currentDate
  ) || [];


  console.log('Filtered Appointments:', { activeAppointments, historyAppointments });

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <img style={imgContainerStyle} src={Logo} alt="Logo" />
        <button onClick={handleDashboardClick} style={buttonStyle}>
          Back
        </button>
      </header>

      <div style={contentWrapperStyle}>
        {isLoading && <p>Loading meetings...</p>}
        {error && (
          <div style={{ color: 'red', padding: '20px' }}>
            <h3>Error loading meetings</h3>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}

        {!isLoading && !error && data?.meetings?.length === 0 && (
          <p>No meetings found</p>
        )}

        {!isLoading && !error && data?.meetings?.length > 0 && (
          <>
            <div style={tableWrapperStyle}>
              <h2 style={titleStyle}>Active Appointments ({activeAppointments.length})</h2>
              {activeAppointments.length === 0 ? (
                <p>No active appointments</p>
              ) : (
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thTdStyle}>URL</th>
                      <th style={thTdStyle}>Host</th>
                      <th style={thTdStyle}>Start Date</th>
                      <th style={thTdStyle}>End Date</th>
                      <th style={thTdStyle}>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeAppointments.map((meeting) => (
                      <tr key={meeting.id}>
                        <td style={thTdStyle}>{meeting.url}</td>
                        <td style={thTdStyle}>{meeting.host.name}</td>
                        <td style={thTdStyle}>
                          {new Date(meeting.dateRange.startDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                          {new Date(meeting.dateRange.endDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                          {meeting.timeRange.startTime} - {meeting.timeRange.endTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div style={tableWrapperStyle}>
              <h2 style={titleStyle}>History of Appointments ({historyAppointments.length})</h2>
              {historyAppointments.length === 0 ? (
                <p>No historical appointments</p>
              ) : (
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thTdStyle}>URL</th>
                      <th style={thTdStyle}>Host</th>
                      <th style={thTdStyle}>Start Date</th>
                      <th style={thTdStyle}>End Date</th>
                      <th style={thTdStyle}>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyAppointments.map((meeting) => (
                      <tr key={meeting.id}>
                        <td style={thTdStyle}>{meeting.url}</td>
                        <td style={thTdStyle}>{meeting.host.name}</td>
                        <td style={thTdStyle}>
                          {new Date(meeting.dateRange.startDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                          {new Date(meeting.dateRange.endDate).toLocaleDateString()}
                        </td>
                        <td style={thTdStyle}>
                          {meeting.timeRange.startTime} - {meeting.timeRange.endTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActiveAppointmentsAndHistory;