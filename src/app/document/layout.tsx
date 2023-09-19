import { Suspense } from 'react'
import Loading from './loading'
import Page from './page'

export default function DashboardLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  )
}
