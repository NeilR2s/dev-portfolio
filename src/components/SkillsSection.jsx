import { SectionHeader } from "./Typography"

export default function Skills({ portfolioData }) {
    const { languages, frameworks, data, aiMl, cloudTools, securityTools } = portfolioData.skills

    const skillCategories = [
        { title: "Languages", items: languages },
        { title: "Frameworks & Libraries", items: frameworks },
        { title: "Data & Databases", items: data },
        { title: "AI & ML", items: aiMl },
        { title: "Cloud & DevOps", items: cloudTools },
        { title: "Security & Tooling", items: securityTools },
    ]

    return (
        <section id="skills" aria-labelledby="skills-heading">
            <div className="mx-auto max-w-[1400px] space-y-10 px-5 py-12 sm:px-6 lg:px-8">
                <SectionHeader id="skills-heading" eyebrow="Technical toolkit" title="Skills" />
                <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="border-t border-hairline pt-4">
                            <dt className="text-body-md font-bold text-ink">{category.title}</dt>
                            <dd className="mt-3 font-serif text-body-serif-md text-ink">{category.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
