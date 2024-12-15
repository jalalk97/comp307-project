import { apiSlice } from "../api/apiSlice";

export const getMeetingSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAvailability: builder.mutation({
            query:(urlParam) => ({
                url: `/meeting?${new URLSearchParams(urlParam)}`,
                method: 'GET',
            })
        })
    }),
});

export const { UseGetMeetingMutation } = getMeetingSlice;