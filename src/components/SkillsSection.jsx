import { SectionHeader } from "./Typography";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";

export default function Skills({ portfolioData }) {
    const { languages, frameworks, data, aiMl, cloudTools } = portfolioData.skills;

    const skillCategories = [
        { title: "Languages", items: languages },
        { title: "Frameworks & Libraries", items: frameworks },
        { title: "Data & Databases", items: data },
        { title: "AI & ML", items: aiMl },
        { title: "Cloud & DevOps", items: cloudTools },
    ];

    return (
        <section id="skills" className="space-y-6">
            <SectionHeader title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="bg-card/50 border border-muted/50 hover:border-primary/10 transition-colors shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {category.items.map((skill, i) => (
                                <Badge variant="secondary" key={i} className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}