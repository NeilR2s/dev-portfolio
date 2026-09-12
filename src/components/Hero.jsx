import { ArrowUpRight, Mail } from "lucide-react"

import { Button } from "./ui/button"

export default function Hero({ portfolioData }) {
    const { personalInfo } = portfolioData

    return (
        <section id="about">
            <div className="mx-auto max-w-350 px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                <div className="max-w-5xl">
                    <p className="text-body-sm font-bold uppercase text-ink">{personalInfo.role}</p>
                    <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] leading-[0.96] tracking-[-0.35px] text-balance text-ink md:text-display-hero">
                        {personalInfo.name}
                    </h1>
                    <p className="mt-8 max-w-4xl font-serif text-body-serif-lg text-ink">
                        {personalInfo.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button variant="default" size="lg" asChild className="rounded-none">
                            <a href={personalInfo.resumePath} download={`${personalInfo.name} Resume.pdf`}>
                                Download Resume
                            </a>
                        </Button>

                        <Button variant="outline" asChild className="rounded-none">
                            <a href={`mailto:${personalInfo.email}`}>
                                <Mail className="size-4" aria-hidden="true" />
                                Email me
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="mt-12 grid border-t border-hairline sm:grid-cols-2">
                    {[
                        { label: "GitHub", href: personalInfo.github },
                        { label: "LinkedIn", href: personalInfo.linkedin },
                    ].map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex min-h-14 items-center justify-between py-3 text-body-sm font-bold text-ink outline-none underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${index === 0 ? "border-b border-hairline sm:border-r sm:border-b-0 sm:pr-5" : "sm:pl-5"}`}
                        >
                            <span>{link.label}</span>
                            <span className="flex items-center gap-1">
                                Visit profile
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                                <span className="sr-only"> (opens in a new tab)</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
