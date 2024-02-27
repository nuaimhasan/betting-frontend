import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allCategories: builder.query({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["category"],
    }),

    categoryWaysGame: builder.query({
      query: (id) => ({
        url: `/category-wise-game/${id}`,
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useAllCategoriesQuery, useCategoryWaysGameQuery } = categoryApi;
