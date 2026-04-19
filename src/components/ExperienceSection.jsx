import { SectionHeader } from "./Typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience({ portfolioData }) {
    const { experience } = portfolioData;
    return (
        <section id="experience" className="space-y-6">
            <SectionHeader title="Professional Experience" />
            <Accordion type="multiple" className="w-full">
                {experience.map((job, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                            <div className="flex flex-col md:flex-row justify-between md:items-center w-full pr-4 gap-2">
                                <div className="text-left min-w-0">
                                    <h3 className="font-medium text-base text-foreground">{job.role}</h3>
                                    <p className="font-normal text-sm text-muted-foreground">{job.company}</p>
                                </div>
                                <p className="text-sm text-muted-foreground md:text-right shrink-0">{job.date}</p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                            <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section >
    );
}
