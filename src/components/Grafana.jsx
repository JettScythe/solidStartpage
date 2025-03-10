import { onMount } from "solid-js";
import "../css/Grafana.css";
import favicon from "../assets/metrics_favicon.ico"; // Adjust path if needed

const Grafana = () => {
  onMount(() => {
    // Remove any existing favicon links
    document.querySelectorAll("link[rel~='icon']").forEach((el) => el.remove());
    // Add the new favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = favicon; // Resolved to hashed path after build
    document.head.appendChild(link);
  });

  return (
    <iframe
      src="https://metrics.jettscythe.xyz/public-dashboards/0c3823b0103d4fa8a90d03f3f715742f"
      width="100%"
      height="100%"
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default Grafana;