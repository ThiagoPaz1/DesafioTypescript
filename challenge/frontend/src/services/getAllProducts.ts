// Services
import { baseUrlApi } from './baseUrlApi'

// Types
import { Product } from '../@types'

export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(`${baseUrlApi}/products`)
  const { data } = await response.json()

  return data
}