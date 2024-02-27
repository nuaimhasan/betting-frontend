import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  tagTypes: ["users"],
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/user/allUsers",
      }),
      providesTags: ["users"],
    }),
    allCustomers: builder.query({
      query: () => ({
        url: "/user/allCustomers",
      }),
      providesTags: ["users"],
    }),
    allAdministrator: builder.query({
      query: () => ({
        url: "/user/allAdmins",
      }),
      providesTags: ["users"],
    }),
    addAdministrator: builder.mutation({
      query: (info) => ({
        url: `/user/add-admin`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["users"],
    }),
    deleteAdministrator: builder.mutation({
      query: (id) => ({
        url: `/user/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    editUserInfo: builder.mutation({
      query: ({ id, userInfo }) => ({
        url: `/user/update/info/${id}`,
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  useAllCustomersQuery,
  useAllAdministratorQuery,
  useDeleteAdministratorMutation,
  useAddAdministratorMutation,
  useEditUserInfoMutation,
} = userApi;
