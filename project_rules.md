# CONTEXTO DEL PROYECTO: JAPÓN 2026 (IVÁN)

## 1. OBJETIVO
Web interactiva tipo "Centro de Mando" para un viaje familiar. Usuario clave: Iván (13 años).
Estilo visual: Oscuro, Cyberpunk/Futurista, Cine.

## 2. ARQUITECTURA MODULAR (NUEVA)
El proyecto está dividido en módulos pequeños para facilitar el trabajo con IA.

### Archivos de DATOS (leer solo el relevante según el día):
| Archivo | Días | Qué contiene |
|---------|------|--------------|
| `data_dias_00_08.js` | Días 0-8 | Preparación, Osaka (D1-5), Hiroshima (D5), Kyoto (D6-8) |
| `data_dias_09_16.js` | Días 9-16 | Kyoto (D9-10), Takayama (D11-13), Fuji (D14-16) |
| `data_dias_17_24.js` | Días 17-24 | Tokyo (D17-23), Regreso (D24) |
| `data_combinator.js` | — | Une los 3 arrays en `travelData` global (3 líneas) |

**⚠️ IMPORTANTE: `data.js` (original) ya NO se usa. No modificarlo.**

### Archivos de LÓGICA (leer solo el relevante según la tarea):
| Archivo | Líneas | Qué contiene |
|---------|--------|--------------|
| `script_engine.js` | ~1488 | Motor principal: `init()`, `loadDay()`, `renderRightPanel()`, `renderCenterVisual()`, `renderPreparationPage()`, booking, countdown, mapas |
| `script_tactical.js` | ~5005 | Solo `renderTacticalMission()` con todas las guías tácticas HTML |

**⚠️ IMPORTANTE: `script.js` (original) ya NO se usa. No modificarlo.**

### index.html:
Carga el orden: `data_dias_00_08.js` → `data_dias_09_16.js` → `data_dias_17_24.js` → `data_combinator.js` → `script_engine.js` → `script_tactical.js`

## 3. ESTRUCTURA TÉCNICA
- **index.html**: Layout de 3 columnas.
    1. Sidebar (.sidebar): Navegación días.
    2. Centro (.center-stage): Visualización (Fotos cine + Historia).
    3. Derecha (.right-panel): Datos, Logística y Botones de Misión.
- **style.css**: Usa variables CSS (--bg, --accent, --gold). Clases clave: .cinema-mode-img, .story-container, .hover-preview.
- **script_engine.js**:
    - `init()` (línea 106): Carga mapas y botones. Entry point.
    - `loadDay(index)` (línea 362): Carga un día por índice en el array.
    - `renderRightPanel(data)` (línea 735): Panel derecho con logística.
    - `renderCenterVisual(data, mode, optData)` (línea 848): Panel central.
    - `renderPreparationPage(data)` (línea 398): Página especial del Día 0.
    - `renderTacticalMission(id, dayIndex)` en `script_tactical.js`.

## 4. FORMATO DE DATOS (IMPORTANTE)
Cada día en `travelData` debe seguir este esquema JSON estricto:
```json
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
```

## 5. INSTRUCCIONES DE TRABAJO CON IA
- **Trabajar en Días 0-8**: Leer `data_dias_00_08.js`
- **Trabajar en Días 9-16**: Leer `data_dias_09_16.js`
- **Trabajar en Días 17-24**: Leer `data_dias_17_24.js`
- **Cambiar lógica UI/mapas**: Leer `script_engine.js`
- **Cambiar guía táctica**: Leer `script_tactical.js`
- Al añadir días, NO borres código anterior.
- Usa siempre iconos de FontAwesome (<i class="fa-solid ...">).
- Incluye siempre el campo `ivanChallenge` en las opciones de excursión.