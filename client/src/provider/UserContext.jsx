import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [localUser, setLocalUser] = useState(null);
  const { user, isLoading, error } = useLocalStorage();

  useEffect(() => setLocalUser({ ...user }), [user]);

  return (
    <UserContext.Provider value={{ localUser, setLocalUser, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
