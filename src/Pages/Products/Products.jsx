/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../features/products/productsApi";

const Products = () => {
  const { data: { data: { count, products = [] } = {} } = {} } =
    useGetProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  // const { data: { count, products } = {} } = productsData || {};

  console.log(count, products);

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>

          <li>Products</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Products</h2>
        <Link to={"/dashboard/add-product"} className="btn btn-primary">
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded p-2 mt-2">
        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div>
                      <h3>{product.name}</h3>
                      <div className="text-sm opacity-50">
                        <span className="mr-2">
                          Product ID: {product.productCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                {product.stock > 0 ? (
                  <td>
                    <span className="bg-green-100 font-bold p-1 rounded text-green-700 text-xs">
                      {product.stock} In Stock
                    </span>
                  </td>
                ) : (
                  <td>
                    <span className="bg-red-100 font-bold p-1 rounded text-red-500 text-xs">
                      Out Of Stock
                    </span>
                  </td>
                )}

                <th className="text-center">
                  <Link
                    to={`/dashboard/edit-product/${product._id}`}
                    className="py-2 px-3 me-2 rounded bg-green-200 hover:cursor-pointer"
                  >
                    <i className="fas fa-edit text-green-800"></i>
                  </Link>

                  <span
                    onClick={() => deleteProduct(product._id)}
                    className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer"
                  >
                    <i className="fas fa-trash-alt text-red-600" />
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
