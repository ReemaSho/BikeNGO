import React, { useContext } from "react";
import { BikesContext } from "../../../provider/bikes";
import ResultPageMap from "./ResultPageMap";
import BikeCardList from "./BikeCardList";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
const ResultPageWrapper = () => {
  const { bikes, isLoading, error } = useContext(BikesContext);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <div className="w-full md:mx-auto md:w-1/2">
          <Error
            message="We can not find any bike with the given options, please try later or
            refresh the page..."
          />
        </div>
      </div>
    );
  }
  return (
    <div className="md:flex mt-10 ">
      <div className="w-full md:w-[55%] mx-auto">
        <BikeCardList bikeResult={bikes} />
      </div>
      {/* map container */}
      <div className="flex-1 relative">
        <div className="sticky top-5 left-0">
          <ResultPageMap bikeResult={bikes} />
        </div>
      </div>
    </div>
  );
};
export default ResultPageWrapper;
