'use client'

import { competingProducts } from '@/src/fakeData/data'
import Image from 'next/image'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  return (
    <div>
      <Image alt='image' src={'/png/top.png'} width={1132} height={920} />

      {/* {competingProducts.map((item, index) => (
        <CompetingProduct {...item} key={index} />
      ))} */}
      <DataTable data={competingProducts} columns={columns} />
    </div>
  )
}
