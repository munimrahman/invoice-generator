/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const initialState = {
    name: "",
    productCode: "",
    category: "",
    price: "",
    photo: "",
    stock: "",
  };

  const [productData, setProductData] = useState(initialState);

  const handleChange = (e) => {
    const data = productData;
    data[e.target.name] = e.target.value;
    setProductData({ ...data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

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
        <form onSubmit={handleSubmit}>
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
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
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
                  name="productCode"
                  value={productData.productCode}
                  onChange={handleChange}
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
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
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
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
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
                  name="photo"
                  value={productData.photo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Stock:</span>
                </label>
                <input
                  type="text"
                  placeholder="13"
                  className="input input-bordered focus:outline-none w-full"
                  name="stock"
                  value={productData.stock}
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

export default AddProduct;
