// roof-elements.js

const roofElements = {
    RIDGE: {
        color: '#FF5733', // Red
        manualMeasurement: 0,
        snapToPoint: true,
        costCalculation: function(length) {
            return length * 10; // Example cost per unit
        }
    },
    EAVES: {
        color: '#33FF57', // Green
        manualMeasurement: 0,
        snapToPoint: true,
        costCalculation: function(length) {
            return length * 8; // Example cost per unit
        }
    },
    VALLEY: {
        color: '#3357FF', // Blue
        manualMeasurement: 0,
        snapToPoint: true,
        costCalculation: function(length) {
            return length * 12; // Example cost per unit
        }
    },
    HIP: {
        color: '#FFFF33', // Yellow
        manualMeasurement: 0,
        snapToPoint: true,
        costCalculation: function(length) {
            return length * 9; // Example cost per unit
        }
    },
    CHIMNEY: {
        color: '#FF33FF', // Magenta
        manualMeasurement: 0,
        snapToPoint: true,
        costCalculation: function(length) {
            return length * 15; // Example cost per unit
        }
    }
};

// Example usage of the roofElements object
function calculateCost(elementType, length) {
    if (roofElements[elementType]) {
        return roofElements[elementType].costCalculation(length);
    }
    return null;
}

module.exports = { roofElements, calculateCost };