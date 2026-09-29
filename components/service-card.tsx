import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  compact?: boolean
}

export function ServiceCard({ icon, title, description, compact = false }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg border bg-white text-center border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300",
        compact ? "space-y-2 p-4" : "space-y-4 p-6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-blue-50",
          compact ? "h-12 w-12" : "h-16 w-16"
        )}
      >
        {icon}
      </div>
      <h3 className={cn("font-bold text-blue-900", compact ? "text-base" : "text-xl")}>{title}</h3>
      <p className={cn("text-gray-600", compact ? "text-sm leading-snug" : "")}>{description}</p>
    </div>
  )
}
