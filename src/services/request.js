import axios from 'axios'
import qs from 'qs'

import {
  JUHE_APPKEY
} from '@/config/keys'

const axiosPost = (options) => {
  axios({
    url: options.url,
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({
      ...options.data,
      key: JUHE_APPKEY
    })
  })
  .then(res => {
    options.success(res.data)
  })
  .catch(err => {
    options.error(err)
  })
}

const axiosGet = (options) => {
  axios(options.url + "&key=" + JUHE_APPKEY)
  .then(res => {
    options.success(res.data)
  })
  .catch(err => {
    options.error(err)
  })
}

export {
  axiosPost,
  axiosGet
}