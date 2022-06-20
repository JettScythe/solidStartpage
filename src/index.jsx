/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider} from '@hope-ui/solid'
import "./css/index.css";
import App from "./App";

const config = {
    initialColorMode: "dark",
  }


render(
  () => (
    <HopeProvider config={config} >
      <App />
    </HopeProvider>
  ),
  document.getElementById("root")
);
