/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>

          <li>Profile</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">My Profile</h2>
        <Link to={"/dashboard/update-profile"} className="btn btn-primary">
          Update Profile
        </Link>
      </div>
      <div className="bg-base-100 rounded p-5 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Name:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">Sakib Al Hasan</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Email:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">munim@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Mobile:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">015426584158</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Facebook Profile:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">fb/something</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Store Name:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">Sports Zone</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Store FB Page:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">fb/store</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Store Logo:</h4>
          </div>
          <div className="md:col-span-9">
            <figure>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPqSURBVHgB7dy/TxNhHMfxz1N+XAdjndpJcBEXyyQu/FgMDip/gMrm6N9kXEAHjYvAYlxEF9gKC7BYSIztRBMjBco9Pt/WJ9ZEgefu+d49ab7vBEKaNvRePL27Ps8V9fXbTw3Ja8P0rXRlBJKfWj9OUYDkPUFlSFAZElSGBJUhQWVIUBkSVIYElSFBZUhQGRJUhgSVIUFlSFAZElSGBJUhQWVIUBkSVIaGEVj7dWB7S2N/3yyiHfYWessVhUoZuD2pMDaO4FO0RB3CamqrBaytGMz6+Svm1arC9JxCqYQgC2Y1lUBfL8UXglJbZhTTfekxoZY7qgV1QUrymCzLFTUNTsiwuaE2G+lRQoXNBbULuuwHI0TYzFEtaLsNb1nYZiOMa+0yReUAtRHsq2UdBGxmqJygtuN2GLCZoGYBagsBlh01S1Bb3rCsqNs1jZcvsgW15QnLhkqgqyv57tss7N5uts+DBZU2Im9QG8G+e6uxVcvu+XhHpX3oWiCg/dFzygrWK2oeByWXsoL1NkltQUtHMaqIUYRGyXy1oNAwf7uGUubn/Gca7auoaia8ufKC2jJH2IOlEzxvdxDhPyPB3NwwwJsYQU3lu+DADZt+5r8Ro7PURtSOL/2QuhmxK2o095F7b17hzpRf2NQz/6rWwdDSkRMoNW52D4v62Owe3B7nu48fNL6s+9/HJkc1I7Tw3hyR2smeFO1vQ4D9vO4fNhlqS2PoTfpD/KDCJkJVGycG1g/EIMK6o5pRWtg4hc8I9pmBLQ8IrDOqqp+Bo+LvETsIsO6oOx1wNSiw7i//Q94NHgRY95Ha5N/YkGCTzBUEe9UfwT6tnqFcRm6VK8DELfd3XO6oRb6JiP705AhGFyI8WSzkAkug9LujCM45o+oK/+DWs6OIF3pbExV7Gzc2hsxKA0q5o5Z5Ubugc6N/3Uawj81GVqtgj66BTQNKuQvd4pu2+xdofw8WeGEJ9OEjlQqUch+p40PdL99dBGrjgrWgPkr0WiYAn10W1OYb1icolQyVRuuUn0vaXUFtvmB9g1KJjzrx/ah72pOmpKA2gk0zc88BSqU66tBpT8Hs1NWm+6yVno8Q300/2mlJhM4OXN9STs8qzMyGukaF3rJK4dPl5lj12FB3lMPz+S5dSrm6EuOgfv79ro8DMzMFto8O0RqV14/80AyW2jVTg9/P/swRmHdg+qoZETfMfnhimOXMoT/C3dvRaDR19+di1DvPrZQVbk4olK6BNe+okvxXSrYElSFBZUhQGRJUhgSVIUFlSFAZElSGBJUhQWVIUBkSVIYElSFBZUhQGRJUhgSVIUFlSFAZ6q7702KV5K9fFevyO6gNQ5cAAAAASUVORK5CYII="
                alt=""
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5  py-2">
          <div className="md:col-span-3">
            <h4 className="font-bold">Website:</h4>
          </div>
          <div className="md:col-span-9">
            <p className="">http://localhost:3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
