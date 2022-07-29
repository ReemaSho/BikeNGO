import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
export const UserContext = createContext();
import useFetch from "../hooks/useFetch";
const UserProvider = ({ children }) => {
  const { authenticatedUser } = useAuthenticatedUser();
  const [user, setUser] = useState(null);
  const [path, setPath] = useState("");

  useEffect(() => setUser(authenticatedUser), [authenticatedUser]);

  const onSuccess = (data) => {
    setUser({
      ...data.user,
    });
    if (data.accessToken) {
      localStorage.setItem("user", data.accessToken);
    }
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    path,
    onSuccess
  );

  useEffect(() => {
    return cancelFetch;
  }, []);

  const submitUser = (user) => {
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ user }),
    });
  };
  return (
    <UserContext.Provider
      value={{ user, isLoading, error, setUser, setPath, submitUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
