import React from "react";
import Logo from "../assests/logo2.png";
import { useNavigate } from "react-router-dom";


const ActiveAppointmentsAndHistory = () => {
  const navigate = useNavigate(); 
  
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

const headerStyle = {
    backgroundColor: "#c00000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
};

const logoStyle = {
    width: "150px",
    height: "120px",
};

const homeButtonStyle = {
    backgroundColor: "#fff",
    color: "#c00000",
    border: "2px solid #fff",
    padding: "8px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
};

const sectionStyle = {
    margin: "20px",
    textAlign: "center",
};

const sectionTitleStyle = {
    backgroundColor: "#e0e0e0",
    color: "#333",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px",
    display: "inline-block",
    marginBottom: "10px",
    fontSize: "1.2rem",
};

const tableContainerStyle = {
    backgroundColor: "#c0c0c0",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "0 auto",
    width: "90%",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#918e8e",
};

const thTdStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
};

const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "auto",
};

const footerLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    fontSize: "0.9rem",
};

return (
    <div style={containerStyle}>
        {/* Header */}

        
        <header style={headerStyle}>
            <div style={logoStyle}>
            <img src="logo2.png" alt="Logo" width={"150px"} height={"120px"}/>
            </div>
            <button style={homeButtonStyle}>Home</button>
        </header>

        {/* Active Appointments */}
        <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Active Appointments</div>
            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thTdStyle}>URL</th>
                            <th style={thTdStyle}>Host</th>
                            <th style={thTdStyle}>Start Date</th>
                            <th style={thTdStyle}>End Date</th>
                            <th style={thTdStyle}>Borrowed Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                        </tr>
                        <tr>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* History of Appointments */}
        <div style={sectionStyle}>
            <div style={sectionTitleStyle}>History of Appointments</div>
            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thTdStyle}>URL</th>
                            <th style={thTdStyle}>Host</th>
                            <th style={thTdStyle}>Start Date</th>
                            <th style={thTdStyle}>End Date</th>
                            <th style={thTdStyle}>Borrowed Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                        </tr>
                        <tr>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                            <td style={thTdStyle}>Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Footer */}
        <footer style={footerStyle}>
            <div>Additional links</div>
            <div style={footerLinksStyle}>
                <span>Example</span>
                <span>Example</span>
                <span>Example</span>
                <span>Example</span>
            </div>
        </footer>
    </div>
);
};


export default ActiveAppointmentsAndHistory;