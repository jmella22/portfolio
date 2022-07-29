import React from "react";
import { useReducer } from "react";

import { UiContext, uiReducer } from ".";

const UI_INITAL_STATE = {
  isMenuOpen: false,
  colorMode: "light",
};
export const UiProvider = ({ children, setColorModeTheme }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  const toogleSideMenu = () => {
    dispatch({ type: "SIDEMENU_TOOGLE_MENU" });
  };

  const toogleColorMode = (mode) => {
    setColorModeTheme(mode);
    dispatch({ type: "COLORMODE_CHANGE_MODE", payload: mode });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        //Method
        toogleSideMenu,
        toogleColorMode,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
