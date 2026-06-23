document.addEventListener('DOMContentLoaded', () => {
    // 0. Mouse Glow (Flashlight Effect)
    const mouseGlow = document.getElementById('mouse-glow');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    if (mouseGlow) {
        document.addEventListener('mouseleave', () => {
            mouseGlow.style.opacity = '0';
        });

        function animateGlow() {
            // Easing formula for smooth trailing
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;
            mouseGlow.style.left = `${glowX}px`;
            mouseGlow.style.top = `${glowY}px`;
            requestAnimationFrame(animateGlow);
        }
        animateGlow();

        // Premium Text Spotlight Logic
        const spotlightElements = document.querySelectorAll('h1, h2, h3, h4, p, li:not(.nav-links li)');
        
        // Add specific classes to text elements to dictate their glow color
        spotlightElements.forEach(el => {
            if (!el.classList.contains('hero-subtitle') && !el.classList.contains('hero-title')) {
                if (el.tagName === 'P' || el.tagName === 'LI') {
                    el.classList.add('spotlight-text-muted');
                } else {
                    el.classList.add('spotlight-text-main');
                }
            }
        });

        let rafId = null;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (mouseGlow.style.opacity === '0' || mouseGlow.style.opacity === '') {
                mouseGlow.style.opacity = '1';
            }

            // High performance text spotlight calculation
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                spotlightElements.forEach(el => {
                    if (el.classList.contains('spotlight-text-main') || el.classList.contains('spotlight-text-muted')) {
                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        
                        // Only update CSS variables if mouse is within 150px of the text block to save performance
                        if (x > -150 && x < rect.width + 150 && y > -150 && y < rect.height + 150) {
                            el.style.setProperty('--mouse-x', `${x}px`);
                            el.style.setProperty('--mouse-y', `${y}px`);
                        } else {
                            // Move gradient offscreen
                            el.style.setProperty('--mouse-x', `-999px`);
                            el.style.setProperty('--mouse-y', `-999px`);
                        }
                    }
                });
            });
        });

        // Hover Animation for buttons, tags, and navigation
        const btnElements = document.querySelectorAll('.btn, .nav-item, a, .tag');
        btnElements.forEach(el => {
            el.addEventListener('mouseenter', () => mouseGlow.classList.add('active-btn'));
            el.addEventListener('mouseleave', () => mouseGlow.classList.remove('active-btn'));
        });
    }

    // 1. Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 2. Navbar Background on Scroll & Scroll Progress Bar
    const navbar = document.getElementById('navbar');
    const scrollBar = document.getElementById('scrollBar');

    window.addEventListener('scroll', () => {
        // Navbar styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollBar) {
            scrollBar.style.width = scrolled + '%';
        }
    });

    // 3. ScrollSpy Navigation (IntersectionObserver)
    const sections = document.querySelectorAll('section');
    const navAnchors = document.querySelectorAll('.nav-item');

    const scrollSpyOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navAnchors.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });

    // 4. Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Animated Counters
    const counters = document.querySelectorAll('.counter');
    const counterObserverOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, counterObserverOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // 6. Typewriter Effect
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const words = ['B.Tech CSE (IoT) Student', 'Project Builder', 'Technology Enthusiast', 'Continuous Learner'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typeWriterElement.innerText = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeWriterElement.innerText = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typingSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before new word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing effect after 1 second
        setTimeout(type, 1000);
    }

    // 7. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add to button hover tracking for spotlight
        if (typeof mouseGlow !== 'undefined' && mouseGlow) {
            backToTopBtn.addEventListener('mouseenter', () => mouseGlow.classList.add('active-btn'));
            backToTopBtn.addEventListener('mouseleave', () => mouseGlow.classList.remove('active-btn'));
        }
    }

    // 8. Security / Copy Protection
    document.addEventListener('keydown', (e) => {
        // Prevent Ctrl+C, Ctrl+X, Ctrl+U (View Source), Ctrl+S (Save)
        if (e.ctrlKey && ['c', 'C', 'x', 'X', 'u', 'U', 's', 'S'].includes(e.key)) {
            e.preventDefault();
        }
    });
});
