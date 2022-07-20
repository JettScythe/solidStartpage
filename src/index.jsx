/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider} from '@hope-ui/solid'
import { SearchProvider } from "./helpers/SearchProvider";
import "./css/index.css";
import App from "./App";

const config = {
    initialColorMode: "dark",
    lightTheme: {
      colors: {
        text: "#000",
        card: "rgba(255, 255, 255, 0.56)",
        search: "#1D1D1D", 
      }
    },
    darkTheme: {
      colors: {
        text: "#fff",
        card: "rgba(0, 0, 0, 0.56)",
        search: "#340c3b",
      }
    },
  }


render(
  () => (
    <HopeProvider config={config} >
      <SearchProvider state={"searx"}>
        <App />
      </SearchProvider>
    </HopeProvider>
  ),
  document.getElementById("root")
);
