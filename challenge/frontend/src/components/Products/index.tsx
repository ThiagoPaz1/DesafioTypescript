'use client'

// Components
import { Header } from './Header'
import { ProductList } from './ProductList'

// Types
import { ProductsProps } from './types'

export function Products({ productsData }: ProductsProps) {
  return (
    <div>
      <Header />
      <ProductList productListData={productsData} />
    </div>
  )
}