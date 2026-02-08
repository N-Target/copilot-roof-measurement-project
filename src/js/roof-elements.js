// ===========================
// Roof Elements Drawing System
// ===========================

let currentElement = null;
let isDrawingElement = false;
let elementPoints = [];
let drawnElements = [];
let tempLine = null;

// Element configuration
const ELEMENT_CONFIG = {
    RIDGE: {
        name: 'Gerinc',
        icon: '📐',
        color: '#ef4444',
        pricePerMeter: 1500,
        description: 'Tetőgerinc - a tető legfelső éle'
    },
    EAVES: {
        name: 'Ereszvonal',
        icon: '💧',
        color: '#10b981',
        pricePerMeter: 3500,
        description: 'Ereszcsatorna vonala'
    },
    VALLEY: {
        name: 'Vápa',
        icon: '⚡',
        color: '#3b82f6',
        pricePerMeter: 2000,
        description: 'Két tetősík találkozása'
    },
    HIP: {
        name: 'Kupás él',
        icon: '🔶',
        color: '#f59e0b',
        pricePerMeter: 1800,
        description: 'Külső tetőél'
    },
    CHIMNEY: {
        name: 'Kémény',
        icon: '🏭',
        color: '#8b5cf6',
        pricePerUnit: 25000,
        description: 'Kémény körülvétel'
    }
};

// Global storage for roof elements data
window.roofElementsData = {
    elements: [],
    totalCost: 0,
    summary: {}
};

// ===========================
// Initialize Module
// ===========================
function initRoofElements(mapInstance) {
    console.log('🎨 Roof Elements Module initializing...');
    
    // Attach event listeners to element buttons
    document.querySelectorAll('.btn-element').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            startDrawingElement(type);
        });
    });

    // Finish element button
    document.getElementById('finish-element-btn')?.addEventListener('click', finishElement);
    
    // Clear elements button
    document.getElementById('clear-elements-btn')?.addEventListener('click', clearAllElements);
    
    console.log('✅ Roof Elements Module initialized');
}

// ===========================
// Start Drawing Element
// ===========================
function startDrawingElement(type) {
    // Stop any current drawing
    if (isDrawingElement) {
        finishElement();
    }

    currentElement = type;
    isDrawingElement = true;
    elementPoints = [];
    
    // Update UI
    document.querySelectorAll('.btn-element').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');
    
    // Show tooltip
    const tooltip = document.getElementById('drawing-tooltip');
    if (tooltip) {
        tooltip.textContent = `🎨 ${ELEMENT_CONFIG[type].name} rajzolása - Kattints a térképre!`;
        tooltip.style.display = 'block';
    }
    
    // Add map click listener
    map.on('click', addElementPoint);
    
    console.log(`🎨 Drawing ${type} started`);
}

// ===========================
// Add Element Point
// ===========================
function addElementPoint(e) {
    if (!isDrawingElement) return;

    const latlng = e.latlng;
    elementPoints.push(latlng);
    
    // Add marker
    L.circleMarker(latlng, {
        radius: 6,
        color: ELEMENT_CONFIG[currentElement].color,
        fillColor: ELEMENT_CONFIG[currentElement].color,
        fillOpacity: 1,
        weight: 2
    }).addTo(map);
    
    // Draw line if more than 1 point
    if (elementPoints.length > 1) {
        // Remove temporary line
        if (tempLine) {
            map.removeLayer(tempLine);
        }
        
        // Draw new line
        tempLine = L.polyline(elementPoints, {
            color: ELEMENT_CONFIG[currentElement].color,
            weight: 4,
            opacity: 0.8,
            dashArray: '10, 5'
        }).addTo(map);
    }
    
    // For CHIMNEY, finish after 1 point
    if (currentElement === 'CHIMNEY' && elementPoints.length === 1) {
        setTimeout(() => finishElement(), 500);
    }
    
    // Update tooltip
    const tooltip = document.getElementById('drawing-tooltip');
    if (tooltip && currentElement !== 'CHIMNEY') {
        tooltip.textContent = `📏 ${elementPoints.length} pont - Kattints a befejezéshez`;
    }
}

// ===========================
// Finish Element
// ===========================
function finishElement() {
    if (!isDrawingElement || elementPoints.length === 0) return;
    
    const config = ELEMENT_CONFIG[currentElement];
    let length = 0;
    let cost = 0;
    
    // Calculate length (except for CHIMNEY)
    if (currentElement !== 'CHIMNEY') {
        length = calculateGeodesicLength(elementPoints);
        cost = length * config.pricePerMeter;
    } else {
        cost = config.pricePerUnit;
    }
    
    // Create permanent line
    const line = L.polyline(elementPoints, {
        color: config.color,
        weight: 5,
        opacity: 1
    }).addTo(map);
    
    // Add popup
    const popupContent = currentElement === 'CHIMNEY' 
        ? `<strong>${config.icon} ${config.name}</strong><br>Ár: ${cost.toLocaleString()} Ft`
        : `<strong>${config.icon} ${config.name}</strong><br>Hossz: ${length.toFixed(2)} m<br>Ár: ${cost.toLocaleString()} Ft`;
    
    line.bindPopup(popupContent);
    
    // Store element
    const element = {
        type: currentElement,
        points: elementPoints.map(p => [p.lat, p.lng]),
        length: length,
        cost: cost,
        layer: line
    };
    
    drawnElements.push(element);
    window.roofElementsData.elements = drawnElements;
    
    // Reset drawing state
    resetDrawing();
    
    // Update summary
    updateElementsSummary();
    
    console.log(`✅ ${currentElement} finished: ${length.toFixed(2)}m, ${cost} Ft`);
}

// ===========================
// Reset Drawing State
// ===========================
function resetDrawing() {
    isDrawingElement = false;
    currentElement = null;
    elementPoints = [];
    
    if (tempLine) {
        map.removeLayer(tempLine);
        tempLine = null;
    }
    
    map.off('click', addElementPoint);
    
    // Update UI
    document.querySelectorAll('.btn-element').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const tooltip = document.getElementById('drawing-tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// ===========================
// Calculate Geodesic Length
// ===========================
function calculateGeodesicLength(points) {
    if (points.length < 2) return 0;
    
    let totalLength = 0;
    
    for (let i = 0; i < points.length - 1; i++) {
        const from = points[i];
        const to = points[i + 1];
        const distance = map.distance(from, to);
        totalLength += distance;
    }
    
    return totalLength;
}

// ===========================
// Update Elements Summary
// ===========================
function updateElementsSummary() {
    const summaryDiv = document.getElementById('elements-summary');
    if (!summaryDiv) return;
    
    if (drawnElements.length === 0) {
        summaryDiv.innerHTML = '<p class="text-muted">Még nincs elem rajzolva</p>';
        window.roofElementsData.totalCost = 0;
        window.roofElementsData.summary = {};
        return;
    }
    
    // Group by type
    const grouped = {};
    let totalCost = 0;
    
    drawnElements.forEach(el => {
        if (!grouped[el.type]) {
            grouped[el.type] = {
                count: 0,
                totalLength: 0,
                totalCost: 0,
                config: ELEMENT_CONFIG[el.type]
            };
        }
        
        grouped[el.type].count++;
        grouped[el.type].totalLength += el.length;
        grouped[el.type].totalCost += el.cost;
        totalCost += el.cost;
    });
    
    // Generate HTML
    let html = '<div class="elements-list">';
    
    Object.keys(grouped).forEach(type => {
        const item = grouped[type];
        const isChimney = type === 'CHIMNEY';
        
        html += `
            <div class="element-summary-item">
                <span class="element-indicator" style="background: ${item.config.color}"></span>
                <div class="element-info">
                    <strong>${item.config.icon} ${item.config.name}</strong>
                    <span>${isChimney ? item.count + ' db' : item.totalLength.toFixed(2) + ' m'}</span>
                    <span class="element-cost">${item.totalCost.toLocaleString()} Ft</span>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        <div class="elements-total">
            <strong>Összes elem költsége:</strong>
            <span>${totalCost.toLocaleString()} Ft</span>
        </div>
    `;
    
    summaryDiv.innerHTML = html;
    
    // Update global data
    window.roofElementsData.totalCost = totalCost;
    window.roofElementsData.summary = grouped;
}

// ===========================
// Clear All Elements
// ===========================
function clearAllElements() {
    if (drawnElements.length === 0) return;
    
    if (!confirm('Biztosan törölni szeretnéd az összes tető elemet?')) return;
    
    // Remove layers
    drawnElements.forEach(el => {
        if (el.layer) {
            map.removeLayer(el.layer);
        }
    });
    
    drawnElements = [];
    window.roofElementsData.elements = [];
    
    resetDrawing();
    updateElementsSummary();
    
    console.log('🗑️ All roof elements cleared');
}

// ===========================
// Export for global access
// ===========================
window.initRoofElements = initRoofElements;
window.roofElementsData = window.roofElementsData || { elements: [], totalCost: 0, summary: {} };