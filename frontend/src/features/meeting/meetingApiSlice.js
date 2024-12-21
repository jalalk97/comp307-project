import { apiSlice } from "../api/apiSlice";

/* 
Contributors:
    - Patrick Wilson 
*/


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
    getAllMeetings: builder.query({
      query: () => ({
        url: '/meeting',
        method: 'GET',
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
  useGetAllMeetingsQuery,
  useCreateMeetingMutation,
  useRemoveMeetingMutation,
} = meetingApiSlice;
