'use client'

import { competingProducts } from '@/src/fakeData/data'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  return (
    <div>
      <div className='my-5 bg-white p-4'>
        <p className='ml-4 text-3xl font-bold'> Smart Insurance </p>
        <p className='ml-4 text-3xl font-bold'>Competing Products!</p>
        <div className='p-10'>
          <DataTable data={competingProducts} columns={columns} />
        </div>
      </div>
    </div>
  )
}
