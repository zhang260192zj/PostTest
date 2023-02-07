import axios from 'axios'
const url = localStorage.getItem('value')
const service = axios.create({
    baseURL: `${url}`, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })
  export default service