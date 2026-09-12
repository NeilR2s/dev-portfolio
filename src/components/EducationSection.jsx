import { SectionHeader } from "./Typography"

export default function Education({ portfolioData, showCoursework = false }) {
    const { education } = portfolioData

    return (
        <section id="education" aria-labelledby="education-heading">
            <div className="mx-auto max-w-[1400px] space-y-8 px-5 py-12 sm:px-6 lg:px-8">
                <SectionHeader id="education-heading" eyebrow="Academic foundation" title="Education" />
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
                    <div className="border-t border-hairline pt-4">
                        <h3 className="font-display text-display-sm text-ink">{education.institution}</h3>
                        <p className="mt-4 font-serif text-body-serif-md text-ink">{education.degree}</p>
                    </div>
                    <dl className="space-y-5">
                        <div className="border-t border-hairline pt-4">
                            <dt className="text-body-sm font-bold">Honors &amp; achievements</dt>
                            <dd className="mt-2 space-y-2 font-serif text-body-serif-md">
                                <p>{education.honors}</p>
                                <ul className="list-disc pl-5">
                                    {education.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                                </ul>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-body-sm font-bold">Leadership</dt>
                            <dd className="mt-2 font-serif text-body-serif-md">{education.extraCurriculars}</dd>
                        </div>
                        {showCoursework && education.relevantCoursework.length > 0 && (
                            <div>
                                <dt className="text-body-sm font-bold">Relevant coursework</dt>
                                <dd className="mt-2 font-serif text-body-serif-md">{education.relevantCoursework.join(", ")}</dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>
        </section>
    )
}
