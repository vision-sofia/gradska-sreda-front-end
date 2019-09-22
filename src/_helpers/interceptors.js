import axios from 'axios';
import { history } from '../_helpers';
import config from '../config/config';
import { userActions } from '../_actions';
import { createStore, applyMiddleware } from 'redux';
import store from '../store/store.js';

const { dispatch } = store;

const axiosInstance = axios.create({
  baseURL: config.baseURL
})

const isHandlerEnabled = (config={}) => {
  return config.hasOwnProperty('preventInterception') && config.preventInterception ?
    false : true
}

const requestHandler = (request) => {
  // console.log(request);

  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  }
  return request
}

const errorHandler = (error) => {
  console.log(error);

  if (isHandlerEnabled(error.config)) {
    console.log(error);
  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response
}

axios.interceptors.request.use(
  request => requestHandler(request),
)

axios.interceptors.response.use(response => response, error => {
  const status = error.response ? error.response.status : null

  if (status === 401) {
    dispatch(userActions.logout());
  }

  return Promise.reject(error);
});


