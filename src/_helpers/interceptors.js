import axios from 'axios';

import config from '../config/config';

const axiosInstance = axios.create({
  baseURL: config.baseURL
})

const isHandlerEnabled = (config={}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
    false : true
}

const requestHandler = (request) => {
  console.log('requestHandlerrequestHandlerrequestHandlerrequestHandlerrequestHandler');

  // if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  // }
  return request
}

axios.interceptors.request.use(
  request => requestHandler(request)
)


console.log('AOOPOPOPSOPSOPSO')
