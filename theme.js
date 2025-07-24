// Theme toggle functionality
window.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    let darkMode;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        darkMode = true;
    } else if (storedTheme === 'light') {
        darkMode = false;
    } else {
        // Fallback to prefers-color-scheme only if no localStorage value
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        darkMode = prefersDark;
        localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }

    function setTheme(dark) {
        // Remove preload class and set theme on body
        document.documentElement.classList.remove('dark-theme-preload');
        if (dark) {
            document.body.classList.add('dark-theme');
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    }

    themeBtn.addEventListener('click', function () {
        darkMode = !darkMode;
        setTheme(darkMode);
    });

    setTheme(darkMode);
});

// Prevent white flash in dark mode
(function () {
    try {
        var dark = localStorage.getItem('theme') === 'dark';
        if (dark) {
            document.documentElement.classList.add('dark-theme-preload');
        }
    } catch (e) { }
})();