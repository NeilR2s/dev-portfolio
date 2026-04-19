import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { portfolioData } from "@/devData";


export default function Header({ portfolioData }) {
    const { personalInfo } = portfolioData;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex items-center justify-center">
            <div className="container max-w-7xl h-16 flex items-center justify-between px-10">
                <div className="flex items-center gap-2">
                    <Avatar className="size-10">
                            <AvatarImage class="isDarkable" src={personalInfo.iconBlack} alt={personalInfo.name} />
                        <AvatarFallback>{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {/* <span className="font-medium">{personalInfo.name}</span> */}
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#experience" className={navigationMenuTriggerStyle()}>
                                Experience
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#projects" className={navigationMenuTriggerStyle()}>
                                Projects
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#skills" className={navigationMenuTriggerStyle()}>
                                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href={portfolioData.personalInfo.resumePath}
                                target="_blank"
                                className={navigationMenuTriggerStyle()}
                            >
                                Resume
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </header>
    );
}