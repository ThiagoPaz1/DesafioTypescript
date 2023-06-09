// Services
import { instanceApi } from './instanceApi'

// Types
import { Product } from '../@types'

export async function getAllProducts(): Promise<Product[]> {
  const response = await instanceApi.get('/products')
  const data = await response.data

  return data
}