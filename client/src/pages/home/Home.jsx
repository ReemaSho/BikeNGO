import React from "react";
import HomeBikeCardWrapper from "../components/home/HomeBikeCardWrapper";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import HomeInfoCardWrapper from "../components/home/homeInfoCardWrapper/HomeInfoCardWrapper";
import HomeMapContainer from "../components/home/homeMapContainer/HomeMapContainer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <HomeInfoCardWrapper />
        <HomeBikeCardWrapper />
        <HomeMapContainer />
      </PageWrapper>
    </>
  );
};

export default Home;
