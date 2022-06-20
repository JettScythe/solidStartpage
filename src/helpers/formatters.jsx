const formatSmallTime = (t) => {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
};

const formatTime = (h, m, s) => {
  return `${h}:${m}:${s}`;
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

export { formatSmallTime, formatTime, formatSearchProviderURL };
