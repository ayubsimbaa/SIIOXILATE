'use client'

import { competingProducts } from '@/src/fakeData/data'
import { useCompetingStore } from '@/src/zustand_store/competingStore'
import Iframe from 'react-iframe'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  const showFrame = useCompetingStore(s => s.showFrame)
  return (
    <div>
      <div className='my-5 bg-grey p-4'>
        {showFrame ? (
          <Iframe
            url='https://next-js-front.vercel.app/'
            width='1220px'
            height='634px'
            id=''
            className=''
            display='block'
            position='relative'
          />
        ) : (
          <>
            <p className='ml-4 text-3xl font-bold'> Smart Insurance </p>
            <p className='ml-4 text-3xl font-bold'>Competing Products!</p>
            <div className='px-4 py-2'>
              <DataTable data={competingProducts} columns={columns} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}