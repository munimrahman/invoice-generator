/* eslint-disable no-unused-vars */
import React from "react";

const Invoices = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>

          <li>Invoices</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Invoices</h2>
        <button className="btn btn-primary">Create Invoice</button>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded p-2 mt-2">
        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Customer Mobile</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r, i) => (
              <tr key={r}>
                <th>{i + 1}</th>
                <td>INV00{r}</td>
                <td>Munim Rahman</td>
                <td>01548726934</td>
                <td>254</td>
                {r % 2 === 0 ? (
                  <td>
                    <span className="bg-green-100 font-bold p-1 rounded text-green-700 text-xs">
                      PAID
                    </span>
                  </td>
                ) : (
                  <td>
                    <span className="bg-red-100 font-bold p-1 rounded text-red-500 text-xs">
                      UNPAID
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

export default Invoices;
