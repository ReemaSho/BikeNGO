import React, { useContext } from "react";
import MapContainer from "../../components/MapContainer";
import BikeCard from "../../components/BikeCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { BikesContext } from "../../provider/BikesContext";
const ResultsBikes = () => {
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
        <div className="my-10">
          <div className="w-full flex flex-wrap justify-center">
            {bikes.map((bike) => {
              return (
                <BikeCard
                  email={bike.email}
                  img={bike.photos[0]}
                  title={bike.title}
                  brand={bike.brand.value}
                  type={bike.type.value}
                  price={bike.price}
                  key={bike._id}
                  id={bike._id}
                  sellFaster={bike.sellFaster}
                  className="m-2  rounded-md w-full  min-w-96 md:w-[19rem] max-w-sm 2xl:w-96  border-[1px] border-tertiary cursor-pointer shadow-lg hover:shadow-md transform transition-all duration-200 ease-in-out"
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* map container */}
      <div className="flex-1 relative">
        <div className="sticky top-5 left-0">
          <MapContainer
            error={error}
            isLoading={isLoading}
            bikes={bikes}
            userCenter={false}
          />
        </div>
      </div>
    </div>
  );
};
export default ResultsBikes;
