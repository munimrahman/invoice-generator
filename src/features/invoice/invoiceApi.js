/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const invoicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: () => "/orders",
    }),

    getSingleInvoice: builder.query({
      query: (id) => `/orders/${id}`,
    }),

    // add invoice
    // edit invoice
    // delete invoice
  }),
});

export const { useGetInvoicesQuery, useGetSingleInvoiceQuery } = invoicesApi;
