import { Suspense } from 'react'
import Loading from './loading'
import Page from './page'

export default function DashboardLayout() {
  return (
    <div className='bg-[#ffffff] py-8'>
      <div className='px-8 pb-10 pt-10'>
        <Suspense fallback={<Loading />}>
          <Page />
        </Suspense>
      </div>
    </div>
  )
}
