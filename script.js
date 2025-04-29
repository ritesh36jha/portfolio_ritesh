// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    const languageBars = document.querySelectorAll('.language-level');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            if (isInViewport(bar)) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });

        languageBars.forEach(bar => {
            if (isInViewport(bar)) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }

    // Initial check for skill bars in viewport
    animateSkillBars();

    // Check for skill bars on scroll
    window.addEventListener('scroll', animateSkillBars);

    // Form handling
    const contactForm = document.querySelector('#contactForm');

    // Check for thank you parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const thankYou = urlParams.get('thankyou');

    // Show thank you message if returning from form submission
    if (thankYou === 'true') {
        const formContainer = document.querySelector('.contact-form');
        if (formContainer) {
            const originalContent = formContainer.innerHTML;

            // Save original content to restore later
            formContainer.setAttribute('data-original-content', originalContent);

            // Replace with success message
            formContainer.innerHTML = `
                <div class="form-success">
                    <i class="fas fa-check-circle"></i>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting me. I will get back to you soon.</p>
                    <button class="btn primary-btn" id="sendAnotherBtn">Send Another Message</button>
                </div>
            `;

            // Add event listener to "Send Another Message" button
            document.getElementById('sendAnotherBtn').addEventListener('click', () => {
                formContainer.innerHTML = formContainer.getAttribute('data-original-content');
                // Remove the thankyou parameter from URL
                window.history.replaceState({}, document.title, window.location.pathname);
                // Re-initialize the form
                initFormValidation();
            });
        }
    }

    // Initialize form validation
    function initFormValidation() {
        const form = document.querySelector('#contactForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                // Form validation
                const name = this.querySelector('input[name="name"]').value;
                const email = this.querySelector('input[name="email"]').value;
                const subject = this.querySelector('input[name="subject"]').value;
                const message = this.querySelector('textarea[name="message"]').value;

                if (!name || !email || !subject || !message) {
                    e.preventDefault();
                    alert('Please fill in all fields');
                    return false;
                }

                // Let the form submit to the email address
                return true;
            });
        }
    }

    // Initialize form if not showing thank you message
    if (!thankYou && contactForm) {
        initFormValidation();
    }

    // Add active class to current section in navigation
    function highlightNavigation() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Add animation to certificates on hover
    const certificates = document.querySelectorAll('.certificate-item');
    certificates.forEach(cert => {
        cert.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        cert.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
    });
});
