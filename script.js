// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');

        // Initialize AOS after preloader fades out
        AOS.init({
            duration: 600,      // Reduced from 800 to 600
            easing: 'ease-out', // Changed from 'ease-in-out' to 'ease-out'
            once: true,         // Changed from false to true so animations only happen once
            mirror: false,      // Changed from true to false
            offset: 50          // Added smaller offset for earlier animation trigger
        });

        // Initialize progress bars
        initProgressBars();

        // Initialize typing effect
        initTypingEffect();
    }, 1500);
});

// Custom Cursor - Disabled
document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor functionality disabled
    // All elements will use the default browser cursor
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff6b00"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff6b00",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Initialize 3D Tilt Effect
document.addEventListener('DOMContentLoaded', () => {
    if (typeof VanillaTilt !== 'undefined') {
        // Tilt effect for project cards removed
        // VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
        //     max: 8,
        //     speed: 500,
        //     glare: true,
        //     "max-glare": 0.1,
        // });

        VanillaTilt.init(document.querySelectorAll('.skill-card'), {
            max: 5,           // Reduced from 10 to 5
            speed: 400,       // Increased from 300 to 400 for smoother movement
            glare: true,
            "max-glare": 0.05, // Reduced from 0.1 to 0.05
        });
    }
});

// Progress bars animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.tech-progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Typing effect for section titles
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 1000);
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log({ name, email, subject, message });

        // Show success message with animation
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.backgroundColor = '#28a745';

        setTimeout(() => {
            // Reset button
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';

            // Reset form
            contactForm.reset();
        }, 3000);
    });
}

// Animate section titles on scroll
const sectionTitles = document.querySelectorAll('.main-skills h3, .tech-skills h3');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
