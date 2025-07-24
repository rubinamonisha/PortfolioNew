// Download Resume Button functionality
document.addEventListener('DOMContentLoaded', function () {
    var downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'Rubina%20MonishaResume%20Doc.docx';
            link.download = 'Rubina_Monisha_Resume.docx';
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