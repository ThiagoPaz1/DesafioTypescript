import axios from 'axios'

export const instanceApi = axios.create({
  baseURL: 'http://localhost:3003/api/v1'
})