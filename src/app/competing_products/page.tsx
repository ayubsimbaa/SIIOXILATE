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
      <div className='my-5 bg-white p-4'>
        <p className='ml-4 text-3xl font-bold'> Smart Insurance </p>
        <p className='ml-4 text-3xl font-bold'>Competing Products!</p>
        <DataTable data={competingProducts} columns={columns} />
      </div>
    </div>
  )
}
