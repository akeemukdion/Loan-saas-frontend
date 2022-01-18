import axios from 'axios';
import CustomHttpError from './CustomError';
import {getCookie} from '../shared/authHelper';
// eslint-disable-next-line 
// const cloud =  'https://fms-api.ukdion.com/';

const testServer= 'https://ves-backend.herokuapp.com/'

// eslint-disable-next-line 
const localUrl = 'http://localhost:8000/'
const ApiClient = axios.create({
  baseURL:testServer, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
},
  withCredentials:true
}
);

ApiClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: getCookie('token') ? `Bearer ${getCookie('token')}` : ''
    },              

  };
}, (error) => Promise.reject(error));

ApiClient.interceptors.response.use((response) => {
  return response.data;
},
(err) => {
  if (!err.response) {
    return Promise.reject(new CustomHttpError(
      'Error occurred while sending the request, please check your internet settings', {
        statusCode: 0,
        responseText: 'Error occurred while sending the request, please check your internet settings',
      },
    ));
  }
  // Listen for status code unauthorized, and then trigger logout.
  if (err.response.status === 401) {

      return Promise.reject(new CustomHttpError(
        'Unauthorized request!', {
          statusCode: err.response.status,
          responseText: err.response.data.responseText,
        },
      ));
  }
  if (err.response.status === 403) {
    return Promise.reject(new CustomHttpError(
      'You do not have permission to perform this operation', {
        statusCode: err.response.status,
        responseText: 'You do not have permission to perform this operation',
      },
    ));
  }
  if (err.response.status === 422) {
    return Promise.reject(new CustomHttpError(
      'Invalid Details cannot process', {
        statusCode: err.response.status,
        responseText: 'Invalid Details cannot process',
      },
    ));
  }
  if (err.response.status === 405) {
    return Promise.reject(new CustomHttpError(
      'Invalid requests', {
        statusCode: err.response.status,
        responseText: 'Invalid requests',
      },
    ));
  }
  if (err.response.status === 419) {
    return Promise.reject(new CustomHttpError(
      'Cors Error', {
        statusCode: err.response.status,
        responseText: 'Cors Error',
      },
    ));
  }
  if (err.response?.data?.responseText) {
    return Promise.reject(new CustomHttpError(err.response.data.responseText, {
      statusCode: err.response.status,
      responseText: err.response.data.responseText,
      payload: err.response.data.payload,
      responseCode: err.response.data.responseCode,
    }));
  }

  return Promise.reject(new CustomHttpError(
    'Oops, something went wrong! We are not quite sure what it is', {
      statusCode: err.response.status,
      responseText: 'Oops, something went wrong! We are not quite sure what it is',
    },
  ));
});

export default ApiClient;
