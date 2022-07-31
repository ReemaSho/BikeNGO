import React, { useContext, useEffect } from "react";
import Select from "../components/Select";
import PageWrapper from "../components/PageWrapper";
import ResultsBikes from "./components/ResultsBikes";
import { BikesContext } from "../provider/BikesContext";
import "./results.css";

const Results = () => {
  const { onFilterChanges, type, brand, wheelSize, category, setPath, path } =
    useContext(BikesContext);
  useEffect(() => {
    if (path === "/bike?limit=all") {
      setPath("/bike?limit=20");
    }
  }, []);
  return (
    <PageWrapper>
      {/* filters and sort container */}
      <div className="flex">
        {/* filters container */}
        <div className="flex flex-wrap justify-between">
          <div className="mb-3 mr-2">
            <Select
              filterName={brand ? brand : "Brand"}
              path="/brand"
              onChange={onFilterChanges}
              // onClick={(e) => setBrand(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName={type ? type : "Type"}
              path="/type"
              onChange={onFilterChanges}
              // onClick={(e) => setType(e.target.options.value)}
            />
          </div>

          <div className="mb-3 mr-2">
            <Select
              filterName={category ? category : "Category"}
              path="/category"
              onChange={onFilterChanges}
              // onClick={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName={wheelSize ? wheelSize : "Wheels size"}
              path="/wheelSize"
              onChange={onFilterChanges}
              // onClick={(e) => setWheelSize(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName="Frame Height"
              path="/frameHeight"
              onChange={onFilterChanges}
            />
          </div>
        </div>
      </div>
      <ResultsBikes />
    </PageWrapper>
  );
};

export default Results;
