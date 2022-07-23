import React, { useEffect, useContext } from "react";

import BikeCard from "../../../components/bikeCard/BikeCard";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import { BikesContext } from "../../../provider/bikes";
import { useState } from "react";

const HomeBikeCardWrapper = () => {
  const { setPath, error, isLoading, bikes, path } = useContext(BikesContext);
  const [featuredBikes, setFeaturedBikes] = useState([]);
  useEffect(() => {
    setPath("/bike?featured=true");
  }, []);
  useEffect(() => {
    if (path === "/bike?featured=true") {
      setFeaturedBikes(bikes);
    }
  }, [bikes]);
  return (
    <div className="my-10 ">
      <h1 className="mx-4 my-6  not-prose my-2 text-2xl text-text  tracking-widest">
        Featured Bikes
      </h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 w-full">
        {/* foreach */}
        {error && path === "/bike?featured=true" ? (
          <Error message={error} />
        ) : null}
        {isLoading && path === "/bike?featured=true" ? (
          <Loading />
        ) : (
          featuredBikes.map((bike) => (
            <BikeCard
              key={bike._id}
              id={bike._id}
              img={bike.photos[0]}
              title={bike.title}
              type={bike.type.value}
              price={bike.price}
              sellFaster={bike.sellFaster}
              brand={bike.brand.value}
              email={bike.user.email}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeBikeCardWrapper;
