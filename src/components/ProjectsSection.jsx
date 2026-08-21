import { SectionHeader } from "./Typography";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Projects({ portfolioData }) {
    return (
        <section id="projects" className="space-y-4">
            <SectionHeader title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden border border-muted/60 h-full">

                        <img
                            src={project.preview}
                            alt={`${project.title} preview`}
                            width="640"
                            height="360"
                            loading={index < 2 ? "eager" : "lazy"}
                            decoding="async"
                            fetchPriority={index === 0 ? "high" : "auto"}
                            className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-40"

                        />

                        <CardHeader className="pb-0.5 pt-6">
                            <CardTitle className="text-xl">{project.title}</CardTitle>

                            <CardDescription className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                                {project.summary}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex-grow space-y-6 pt-4">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <Badge variant="secondary" key={i} className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>


                        <CardFooter className="gap-3 pt-4">
                            {/* Logic to handle specific links */}
                            {project.githubLink ? (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <Github className="mr-0.5 size-4" />
                                        View Code
                                    </a>
                                </Button>
                            ) : (
                                <Button variant="outline" size="sm" disabled>
                                    <Github className="mr-0.5 size-4" />
                                    Private
                                </Button>
                            )}

                            {project.deploymentLink && (
                                <Button variant="default" size="sm" asChild>
                                    <a href={project.deploymentLink} target="_blank" rel="noreferrer">
                                        <ExternalLink className="mr-0.5 size-4" />
                                        Visit Site
                                    </a>
                                </Button>
                            )}

                            {project.infoLink && (
                                <Button variant="default" size="sm" asChild>
                                    <a href={project.infoLink} target="_blank" rel="noreferrer">
                                        <ExternalLink className="mr-0.5 size-4" />
                                        More Info
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))
                }
            </div >
        </section >
    );
}
