import { apiSlice } from "../api/apiSlice";

export const getMeetingSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMeeting: builder.mutation({
            query:(urlParam) => ({
                url: `/meeting?${new URLSearchParams(urlParam)}`,
                method: 'GET',
            })
        })
    }),
});

export const { useGetMeetingMutation } = getMeetingSlice;