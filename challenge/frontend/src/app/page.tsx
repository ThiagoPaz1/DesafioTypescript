import { Metadata } from 'next'

// Components
import { Products } from './components/Products'

// Services
import { getAllProducts } from './services/getAllProducts'

export const metadata = {
  title: 'Products'
}

async function getData() {
  const data = await getAllProducts()

  return data
}

export default async function ProductsPage() {
  const productsData = await getData()  

  return (
    <main>
      <Products productsData={productsData} />
    </main> 
  )
}
