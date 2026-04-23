import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 outline-none whitespace-nowrap transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                primary: "bg-(--color-dark) text-(--color-light) border-[2px] border-solid border-transparent",
                outline: "bg-(--color-light) text-(--color-dark) border-[2px] border-solid border-(--color-dark)"
            },
            size: {
                default: "relative font-semibold text-center text-[14px] px-[16px]! py-[8px]! rounded-[8px] "
            },
        },
        defaultVariants: {
            variant: "primary",
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
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot.Root : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
