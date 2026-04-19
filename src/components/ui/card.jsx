import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
    className,
    variant = "default", // "default" or "highlighted"
    interactive = false,
    ...props
}) {
    return (
        <div
            data-slot="card"
            data-interactive={interactive ? "true" : undefined}
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-3xl border py-6 [box-shadow:var(--shadow-sm)] transition-[background-color,border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none",
                {
                    "[background-color:var(--surface-elevated)] [box-shadow:var(--shadow-md)]": variant === "highlighted",
                    "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none hover:border-foreground/10 hover:[box-shadow:var(--shadow-hover)] active:[box-shadow:var(--shadow-sm)]": interactive && variant === "default",
                    "focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none hover:border-foreground/10 hover:[box-shadow:var(--shadow-lg)] active:[box-shadow:var(--shadow-md)]": interactive && variant === "highlighted",
                },
                className
            )}
            {...props} />
    );
}

function CardHeader({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props} />
    );
}

function CardTitle({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-normal font-medium", className)}
            {...props} />
    );
}

function CardDescription({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props} />
    );
}

function CardAction({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props} />
    );
}

function CardContent({
    className,
    ...props
}) {
    return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props} />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
}
