/**
 * Online Resume System - Main JavaScript
 * Common utilities and interactions
 *
 * ULTRATHINK #255 - New Year's Eve Build
 */

// Easter egg in console
console.log(`%c
┌─────────────────────────────────────────┐
│   ██╗  ██╗██╗██╗   ██╗ ██████╗         │
│   ██║ ██╔╝██║╚██╗ ██╔╝██╔═══██╗        │
│   █████╔╝ ██║ ╚████╔╝ ██║   ██║        │
│   ██╔═██╗ ██║  ╚██╔╝  ██║   ██║        │
│   ██║  ██╗██║   ██║   ╚██████╔╝        │
│   ╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝         │
├─────────────────────────────────────────┤
│   Created by Kiyoraka Ken              │
│   Kiyo Software Tech Lab               │
│   https://github.com/Kiyoraka          │
└─────────────────────────────────────────┘
`, 'color: #FFFFFF; font-family: monospace;');

// =====================================================
// Sidebar Navigation (Mobile Only)
// =====================================================
(function initSidebar() {
    const isResumePage = document.querySelector('.resume-page') !== null;
    const currentPage = isResumePage ? 'resume' : 'home';

    const NAV_ITEMS = [
        { id: 'home', label: 'Home', href: 'index.html', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' },
        { id: 'resume', label: 'Resume', href: 'resume.html', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>' },
        { id: 'contact', label: 'Contact', href: isResumePage ? 'index.html#contact' : '#contact', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>' },
    ];

    const downloadHref = isResumePage ? 'Izzun_Mustaqim_Resume.pdf' : 'Muhammad_Izzun_Mustaqim_Resume.pdf';

    // Build sidebar HTML
    const sidebarHTML = `
        <div class="sidebar-overlay" id="sidebar-overlay"></div>
        <aside class="sidebar" id="sidebar" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div class="sidebar-header">
                <span class="sidebar-title">Menu</span>
                <button class="sidebar-close" id="sidebar-close" aria-label="Close menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <nav class="sidebar-nav" aria-label="Sidebar navigation">
                ${NAV_ITEMS.map(item => `
                    <a href="${item.href}" class="sidebar-link${item.id === currentPage ? ' active' : ''}" ${item.id === currentPage ? 'aria-current="page"' : ''}>
                        ${item.icon}
                        ${item.label}
                    </a>
                `).join('')}
            </nav>
            <div class="sidebar-footer">
                <a href="${downloadHref}" download class="sidebar-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download PDF
                </a>
            </div>
        </aside>
    `;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarClose = document.getElementById('sidebar-close');
    let previousFocus = null;

    // --- Focus Trap ---
    function trapFocus(e) {
        if (!sidebar.classList.contains('active')) return;
        const focusable = sidebar.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    // --- Open / Close ---
    function openSidebar() {
        previousFocus = document.activeElement;
        hamburger.classList.add('active');
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        sidebar.querySelector('.sidebar-close').focus();
        document.addEventListener('keydown', trapFocus);
    }

    function closeSidebar() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', trapFocus);
        if (previousFocus) previousFocus.focus();
    }

    // Make closeSidebar available globally for fallback handler
    window._closeSidebar = closeSidebar;

    // --- Event Listeners ---
    hamburger.addEventListener('click', () => {
        sidebar.classList.contains('active') ? closeSidebar() : openSidebar();
    });

    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // --- Swipe to Close ---
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    sidebar.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
    }, { passive: true });

    sidebar.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        // Only register horizontal swipes (ignore vertical scrolling)
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
            isSwiping = true;
        }
    }, { passive: true });

    sidebar.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        if (deltaX < -80) {
            closeSidebar();
        }
        isSwiping = false;
    });

    // Close sidebar if viewport grows beyond mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
})();

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// Navbar Scroll Effect
// =====================================================
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            : '0 1px 3px rgba(0, 0, 0, 0.1)';
    });
}

// =====================================================
// Utility Functions
// =====================================================

// Form validation helper
function validateForm(form) {
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Alert auto-dismiss
document.querySelectorAll('.alert:not([style*="display: none"])').forEach(alert => {
    if (alert.offsetParent !== null) {
        setTimeout(() => {
            alert.style.transition = 'opacity 0.5s ease';
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }, 5000);
    }
});

// Confirm delete
document.querySelectorAll('[data-confirm]').forEach(el => {
    el.addEventListener('click', function(e) {
        if (!confirm(this.dataset.confirm || 'Are you sure?')) {
            e.preventDefault();
        }
    });
});
