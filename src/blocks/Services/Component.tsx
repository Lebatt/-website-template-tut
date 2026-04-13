"use client";

import { usePayloadAPI } from "@payloadcms/ui";
import React, { useEffect } from "react";
import { ServiceBadge } from "./ServiceBadge";
import { ServicesBlock as ServicesBlockProps } from "@/payload-types";
import { SectionDescription } from "@/components/Section/description";
import { SectionTitle } from "@/components/Section/title";

export const ServicesBlock: React.FC<ServicesBlockProps> = ({
    title,
    description, 
}) => {
    const servicesURL = "/api/services";
    const [{ data, isError, isLoading }, { setParams }] = usePayloadAPI(servicesURL, {
        initialParams: {
            limit: 12,
        },
    });

    useEffect(() => {
        setParams({
            limit: -1,
        });
    }, []);

    return (
        <div className="w-full p-0 m-0 py-12">
            {description && <SectionDescription description={description} className="text-primary mb-8 text-base uppercase" />}
            <SectionTitle title={title} />

            <div className="container flex gap-6 item-center flex-wrap justify-center mt-12">
                { data?.docs && data.docs.map((service: any) => (
                    <ServiceBadge
                        key={service.id}
                        title={service.title}
                    />
                ))}
            </div>
        </div>
    );
};