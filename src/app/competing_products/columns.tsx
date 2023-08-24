'use client'

import { Button } from '@/src/components/ui/button'
import { productType } from '@/src/fakeData/data'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<productType>[] = [
  {
    accessorKey: 'title',
    cell: data => {
      return <div className='font-lato font-bold'>{data.row.original.title}</div>
    },
  },
  {
    accessorKey: 'sd',
    cell: data => {
      return (
        <div className='flex justify-center'>
          <Button variant={'default'}>{data.row.original.location}</Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'titasale',
    cell: data => {
      return (
        <div className='flex justify-end'>
          <Button variant={'open_link'}>Open link</Button>
        </div>
      )
    },
  },
]
