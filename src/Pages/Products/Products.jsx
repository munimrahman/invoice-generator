/* eslint-disable no-unused-vars */
import React from "react";

const Products = () => {
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
        <button className="btn btn-primary">Add Product</button>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r, i) => (
              <tr key={r}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div>
                      <h3>UI / UX Designer Fulltime</h3>
                      <div className="text-sm opacity-50">
                        <span className="mr-2">Product ID: P001</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>250</td>
                <td>Sports</td>
                {r % 2 === 0 ? (
                  <td>
                    <span className="bg-green-100 font-bold p-1 rounded text-green-700 text-xs">
                      {r} In Stock
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
                  <span className="py-2 px-3 me-2 rounded bg-green-200 hover:cursor-pointer">
                    <i className="fas fa-edit text-green-800"></i>
                  </span>

                  <span className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer">
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
