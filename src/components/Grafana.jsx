import "../css/Grafana.css"

const Grafana = () => {
    return (
        <div class="grafana">
            <iframe src="https://grafana.jettscythe.local/d/OTLC2jHWz/bitcoin-cash-bch?orgId=1&refresh=5s&from=now-2d&to=now&kiosk" allowfullscreen/>
        </div>
    )
}
export default Grafana;