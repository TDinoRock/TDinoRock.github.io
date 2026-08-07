document.addEventListener('DOMContentLoaded', () => {
    const consentKey = 'portfolio-cookie-consent';
    const visitKey = 'portfolio-visit-count';
    const cookieDays = 2;

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    }

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
    }

    function createConsentBanner() {
        if (document.getElementById('cookie-consent-banner')) {
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        banner.innerHTML = `
            <p>This site uses cookies to remember visitor preferences and basic visit information.</p>
            <div class="cookie-consent-actions">
                <button id="cookie-accept">Accept</button>
                <button id="cookie-reject">Decline</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('cookie-accept').addEventListener('click', () => {
            setCookie(consentKey, 'accepted', cookieDays);
            setCookie(visitKey, '1', cookieDays);
            banner.remove();
        });

        document.getElementById('cookie-reject').addEventListener('click', () => {
            setCookie(consentKey, 'rejected', cookieDays);
            banner.remove();
        });
    }

    const consent = getCookie(consentKey);
    const visitCount = Number(getCookie(visitKey) || 0);

    if (!consent) {
        createConsentBanner();
    }

    if (consent === 'accepted') {
        setCookie(visitKey, String(visitCount + 1), cookieDays);
    }
});
