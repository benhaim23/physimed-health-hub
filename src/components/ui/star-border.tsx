
import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--primary))" // Change to primary color (burgundy)

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[12px]", // Slightly less rounded
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-30 dark:opacity-50" // Slightly increased opacity
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-30 dark:opacity-50" // Slightly increased opacity
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-foreground text-center text-base py-3 px-5 rounded-[12px]", // Slightly less rounded, reduced padding
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/30", // Lighter border
        "dark:from-background dark:to-muted dark:border-border/40", // Adjusted dark mode border
        "transition-all duration-300 hover:shadow-sm hover:scale-[1.02]" // Added hover effect
      )}>
        {children}
      </div>
    </Component>
  )
}
