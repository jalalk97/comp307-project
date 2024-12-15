import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meetingdata: null,
    loading: false,
    error: null,
  };

const meetingSlice = createSlice({
    name: "meeting",
    initialState,
    reducers: {
        startFetchMeeting: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMeeting: (state, action) => {
            state.loading = false;
            state.meetingdata = action.payload;
        },
    },
});

export const { startFetchMeeting, fetchMeeting } = meetingSlice.actions;

export default meetingSlice.reducer;