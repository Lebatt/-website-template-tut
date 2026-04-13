export const ServiceBadge: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-lg font-light">
            {title}
        </div>
    );
}