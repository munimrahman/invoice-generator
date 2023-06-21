/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    fbProfile: "",
    storeName: "",
    storeFbPage: "",
    storeLogo: "",
    website: "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const data = userData;
    data[e.target.name] = e.target.value;
    setUserData({ ...data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/dashboard/home"}>Dashboard</Link>
          </li>

          <li>
            <Link to={"/dashboard/profile"}>Profile</Link>
          </li>
          <li>Update Profile</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">My Profile</h2>
        <button className="btn btn-primary">Update Profile</button>
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
                  name="name"
                  placeholder="Jhon Snow"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Email:</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="jhon@email.com"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Phone:</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="01XXXXXXXXX"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">FB Profile:</span>
                </label>
                <input
                  type="text"
                  name="fbProfile"
                  placeholder="https://www.fb.com/jhon"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.fbProfile}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* second col */}
            <div className="col-span-6">
              <div className="form-control">
                <label className="label">
                  <span className="">Store Name:</span>
                </label>
                <input
                  type="text"
                  name="storeName"
                  placeholder="Sports Zone"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.storeName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Store FB Page:</span>
                </label>
                <input
                  type="text"
                  name="storeFbPage"
                  placeholder="https://www.fb.com/store"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.storeFbPage}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Store Logo:</span>
                </label>
                <input
                  type="text"
                  name="storeLogo"
                  placeholder="https://www.fb.com/store.photo"
                  className="file-input file-input-bordered focus:outline-none w-full"
                  value={userData.storeLogo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="">Website:</span>
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="www.website.com"
                  className="input input-bordered focus:outline-none w-full"
                  value={userData.website}
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

export default UpdateProfile;
