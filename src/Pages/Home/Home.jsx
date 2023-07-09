/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./HeroSection";
import invo from "../../assets/invo-pro.png";
import invoices from "../../assets/invo-invoices.png";
import products from "../../assets/products.png";
import createProducts from "../../assets/add-products.png";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="my-5">
        <h2 className="text-4xl text-center">Online Invoice Generator</h2>
        <h2 className="text-xl text-center">
          Create & download invoices for free
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-5 mt-5">
          <img src={invo} alt="" className="rounded-md border" />
          <img src={invoices} alt="" className="rounded-md border" />
          <img src={products} alt="" className="rounded-md border" />
          <img src={createProducts} alt="" className="rounded-md border" />
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
