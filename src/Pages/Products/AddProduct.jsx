/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/dashboard/home"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/dashboard/products"}>Products</Link>
          </li>
          <li>Add Product</li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-3xl underline">Add Product</h2>
      </div>
      <div className="bg-base-100 rounded p-5 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-6">
            <div className="form-control">
              <label className="label">
                <span className="">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Cricket Bat"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Product Code:</span>
              </label>
              <input
                type="text"
                placeholder="P001"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Category:</span>
              </label>
              <input
                type="text"
                placeholder="Cricket"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
          </div>
          {/* second col */}
          <div className="col-span-6">
            <div className="form-control">
              <label className="label">
                <span className="">Price:</span>
              </label>
              <input
                type="text"
                placeholder="250"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Product Photo URL:</span>
              </label>
              <input
                type="text"
                placeholder="https://www.web.com/store.photo"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Store Logo:</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered focus:outline-none w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="">Website:</span>
              </label>
              <input
                type="text"
                placeholder="www.website.com"
                className="input input-bordered focus:outline-none w-full"
              />
            </div>
          </div>
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-accent">Back</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
