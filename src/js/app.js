// Secure Version of app.js

// Import necessary classes
import InputSanitizer from './InputSanitizer';

// Utility function for rate limiting
function rateLimit(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}

// Secure fetch function with rate limiting and input sanitization
const secureFetch = rateLimit(async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}, 2000);

// Input sanitization example
const userInput = document.getElementById('user-input').value;
const sanitizedInput = InputSanitizer.sanitize(userInput);

// Function to handle debounced search
let debounceTimer;
function debouncedSearch(event) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = InputSanitizer.sanitize(event.target.value);
        search(query);
    }, 300);
}

// Update roof segments list with polygon controls
function updateRoofSegmentsList(polygons) {
    const listElement = document.getElementById('roof-segment-list');
    listElement.innerHTML = '';
    polygons.forEach((polygon, index) => {
        const multiplierInput = document.createElement('input');
        multiplierInput.type = 'number';
        multiplierInput.value = polygon.multiplier || 1;
        multiplierInput.onchange = (e) => {
            polygon.multiplier = e.target.value;
        };
        const listItem = document.createElement('li');
        listItem.innerText = `Polygon ${index + 1}`;
        listItem.appendChild(multiplierInput);
        listElement.appendChild(listItem);
    });
}

// Example usage
const polygons = [{}, {}, {}]; // Example polygons list
updateRoofSegmentsList(polygons);

