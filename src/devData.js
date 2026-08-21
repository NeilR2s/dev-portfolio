import blackIcon from "./assets/neil-black-icon.png"
import whiteIcon from "./assets/neil-white-icon.png"
import agosScreenshot from "./assets/agos.png"
import albawaniScreenshot from "./assets/albawani.png"
import alersenseScreenshot from "./assets/alersense.png"
import mediseenScreenshot from "./assets/mediseen.png"
import osteoScreenshot from "./assets/osteo.jpeg"
import dfaScreenshot from "./assets/dfacompiler.png"

export const portfolioData = {
    personalInfo: {
        name: "Neil Artus",
        email: "artus.neil.c@gmail.com",
        summary: "Software Engineer specializing in backend systems, Agentic AI architectures, and cloud deployments. Experienced in building production microservices, full-stack web applications, and automated CI/CD pipelines across Azure and bare-metal environments. Proven background in delivering high-impact automation tools, secure API integrations, and low-latency data pipelines.",
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
        honors: "Magna Cum Laude | GPA 3.52/4.0 | TOEIC 955/990",
        relevantCoursework: [
            "Data Structures & Algorithms",
            "Machine Learning",
            "Database Systems",
            "Web Development",
            "Computer Networks",
            "Operating Systems",
            "Software Engineering"
        ],
        extraCurriculars: "Secretary & Codeyssey Program Head – Computer Science Program Council (CSPC); managed technical workshops and hackathons for 1,000+ students",
        achievements: [
            "CSPC Leadership Award Recipient",
            "Dean's Honor List"
        ]
    },
    experience: [
        {
            company: "Emerson",
            role: "AI Engineer Intern",
            date: "March 2026 - July 2026",
            responsibilities: [
                "Automated cybersecurity compliance workflows using Azure AI Foundry Agents, custom hardened Model Context Protocol (MCP) integrations (Black Duck, OpenSSF, GitHub), and multi-agent orchestration graphs, saving 1,600+ analyst hours and $85,000+ in operational expenses.",
                "Built a real-time telemetry monitoring dashboard for AI agents and supply chain security metrics with sub-100ms p99 latency, establishing organizational secure development guidelines for MCP implementations.",
                "Upgraded and deployed security hotfixes for Emerson DeltaV compliance software using .NET 8, accelerating vulnerability mitigation and report generation speeds by 30%.",
                "Designed and maintained automated Azure DevOps CI/CD pipelines, reducing manual build and deployment cycles by 85%.",
                "Refactored legacy design system UI components using React, Radix UI, TanStack Table, and Recharts.",
                "Implemented enterprise authentication and access management using Okta, Microsoft Entra ID (Azure AD), and .NET middleware.",
            ]
        },
        {
            company: "Albawani Co.",
            role: "Freelance Software Engineer",
            date: "August 2025 - January 2026",
            responsibilities: [
                "Developed an internal HR automation application in Python that processes and generates attendance summary reports for 10,000+ employees, cutting manual reporting time by 50% per pay cycle.",
                "Deployed and configured backend services on Hetzner bare-metal Linux servers, integrating directly with existing enterprise IT infrastructure.",
                "Implemented secure authentication and Role-Based Access Control (RBAC) using Microsoft Entra ID to safeguard employee personal records."
            ]
        },
        {
            company: "JG Summit Holdings Inc.",
            role: "AI Engineer Intern (GenAI Research)",
            date: "June 2025 - August 2025",
            responsibilities: [
                "Developed and deployed a full-stack Business Intelligence dashboard using Azure OpenAI and LangChain, delivering automated financial reporting workflows to Treasury and Corporate Strategy teams.",
                "Built an Agentic RAG (Retrieval-Augmented Generation) pipeline across 12+ enterprise data sources, decreasing manual financial analysis turnaround by 70%.",
                "Engineered automated data validation pipelines using SQL and Pydantic, processing 500+ monthly data points with 93% validation accuracy.",
                "Authored modular system architecture blueprints and technical documentation, enabling handoff and production deployment by 1 senior and 2 junior engineers within 3 days."
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
            "OpenTelemetry"
        ],
        data: [
            "Cosmos DB",
            "PostgreSQL",
            "Qdrant",
            "Microsoft SQL Server",
            "Entity Framework",
            "SQLite",
            "Pandas",
            "Pydantic"
        ],
        aiMl: [
            "Azure OpenAI",
            "Azure AI Foundry",
            "LangChain",
            "LangGraph",
            "Semantic Kernel",
            "Google Vertex AI",
            "PyTorch",
            "TensorFlow",
            "Retrieval-Augmented Generation (RAG)",
            "Model Context Protocol (MCP)"
        ],
        cloudTools: [
            "Azure DevOps",
            "Docker",
            "Firebase",
            "Hetzner",
            "Nginx",
            "Gunicorn",
            "Ubuntu Linux",
            "Windows Server 2022",
            "CI/CD"
        ],
        securityTools: [
            "Microsoft Entra ID (Azure AD)",
            "Okta",
            "Role-Based Access Control (RBAC)",
            "SonarQube",
            "Black Duck",
            "Coverity",
            "Cloudflare",
            "Git"
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
            githubLink: null,
            preview: albawaniScreenshot
        },
        {
            title: "CNN-Osteo",
            summary: "Thermal imaging CNN for automated osteoarthritis detection using MobileNet and TensorFlow, deployed on Raspberry Pi 5 with real-time thermal diagnostics.",
            impact: "Awarded 1st place at the Cavite Innovex 2025 Colloquium (COESCA Research of the Year). Trained on 2,236 medical images with 99.40% validation accuracy and 98.19% test accuracy.",
            technologies: ["Python", "TensorFlow", "Numpy", "MobileNet", "Raspberry Pi"],
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/raspberry-pi-osteoarthritis-detection",
            infoLink: "https://www.facebook.com/share/p/1D5AdFLZzQ/",
            preview: osteoScreenshot,
        },
        {
            title: "AlerSense",
            summary: "An ESP32-based attention-monitoring system with a Python inference data hub, Flask-SocketIO API, and Next.js real-time alert dashboard.",
            impact: "Implemented HTTP JSON telemetry ingestion for heart rate, SpO2, temperature, and related sensor metrics with real-time broadcast without page reloads.",
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
        {
            title: "Formal Language Compiler",
            summary: "Interactive web-based DFA simulator and compiler using TypeScript, Flask, and SVG rendering to model state transitions and formal grammar logic in real time.",
            impact: "Decoupled automata simulation algorithms from API routing logic with pytest suites verifying strict compliance with formal language specifications.",
            technologies: ["TypeScript", "Flask", "Python", "pytest"],
            deploymentLink: "https://dfa-visualizer-nr2s.vercel.app/",
            githubLink: "https://github.com/NeilR2s/DFA-Visualizer",
            preview: dfaScreenshot
        },
    ]
};
