
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    if (!window.matchMedia('(hover: hover)').matches) return;
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    const speed = 0.15; 
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });
    function animate() {
        glowX += (mouseX - glowX) * speed;
        glowY += (mouseY - glowY) * speed;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
});
