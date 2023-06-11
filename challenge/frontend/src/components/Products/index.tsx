'use client'

// Components
import { Header } from './Header'
import { ProductList } from './ProductList'

// Types
import { ProductsProps } from './types'

// Styles and images
import { ProductsContainer } from './styles/products'

export function Products({ productsData }: ProductsProps) {
  return (
    <div>
      <Header />
      <ProductList productListData={productsData} />
    </div>
  )
}