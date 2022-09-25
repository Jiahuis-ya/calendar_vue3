import { axiosPost } from '@/services/request.js'

const getDayData = (date) => {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/calendar/day',
      data: { date },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err)
      }
    })
  })
}

const getMonthData = (month) => {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/calendar/month',
      data: {
        'year-month': month
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err)
      }
    })
  })
}

const getYearData = (year) => {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/calendar/year',
      data: {
        year
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export {
  getDayData,
  getMonthData,
  getYearData
}