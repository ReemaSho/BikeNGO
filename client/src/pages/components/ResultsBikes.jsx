import React, { useContext } from "react";
import MapContainer from "../../components/MapContainer";
import BikeCard from "../../components/BikeCard";
import Loading from "../../components/Loading";
import ErrorModal from "../../components/ErrorModal";
import { BikesContext } from "../../provider/BikesContext";
import { OptionsContext } from "../../provider/OptionsContext";
const ResultsBikes = () => {
  const { bikes, isLoading, error, resetBikesStates } =
    useContext(BikesContext);
  const { resetOptionsStates } = useContext(OptionsContext);

  if (isLoading) {
    return <Loading />;
  }
  const closeErrorModal = () => {
    resetBikesStates("/bike?limit=20");
    resetOptionsStates();
  };
  return (
    <>
      {error && (
        <ErrorModal
          message={"We're sorry. we were not able to find a match."}
          suggestion={"Try Another Search?"}
          closeModal={closeErrorModal}
          isOpen={true}
        />
      )}
      <div className="md:flex mt-10 z-0">
        <div className="w-full md:w-[55%] mx-auto ">
          <div className="my-10">
            <div className="w-full flex flex-wrap justify-center ">
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
    </>
  );
};
export default ResultsBikes;
