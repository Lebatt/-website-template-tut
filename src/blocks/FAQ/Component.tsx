import RichText from '@/components/RichText'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQBlock as FAQBlockProps } from "@/payload-types";

export const FAQBlock: React.FC<FAQBlockProps> = ({ title, description, items }) => {
    return (
        <div className="w-full bg-foreground py-16 px-32">
            <div className="container flex flex-col">
                <h2 className="text-6xl font-bold mb-4 text-background text-center">{title}</h2>
                <p className="text-lg mb-12 text-background/80 text-center">{description}</p>

                <Accordion type="single" collapsible defaultValue="item-1" className='max-w-lg mx-auto gap-8'>
                    {(items || []).map((item, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index} className='border-b-0 bg-secondary rounded-lg px-4 py-1'>
                            <AccordionTrigger className='items-center **:data-[slot=accordion-trigger-icon]:p-1.5 **:data-[slot=accordion-trigger-icon]:size-8 **:data-[slot=accordion-trigger-icon]:text-primary-foreground **:data-[slot=accordion-trigger-icon]:bg-primary **:data-[slot=accordion-trigger-icon]:rounded-full'>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.answer && <RichText data={item.answer} enableGutter={false} />}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}