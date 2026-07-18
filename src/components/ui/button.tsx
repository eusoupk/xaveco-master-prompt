import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { soundGenerator } from "@/hooks/useSound";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-black uppercase tracking-tight ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-2xl",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-primary to-[hsl(280_100%_40%)] text-white border-b-[6px] border-[hsl(280_100%_28%)] shadow-[0_10px_25px_-8px_hsl(var(--primary)/0.6),inset_0_2px_0_rgba(255,255,255,0.35)] hover:-translate-y-[1px] active:translate-y-1 active:border-b-2",
        game:
          "bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-[hsl(var(--background))] border-b-[6px] border-[hsl(var(--pixel-green-dark))] shadow-[0_10px_25px_-8px_hsl(var(--pixel-green)/0.55),inset_0_2px_0_rgba(255,255,255,0.5)] hover:-translate-y-[1px] active:translate-y-1 active:border-b-2",
        hero:
          "bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-[hsl(var(--background))] border-b-[8px] border-[hsl(var(--pixel-green-dark))] shadow-[0_16px_35px_-10px_hsl(var(--pixel-green)/0.65),inset_0_3px_0_rgba(255,255,255,0.55)] hover:-translate-y-[1px] active:translate-y-1.5 active:border-b-2",
        destructive:
          "bg-gradient-to-b from-destructive to-[hsl(0_100%_45%)] text-white border-b-[6px] border-[hsl(0_100%_32%)] shadow-[0_10px_25px_-8px_hsl(var(--destructive)/0.55),inset_0_2px_0_rgba(255,255,255,0.3)] hover:-translate-y-[1px] active:translate-y-1",
        outline:
          "border-2 border-white/15 bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10",
        secondary:
          "bg-secondary text-secondary-foreground border-b-[4px] border-black/40 hover:-translate-y-[1px] active:translate-y-1",
        ghost: "hover:bg-white/10 text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
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
        if (variant === 'hero' || variant === 'game') soundGenerator.playStart();
        else soundGenerator.playClick();
      }
      onClick?.(e);
    };
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundOnHover) soundGenerator.playHover();
      onMouseEnter?.(e);
    };
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} onClick={handleClick} onMouseEnter={handleMouseEnter} {...props} />
    );
  },
);
Button.displayName = "Button";
export { Button, buttonVariants };
