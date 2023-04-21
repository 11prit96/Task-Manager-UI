import "@/styles/globals.css";
import theme from "@/src/theme";
import { ThemeProvider } from "@mui/material";
import Context from "@/store/context";

export default function App({ Component, pageProps }) {
  
  return (
    <Context>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Context>
  );
}
