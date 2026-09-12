import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-none text-button-md font-bold transition-colors duration-200 outline-none disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive aria-invalid:ring-destructive/30",
    {
        variants: {
            variant: {
                default:
                    "border border-primary bg-primary text-primary-foreground hover:border-ink-soft hover:bg-ink-soft",
                destructive:
                    "border border-destructive bg-transparent text-destructive hover:bg-destructive hover:text-primary-foreground",
                outline:
                    "border border-ink bg-canvas text-ink hover:bg-canvas-soft",
                secondary:
                    "border border-hairline bg-secondary text-secondary-foreground hover:border-ink",
                ghost:
                    "border border-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
                link: "h-auto rounded-none p-0 text-foreground underline-offset-4 hover:text-ink-hover hover:underline",
            },
            size: {
                default: "h-11 px-5",
                sm: "h-11 gap-1.5 px-4",
                lg: "h-11 px-5",
                icon: "size-11 rounded-full p-0",
                "icon-sm": "size-11 rounded-full p-0",
                "icon-lg": "size-11 rounded-full p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props} />
    );
}

export { Button }
