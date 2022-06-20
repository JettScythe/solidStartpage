const formatSmallTime = (t) => {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
};

const formatTime = (h, m, s) => {
  return `${h}:${m}:${s}`;
};

export { formatSmallTime, formatTime };
