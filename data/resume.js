/**
 * Online Resume System - Resume Data
 * Static data file (replaces MySQL database)
 *
 * Edit this file to update your resume content.
 * All sections are rendered dynamically by JavaScript.
 */

const resumeData = {
    // =====================================================
    // Profile Information
    // =====================================================
    profile: {
        full_name: "Muhammad Izzun Mustaqim Bin Ismahdi",
        job_title: "Senior Software Engineer",
        email: "izzunmustaqim@gmail.com",
        phone: "+60 11-2305 5439",
        location: "Shah Alam, Selangor, Malaysia",
        linkedin_url: "https://www.linkedin.com/in/izzunmustaqim",
        website_url: "https://github.com/izzunmustaqim",
        portfolio_url: "https://izzunmustaqim.github.io/resume/",
        profile_image: "assets/images/izzun_white.png",
        summary: "Senior Software Engineer with 9+ years of experience designing, developing, and deploying full-stack applications across AI, web, and enterprise systems. Proven expertise in Next.js, TypeScript, Python, and Java, with strong track record building AI-powered solutions using OpenAI and Gemini APIs. Skilled in cloud and self-hosted deployment (Docker, VPS, Vercel), database design (PostgreSQL, MySQL, Supabase), and Agile delivery. Experienced in collaborating with global stakeholders, including Japan-based delivery teams, to deliver high-quality, scalable software solutions."
    },

    // =====================================================
    // Technical Skills (grouped by category)
    // =====================================================
    skills: [
        { skill_name: "Python", category: "Programming Languages", proficiency_level: "Expert" },
        { skill_name: "JavaScript", category: "Programming Languages", proficiency_level: "Expert" },
        { skill_name: "TypeScript", category: "Programming Languages", proficiency_level: "Advanced" },
        { skill_name: "Java", category: "Programming Languages", proficiency_level: "Advanced" },
        { skill_name: "PHP", category: "Programming Languages", proficiency_level: "Advanced" },
        { skill_name: "C#", category: "Programming Languages", proficiency_level: "Intermediate" },
        { skill_name: "C++", category: "Programming Languages", proficiency_level: "Intermediate" },
        { skill_name: "SQL", category: "Programming Languages", proficiency_level: "Advanced" },
        { skill_name: "HTML", category: "Programming Languages", proficiency_level: "Expert" },
        { skill_name: "CSS", category: "Programming Languages", proficiency_level: "Expert" },
        { skill_name: "Next.js", category: "Frameworks & Libraries", proficiency_level: "Expert" },
        { skill_name: "React", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Vue.js", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Angular", category: "Frameworks & Libraries", proficiency_level: "Intermediate" },
        { skill_name: "Django", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Flask", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "FastAPI", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Laravel", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Yii", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Spring Boot", category: "Frameworks & Libraries", proficiency_level: "Intermediate" },
        { skill_name: "ASP.NET Core", category: "Frameworks & Libraries", proficiency_level: "Intermediate" },
        { skill_name: "Blazor", category: "Frameworks & Libraries", proficiency_level: "Intermediate" },
        { skill_name: "Streamlit", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Bootstrap", category: "Frameworks & Libraries", proficiency_level: "Expert" },
        { skill_name: "jQuery", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "Android SDK", category: "Frameworks & Libraries", proficiency_level: "Advanced" },
        { skill_name: "OpenAI GPT-4o", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "Google Gemini", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "Vercel AI SDK", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "LangChain", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "scikit-learn", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "Pandas", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "RAG", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "Prompt Engineering", category: "AI & Machine Learning", proficiency_level: "Advanced" },
        { skill_name: "PostgreSQL", category: "Databases", proficiency_level: "Advanced" },
        { skill_name: "MySQL", category: "Databases", proficiency_level: "Advanced" },
        { skill_name: "SQLite", category: "Databases", proficiency_level: "Advanced" },
        { skill_name: "Supabase", category: "Databases", proficiency_level: "Intermediate" },
        { skill_name: "Docker", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "Docker Compose", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "Vercel", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "VPS Deployment", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "Cloudflare", category: "DevOps & Cloud", proficiency_level: "Intermediate" },
        { skill_name: "Azure DevOps", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "Git", category: "DevOps & Cloud", proficiency_level: "Expert" },
        { skill_name: "GitHub", category: "DevOps & Cloud", proficiency_level: "Expert" },
        { skill_name: "GitLab", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "Bitbucket", category: "DevOps & Cloud", proficiency_level: "Advanced" },
        { skill_name: "n8n", category: "Tools & Platforms", proficiency_level: "Advanced" },
        { skill_name: "Power BI", category: "Tools & Platforms", proficiency_level: "Intermediate" },
        { skill_name: "RESTful APIs", category: "Tools & Platforms", proficiency_level: "Expert" },
        { skill_name: "WSL", category: "Tools & Platforms", proficiency_level: "Advanced" },
        { skill_name: "Linux", category: "Tools & Platforms", proficiency_level: "Advanced" },
        { skill_name: "Jest", category: "Tools & Platforms", proficiency_level: "Advanced" },
        { skill_name: "React Testing Library", category: "Tools & Platforms", proficiency_level: "Advanced" }
    ],

    // =====================================================
    // Work Experience
    // =====================================================
    experiences: [
        {
            company_name: "iSoftStone Sdn Bhd",
            job_title: "Senior Software Engineer",
            location: "One City, Subang Jaya",
            start_date: "2025-08-01",
            end_date: null,
            is_current: true,
            description: "- Developed and deployed a full-stack AI chatbot using Next.js 16, TypeScript, and OpenAI GPT-4o-mini to assess organizational compliance readiness for Malaysia's Energy Efficiency and Conservation Act (EECA) 2024\n- Engineered a structured 10-question assessment flow with automated scoring (0\u2013100), readiness band classification, gap analysis, and lead capture through advanced prompt engineering\n- Built interactive UI components with real-time AI streaming, dynamic option buttons, and multi-select checkboxes using Vercel AI SDK v3 and React 19\n- Integrated PostgreSQL for session tracking, conversation logging, contact management, and user feedback storage\n- Embedded full regulatory text (P.U.(A) 466) into the system prompt, enabling legally accurate responses to EECA compliance queries\n- Containerized the application with multi-stage Docker builds and deployed via Docker Compose with PostgreSQL, supporting self-hosted (VPS + Subdomain) environments\n- Designed a provider-agnostic AI architecture supporting OpenAI, Groq, and Google Gemini with hot-swappable configuration\n- Achieved 54 passing automated tests with Jest and React Testing Library across all components and API routes"
        },
        {
            company_name: "Fujitsu Systems Global Solutions Management Sdn Bhd",
            job_title: "Systems Engineer",
            location: "Menara TM, Kuala Lumpur",
            start_date: "2021-09-01",
            end_date: "2025-11-30",
            is_current: false,
            description: "- Participated across the full software development lifecycle, including application design, implementation, testing, and troubleshooting\n- Coordinated with global stakeholders, including the Japan Delivery Unit (JDU) to ensure seamless collaboration and solution alignment across time zones\n- Authored PT Specifications listing all test cases to be performed after PG completion, ensuring thorough coverage and traceability\n- Executed manual testing based on PT Specifications and produced PT Evidence to validate functionality and defect-free delivery\n- Performed review activities using PT Review documents, contributing to higher-quality deliverables and a reduced defect rate\n- Developed Proof of Concept (POC) applications and introduced new tools to improve system capabilities and team productivity"
        },
        {
            company_name: "B2BE GSS Sdn Bhd",
            job_title: "Software Engineer",
            location: "Phileo Damansara, Petaling Jaya",
            start_date: "2018-04-01",
            end_date: "2021-08-31",
            is_current: false,
            description: "- Managed EDI services such as Purchase Orders and Invoices, creating a highly efficient automated and integrated business environment by eliminating manual processing\n- Analyzed supplier and buyer requirements for accurate data translation and mapping\n- Implemented requirements by mapping data to the B2BE data structure for seamless cross-system integration\n- Handled mapping validation, ensured documents met trading partner requirements, and supported troubleshooting of failed transactions\n- Tested translations using sample document types and released them to UAT and Production environments"
        },
        {
            company_name: "Opensoft Technologies Sdn Bhd",
            job_title: "Software Engineer",
            location: "Bandar Kinrara, Puchong",
            start_date: "2017-03-01",
            end_date: "2018-03-31",
            is_current: false,
            description: "- Collaborated with clients to gather documentation and analyze user requirements, producing detailed User Requirements Specification (URS) and Software Requirements Specification (SRS) documents\n- Coordinated User Acceptance Testing (UAT) and Final Acceptance Testing (FAT) to validate functionality and compliance with client expectations\n- Conducted system maintenance, troubleshooting, and debugging to ensure high performance and minimal downtime\n- Applied Agile methodologies and version control (Git) to streamline development and ensure effective team collaboration"
        },
        {
            company_name: "Telekom Malaysia",
            job_title: "Management Trainee \u2013 Network Service Engineer",
            location: "Menara TM, Kuala Lumpur",
            start_date: "2016-08-01",
            end_date: "2017-02-28",
            is_current: false,
            description: "- Troubleshot various network issues and collaborated with staff and vendors to resolve problems efficiently\n- Configured and installed routers, switches, and wireless controllers across enterprise environments\n- Identified and recommended necessary and optimal infrastructure improvements"
        },
        {
            company_name: "App Lab Sdn Bhd",
            job_title: "Practical Student \u2013 Android Developer",
            location: "PFCC, Puchong",
            start_date: "2016-02-01",
            end_date: "2016-07-31",
            is_current: false,
            description: "- Developed Android applications using Java and the Android SDK\n- Integrated Android applications with back-end services through RESTful APIs\n- Designed and prototyped proof-of-concept solutions to showcase innovative ideas"
        }
    ],

    // =====================================================
    // Education
    // =====================================================
    education: [
        {
            institution: "Universiti Teknologi MARA (UiTM), Jasin, Melaka",
            degree: "Bachelor of Computer Science (Hons.)",
            field_of_study: "Netcentric Computing",
            location: "Jasin, Melaka",
            start_date: "2014",
            end_date: "2017"
        },
        {
            institution: "Universiti Teknologi MARA (UiTM), Dungun, Terengganu",
            degree: "Diploma in Computer Science",
            field_of_study: "",
            location: "Dungun, Terengganu",
            start_date: "2011",
            end_date: "2014"
        },
        {
            institution: "Sekolah Menengah Teknik Jasin (SMTJ)",
            degree: "Sijil Pelajaran Malaysia (SPM)",
            field_of_study: "Mechanical Engineering",
            location: "Jasin, Melaka",
            start_date: "",
            end_date: "2010"
        }
    ],

    // =====================================================
    // Certifications
    // =====================================================
    certifications: [
        {
            cert_name: "PCEP-30-02 Certified Entry-Level Python Programmer",
            issuing_org: "Python Institute",
            issue_date: ""
        },
        {
            cert_name: "Microsoft Certified: Azure Fundamentals",
            issuing_org: "Microsoft",
            issue_date: ""
        }
    ],

    // =====================================================
    // Projects
    // =====================================================
    projects: [
        {
            project_name: "EECA Compliance Assessment Tool",
            description: "Developed an AI-powered customer support and compliance assessment chatbot with real-time streaming responses, smart intent classification, lead capture, feedback system, and analytics dashboard. Containerized with Docker, deployed to VPS, and validated with automated test cases.",
            technologies_used: "Next.js, TypeScript, Linux, VPS, Vercel AI SDK, PostgreSQL, Docker",
            project_url: "",
            start_date: "2026",
            end_date: "2026"
        },
        {
            project_name: "Smart Energy Anomaly Detector",
            description: "Intelligent energy monitoring system using machine learning to detect and explain anomalous power consumption patterns in household energy data.",
            technologies_used: "Python, scikit-learn, Docker, Streamlit",
            project_url: "",
            start_date: "2026",
            end_date: "2026"
        },
        {
            project_name: "PulseMetrics \u2013 SaaS Analytics Dashboard",
            description: "Production-quality analytics dashboard for a fictional subscription business featuring a sleek dark-mode design with glassmorphism effects, gradient accents, and smooth micro-animations.",
            technologies_used: "React 18, Vite, JavaScript, HTML5, CSS3, Recharts",
            project_url: "",
            start_date: "2026",
            end_date: "2026"
        },
        {
            project_name: "WhatsApp Food Ordering AI Agent",
            description: "AI-powered food ordering automation system that enables customers to place orders via WhatsApp, where an AI agent handles conversations, collects order details, and triggers internal restaurant processes.",
            technologies_used: "n8n, Docker, Cloudflare, WSL, WAHA (WhatsApp HTTP API), Google Sheets",
            project_url: "",
            start_date: "2025",
            end_date: "2025"
        },
        {
            project_name: "WBS Whiz \u2013 Automated Work Breakdown Structure Generator",
            description: "AI-powered desktop application that automatically generates Work Breakdown Structure documents from Fujitsu System Specification files. Parses screen layout and detailed specification Excel files, sends them to Gemini AI for complexity analysis and task scheduling, and produces a professional WBS Excel output (.xlsm) with formatted timelines.",
            technologies_used: "Python, Pandas, Openpyxl, Tkinter, OpenAI API, Gemini API, Azure DevOps, GitLab",
            project_url: "",
            start_date: "2025",
            end_date: "2025"
        },
        {
            project_name: "RAG Knowledge Base for SME Operations",
            description: "Built a Retrieval-Augmented Generation system enabling SMEs to securely search and chat with thousands of internal PDFs and SOPs.",
            technologies_used: "Python, FastAPI, LangChain, Docker",
            project_url: "",
            start_date: "2025",
            end_date: "2025"
        },
        {
            project_name: "Itochu Enex MFG Process Division (WBS Expense System)",
            description: "Enhanced user-facing features and built reusable components for the Itochu Enex WBS Expense System, including headers, footers, menu bars, dropdown lists, and overall layout structure.",
            technologies_used: "Vue.js, HTML, CSS",
            project_url: "",
            start_date: "2024",
            end_date: "2024"
        },
        {
            project_name: "Toyota / Hakuhodo Web Application",
            description: "Developed and maintained a web application using Python and Django; debugged and resolved technical issues to ensure system stability.",
            technologies_used: "Python, Django, Pandas, OpenAI API, Azure DevOps",
            project_url: "",
            start_date: "2024",
            end_date: "2024"
        },
        {
            project_name: "MFG Electronic \u2013 Automated Register Mapping Suite",
            description: "Built three automation tools: (1) Developed an automated solution by extracting from the register described in the FW request specification definitions file (Excel and PowerPoint) and Unified Register Map (URM) file and mapping them to actual code definitions in ramdef.h file, preventing incorrect register selection and human error; (2) Automated register rename updates using ramdef.h, accelerating the Register Map Retrieval process and reducing manual effort when handling large volumes of register changes; and (3) Developed an automated requirement specification diff tool that detects document differences and outputs results to PowerPoint, reducing manual review time and improving implementation and testing efficiency.",
            technologies_used: "Python, Pandas, Openpyxl, python-pptx, opencv-python, scikit-image (SSIM), Tkinter",
            project_url: "",
            start_date: "2022",
            end_date: "2023"
        },
        {
            project_name: "Fukuoka Financial Group \u2013 Internal Investment Banking System",
            description: "Built a web-based internal-use system for a Japanese multinational investment bank.",
            technologies_used: "Java Servlets, JSP, AJAX, Vue.js",
            project_url: "",
            start_date: "2022",
            end_date: "2022"
        },
        {
            project_name: "e-Commerce Solutions \u2013 Back-Office & Supply Chain Automation",
            description: "Managed EDI services such as Purchase Order and Invoice that creates a highly efficient automated and integrated business environment by eliminating manual processing.",
            technologies_used: "C++, XML, EDIFACT, PHP, Git, Bazaar",
            project_url: "",
            start_date: "2018",
            end_date: "2021"
        },
        {
            project_name: "E-Vetpermit System \u2013 Jabatan Perkhidmatan Veterinar",
            description: "Permit management system for the transfer of animals between states and within domestic territories for the Malaysian Department of Veterinary Services.",
            technologies_used: "PHP Yii 2, MySQL, AdminLTE, Bootstrap, jQuery, JavaScript, Git",
            project_url: "",
            start_date: "2017",
            end_date: "2017"
        },
        {
            project_name: "Good Morning Global \u2013 Android Application",
            description: "Developed a native Android e-commerce application designed to provide users with a seamless, intuitive, and secure mobile shopping experience.",
            technologies_used: "Java, Android SDK, SQLite, Restful Web API, Git",
            project_url: "",
            start_date: "2016",
            end_date: "2016"
        },
        {
            project_name: "In Case of Emergency (ICE) \u2013 Android Application",
            description: "Activate an emergency SOS send message (SMS) with a Google Maps link of current location to contacts during an emergency.",
            technologies_used: "Java, Android SDK, SQLite, Google Map API",
            project_url: "",
            start_date: "2015",
            end_date: "2015"
        }
    ],

    // =====================================================
    // References
    // =====================================================
    references: [
        {
            name: "Mohamad Nazer bin Annor Batcha",
            title: "Line Manager",
            organization: "Fujitsu Systems Global Solutions Management Sdn Bhd",
            phone: "+60 12-337 0743"
        },
        {
            name: "Wan Nur Atiqqah Shah Haibi",
            title: "Software Development Manager",
            organization: "B2BE GSS Sdn Bhd",
            phone: "+60 12-615 0243"
        }
    ]
};

// =====================================================
// Utility Functions
// =====================================================

/**
 * Format a date string to "Mon YYYY" format
 */
function formatDate(dateStr) {
    if (!dateStr) return '';
    // Handle year-only format
    if (/^\d{4}$/.test(dateStr)) return dateStr;
    const date = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()] + ' ' + date.getFullYear();
}

/**
 * Format a date range
 */
function formatDateRange(startDate, endDate, isCurrent) {
    const start = formatDate(startDate);
    if (isCurrent) return start + ' - Present';
    const end = formatDate(endDate);
    return start + ' - ' + (end || 'Present');
}

/**
 * Escape HTML special characters (XSS prevention)
 */
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

/**
 * Parse description text into HTML (handles bullet points)
 */
function parseDescription(text) {
    if (!text) return '';
    const lines = text.split('\n');
    let html = '';
    let inList = false;

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('- ') || line.startsWith('* ')) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += '<li>' + escapeHtml(line.substring(2)) + '</li>';
        } else if (line) {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            html += '<p>' + escapeHtml(line) + '</p>';
        }
    });

    if (inList) html += '</ul>';
    return html;
}
