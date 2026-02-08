const MATERIALS_DB = {
  cserepek: {
    "Bramac betoncserép": 3200,
    "Terran betoncserép": 3400,
    "Tondach kerámia": 4800,
    "Creaton kerámia": 5200,
    "Engóbozott": 3800
  },
  femlemezek: {
    "Trapézlemez T12": 2500,
    "Trapézlemez T18 Premium": 3200,
    "Lindab Plannja Premium": 3800,
    "Lindab állófalc Premium": 5500,
    "Ruukki Classic Premium": 4200,
    "Szendvicspanel": 4500
  },
  zsindelyek: {
    "IKO Cambridge": 3500,
    "Tegola Nordland": 3800,
    "CertainTeed Landmark": 4200,
    "Fa zsindely": 6500
  }
};

const GUTTER_SYSTEMS = {
  "PVC Ø125mm": 2500,
  "PVC Ø150mm": 3200,
  "Lindab fém Ø125mm Premium": 4500,
  "Lindab fém Ø150mm Premium": 5800,
  "Ruukki fém Ø125mm Premium": 4800,
  "Réz Premium": 12000
};

const ADDITIONAL_COSTS = {
  "bontas": 800,
  "lecezes": 1200,
  "folia": 800,
  "palozat": 2200,
  "hoszigeteles": 3500,
  "parazaro": 600,
  "szellozoret": 400
};

function getMaterialsByCategory(category) {
  return MATERIALS_DB[category];
}

function getMaterialById(category, id) {
  return MATERIALS_DB[category][id];
}

function getGutterById(id) {
  return GUTTER_SYSTEMS[id];
}

function getAdditionalCostById(id) {
  return ADDITIONAL_COSTS[id];
}

// Exporting to window scope
window.MATERIALS_DB = MATERIALS_DB;
window.GUTTER_SYSTEMS = GUTTER_SYSTEMS;
window.ADDITIONAL_COSTS = ADDITIONAL_COSTS;
window.getMaterialsByCategory = getMaterialsByCategory;
window.getMaterialById = getMaterialById;
window.getGutterById = getGutterById;
window.getAdditionalCostById = getAdditionalCostById;