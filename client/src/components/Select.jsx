import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import PropTypes from "prop-types";

const Select = ({ filterName, path, onChange, value }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptionBg, setSelectedOptionBg] = useState(
    "bg-green-200  text-text"
  );
  useEffect(() => {
    if (value) {
      setSelectedOptionBg(
        "bg-gradient-to-r from-orange-500 to-yellow-300 text-white"
      );
    } else {
      setSelectedOptionBg("bg-green-200  text-text");
    }
  }, [value]);

  const onSuccess = (data) => {
    setOptions(data.result);
  };
  const { performFetch, cancelFetch } = useFetch(path, onSuccess);

  useEffect(() => {
    performFetch({
      method: "GET",
    });
    return cancelFetch;
  }, []);

  return (
    <>
      <div
        className={`${selectedOptionBg}  flex justify-center place-content-around rounded-lg w-30 sm:w-56 text-xs sm:text-sm h-8 shadow-md p-1`}
      >
        <select
          onChange={(e) => onChange(e, filterName)}
          className=" w-28 rounded-xl bg-transparent font-bold focus:outline-none cursor-pointer"
        >
          <option value={filterName}>{value ? value : filterName}</option>
          {options.map((option) => {
            return (
              <option value={option._id} key={option._id}>
                {option.value}
              </option>
            );
          })}
          {value !== filterName && value && (
            <option value={filterName}>{filterName}</option>
          )}
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  filterName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Select;
