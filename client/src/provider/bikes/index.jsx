import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
export const BikesContext = createContext();

const BikesProvider = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [path, setPath] = useState("/bike?limit=100");
  const [filter, setFilter] = useState({});
  const [search, setSearch] = useState("");
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [wheelSize, setWheelSize] = useState(null);

  const onSuccess = (data) => {
    setBikes(data.bikes);
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

    performFetch({
      method: "GET",
    });

    return () => {
      cancelFetch();
    };
  }, [filter, search, setPath, path]);

  // handle filtering
  const onFilterChanges = (e, filterName) => {
    e.preventDefault();
    setSearch("");
    let newFilter = {};
    if (e.target.value !== filterName) {
      //Wheels size
      //wheels-size
      const formattedFilter = filterName
        .toLowerCase()
        .replaceAll(" ", "-")
        .trim();
      newFilter[formattedFilter] = e.target.value;
      //{wheels-size: "ddddddd394494494"}
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
  return (
    <BikesContext.Provider
      value={{
        bikes,
        isLoading,
        error,
        path,
        setFilter,
        setPath,
        setSearch,
        onFilterChanges,
        type,
        setType,
        category,
        setCategory,
        brand,
        setBrand,
        wheelSize,
        setWheelSize,
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
