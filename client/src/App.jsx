import React from "react";
import BikesProvider from "./provider/BikesContext";
import UserProvider from "./provider/UserContext";
import AppRouter from "./AppRouter";
const App = () => {
  return (
    <UserProvider>
      <BikesProvider>
        <AppRouter />
      </BikesProvider>
    </UserProvider>
  );
};

export default App;
