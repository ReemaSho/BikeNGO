import React, { useState, useContext, useEffect } from "react";
import HomeBikeCardWrapper from "../components/home/HomeBikeCardWrapper";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import HomeInfoCardWrapper from "../components/home/homeInfoCardWrapper/HomeInfoCardWrapper";
import Hero from "../../components/hero/Hero";
import MapContainer from "../../components/mapContainer/MapContainer";
import { BikesContext } from "../../provider/bikes";

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
      <Hero />
      <PageWrapper>
        <HomeInfoCardWrapper />
        <HomeBikeCardWrapper
          error={error}
          isLoading={isLoading}
          featuredBikes={featuredBikes}
          path={path}
        />
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
