import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { BikesContext } from "../provider/BikesContext";

const AboutUs = () => {
  const { resetStates } = useContext(BikesContext);
  const navigate = useNavigate();
  useEffect(() => {
    resetStates("/bike?limit=20");
  }, []);

  return (
    <div classNameName="w-full h-max bg-gray-100">
      <div className="container mx-auto flex flex-col px-5 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={logo}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="relative -left-5 sm:text-4xl text-3xl mb-4 font-medium font-bold text-text italic m-0 mt-3">
            Bike
            <span className="text-primary">NG</span>o
          </h1>
          <p className="mb-8 leading-relaxed">
            BikeNGo is an App to help people selling their bikes and people who
            are looking to buy bikes. It shows bikes locations so they can
            choose the nearest suitable bike to them in the Netherlands.
          </p>
          <div className="flex">
            <Button text="Browse Bikes" onClick={() => navigate("/results")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
