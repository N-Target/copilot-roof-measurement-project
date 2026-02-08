const MATERIALS_DB = {
    roofMaterials: {
        Bramac: { id: 1, type: 'roof', pricePerUnit: 50 },
        Lindab: { id: 2, type: 'roof', pricePerUnit: 60 },
        Tondach: { id: 3, type: 'roof', pricePerUnit: 55 },
        IKO: { id: 4, type: 'roof', pricePerUnit: 65 }
    }
};

const GUTTER_SYSTEMS = {
    PVC: { id: 1, pricePerMeter: 10 },
    metal: { id: 2, pricePerMeter: 15 },
    copper: { id: 3, pricePerMeter: 20 }
};

const ADDITIONAL_COSTS = {
    demolition: { id: 1, cost: 500 },
    insulation: { id: 2, cost: 300 }
};

function getMaterialsByCategory(category) {
    return MATERIALS_DB[category] || {};
}

function getMaterialById(id) {
    for (const category in MATERIALS_DB) {
        const material = MATERIALS_DB[category][id];
        if (material) return material;
    }
    return null;
}

function getGutterById(id) {
    return GUTTER_SYSTEMS[id] || null;
}

function getAdditionalCostById(id) {
    return ADDITIONAL_COSTS[id] || null;
}

// Exporting to window scope
window.MATERIALS_DB = MATERIALS_DB;
window.GUTTER_SYSTEMS = GUTTER_SYSTEMS;
window.ADDITIONAL_COSTS = ADDITIONAL_COSTS;
window.getMaterialsByCategory = getMaterialsByCategory;
window.getMaterialById = getMaterialById;
window.getGutterById = getGutterById;
window.getAdditionalCostById = getAdditionalCostById;