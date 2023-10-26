import { Anchor, Divider } from "@hope-ui/solid";
import "../css/Card.css";

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <p>Social</p>
            <Divider color={"$primary10"} />
            <Anchor href="https://x.com" class="row" external>
              X
            </Anchor>
            <Anchor href="https://memo.cash" class="row" external>
              Memo
            </Anchor>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <p>Dev</p>
            <Divider color={"$accent10"} />
            <Anchor href="https://github.com" class="row" external>
              Github
            </Anchor>
            <Anchor href="https://gitlab.com" class="row" external>
              Gitlab
            </Anchor>
            <Anchor href="https://gist.github.com" class="row" external>
              Gist
            </Anchor>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <p>Media</p>
            <Divider color={"$warning10"} />
            <Anchor href="https://jellyfin.jettscythe.xyz" class="row" external>
              Jellyfin
            </Anchor>
            <Anchor href="https://youtube.com" class="row" external>
              Youtube
            </Anchor>
            <Anchor href="https://seerr.jettscythe.local" class="row" external>
              Seerr
            </Anchor>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <p>Admin</p>
            <Divider color={"$danger10"} />
            <Anchor href="http://192.168.88.228/admin" class="row" external>
              Pi-hole (main)
            </Anchor>
            <Anchor href="https://192.168.88.238:8006" class="row" external>
              Proxmox
            </Anchor>
            <Anchor href="http://192.168.88.252" class="row" external>
              Asus
            </Anchor>
            <Anchor href="https://192.168.88.237" class="row" external>
              IDRAC
            </Anchor>
            <Anchor
                href="https://torrents.jettscythe.local"
                class="row"
                external
            >
              Torrents
            </Anchor>
            <Anchor
                href="https://metrics.jettscythe.xyz"
                class="row"
                external
            >
              grafana
            </Anchor>
            <Anchor href="https://sonarr.jettscythe.local" class="row" external>
              sonarr
            </Anchor>
            <Anchor href="https://radarr.jettscythe.local" class="row" external>
              radarr
            </Anchor>
            <Anchor href="https://lidarr.jettscythe.local" class="row" external>
              lidarr
            </Anchor>
            <Anchor
                href="https://prowlarr.jettscythe.local"
                class="row"
                external
            >
              prowlarr
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
