import { apiSlice } from "../api/apiSlice";

export const meetingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMeeting: builder.query({
      query: (id) => ({
        url: `/meeting/${id}`,
        method: "GET",
      }),
    }),
    getAvailability: builder.query({
      query: (id) => ({
        url: `/meeting/availability/${id}`,
        method: "GET",
      }),
    }),
    createMeeting: builder.mutation({
      query: (meeting) => ({
        url: "/meeting",
        method: "POST",
        body: {
          ...meeting,
        },
      }),
    }),
    removeMeeting: builder.mutation({
      query: (id) => ({
        url: `/meeting/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetMeetingQuery,
  useGetAvailabilityQuery,
  useCreateMeetingMutation,
  useRemoveMeetingMutation,
} = meetingApiSlice;
