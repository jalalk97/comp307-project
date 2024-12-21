const mongoose = require("mongoose");

/* 
Contributors:
    - Patrick Wilson 
*/


const feedbackSchema = new mongoose.Schema({
    /*user: { //make anon for now, if we want users to implement later
      type: userSchema,
      ref: "User",
      required: true,
      unique: true,
    },*/
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    comment: {
      type: String, 
      required: false,
      maxlength: 1000,
    },
  });
  
  feedbackSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    }
  })

  const Feedback = mongoose.model("Feedback", feedbackSchema);
  module.exports = Feedback;