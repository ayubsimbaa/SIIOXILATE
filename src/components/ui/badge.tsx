// src/components/ui/badge/Badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-semibold transition-colors shadow-lg",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        red: "border-transparent bg-red-500 text-white hover:bg-red-400",
        orange: "border-transparent bg-orange-500 text-white hover:bg-orange-400",
        yellow: "border-transparent bg-yellow-500 text-white hover:bg-yellow-400",
        green: "border-transparent bg-green-500 text-white hover:bg-green-400",
        blue: "border-transparent bg-blue-500 text-white hover:bg-blue-400",
        indigo: "border-transparent bg-indigo-500 text-white hover:bg-indigo-400",
        violet: "border-transparent bg-purple-500 text-white hover:bg-purple-400"
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  size?: "small" | "normal" | "large";
}

function Badge({ className, variant, size = "normal", ...props }: BadgeProps) {
  const sizeClasses = {
    small: "px-2.5 py-0.5 text-xs",
    normal: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base",
  }[size];

  return (
    <div className={cn(badgeVariants({ variant }), sizeClasses, className)} {...props} />
  );
}

export { Badge, badgeVariants };
