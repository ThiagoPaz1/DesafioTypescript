import { Metadata } from 'next'

// Components
import { Products } from './components/Products'

export const metadata: Metadata = {
  title: 'Products'
}

export default function ProductsPage() {
  return (
    <main>
      <Products />
    </main>
  )
}
