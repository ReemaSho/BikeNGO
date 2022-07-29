import React, { useContext } from "react";
import { BikesContext } from "../provider/BikesContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  const { resetStates } = useContext(BikesContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    resetStates("/bike?limit=all");
    navigate("/");
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex items-start justify-center cursor-pointer"
    >
      <img className="h-14 w-15 rotate-12" src={logo} alt="logo" />
      <h1 className="relative -left-5 text-xl font-bold text-text italic m-0 mt-3">
        Bike
        <span className="text-primary">NG</span>o
      </h1>
    </div>
  );
};

export default Logo;
