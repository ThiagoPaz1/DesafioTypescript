import React from 'react'
import { Metadata } from 'next'

// Components
import { Products } from '@/components/Products'

// Services
import { getAllProducts } from '@/services/getAllProducts'

export const metadata: Metadata = {
  title: 'Products'
}

async function getProductsData() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const data = await getAllProducts()

  return data
}

export default async function ProductsPage() {
  const productsData = await getProductsData()

  return (
    <main>
      <Products productsData={productsData} />
    </main>
  )
}
