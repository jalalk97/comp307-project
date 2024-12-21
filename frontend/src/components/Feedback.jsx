import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Feedback.css';
import { useCreateFeedbackMutation } from "../features/feedback/feedbackApiSlice";

const Feedback = () => {
    const navigate = useNavigate();

    const [createFeedback] = useCreateFeedbackMutation();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState ({
      rating: "",
      comment: "",
    });

    const handleInputChange = (e) => {
      setErrorMessage("");
      setSuccessMessage("");
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    //navigate back to Dashboard
    const handleDashboardButton = () => {
        navigate("/Dashboard");
    }

    //prepare feedback submission and send to backend
    const handleSubmitClick = async () => {
        //will find the value of the input that is currently selected if none is selected will raise an error
        if(submitted){
          setErrorMessage("You already submitted a rating!");
          return;
        }
        const rating = formData.rating;
        const comment = formData.comment;
        console.log(formData);
        if(!rating) {
            setErrorMessage("Please set a rating before submitting!");
            return;
        }
        console.log("Rating is", rating);
        console.log("Feedback is", comments);
        const payload = {rating: rating, comment: comment}

        console.log(payload);
        //fetch backend and check if data was successfully submitted
        try{
            await createFeedback(payload);       
            console.log("feedback successfully submitted");
            setSuccessMessage("Thanks for your feedback!");
            setSubmitted(true);
        }
        catch (error){
            console.error("The following error occured", error);
        }
    };

    
  return (
    <div className="background">
      <div className="background-layer">
        <div className="logo_feedback">
          <img onClick={() => navigate(-1)} src="logo.png" alt="Logo" />
        </div>
        <div className="content">
          <div className="container">
            <div className="headers">
              <h1>Feedback?</h1>
              <p>Rate your experience using EZ Booking from 1-10</p>
            </div>
            <div className="rating">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    id={`rate${value}`}
                    name="rating"
                    value={value}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={`rate${value}`}>{value}</label>
                </div>
              ))}
            </div>
            <div className="comment">
              <p>Comments? (Optional)</p>
                <textarea
                    id="comments"
                    value={formData.comment}
                    className="area"
                    name="comment"
                    maxLength="1000"
                    placeholder="Tell us your feedback here..."
                    onChange={handleInputChange}
                  ></textarea>

                  {errorMessage && (
                    <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>
                  )}

                  {successMessage && (
                    <div style={{ color: "green", marginBottom: "10px" }}>{successMessage}</div>
                  )}
            </div>
            <div className="buttons">
              <button
                type="button"
                className="dashboardbutton"
                onClick={handleDashboardButton}
              >
                Dashboard
              </button>
              <button
                type="button"
                className="submitfeedback"
                onClick={handleSubmitClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
