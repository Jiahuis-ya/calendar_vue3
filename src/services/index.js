import {
  getDayData,
  getMonthData,
  getYearData
} from '@/libs/http'

export default async(field, date) => {
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

  return data
}