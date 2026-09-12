import { SectionHeader } from "./Typography"

export default function Experience({ portfolioData, expanded = false }) {
    const { experience } = portfolioData

    return (
        <section id="experience" aria-labelledby="experience-heading">
            <div className="mx-auto max-w-350 space-y-10 px-5 py-12 sm:px-6 lg:px-8">
                <SectionHeader id="experience-heading" eyebrow="Career" title="Professional Experience" />
                <ol className="divide-y divide-hairline border-y border-hairline">
                    {experience.map((job) => {
                        const [startLabel, endLabel] = job.date.split(/\s[-\u2013\u2014]\s/)

                        return (
                            <li key={`${job.company}-${job.role}`} className="py-7">
                                <article className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
                                    <header>
                                        <p className="mb-3 text-body-sm font-bold text-ink">{job.company}</p>
                                        <h3 className="font-display text-display-sm text-ink">{job.role}</h3>
                                        <p className="mt-3 text-body-sm leading-relaxed text-ink-soft">
                                            <time dateTime={job.startDate}>{startLabel}</time>
                                            {endLabel && <> - {job.endDate ? <time dateTime={job.endDate}>{endLabel}</time> : endLabel}</>}
                                        </p>
                                    </header>
                                    <div className="min-w-0 font-serif text-body-serif-md text-ink">
                                        {expanded ? (
                                            <ul className="list-disc space-y-3 pl-5">
                                                {job.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                                            </ul>
                                        ) : (
                                            <>
                                                <p>{job.responsibilities[0]}</p>
                                                {job.responsibilities.length > 1 && (
                                                    <details className="mt-4 border-t border-hairline">
                                                        <summary className="min-h-11 cursor-pointer rounded-none py-3 font-sans text-body-sm font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                                                            Technical details<span className="sr-only">: {job.role} at {job.company}</span>
                                                        </summary>
                                                        <ul className="list-disc space-y-3 pt-2 pl-5">
                                                            {job.responsibilities.slice(1).map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                                                        </ul>
                                                    </details>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </section>
    )
}
