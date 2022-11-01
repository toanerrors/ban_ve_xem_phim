import axios from 'axios';
const queryString = require('query-string');


const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
}, (error) => {
    throw error
})

axiosClient.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error
})

export default axiosClient