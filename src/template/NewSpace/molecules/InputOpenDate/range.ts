import {getMaxDate, getMinDate} from '../../organisms/Form';

export const getMinMax = (now: Date) => ({
  minDate: getMinDate(now).format('YYYY-MM-DD'),
  maxDate: getMaxDate(now).format('YYYY-MM-DD'),
});
