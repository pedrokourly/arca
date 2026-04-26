"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: (
                    <CircleCheckIcon size={20} color="#00C950" />
                ),
                info: (
                    <InfoIcon size={20} color="#2B7FFF" />
                ),
                warning: (
                    <TriangleAlertIcon size={20} color="#F0B100" />
                ),
                error: (
                    <OctagonXIcon size={20} color="#FB2C36" />
                ),
                loading: (
                    <Loader2Icon size={20} color="#808080" className=" animate-spin" />
                ),
            }}
            toastOptions={{
                classNames: {
                    toast: "bg-(--color-light)! gap-4! px-6! py-4! border! border-solid! border-(--color-mlight)/75! rounded-xl! shadow-md!",
                    title: "font-semibold! text-(--color-dark)! text-[14px]!",
                    description: "text-(--color-medium)! text-[14px]!"
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
