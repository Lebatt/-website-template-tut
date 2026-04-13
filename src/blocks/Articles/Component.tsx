"use client";

import { ArticlesBlock as ArticlesBlockProps, Post } from "@/payload-types";
import { ArticlesCard } from "./ArticlesCard";
import { SectionDescription } from "@/components/Section/description";
import { SectionTitle } from "@/components/Section/title";

export const ArticlesBlock: React.FC<ArticlesBlockProps> = ({
    title,
    subtitle,
    description,
    posts,
}) => {
    const articles = posts as Post[];

    return (
        <div className="container py-16">
            {subtitle && <SectionDescription description={subtitle} className="text-primary mb-8 text-base uppercase" />}
            <SectionTitle title={title} />
            {description && <SectionDescription description={description} />}

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-8 justify-between items-center">
                    {articles && articles.map((article) => (
                        <ArticlesCard key={article.id} {...article} />
                    ))}
                </div>
            </div>
        </div>
    );
};