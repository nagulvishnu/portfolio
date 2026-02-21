// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Active Navigation Link Highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Download Resume Functionality
document.getElementById('download-resume').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a professional PDF-style resume content
    const resumeContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nagul Vishnu E - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; color: #2563eb; margin-bottom: 10px; }
        .title { font-size: 18px; color: #64748b; margin-bottom: 10px; }
        .contact { font-size: 14px; margin-bottom: 5px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 20px; font-weight: bold; color: #2563eb; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px; }
        .item { margin-bottom: 15px; }
        .item-title { font-weight: bold; font-size: 16px; }
        .item-subtitle { font-style: italic; color: #64748b; font-size: 14px; }
        .item-date { font-weight: bold; color: #2563eb; font-size: 14px; }
        .item-description { margin-top: 5px; font-size: 14px; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin-bottom: 5px; font-size: 14px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0; }
        .skill { background: #f1f5f9; padding: 5px 10px; border-radius: 5px; font-size: 13px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">NAGUL VISHNU E</div>
        <div class="title">Java Developer | IT Student</div>
        <div class="contact">📧 nagulvishnue@gmail.com | 📱 +91 6381613749</div>
        <div class="contact">🔗 github.com/nagulvishnu | 🔗 linkedin.com/in/nagul-vishnu-46174331a</div>
        <div class="contact">📍 Chennai, India</div>
    </div>

    <div class="section">
        <div class="section-title">PROFESSIONAL SUMMARY</div>
        <div class="item-description">
            IT student with strong basics in Core Java and OOP concepts. Familiar with Spring Boot and REST API development. 
            Eager to start my career as a Java Developer and grow in backend technologies.
        </div>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="item">
            <div class="item-title">B.Tech Information Technology</div>
            <div class="item-subtitle">Panimalar Engineering College</div>
            <div class="item-date">2023 – 2027 | CGPA: 8.92</div>
            <div class="item-description">
                Currently pursuing Bachelor's degree in Information Technology with focus on software development, 
                programming languages, and database management.
            </div>
        </div>
        <div class="item">
            <div class="item-title">12th Grade</div>
            <div class="item-subtitle">Dr. Vimala Convent Mat Hr Sec School</div>
            <div class="item-date">2022 – 2023 | Percentage: 87%</div>
            <div class="item-description">
                Completed higher secondary education with strong foundation in Mathematics, Computer Science, and Science subjects.
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">SKILLS</div>
        <div class="item">
            <div class="item-title">Languages:</div>
            <div class="skills">
                <span class="skill">Java</span>
                <span class="skill">Python</span>
            </div>
        </div>
        <div class="item">
            <div class="item-title">Database:</div>
            <div class="skills">
                <span class="skill">SQL</span>
            </div>
        </div>
        <div class="item">
            <div class="item-title">Frontend:</div>
            <div class="skills">
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">JavaScript</span>
            </div>
        </div>
        <div class="item">
            <div class="item-title">Tools:</div>
            <div class="skills">
                <span class="skill">Git</span>
                <span class="skill">GitHub</span>
                <span class="skill">VS Code</span>
                <span class="skill">Eclipse</span>
            </div>
        </div>
        <div class="item">
            <div class="item-title">Core:</div>
            <div class="skills">
                <span class="skill">Data Structures & Algorithms</span>
                <span class="skill">OOP</span>
                <span class="skill">Problem Solving</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">PROJECTS</div>
        <div class="item">
            <div class="item-title">Recipe API - Full-Stack Web Application</div>
            <div class="item-subtitle">Technologies: Spring Boot, React, Oracle, JPA/Hibernate, Tailwind CSS</div>
            <div class="item-description">
                Comprehensive Recipe Management System with Spring Boot backend and React frontend, handling 8,451+ recipes 
                with enterprise-grade performance.
            </div>
            <ul>
                <li>Pagination system handling 704+ pages with customizable sizes</li>
                <li>Real-time search with filtering by title and cuisine</li>
                <li>Batch processing (100 records/batch) for optimal performance</li>
                <li>Responsive UI with recipe cards and nutritional info</li>
                <li>RESTful API design with CORS and error handling</li>
            </ul>
        </div>
        <div class="item">
            <div class="item-title">Task Management System</div>
            <div class="item-subtitle">Technologies: Spring Boot, Java 17, JPA/Hibernate, H2/MySQL, Vanilla JavaScript</div>
            <div class="item-description">
                Robust Full-Stack Task Management Application with Spring Boot backend and responsive SPA frontend, 
                featuring complete CRUD operations and real-time interactions.
            </div>
            <ul>
                <li>Complete CRUD operations with validation</li>
                <li>Search functionality with pagination</li>
                <li>Global exception handling with meaningful responses</li>
                <li>Automatic auditing with timestamps</li>
                <li>Swagger UI integration for API documentation</li>
            </ul>
        </div>
        <div class="item">
            <div class="item-title">Quiz Website</div>
            <div class="item-subtitle">Technologies: HTML, CSS, JavaScript</div>
            <div class="item-description">
                Interactive quiz website featuring dynamic questions, real-time scoring, and immediate feedback.
            </div>
            <ul>
                <li>Dynamic question loading</li>
                <li>Instant score display</li>
                <li>Responsive design</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">EXPERIENCE</div>
        <div class="item">
            <div class="item-title">Web Development Intern</div>
            <div class="item-subtitle">JB Soft System</div>
            <div class="item-date">May 2024 – June 2024</div>
            <ul>
                <li>Updated live web pages with gold rates, fish and vegetable prices</li>
                <li>Developed a dynamic website using WordPress</li>
                <li>Worked with responsive design principles</li>
                <li>Collaborated with senior developers to implement new features</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <div class="section-title">CERTIFICATES</div>
        <div class="item">
            <div class="item-title">• Cybersecurity Analysis and Design</div>
            <div class="item-subtitle">NASSCOM</div>
        </div>
        <div class="item">
            <div class="item-title">• Programming in Java</div>
            <div class="item-subtitle">NPTEL</div>
        </div>
        <div class="item">
            <div class="item-title">• Database Management System</div>
            <div class="item-subtitle">NPTEL</div>
        </div>
        <div class="item">
            <div class="item-title">• Typewriting – English (Lower / Higher)</div>
        </div>
    </div>
</body>
</html>
`;

    // Create blob and download as HTML file (can be saved as PDF from browser)
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nagul_Vishnu_Resume.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Show enhanced notification with PDF instructions
    showNotification('Resume downloaded! Open the file and "Save as PDF" for professional format.');
});

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing Animation for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Project Card Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill Bar Animation (if needed in future)
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeInLeft 0.5s ease forwards';
        }, index * 100);
    });
}

// Add fade-in-left animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(fadeStyle);

// Initialize skill animations when skills section is visible
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Form Validation (for future contact form)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading states for better UX
function showLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
}

function hideLoadingState(element, originalContent) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
    element.innerHTML = originalContent;
}

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations and effects here
}, 10));

// Console welcome message
console.log('%c Welcome to Nagul Vishnu\'s Portfolio! ', 'background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
