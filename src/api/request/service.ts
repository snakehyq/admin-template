import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default instance
