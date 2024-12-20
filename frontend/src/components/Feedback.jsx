import React from "react";
import { useNavigate  } from "react-router-dom";
import './css/Feedback.css';
import { useCreateFeedbackMutation } from "../features/feedback/feedbackApiSlice";

const Feedback = () => {
    const navigate = useNavigate();

    const [createFeedback] = useCreateFeedbackMutation();

    //navigate back to Dashboard
    const handleDashboardButton = () => {
        navigate("/Dashboard");
    }

    //prepare feedback submission and send to backend
    const handleSubmitClick = async () => {
        //will find the value of the input that is currently selected if none is selected will raise an error
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const comments = document.getElementById("comments").value;

        if(!rating) {
            alert("Please select a rating before submitting");
            return;
        }
        console.log("Rating is", rating);
        console.log("Feedback is", comments);
        const payload = {rating: rating, comment: comments}

        console.log(payload);
        //fetch backend and check if data was successfully submitted
        try{
            await createFeedback(payload);       
            console.log("feedback successfully submitted");
            navigate("/Dashboard");
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
              <input type="radio" id="rate1" name="rating" value="1" />
              <label htmlFor="rate1">1</label>

              <input type="radio" id="rate2" name="rating" value="2" />
              <label htmlFor="rate2">2</label>

              <input type="radio" id="rate3" name="rating" value="3" />
              <label htmlFor="rate3">3</label>

              <input type="radio" id="rate4" name="rating" value="4" />
              <label htmlFor="rate4">4</label>

              <input type="radio" id="rate5" name="rating" value="5" />
              <label htmlFor="rate5">5</label>

              <input type="radio" id="rate6" name="rating" value="6" />
              <label htmlFor="rate6">6</label>

              <input type="radio" id="rate7" name="rating" value="7" />
              <label htmlFor="rate7">7</label>

              <input type="radio" id="rate8" name="rating" value="8" />
              <label htmlFor="rate8">8</label>

              <input type="radio" id="rate9" name="rating" value="9" />
              <label htmlFor="rate9">9</label>

              <input type="radio" id="rate10" name="rating" value="10" />
              <label htmlFor="rate10">10</label>
            </div>
            <div className="comment">
              <p>Comments? (Optional)</p>
              <textarea
                id="comments"
                className="area"
                name="message"
                maxLength="1000"
                placeholder="Tell us your feedback here..."
              ></textarea>
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
