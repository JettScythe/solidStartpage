/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider} from '@hope-ui/solid'
import { SearchProvider } from "./helpers/SearchProvider";
import "./css/index.css";
import App from "./App";

const config = {
    initialColorMode: "dark",
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
