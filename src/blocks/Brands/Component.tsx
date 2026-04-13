import { Media } from "@/components/Media"
import { BrandsBlock as BrandsBlockProps } from "@/payload-types"
import React from "react"

export const BrandsBlock: React.FC<BrandsBlockProps> = ({ media }) => {
    return (
        <div className="container flex flex-col items-center gap-8 py-16">
            <div className="flex items-center justify-center gap-8 w-xl">
                <div className="flex-1 bg-primary" style={{ height: '3px' }}></div>
                <h2 className="text-sm font-semibold uppercase whitespace-nowrap">TRUSTED BY AMAZING BRANDS</h2>
                <div className="flex-1 bg-primary" style={{ height: '3px' }}></div>
            </div>
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