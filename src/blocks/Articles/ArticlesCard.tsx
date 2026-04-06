import { Media } from "@/components/Media";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/payload-types";

export const ArticlesCard: React.FC<Post> = ({ title, content, meta }) => {
    console.log("Article Meta:", meta);
    return (
        <Card className="rounded-lg border-primary">
            <CardContent className="p-0">
                <div className="flex items-center gap-4">
                    <div className="relative rounded-lg -m-px overflow-hidden w-48 h-48">
                        <Media
                            resource={meta?.image}
                            className="object-contain h-48 w-48 rounded-lg"
                            fill
                        />
                    </div>
                    <h4 className="text-xl font-bold">{title}</h4>
                </div>
            </CardContent>
        </Card>
    );
}