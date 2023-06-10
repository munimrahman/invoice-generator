/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [active, setActive] = useState(true);

  const menuItems = (
    <>
      <li>
        <a className="ps-6 p-3 border-l-4 border-l-indigo-700 bg-[#DCDDDF]">
          Dashboard
        </a>
      </li>
      <li>
        <a className="ps-6 p-3">Invoices</a>
      </li>
      <li>
        <a className="ps-6 p-3">Create Invoice</a>
      </li>
      <li>
        <a className="ps-6 p-3">Products</a>
      </li>
      <li>
        <a className="ps-6 p-3">Customers</a>
      </li>
      <li>
        <a className="ps-6 p-3">Tasks</a>
      </li>
      <li>
        <a className="ps-6 p-3">Calendar</a>
      </li>
      <li>
        <a className="ps-6 p-3">Profile</a>
      </li>
      <li>
        <a className="ps-6 p-3">Logout</a>
      </li>
    </>
  );
  return (
    <>
      <div className="hidden md:flex">
        {/* sidebar */}
        <div
          className={`min-h-screen bg-base-200 fixed ${!active && "hidden"}`}
        >
          <div>
            <h1 className="text-3xl font-bold py-4 bg-indigo-700 text-white text-center">
              InvoicePro
            </h1>
          </div>
          <ul className="menu p-0 [&_li>*]:rounded-none w-64 text-base">
            {menuItems}
          </ul>
        </div>
        {/* main content */}
        <div className={`w-full ${active && "ml-64"}`}>
          {/* navbar */}
          <nav className="sticky top-0 border-b bg-base-100 w-full flex">
            <button className="px-2" onClick={() => setActive(!active)}>
              <i className="fas fa-bars text-2xl text-gray-600"></i>
            </button>

            <div className="navbar flex justify-between bg-base-100">
              {/* <div className="flex justify-between gap-2"> */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto focus:outline-none"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </nav>
          {/* navbar end */}
          {/* Page Content */}
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className=" flex justify-between px-2 items-center">
          <label htmlFor="my-drawer-2" className="drawer-button">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <div className="navbar flex justify-between bg-base-100">
            {/* <div className="flex justify-between gap-2"> */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-auto md:w-auto focus:outline-none"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="md:hidden drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            {/* Page Content Mobile*/}
            <div className="">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-0 w-64 h-full bg-base-200 text-base-content [&_li>*]:rounded-none">
              {/* Sidebar content here */}
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
