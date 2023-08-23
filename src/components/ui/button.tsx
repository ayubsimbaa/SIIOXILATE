import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@lib/utils'

const buttonVariants = cva('px-2 w-fit', {
  variants: {
    variant: {
      default: 'bg-blue-dark',
      open_link: 'bg-none border-2 rounded-3xl',
      with_icon: 'flex gap-5 items-center ',
      validate_insight: 'bg-[#8BDA8E] rounded-xl text-white px-9 py-2',
      calcel_insight: 'bg-[#DA8B8B] rounded-xl text-white px-9 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
