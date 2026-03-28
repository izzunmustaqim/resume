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
        full_name: "Izzun Mustaqim",
        job_title: "Full Stack Developer",
        email: "izzunmustaqim@gmail.com",
        phone: "+60 1123055439",
        location: "Shah Alam, Selangor",
        linkedin_url: "",
        website_url: "https://github.com/izzunmustaqim",
        profile_image: "assets/images/izzun_white.png",
        summary: "Results-driven software developer with 5+ years of experience in building scalable web applications. Proficient in PHP, JavaScript, and modern frameworks. Passionate about clean code and user-centric design."
    },

    // =====================================================
    // Work Experience
    // =====================================================
    experiences: [
        {
            company_name: "Tech Solutions Sdn Bhd",
            job_title: "Senior Developer",
            location: "Kuala Lumpur, Malaysia",
            start_date: "2022-01-01",
            end_date: null,
            is_current: true,
            description: "- Led development of enterprise web applications\n- Mentored junior developers\n- Implemented CI/CD pipelines"
        },
        {
            company_name: "Digital Agency Co",
            job_title: "Web Developer",
            location: "Petaling Jaya, Malaysia",
            start_date: "2019-06-01",
            end_date: "2021-12-31",
            is_current: false,
            description: "- Developed custom WordPress themes\n- Built REST APIs with Laravel\n- Managed client projects"
        }
    ],

    // =====================================================
    // Education
    // =====================================================
    education: [
        {
            institution: "University of Malaya",
            degree: "Bachelor of Computer Science",
            field_of_study: "Software Engineering",
            location: "Kuala Lumpur, Malaysia",
            start_date: "2015-09-01",
            end_date: "2019-06-30"
        }
    ],

    // =====================================================
    // Skills
    // =====================================================
    skills: [
        { skill_name: "PHP", category: "Programming", proficiency_level: "Expert" },
        { skill_name: "JavaScript", category: "Programming", proficiency_level: "Advanced" },
        { skill_name: "MySQL", category: "Database", proficiency_level: "Advanced" },
        { skill_name: "Laravel", category: "Framework", proficiency_level: "Expert" },
        { skill_name: "Vue.js", category: "Framework", proficiency_level: "Advanced" },
        { skill_name: "HTML/CSS", category: "Frontend", proficiency_level: "Expert" },
        { skill_name: "Git", category: "Tools", proficiency_level: "Advanced" },
        { skill_name: "REST API", category: "Backend", proficiency_level: "Advanced" }
    ],

    // =====================================================
    // Certifications
    // =====================================================
    certifications: [
        {
            cert_name: "AWS Certified Developer",
            issuing_org: "Amazon Web Services",
            issue_date: "2023-03-15"
        },
        {
            cert_name: "PHP Certified Developer",
            issuing_org: "Zend Technologies",
            issue_date: "2022-08-20"
        }
    ],

    // =====================================================
    // Projects
    // =====================================================
    projects: [
        {
            project_name: "E-Commerce Platform",
            description: "Built a complete e-commerce solution with payment integration",
            technologies_used: "Laravel, Vue.js, MySQL, Stripe",
            project_url: "https://github.com/example/ecommerce",
            start_date: "2023-01-01",
            end_date: "2023-06-30"
        },
        {
            project_name: "Task Management System",
            description: "Developed a collaborative task management application",
            technologies_used: "PHP, JavaScript, MySQL, Bootstrap",
            project_url: "https://github.com/example/taskmanager",
            start_date: "2022-06-01",
            end_date: "2022-12-31"
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
