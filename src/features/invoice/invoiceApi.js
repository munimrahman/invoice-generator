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
    addInvoice: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData("getInvoices", undefined, (draft) => {
              draft.data.orders.push(res.data.data);
            })
          );
        }
      },
    }),

    // edit invoice
    editInvoice: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData("getInvoices", undefined, (draft) => {
              const updateIndex = draft.data.orders.findIndex(
                (v) => v._id == id
              );
              draft.data.orders[updateIndex] = res.data.data;
            })
          );
        }
      },
    }),

    // delete invoice
    deleteInvoice: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getInvoices", undefined, (draft) => {
            const deletedTaskIndex = draft.data.orders.findIndex(
              (v) => v._id == id
            );
            draft.data.orders.splice(deletedTaskIndex, 1);
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetSingleInvoiceQuery,
  useAddInvoiceMutation,
  useEditInvoiceMutation,
  useDeleteInvoiceMutation,
} = invoicesApi;
