/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useGetInvoicesQuery } from "../../features/invoice/invoiceApi";

const Invoices = () => {
  const {
    data: { data: { count, orders = [] } = {} } = {},
    isSuccess,
    isError,
  } = useGetInvoicesQuery();

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
        <Link to={"/dashboard/create-invoice"} className="btn btn-primary">
          Create Invoice
        </Link>
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
            {orders?.map(
              (
                {
                  _id,
                  invoiceNumber,
                  customer: { name },
                  total,
                  paymentStatus,
                },
                i
              ) => (
                <tr key={_id}>
                  <th>{i + 1}</th>
                  <td>INV00{invoiceNumber}</td>
                  <td>{name}</td>
                  <td>01548726934</td>
                  <td>{total}</td>
                  {paymentStatus === "paid" ? (
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
                    <Link
                      to={`/dashboard/invoices/${_id}`}
                      className="py-2 px-3 me-2 rounded bg-green-200 hover:cursor-pointer"
                    >
                      <i className="fas fa-eye text-green-800"></i>
                    </Link>

                    <span className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer">
                      <i className="fas fa-trash-alt text-red-600" />
                    </span>
                  </th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
