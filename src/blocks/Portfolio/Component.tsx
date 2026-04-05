"use client";

import { Media } from "@/components/Media";
import { PortfolioBlock as PortfolioBlockProps } from "@/payload-types";
import { usePayloadAPI } from "@payloadcms/ui";
import { Item } from "@radix-ui/react-select";
import React, { useEffect, useMemo } from "react";

export const PortfolioBlock: React.FC<PortfolioBlockProps> = ({
    title,
    description, 
    works,
}) => {
    const worksURL = "/api/works";
    const [{ data, isError, isLoading }, { setParams }] = usePayloadAPI(worksURL, {
        initialParams: {
            limit: 12,
        },
    });

    const portfolioGrid: any = useMemo(() => {
        if (!Array.isArray(data?.docs) || data?.docs.length === 0)
            return {}

        return {
            0: data.docs.filter((_: any, index: number) => index < 3),
            1: data.docs.filter((_: any, index: number) => index >= 3 && index < 6),
            2: data.docs.filter((_: any, index: number) => index >= 6 && index < 9),
            3: data.docs.filter((_: any, index: number) => index >= 9 && index < 12),
        }
    }, [data])

    useEffect(() => {
        setParams({
            where: {
                id: {
                    in: works || [],
                },
            },
            limit: 12,
        });
    }, [works, setParams]);

    console.log("PortfolioBlock data:", portfolioGrid);

    return (
        <div className="w-full p-0 m-0 bg-foreground pt-12">
            <h2 className="text-6xl font-bold mb-4 text-background text-center">{title}</h2>
            <p className="text-lg mb-12 text-background/80 text-center">{description}</p>
            <div className="grid grid-cols-4 gap-8">
                {Object.keys(portfolioGrid).map((index: any) => {
                    const columnWorks = portfolioGrid[index]
                    return (
                        <div className={`grid grid-cols-1 gap-8 ${Number(index)%2 === 0 ? 'mt-16' : 'mb-16'}`}>
                            {columnWorks.map((work: any) => (
                                <div className="relative h-[480px] w-full" key={work.id}>
                                    <Media
                                        resource={work.image}
                                        imgClassName="object-cover absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};