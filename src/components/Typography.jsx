export function SectionHeader({ id, eyebrow, title }) {
    return (
        <header className="border-t border-ink pt-3">
            <p className="text-body-sm font-bold uppercase text-ink">{eyebrow}</p>
            <h2 id={id} className="mt-5 max-w-4xl font-display text-display-md text-balance text-ink md:text-display-lg">
                {title}
            </h2>
        </header>
    )
}
