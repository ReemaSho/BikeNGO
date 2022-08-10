import React, { useState, useEffect } from "react";
import getCenter from "geolib/es/getCenter";
import MapGl from "./MapGl";
import Loading from "./Loading";

const MapContainer = ({ isLoading, error, bikes, userCenter }) => {
  const [viewport, setViewport] = useState({
    latitude: 52.379189,
    longitude: 4.899431,
    width: "100%",
    height: "100%",
    zoom: 7,
  });

  // center map fun
  function centerBikes(bikes) {
    const bikesCoordinates = bikes.map((bike) => ({
      longitude: bike.latLong[0],
      latitude: bike.latLong[1],
    }));
    return getCenter(bikesCoordinates);
  }

  useEffect(() => {
    if (!userCenter) {
      const centeredBikes = centerBikes(bikes);
      if (centeredBikes) {
        setViewport({
          ...viewport,
          width: "100%",
          height: "100%",
          zoom: 7,
          latitude: centeredBikes.latitude,
          longitude: centeredBikes.longitude,
        });
      }
    }
  }, [bikes]);
  if (isLoading) {
    return <Loading />;
  }
  if (error && !bikes.length) {
    return null;
  }
  return (
    <div>
      <MapGl
        bikes={bikes}
        boolean={userCenter}
        viewport={viewport}
        setViewport={setViewport}
      />
    </div>
  );
};

export default MapContainer;
