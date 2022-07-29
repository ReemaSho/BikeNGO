import React, { useState, useContext, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import HomeVisionCard from "./components/HomeVisionCard";
import BikeCard from "../components/BikeCard";
import MapContainer from "../components/MapContainer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import visionsData from "../assets/visionsData.js";
import { BikesContext } from "../provider/BikesContext";
import "./home.css";

const Home = () => {
  const { setPath, error, isLoading, bikes, path } = useContext(BikesContext);
  const [featuredBikes, setFeaturedBikes] = useState([]);

  // featured bikes
  useEffect(() => {
    setPath("/bike?featured=true");
  }, []);
  useEffect(() => {
    if (path === "/bike?featured=true") {
      setFeaturedBikes(bikes);
    }
  }, [bikes]);

  // all bikes
  useEffect(() => {
    if (featuredBikes.length) {
      setPath("/bike?limit=all");
    }
  }, [featuredBikes]);

  return (
    <>
      {/* filter and search */}
      <Hero />
      <PageWrapper>
        {/* BikeEnGO vision */}
        <span className="info">
          {visionsData.map((card, index) => (
            <HomeVisionCard
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </span>

        {/* featured Bikes */}
        <div className="my-10 ">
          <h1 className="mx-4 my-6  not-prose my-2 text-2xl text-text  tracking-widest">
            Featured Bikes
          </h1>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 w-full">
            {isLoading && path === "/bike?featured=true" && <Loading />}

            {error && path === "/bike?featured=true" ? (
              <Error message={error} />
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
        {/* map */}
        <div className="flex flex-wrap justify-between my-2 ">
          <h2 className="not-prose my-2 text-2xl text-text tracking-widest">
            Bikes near your location{" "}
          </h2>
        </div>
        <MapContainer
          error={error}
          isLoading={isLoading}
          bikes={bikes}
          userCenter={true}
        />
      </PageWrapper>
    </>
  );
};

export default Home;
