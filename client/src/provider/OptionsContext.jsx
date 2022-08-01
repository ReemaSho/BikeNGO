import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const OptionsContext = createContext();

const OptionsProvider = ({ children }) => {
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [wheelSize, setWheelSize] = useState(null);
  const [frameHeight, setFrameHeight] = useState(null);

  const changeFirstOptionText = (e, optionName) => {
    // category
    if (
      optionName === "Category" &&
      e.target.options[e.target.selectedIndex].text != "Category"
    ) {
      setCategory(e.target.options[e.target.selectedIndex].text);
    } else if (optionName === "Category") {
      setCategory(null);
    }
    //type
    if (
      optionName === "Type" &&
      e.target.options[e.target.selectedIndex].text != "Type"
    ) {
      setType(e.target.options[e.target.selectedIndex].text);
    } else if (optionName === "Type") {
      setType(null);
    }
    //brand
    if (
      optionName === "Brand" &&
      e.target.options[e.target.selectedIndex].text != "Brand"
    ) {
      setBrand(e.target.options[e.target.selectedIndex].text);
    } else if (optionName === "Brand") {
      setBrand(null);
    }
    // wheel size
    if (
      optionName === "Wheels size" &&
      e.target.options[e.target.selectedIndex].text != "Wheels size"
    ) {
      setWheelSize(e.target.options[e.target.selectedIndex].text);
    } else if (optionName === "Wheels size") {
      setWheelSize(null);
    }
    // frame height
    if (
      optionName === "Frame Height" &&
      e.target.options[e.target.selectedIndex].text != "Frame Height"
    ) {
      setFrameHeight(e.target.options[e.target.selectedIndex].text);
    } else if (optionName === "Frame Height") {
      setFrameHeight(null);
    }
  };

  const resetOptionsStates = () => {
    setCategory(null);
    setType(null);
    setBrand(null);
    setWheelSize(null);
    setFrameHeight(null);
  };
  return (
    <OptionsContext.Provider
      value={{
        type,
        category,
        brand,
        wheelSize,
        frameHeight,
        changeFirstOptionText,
        resetOptionsStates,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

OptionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OptionsProvider;
