import RichText from '@/components/RichText'
import { SectionDescription } from '@/components/Section/description';
import { SectionTitle } from '@/components/Section/title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQBlock as FAQBlockProps } from "@/payload-types";

export const FAQBlock: React.FC<FAQBlockProps> = ({ title, description, items }) => {
    return (
        <div className="w-full bg-foreground pt-16 pb-8 px-32">
            <div className="container flex flex-col">
                {title && <SectionTitle title={title} className="text-background" />}
                {description && <SectionDescription description={description} className="text-background/80" />}

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