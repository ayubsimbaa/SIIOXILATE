/**
 * The above function is a React component that renders a page displaying a table of competing
 * insurance products.
 * @returns The Page component is being returned.
 */
"use client"
import { competingProducts } from '@/src/fakeData/data'
import { useTopSectionHook } from '@/src/hooks/useTopSectionHook'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  useTopSectionHook('Competing Products')

  return (
    <div className='bg-white'>
      <div className='bg-grey my-5 p-4'>
        <p className='ml-4 text-3xl font-bold'> Smart Insurance </p>
        <p className='ml-4 text-3xl font-bold'>Competing Products!</p>
        <div className='px-4 py-2'>
          <DataTable data={competingProducts} columns={columns} />
        </div>
      </div>
          
    </div>
  )
}
