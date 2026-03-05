const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
const vm = require('vm');
const context = { window: {}, document: {} };
vm.createContext(context);
try {
    vm.runInContext(content, context);
    const data = context.travelData;
    let out = [];
    data.forEach(d => {
        let check = (arr, type) => {
            if(!arr) return;
            arr.forEach(i => {
                if(!i.video && (i.title || i.name)) {
                    out.push('- **Día ' + d.day + '** (' + type + '): ' + (i.title || i.name) + ' -> Buscar en YT: ' + (i.title || i.name) + ' Japón');
                }
            });
        };
        check(d.options, 'Opción');
        if(d.base) check(d.base.events, 'Base');
        check(d.complements, 'Complemento');
        check(d.additionalExcursions, 'Adicional');
    });
    console.log(out.join('\n'));
} catch(e) { console.log(e.message); }
