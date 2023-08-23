import { cn } from '@lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'dark:bg-slate-800 animate-pulse rounded-md bg-gray-dark',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
