import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'flex items-center h-6 rounded-xl px-2.5 py-0.5 text-sm transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        blue: 'bg-custom-blue-50 text-custom-blue-100',
        green: 'bg-custom-green-50 text-custom-green-100',
        yellow: 'bg-custom-yellow-50 text-custom-yellow-100',
        red: 'bg-custom-red-50 text-custom-red-100',
        magenta: 'bg-custom-magenta-50 text-custom-magenta-100',
        cyan: 'bg-custom-cyan-50 text-custom-cyan-100',
        purple: 'bg-custom-purple-50 text-custom-purple-100',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
