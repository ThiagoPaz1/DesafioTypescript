// Components
import { Product } from './Product'

// Types
import { ProductListProps } from '../types'

export async function ProductList({ productListData }: ProductListProps) {
  return (
    <ul>
      {
        productListData.map(i =>
          <Product
            key={i.id}
            name={i.name}
            brand={i.brand}
            image={i.image}
            price={i.price}
          />
        )
      }
    </ul>
  )
}