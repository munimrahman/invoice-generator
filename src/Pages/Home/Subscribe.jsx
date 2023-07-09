/* eslint-disable no-unused-vars */
import React from "react";

const Subscribe = () => {
  return (
    <div className="">
      <h2 className="text-4xl text-center">Subscribe Our News Latter</h2>
      <h2 className="text-xl text-center">
        Discover a customer segmentation platform where everything is easy to
        do.
      </h2>
      <div className="text-center my-8">
        <input
          type="text"
          placeholder="Type your email here"
          className="input input-bordered w-full max-w-lg"
        />
        <br />
        <button className="btn btn-primary my-2">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
