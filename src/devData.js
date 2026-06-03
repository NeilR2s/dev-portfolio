import blackIcon from "./assets/neil-black-icon.png"
import whiteIcon from "./assets/neil-white-icon.png"
import agosScreenshot from "./assets/agos.png"
import albawaniScreenshot from "./assets/albawani.png"
import alersenseScreenshot from "./assets/alersense.png"
import bitbitScreenshot from "./assets/bitbit.png"
import mediseenScreenshot from "./assets/mediseen.png"
import osteoScreenshot from "./assets/osteo.jpeg"
import dfaScreenshot from "./assets/dfacompiler.png"

export const portfolioData = {
    personalInfo: {
        name: "Neil Artus",
        email: "artus.neil.c@gmail.com",
        summary: "Software Engineer specializing in Python backend systems, Progressive Web Applications, and AI-powered applications, with hands-on experience deploying production workloads on Azure and bare-metal infrastructure.",
        resumePath: "/Artus-Resume.pdf",
        github: "https://github.com/NeilR2s",
        linkedin: "https://www.linkedin.com/in/neil-artus-652115304",
        avatar: "https://avatars.githubusercontent.com/u/147031843?s=400&u=067c4715586a2f79f241b60e7ace459a931c0915&v=4",
        iconWhite: whiteIcon,
        iconBlack: blackIcon
    },
    education: {
        institution: "De La Salle University - Dasmariñas",
        degree: "Bachelor of Science in Computer Science with Specialization in Intelligent Systems (AI)",
        honors: "GPA 3.5/4.0",
        relevantCoursework: [
            "Programming",
            "Data Structures",
            "Algorithms",
            "Machine Learning",
            "Databases",
            "Web Development",
            "Networking",
            "Operating Systems"
        ],
        extraCurriculars: "Secretary, Codessey Program Head - Computer Science Program Council",
        achievements: [
            "Consistent Dean's Lister (2022-2025)",
            "Leadership Awardee Recipient"
        ]
    },
    experience: [
        {
            company: "Emerson",
            role: "AI Engineer Intern",
            date: "March 2026 - July 2026",
            responsibilities: [
                "Designed AI agents with Semantic Kernel and Azure Foundry for detecting software security vulnerabilities.",
                "Developed upgrades and implemented bug fixes to Emerson DeltaV cybersecurity compliance software using .NET 8, decreasing interim release cycle by 2 weeks.",
                "Built Azure DevOps CI/CD pipelines that reduced manual build and deploy time by 85%.",
                "Delivered workflow improvements that saved 800 analyst hours and reduced completion time to 67 seconds, contributing to $50,000 in reported cost savings.",
                "Contributed to Model Context Protocol (MCP) secure development compliance software and hardening guidelines, creating coverage for 50% of current departmental AI Agent projects.",
            ]
        },
        {
            company: "Albawani Co.",
            role: "Freelance Software Engineer",
            date: "August 2025 - January 2026",
            responsibilities: [
                "Developed an internal HR automation tool in Python that generates attendance summary reports for 10,000+ employees.",
                "Integrated the system with existing IT infrastructure on Hetzner bare-metal servers using Python.",
                "Implemented authentication and role-based access control using Microsoft Entra ID to protect employee data."
            ]
        },
        {
            company: "JG Summit Holdings Inc.",
            role: "GenAI Research Intern",
            date: "June 2025 - August 2025",
            responsibilities: [
                "Developed and deployed a full-stack GenAI BI Dashboard for the Treasury Department using Azure OpenAI, LangChain, and agentic RAG across 12+ data sources, reducing manual workflow time by 70%.",
                "Built data validation pipelines with SQL and Pydantic, processing 500+ monthly data points and achieving 93% accuracy.",
                "Structured the project architecture and documentation for a 4-component system, enabling 3 full-time engineers to deploy to production within 3 days of handoff."
            ]
        }
    ],
    skills: {
        languages: ["Python", "Go", "C#", "JavaScript", "TypeScript", "SQL"],
        frameworks: [
            ".NET",
            "FastAPI",
            "Flask",
            "React",
            "Next.js",
            "Vite",
            "Tailwind CSS",
            "Fiber",
            "PyTorch",
            "LangChain",
            "Langsmith",
            "Semantic Kernel"
        ],
        data: [
            "Cosmos DB",
            "PostgreSQL",
            "Qdrant",
            "Microsoft SQL Server",
            "SQLite",
            "Pandas",
            "Pydantic"
        ],
        aiMl: [
            "PyTorch",
            "LangChain",
            "Langsmith",
            "Semantic Kernel",
            "Google VertexAI",
            "Pinecone",
            "Azure Foundry",
            "Azure OpenAI"
        ],
        cloudTools: [
            "Azure DevOps",
            "Docker",
            "Firebase",
            "Hetzner",
            "Nginx",
            "Gunicorn",
            "Ubuntu",
            "Windows Server 2022",
            "Power Automate"
        ]
    },
    projects: [
        {
            title: "AGOS",
            summary: "A multi-service market intelligence platform for Philippine financial data. Features data ingestion pipelines processing 350+ data points every 15 minutes for real-time stock forecasting, reducing ingestion latency by over 60%.",
            technologies: [
                "React",
                "Vite",
                "FastAPI",
                "Python",
                "Cosmos DB",
                "Firebase",
                "Gemini API",
                "LangGraph",
                "Tavily",
                "Chronos"
            ],
            impact: "Hardened microservices with Firebase JWT verification, parameterized Cosmos DB queries, and rate limiting. Engineered a stateful, streaming financial research agent using LangGraph and Gemini API with 5 custom tool registries and sub-second streaming latency.",
            deploymentLink: "https://agos-agentic.vercel.app",
            githubLink: "https://github.com/NeilR2s/agos",
            preview: agosScreenshot
        },
        {
            title: "MediSeen",
            summary: "An award-winning (1st place) Agentic AI progressive web application for clinical decision support, recognized at International Conference on Artificial Intelligence (ICAI 2026).",
            impact: "Engineered Azure-based microservices with 98ms database query latency and 400ms average AI time-to-first-token latency. Developed responsive mobile viewport; increased system usability score by 15%. Hardened with middleware-level protections and Cloudflare DNS configuration.",
            technologies: ["PyTorch", "Azure", "GCP", "React", "Tailwind", "FastAPI", "Cloudflare"],
            deploymentLink: "https://mediseen-2.vercel.app",
            githubLink: null,
            preview: mediseenScreenshot
        },
        {
            title: "Albawani HR Request Form",
            summary: "An attendance request form with role-based access control via Microsoft EntraID to simplify attendance report generation. Integrated the system with existing IT infrastructure on Hetzner bare-metal servers.",
            technologies: ["Azure", "EntraID", "Flask", "Javascript", "TailwindCSS", "Hetzner"],
            impact: "Simplified internal HR operations by developing an internal tool to automate employee attendance tracking for 10,000+ employees.",
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/albawani-request-form",
            preview: albawaniScreenshot
        },
        {
            title: "CNN-Osteo",
            summary: "An IoT-integrated deep learning solution utilizing thermal imaging for early osteoarthritis detection. Based on MobileNet architecture using TensorFlow.",
            impact: "Awarded 1st place at the Cavite Innovex 2025 Colloquium. Reported 99.40% validation accuracy and 98.19% test accuracy on 1,572 training images and 664 test images.",
            technologies: ["Python", "TensorFlow", "Numpy", "MobileNet"],
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/raspberry-pi-osteoarthritis-detection",
            infoLink: "https://www.facebook.com/share/p/1D5AdFLZzQ/",
            preview: osteoScreenshot,
        },
        {
            title: "AlerSense",
            summary: "An ESP32-based attention-monitoring system with a Python inference data hub, Flask-SocketIO API, and Next.js real-time alert dashboard.",
            impact: "Implemented HTTP JSON telemetry ingestion for heart rate, SpO2, temperature, and related sensor metrics, then broadcast processed alerts without page refresh.",
            technologies: [
                "C++",
                "ESP32",
                "Flask",
                "Next.js",
                "Firebase",
                "Azure",
            ],
            deploymentLink: "https://alersense.vercel.app",
            githubLink: "https://github.com/NeilR2s/alersense",
            preview: alersenseScreenshot
        },
        // {
        //     title: "Bitbit",
        //     summary: "A Cold Start 2025 entry featuring a marketplace frontend designed to bootstrap user liquidity and transaction flow.",
        //     impact: "Built a responsive, high-performance Progressive Web Application (PWA) from scratch using React and Tailwind CSS.",
        //     technologies: ["React", "Tailwind"],
        //     deploymentLink: "https://bitbit-marketplace.vercel.app",
        //     githubLink: "https://github.com/NeilR2s/cold-start-marketplace",
        //     preview: bitbitScreenshot
        // },
        {
            title: "Formal Language Compiler",
            summary: "A web compiler for visualizing deterministic formal languages. Separated DFA simulation logic from Flask routes with pytest coverage for behavior against formal definitions.",
            impact: "Ensured 100% algorithmic accuracy for complex state transitions using rigorous Pytest coverage.",
            technologies: ["TypeScript", "Flask", "Python", "pytest"],
            deploymentLink: "https://dfa-visualizer-nr2s.vercel.app/",
            githubLink: "https://github.com/NeilR2s/DFA-Visualizer",
            preview: dfaScreenshot
        },
    ]
};
