<?php  ?>
<div class="whatsapp-float" id="whatsappFloat">
    <span class="whatsapp-float__tooltip">Chat with us!</span>
    <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= urlencode(WHATSAPP_MESSAGE) ?>"
       class="whatsapp-float__btn"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
