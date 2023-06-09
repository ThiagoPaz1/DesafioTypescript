import axios from 'axios'

export const instanceApi = axios.create({
  baseURL: 'http://localhost:3000/api/v1/products'
})