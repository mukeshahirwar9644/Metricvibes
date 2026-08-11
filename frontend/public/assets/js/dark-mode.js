
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlEl = document.documentElement;
    const STORAGE_KEY = 'metricvibes-theme';
    const VERSION_KEY = 'metricvibes-theme-version';
    if (localStorage.getItem(VERSION_KEY) !== '1') {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(VERSION_KEY, '1');
    }
    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return 'light';
    }
    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = theme === 'dark' ? '#0B1023' : '#FFFFFF';
        }
    }
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    }
});
