/* 
Contributors:
    - Patrick Wilson 
*/

const Feedback = require("../models/feedback");

//function creates a feedback object and sends it to db
async function createFeedback(req, res) {
    const {rating, comments} = req.body;
    if (!rating || rating < 1 || rating > 10) {
        return res.status(400).json({message: "Rating needs to be between 1 and 10 "});

    }

    const feedback = await Feedback.create({
        rating, 
        comments,
    });

    console.log("created feedback:", feedback);

    if(feedback){
        res.status(201).json(feedback);
    }
    else{
        res.status(420).json({message: "user already submitteed feedback"});
    }

}
module.exports = {
    createFeedback,
};