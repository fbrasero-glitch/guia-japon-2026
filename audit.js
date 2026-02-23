const fs = require('fs');
const path = require('path');

// Read data.js
const dataFile = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf-8');

// We need to carefully evaluate or parse the file. Since it's just const travelData = [...], 
// we can replace 'const travelData =' with 'module.exports =' and evaluate it in a clean context.
let moduleContent = dataFile.replace('const travelData =', 'module.exports =');
// Write out to temp file
fs.writeFileSync(path.join(__dirname, 'tempData.js'), moduleContent);

const travelData = require('./tempData.js');

const missingImages = [];
const missingVideos = [];

// Helper to check if an object has image/video
function checkMedia(obj, contextName) {
    if (!obj.image) {
        missingImages.push({ context: contextName });
    }
    // For videos, it's typically expected on base events and complements that are major
    if (!obj.video) {
        missingVideos.push({ context: contextName });
    }
}

travelData.forEach(day => {
    if (day.type === "preparation") return;

    let dayName = \`Día \${day.day}: \${day.title}\`;
    
    // Check main day image
    if (!day.image) missingImages.push({ context: \`\${dayName} (Portada)\` });
    
    // Check base events
    if (day.base && day.base.events) {
        day.base.events.forEach(event => {
            if (event.type === 'gap') return;
            let eventName = \`\${dayName} - [BASE] \${event.title}\`;
            if (!event.image) missingImages.push({ context: eventName });
            if (!event.video) missingVideos.push({ context: eventName });
        });
    }
    
    // Check complements
    if (day.complements) {
        day.complements.forEach(comp => {
            let compName = \`\${dayName} - [OPCIONAL] \${comp.title}\`;
            if (!comp.image) missingImages.push({ context: compName });
            if (!comp.video) missingVideos.push({ context: compName });
        });
    }
});

fs.writeFileSync(path.join(__dirname, 'audit_results.json'), JSON.stringify({
    missingImages,
    missingVideos
}, null, 2));

console.log('Audit complete.');
