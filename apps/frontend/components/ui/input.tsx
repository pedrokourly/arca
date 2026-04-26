import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "bg-transparent text-(--color-dark) text-[14px] w-full min-w-0 h-10 px-2! border border-input rounded-lg outline-none transition-colors placeholder:text-(--color-medium) focus-visible:ring-(--color-dark) focus-visible:border-ring focus-visible:ring-1 disabled:bg-input/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none aria-invalid:placeholder:text-red-300 aria-invalid:border-red-500 aria-invalid:ring-red-500 aria-invalid:ring-1 file:bg-transparent file:inline-flex file:text-base file:h-6 file:border-0",
                className
            )}
            {...props}
        />
    )
}

export { Input }
