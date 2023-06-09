// Types
import { ProductProps } from '../types'

export function Product({ ...props }: ProductProps) {
  return (
    <li>
      {props.name}
    </li>
  )
}