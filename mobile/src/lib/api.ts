import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://11.0.0.100:3333',
})
