/* =========================================================
   HOUSE OF RAY
   Main JavaScript
   ========================================================= */


/* =========================================================
   01. PAGE READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeContactForm();
    initializeSmoothLinks();

});


/* =========================================================
   02. CONTACT FORM
   ========================================================= */

function initializeContactForm() {

    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        if (message) {

            message.textContent =
                "Thanks for reaching out. We'll be in touch shortly.";

        }

        /*
         * For now this is only the front-end interaction.
         *
         * Later we can connect this form to:
         *
         * - WhatsApp
         * - Email
         * - Formspree
         * - Resend
         * - A House of Ray backend
         *
         * We do not send anything yet because the
         * client's actual contact workflow has not
         * been confirmed.
         */

        form.reset();

    });

}


/* =========================================================
   03. SMOOTH INTERNAL LINKS
   ========================================================= */

function initializeSmoothLinks() {

    const links = document.querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    );

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* =========================================================
   04. SIMPLE SCROLL STATE
   ========================================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});