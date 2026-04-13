import { cn } from "@/utilities/ui"

export const SectionTitle: React.FC<{ 
    title: string
    className?: string
}> = ({ title, className }) => {
    return (
        <h4 className={cn(
            "text-5xl font-bold mb-4 text-center",
            className
        )}>
            {title}
        </h4>
    )
}