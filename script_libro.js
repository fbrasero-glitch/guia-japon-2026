/**
 * COMPILADOR MAESTRO DE LIBRO IMPRESO - JAPÓN 2026
 * Consolida, formatea y genera una versión completa de la guía en formato A4 para impresión.
 */

// Bindeos globales de seguridad en caso de declaración por const
if (typeof travelData !== 'undefined' && !window.travelData) {
    window.travelData = travelData;
}
if (typeof restaurantData !== 'undefined' && !window.restaurantData) {
    window.restaurantData = restaurantData;
}

const BookCompiler = {
    tocList: [], // Registro de páginas para el índice

    init() {
        console.log("Iniciando compilación del Libro de Viaje...");
        
        // Esperamos 100ms para asegurar que todos los scripts externos y datos se han cargado por completo
        setTimeout(() => {
            this.compile();
        }, 100);
    },

    // Limpia y formatea el HTML de fullDesc para una lectura limpia en libro
    cleanHTML(html) {
        if (!html) return '';
        let cleaned = html;
        
        // Eliminar botones y elementos interactivos que no tienen sentido en papel
        cleaned = cleaned.replace(/<button[^>]*>[\s\S]*?<\/button>/g, '');
        cleaned = cleaned.replace(/<a[^>]*class="action-btn"[^>]*>[\s\S]*?<\/a>/g, '');
        cleaned = cleaned.replace(/onclick="[^"]*"/g, '');
        
        // Omitimos enlaces de mapas en el texto corrido para no saturar con URLs largas (ya están en botones o tablas)
        cleaned = cleaned.replace(/<a[^>]*href="http[^"]*"[^>]*>GOOGLE MAPS<\/a>/g, '');
        
        return cleaned;
    },

    // Extrae el HTML de las guías tácticas de la fase anterior (script_tactical.js)
    getLegacyTacticalMissionHTML(missionId, dayIdx) {
        if (typeof renderLegacyTacticalMission !== 'function') return '';
        
        // Creamos un wrapper oculto temporal en el DOM
        const tempCard = document.createElement('div');
        tempCard.id = 'visual-card';
        tempCard.style.display = 'none';
        document.body.appendChild(tempCard);

        try {
            renderLegacyTacticalMission(missionId, dayIdx);
            let html = tempCard.innerHTML;
            
            // Limpieza específica de botones de cierre y textos de interfaz web
            html = html.replace(/<button[^>]*class="datapad-close"[^>]*>[\s\S]*?<\/button>/g, '');
            html = html.replace(/CLOSE_FILE/g, '');
            html = html.replace(/<div class="scanline-overlay"><\/div>/g, '');
            
            return html;
        } catch (e) {
            console.error(`Error al extraer la guía táctica heredada: ${missionId}`, e);
            return '';
        } finally {
            tempCard.remove();
        }
    },

    // Renderiza una guía táctica en el libro (estructurada o legacy)
    renderTacticalGuide(guideId, dayIdx) {
        // Opción A: Está en el nuevo objeto estructurado window.tacticalMissions (de script_engine.js)
        if (window.tacticalMissions && window.tacticalMissions[guideId]) {
            const m = window.tacticalMissions[guideId];
            return `
                <div class="tactical-mission-box avoid-break">
                    <div class="tactical-mission-title">
                        <i class="fa-solid fa-file-contract"></i> Manual Táctico: ${m.title}
                    </div>
                    ${m.subtitle ? `<p style="font-size: 8.5pt; font-style: italic; color: var(--text-print-muted); margin-bottom: 10px;">${m.subtitle}</p>` : ''}
                    <div class="tactical-steps-list">
                        ${m.steps.map((st, sIdx) => `
                            <div class="tactical-step">
                                <div class="tactical-step-header">
                                    <span>Paso ${sIdx + 1}</span>
                                    <span>${st.time || ''}</span>
                                </div>
                                <div class="tactical-step-title">${st.title}</div>
                                <div class="tactical-step-desc">${st.content}</div>
                                ${st.warning ? `
                                    <div class="tactical-step-warning">
                                        <i class="fa-solid fa-triangle-exclamation"></i> <strong>Aviso Crítico:</strong> ${st.warning}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Opción B: Intentar extraer del fallback legacy
        const legacyHTML = this.getLegacyTacticalMissionHTML(guideId, dayIdx);
        if (legacyHTML) {
            return `
                <div class="tactical-mission-box avoid-break">
                    <div class="tactical-mission-title">
                        <i class="fa-solid fa-file-contract"></i> Manual Operativo: ${guideId.replace('mission_', '').toUpperCase()}
                    </div>
                    <div class="legacy-mission-content" style="font-size: 8.5pt;">
                        ${this.cleanHTML(legacyHTML)}
                    </div>
                </div>
            `;
        }

        return '';
    },

    // Genera el listado visual de metro a partir de los transitDetails
    renderTransitDetails(details, routeId) {
        if (!details || !details.steps) return '';
        
        return `
            <div class="transit-widget avoid-break">
                <div class="transit-widget-header">
                    <span><i class="fa-solid fa-train-subway"></i> Guía de Tránsito: ${details.origin} ➔ ${details.destination}</span>
                    <span>Total: ${details.totalTime || ''}</span>
                </div>
                <div class="transit-steps-list">
                    ${details.steps.map((step, idx) => {
                        const isLast = idx === details.steps.length - 1;
                        const iconText = step.code || (step.type === 'origin' ? 'S' : step.type === 'transfer' ? 'T' : 'E');
                        const lineBadge = step.line ? `<span class="transit-step-line-name" style="background-color: ${step.lineColor || '#4b5563'};">${step.line}</span>` : '';
                        
                        let metaHTML = '';
                        if (step.type === 'origin') {
                            metaHTML = `Andén: <strong>${step.platform || 'General'}</strong> | Vagón Recomendado: <strong>${step.car || 'Cualquiera'}</strong>`;
                        } else if (step.type === 'transfer') {
                            metaHTML = `<strong>Transbordo:</strong> ${step.instructions || 'Cambiar de línea'}`;
                        } else if (step.type === 'destination') {
                            metaHTML = `Salida recomendada: <strong>${step.exit || 'Principal'}</strong>`;
                        }

                        return `
                            <div class="transit-step-node">
                                <div class="transit-step-indicator">
                                    <div class="transit-step-badge" style="background-color: ${step.lineColor || '#4b5563'};">
                                        ${iconText}
                                    </div>
                                    ${!isLast ? `<div class="transit-step-line"></div>` : ''}
                                </div>
                                <div class="transit-step-content">
                                    <div class="transit-step-title">
                                        ${step.station} ${lineBadge}
                                    </div>
                                    <div class="transit-step-meta">
                                        ${metaHTML}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                ${details.gpsWarning ? `
                    <div class="transit-warning-box">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <div><strong>Protocolo Subterráneo:</strong> ${details.gpsWarning}</div>
                    </div>
                ` : ''}
            </div>
        `;
    },

    compile() {
        const container = document.getElementById('book-content');
        if (!container) return;

        let html = '';
        this.tocList = [];

        // --- 1. PORTADA ---
        html += `
            <div class="book-page" id="page-cover">
                <div class="cover-container">
                    <div class="cover-logo">
                        <i class="fa-solid fa-torii-gate"></i>
                    </div>
                    <div class="cover-title-group">
                        <h1>JAPÓN 2026</h1>
                        <p>Guía Completa de Expedición Familiar</p>
                    </div>
                    <div class="cover-meta">
                        <div class="cover-meta-item">
                            <h4>Fechas</h4>
                            <p>27 Jul – 19 Ago 2026</p>
                        </div>
                        <div class="cover-meta-item">
                            <h4>Viajeros</h4>
                            <p>8 Personas (Grupo Completo)</p>
                        </div>
                        <div class="cover-meta-item">
                            <h4>Aerolínea</h4>
                            <p>Turkish Airlines (Escala IST)</p>
                        </div>
                        <div class="cover-meta-item">
                            <h4>Alojamientos</h4>
                            <p>Osaka, Kioto, Alpes, Fuji, Tokio</p>
                        </div>
                    </div>
                    <div style="font-size: 8pt; color: var(--text-print-muted);">
                        Edición Física Premium • Generado para Impresión A4
                    </div>
                </div>
            </div>
        `;

        // --- 2. ÍNDICE GENERAL (TOC) ---
        html += `
            <div class="book-page page-break" id="page-toc">
                <div class="page-header">
                    <span>Japón 2026: Guía Oficial</span>
                    <span>Índice</span>
                </div>
                <div class="toc-container">
                    <h2>Índice General</h2>
                    <ul class="toc-list" id="toc-list-content">
                        <!-- Rellenado dinámicamente al final de la compilación -->
                    </ul>
                </div>
                <div class="page-footer">
                    <span>Expedición Familiar</span>
                    <span class="page-num"></span>
                </div>
            </div>
        `;

        // --- 3. DÍA 0: PREPARACIÓN DEL VIAJE ---
        const day0 = window.travelData ? window.travelData.find(d => d.day === 0) : null;
        if (day0) {
            this.tocList.push({ title: "📋 Preparación del Viaje (Día 0)", anchor: "chapter-day-0" });
            
            let prepContentHTML = '';
            if (day0.preparation && day0.preparation.sections) {
                day0.preparation.sections.forEach(sec => {
                    prepContentHTML += `
                        <div class="prep-section avoid-break">
                            <div class="prep-section-title"><i class="${sec.icon || 'fa-solid fa-check'}"></i> ${sec.title}</div>
                            <div class="prep-grid">
                                ${sec.items.map(item => `
                                    <div class="prep-card">
                                        <div class="prep-card-title">${item.title}</div>
                                        <div class="prep-card-desc">${item.desc}</div>
                                        <div class="prep-card-who">Responsable: ${item.who || 'Todos'}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });
            }

            let bookingHTML = '';
            if (day0.bookingPanel && day0.bookingPanel.phases) {
                bookingHTML += `
                    <div class="prep-section avoid-break" style="margin-top: 15px;">
                        <div class="prep-section-title"><i class="fa-solid fa-ticket"></i> Cronograma de Reservas y Acciones Críticas</div>
                        <div style="display:flex; flex-direction:column; gap:8px; font-size:8.5pt;">
                            ${day0.bookingPanel.phases.map(phase => `
                                <div style="border: 1px solid var(--border-light); padding: 8px 12px; border-radius: 4px;">
                                    <strong style="color: var(--accent-print);">${phase.name}</strong>
                                    <ul style="list-style-type: none; margin-top:4px; padding-left: 0;">
                                        ${phase.items.map(bk => `
                                            <li style="margin-bottom: 4px; display:flex; justify-content:space-between;">
                                                <span>• ${bk.name}</span>
                                                <span style="font-weight:bold; color: ${bk.status === 'completed' ? '#16a34a' : '#d97706'};">
                                                    [${bk.status === 'completed' ? 'Comprado / Cerrado' : bk.date}]
                                                </span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            html += `
                <div class="book-page page-break" id="chapter-day-0">
                    <div class="page-header">
                        <span>Japón 2026: Guía Oficial</span>
                        <span>Preparación del Viaje</span>
                    </div>
                    <div>
                        <div class="day-header">
                            <span class="day-badge">Antes de Partir</span>
                            <h2 class="day-title">${day0.title}</h2>
                        </div>
                        ${prepContentHTML}
                        ${bookingHTML}
                    </div>
                    <div class="page-footer">
                        <span>Fase Previa</span>
                        <span class="page-num"></span>
                    </div>
                </div>
            `;
        }

        // --- 4. DÍAS 1 AL 24 ---
        if (window.travelData) {
            window.travelData.forEach(day => {
                if (day.day === 0) return; // Saltamos preparación ya renderizada arriba

                const dayNum = day.day;
                const titleText = day.title;
                const hotelText = day.hotel || 'Noche en tránsito / Vuelo';
                
                this.tocList.push({ title: `Día ${dayNum}: ${titleText.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "")}`, anchor: `chapter-day-${dayNum}` });

                // Formateo de logística
                let logisticsHTML = '';
                if (day.logistics && day.logistics.length > 0) {
                    logisticsHTML = `
                        <div class="logistics-box avoid-break">
                            <div class="logistics-title">
                                <i class="fa-solid fa-circle-info"></i> Directrices Logísticas y Tips
                            </div>
                            <ul class="logistics-list">
                                ${day.logistics.map(log => `
                                    <li><strong>${log.title}:</strong> ${log.text}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                }

                // Formateo de notas adicionales
                let additionsHTML = '';
                if (day.additions && day.additions.length > 0) {
                    additionsHTML = `
                        <div class="logistics-box avoid-break" style="background-color: #f3f4f6; border-left-color: #6b7280;">
                            <div class="logistics-title" style="color: #4b5563;">
                                <i class="fa-solid fa-circle-exclamation"></i> Notas Adicionales
                            </div>
                            <ul class="logistics-list">
                                ${day.additions.map(add => `
                                    <li>• ${add}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                }

                // Formateo de tabla de precios
                let pricesHTML = '';
                if (day.prices) {
                    pricesHTML = `
                        <div class="price-box avoid-break">
                            <div class="price-box-title"><i class="fa-solid fa-coins"></i> Estimación de Costes (Por persona)</div>
                            <div class="price-grid">
                                <div class="price-item">
                                    <h5>Transporte</h5>
                                    <p>${day.prices.transport || 'N/A'}</p>
                                </div>
                                <div class="price-item">
                                    <h5>Entradas</h5>
                                    <p>${day.prices.entrances || 'Gratis'}</p>
                                </div>
                                <div class="price-item">
                                    <h5>Comida</h5>
                                    <p>${day.prices.food || 'N/A'}</p>
                                </div>
                                <div class="price-item">
                                    <h5>Total Estimado</h5>
                                    <p>${day.prices.total || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // Formateo de Timeline
                let timelineHTML = '';
                if (day.timeline && day.timeline.length > 0) {
                    timelineHTML = `
                        <div class="avoid-break">
                            <div class="section-title"><i class="fa-solid fa-clock"></i> Cronograma de la Jornada</div>
                            <table class="timeline-table">
                                <thead>
                                    <tr>
                                        <th style="width: 75px;">Hora</th>
                                        <th>Punto de Ruta / Actividad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${day.timeline.map(t => `
                                        <tr>
                                            <td class="timeline-time-col">${t.time}</td>
                                            <td><strong>${t.title}</strong> — ${t.desc}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    `;
                }

                // Rutas de transporte y diagramas de metro
                let transportHTML = '';
                if (day.transportTimeline && day.transportTimeline.length > 0) {
                    let transportItemsHTML = '';
                    day.transportTimeline.forEach((tItem, transIdx) => {
                        if (tItem.type === 'transit') {
                            const priceLabel = tItem.price ? ` [${tItem.price}]` : '';
                            const timeLabel = tItem.timeLabel ? ` (${tItem.timeLabel})` : '';
                            
                            transportItemsHTML += `
                                <div style="margin-bottom: 12px;" class="avoid-break">
                                    <div style="font-weight:bold; font-size:9.5pt; color:var(--text-print-dark);">
                                        <i class="fa-solid fa-train"></i> Conexión: ${tItem.title}${priceLabel}${timeLabel}
                                    </div>
                                    ${tItem.transitDetails ? this.renderTransitDetails(tItem.transitDetails, `day_${dayNum}_transit_${transIdx}`) : ''}
                                </div>
                            `;
                        }
                    });

                    if (transportItemsHTML) {
                        transportHTML = `
                            <div class="avoid-break" style="margin-top: 15px;">
                                <div class="section-title"><i class="fa-solid fa-route"></i> Logística de Desplazamiento</div>
                                ${transportItemsHTML}
                            </div>
                        `;
                    }
                }

                // Eventos del itinerario base
                let baseEventsHTML = '';
                if (day.base && day.base.events) {
                    day.base.events.forEach(ev => {
                        if (ev.type === 'gap') return; // Saltamos los huecos libres
                        
                        const imgHTML = ev.image ? `
                            <div class="event-image-box">
                                <img class="event-image" src="${ev.image}" alt="${ev.title}" onerror="this.style.display='none'">
                            </div>
                        ` : '';

                        baseEventsHTML += `
                            <div class="itinerary-event avoid-break">
                                <div class="event-top-row">
                                    <div class="event-title">${ev.time ? `[${ev.time}] ` : ''}${ev.title}</div>
                                    <div class="event-price">Coste: ${ev.price || 'Gratis'}</div>
                                </div>
                                ${imgHTML}
                                <div class="event-description">
                                    ${this.cleanHTML(ev.fullDesc || `<p>${ev.description}</p>`)}
                                    ${ev.photoSpot ? `<div class="event-photospot"><i class="fa-solid fa-camera"></i> <strong>Spot de Foto:</strong> ${ev.photoSpot}</div>` : ''}
                                </div>
                                <div class="event-clear"></div>
                            </div>
                        `;
                    });
                }

                // Actividades Complementarias
                let complementsHTML = '';
                if (day.complements && day.complements.length > 0) {
                    let compListHTML = '';
                    day.complements.forEach(comp => {
                        const imgHTML = comp.image ? `
                            <div class="event-image-box">
                                <img class="event-image" src="${comp.image}" alt="${comp.title}" onerror="this.style.display='none'">
                            </div>
                        ` : '';

                        let optionsHTML = '';
                        if (comp.tacticalOptions && comp.tacticalOptions.length > 0) {
                            optionsHTML = `
                                <div class="options-box avoid-break">
                                    <div class="options-box-title">Opciones Flexibles Seleccionables</div>
                                    ${comp.tacticalOptions.map(opt => `
                                        <div class="option-route">
                                            <div class="option-route-title">${opt.title} (${opt.time})</div>
                                            <div class="option-route-desc">${opt.description}</div>
                                            ${opt.schedule ? `
                                                <div class="option-route-schedule">
                                                    Cronograma: ${opt.schedule.map(s => `${s.time}h ${s.event}`).join(' ➔ ')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                        }

                        compListHTML += `
                            <div class="itinerary-event avoid-break">
                                <div class="event-top-row">
                                    <div class="event-title">${comp.time ? `[${comp.time}] ` : ''}${comp.title} (Alternativa)</div>
                                    <div class="event-price">Coste: ${comp.price || 'Gratis'}</div>
                                </div>
                                ${imgHTML}
                                <div class="event-description">
                                    ${this.cleanHTML(comp.fullDesc || `<p>${comp.description}</p>`)}
                                </div>
                                <div class="event-clear"></div>
                                ${optionsHTML}
                            </div>
                        `;
                    });

                    complementsHTML = `
                        <div class="avoid-break" style="margin-top:20px;">
                            <div class="section-title"><i class="fa-solid fa-shuffle"></i> Alternativas y Extensiones</div>
                            ${compListHTML}
                        </div>
                    `;
                }

                // Excursiones Adicionales
                let excursionsHTML = '';
                if (day.additionalExcursions && day.additionalExcursions.length > 0) {
                    let excListHTML = '';
                    day.additionalExcursions.forEach(exc => {
                        const imgHTML = exc.image ? `
                            <div class="event-image-box">
                                <img class="event-image" src="${exc.image}" alt="${exc.title}" onerror="this.style.display='none'">
                            </div>
                        ` : '';

                        excListHTML += `
                            <div class="itinerary-event avoid-break">
                                <div class="event-top-row">
                                    <div class="event-title">${exc.time ? `[${exc.time}] ` : ''}${exc.title} (Excursión)</div>
                                    <div class="event-price">Coste: ${exc.price || 'Gratis'}</div>
                                </div>
                                ${imgHTML}
                                <div class="event-description">
                                    ${this.cleanHTML(exc.fullDesc || `<p>${exc.description}</p>`)}
                                </div>
                                <div class="event-clear"></div>
                            </div>
                        `;
                    });

                    excursionsHTML = `
                        <div class="avoid-break" style="margin-top:20px;">
                            <div class="section-title"><i class="fa-solid fa-compass"></i> Excursiones Recomendadas</div>
                            ${excListHTML}
                        </div>
                    `;
                }

                // Recopilación de Manuales Tácticos específicos de este día
                let dayTacticalHTML = '';
                const uniqueTacticalIds = new Set();
                
                // Inspeccionar transportes
                if (day.transportTimeline) {
                    day.transportTimeline.forEach(t => {
                        if (t.tacticalGuideId) uniqueTacticalIds.add(t.tacticalGuideId);
                    });
                }
                
                // Inspeccionar eventos base
                if (day.base && day.base.events) {
                    day.base.events.forEach(ev => {
                        if (ev.tacticalGuideId) uniqueTacticalIds.add(ev.tacticalGuideId);
                    });
                }
                
                // Inspeccionar complements
                if (day.complements) {
                    day.complements.forEach(comp => {
                        if (comp.tacticalGuideId) uniqueTacticalIds.add(comp.tacticalGuideId);
                        if (comp.tacticalOptions) {
                            comp.tacticalOptions.forEach(opt => {
                                if (opt.tacticalGuideId) uniqueTacticalIds.add(opt.tacticalGuideId);
                            });
                        }
                    });
                }
                
                // Inspeccionar excursiones
                if (day.additionalExcursions) {
                    day.additionalExcursions.forEach(exc => {
                        if (exc.tacticalGuideId) uniqueTacticalIds.add(exc.tacticalGuideId);
                    });
                }

                // Generar bloques tácticos
                let tacticalGuidesBlocks = '';
                uniqueTacticalIds.forEach(guideId => {
                    const guideHTML = this.renderTacticalGuide(guideId, day.day);
                    if (guideHTML) {
                        tacticalGuidesBlocks += guideHTML;
                    }
                });

                if (tacticalGuidesBlocks) {
                    dayTacticalHTML = `
                        <div style="margin-top:25px;">
                            <div class="section-title"><i class="fa-solid fa-file-contract"></i> Manuales de Operación Local</div>
                            ${tacticalGuidesBlocks}
                        </div>
                    `;
                }

                // Contenedor de página del día
                html += `
                    <div class="book-page page-break" id="chapter-day-${dayNum}">
                        <div class="page-header">
                            <span>Sección II: Bitácora Diaria</span>
                            <span>Día ${dayNum}</span>
                        </div>
                        <div>
                            <div class="day-header">
                                <span class="day-badge">${day.date}</span>
                                <h2 class="day-title">Día ${dayNum}: ${titleText}</h2>
                                <div class="day-meta-grid">
                                    <div class="day-meta-item">
                                        <i class="fa-solid fa-hotel"></i> Alojamiento: <strong>${hotelText}</strong>
                                    </div>
                                    ${day.routeMapsLink ? `
                                        <div class="day-meta-item">
                                            <i class="fa-solid fa-map-location-dot"></i> Ruta en Google Maps disponible
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                            
                            ${day.image ? `
                                <div class="day-hero-img-box avoid-break">
                                    <img class="day-hero-img" src="${day.image}" alt="${titleText}" onerror="this.style.display='none'">
                                </div>
                            ` : ''}

                            <div class="day-summary-text">
                                ${day.visualContent ? (day.visualContent.summary || day.visualContent.details) : 'Jornada de exploración programada en el Itinerario Base.'}
                            </div>

                            ${logisticsHTML}
                            ${additionsHTML}
                            ${pricesHTML}
                            ${timelineHTML}
                            ${transportHTML}
                            
                            ${baseEventsHTML ? `
                                <div style="margin-top: 20px;">
                                    <div class="section-title"><i class="fa-solid fa-map-pin"></i> Visitas Principales (Ruta Central)</div>
                                    ${baseEventsHTML}
                                </div>
                            ` : ''}
                            
                            ${complementsHTML}
                            ${excursionsHTML}
                            ${dayTacticalHTML}
                        </div>
                        <div class="page-footer">
                            <span>Bitácora Diaria</span>
                            <span class="page-num"></span>
                        </div>
                    </div>
                `;
            });
        }

        // --- 5. APÉNDICE A: DIRECTORIO DE HOTELES ---
        this.tocList.push({ title: "Apéndice A: Directorio de Hoteles", anchor: "appendix-hotels" });
        
        let hotelsHTML = '';
        if (window.travelData) {
            const uniqueHotels = {};
            window.travelData.forEach(day => {
                if (day.hotel && day.hotel !== "Noche en vuelo (Turkish Airlines)" && day.hotel !== "Noche en vuelo") {
                    if (!uniqueHotels[day.hotel]) {
                        uniqueHotels[day.hotel] = {
                            name: day.hotel,
                            image: day.hotelImage || 'images/hotel_osaka.jpg',
                            days: []
                        };
                    }
                    uniqueHotels[day.hotel].days.push(day.day);
                }
            });

            hotelsHTML = Object.values(uniqueHotels).map(h => `
                <div class="appendix-hotel-card avoid-break">
                    <div class="appendix-hotel-img-box">
                        <img class="appendix-hotel-img" src="${h.image}" alt="${h.name}" onerror="this.src='images/hotel_osaka.jpg'">
                    </div>
                    <div class="appendix-hotel-info">
                        <div class="appendix-hotel-name">${h.name}</div>
                        <div style="margin-bottom: 5px;"><strong>Días en los que nos alojamos:</strong> Días ${h.days.join(', ')}</div>
                        <div style="color: var(--text-print-muted); font-size: 8.5pt; line-height: 1.3;">
                            Consultar direcciones exactas en japonés en el Apéndice B o escaneando los QRs del Cuartel General.
                        </div>
                    </div>
                </div>
            `).join('');
        }

        html += `
            <div class="book-page page-break" id="appendix-hotels">
                <div class="page-header">
                    <span>Apéndice A</span>
                    <span>Directorio de Hoteles</span>
                </div>
                <div>
                    <h2 style="font-size: 20pt; font-weight: 800; color: var(--text-print-dark); border-bottom: 2px solid var(--accent-print); padding-bottom:8px; margin-bottom:20px; text-transform:uppercase;">Directorio de Hoteles</h2>
                    ${hotelsHTML}
                </div>
                <div class="page-footer">
                    <span>Apéndice A</span>
                    <span class="page-num"></span>
                </div>
            </div>
        `;

        // --- 6. APÉNDICE B: DIRECTORIO DE RESTAURANTES ---
        this.tocList.push({ title: "Apéndice B: Directorio de Restaurantes", anchor: "appendix-restaurants" });
        
        let restaurantsHTML = '';
        if (window.restaurantData) {
            // Agrupar por ciudad
            const cities = {};
            window.restaurantData.forEach(r => {
                const city = r.city || 'OTRA';
                if (!cities[city]) cities[city] = [];
                cities[city].push(r);
            });

            for (const city in cities) {
                restaurantsHTML += `
                    <div class="avoid-break" style="margin-top: 15px;">
                        <h3 style="font-size:12pt; border-bottom:1.5px solid var(--accent-print); padding-bottom:3px; color:var(--text-print-dark); text-transform:uppercase; margin-bottom:10px;">${city}</h3>
                        <div class="appendix-restaurant-grid">
                            ${cities[city].map(r => `
                                <div class="appendix-restaurant-card">
                                    <div class="appendix-restaurant-name">${r.name}</div>
                                    <div class="appendix-restaurant-category">${r.category}</div>
                                    <div class="appendix-restaurant-desc">${r.description}</div>
                                    <div style="font-size:7.5pt; font-weight:bold; color:var(--text-print-muted); margin-top:4px;">
                                        <i class="fa-solid fa-location-dot"></i> Zona: ${r.area}
                                    </div>
                                    <div style="font-size:7.2pt; color:var(--text-print-muted); margin-top:2px;">
                                        Dirección: ${r.address}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        html += `
            <div class="book-page page-break" id="appendix-restaurants">
                <div class="page-header">
                    <span>Apéndice B</span>
                    <span>Directorio de Restaurantes</span>
                </div>
                <div>
                    <h2 style="font-size: 20pt; font-weight: 800; color: var(--text-print-dark); border-bottom: 2px solid var(--accent-print); padding-bottom:8px; margin-bottom:20px; text-transform:uppercase;">Guía de Restaurantes</h2>
                    ${restaurantsHTML}
                </div>
                <div class="page-footer">
                    <span>Apéndice B</span>
                    <span class="page-num"></span>
                </div>
            </div>
        `;

        // --- 7. APÉNDICE C: INFORMACIÓN DE EMERGENCIAS Y SERVICIOS ---
        this.tocList.push({ title: "Apéndice C: Emergencias e Información Útil", anchor: "appendix-info" });
        
        html += `
            <div class="book-page page-break" id="appendix-info">
                <div class="page-header">
                    <span>Apéndice C</span>
                    <span>Información Útil</span>
                </div>
                <div>
                    <h2 style="font-size: 20pt; font-weight: 800; color: var(--text-print-dark); border-bottom: 2px solid var(--accent-print); padding-bottom:8px; margin-bottom:20px; text-transform:uppercase;">Información y Emergencias</h2>
                    
                    <div class="prep-section avoid-break">
                        <div class="prep-section-title"><i class="fa-solid fa-phone"></i> Contactos Críticos</div>
                        <ul class="logistics-list">
                            <li><strong>Policía:</strong> 110</li>
                            <li><strong>Ambulancia y Bomberos:</strong> 119</li>
                            <li><strong>Consulado General de España en Tokio:</strong> 1-3-29 Roppongi, Minato-ku, Tokio. Teléfono de Emergencia Consular: +81-90-1050-8906.</li>
                        </ul>
                    </div>

                    <div class="prep-section avoid-break" style="margin-top: 15px;">
                        <div class="prep-section-title"><i class="fa-solid fa-wallet"></i> Tarjetas de Transporte (Suica / ICOCA)</div>
                        <p style="font-size: 9pt; line-height: 1.4; color: var(--text-print-dark);">
                            Las tarjetas IC son el método principal para pagar el metro y buses urbanos. Se cargan en las máquinas automáticas con yenes en efectivo o a través de Apple Pay vinculando una tarjeta a Apple Wallet (Suica digital). Es muy recomendable llevarlas siempre con saldo disponible.
                        </p>
                    </div>

                    <div class="prep-section avoid-break" style="margin-top: 15px;">
                        <div class="prep-section-title"><i class="fa-solid fa-mobile-screen-button"></i> Aplicaciones Indispensables</div>
                        <ul class="logistics-list">
                            <li><strong>Google Maps:</strong> Para guiado peatonal ("last mile") y localización de puntos fotográficos.</li>
                            <li><strong>Google Translate:</strong> Imprescindible para traducir carteles y menús de comida tradicional usando el modo cámara en tiempo real.</li>
                            <li><strong>Navitime / Hyperdia:</strong> La herramienta más precisa para consultar andenes específicos de trenes JR.</li>
                        </ul>
                    </div>
                </div>
                <div class="page-footer">
                    <span>Apéndice C</span>
                    <span class="page-num"></span>
                </div>
            </div>
        `;

        // Renderizar todo el HTML recopilado en el contenedor
        container.innerHTML = html;

        // --- 8. GENERAR EL ÍNDICE DINÁMICO (TOC) ---
        const tocContent = document.getElementById('toc-list-content');
        if (tocContent) {
            let tocHTML = '';
            this.tocList.forEach(item => {
                tocHTML += `
                    <li class="toc-item">
                        <span class="toc-title" onclick="document.getElementById('${item.anchor}').scrollIntoView({behavior: 'smooth'})">${item.title}</span>
                        <span class="toc-dots"></span>
                        <span class="toc-page" onclick="document.getElementById('${item.anchor}').scrollIntoView({behavior: 'smooth'})">${item.page || ''}</span>
                    </li>
                `;
            });
            tocContent.innerHTML = tocHTML;
        }

        console.log("Compilación finalizada con éxito.");
    }
};

window.onload = function() {
    BookCompiler.init();
};
