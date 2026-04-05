export const ServiceBadge: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-xl font-light">
            {title}
        </div>
    );
}