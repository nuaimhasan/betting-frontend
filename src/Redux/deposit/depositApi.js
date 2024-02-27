import { apiSlice } from "../api/apiSlice";

export const depositApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    depositMethod: builder.query({
      query: () => ({
        url: "/deposit",
      }),
      providesTags: ["deposit"],
    }),

    manualDeposit: builder.mutation({
      query: (formData) => ({
        url: "/manual-deposit-update",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["deposit"],
    }),
  }),
});

export const { useDepositMethodQuery, useManualDepositMutation } = depositApi;
