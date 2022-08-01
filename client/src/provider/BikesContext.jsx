import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
export const BikesContext = createContext();

const BikesProvider = ({ children }) => {
  const [bikeId, setBikeId] = useState(null);
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState("");
  const [path, setPath] = useState("/bike?limit=20");
  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState({});

  const onSuccess = (data) => {
    if (data.bikes) {
      setBikes(data.bikes);
    }
    if (data.bike) {
      setBike(data.bike);
    }
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    path,
    onSuccess
  );

  useEffect(() => {
    if (search !== "") {
      setPath(`/bike/search?search-value=${search}`);
    }
    if (Object.keys(filter).length > 0) {
      const newPath = `/bike?${JSON.stringify(filter)}`;
      setPath(
        newPath
          // eslint-disable-next-line quotes
          .replaceAll('":"', "=")
          .replaceAll(",", "&")
          // eslint-disable-next-line quotes
          .replaceAll('"', "")
          .replaceAll("{", "")
          .replaceAll("}", "")
      );
    }
    if (bikeId) {
      setPath(`/bike/${bikeId}`);
    }

    performFetch({
      method: "GET",
    });

    return () => {
      cancelFetch();
    };
  }, [filter, search, setPath, path, bikeId, setBikeId]);

  // handle filtering
  const onFilterChanges = (e, filterName) => {
    e.preventDefault();
    setSearch("");
    let newFilter = {};
    if (e.target.value !== filterName) {
      const formattedFilter = filterName
        .toLowerCase()
        .replaceAll(" ", "-")
        .trim();
      newFilter[formattedFilter] = e.target.value;
      setFilter({
        ...filter,
        ...newFilter,
      });
    } else if (e.target.value === filterName) {
      const formattedFilter = filterName
        .toLowerCase()
        .replaceAll(" ", "-")
        .trim();

      delete filter[formattedFilter];

      setFilter({ ...filter });
      const newPath = `/bike?${JSON.stringify(filter)}`;
      setPath(
        newPath
          // eslint-disable-next-line quotes
          .replaceAll('":"', "=")
          .replaceAll(",", "&")
          // eslint-disable-next-line quotes
          .replaceAll('"', "")
          .replaceAll("{", "")
          .replaceAll("}", "")
      );
    }
  };

  const resetBikesStates = (path) => {
    setBikeId(null);
    setFilter({});
    setSearch("");
    setPath(path);
    setBikes([]);
    setBike({});
  };
  return (
    <BikesContext.Provider
      value={{
        bikes,
        isLoading,
        error,
        path,
        bike,
        setBikeId,
        setFilter,
        setPath,
        setSearch,
        onFilterChanges,
        resetBikesStates,
      }}
    >
      {children}
    </BikesContext.Provider>
  );
};

BikesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BikesProvider;
