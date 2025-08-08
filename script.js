// Accent color picker functionality
// Self-invoking anonymous function - syntax
(function () {
    var colorPicker = document.getElementById('accentColorPicker');
    // Set initial color from localStorage or default
    var savedColor = localStorage.getItem('accentColor');
    var defaultColor = '#04AA6D';
    var accentColor = savedColor || defaultColor;
    document.documentElement.style.setProperty('--accent-color', accentColor);
    if (colorPicker) colorPicker.value = accentColor;
    if (colorPicker) {
        colorPicker.addEventListener('input', function () {
            document.documentElement.style.setProperty('--accent-color', colorPicker.value);
            localStorage.setItem('accentColor', colorPicker.value);
        });
    }
})();
// Download Resume Button functionality
document.addEventListener('DOMContentLoaded', function () {
    var downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'Reo%20JeftonResume%20Doc.docx';
            link.download = 'Reo_Jefton_Resume.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
// Smooth scroll with 100px offset for navbar links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.topNav a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
});
// Clicking a section link in the navbar opens the corresponding accordion if it is not already open.
document.addEventListener('DOMContentLoaded', function () {
    const sectionLinks = [
        { id: 'skills', selector: 'a[href="#home"]' },
        { id: 'experience', selector: 'a[href="#experience"]' },
        { id: 'education', selector: 'a[href="#education"]' },
        { id: 'projects', selector: 'a[href="#projects"]' }
    ];
    sectionLinks.forEach(({ id, selector }) => {
        const link = document.querySelector(selector);
        if (link) {
            link.addEventListener('click', function (e) {
                setTimeout(() => {
                    const section = document.getElementById(id);
                    if (section) {
                        const btn = section.querySelector('.accordion-toggle');
                        const content = section.querySelector('.accordion-content');
                        if (btn && content && !content.classList.contains('open')) {
                            btn.click();
                        }
                    }
                }, 100);
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var accentBtn = document.getElementById('accentColorBtn');
    var modal = document.getElementById('accentColorModal');
    var closeBtn = document.getElementById('closeAccentModal');
    if (accentBtn && modal && closeBtn) {
        accentBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        // Hide modal on outside click
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        // Hide modal on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Accent color swatch click logic
    var colorPicker = document.getElementById('accentColorPicker');
    var swatchContainer = document.getElementById('accentColorSwatches');
    if (swatchContainer && colorPicker) {
        swatchContainer.querySelectorAll('.accent-swatch').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var color = window.getComputedStyle(btn).backgroundColor;
                // Convert rgb to hex if needed
                function rgbToHex(rgb) {
                    var result = rgb.match(/\d+/g);
                    if (!result) return rgb;
                    return "#" + result.map(function (x) {
                        var hex = parseInt(x).toString(16);
                        return hex.length === 1 ? "0" + hex : hex;
                    }).join("");
                }
                var hex = btn.title || rgbToHex(color);
                document.documentElement.style.setProperty('--accent-color', hex);
                colorPicker.value = hex;
                localStorage.setItem('accentColor', hex);
            });
        });
    }
});