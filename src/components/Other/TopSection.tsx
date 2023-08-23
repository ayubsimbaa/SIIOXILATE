import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Skeleton } from '@components/ui/skeleton'

export default function TopSection() {
  return (
    <div className='flex items-center justify-between bg-gray-dark p-4'>
      <div className='font-semibold'>My topics</div>
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
