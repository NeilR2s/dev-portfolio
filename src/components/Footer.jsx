export default function Footer({ portfolioData }) {
    const { personalInfo } = portfolioData
    const year = portfolioData.site?.updated?.slice(0, 4)

    const footerLinks = [
        { label: "Experience", href: "/#experience" },
        { label: "Projects", href: "/#projects" },
        { label: "Skills", href: "/#skills" },
        { label: "Education", href: "/#education" },
    ]

    const linkClassName = "inline-flex min-h-11 w-fit items-center rounded-none text-body-sm text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(10rem,0.5fr))]">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={personalInfo.icon} alt="" width="48" height="48" className="size-12 object-contain invert" />
                            <p className="text-body-md font-bold tracking-[0.08em] uppercase">{personalInfo.name}</p>
                        </div>
                        <p className="mt-4 max-w-md font-serif text-body-serif-md text-white/75">{personalInfo.role}</p>
                    </div>

                    <nav aria-label="Footer navigation" className="flex flex-col">
                        <p className="text-body-sm font-bold uppercase text-white">Explore</p>
                        {footerLinks.map((link) => (
                            <a key={link.href} href={link.href} className={linkClassName}>{link.label}</a>
                        ))}
                    </nav>

                    <div className="flex flex-col">
                        <p className="text-body-sm font-bold uppercase text-white">Connect</p>
                        <a href={`mailto:${personalInfo.email}`} className={`${linkClassName} break-all`}>Email</a>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className={linkClassName}>GitHub<span className="sr-only"> (opens in a new tab)</span></a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={linkClassName}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
                        <a href={personalInfo.resumePath} download={`${personalInfo.name} Resume.pdf`} className={linkClassName}>Download resume PDF</a>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/30 pt-5 text-caption text-white/75">
                    © {year && `${year} `}{personalInfo.name}. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
