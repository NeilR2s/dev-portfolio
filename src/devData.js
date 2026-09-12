export const portfolioData = {
    site: {
        origin: "https://www.neilart.us",
        updated: "2026-09-05",
        title: "Neil Artus | Backend & AI Software Engineer",
        tagline: "Backend systems. Applied AI. Cloud infrastructure.",
        description: "Neil Artus builds distributed asynchronous backend systems, AI Agents, and enterprise cloud infrastructure. Explore engineering projects, experience at Emerson and JG Summit, and his resume.",
        socialImage: "/social-preview.png",
    },

    personalInfo: {
        name: "Neil Artus",
        email: "artus.neil.c@gmail.com",
        role: "Backend & AI Software Engineer",
        summary: "I build distributed backend systems, applied AI, and cloud infrastructure. My work spans enterprise automation at Emerson and JG Summit, streaming research agents, and embedded AI prototypes. I focus on the systems behind the interface: APIs, data pipelines, authentication, and deployment.",
        resumePath: "/Artus-Resume.pdf",
        github: "https://github.com/NeilR2s",
        linkedin: "https://www.linkedin.com/in/neil-artus-652115304",
        icon: "/images/neil-icon.png"
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
        extraCurriculars: "Secretary & Codeyssey Program Head, Computer Science Program Council (CSPC); organized technical workshops and hackathons",
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
            startDate: "2026-03",
            endDate: "2026-07",
            responsibilities: [
                "Developed AI-assisted cybersecurity compliance workflows, MCP integrations, and telemetry services for internal engineering teams.",
                "Worked on .NET compliance reporting software, data access, and a React interface built with Radix UI.",
                "Built Azure DevOps CI/CD pipelines with SonarQube, Black Duck, and Coverity checks, artifact publishing, and IIS deployment.",
                "Implemented authentication and role-based access controls using ASP.NET Core, Okta, and Microsoft Entra ID.",
            ]
        },
        {
            company: "JG Summit Holdings Inc.",
            role: "AI Engineer Intern (GenAI Research)",
            date: "June 2025 - August 2025",
            startDate: "2025-06",
            endDate: "2025-08",
            responsibilities: [
                "Developed a financial research and reporting application with Flask, React, Azure OpenAI, and LangChain for treasury and corporate strategy workflows.",
                "Built retrieval and document-processing workflows with source citations and structured data validation using Pydantic and SQL.",
                "Documented service architecture, API integration, and deployment procedures for engineering handoff."
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
            id: "agos",
            focus: "Market research infrastructure",
            title: "AGOS: Agentic Philippine Market Intelligence Platform",
            summary: "Philippine market research platform with a React interface, FastAPI services, and ingestion pipelines for market, economic, and news data.",
            technologies: [
                "FastAPI",
                "Python",
                "DeepSeek",
                "SSE",
                "Cosmos DB",
                "Firebase",
                "SlowAPI",
                "React"
            ],
            impact: "Concurrent research, portfolio, and risk workers stream responses through Server-Sent Events. The backend uses DeepSeek, while Gemini supports news ingestion. Cosmos DB stores research data; Firebase verification and rate limiting support API access control.",
            deploymentLink: "https://agos-agentic.vercel.app",
            githubLink: "https://github.com/NeilR2s/agos",
            infoLink: "https://github.com/NeilR2s/agos/blob/6712e42b3f34a3edae460aaedd52221ca61bc83e/README.md",
            image: "agos",
            alt: "AGOS landing page introducing its Philippine market research workspace"
        },
        {
            id: "hr-automation",
            focus: "Reporting workflows",
            title: "Enterprise HR Automation Engine",
            summary: "Python-based attendance reporting workflow with authenticated access to employee records.",
            technologies: ["Python", "Hetzner", "Nginx", "Entra ID"],
            impact: "Combines report automation, Linux-hosted backend services, and Microsoft Entra ID role-based access. Source code and internal implementation records are not publicly available.",
            deploymentLink: null,
            githubLink: null,
            image: "albawani",
            alt: "Attendance report portal sign-in screen"
        },
        {
            id: "mediseen",
            focus: "Applied AI prototype",
            title: "MediSeen: Clinical Decision Support Platform",
            summary: "Clinical decision-support research prototype with a web interface and streamed AI responses.",
            impact: "Connects an AI-assisted interface to cloud-hosted backend services. This is a research prototype, not a substitute for professional medical assessment; source code is not publicly available.",
            technologies: ["FastAPI", "React", "Azure", "Cloudflare", "Tailwind CSS", "SSE"],
            deploymentLink: "https://mediseen-2.vercel.app",
            githubLink: null,
            image: "mediseen",
            alt: "MediSeen landing page introducing its clinical decision-support prototype"
        },
        {
            id: "cnn-osteo",
            focus: "Embedded AI research",
            title: "CNN-Osteo: Thermal-Image Screening Prototype",
            summary: "Research prototype using TensorFlow and MobileNetV3Small to classify thermal knee images into osteoarthritis-related categories, with Raspberry Pi as the deployment target.",
            impact: "The model card credits Neil with model training and inference, Joshua Lawrence C. Contreras with the UI, and Contreras, Hadji Luis L. Montealegre, and Francis G. Yaeso as the thesis researchers. Intended as a screening aid, not a standalone diagnostic tool; the model card documents limitations in generalizability.",
            technologies: ["Python", "TensorFlow", "MobileNet", "Raspberry Pi", "NumPy"],
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/raspberry-pi-osteoarthritis-detection",
            infoLink: "https://github.com/NeilR2s/raspberry-pi-osteoarthritis-detection/blob/60b145406b2995f1582db8183e3198a0053a9d7f/README.md",
            image: "osteo",
            alt: "Thermal image of knees shown in the CNN-Osteo research prototype",
        },
        {
            id: "alersense",
            focus: "IoT telemetry prototype",
            title: "AlerSense: Attention-Monitoring Prototype",
            summary: "Demonstration prototype combining ESP32 telemetry, a Python video-inference component, a Flask-SocketIO API, and a Next.js dashboard.",
            impact: "FreeRTOS queues separate sensor work from network transmission, with a drop-on-full policy. The API broadcasts telemetry to the dashboard.",
            technologies: [
                "C++",
                "ESP32",
                "FreeRTOS",
                "Flask-SocketIO",
                "Next.js",
            ],
            deploymentLink: "https://alersense.vercel.app",
            githubLink: "https://github.com/NeilR2s/alersense",
            infoLink: "https://github.com/NeilR2s/alersense/blob/9d94de561cac44c641d116819e108cb41acb0dd4/README.md",
            image: "alersense",
            alt: "AlerSense landing page showing its attention-monitoring demonstration"
        },
        {
            id: "dfa-visualizer",
            focus: "Language tooling",
            title: "DFA Visualizer: Formal Language Workbench",
            summary: "Browser-based React and TypeScript workbench for DFA simulation (automata and formal languages), right-linear grammar derivation, and derived PDA simulation.",
            impact: "Runs automata locally in TypeScript, with SVG visualizations and parity-check tooling against a Python reference implementation. The earlier Flask backend is archived and is not a dependency of the current browser runtime.",
            technologies: ["TypeScript", "React", "SVG", "Python reference tooling"],
            deploymentLink: "https://dfa-visualizer-nr2s.vercel.app/",
            githubLink: "https://github.com/NeilR2s/DFA-Visualizer",
            infoLink: "https://github.com/NeilR2s/DFA-Visualizer/blob/58ba6ea4b4bee5dc9e2e9d3ac46bf677eddc2ea5/README.md",
            image: "dfacompiler",
            alt: "DFA Visualizer workspace with state transitions and formal grammar controls"
        },
    ]
};

for (const project of portfolioData.projects) {
    const widths = project.image === "osteo" ? [480, 800, 1280] : [480, 800, 1280, 1600]
    project.preview = `/images/${project.image}-800.webp`
    project.previewSources = widths.map((width) => `/images/${project.image}-${width}.webp ${width}w`).join(", ")
    project.imageWidth = 800
    project.imageHeight = project.image === "osteo" ? 447 : 450
}
