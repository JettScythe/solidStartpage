import "../css/Grafana.css"
import {onMount} from "solid-js";

const Grafana = () => {
    onMount(() => {
    // Set the favicon when the component mounts
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/metrics_favicon.ico"; // Assumes file is in public/
  });
    return <iframe src="https://metrics.jettscythe.xyz/public-dashboards/0c3823b0103d4fa8a90d03f3f715742f" width="100%" height="100%" sandbox={"allow-scripts allow-same-origin"}/>;
}
export default Grafana;