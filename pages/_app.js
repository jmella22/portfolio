//Style Global
import "../styles/globals.css";

//React
import { useEffect, useMemo, useState } from "react";

//Next

//Other library
import Cookies from "js-cookie";
//Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

//Personal
import { UiProvider } from "../contexts";
import { darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }) {
  // const cookieTheme = Cookies.get("theme") ? Cookies.get("theme") : "light";
  const [colorModeTheme, setColorModeTheme] = useState("light");

  useEffect(() => {
    const cookiesTheme = Cookies.get("theme") ? Cookies.get("theme") : "light";
    setColorModeTheme(cookiesTheme);
  }, []);

  const theme = useMemo(
    () => (colorModeTheme === "light" ? lightTheme : darkTheme),
    [colorModeTheme]
  );

  return (
    <UiProvider setColorModeTheme={setColorModeTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  );
}

export default MyApp;
