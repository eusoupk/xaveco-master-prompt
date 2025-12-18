import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { soundGenerator } from "@/hooks/useSound";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-pixel text-xs ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-4 border-b-8 border-primary/70 hover:border-b-4 hover:translate-y-1 active:border-b-2 active:translate-y-2",
        game: "bg-pixel-green text-background border-4 border-b-8 border-pixel-green-dark hover:border-b-4 hover:translate-y-1 active:border-b-2 active:translate-y-2 shadow-[0_0_20px_hsl(var(--pixel-green)/0.4)]",
        hero: "bg-pixel-green text-background border-4 border-b-8 border-pixel-green-dark hover:border-b-4 hover:translate-y-1 active:border-b-2 active:translate-y-2 shadow-[0_0_30px_hsl(var(--pixel-green)/0.5)] text-sm",
        destructive: "bg-destructive text-destructive-foreground border-4 border-b-8 border-destructive/70 hover:border-b-4 hover:translate-y-1",
        outline: "border-4 border-primary bg-transparent text-foreground hover:bg-primary/20",
        secondary: "bg-secondary text-secondary-foreground border-4 border-b-8 border-secondary/70 hover:border-b-4 hover:translate-y-1",
        ghost: "hover:bg-accent hover:text-accent-foreground border-4 border-transparent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        xl: "h-16 px-12 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  soundOnClick?: boolean;
  soundOnHover?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, soundOnClick = true, soundOnHover = true, onClick, onMouseEnter, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundOnClick) {
        if (variant === 'hero' || variant === 'game') {
          soundGenerator.playStart();
        } else {
          soundGenerator.playClick();
        }
      }
      onClick?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundOnHover) {
        soundGenerator.playHover();
      }
      onMouseEnter?.(e);
    };

    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...props} 
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
