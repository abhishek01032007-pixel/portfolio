// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileIcon = mobileToggle.querySelector('i');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileIcon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            mobileIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
});

// Scroll Progress Bar
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}%`;
    scrollBar.style.width = scroll;
});


// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax-element');
window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    parallaxElements.forEach(el => {
        let speed = el.dataset.speed || 0.1;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Magnetic Buttons
const magneticButtons = document.querySelectorAll('.btn-magnetic');
if (window.innerWidth > 768) {
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}

// Animated Counters
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target + "+";
        }
    });
};

// Scroll Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger counter animation if github section is revealed
            if (entry.target.classList.contains('github-card')) {
                animateCounters();
            }

            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// Trigger initial reveal
setTimeout(() => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });
}, 100);

// Background Particles (Canvas) - Subtly moving
const canvas = document.getElementById('particles-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = Math.random() > 0.5 ? 'rgba(0, 208, 132, 0.5)' : 'rgba(139, 92, 246, 0.5)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 10000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
}

// Typewriter Effect for Hero Subtitle
const textArray = ["B.Tech Computer Science and Engineering (IoT)"];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeDelay = 100;
const eraseDelay = 50;
const newTextDelay = 2000;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const currentText = textArray[typeIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? eraseDelay : typeDelay;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 1000);
});

// Active Section Navbar Glow
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// High-Precision Letter Splitting Logic
function wrapLettersInTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.parentNode.tagName === 'SPAN' && node.parentNode.classList.contains('letter')) return;
        const text = node.nodeValue;
        if (text.trim() === '') return;
        
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === ' ' || char === '\n' || char === '\t') {
                fragment.appendChild(document.createTextNode(char));
            } else {
                const span = document.createElement('span');
                span.className = 'letter';
                span.textContent = char;
                fragment.appendChild(span);
            }
        }
        node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (['SCRIPT', 'STYLE', 'BUTTON'].includes(node.tagName) || node.classList.contains('typewriter')) return;
        Array.from(node.childNodes).forEach(wrapLettersInTextNodes);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Wrap letters
    document.querySelectorAll('p, h1:not(.hero-title), h2, h3, h4, h5, li, a, .stat-label, .timeline-date').forEach(el => {
        wrapLettersInTextNodes(el);
    });

    // 2. Initialize glow loop
    const mouseGlow = document.getElementById('mouse-glow');
    const textBlocks = document.querySelectorAll('p, h1:not(.hero-title), h2, h3, h4, h5, li, a, .stat-label, .timeline-date');
    const glowRadius = 80; // The radius of the 160px background circle
    
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    if (window.innerWidth > 768 && mouseGlow) {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });

        const animateGlow = () => {
            // Physics-based smoothing (Lerp)
            currentX += (targetX - currentX) * 0.15;
            currentY += (targetY - currentY) * 0.15;
            
            // Move the background circle smoothly
            mouseGlow.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`;
            
            // Physics-synced high-precision proximity check
            textBlocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                
                // Find distance from circle to the entire block to optimize performance
                const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
                const closestX = clamp(currentX, rect.left, rect.right);
                const closestY = clamp(currentY, rect.top, rect.bottom);
                const blockDist = Math.sqrt(Math.pow(currentX - closestX, 2) + Math.pow(currentY - closestY, 2));
                
                // If block is outside the circle entirely, reset its letters instantly
                if (blockDist > glowRadius + 20) {
                    // Only query if we know it has active glows to save memory
                    if (block.querySelector('.in-glow')) {
                        block.querySelectorAll('.in-glow').forEach(l => l.classList.remove('in-glow'));
                    }
                } else {
                    // Block is inside the circle! Calculate exact physics for every letter to perfectly match the circle boundary
                    const letters = block.querySelectorAll('.letter');
                    letters.forEach(letter => {
                        const lRect = letter.getBoundingClientRect();
                        const lx = lRect.left + lRect.width / 2;
                        const ly = lRect.top + lRect.height / 2;
                        const dist = Math.sqrt(Math.pow(currentX - lx, 2) + Math.pow(currentY - ly, 2));
                        
                        if (dist < glowRadius) {
                            letter.classList.add('in-glow');
                        } else {
                            letter.classList.remove('in-glow');
                        }
                    });
                }
            });
            
            requestAnimationFrame(animateGlow);
        };
        animateGlow();
    }

    // 3. ScrollSpy for Navigation Underline
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Also include the hero section (which might not have the section tag or has id="home")
    const homeSection = document.getElementById('home');
    const allTrackedElements = homeSection ? [homeSection, ...Array.from(sections)] : sections;

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Triggers when the section crosses the middle of the screen
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the corresponding nav link
                const targetId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    allTrackedElements.forEach(section => {
        observer.observe(section);
    });
});
