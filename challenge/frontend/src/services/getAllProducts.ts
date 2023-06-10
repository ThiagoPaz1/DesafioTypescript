// Services
import { baseURL } from './baseURL'

// Types
import { Product } from '../@types'

export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(`${baseURL}/products`)
  const { data } = await response.json()

  return data
}