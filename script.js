/* Google Fonts - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
    /* Color Palette */
    --bg-color: #0F0F0F;
    --primary: #00D084;
    --secondary: #8B5CF6;
    --accent: #FF7A00;
    --text-main: #F8F8F8;
    --text-muted: #A1A1AA;
    
    /* Glassmorphism Variables */
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-hover-bg: rgba(255, 255, 255, 0.06);
    --glass-hover-border: rgba(255, 255, 255, 0.15);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-medium: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    --transition-slow: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base Styles & Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: none;
}

/* Typography Utilities */
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-accent { color: var(--accent); }
.text-muted { color: var(--text-muted); }

/* Layout Utilities */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-padding {
    padding: 6rem 0;
}

.section-heading {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
}

.section-subheading {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 600px;
    margin-bottom: 3rem;
}

.text-center { text-align: center; }
.mt-3 { margin-top: 1.5rem; }
.w-full { width: 100%; }

/* Scroll Progress */
.scroll-progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: transparent;
    z-index: 1000;
}

.scroll-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    width: 0%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

/* Background Effects */
#particles-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
    background: radial-gradient(circle at center, #151515 0%, #0F0F0F 100%);
}

.glow-blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.15;
    z-index: -1;
    pointer-events: none;
}

@keyframes float-blob-1 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0, 0) scale(1); }
}

@keyframes float-blob-2 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-50px, 50px) scale(1.1); }
    66% { transform: translate(30px, -30px) scale(0.9); }
    100% { transform: translate(0, 0) scale(1); }
}

.blob-1 {
    top: -10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: var(--primary);
    animation: float-blob-1 20s ease-in-out infinite;
}

.blob-2 {
    bottom: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: var(--secondary);
    animation: float-blob-2 25s ease-in-out infinite reverse;
}

/* Mouse Glow Pointer (Base layer, no blend mode bugs) */
#mouse-glow {
    position: fixed;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 999; /* Put behind navbar but above background */
    transform: translate(-50%, -50%);
    transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1), height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Advanced Spotlight Text Masking */
.spotlight-text-main {
    background-image: 
        radial-gradient(circle 120px at var(--mouse-x, -999px) var(--mouse-y, -999px), #00A86B 0%, transparent 80%),
        linear-gradient(var(--text-main), var(--text-main));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

.spotlight-text-muted {
    background-image: 
        radial-gradient(circle 120px at var(--mouse-x, -999px) var(--mouse-y, -999px), #7C3AED 0%, transparent 80%),
        linear-gradient(var(--text-muted), var(--text-muted));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}

#mouse-glow.active-btn {
    width: 120px;
    height: 120px;
    background: radial-gradient(circle at center, rgba(0, 208, 132, 0.4) 0%, transparent 70%);
}

#mouse-glow.active {
    width: 200px;
    height: 200px;
}

/* Premium Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    border: 1px solid transparent;
    font-family: inherit;
}

.btn:hover {
    transform: scale(1.05);
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 208, 132, 0.2);
}

.btn-primary {
    background: var(--primary);
    color: var(--bg-color);
}

.btn-outline {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-main);
}

.btn-ghost {
    background: transparent;
    color: var(--text-muted);
}

.btn-ghost:hover {
    color: var(--text-main);
}

/* Glassmorphism Panels */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2rem;
    transition: var(--transition-medium);
}

.glass-panel:hover {
    background: var(--glass-hover-bg);
    border-color: var(--glass-hover-border);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 0;
    z-index: 100;
    transition: var(--transition-medium);
    background: transparent;
}

.navbar.scrolled {
    padding: 1rem 0;
    background: rgba(15, 15, 15, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--glass-border);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-main);
    text-decoration: none;
    letter-spacing: -0.02em;
}

.accent-dot {
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-item {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-item::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: var(--primary);
    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-item:hover, .nav-item.active {
    color: var(--text-main);
}

.nav-item:hover::after, .nav-item.active::after {
    width: 100%;
}


.mobile-toggle {
    display: none;
    color: var(--text-main);
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 5rem;
}

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
}

.hero-content {
    flex: 1;
}

.hero-title {
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #FFF, var(--primary), var(--secondary), #FFF);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-glow 8s ease-in-out infinite;
}

@keyframes gradient-glow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 1.5rem;
    height: 36px;
    display: flex;
    align-items: center;
}

.typewriter-cursor {
    color: var(--primary);
    animation: blink 1s infinite;
    margin-left: 4px;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.hero-desc {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    max-width: 500px;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-visual {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.portrait-wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 4/5;
}

.floating-portrait {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    animation: floating 6s ease-in-out infinite;
    filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
    /* Linear inspired mask */
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

@keyframes floating {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.scroll-down-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.animated-bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

/* What I'm Building Section */
.building-card {
    border-color: rgba(139, 92, 246, 0.3);
    background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(139,92,246,0.05) 100%);
    position: relative;
    overflow: hidden;
}

.building-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 2px;
    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background-color: var(--secondary);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
    animation: pulse-badge 2s infinite;
}

@keyframes pulse-badge {
    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7); }
    70% { box-shadow: 0 0 0 6px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
}

.building-card h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.building-card p {
    color: var(--text-muted);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 800px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--text-main);
    font-size: 0.95rem;
}

.feature-item i {
    color: var(--secondary);
}

/* About Section */
.about-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 4rem;
    align-items: center;
}

.about-text .lead {
    font-size: 1.25rem;
    color: var(--text-main);
    margin-bottom: 1.5rem;
}

.about-text p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.about-stats {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.stat-card {
    padding: 2rem;
}

.stat-card i {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.stat-card h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.stat-card p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
}

.sub-text {
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* Featured Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.project-card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.project-status {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.status-progress {
    background: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
}

.status-completed {
    background: rgba(0, 208, 132, 0.1);
    color: var(--primary);
}

.project-github {
    color: var(--text-muted);
    font-size: 1.4rem;
    transition: var(--transition-fast);
}

.project-github:hover {
    color: var(--text-main);
    transform: scale(1.1);
}

.project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.project-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    flex-grow: 1;
    margin-bottom: 1.5rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.tech-stack span {
    font-size: 0.75rem;
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    border: 1px solid var(--glass-border);
}

/* Technical Skills Section */
.skills-grid {
    display: grid;
    /* 5 cards: 3 on top, 2 centered on bottom for large screens */
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
}

.skill-card {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

/* Make the last two cards centered on desktop */
.skill-card:nth-child(4) {
    grid-column: 2 / span 2;
}
.skill-card:nth-child(5) {
    grid-column: 4 / span 2;
}

.skill-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    border: 1px solid var(--glass-border);
}

.skill-card:hover .skill-icon {
    background: var(--primary);
    color: #000;
    border-color: var(--primary);
}

.skill-card h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.tag {
    font-size: 0.85rem;
    background: transparent;
    color: var(--text-muted);
    border: 1px solid var(--glass-border);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    transition: var(--transition-fast);
}

.skill-card:hover .tag {
    color: var(--text-main);
    border-color: rgba(255,255,255,0.2);
}

/* Learning Journey Timeline */
.timeline-container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

/* Timeline Vertical Wire */
.timeline-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: var(--glass-border);
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 3rem;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-dot {
    position: absolute;
    left: 14px;
    top: 1.5rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--bg-color);
    border: 2px solid var(--text-muted);
    z-index: 2;
    transition: var(--transition-medium);
}

.active-dot {
    border-color: var(--primary);
    background: var(--primary);
    box-shadow: 0 0 15px rgba(0, 208, 132, 0.4);
}

.future-dot {
    border-color: var(--glass-border);
    background: var(--bg-color);
}

.timeline-content {
    padding: 2rem;
}

.timeline-content.active-panel {
    border-color: rgba(0, 208, 132, 0.3);
}

.timeline-year {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.5rem;
}

.timeline-content h3 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
}

.timeline-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* GitHub & Achievements */
.two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.github-card {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 3rem;
}

.github-logo {
    font-size: 5rem;
    color: var(--text-main);
}

.github-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.github-info p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.stat-box {
    text-align: center;
    padding: 2rem 1rem;
}

.counter {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-main);
}





.plus {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-box p {
    color: var(--text-muted);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.5rem;
}

/* Contact Section */
.contact-card {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
}

.contact-header {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 1rem;
}

.contact-header p {
    color: var(--text-muted);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem;
    text-decoration: none;
    color: inherit;
}

.icon-circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-main);
    font-size: 1.2rem;
    transition: var(--transition-fast);
}

.contact-method:hover .icon-circle {
    background: var(--primary);
    color: #000;
}

.contact-method h4 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
}

.contact-method p {
    font-size: 1rem;
    font-weight: 500;
    word-break: break-word;
    overflow-wrap: break-word;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--glass-border);
    background: rgba(255, 255, 255, 0.02);
    color: var(--text-main);
    font-family: inherit;
    font-size: 0.95rem;
    transition: var(--transition-fast);
}

.contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
}

/* Footer */
footer {
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid var(--glass-border);
    margin-top: 5rem;
}

.footer-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
}

.footer-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

footer p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: rgba(15, 15, 15, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--primary);
    color: var(--bg-color);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 208, 132, 0.3);
    border-color: transparent;
}

.copyright {
    margin-top: 1.5rem;
    font-size: 0.8rem !important;
}

/* Animations */
.reveal {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-bottom { transform: translateY(40px); }
.fade-left { transform: translateX(40px); }
.fade-right { transform: translateX(-40px); }

.reveal.active {
    opacity: 1;
    transform: translate(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .skill-card, .skill-card:nth-child(4), .skill-card:nth-child(5) {
        grid-column: span 1;
    }
    .two-column-layout {
        grid-template-columns: 1fr;
    }
    .contact-card {
        grid-template-columns: 1fr;
    }
    .hero-title {
        font-size: 3.5rem;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0; right: -100%;
        width: 100%; height: 100vh;
        background: rgba(15, 15, 15, 0.98);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: right var(--transition-medium), opacity var(--transition-medium), visibility var(--transition-medium);
        opacity: 0;
        visibility: hidden;
    }
    .nav-links.active {
        right: 0;
        opacity: 1;
        visibility: visible;
    }
    .mobile-toggle {
        display: block;
        z-index: 101;
    }
    .hero-container {
        flex-direction: column-reverse;
        text-align: center;
    }
    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-subtitle {
        justify-content: center;
    }
    .hero-visual {
        justify-content: center;
        margin-bottom: 2rem;
    }
    .about-grid {
        grid-template-columns: 1fr;
    }
    .skills-grid {
        grid-template-columns: 1fr;
    }
    .form-row {
        grid-template-columns: 1fr;
    }
    .contact-card {
        padding: 1.5rem 1rem;
        gap: 2rem;
    }
    .contact-method {
        padding: 1rem;
        gap: 0.8rem;
    }
    .github-card {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1.5rem;
    }
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .stat-box {
        padding: 1.5rem 1rem;
    }
}
