import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navigationLinks = [
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
]

export default function Header({ portfolioData }) {
    const { personalInfo } = portfolioData
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)

    useEffect(() => {
        if (!isMenuOpen) return undefined

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isMenuOpen])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas print:static">
            <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-8">
                <button
                    ref={menuButtonRef}
                    type="button"
                    className="inline-flex size-11 items-center justify-center justify-self-start rounded-none border border-ink text-ink outline-none transition-colors hover:bg-canvas-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
                </button>

                <a
                    href="/#about"
                    className="col-start-2 inline-flex min-h-11 items-center gap-2 justify-self-center rounded-none text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:col-start-1 lg:justify-self-start"
                    aria-label={`${personalInfo.name}, back to portfolio`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={personalInfo.icon} alt="" width="32" height="32" className="size-8 object-contain" />
                    <span className="hidden text-[13px] leading-none font-bold tracking-[0.12em] whitespace-nowrap uppercase min-[400px]:inline">
                        {personalInfo.name}
                    </span>
                </a>

                <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-5 lg:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="inline-flex min-h-11 items-center rounded-none text-body-sm font-bold text-ink uppercase outline-none underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <Button size="sm" asChild className="col-start-3 justify-self-end rounded-none px-3 sm:px-5">
                    <a href={personalInfo.resumePath} download={`${personalInfo.name} Resume.pdf`}>
                        Resume
                    </a>
                </Button>
            </div>

            <div id="mobile-navigation" hidden={!isMenuOpen} className="absolute inset-x-0 top-full border-b border-ink bg-canvas lg:hidden">
                <nav aria-label="Mobile navigation" className="mx-auto max-w-[1400px] px-5 py-2 sm:px-6">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="flex min-h-12 items-center rounded-none border-b border-hairline px-1 text-body-sm font-bold text-ink uppercase outline-none transition-colors last:border-b-0 hover:bg-canvas-soft focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                            onClick={() => {
                                setIsMenuOpen(false)
                                menuButtonRef.current?.focus()
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
