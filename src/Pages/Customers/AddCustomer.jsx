/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCustomer = () => {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    address: "",
  };

  const [customerData, setCustomerData] = useState(initialState);

  const handleChange = (e) => {
    const data = customerData;
    data[e.target.name] = e.target.value;
    setCustomerData({ ...data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customerData);
    setCustomerData(initialState);
  };

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/dashboard/home"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/dashboard/customers"}>Customers</Link>
          </li>
          <li>Add Customer</li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-3xl underline">Add Customer</h2>
      </div>
      <div className="bg-base-100 rounded p-5 mt-2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="col-span-6">
              <div className="form-control">
                <label className="label">
                  <span className="">Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Jhon Snow"
                  className="input input-bordered focus:outline-none w-full"
                  value={customerData.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Email:</span>
                </label>
                <input
                  type="text"
                  placeholder="jhon@gmail.com"
                  className="input input-bordered focus:outline-none w-full"
                  value={customerData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* second col */}
            <div className="col-span-6">
              <div className="form-control">
                <label className="label">
                  <span className="">Mobile:</span>
                </label>
                <input
                  type="text"
                  placeholder="01926451457"
                  className="input input-bordered focus:outline-none w-full"
                  value={customerData.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Address:</span>
                </label>
                <input
                  type="text"
                  placeholder="Mirpur, Dhaka"
                  className="input input-bordered focus:outline-none w-full"
                  value={customerData.address}
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button className="btn btn-accent">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
