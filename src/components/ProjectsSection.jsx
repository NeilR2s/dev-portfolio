import { ArrowUpRight, Github } from "lucide-react"

import { Button } from "./ui/button"
import { SectionHeader } from "./Typography"

function ProjectMeta({ project }) {
    return (
        <p className="text-body-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">Stack</span> / {project.technologies.join(" / ")}
        </p>
    )
}

function ProjectActions({ project, featured = false }) {
    const links = [
        project.deploymentLink && { href: project.deploymentLink, label: "Live site", icon: <ArrowUpRight className="size-4" aria-hidden="true" /> },
        project.githubLink && { href: project.githubLink, label: "View source", icon: <Github className="size-4" aria-hidden="true" /> },
        project.infoLink && { href: project.infoLink, label: "Technical documentation", icon: <ArrowUpRight className="size-4" aria-hidden="true" /> },
    ].filter(Boolean)

    return (
        <div className="flex flex-wrap items-center gap-3">
            {!project.githubLink && (
                <span className="text-body-sm text-ink-soft">Source not published</span>
            )}
            {links.map(({ href, label, icon }, index) => (
                <Button key={label} variant={featured && index === 0 ? "default" : "outline"} size="sm" asChild className="rounded-none">
                    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} for ${project.title} (opens in a new tab)`}>
                        {label}
                        {icon}
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </Button>
            ))}
        </div>
    )
}

export default function Projects({ portfolioData, textOnly = false }) {
    const projects = portfolioData.projects

    return (
        <section id="projects" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-350 space-y-8 px-5 py-12 sm:px-6 lg:px-8">
                <SectionHeader id="projects-heading" eyebrow="Selected work" title="Projects" />

                <ul className={textOnly ? "space-y-8" : "grid gap-x-8 gap-y-10 md:grid-cols-2"}>
                    {projects.map((project, index) => {
                        const isLead = !textOnly && index === 0
                        const isStory = !textOnly && index > 2
                        const sizes = isLead
                            ? "(min-width: 1400px) 1336px, (min-width: 1024px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
                            : isStory
                                ? "(min-width: 768px) 256px, (min-width: 360px) 320px, calc(100vw - 40px)"
                                : "(min-width: 1400px) 652px, (min-width: 1024px) calc((100vw - 96px) / 2), (min-width: 768px) calc((100vw - 80px) / 2), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"

                        return (
                            <li key={project.id} className={isLead || isStory ? "md:col-span-2" : undefined}>
                                <article id={project.id} className={`h-full scroll-mt-20 border-b border-hairline pb-8 ${isStory ? "grid items-start gap-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8" : "flex flex-col"}`}>
                                    {!textOnly && (
                                        <img
                                            src={project.preview}
                                            srcSet={project.previewSources}
                                            sizes={project.imageSizes || sizes}
                                            alt={project.alt}
                                            width={project.imageWidth}
                                            height={project.imageHeight}
                                            loading={isLead ? "eager" : "lazy"}
                                            fetchPriority={isLead ? "high" : undefined}
                                            decoding="async"
                                            className={`w-full rounded-none border border-hairline bg-canvas-soft object-contain ${isLead || isStory ? "aspect-video" : "aspect-[4/3]"} ${isStory ? "max-w-80 md:max-w-none" : ""}`}
                                        />
                                    )}
                                    <div className={isLead ? "mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12" : `flex flex-1 flex-col ${isStory || textOnly ? "" : "mt-5"}`}>
                                        <div>
                                            {project.focus && <p className="mb-3 text-body-sm font-bold uppercase text-ink">{project.focus}</p>}
                                            <h3 className={`font-display text-balance text-ink ${isLead ? "text-display-md lg:text-display-lg" : "text-display-sm"}`}>{project.title}</h3>
                                        </div>
                                        <div className={`flex flex-1 flex-col ${isLead ? "" : "mt-4"}`}>
                                            <p className="font-serif text-body-serif-md text-ink">{project.summary}</p>
                                            {/* <p className="mt-4 font-serif text-body-serif-md text-ink">
                                                <span className="mb-1 block font-sans text-body-sm font-bold">Implementation notes</span>
                                                {project.impact}
                                            </p> */}
                                            <div className="mt-5"><ProjectMeta project={project} /></div>
                                            <div className="mt-auto pt-5"><ProjectActions project={project} featured={isLead} /></div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
