//Style Global
import "../styles/globals.css";

//React
import { useMemo, useState } from "react";

//Next

//Other library

//Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

//Personal
import { UiProvider } from "../contexts";
import { darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }) {
  const [colorModeTheme, setColorModeTheme] = useState("light");

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
