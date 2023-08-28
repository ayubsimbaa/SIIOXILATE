'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { useState } from 'react'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem>
          <Button variant={'ghost'}>Open Chat</Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant={'ghost'}>Delete</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const IframeComponent: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false)

  return (
    <div className='p-4'>
      <button
        className='bg-blue-500 rounded px-4 py-2 text-white'
        onClick={() => setShowIframe(!showIframe)}
      >
        {showIframe ? 'Hide Iframe' : 'Show Iframe'}
      </button>

      {showIframe && (
        <div className='mt-4'>
          <iframe
            src='https://www.example.com'
            width='600'
            height='400'
            title='Example Iframe'
          ></iframe>
        </div>
      )}
    </div>
  )
}
