import {Anchor, Divider} from "@hope-ui/solid";
import "../css/Card.css";

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <p>Dev</p>
            <Divider color={"$accent10"}/>
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
        <div className="column">
          <div className="card">
            <p>Admin</p>
            <Divider color={"$danger10"}/>
            <Anchor href="https://proxmox.jettscythe.home.arpa" class="row" external>
              Proxmox
            </Anchor>
            <Anchor href="https://asus.jettscythe.home.arpa" class="row" external>
              Asus
            </Anchor>
            <Anchor href="https://idrac.jettscythe.home.arpa" class="row" external>
              IDRAC
            </Anchor>
            <Anchor
                href="https://torrents.jettscythe.home.arpa"
                class="row"
                external
            >
              Torrents
            </Anchor>
            <Anchor
                href="https://sabnzbd.jettscythe.home.arpa"
                class="row"
                external
            >
              Sabnzbd
            </Anchor>
            <Anchor
                href="https://metrics.jettscythe.xyz"
                class="row"
                external
            >
              grafana
            </Anchor>
            <Anchor
                href="https://prowlarr.jettscythe.home.arpa"
                class="row"
                external
            >
              prowlarr
            </Anchor>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <p>Media</p>
            <Divider color={"$warning10"}/>
            <Anchor href="https://jellyfin.jettscythe.xyz" class="row" external>
              Jellyfin
            </Anchor>
            <Anchor href="https://youtube.com" class="row" external>
              Youtube
            </Anchor>
            <Anchor href="https://seerr.jettscythe.home.arpa" class="row" external>
              Seerr
            </Anchor>
            <Anchor href="https://immich.jettscythe.xyz" class="row" external>
              Immich
            </Anchor>
            <Anchor href="https://sonarr.jettscythe.home.arpa" class="row" external>
              sonarr
            </Anchor>
            <Anchor href="https://radarr.jettscythe.home.arpa" class="row" external>
              radarr
            </Anchor>
            <Anchor href="https://lidarr.jettscythe.home.arpa" class="row" external>
              lidarr
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
