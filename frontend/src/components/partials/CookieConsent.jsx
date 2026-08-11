import React from 'react';

export default function CookieConsent() {
    return (
        <>
            
<div className="cookie-consent" id="cookieConsent" role="alert" aria-live="polite">
    <div className="cookie-consent__title">🍪 Cookie Preferences</div>
    <p className="cookie-consent__text">
        We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.
    </p>
    <div className="cookie-consent__buttons">
        <button className="btn btn--primary btn--sm" data-cookie-accept>Accept All</button>
        <button className="btn btn--outline btn--sm" data-cookie-reject>Reject</button>
    </div>
</div>

        </>
    );
}
