import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Hero({ portfolioData }) {
    const { personalInfo } = portfolioData;

    return (
        <section id="about" className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center space-x-6">
            <Avatar className="size-30 md:size-40 border-0 border-primary/10">
                <AvatarImage class="isDarkable" src={personalInfo.iconBlack} alt={personalInfo.name} />
                <AvatarFallback className="text-4xl">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-4 items-start">
                <h1 className="text-4xl font-normal leading-tight">{personalInfo.name}</h1>
                <div className="flex items-center gap-2 prose text-base text-muted-foreground">
                    <ReactMarkdown>{personalInfo.summary}</ReactMarkdown>
                </div>
                <div className="flex flex-wrap pt-2 space-x-2 space-y-1">

                    <Button variant="default" size="default">
                        <a href={personalInfo.resumePath} target="_blank" rel="noreferrer" download={personalInfo.name + " Resume.pdf"}>
                            Download Resume
                        </a>
                    </Button>

                    <Button variant="ghost" size="default" asChild>
                        <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noreferrer">
                            <Mail className="size-4" />
                            <span className="ml-2">{personalInfo.email}</span>
                        </a>
                    </Button>

                    <Button variant="ghost" size="default" asChild>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer">
                            <Github className="size-4" />
                            <span className="ml-2">GitHub</span>
                        </a>
                    </Button>

                    <Button variant="ghost" size="default" asChild>
                        <a href={personalInfo.linkedin}>
                            <Linkedin className="size-4" />
                            <span className="ml-2">Linkedin</span>
                        </a>
                    </Button>

                </div>
            </div>
        </section>
    );
}