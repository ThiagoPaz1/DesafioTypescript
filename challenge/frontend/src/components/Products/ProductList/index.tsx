// Components
import { Product } from './Product'

// Types
import { ProductListProps } from '../types'

// Styles and images
import { ProductListContainer } from '../styles/productList'

export async function ProductList({ productListData }: ProductListProps) {
  return (
    <ProductListContainer>
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
    </ProductListContainer>
  )
}