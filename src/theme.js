import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
      dark: "#0e0e0e",
      light: "#434343",
    },
    secondary: {
      main: "##dba488",
      dark: "#99725f",
      light: "#e2b69f",
    },
    tertiary: {
      main: "##ede4e4",
      dark: "#a59f9f",
      light: "#f0e9e9",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
