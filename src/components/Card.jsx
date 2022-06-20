import '../css/Card.css'


const Card = () => {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
            <p>
                Social
            </p>
            <hr></hr>
            <a href='https://twitter.com' class="row">Twitter</a>
            <a href='https://noise.cash' class="row">Noise</a>
            <a href='https://memo.cash' class="row">Memo</a>
            <a href='https://member.cash' class="row">Member</a>
        </div>
      </div>
      <div class="column">
        <div class="card">
            <p>
                Dev
            </p>
            <hr></hr>
            <a href='https://github.com' class="row">Github</a>
            <a href='https://gist.github.com' class="row">Gist</a>
            <a href='https://web.compass.lighthouselabs.ca/' class="row">Compass</a>
            <a href='https://udemy.com' class="row">Udemy</a>
        </div>
      </div>
      <div class="column">
        <div class="card">
            <p>
                Media
            </p>
            <hr></hr>
            <a href='https://torrents.jettscythe.local' class="row">Torrents</a>
            <a href='https://jellyfin.jettscythe.xyz' class="row">Jellyfin</a>
            <a href='https://youtube.com' class="row">Youtube </a>
            <a href='https://seerr.jettscythe.local' class="row">Seerr</a>
        </div>
      </div>
      <div class="column">
        <div class="card">
            <p>
                Local
            </p>
            <hr></hr>
              <a href='https://sonarr.jettscythe.local' class="row">sonarr</a>
              <a href='https://radarr.jettscythe.local' class="row">radarr</a>
              <a href='https://lidarr.jettscythe.local' class="row">lidarr</a>
              <a href='https://prowlarr.jettscythe.local' class="row">prowlarr</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
