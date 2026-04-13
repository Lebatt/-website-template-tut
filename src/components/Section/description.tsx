import { cn } from "@/utilities/ui"

export const SectionDescription: React.FC<{ 
    description: string
    className?: string
}> = ({ description, className }) => {
    return (
        <p className={cn(
            "text-lg mb-12 text-center",
            className
        )}>
            {description}
        </p>
    )
}