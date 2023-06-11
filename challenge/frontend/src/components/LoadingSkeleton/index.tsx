'use client'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Styles and images
import './styles.css'

export function LoadingSkeleton() {
  function skeletonsBoxs(): number[] {
    let n = 0
    const skeletonsNumbers = []

    while (n < 10) {
      skeletonsNumbers.push(n)
      n++
    }

    return skeletonsNumbers
  }

  return (
    <div>
      <Skeleton className="headerLoading" />
      <div className="productListContainerLoading">
        {
          skeletonsBoxs().map(i =>
            <Skeleton className="productContainerLoading" />
          )
        }
      </div>
    </div>
  )
}