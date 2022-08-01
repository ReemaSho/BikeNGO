import React from "react";
import UserProvider from "./provider/UserContext";
import BikesProvider from "./provider/BikesContext";
import OptionsProvider from "./provider/OptionsContext";
import AppRouter from "./AppRouter";
const App = () => {
  return (
    <UserProvider>
      <BikesProvider>
        <OptionsProvider>
          <AppRouter />
        </OptionsProvider>
      </BikesProvider>
    </UserProvider>
  );
};

export default App;
