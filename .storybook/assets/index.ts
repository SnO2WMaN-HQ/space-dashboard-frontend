const icons = [
  require('./icons/1.png'),
  require('./icons/2.png'),
  require('./icons/3.png'),
  require('./icons/4.png'),
  require('./icons/5.png'),
];

export const random = {
  icon(seed = 0) {
    return icons[seed % icons.length];
  },
};
