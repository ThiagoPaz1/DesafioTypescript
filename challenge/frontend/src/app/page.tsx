import { Metadata } from 'next'

// Components
import { Products } from './components/Products'

// Services
import { getAllProducts } from './services/getAllProducts'

export const metadata: Metadata = {
  title: 'Products'
}

async function getData() {
  const data = await getAllProducts()

  return data
}

export default async function ProductsPage() {
  const products = await getData()
  console.log(products)
  return (
    <main>
      <Products />
    </main>
  )
}
