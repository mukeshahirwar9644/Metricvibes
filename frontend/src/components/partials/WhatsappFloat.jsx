import React from 'react';

export default function WhatsappFloat() {
    return (
        <>
            
<div className="whatsapp-float" id="whatsappFloat">
    <span className="whatsapp-float__tooltip">Chat with us!</span>
    <a href="https://wa.me/?text="
       className="whatsapp-float__btn"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
    </a>
</div>

        </>
    );
}
