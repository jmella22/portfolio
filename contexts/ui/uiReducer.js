export const uiReducer = (state, action) => {
  switch (action.type) {
    case "SIDEMENU_TOOGLE_MENU":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case "COLORMODE_CHANGE_MODE":
      return {
        ...state,
        colorMode: action.payload,
      };

    case "COLORMODE_COOKIES_LOADING":
      return {
        ...state,
        colorMode: action.payload,
      };

    default:
      return { ...state };
  }
};
