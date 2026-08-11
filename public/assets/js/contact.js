
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const form = document.getElementById('contactForm');
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    if (form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const messageEl = document.getElementById('contactFormMessage');
        const validators = {
            name: (v) => v.trim().length >= 2 ? '' : 'Please enter your name (min 2 characters)',
            email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address',
            message: (v) => v.trim().length >= 10 ? '' : 'Please enter your message (min 10 characters)',
        };
        function showError(field, message) {
            field.classList.add('is-invalid');
            let errorEl = field.parentElement.querySelector('.invalid-feedback');
            if (!errorEl) {
                errorEl = document.createElement('div');
                errorEl.className = 'invalid-feedback';
                errorEl.style.cssText = 'display:block;font-size:0.8rem;color:var(--color-error);margin-top:4px;';
                field.parentElement.appendChild(errorEl);
            }
            errorEl.textContent = message;
        }
        function clearError(field) {
            field.classList.remove('is-invalid');
            const errorEl = field.parentElement.querySelector('.invalid-feedback');
            if (errorEl) errorEl.remove();
        }
        form.querySelectorAll('.form-control').forEach(field => {
            field.addEventListener('blur', () => {
                const validator = validators[field.name];
                if (validator) {
                    const error = validator(field.value);
                    if (error) showError(field, error);
                    else clearError(field);
                }
            });
            field.addEventListener('input', () => clearError(field));
        });
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const honeypot = form.querySelector('[name="website_url"]');
            if (honeypot && honeypot.value) return;
            let hasErrors = false;
            form.querySelectorAll('.form-control[required]').forEach(field => {
                const validator = validators[field.name];
                if (validator) {
                    const error = validator(field.value);
                    if (error) {
                        showError(field, error);
                        hasErrors = true;
                    }
                }
            });
            if (hasErrors) return;
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            try {
                const formData = new FormData(form);
                const response = await fetch(form.action || 'contact/submit', {
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: formData
                });
                const data = await response.json();
                if (response.ok && data.status === 'success') {
                    showMessage('success', data.message);
                    form.reset();
                } else {
                    showMessage('error', data.message || 'Error sending message. Please try again.');
                }
            } catch (error) {
                showMessage('error', 'Network error. Please check your connection and try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
        function showMessage(type, text) {
            if (messageEl) {
                messageEl.className = `form-message form-message--${type} show`;
                messageEl.innerHTML = text;
                messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                setTimeout(() => messageEl.classList.remove('show'), 8000);
            }
        }
    }
    newsletterForms.forEach(nForm => {
        nForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const btn = this.querySelector('button');
            if (!emailInput || !emailInput.value) return;
            const originalBtn = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            try {
                const formData = new FormData();
                formData.append('email', emailInput.value);
                const csrfInput = document.querySelector('input[name="_csrf_token"]');
                if (csrfInput) {
                    formData.append('_csrf_token', csrfInput.value);
                }
                const response = await fetch('/newsletter/subscribe', {
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: formData
                });
                const data = await response.json();
                if (response.ok && data.status === 'success') {
                    btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                    emailInput.value = '';
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.innerHTML = originalBtn;
                    }, 4000);
                } else {
                    alert(data.message || 'Could not subscribe. Please try again.');
                    btn.disabled = false;
                    btn.innerHTML = originalBtn;
                }
            } catch (err) {
                alert('Connection error. Please try again.');
                btn.disabled = false;
                btn.innerHTML = originalBtn;
            }
        });
    });
});
