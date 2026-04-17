import blackIcon from "./assets/neil-black-icon.png"
import whiteIcon from "./assets/neil-white-icon.png"

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
        degree: "Bachelor of Science in Computer Science with Specialization in Intelligent Systems",
        honors: "GPA 3.5",
        relevantCoursework: [
            "Programming",
            "Data Structures and Algorithms",
            "Machine Learning",
            "Databases",
            "Web Development",
            "Networking",
            "Operating Systems"
        ],
        extraCurriculars: "Secretary, Codessey Program Head - Computer Science Program Council"
    },
    experience: [
        {
            company: "Emerson",
            role: "AI/Cybersecurity Intern",
            date: "March 2026 - Present",
            responsibilities: [
                "Designed AI Agents using Semantic Kernel and Azure Foundry for detecting software security vulnerabilities. ",
                "Architected and developed upgrades to cybersecurity compliance software for Emerson DeltaV using .NET 8.",
                "Explored potential AI development risks and incorporated mitigations where applicable.",
                "Used Typescript to create and use proprietary UI components.",
            ]
        },
        {
            company: "Albawani Co.",
            role: "Volunteer Software Engineer",
            date: "August 2025 - January 2026",
            responsibilities: [
                "Developed an internal HR automation tool that generates an attendance summary report for 10,000+ employees.",
                "Integrated the system with existing IT infrastructure on Hetzner bare-metal servers using Python.",
                "Implemented authentication and role-based access control using Microsoft Entra ID to protect employee data."
            ]
        },
        {
            company: "JG Summit Holdings Inc.",
            role: "GenAI Research Intern",
            date: "June 2025 - August 2025",
            responsibilities: [
                "Developed and deployed a full-stack GenAI application for the Treasury Department, utilizing Azure OpenAI and LangChain to automate complex data retrieval tasks.",
                "Built robust data validation pipelines using SQL, Pandas, and Pydantic, ensuring high-fidelity outputs by programmatically comparing LLM responses against ground-truth scraped data.",
                "Accelerated the turnover process by engineering a modular architecture and comprehensive documentation, enabling full-time engineers to deploy production code within 3 days of transfer.",
                "Collaborated with an Agile team to transform raw financial data requirements into a working Proof of Concept (POC), bridging the gap between technical constraints and business needs."
            ]
        }
    ],
    skills: {
        languages: ["Python", "JavaScript", "Go"],
        frameworks: [
            "FastAPI",
            "Flask",
            "React",
            "Tailwind CSS",
            "TensorFlow",
            "PyTorch",
            "LangChain"
        ],
        cloudTools: [
            "Azure",
            "Google Cloud",
            "Hetzner",
            "Nginx",
            "Docker",
            "VertexAI",
            "Pinecone"
        ]
    },
    projects: [
        {
            title: "Albawani HR Request Form",
            summary: "An attendance request form with role-based access control via Microsoft EntraID to simplify attedance report generation. Integrated the system with existing IT infrastructure on Hetzner bare-metal servers.",
            impact: "August 2025 - December 2025",
            technologies: ["Azure", "EntraID", "Flask", "Javascript", "TailwindCSS", "Hetzner"],
            impact: "Simplified internal HR operations by developing an internal tool to automate employee attendance tracking.",
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/albawani-request-form",
        },
        {
            title: "MediSeen",
            summary: "An AI-powered Progressive Web Application (PWA) providing real-time clinical decision support.",
            impact: "Reduced average request latency to 98ms via microservices and increased system usability scores by 15%.",
            technologies: ["PyTorch", "Azure", "GCP", "React", "Tailwind", "FastAPI", "Cloudflare"],
            deploymentLink: "https://www.mediseen.site/",
            githubLink: null,
        },
        {
            title: "Formal Language Compiler",
            summary: "An interactive visualization engine for Deterministic Finite Automata (DFA) and formal languages.",
            impact: "Ensured 100% algorithmic accuracy for complex state transitions using rigorous Pytest coverage.",
            technologies: ["Flask", "Javascript", "Python", "pytest"],
            deploymentLink: "https://nr2s.pythonanywhere.com/",
            githubLink: "https://github.com/NeilR2s/DFA-Visualizer",
        },
        {
            title: "Bitbit",
            summary: "A Cold Start 2025 entry featuring a marketplace frontend designed to bootstrap user liquidity and transaction flow.",
            impact: "Built a responsive, high-performance Progressive Web Application (PWA) from scratch using React and Tailwind CSS.",
            technologies: ["React", "Tailwind"],
            deploymentLink: "https://cold-start-marketplace.vercel.app/",
            githubLink: "https://github.com/NeilR2s/cold-start-marketplace",
        },
        {
            title: "Thermal Camera Osteoarthritis Detector",
            summary: "An IoT-integrated deep learning solution utilizing thermal imaging for early osteoarthritis detection.",
            impact: "Awarded 'Research of the Year' at the LPU-Cavite Innovex 2025 Colloquium.",
            technologies: ["Python", "Tensorflow", "Numpy"],
            deploymentLink: null,
            githubLink: "https://github.com/NeilR2s/scripts",
            infoLink: "https://www.facebook.com/share/p/1D5AdFLZzQ/"
        }
    ]
};