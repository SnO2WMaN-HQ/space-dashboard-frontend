const path = require('path');
const dayjs = require('dayjs');

module.exports = {
  i18n: {
    defaultNS: 'common',
    defaultLocale: 'jp',
    locales: ['jp'],
    serializeConfig: false,
    interpolation: {
      format(value, format) {
        if (value instanceof Date) return dayjs(value).format(format);
        return value;
      },
    },
    localePath: path.resolve('./public/locales'),
  },
};
