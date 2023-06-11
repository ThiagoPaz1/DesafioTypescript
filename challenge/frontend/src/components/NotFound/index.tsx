'use client'

import Link from 'next/link'

// Styles and images
import { NotFoundContainer } from './styles'

export function NotFoundComponent() {
  return (
    <NotFoundContainer>
      <h2>Página não encontrada</h2>
      <p>
        <Link href="/">
          Clique aqui para voltar para a página inicial
        </Link>
      </p>
    </NotFoundContainer>
  )
}