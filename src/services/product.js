import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => id,
    }),
    getProductsWithLimitsSkip: builder.query({
      query: (args) => {
        const { category, limit, skip } = args;
        if (category === "all-products") {
          return { url: `?limit=${limit}&skip=${skip}` };
        } else {
          return { url: `category/${category}?limit=${limit}&skip=${skip}` };
        }
      },
    }),
    searchProductsByTerm: builder.query({
      query: (term) => `search?q=${term}`,
    }),
    getAllCategories: builder.query({
      query: () => "categories",
    }),
    getCategoryByName: builder.query({
      query: (name) => {
        if (name === "all-products") {
          return { url: "?limit=100&skip=0" };
        } else {
          return { url: `category/${name}` };
        }
      },
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductsWithLimitsSkipQuery,
  useSearchProductsByTermQuery,
  useGetAllCategoriesQuery,
  useGetCategoryByNameQuery,
} = productsApi;
