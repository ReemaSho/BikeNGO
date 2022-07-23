import React, { useState, useContext } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Select from "../select/Select";
import { useNavigate } from "react-router-dom";
import { BikesContext } from "../../provider/bikes";
import { useEffect } from "react";
const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    onFilterChanges,
    setSearch,
    setBrand,
    setType,
    setWheelSize,
    setCategory,
  } = useContext(BikesContext);

  useEffect(() => {
    setSearch(inputValue);
  }, [inputValue]);

  const navigate = useNavigate();

  // trigger when the search input value changes
  const inputOnChange = (e) => {
    setInputValue(e);
  };
  // trigger when the search button is clicked
  const btnSearchOnClick = () => {
    navigate("/results");
  };

  return (
    <>
      {/* hero container */}
      <div className="flex flex-col h-72 lg:h-[38rem] bg-hero bg-no-repeat bg-center bg-cover font-bold lg:pt-10 ">
        {/* hero header container */}
        <h1 className="text-2xl lg:text-[2rem] xl:text-[3rem] m-auto mt-4 text-text">
          Marketplace made for bikes
        </h1>
        {/* hero paragraph container */}
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <p className=" text-xl lg:text-[2rem] text-text_secondary">
            The best bikes in Netherlands
          </p>
          <br />
          <p className="text-lg lg:text-[2rem] text-text_secondary text-center">
            You can buy or sell bikes here in a fast and easy way.
          </p>
        </div>
        {/* search container */}
        <div className="flex w-full justify-center items-center mt-12 m-auto lg:w-[40rem] space-x-2">
          <Input
            className="w-1/2 lg:w-[30rem] border-2 rounded-lg h-10 p-2"
            name={"search"}
            onChange={inputOnChange}
            placeHolder={"search bike..."}
          />

          <Button
            text={"Search"}
            onClick={btnSearchOnClick}
            classes={"h-9 lg:w-40 "}
          />
        </div>
        {/* filter container */}
        <div className="hidden lg:flex flex-col items-center mb-6">
          <div className="w-[32rem] shadow-lg p-2 rounded-xl bg-emerald-50 ">
            <div className="p-1 text-2xl text-text">
              <p>Search bikes</p>
            </div>
            <div className="p-1 text-xl text-text">
              <p>Within the largest marketplace in Netherlands</p>
            </div>
            <div className="grid grid-cols-2 gap-2 justify-items-center pt-2">
              <div>
                <Select
                  filterName="Category"
                  path="/category"
                  onChange={onFilterChanges}
                  onClick={(e) =>
                    setCategory(e.target.options[e.target.selectedIndex].value)
                  }
                />
              </div>
              <div>
                <Select
                  filterName="Type"
                  path="/type"
                  onChange={onFilterChanges}
                  onClick={(e) => {
                    setType(e.target.options[e.target.selectedIndex].value);
                  }}
                />
              </div>
              <div>
                <Select
                  filterName="Brand"
                  path="/brand"
                  onChange={onFilterChanges}
                  onClick={(e) =>
                    setBrand(e.target.options[e.target.selectedIndex].value)
                  }
                />
              </div>
              <div>
                <Select
                  filterName="Wheels size"
                  path="/wheelSize"
                  onChange={onFilterChanges}
                  onClick={(e) =>
                    setWheelSize(e.target.options[e.target.selectedIndex].value)
                  }
                />
              </div>
            </div>
            <div className="flex justify-center p-2 ">
              <Button
                text={"Search"}
                classes={"h-9 lg:w-64 mt-2"}
                fullSize={true}
                onClick={btnSearchOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
