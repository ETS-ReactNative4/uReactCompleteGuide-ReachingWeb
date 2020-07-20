import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';  // it's useless. just an example

axios.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error); // Global Error Handler. Error Log 저장 등
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    console.log(error); // Global Error Handler. Error Log 저장 등
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
