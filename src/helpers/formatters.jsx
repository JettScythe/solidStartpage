const formatSmallTime = (t) => {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
};

const formatTime = (h, m, s) => {
  return `${h}:${m}:${s}`;
};

const makeClock = (s) => {
  const days = Math.floor(s / 86400);
  s -= days * 86400;
  const hours = Math.floor(s / 3600);
  s -= hours * 3600
  const minutes = Math.floor(s / 60);
  s -= minutes * 60
  const seconds = s % 60
  return `${days} days ${hours}:${minutes}:${seconds}`
};

const formatSearchProviderURL = (searchProvider) => {
  let suffix = "/search?q=";
  let prefix = "";
  let tld = ".com";
  if (searchProvider == 'ddg') {
    searchProvider = 'duckduckgo';
    suffix = '/?q=';
  }
  if (searchProvider == 'brave') {
    prefix = 'search.';
  }
  if (searchProvider == 'searx') {
    prefix = 'searx.';
    searchProvider = 'jettscythe';
    tld = '.xyz';
  }
  if (searchProvider == "google") {
    tld = ".ca"
  }
  return `https://${prefix}${searchProvider}${tld}${suffix}`
}

export { formatSmallTime, formatTime, makeClock, formatSearchProviderURL };
