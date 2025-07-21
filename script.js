// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
    });
});

// Projects data
const projects = {
    web: [
        {
            title: "E-commerce Website",
            description: "A responsive online store built with WordPress and custom themes.",
            image: "https://via.placeholder.com/600x400?text=E-commerce+Website",
            link: "#",
            github: "#"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio showcasing my web development projects.",
            image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
            link: "#",
            github: "#"
        },
        {
            title: "Task Management App",
            description: "Web application for organizing daily tasks and projects.",
            image: "https://via.placeholder.com/600x400?text=Task+App",
            link: "#",
            github: "#"
        }
    ],
    design: [
        {
            title: "Mobile App UI Design",
            description: "Figma prototype for a fitness tracking mobile application.",
            image: "https://via.placeholder.com/600x400?text=Mobile+App+Design",
            link: "#",
            figma: "#"
        },
        {
            title: "Website Redesign",
            description: "UI/UX redesign for a local business website.",
            image: "https://via.placeholder.com/600x400?text=Website+Redesign",
            link: "#",
            figma: "#"
        },
        {
            title: "Dashboard Interface",
            description: "Admin dashboard design with focus on usability.",
            image: "https://via.placeholder.com/600x400?text=Dashboard+Design",
            link: "#",
            figma: "#"
        }
    ]
};
/*
// Load projects into the DOM
function loadProjects() {
    const webProjectsContainer = document.getElementById('web-projects');
    const designProjectsContainer = document.getElementById('design-projects');
    
    // Load web projects
    projects.web.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" target="_blank">Live Demo</a>
                    <a href="${project.github}" target="_blank">View Code</a>
                </div>
            </div>
        `;
        webProjectsContainer.appendChild(projectCard);
    });
    
    // Load design projects
    projects.design.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" target="_blank">View Prototype</a>
                    <a href="${project.figma}" target="_blank">Figma File</a>
                </div>
            </div>
        `;
        designProjectsContainer.appendChild(projectCard);
    });
}
*/
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        // If dark mode was enabled, make sure the toggle reflects this
        document.querySelector('.dark-icon').style.display = 'block';
        document.querySelector('.light-icon').style.display = 'none';
    }
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save user preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
    
    // Toggle moon/sun icons
    document.querySelectorAll('.dark-icon, .light-icon').forEach(icon => {
        icon.style.display = icon.style.display === 'none' ? 'block' : 'none';
    });
});