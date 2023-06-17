/* eslint-disable no-unused-vars */
import React from "react";

const CreateInvoice = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Create Invoice</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Create Invoice</h2>
      </div>
      <div className="bg-base-100 rounded py-5 px-16 mt-2">
        <div className="flex justify-between items-start">
          <h2 className="text-4xl text-primary">InvoicePro</h2>
          <div>
            <h2 className="text-2xl">INVOICE</h2>
            <p className="text-end">#INV001</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-lg mb-1">Bill To</h3>
            <input
              type="text"
              placeholder="Name"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Email"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Mobile"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Address"
              className="input input-sm input-bordered focus:outline-none w-full max-w-xs"
            />
          </div>
          <div>
            <div className="">
              <label className="text-sm text-gray-500" htmlFor="in-date">
                Date
              </label>
              <input
                type="date"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="text-sm text-gray-500" htmlFor="in-date">
                Due Date
              </label>
              <input
                type="date"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default CreateInvoice;
