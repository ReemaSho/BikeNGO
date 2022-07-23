import React from "react";
import BikeCard from "../../../components/bikeCard/BikeCard";
import PropTypes from "prop-types";
const BikeCardList = ({ bikeResult }) => {
  return (
    <div className="my-10">
      <div className="w-full flex flex-wrap justify-center">
        {bikeResult.map((bike) => {
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
  );
};
BikeCardList.propTypes = {
  bikeResult: PropTypes.array.isRequired,
};
export default BikeCardList;
