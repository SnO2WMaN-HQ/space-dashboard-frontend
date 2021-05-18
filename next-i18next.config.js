const dayjs = require('dayjs');

module.exports = {
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
    serializeConfig: false,
    interpolation: {
      format(value, format) {
        if (value instanceof Date) return dayjs(value).format(format);
        return value;
      },
    },
  },
};
