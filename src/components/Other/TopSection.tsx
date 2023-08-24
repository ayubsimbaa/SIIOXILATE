'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Skeleton } from '@components/ui/skeleton'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function TopSection() {
  const pathname = useSelectedLayoutSegment()

  return (
    <div className='flex items-center justify-between bg-gray-dark p-4'>
      {/* <div className='font-semibold'>My topics</div> */}
      {pathname === 'new_insights' && (
        <div className='text-lg font-semibold'>Insights</div>
      )}
      {pathname === null && (
        <div className='text-lg font-semibold'>My topics</div>
      )}
      {pathname === 'competing_products' && (
        <div className='text-lg font-semibold text-black/60'>
          My topics &gt;{' '}
          <span className='text-lg text-black'>Competing Products</span>
        </div>
      )}
      <div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='/pic.png' />
            <AvatarFallback>
              <Skeleton className='h-[32px] w-[32px] rounded-full' />
            </AvatarFallback>
          </Avatar>

          <span className='font-semibold'>Antonio</span>
        </div>
      </div>
    </div>
  )
}
