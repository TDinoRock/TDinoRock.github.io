document.addEventListener('DOMContentLoaded', () => {
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
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !subject || !message) {
            return;
        }

        const originalLabel = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Opening email...';

        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailtoLink = `mailto:trennont@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        const item = document.createElement('div');
        item.className = 'message-card';
        item.innerHTML = `<strong>${name}</strong><p>Your email app should open with your message ready to send.</p>`;
        board.prepend(item);

        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
    });
});
