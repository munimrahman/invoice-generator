/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => "/customers",
    }),

    getSingleCustomer: builder.query({
      query: (id) => `/customers/${id}`,
    }),

    // add customer
    // edit customer
    // delete customer
  }),
});

export const { useGetCustomersQuery, useGetSingleCustomerQuery } = customersApi;
