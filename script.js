document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu for smaller screens---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); 
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- FAQ Accordion---
    const faqContainer = document.getElementById('faq');
    if (faqContainer) {
        faqContainer.addEventListener('click', (event) => {
            // Use .closest() to ensure we're targeting the button or its child
            const button = event.target.closest('.faq-toggle');
            if (button) {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('span'); 

                // Close all other open answers
                // Iterate over all faq-toggle buttons
                document.querySelectorAll('.faq-toggle').forEach(otherButton => {
                    if (otherButton !== button) {
                        const otherAnswer = otherButton.nextElementSibling;
                        const otherIcon = otherButton.querySelector('span');

                        if (!otherAnswer.classList.contains('hidden')) {
                            otherAnswer.classList.add('hidden');
                            otherIcon.textContent = '+'; 
                        }
                    }
                });

                answer.classList.toggle('hidden');
                if (answer.classList.contains('hidden')) {
                    icon.textContent = '+';
                } else {
                    icon.textContent = '−'; 
                }
            }
        });
    }
});