import {
  getDayData,
  getMonthData,
  getYearData
} from '@/libs/http'

import {
  formatChisDate,
  mapChisDate
} from '@/libs/utils.js'

export default async(store, field, date) => {
  let data = null;

  switch(field) {
    case 'day':
      data = await getDayData(date);
      break;
    case 'month':
      data = await getMonthData(date);
      break;
    case 'year':
      data = await getYearData(date);
      break;
    default:
      break;
  }

  if(data.error_code !== 0) {
    store.commit('setErrorCode', data.error_code);
    return;
  }

  let res = null;
  switch(field) {
    case 'day':
      res = data.result.data;
      res.date = formatChisDate(res.date, 'day');
      res['year-month'] = formatChisDate(res['year-month'], 'month');
      break;
    case 'month':
      res = data.result.data.holiday_array;
      res = mapChisDate(res, 'festival');
      break;
    case 'year':
      res = data.result.data.holiday_list;
      res = mapChisDate(res, 'startday');
      break;
  }

  store.commit('headerStore/setData', {
    field,
    data: res
  })

  // return data
}