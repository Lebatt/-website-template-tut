"use client"
import { Media } from '@/components/Media'
import { BrandsBlock as BrandsBlockProps } from "@/payload-types"
import React from "react"

export const BrandsBlock: React.FC<BrandsBlockProps> = ({ brands }) => {
    return (
        <div className="container">
            <div className="bg-card rounded-lg border-card border p-4">
                <div className="w-full flex items-center justify-center gap-4">
                    {(brands || []).map(({ image }, i) => {
                        return (
                            <Media key={i} imgClassName="h-8 object-contain" priority resource={image} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}