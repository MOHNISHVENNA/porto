// Particle.js Configuration
particlesJS('particles', {
    particles: {
        number: { 
            value: 80, 
            density: { 
                enable: true, 
                value_area: 800 
            } 
        },
        color: { 
            value: '#00ffcc' 
        },
        shape: { 
            type: 'circle' 
        },
        opacity: { 
            value: 0.5, 
            random: true 
        },
        size: { 
            value: 3, 
            random: true 
        },
        line_linked: { 
            enable: true, 
            distance: 150, 
            color: '#fff',  // Changed from #ff007a to #fff
            opacity: 0.4, 
            width: 1 
        },
        move: { 
            enable: true, 
            speed: 2, 
            direction: 'none', 
            random: false, 
            straight: false, 
            out_mode: 'out' 
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { 
            onhover: { 
                enable: true, 
                mode: 'repulse' 
            }, 
            onclick: { 
                enable: true, 
                mode: 'push' 
            }, 
            resize: true 
        },
        modes: { 
            repulse: { 
                distance: 100, 
                duration: 0.4 
            }, 
            push: { 
                particles_nb: 4 
            } 
        }
    },
    retina_detect: true
});

// Add some interactivity to the page
document.addEventListener('DOMContentLoaded', function() {
    // Add a smooth scroll effect to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});