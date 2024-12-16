import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assests/logo2.png";


const BookWithURL = () => {
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
    width: "80%",
    marginRight: "10px",
    fontSize: "1rem",
};

const submitButtonStyle = {
    backgroundColor: "#c00000",
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
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thTdStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
};

const bookButtonStyle = {
    backgroundColor: "#c00000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "20px",
    cursor: "pointer",
};

const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
};

const footerLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "0.9rem",
};

return (
    <div style={containerStyle}>
        {/* Header */}
        <header style={headerStyle}>
            <div>
            <img src="logo2.png" alt="Logo" width={"150px"} height={"120px"}/>
            </div>
            <button style={homeButtonStyle}>Home</button>
        </header>

        {/* Content */}
        <div style={contentStyle}>
            {/* Add URL Section */}
            <div style={inputContainerStyle}>
                <h3>Add URL</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Enter URL here"
                        style={inputStyle}
                    />
                    <button style={submitButtonStyle}>SUBMIT</button>
                </div>
            </div>

            {/* Results Section */}
            <div style={resultsContainerStyle}>
                <h3>Results</h3>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thTdStyle}>Field1</th>
                            <th style={thTdStyle}>Field2</th>
                            <th style={thTdStyle}>Field3</th>
                            <th style={thTdStyle}>Field4</th>
                            <th style={thTdStyle}>Field5</th>
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
                        
                    </tbody>
                </table>
                <button style={bookButtonStyle}>Book</button>
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

export default BookWithURL;