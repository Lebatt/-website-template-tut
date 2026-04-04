import { Media } from "@/components/Media"
import { BrandsBlock as BrandsBlockProps } from "@/payload-types"
import React from "react"

export const BrandsBlock: React.FC<BrandsBlockProps> = ({ media }) => {
    return (
        <div className="container">
            <div className="rounded-lg bg-card border border-card p-4">
                <div className="w-full flex items-center justify-center gap-4">
                    {(media || []).map(({image}, index) => (
                        <Media
                            key={index}
                            resource={image}
                            imgClassName="h-8 object-contain"
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}