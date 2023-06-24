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
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              draft.data.products.push(res.data.data);
            })
          );
        }
      },
    }),

    // edit product
    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res.data.data._id) {
          dispatch(
            apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
              const updateIndex = draft.data.products.findIndex(
                (v) => v._id == id
              );
              draft.data.products[updateIndex] = res.data.data;
            })
          );
        }
      },
    }),

    // delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
            const deletedTaskIndex = draft.data.products.findIndex(
              (v) => v._id == id
            );
            draft.data.products.splice(deletedTaskIndex, 1);
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
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productsApi;
