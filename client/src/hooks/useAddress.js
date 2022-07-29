import { useState, useEffect } from "react";

import axios from "axios";
const useAddress = (addressObject) => {
  const controller = new AbortController();
  const [latLong, setLatLong] = useState([]);

  useEffect(() => {
    if (addressObject.postcode) {
      getLatLong(addressObject);
    }

    return () => {
      controller.abort();
    };
  }, [addressObject]);

  const getLatLong = async (address) => {
    try {
      const { street, city, houseNumber, postcode, suffix } = address;
      const searchKey = [street, city, houseNumber, postcode, suffix]
        .filter(Boolean)
        .join()
        .replaceAll(" ", "&");

      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchKey}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
        { signal: controller.signal }
      );

      setLatLong(data.features[0].center);
    } catch (error) {
      throw new Error(error);
    }
  };

  return { latLong };
};

export default useAddress;
