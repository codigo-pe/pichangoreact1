import React from "react";
export const AppContext = React.createContext({
  user: {},
  toggleUser: () => {}
});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
