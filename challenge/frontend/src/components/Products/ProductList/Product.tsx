// Types
import { ProductProps } from '../types'

// Utils
import { priceFormat } from '@/utils/priceFormat'

// Style and images
import { ProductContainer } from '../styles/product'

export function Product({ ...props }: ProductProps) {
  return (
    <ProductContainer>
      <div>
        <img
          src={props.image}
          alt="Product image"
        />

        <h1>
          {props.name}
        </h1>
        <h3>
          {props.brand}
        </h3>
        <p>
          {priceFormat(props.price)}
        </p>
      </div>
    </ProductContainer>
  )
}