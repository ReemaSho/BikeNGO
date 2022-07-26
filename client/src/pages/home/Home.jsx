import React from "react";
import HomeBikeCardWrapper from "../components/home/HomeBikeCardWrapper";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import HomeInfoCardWrapper from "../components/home/homeInfoCardWrapper/HomeInfoCardWrapper";
import HomeMapContainer from "../components/home/homeMapContainer/HomeMapContainer";
import Hero from "../../components/hero/Hero";
import UpdateBikeWithLatLong from "../../components/UpdateBikeWithLatLong";

const Home = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <UpdateBikeWithLatLong />
        <HomeInfoCardWrapper />
        <HomeBikeCardWrapper />
        <HomeMapContainer />
      </PageWrapper>
    </>
  );
};

export default Home;
