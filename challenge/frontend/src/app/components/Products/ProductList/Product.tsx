import Image from 'next/image'

// Types
import { ProductProps } from '../types'

// Utils
import { priceFormat } from '@/app/utils/priceFormat'

export function Product({ ...props }: ProductProps) {
  return (
    <li>
      <Image
        width={200}
        height={200}
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
    </li>
  )
}