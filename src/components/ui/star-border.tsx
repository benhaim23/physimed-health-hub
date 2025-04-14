
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
  const defaultColor = color || "hsl(var(--primary))" // Using primary color (burgundy)

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[10px]", // More sleek, less rounded
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-25 dark:opacity-40" // Subtle animation effect
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-25 dark:opacity-40" // Subtle animation effect
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-foreground text-center text-base py-2.5 px-5 rounded-[10px]", // Sleeker padding
        "bg-gradient-to-b from-background/95 to-muted/95", // More subtle gradient
        "border-border/20", // Thinner border
        "dark:from-background dark:to-muted dark:border-border/30", // Adjusted dark mode border
        "transition-all duration-200 hover:shadow-md hover:border-physimed/40 hover:scale-[1.02]" // Enhanced hover effect
      )}>
        {children}
      </div>
    </Component>
  )
}
