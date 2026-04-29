/* ==========================================
   JAPÓN 2026 - COMBINADOR DE DATOS
   Combina los 3 archivos de datos modulares en el array global travelData
   que usa script.js
   ========================================== */

const travelData = [
    ...(typeof travelData_00_08 !== 'undefined' ? travelData_00_08 : []),
    ...(typeof travelData_09_16 !== 'undefined' ? travelData_09_16 : []),
    ...(typeof travelData_17_24 !== 'undefined' ? travelData_17_24 : [])
];
