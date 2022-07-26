import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useAllBikesAddresses from "../hooks/useAllBikesAddresses";
const UpdateBikeWithLatLong = () => {
  const { bikes } = useAllBikesAddresses();
  const [bike, setBike] = useState({ path: "", body: {} });

  const onSuccess = () => {
    alert("success");
  };
  useEffect(() => {
    if (bikes.length) {
      bikes.map((bike) => {
        setTimeout(() => {
          setBike({
            path: `/bike/${bike._id}`,
            body: {
              bike: { latLong: [...bike.latLong] },
            },
          });
        }, [5000]);
      });
    }
  }, [bikes]);
  useEffect(() => {
    if (bike.path !== "") {
      performFetch({
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...bike.body }),
      });
    }
  }, [bike]);
  const { performFetch, isLoading, error } = useFetch(bike.path, onSuccess);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return <div>updateBikeWithLatLong</div>;
};

export default UpdateBikeWithLatLong;
