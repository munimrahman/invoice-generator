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
    addCustomer: builder.mutation({
      query: (data) => ({
        url: "/customers",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getCustomers",
              undefined,
              (draft) => {
                draft.data.customers.push(res.data.data);
              }
            )
          );
        }
      },
    }),

    // edit customer
    editCustomer: builder.mutation({
      query: ({ id, data }) => ({
        url: `/customers/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getCustomers",
              undefined,
              (draft) => {
                const updateIndex = draft.data.customers.findIndex(
                  (v) => v._id == id
                );
                draft.data.customers[updateIndex] = res.data.data;
              }
            )
          );
        }
      },
    }),

    // delete customer
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getCustomers", undefined, (draft) => {
            const deletedTaskIndex = draft.data.customers.findIndex(
              (v) => v._id == id
            );
            draft.data.customers.splice(deletedTaskIndex, 1);
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
  useGetCustomersQuery,
  useGetSingleCustomerQuery,
  useAddCustomerMutation,
  useEditCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
