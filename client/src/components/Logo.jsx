import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BikesContext } from "../provider/BikesContext";
import { OptionsContext } from "../provider/OptionsContext";
import logo from "../assets/logo.png";

const Logo = () => {
  const { resetBikesStates } = useContext(BikesContext);
  const { resetOptionsStates } = useContext(OptionsContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    resetBikesStates("/bike?limit=all");
    resetOptionsStates();
    navigate("/");
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex items-start justify-center cursor-pointer "
    >
      <img className=" h-12 w-15 rotate-12 " src={logo} alt="logo" />
      <h1 className="relative -left-5 text-xl font-bold text-text italic m-0 mt-3">
        Bike
        <span className="text-primary">NG</span>o
      </h1>
    </div>
  );
};

export default Logo;
