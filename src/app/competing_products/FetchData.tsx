import CompetingProduct from '@/src/components/Other/CompetingProduct'
import { competingProducts, productType } from '@/src/fakeData/data'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'

export default function FetchData() {
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    setTimeout(() => {
      setProducts(competingProducts)
    }, 10000)
  }, [])

  return (
    <div className='space-y-2'>
      <Suspense fallback={<Loading />}>
        {products.map((item, index) => (
          <CompetingProduct {...item} key={index} />
        ))}
      </Suspense>
    </div>
  )
}
