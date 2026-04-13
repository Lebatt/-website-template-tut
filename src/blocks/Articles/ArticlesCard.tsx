import { Media } from "@/components/Media";
import { Card, CardContent } from "@/components/ui/card";
import { Category, Post } from "@/payload-types";

export const ArticlesCard: React.FC<Post> = ({ title, categories, meta }) => {
    const categoryDocs = categories as Category[];
    
    return (
        <Card className="rounded-lg border-primary/30 bg-linear- from-30% from-primary/30 to-transparent max-w-xl">
            <CardContent className="p-0">
                <div className="grid grid-cols-[1fr_1fr] gap-6">
                    <div className="relative rounded-lg -m-px overflow-hidden">
                        <Media
                            resource={meta?.image}
                            className="object-contain h-48 w-48 rounded-lg"
                            fill
                        />
                    </div>
                    <div className="flex flex-col gap-4 py-8">
                        {categoryDocs && categoryDocs.length > 0 && (
                            <div className="flex gap-2">
                                {categoryDocs.map((category) => (
                                    <span
                                        key={category.id}
                                        className="text-xs font-medium text-primary uppercase"
                                    >
                                        {category.title}
                                    </span>
                                ))}
                            </div>
                        )}
                        <h4 className="text-lg font-bold max-w-48">{title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-3">
                            {meta?.description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}