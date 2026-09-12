import { cn } from "@/lib/utils"

function Card({
    className,
    ...props
}) {
    return (
        <div
            data-slot="card"
            className={cn(
                "flex flex-col gap-6 rounded-sm border border-border bg-card py-6 text-card-foreground",
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
    children,
    ...props
}) {
    return (
        <h3
            data-slot="card-title"
            className={cn("text-display-xs font-normal", className)}
            {...props}>
            {children}
        </h3>
    );
}

function CardDescription({
    className,
    ...props
}) {
    return (
        <p
            data-slot="card-description"
            className={cn("text-body text-body-sm", className)}
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
