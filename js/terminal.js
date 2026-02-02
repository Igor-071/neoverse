// Terminal JavaScript - Calm Animations

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initTerminal();
});

// Initialize terminal
function initTerminal() {
    updateClock();
    initSmoothScroll();
}

// Update the clock in footer
function updateClock() {
    const clockElement = document.getElementById('current-time');

    if (!clockElement) return;

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const dateStr = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        clockElement.textContent = `${dateStr} ${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Console welcome message
console.log('%c╔═══════════════════════════════════════╗', 'color: #ffffff; font-family: monospace;');
console.log('%c║   NEOVERSE TERMINAL                   ║', 'color: #ffffff; font-family: monospace;');
console.log('%c║   Inovate. Integrate. Elevate.        ║', 'color: #e0e0e0; font-family: monospace;');
console.log('%c╚═══════════════════════════════════════╝', 'color: #ffffff; font-family: monospace;');
