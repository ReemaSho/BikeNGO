import React from "react";
import AppRouter from "../router";
import BikesProvider from "./bikes";
import UserProvider from "./user";
const AppProvider = () => {
  return (
    <UserProvider>
      <BikesProvider>
        <AppRouter />
      </BikesProvider>
    </UserProvider>
  );
};

export default AppProvider;
