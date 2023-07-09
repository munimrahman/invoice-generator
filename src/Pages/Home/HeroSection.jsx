/* eslint-disable no-unused-vars */
import React from "react";
import heroImg from "../../assets/print-image.png";

const HeroSection = () => {
  return (
    <div className="hero min-h-[88vh] hero-bg">
      <div className="hero-content">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:px-10">
          <div>
            <h1 className="text-4xl">InvoicePro</h1>
            <h1 className="text-4xl">Invoice Management System</h1>
            <p className="py-6">
              Invoice Pro provides you with a complete invoice admin template
              for your business. A fully responsive web admin template designed
              for easy administration, It saves you time and work. All code is
              written in the Codeigniter framework so it can be used across all
              platforms.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="flex justify-center items-center">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
