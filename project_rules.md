# CONTEXTO DEL PROYECTO: JAPÓN 2026 (IVÁN)

## 1. OBJETIVO
Web interactiva tipo "Centro de Mando" para un viaje familiar. Usuario clave: Iván (13 años).
Estilo visual: Oscuro, Cyberpunk/Futurista, Cine.

## 2. ESTRUCTURA TÉCNICA
- **index.html**: Layout de 3 columnas.
    1. Sidebar (.sidebar): Navegación días.
    2. Centro (.center-stage): Visualización (Fotos cine + Historia).
    3. Derecha (.right-panel): Datos, Logística y Botones de Misión.
- **style.css**: Usa variables CSS (--bg, --accent, --gold). Clases clave: .cinema-mode-img, .story-container, .hover-preview.
- **script.js**: 
    - Array `travelData`: Contiene toda la info.
    - Librería: Leaflet (L.map) para mapas.
    - Función `init()`: Carga mapas y botones con lógica de hover (ventana espía).

## 3. FORMATO DE DATOS (IMPORTANTE)
Cada día en `travelData` debe seguir este esquema JSON estricto:
{
    day: X, 
    type: "travel" | "stay",
    date: "Fecha", 
    title: "Título",
    coords: [Lat, Lng], 
    zoom: 13,
    hotel: "Nombre Hotel",
    image: "images/nombre-foto.jpg",
    logistics: [{title: "...", text: "..."}],
    timeline: [{time: "HH:MM", title: "...", desc: "..."}],
    // Solo si type="travel":
    visualContent: { summary: "...", details: "..." },
    // Solo si type="stay" (con opciones):
    hasOptions: true,
    options: [
        {
            id: "A", name: "...", summary: "...",
            image: "images/...",
            fullDesc: "HTML con <h3> y <p>",
            photoSpot: "...",
            ivanChallenge: "..." 
        }
    ]
}

## 4. INSTRUCCIONES DE GENERACIÓN
- Al añadir días, NO borres código anterior.
- Usa siempre iconos de FontAwesome (<i class="fa-solid ...">).
- Incluye siempre el campo `ivanChallenge` en las opciones de excursión.