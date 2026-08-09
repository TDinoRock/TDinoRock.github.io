(function () {
    'use strict';

    function initFooterMessage() {
        const form = document.getElementById('message-form');
        const board = document.getElementById('message-board');

        if (!form || !board) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('message-name');
            const emailInput = document.getElementById('message-email');
            const subjectInput = document.getElementById('message-subject');
            const messageInput = document.getElementById('message-text');
            const submitButton = form.querySelector('button[type="submit"]');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || !email || !subject || !message) {
                return;
            }

            if (submitButton && window.PortfolioUtils) {
                window.PortfolioUtils.setButtonLoadingState(submitButton, true, 'Opening email...');
            }

            const body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
            const mailtoLink = 'mailto:trennont@hotmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

            window.location.href = mailtoLink;

            const item = document.createElement('div');
            item.className = 'message-card';
            item.insertAdjacentHTML('beforeend', '<strong>' + name + '</strong><p>Your email app should open with your message ready to send.</p>');
            board.prepend(item);

            form.reset();

            if (submitButton && window.PortfolioUtils) {
                window.PortfolioUtils.setButtonLoadingState(submitButton, false, 'Opening email...');
            }
        });
    }

    if (window.PortfolioUtils) {
        window.PortfolioUtils.ready(initFooterMessage);
        return;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooterMessage, { once: true });
        return;
    }

    initFooterMessage();
})();
