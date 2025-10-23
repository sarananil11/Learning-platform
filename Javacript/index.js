  document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            const navLinkItems = navLinks.querySelectorAll('a.nav-link');
            const courseCards = document.querySelectorAll('.course-card');

            // Toggle hamburger menu
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close menu when a nav link is clicked
            navLinkItems.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });

            // Navigate to course.html when a course card is clicked or activated via keyboard
            courseCards.forEach(card => {
                card.addEventListener('click', () => {
                    window.location.href = 'course.html';
                });

                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = 'course.html';
                    }
                });
            });
 });