"use client";

import { usePayloadAPI } from "@payloadcms/ui";
import React, { useEffect } from "react";
import { ServiceBadge } from "./ServiceBadge";
import { ServicesBlock as ServicesBlockProps } from "@/payload-types";

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
        <div className="w-full p-0 m-0 pt-12">
            <p className="text-lg mb-8 text-primary text-center">{description}</p>
            <h2 className="text-6xl font-bold mb-12 text-center">{title}</h2>
            <div className="container flex gap-4 item-center flex-wrap justify-center mt-12">
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