(function () {
    'use strict';

    const PortfolioUtils = {
        ready(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback, { once: true });
                return;
            }

            callback();
        },

        getElement(selectorOrId) {
            if (typeof selectorOrId === 'string') {
                return document.querySelector(selectorOrId);
            }

            return document.getElementById(selectorOrId);
        },

        setButtonLoadingState(button, isLoading, loadingLabel) {
            if (!button) {
                return;
            }

            const buttonText = button.textContent;

            if (isLoading) {
                button.dataset.originalLabel = buttonText;
                button.disabled = true;
                button.textContent = loadingLabel;
                return;
            }

            button.disabled = false;
            button.textContent = button.dataset.originalLabel || buttonText;
        }
    };

    window.PortfolioUtils = PortfolioUtils;
})();
