import { SectionHeader } from "./Typography";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";

export default function Skills({ portfolioData }) {
    const { languages, frameworks, cloudTools } = portfolioData.skills;
    return (
        <section id="skills" className="space-y-6">
            <SectionHeader title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/50 border border-muted/50 hover:border-primary/10 transition-colors shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Languages</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {languages.map((skill, i) => (
                            <Badge variant="secondary" key={i} className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>
                <Card className="bg-card/50 border border-muted/50 hover:border-primary/10 transition-colors shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Frameworks & Libraries</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {frameworks.map((skill, i) => (
                            <Badge variant="secondary" key={i} className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>
                <Card className="bg-card/50 border border-muted/50 hover:border-primary/10 transition-colors shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Cloud Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {cloudTools.map((skill, i) => (
                            <Badge variant="secondary" key={i} className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}