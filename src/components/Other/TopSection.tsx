'use client'

import { useTopSection } from '@/src/zustand_store/useTopSection'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Skeleton } from '@components/ui/skeleton'

export default function TopSection() {
  const title = useTopSection(s => s.title)

  return (
    <div className='flex items-center justify-between bg-gray-dark p-4'>
      <div className='text-lg font-semibold capitalize'>{title}</div>

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
