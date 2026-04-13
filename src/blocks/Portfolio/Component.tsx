"use client";

import { Media } from "@/components/Media";
import { SectionDescription } from "@/components/Section/description";
import { SectionTitle } from "@/components/Section/title";
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

    return (
        <div className="w-full p-0 m-0 bg-foreground pt-12">
            <SectionTitle title={title} className="text-background" />
            {description && <SectionDescription description={description} className="text-background/80" />}

            <div className="grid grid-cols-4 gap-12">
                {Object.keys(portfolioGrid).map((index: any) => {
                    const columnWorks = portfolioGrid[index]
                    return (
                        <div className={`grid grid-cols-1 gap-12 ${Number(index)%2 === 0 ? 'mt-16 -mb-px' : 'mb-16 -mt-px'}`} key={index}>
                            {columnWorks.map((work: any) => (
                                <div className="relative h-96 w-full" key={work.id}>
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