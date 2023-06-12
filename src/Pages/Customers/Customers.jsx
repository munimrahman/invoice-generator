/* eslint-disable no-unused-vars */
import React from "react";

const Customers = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>

          <li>Customers</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Customers</h2>
        <button className="btn btn-primary">Add Customer</button>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded p-2 mt-2">
        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r, i) => (
              <tr key={r}>
                <th>{i + 1}</th>
                <td>
                  <h3 className="font-bold">Munim Rahman</h3>
                </td>
                <td>01547845269</td>
                <td>munim@gmail.com</td>
                <td>Banaripara, Barishal</td>
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

export default Customers;
