// ===========================
// Global State
// ============================
let map = null;
let currentLayer = 'street';
let roofPolygons = [];
let isDrawing = false;
let currentPoints = [];
let totalArea = 0;

// ===========================
// Initialize Map
// ============================
function initMap() {
    // Initialize Leaflet map centered on Budapest
    map = L.map('map').setView([47.4979, 19.0402], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    console.log('Map initialized successfully');
}

// ===========================
// Address Search (Nominatim API)
// ============================
async function searchAddress(address) {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = 'Keresés...';
    searchResult.className = 'search-result show';

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=hu&limit=1`
        );
        const data = await response.json();

        if (data.length > 0) {
            const { lat, lon, display_name } = data[0];
            map.setView([lat, lon], 18);

            searchResult.textContent = `✓ Találat: ${display_name}`;
            searchResult.className = 'search-result show success';

            // Enable drawing tools
            document.getElementById('draw-btn').disabled = false;
        } else {
            searchResult.textContent = '✗ Nem található a cím';
            searchResult.className = 'search-result show error';
        }
    } catch (error) {
        searchResult.textContent = '✗ Hiba történt a keresés során';
        searchResult.className = 'search-result show error';
        console.error('Search error:', error);
    }
}

// ===========================
// Drawing Functions
// ============================
function startDrawing() {
    isDrawing = true;
    currentPoints = [];
    document.getElementById('draw-btn').textContent = '⏸ Rajzolás befejezése';
    
    map.on('click', addPoint);
}

function addPoint(e) {
    if (!isDrawing) return;

    currentPoints.push([e.latlng.lat, e.latlng.lng]);

    // Add marker for visual feedback
    L.circleMarker(e.latlng, {
        radius: 5,
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 1
    }).addTo(map);

    // Draw line between points
    if (currentPoints.length > 1) {
        L.polyline(currentPoints, { color: '#3b82f6' }).addTo(map);
    }
}

function finishDrawing() {
    if (currentPoints.length < 3) {
        alert('Legalább 3 pontot jelölj ki!');
        return;
    }

    isDrawing = false;
    map.off('click', addPoint);

    // Create polygon
    const polygon = L.polygon(currentPoints, {
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.3
    }).addTo(map);

    // Calculate area (Leaflet gives area in square meters)
    const area = L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]);

    roofPolygons.push({ polygon, area });
    updateTotalArea();

    document.getElementById('draw-btn').textContent = '✏️ Új felület rajzolása';
    document.getElementById('calculate-btn').disabled = false;
}

// ===========================
// Area Calculation
// ============================
function updateTotalArea() {
    totalArea = roofPolygons.reduce((sum, item) => sum + item.area, 0);
    document.getElementById('area-value').textContent = totalArea.toFixed(2);
}

// ===========================
// Cost Calculation
// ============================
function calculateCosts() {
    const material = document.getElementById('material-select').value;
    const bontas = document.getElementById('bontas-check').checked;
    const lecezes = document.getElementById('lecezes-check').checked;
    const folia = document.getElementById('folia-check').checked;

    if (!material) {
        alert('Válassz tetőfedő anyagot!');
        return;
    }

    const prices = {
        cserep: 3500,
        trapezlemez: 2800,
        zsindely: 4200
    };

    let totalCost = 0;
    let breakdown = '';

    // Material cost
    const materialCost = totalArea * prices[material];
    totalCost += materialCost;
    breakdown += `<p><strong>Tetőfedő anyag:</strong> ${materialCost.toLocaleString()} Ft</p>`;

    // Additional costs
    if (bontas) {
        const cost = totalArea * 800;
        totalCost += cost;
        breakdown += `<p><strong>Bontás:</strong> ${cost.toLocaleString()} Ft</p>`;
    }
    if (lecezes) {
        const cost = totalArea * 1200;
        totalCost += cost;
        breakdown += `<p><strong>Lécezés:</strong> ${cost.toLocaleString()} Ft</p>`;
    }
    if (folia) {
        const cost = totalArea * 800;
        totalCost += cost;
        breakdown += `<p><strong>Szigetelő fólia:</strong> ${cost.toLocaleString()} Ft</p>`;
    }

    breakdown += `<hr><p><strong>Összesen:</strong> ${totalCost.toLocaleString()} Ft</p>`;

    const resultDiv = document.getElementById('calculation-result');
    resultDiv.innerHTML = breakdown;
    resultDiv.className = 'calculation-result show';

    document.getElementById('generate-pdf-btn').disabled = false;
}

// ===========================
// PDF Generation
// ============================
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Tető Felület Árajánlat', 20, 20);

    doc.setFontSize(12);
    doc.text(`Összterület: ${totalArea.toFixed(2)} m²`, 20, 40);
    doc.text(`Dátum: ${new Date().toLocaleDateString('hu-HU')}`, 20, 50);

    // Add calculation results
    doc.text('Költségbecslés:', 20, 70);
    const resultText = document.getElementById('calculation-result').innerText;
    doc.text(resultText, 20, 80);

    doc.save('teto-arajanlat.pdf');
}

// ===========================
// Event Listeners
// ============================
document.addEventListener('DOMContentLoaded', () => {
    initMap();

    document.getElementById('search-btn').addEventListener('click', () => {
        const address = document.getElementById('address-input').value;
        if (address) searchAddress(address);
    });

    document.getElementById('address-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const address = e.target.value;
            if (address) searchAddress(address);
        }
    });

    document.getElementById('draw-btn').addEventListener('click', () => {
        if (isDrawing) {
            finishDrawing();
        } else {
            startDrawing();
        }
    });

    document.getElementById('calculate-btn').addEventListener('click', calculateCosts);
    document.getElementById('generate-pdf-btn').addEventListener('click', generatePDF);
});

// Add Leaflet GeometryUtil plugin for area calculation
L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
    geodesicArea: function (latLngs) {
        var pointsCount = latLngs.length,
            area = 0.0,
            d2r = Math.PI / 180,
            p1, p2;

        if (pointsCount > 2) {
            for (var i = 0; i < pointsCount; i++) {
                p1 = latLngs[i];
                p2 = latLngs[(i + 1) % pointsCount];
                area += ((p2.lng - p1.lng) * d2r) *
                        (2 + Math.sin(p1.lat * d2r) + Math.sin(p2.lat * d2r));
            }
            area = area * 6378137.0 * 6378137.0 / 2.0;
        }

        return Math.abs(area);
    }
});