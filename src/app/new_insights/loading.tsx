import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <div className='space-y-3'>
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
      <Skeleton className='h-[36px] w-full' />
    </div>
  )
}
