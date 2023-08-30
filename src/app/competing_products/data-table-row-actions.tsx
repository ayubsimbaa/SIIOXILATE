'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { useCompetingStore } from '@/src/zustand_store/competingStore'
import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { useRef } from 'react'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const setFrame = useCompetingStore(s => s.setFrame)

  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const handleShowIframe = () => {
    // const iframe = document.createElement('iframe')
    // iframe.src = 'https://next-js-front.vercel.app/'
    // iframe.title = 'Example Iframe'
    // iframe.className = 'w-1/2 h-1/2'
    // iframe.style.position = 'fixed'
    // iframe.style.top = '0'
    // iframe.style.left = '0'
    // iframe.style.zIndex = '50'

    // document.body.appendChild(iframe)

    // iframe.requestFullscreen().catch(err => {
    //   alert(
    //     `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    //   )
    // })

    setFrame(true)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem>
          <Button variant={'ghost'} onClick={handleShowIframe}>
            Open Chat
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant={'ghost'}>Delete</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
