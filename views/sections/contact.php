<?php  ?>

<section class="section" id="contact">
    <div class="container">
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-envelope"></i> Get In Touch</span>
            <h2 class="section__title">Let's Build Something <span class="text-gradient">Great</span></h2>
            <p class="section__subtitle">
                Ready to transform your analytics stack? Let's discuss your project.
            </p>
        </div>

        <div class="contact__grid">
            <!-- Contact Info -->
            <div class="contact__info" style="display: flex; flex-direction: column;">
                <h3 class="contact__form-title" style="margin-bottom: var(--space-3);">Contact Info</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <i class="fas fa-envelope" style="color: var(--text-primary); margin-top: 4px; font-size: 1.1rem; width: 20px; text-align: center;"></i>
                        <a href="mailto:<?= SITE_EMAIL ?>" style="color: var(--color-accent); font-weight: 500; font-size: 1rem;"><?= SITE_EMAIL ?></a>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <i class="fas fa-calendar" style="color: var(--text-primary); margin-top: 4px; font-size: 1.1rem; width: 20px; text-align: center;"></i>
                        <a href="<?= CALENDLY_URL ?>" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-weight: 500; font-size: 1rem;">Book A Slot - Google Calander</a>
                    </div>

                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <i class="fas fa-location-dot" style="color: var(--text-primary); margin-top: 4px; font-size: 1.1rem; width: 20px; text-align: center;"></i>
                        <a href="https://www.google.com/maps/search/?api=1&query=MetricVibes,+A100,+A+Block,+Sector+58,+Noida,+Uttar+Pradesh+201309" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-weight: 500; font-size: 1rem; line-height: 1.5; text-decoration: none;">
                            MetricVibes, A100, A Block, Sector 58, Noida, Uttar Pradesh 201309
                        </a>
                    </div>
                </div>

                <!-- Map -->
                <div class="contact__map" style="margin-top: var(--space-4); flex: 1; min-height: 250px; position: relative;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.834!2d77.3620303!3d28.6050098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6ab912035%3A0x4c30c193d5505e9c!2salt.f+Sector+58+Noida+%7C+Coworking+Space+In+Noida!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; border-radius: var(--radius-md); position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact__form-wrapper">
                <h3 class="contact__form-title">Drop Us A Message</h3>
                <p class="contact__form-subtitle" style="visibility: hidden; height: 0; margin: 0;">Fill out the form and we'll get back to you within 24 hours.</p>

                <div class="form-message" id="contactFormMessage"></div>

                <form id="contactForm" method="POST" action="/contact/submit">
                    <?= csrf_field() ?>

                    <!-- Honeypot -->
                    <div style="position: absolute; left: -9999px;" aria-hidden="true">
                        <input type="text" name="website_url" tabindex="-1" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <input type="text" name="name" class="form-control form-control--pill" placeholder="Your Name" required aria-label="Full Name">
                    </div>
                    
                    <div class="form-group">
                        <input type="email" name="email" class="form-control form-control--pill" placeholder="Email Address" required aria-label="Email">
                    </div>

                    <div class="form-group">
                        <input type="tel" name="phone" class="form-control form-control--pill" placeholder="Phone Number" aria-label="Phone">
                    </div>
                    
                    <div class="form-group">
                        <input type="text" name="company" class="form-control form-control--pill" placeholder="Company Name" aria-label="Company">
                    </div>

                    <div class="contact__form-row">
                        <div class="form-group">
                            <select name="service" class="form-control form-control--pill" aria-label="Service">
                                <option value="" disabled selected>Select Service</option>
                                <option value="ga4-migration">GA4 Migration</option>
                                <option value="adobe-analytics">Adobe Analytics</option>
                                <option value="mixpanel-amplitude">Mixpanel / Amplitude</option>
                                <option value="gtm">Google Tag Manager</option>
                                <option value="server-side-tracking">Server-Side Tracking</option>
                                <option value="cloud-engineering">Cloud Engineering</option>
                                <option value="ai-automation">AI Automation</option>
                                <option value="llm-integration">LLM Integration</option>
                                <option value="dashboard-development">Dashboard Development</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select name="budget" class="form-control form-control--pill" aria-label="Budget Range">
                                <option value="" disabled selected>Budget Range</option>
                                <option value="<10k">Under $10,000</option>
                                <option value="10k-25k">$10,000 - $25,000</option>
                                <option value="25k-50k">$25,000 - $50,000</option>
                                <option value="50k-100k">$50,000 - $100,000</option>
                                <option value="100k+">$100,000+</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <textarea name="message" class="form-control form-control--pill" placeholder="Tell us about your project..." rows="5" required aria-label="Message" style="border-radius: var(--radius-md);"></textarea>
                    </div>

                    <button type="submit" class="btn btn--lg" style="width: 100%; border-radius: var(--radius-full); background-color: var(--color-accent); color: #ffffff; text-transform: uppercase;">
                        BOOK YOUR DEMO
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
