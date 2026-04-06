"use client";

import { ArticlesBlock as ArticlesBlockProps, Post } from "@/payload-types";
import { ArticlesCard } from "./ArticlesCard";

export const ArticlesBlock: React.FC<ArticlesBlockProps> = ({
    title,
    subtitle,
    description,
    posts,
}) => {
    const articles = posts as Post[];

    return (
        <div className="container pt-16">
            {subtitle && <h3 className="text-sm uppercase text-primary text-center mb-4">{subtitle}</h3>}
            <h2 className="text-6xl font-bold mb-4 text-center">{title}</h2>
            <p className="text-lg mb-12 text-center">{description}</p>
            <div className="grid grid-cols-2 gap-8 justify-between items-center">
                {articles && articles.map((article) => (
                    <ArticlesCard key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
};