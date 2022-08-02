//React
import React, { useEffect, useReducer } from "react";

// //Next

// //Other Library
import Cookies from "js-cookie";

// //Material Ui

// //Other
import { UiContext, uiReducer } from ".";

const UI_INITAL_STATE = {
  isMenuOpen: false,
  colorMode: "light",
};
export const UiProvider = ({ children, setColorModeTheme }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") ? Cookies.get("theme") : "light";
    dispatch({ type: "COLORMODE_COOKIES_LOADING", payload: cookieTheme });
  }, []);

  const toogleSideMenu = () => {
    dispatch({ type: "SIDEMENU_TOOGLE_MENU" });
  };

  const toogleColorMode = (mode) => {
    setColorModeTheme(mode);
    Cookies.set("theme", mode);
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
