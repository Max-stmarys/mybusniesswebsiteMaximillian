// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Contact card click handlers
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.addEventListener('click', function() {
        const actions = [
            'mailto:hello@happywork.com',
            'mailto:info@happywork.com', 
            'mailto:support@happywork.com'
        ];
        window.location.href = actions[index];
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 54, 93, 0.95)';
    } else {
        navbar.style.background = '#1a365d';
    }
});

// Mobile menu toggle (optional enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}
