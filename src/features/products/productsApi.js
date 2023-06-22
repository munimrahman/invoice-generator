/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    // add product
    // edit product
    // delete product
  }),
});

export const { useGetProductsQuery } = productsApi;
