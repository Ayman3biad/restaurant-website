/* Main JavaScript for Cafe Management System */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips if Bootstrap is used
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Flash message auto-dismiss
    const flashMessages = document.querySelectorAll('.alert');
    if (flashMessages.length > 0) {
        flashMessages.forEach(message => {
            setTimeout(() => {
                message.style.opacity = '0';
                setTimeout(() => {
                    message.style.display = 'none';
                }, 500);
            }, 5000);
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    if (forms.length > 0) {
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
        });
    }

    // Quantity controls in order page
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    
    if (decreaseButtons.length > 0 && increaseButtons.length > 0) {
        decreaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentNode.querySelector('.quantity-input');
                const value = parseInt(input.value);
                if (value > 1) {
                    input.value = value - 1;
                }
            });
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentNode.querySelector('.quantity-input');
                const value = parseInt(input.value);
                input.value = value + 1;
            });
        });
    }

    // Payment method selection in order page
    const paymentOptions = document.querySelectorAll('.payment-option');
    const paymentMethodInput = document.getElementById('payment_method_input');
    
    if (paymentOptions.length > 0 && paymentMethodInput) {
        paymentOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                paymentOptions.forEach(o => o.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Update hidden input value
                paymentMethodInput.value = this.getAttribute('data-method');
            });
        });
    }

    // Category tabs in menu page
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Handle category filtering based on implementation
                // This is handled in the specific page scripts
            });
        });
    }

    // Print receipt functionality
    const printReceiptBtn = document.querySelector('.print-receipt-btn');
    
    if (printReceiptBtn) {
        printReceiptBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Language switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = this.getAttribute('href');
        });
    }

    // Initialize any charts if Chart.js is available
    if (typeof Chart !== 'undefined') {
        // Charts are initialized in their specific pages
    }
});
