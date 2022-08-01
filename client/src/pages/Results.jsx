import React, { useContext, useEffect } from "react";
import Select from "../components/Select";
import PageWrapper from "../components/PageWrapper";
import ResultsBikes from "./components/ResultsBikes";
import { BikesContext } from "../provider/BikesContext";
import { OptionsContext } from "../provider/OptionsContext";
import "./results.css";

const Results = () => {
  const { onFilterChanges, setPath, path } = useContext(BikesContext);
  const {
    type,
    brand,
    wheelSize,
    category,
    frameHeight,
    changeFirstOptionText,
  } = useContext(OptionsContext);

  useEffect(() => {
    if (path === "/bike?limit=all") {
      setPath("/bike?limit=20");
    }
  }, []);

  const onFilterOptionChanges = (e, optionName) => {
    changeFirstOptionText(e, optionName);
    onFilterChanges(e, optionName);
  };
  return (
    <PageWrapper>
      {/* filters and sort container */}
      <div className="flex">
        {/* filters container */}
        <div className="flex flex-wrap justify-around">
          <div className="mb-3 mr-2">
            <Select
              filterName={"Brand"}
              path="/brand"
              value={brand}
              onChange={onFilterOptionChanges}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName={"Type"}
              path="/type"
              value={type}
              onChange={onFilterOptionChanges}
            />
          </div>

          <div className="mb-3 mr-2">
            <Select
              filterName={"Category"}
              path="/category"
              value={category}
              onChange={onFilterOptionChanges}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName={"Wheels size"}
              path="/wheelSize"
              value={wheelSize}
              onChange={onFilterOptionChanges}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName="Frame Height"
              path="/frameHeight"
              value={frameHeight}
              onChange={onFilterOptionChanges}
            />
          </div>
        </div>
      </div>
      <ResultsBikes />
    </PageWrapper>
  );
};

export default Results;
