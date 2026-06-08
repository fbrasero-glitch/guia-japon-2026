const vm = require('vm');
const fs = require('fs');

let content1 = fs.readFileSync('data_dias_00_08.js', 'utf8');
let content2 = fs.readFileSync('data_dias_09_16.js', 'utf8');
let content3 = fs.readFileSync('data_dias_17_24.js', 'utf8');

const data1 = vm.runInNewContext(content1 + "\n; travelData_00_08;");
const data2 = vm.runInNewContext(content2 + "\n; travelData_09_16;");
const data3 = vm.runInNewContext(content3 + "\n; travelData_17_24;");

const allData = (data1 || []).concat(data2 || []).concat(data3 || []);

let md = "# GUÍA COMPLETA DE VIAJE A JAPÓN 2026\n\n";
md += "Esta guía contiene toda la información de la página web extraída y formateada como texto, estructurada por días, incluyendo transporte, rutas, y exursiones alternativas.\n\n---\n\n";

allData.forEach(dayInfo => {
    md += `## Día ${dayInfo.day}: ${dayInfo.title} (${dayInfo.date || ''})\n\n`;
    
    if (dayInfo.hotel) {
        md += `**🏨 Alojamiento:** ${dayInfo.hotel}\n\n`;
    }

    if (dayInfo.preparation) {
        md += `### 📋 Preparación General\n\n`;
        if (dayInfo.preparation.sections) {
            dayInfo.preparation.sections.forEach(sec => {
                md += `#### ${sec.title}\n`;
                sec.items.forEach(item => {
                    md += `- **${item.title}**: ${item.desc} (Resp: ${item.who})\n`;
                });
                md += '\n';
            });
        }
        if (dayInfo.preparation.specialNotes) {
            dayInfo.preparation.specialNotes.forEach(note => {
                md += `#### ${note.title}\n`;
                note.items.forEach(item => {
                    md += `- ${item}\n`;
                });
                md += '\n';
            });
        }
        if (dayInfo.preparation.tips) {
            md += `#### Consejos\n`;
            dayInfo.preparation.tips.forEach(tip => md += `- ${tip}\n`);
            md += '\n';
        }
    }

    if (dayInfo.logistics && dayInfo.logistics.length > 0) {
        md += `### ⚙️ Logística y Tips\n`;
        dayInfo.logistics.forEach(log => {
            md += `- **${log.title}:** ${log.text}\n`;
        });
        md += '\n';
    }

    if (dayInfo.additions && dayInfo.additions.length > 0) {
        md += `### 📌 Notas Adicionales\n`;
        dayInfo.additions.forEach(add => {
            md += `- ${add}\n`;
        });
        md += '\n';
    }

    if (dayInfo.prices) {
        md += `### 💰 Estimación de Precios\n`;
        if (dayInfo.prices.transport) md += `- **Transporte:** ${dayInfo.prices.transport}\n`;
        if (dayInfo.prices.entrances) md += `- **Entradas:** ${dayInfo.prices.entrances}\n`;
        if (dayInfo.prices.food) md += `- **Comida:** ${dayInfo.prices.food}\n`;
        if (dayInfo.prices.total) md += `- **Total:** ${dayInfo.prices.total}\n`;
        md += '\n';
    }

    if (dayInfo.timeline && dayInfo.timeline.length > 0) {
        md += `### ⏱️ Resumen del Día\n`;
        dayInfo.timeline.forEach(t => {
            md += `- **${t.time}** - ${t.title}: ${t.desc}\n`;
        });
        md += '\n';
    }

    if (dayInfo.transportTimeline && dayInfo.transportTimeline.length > 0) {
        md += `### 🚆 Transporte Detallado\n`;
        dayInfo.transportTimeline.forEach(t => {
            let line = `- `;
            if (t.time) line += `**${t.time}** `;
            line += `**${t.title}**`;
            if (t.timeLabel) line += ` (${t.timeLabel})`;
            if (t.price) line += ` [${t.price}]`;
            md += line + '\n';
        });
        md += '\n';
    }

    if (dayInfo.base && dayInfo.base.events) {
        md += `### 🗺️ Itinerario Base (Ruta Central)\n`;
        md += `_${dayInfo.base.description || ''}_\n\n`;
        dayInfo.base.events.forEach(ev => {
            md += `#### ${ev.time || ''} - ${ev.title || ''}\n`;
            if (ev.description) md += `${ev.description}\n\n`;
            if (ev.fullDesc) {
                // Remove HTML tags 
                let fd = ev.fullDesc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                md += `*Detalle:* ${fd}\n\n`;
            }
            if (ev.price) md += `- **Precio:** ${ev.price}\n\n`;
        });
    }

    if (dayInfo.complements && dayInfo.complements.length > 0) {
        md += `### 🔄 Complementos / Alternativas\n`;
        dayInfo.complements.forEach(comp => {
            md += `#### ${comp.time || ''} - ${comp.title || ''}\n`;
            if (comp.description) md += `${comp.description}\n\n`;
             if (comp.fullDesc) {
                let fd = comp.fullDesc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                md += `*Detalle:* ${fd}\n\n`;
            }
            if (comp.price) md += `- **Precio:** ${comp.price}\n\n`;
        });
    }

    if (dayInfo.additionalExcursions && dayInfo.additionalExcursions.length > 0) {
        md += `### ✨ Excursiones Adicionales\n`;
        dayInfo.additionalExcursions.forEach(exc => {
            md += `#### ${exc.time || ''} - ${exc.title || ''}\n`;
            if (exc.description) md += `${exc.description}\n\n`;
            if (exc.fullDesc) {
                let fd = exc.fullDesc.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                md += `*Detalle:* ${fd}\n\n`;
            }
            if (exc.price) md += `- **Precio:** ${exc.price}\n\n`;
        });
    }

    md += `---\n\n`;
});

fs.writeFileSync('guia_viaje_japon.md', md, 'utf8');
console.log('Done!');
