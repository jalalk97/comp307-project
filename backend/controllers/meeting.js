const Meeting = require("../models/meeting");

//function will return a meeting with the required URL
async function getMeeting(req, res){
    const { url } = req.params;
    if(!url) {
        return res.status(400).json({ message: "URL is required"});
    }

    if(typeof url !== "string") {
        return res.status(400).json({
            message: "Provided URL is not a string",
        });
    }

    const meeting = await Meeting.findOne({ url }).lean().exec();

    if(!meeting){
        return res.status(404).json({
            message: "Did not find a meeting with the corresponding url",
        });
    }
    const meeting_data = {
        dateRange: meeting.dateRange,
        timeRange: meeting.timeRange,
        host: meeting.host,
        multiple_people: meeting.multiple_people,
        is_weekly: meeting.is_weekly,
        url: meeting.url
    };

    res.status(200).json({
        meeting: meeting_data
    });
    
    return;
};

module.exports = {
    getMeeting,
};