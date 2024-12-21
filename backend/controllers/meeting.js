const Meeting = require("../models/meeting");

//function will return a meeting with the required URL
async function getMeeting(req, res) {
  const id = req.params.url;
  console.log("id:", id);
  
  if (!id) {
    console.log("!id");
    return res.status(400).json({ message: "URL is required" });
  }

  if (typeof id !== "string") {
    console.log("not a string");
    return res.status(400).json({
      message: "Provided URL is not a string",
    });
  }
  
  const meeting = await Meeting.findById(id).populate('host', 'email name').exec();

  console.log(meeting);

  if (!meeting) {
    return res.status(404).json({
      message: "Did not find a meeting with the corresponding url",
    });
  }


  const meeting_data = meeting.toJSON();

  console.log("Meeting_data: ", meeting_data);

  const data = {
    meeting_data,
  }

  console.log("meeting data:", meeting_data);

  return res.status(200).json(data);

 
}

async function createMeeting(req, res) {
  try {
    const { dateRange, timeRange, host, multiple_people, is_weekly, is_borrow } = req.body;

    console.log({ dateRange, timeRange, host });
    if (!dateRange || !timeRange || !host) {
      return res.status(400).json({
        message: "Missing required fields: dateRange, timeRange or host.",
      });
    }

    console.log("THIS IS IS_borrow: ", is_borrow);

    const newMeeting = new Meeting({
      dateRange,
      timeRange,
      host,
      multiple_people: true,
      is_weekly: is_weekly || false,
      to_borrow: is_borrow || false,
    });

    await newMeeting.save();

    res.status(201).json(newMeeting);
  } catch (error) {
    console.error("Error creating meeting:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateMeeting(req, res) {
  try {
    const updateFields = req.body; // Get update fields from request body

    if (!updateFields.bookingUrl) {
      return res
        .status(400)
        .json({ message: "URL is required to update a meeting." });
    }

    // Find the meeting by URL and update it with the provided fields
    const updatedMeeting = await Meeting.findOneAndUpdate(
      { url: updateFields.bookingUrl }, // Find by URL
      { $set: updateFields }, // Update with provided fields
      { new: true, runValidators: true }, // Return the updated document and validate fields
    );

    if (!updatedMeeting) {
      return res.status(404).json({ message: "Meeting not found." });
    }

    res.status(200).json({
      message: "Meeting updated successfully",
      meeting: updatedMeeting,
    });
  } catch (error) {
    console.error("Error updating meeting:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function removeMeeting(req, res) {
  try {
    const { user } = req;

    if (!user) {
      return res
        .status(401)
        .json({ messagee: "You must be logged in to remove a meeting" });
    }

    const { id } = req.params;

    const meeting = await Meeting.findById(id).exec();
    console.log(meeting);

    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }

    if (meeting.host.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ messagee: "You cannot remove someone else's meeting" });
    }

    await meeting.deleteOne();

    return res
      .status(200)
      .json({ message: "The meeting was successfully removed" });
  } catch (err) {
    console.error("Error deleting meeting:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getAvailability(req, res) {
  const id = req.params.url;
  console.log("id:", id);
  
  if (!id) {
    console.log("!id");
    return res.status(400).json({ message: "URL is required" });
  }

  if (typeof id !== "string") {
    console.log("not a string");
    return res.status(400).json({
      message: "Provided URL is not a string",
    });
  }
  

  const curr_meeting = await Meeting.findById(id).exec();

  const curr_host = curr_meeting.host;

  console.log(curr_host);

  const meetings = await Meeting.find({ host: curr_host }).populate('host', 'name email').exec();

  console.log("Meetings by Host:", meetings);

  if (!meetings || meetings.length === 0) {
    console.log("No meetings found for the host");
    return res.status(404).json({ message: "No meetings found for the host" });
  }


  const meeting_data = meetings.map(meeting => meeting.toJSON());

  const data = {
    meeting_data,
  }

  console.log("meeting data:", meeting_data);

  return res.status(200).json(data);

 
}

/**
 * Retrieves all meetings from the database.
 * Responds with a list of meetings, including populated host information.
 */
async function getAllMeetings(req, res) {
  try {
    const meetings = await Meeting.find()
      .populate('host', 'email name')
      .exec();

    if (!meetings || meetings.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: "No meetings found" 
      });
    }

    // Transform the data to match frontend expectations
    const meetings_data = meetings.map(meeting => ({
      id: meeting._id,
      dateRange: meeting.dateRange,
      timeRange: meeting.timeRange,
      host: meeting.host,
      multiple_people: meeting.multiple_people,
      is_weekly: meeting.is_weekly,
      url: meeting.url,
      to_borrow: meeting.to_borrow
    }));

    // Send response in the expected format
    return res.status(200).json({ meetings: meetings_data });
  } catch (error) {
    console.error("Error in getAllMeetings:", error);
    return res.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: error.message 
    });
  }
}

module.exports = {
  getAvailability,
  getMeeting,
  createMeeting,
  updateMeeting,
  removeMeeting,
  getAllMeetings,
};
