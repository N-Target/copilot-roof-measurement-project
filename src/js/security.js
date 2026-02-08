class SecureFetch {
    constructor() {
        this.requests = new Map(); // To track request counts
        this.rateLimit = 5; // Max requests per minute
        this.timeoutDuration = 10000; // Timeout duration in ms
    }

    async fetch(url, options = {}) {
        const now = Date.now();
        const currentCount = this.requests.get(url) || { count: 0, lastRequest: 0 };

        if (currentCount.lastRequest && now - currentCount.lastRequest < 60000) {
            if (currentCount.count >= this.rateLimit) {
                throw new Error('Rate limit exceeded.');
            }
        } else {
            currentCount.count = 0; // Reset count if a minute has passed
        }

        currentCount.count++;
        currentCount.lastRequest = now;
        this.requests.set(url, currentCount);

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => { reject('Request timed out.'); }, this.timeoutDuration);
            fetch(url, options)
                .then(response => {
                    clearTimeout(timeout);
                    resolve(response);
                })
                .catch(error => {
                    clearTimeout(timeout);
                    reject(error);
                });
        });
    }
}

class InputSanitizer {
    sanitizeHTML(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    sanitizeNumber(input) {
        return isNaN(input) ? 0 : Number(input);
    }

    sanitizeCoordinates(input) {
        const [lat, lng] = input.split(',').map(coord => this.sanitizeNumber(coord.trim()));
        return `${lat},${lng}`;
    }

    validateInput(input) {
        return typeof input === 'string' && input.trim() !== '';
    }
}

class SecureStorage {
    setItem(key, value) {
        if (this.isPrototypePolluted()) {
            throw new Error('Prototype pollution detected.');
        }
        localStorage.setItem(key, value);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    isPrototypePolluted() {
        return !({}.toString() === '[object Object]');
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Exporting to window object
window.SecureFetch = SecureFetch;
window.InputSanitizer = InputSanitizer;
window.SecureStorage = SecureStorage;
window.debounce = debounce;
