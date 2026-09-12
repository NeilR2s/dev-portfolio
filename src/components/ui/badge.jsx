import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex max-w-full w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border px-2.5 py-1 text-center font-sans text-caption font-bold tracking-[0.04em] uppercase transition-colors duration-200 motion-reduce:transition-none [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive aria-invalid:ring-destructive/30",
    {
        variants: {
            variant: {
                default:
                    "border-primary bg-primary text-primary-foreground [a&]:hover:bg-ink-hover",
                secondary:
                    "border-hairline bg-canvas-soft text-body [a&]:hover:border-ink [a&]:hover:text-ink",
                destructive:
                    "border-destructive bg-transparent text-destructive [a&]:hover:bg-destructive [a&]:hover:text-primary-foreground",
                outline:
                    "border-ink bg-canvas text-ink [a&]:hover:bg-canvas-soft",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({
    className,
    variant,
    asChild = false,
    ...props
}) {
    const Comp = asChild ? Slot : "span"

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props} />
    );
}

export { Badge }
