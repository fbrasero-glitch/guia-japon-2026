/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */
// --- MOTOR GRÁFICO ---
let map;        // Mapa principal
let previewMap; // Mapa de la ventana espía
let introVideo; // Video de portada

// Función para extraer el lugar principal del hotel donde se duerme esa noche
function getLocation(data) {
    // Caso especial: Día 11 es Kazeya Ryokan
    if (data.day === 11) return 'KAZEYA RYOKAN';

    // Solo extraer del hotel donde se hospedan esa noche
    if (data.hotel) {
        const hotel = data.hotel.toUpperCase();

        // Buscar ciudades principales en el nombre del hotel
        if (hotel.includes('OSAKA')) return 'OSAKA';
        if (hotel.includes('KYOTO')) return 'KYOTO';
        if (hotel.includes('TOKYO')) return 'TOKYO';
        if (hotel.includes('FUJI') || hotel.includes('KAWAGUCHIKO')) return 'MONTE FUJI';
        if (hotel.includes('TAKAYAMA')) return 'TAKAYAMA';
        if (hotel.includes('KAMAKURA')) return 'KAMAKURA';

        // Casos especiales
        if (hotel.includes('VUELO') || hotel.includes('AIRLINES')) return 'VUELO';
        if (hotel.includes('CASA') || hotel === 'CASA') return 'CASA';
    }

    // Si no hay hotel o no se encuentra ciudad, devolver vacío
    return '';
}

function init() {
    // 0. Toggle móvil para navegación
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const menuIcon = document.getElementById('menu-icon');
    const menuText = document.getElementById('menu-text');

    // Función para abrir/cerrar menú
    function toggleMobileMenu(forceClose = false) {
        if (!sidebar) return;

        const shouldClose = forceClose || sidebar.classList.contains('open');

        if (shouldClose) {
            sidebar.classList.remove('open');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
            if (menuIcon) {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
            if (menuText) menuText.textContent = 'Menú';
            document.body.style.overflow = '';
        } else {
            sidebar.classList.add('open');
            if (sidebarOverlay) sidebarOverlay.classList.add('active');
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
            if (menuIcon) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            }
            if (menuText) menuText.textContent = 'Cerrar';
            // Prevenir scroll del body cuando el menú está abierto
            if (window.innerWidth < 768) {
                document.body.style.overflow = 'hidden';
            }
        }
    }

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });

        // Cerrar al hacer click en overlay
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => {
                toggleMobileMenu(true);
            });
        }

        // Cerrar sidebar al hacer clic fuera en móvil
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 768 &&
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                !mobileToggle.contains(e.target)) {
                toggleMobileMenu(true);
            }
        });

        // Cerrar menú al cambiar orientación o tamaño
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && sidebar.classList.contains('open')) {
                toggleMobileMenu(true);
            }
        });
    }

    // Exponer función para cerrar menú desde otros lugares
    window.closeMobileMenu = () => toggleMobileMenu(true);

    // 1. Video de portada
    introVideo = document.getElementById('intro-video');
    if (introVideo) {
        introVideo.play().catch(e => console.log('Video autoplay bloqueado:', e));
    }

    // 2. Click en logo para reproducir video
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.onclick = () => {
            if (introVideo) {
                introVideo.classList.remove('hidden');
                introVideo.currentTime = 0;
                introVideo.play().catch(e => console.log('Error al reproducir video:', e));
                // Ocultar contenido del día
                document.getElementById('visual-card').innerHTML = '';
                showCountdown(); // Mostrar contador en lugar del contenido
                // Desactivar botones de días
                document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
                // Quitar clase para hacer elementos más transparentes
                document.body.classList.remove('day-selected');
            }
        };
    }

    // 3. Función para mostrar contador de días
    function showCountdown() {
        const targetDate = new Date('2026-07-27T00:00:00');
        const now = new Date();
        const diffTime = targetDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const container = document.getElementById('info-content');
        const visualCard = document.getElementById('visual-card');

        // En móvil, mostrar la cuenta atrás directamente en el visual-card
        const isMobile = window.innerWidth <= 767;
        const targetContainer = isMobile ? visualCard : container;

        const countdownHTML = `
         <div class="countdown-container ${isMobile ? 'countdown-mobile' : ''}">
             <div class="countdown-title">
                 <i class="fa-solid fa-rocket"></i>
                 <h2>CUENTA ATRÁS</h2>
             </div>
             <div class="countdown-display">
                 <div class="countdown-number">${diffDays > 0 ? diffDays : 0}</div>
                 <div class="countdown-label">DÍAS</div>
             </div>
             <div class="countdown-subtitle">
                 <i class="fa-solid fa-calendar-days"></i>
                 <span>Hasta el Gran Despegue</span>
             </div>
             <div class="countdown-date">
                 27 de Julio, 2026
             </div>
         </div>
     `;

        if (isMobile) {
            // En móvil, agregar al visual-card y limpiar el info-content
            container.innerHTML = '';
            visualCard.innerHTML = countdownHTML;
        } else {
            // En desktop/tablet, usar el comportamiento normal
            container.innerHTML = countdownHTML;
            visualCard.innerHTML = '';
        }

        // Actualizar cada día
        if (diffDays > 0) {
            setTimeout(() => {
                if (introVideo && !introVideo.classList.contains('hidden')) {
                    showCountdown();
                }
            }, 86400000); // Actualizar cada 24 horas
        }
    }

    // 3. Mapas (Igual que antes)
    map = L.map('map', { zoomControl: false, attributionControl: false }).setView([36, 138], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

    previewMap = L.map('preview-map-container', {
        zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false
    }).setView([36, 138], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(previewMap);

    // 4. Botones con Lógica de Posición Dinámica
    const menu = document.getElementById('day-list');

    travelData.forEach((d, i) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.setAttribute('role', 'listitem');
        btn.setAttribute('aria-label', d.day === 0 ? `Preparación del viaje` : `Día ${d.day}: ${d.title}`);
        if (d.day === 0) {
            btn.innerHTML = `<strong>📋 Preparación</strong><br><small>${d.date}</small>`;
        } else {
            const location = getLocation(d);
            const locationText = location ? ` ${location}` : '';
            btn.innerHTML = `<strong>Día ${d.day}${locationText}</strong><br><small>${d.date}</small>`;
        }

        btn.onclick = () => {
            // Ocultar video cuando se selecciona un día
            if (introVideo) {
                introVideo.classList.add('hidden');
                introVideo.pause();
            }
            loadDay(i);

            // Cerrar menú móvil después de seleccionar
            if (window.innerWidth < 768 && window.closeMobileMenu) {
                window.closeMobileMenu();
            }
        };

        // --- AQUÍ ESTÁ EL CAMBIO ---
        btn.onmouseenter = () => {
            const previewBox = document.getElementById('hover-preview');
            const previewTitle = document.getElementById('preview-title');

            // 1. DATOS
            if (d.day === 0) {
                previewTitle.innerText = `📋 ${d.title}`;
            } else {
                previewTitle.innerText = `📍 Día ${d.day}: ${d.title}`;
            }
            previewMap.invalidateSize();
            previewMap.setView(d.coords, 9);

            // 2. CÁLCULO DE POSICIÓN (MATEMÁTICAS)
            // Obtenemos las coordenadas del botón en la pantalla
            const rect = btn.getBoundingClientRect();

            // Ponemos el mapa justo donde termina el botón (rect.bottom)
            previewBox.style.top = `${rect.bottom}px`;

            // ACTIVAR
            previewBox.classList.add('active');
        };

        btn.onmouseleave = () => {
            document.getElementById('hover-preview').classList.remove('active');
        };
        // ---------------------------

        menu.appendChild(btn);
    });

    // NO cargar ningún día al inicio, dejar el video reproduciéndose como portada
    // Mostrar contador en la portada
    showCountdown();
}

function loadDay(index) {
    // Añadir clase al body para indicar que hay un día seleccionado
    document.body.classList.add('day-selected');

    const data = travelData[index];

    // Si es el día de preparación (día 0), renderizar de forma especial
    if (data.day === 0 && data.type === 'preparation') {
        map.flyTo(data.coords, data.zoom, { duration: 1.5 });
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.day-btn')[index].classList.add('active');
        renderPreparationPage(data);
        return;
    }

    map.flyTo(data.coords, data.zoom, { duration: 1.5 });

    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.day-btn')[index].classList.add('active');

    // 1. PANEL DERECHO
    renderRightPanel(data);

    // 2. PANEL CENTRAL (Inicio)
    // AHORA: Si tiene opciones (formato antiguo) O es flexible (nuevo formato), usamos 'selector'
    if (data.hasOptions || data.isFlexible) {
        renderCenterVisual(data, 'selector');
    } else {
        renderCenterVisual(data, 'static');
    }
}

// Función especial para renderizar la página de preparación
function renderPreparationPage(data) {
    const centerCard = document.getElementById('visual-card');
    const rightPanel = document.getElementById('info-content');

    if (!data.preparation) return;

    // Renderizar panel central con las secciones principales
    let centerHTML = `
     <div class="preparation-container">
         <div class="preparation-header">
             <h1><i class="fa-solid fa-clipboard-check"></i> Preparación del Viaje</h1>
             <p class="preparation-subtitle">Checklist completo de trámites y acciones antes del viaje</p>
         </div>
         
         <div class="preparation-sections">
 `;

    data.preparation.sections.forEach((section, idx) => {
        centerHTML += `
         <div class="preparation-section" style="border-left: 4px solid ${section.color};">
             <div class="preparation-section-header" style="background: linear-gradient(135deg, ${section.color}15, ${section.color}05);">
                 <i class="${section.icon}" style="color: ${section.color};"></i>
                 <h2>${section.title}</h2>
             </div>
             <div class="preparation-items">
     `;

        section.items.forEach((item, itemIdx) => {
            centerHTML += `
             <div class="preparation-item">
                 <div class="preparation-item-header">
                     <span class="preparation-checkbox" data-section="${idx}" data-item="${itemIdx}">
                         <i class="fa-regular fa-circle"></i>
                     </span>
                     <h3>${item.title}</h3>
                 </div>
                 <div class="preparation-item-content">
                     <p class="preparation-desc">${item.desc}</p>
                     <div class="preparation-meta">
                         <span class="preparation-who"><i class="fa-solid fa-user"></i> ${item.who}</span>
                         ${item.why ? `<span class="preparation-why"><i class="fa-solid fa-info-circle"></i> ${item.why}</span>` : ''}
                     </div>
                 </div>
             </div>
         `;
        });

        centerHTML += `</div></div>`;
    });

    centerHTML += `</div></div>`;

    // Renderizar panel derecho con información adicional
    let rightHTML = `
     <div class="preparation-sidebar">
         <div class="preparation-priority-box">
             <h3><i class="fa-solid fa-exclamation-circle"></i> Prioridades</h3>
 `;

    data.preparation.priorities.forEach(priority => {
        rightHTML += `
         <div class="priority-level">
             <strong style="color: ${priority.level === 'Máxima' ? '#ef4444' : '#f59e0b'};">${priority.level}:</strong>
             <ul>
                 ${priority.items.map(item => `<li>${item}</li>`).join('')}
             </ul>
         </div>
     `;
    });

    rightHTML += `</div>`;

    // Notas especiales
    if (data.preparation.specialNotes) {
        data.preparation.specialNotes.forEach(note => {
            rightHTML += `
             <div class="preparation-special-box">
                 <h3><i class="fa-solid fa-star"></i> ${note.title}</h3>
                 <ul>
                     ${note.items.map(item => `<li>${item}</li>`).join('')}
                 </ul>
             </div>
         `;
        });
    }

    // Mensajes tipo
    if (data.preparation.messages && data.preparation.messages.length > 0) {
        rightHTML += `
         <div class="preparation-messages-box">
             <h3><i class="fa-solid fa-envelope"></i> Mensajes Tipo</h3>
             <p class="preparation-messages-desc">Textos listos para copiar en reservas y solicitudes:</p>
     `;

        data.preparation.messages.forEach((msg, idx) => {
            rightHTML += `
             <div class="preparation-message-item">
                 <strong>${msg.title}</strong>
                 <div class="preparation-message-text" onclick="copyToClipboard(this)">
                     <code>${msg.text}</code>
                     <i class="fa-solid fa-copy copy-icon"></i>
                 </div>
             </div>
         `;
        });

        rightHTML += `</div>`;
    }

    // Consejos finales
    if (data.preparation.tips && data.preparation.tips.length > 0) {
        rightHTML += `
         <div class="preparation-tips-box">
             <h3><i class="fa-solid fa-lightbulb"></i> Consejos Finales</h3>
             <ul>
                 ${data.preparation.tips.map(tip => `<li>${tip}</li>`).join('')}
             </ul>
         </div>
     `;
    }

    rightHTML += `</div>`;

    centerCard.innerHTML = centerHTML;
    rightPanel.innerHTML = rightHTML;

    // Añadir funcionalidad de checkboxes
    document.querySelectorAll('.preparation-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-circle')) {
                icon.classList.remove('fa-circle');
                icon.classList.add('fa-check-circle');
                this.parentElement.parentElement.classList.add('completed');
                localStorage.setItem(`prep-${this.dataset.section}-${this.dataset.item}`, 'true');
            } else {
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle');
                this.parentElement.parentElement.classList.remove('completed');
                localStorage.removeItem(`prep-${this.dataset.section}-${this.dataset.item}`);
            }
        });

        // Cargar estado guardado
        if (localStorage.getItem(`prep-${checkbox.dataset.section}-${checkbox.dataset.item}`) === 'true') {
            const icon = checkbox.querySelector('i');
            icon.classList.remove('fa-circle');
            icon.classList.add('fa-check-circle');
            checkbox.parentElement.parentElement.classList.add('completed');
        }
    });
}

// Función para copiar al portapapeles
function copyToClipboard(element) {
    const text = element.querySelector('code').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const icon = element.querySelector('.copy-icon');
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
        }, 2000);
    });
}

function renderRightPanel(data) {
    const container = document.getElementById('info-content');
    let html = `
     <div style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:10px;">
         <span style="color:var(--accent); font-weight:800; text-transform:uppercase;">${data.date}</span>
         <h2 style="font-size:1.6rem; color:white;">${data.title}</h2>
     </div>
 `;

    if (data.logistics) {
        html += `<div class="logistics-box"><div class="logistics-title">LOGÍSTICA</div>`;
        data.logistics.forEach(l => html += `<div class="logistics-item"><strong>${l.title}:</strong> ${l.text}</div>`);
        html += `</div>`;
    }

    // Si tiene línea de tiempo de transporte específica
    if (data.transportTimeline) {
        html += `<div class="transport-timeline-container" style="margin-top:20px;">
                    <div class="logistics-title" style="margin-bottom:15px;"><i class="fa-solid fa-train"></i> TRANSPORTE Y RUTA</div>`;

        data.transportTimeline.forEach(item => {
            if (item.type === 'point') {
                html += `
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:10px;">
                        <span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">${item.time}</span>
                        <div style="background:rgba(255,255,255,0.1); padding:8px 12px; border-radius:8px; display:flex; align-items:center; flex:1;">
                            <i class="${item.icon}" style="color:var(--gold); margin-right:10px;"></i>
                            <span style="color:#f0f0f0;">${item.title}</span>
                        </div>
                    </div>
                `;
            } else if (item.type === 'transit') {
                const transitContent = `
                    <i class="fa-solid fa-arrow-down" style="position:absolute; left:-7px; top:40%; font-size:0.8rem; color:rgba(255,255,255,0.3);"></i>
                    <div style="padding-left:15px;">
                        <div style="color:var(--accent); font-size:0.9rem; font-weight:bold; margin-bottom:5px; display:flex; align-items:center; gap:8px;">
                            ${item.title}
                        </div>
                        <div style="display:flex; gap:15px; align-items:center; margin-bottom:10px;">
                            <div style="color:var(--gold); font-size:0.85rem; font-weight:bold;">${item.price}</div>
                            ${item.timeLabel ? `<div style="color:rgba(255,255,255,0.5); font-size:0.8rem; font-style:italic;">${item.timeLabel}</div>` : ''}
                        </div>
                        <div style="display:flex; gap:8px;">
                            ${item.link ? `
                                <a href="${item.link}" target="_blank" class="tactical-btn" 
                                   style="flex:1; text-align:center; padding:5px; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px;">
                                    <i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS
                                </a>` : ''}
                            ${item.tacticalGuideId ? `
                                <button onclick="renderTacticalMission('${item.tacticalGuideId}', ${travelData.indexOf(data)})" class="tactical-btn" 
                                        style="flex:1; text-align:center; padding:5px; font-size:0.7rem; border-radius:4px; background:rgba(249,115,22,0.1); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                                    <i class="fa-solid fa-file-contract"></i> GUÍA TÁCTICA
                                </button>` : ''}
                        </div>
                    </div>
                `;

                html += `
                    <div class="transport-transit" 
                         style="margin-left:75px; padding:10px 0; border-left:2px dashed rgba(255,255,255,0.2); position:relative; margin-bottom:15px; display:block;">
                        ${transitContent}
                    </div>
                `;
            }
        });
        html += `</div>`;
    } else {
        html += `<div class="timeline-container" style="margin-top:20px;">`;
        data.timeline.forEach(t => {
            html += `<div class="timeline-item"><div class="time-tag">${t.time}</div><strong class="timeline-title">${t.title}</strong><div class="timeline-desc">${t.desc}</div></div>`;
        });
        html += `</div>`;
    }

    // Añadir precios si existen
    if (data.prices) {
        html += `<div class="prices-box"><div class="prices-title"><i class="fa-solid fa-yen-sign"></i> GASTOS APROXIMADOS</div>`;
        if (data.prices.transport) html += `<div class="prices-item"><strong>Transporte:</strong> ${data.prices.transport}</div>`;
        if (data.prices.entrances) html += `<div class="prices-item"><strong>Entradas:</strong> ${data.prices.entrances}</div>`;
        if (data.prices.food) html += `<div class="prices-item"><strong>Comida:</strong> ${data.prices.food}</div>`;
        if (data.prices.total) html += `<div class="prices-item" style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); font-weight:700; color:var(--gold);"><strong>TOTAL:</strong> ${data.prices.total}</div>`;
        html += `</div>`;
    }

    // Añadir adiciones/consejos al FINAL del panel derecho
    if (data.additions && data.additions.length > 0) {
        html += `<div class="additions-box" style="margin-top:20px;"><div class="additions-title"><i class="fa-solid fa-lightbulb"></i> CONSEJOS Y ADICIONES</div>`;
        data.additions.forEach(a => html += `<div class="additions-item">${a}</div>`);
        html += `</div>`;
    }

    // Ya no mostramos las opciones aquí, se muestran en el panel central
    container.innerHTML = html;

    // Ya no creamos botones aquí, se manejan desde el panel central
}

/* --- FUNCIÓN VISUAL ACTUALIZADA (Sustituye solo esto al final de script.js) --- */

function renderCenterVisual(data, mode, optData = null) {
    const card = document.getElementById('visual-card');

    // 0. MODO "FLEXIBLE" (Nuevo sistema Base + Complementos)
    if (data.isFlexible && mode === 'selector') {
        const location = getLocation(data);

        // --- 1. Header (Hotel + Location) ---
        const hotelName = data.hotel || '';
        let hotelHTML = '';
        if (hotelName && hotelName !== 'Casa' && !hotelName.includes('vuelo') && !hotelName.includes('Vuelo')) {
            const hotelImage = data.hotelImage || '';
            const hotelGoogleLink = data.hotelGoogleLink || '';
            const hotelImgHTML = hotelImage ?
                `<img src="${hotelImage}" class="hotel-image" onerror="this.style.display='none'">` :
                `<div class="hotel-image-placeholder"><i class="fa-solid fa-hotel"></i></div>`;

            const hotelLinkHTML = hotelGoogleLink ?
                `<a href="${hotelGoogleLink}" target="_blank" class="hotel-google-link" title="Ver en Google Maps">
                     <i class="fa-solid fa-map-marker-alt"></i> Ver en Google Maps
                 </a>` : '';

            hotelHTML = `
                 <div class="hotel-info-section">
                     ${hotelImgHTML}
                     <div class="hotel-details">
                         <h3 class="hotel-name"><i class="fa-solid fa-bed"></i> ${hotelName}</h3>
                         ${hotelLinkHTML}
                     </div>
                 </div>
             `;
        }

        // Pin de ubicación (Arriba derecha)
        const locationBadgeHTML = location ?
            `<div class="location-badge"><i class="fa-solid fa-map-marker-alt"></i> ${location}</div>` : '';

        // Banner de ciudad en Neón (Bajo el hotel)
        const cityBannerHTML = location ?
            `<div class="location-header" style="text-align:left; margin-bottom:0; padding:10px 0;">
                <h1 style="font-size:3rem; text-align:left; letter-spacing:4px;">${location}</h1>
            </div>` : '';

        // Título del día (Debajo del neón)
        const dayInfoHTML = `
            <div class="day-info-section" style="margin-top:0; margin-bottom:20px;">
                <p class="day-activity" style="font-size:1.1rem; color:var(--text-secondary);">${data.title}</p>
            </div>
        `;

        // --- 2. Base Itinerary Section ---
        let baseEventsHTML = '';
        if (data.base.events) {
            data.base.events.forEach(event => {
                let eventImg = event.image ? `<img src="${event.image}" class="base-event-thumb" onerror="this.style.display='none'" style="width:80px; height:80px; object-fit:cover; border-radius:8px; margin-right:15px;">` : '';

                // Si el evento tiene ID, lo hacemos pulsable
                if (event.id) {
                    baseEventsHTML += `
                        <button class="timeline-item base-event-item clickable-event" 
                                onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${event.id}', this)"
                                style="display:flex; align-items:flex-start; margin-bottom:20px; width:100%; text-align:left; border:none; background:transparent; color:inherit; font-family:inherit; cursor:pointer;"
                                aria-label="Ver detalles de: ${event.title}">
                            <div class="time-tag" style="min-width:60px;">${event.time}</div>
                            <div class="base-event-content" style="display:flex; flex:1;">
                                ${eventImg}
                                <div class="base-event-text">
                                    <strong class="timeline-title" style="display:block; font-size:1.1rem; margin-bottom:5px; text-decoration:underline; text-decoration-color:var(--accent);">${event.title} <i class="fa-solid fa-circle-info" style="font-size:0.8em; color:var(--accent); margin-left:5px;"></i></strong>
                                    <div class="timeline-desc" style="color:#f0f0f0; display:flex; align-items:flex-start;">
                                        <i class="fa-solid fa-circle-info" style="color:var(--accent); font-size:0.8rem; margin-top:4px; margin-right:8px;"></i>
                                        <span>${event.description}</span>
                                    </div>
                                    ${event.price && event.price !== 'Gratis' ? `<div class="base-price" style="color:var(--gold); font-size:0.95rem; font-weight:bold; margin-top:8px;"><i class="fa-solid fa-tag"></i> ${event.price}</div>` : ''}
                                </div>
                            </div>
                        </button>
                    `;
                } else {
                    // Si no tiene ID (o es un hueco de tiempo libre), se muestra normal
                    const isGap = event.type === 'gap';
                    const gapStyle = isGap ? 'background:rgba(255,255,255,0.05); border-left:3px dashed #64748b;' : '';

                    baseEventsHTML += `
                        <div class="timeline-item base-event-item" style="display:flex; align-items:flex-start; margin-bottom:20px; ${gapStyle}">
                            <div class="time-tag" style="min-width:60px;">${event.time}</div>
                            <div class="base-event-content" style="display:flex; flex:1;">
                                ${eventImg}
                                <div class="base-event-text">
                                    <strong class="timeline-title" style="display:block; font-size:1.1rem; margin-bottom:5px;">${event.title}</strong>
                                    <div class="timeline-desc" style="color:#cbd5e1;">${event.description}</div>
                                    ${event.price && event.price !== 'Gratis' ? `<div class="base-price" style="color:var(--gold); font-size:0.85rem; margin-top:5px;"><i class="fa-solid fa-tag"></i> ${event.price}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        }

        // --- 3. Complements Grid ---
        let complementsHTML = '';
        if (data.complements && data.complements.length > 0) {
            complementsHTML += `<div class="complements-section" style="margin-top:40px;">
                <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                    <i class="fa-solid fa-plus-circle"></i> Personaliza tu día
                </h3>
                <p style="color:#94a3b8; margin-bottom:20px;">Añade estas experiencias opcionales a tu itinerario base:</p>
                <div class="excursions-grid excursions-grid-${Math.min(data.complements.length, 3)}">`;

            data.complements.forEach(comp => {
                const compImg = comp.image || '';
                const imgHTML = compImg ? `<img src="${compImg}" class="excursion-thumb" onerror="this.style.display='none'">` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';

                complementsHTML += `
                    <button class="excursion-card complement-card"
                            data-option-id="${comp.id}"
                            onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${comp.id}', this)"
                            aria-label="${comp.title}"
                            role="button" tabindex="0">
                        ${imgHTML}
                        <div class="excursion-card-content">
                            <div class="excursion-id" style="background:var(--neon-purple); display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px;">OPCIONAL</div>
                            <h3 class="excursion-title" style="font-size:1.1rem;">${comp.title}</h3>
                            <div class="complement-meta" style="margin-top:10px; font-size:0.9rem; color:#cbd5e1; display:flex; justify-content:space-between;">
                                <span><i class="fa-regular fa-clock"></i> ${comp.time}</span>
                                <span><i class="fa-solid fa-tag"></i> ${comp.price}</span>
                            </div>
                        </div>
                    </button>
                `;
            });
            complementsHTML += `</div></div>`;
        }

        card.innerHTML = `
            <div class="excursion-page-header">
                <div class="header-left">
                    ${hotelHTML}
                    ${cityBannerHTML}
                    ${dayInfoHTML}
                </div>
                <div class="header-right">
                    ${locationBadgeHTML}
                </div>
            </div>

            <div class="base-itinerary-box" style="background:rgba(15, 23, 42, 0.6); padding:25px; border-radius:16px; margin-bottom:30px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 4px 20px rgba(0,0,0,0.2);">
                <div style="display:flex; align-items:center; margin-bottom:20px;">
                    <i class="fa-solid fa-route" style="font-size:1.5rem; color:var(--neon-blue); margin-right:15px;"></i>
                    <div>
                        <p style="margin:0; font-style:italic; color:#94a3b8; font-size:0.9rem;">${data.base.description}</p>
                    </div>
                </div>
                <div class="timeline-container" style="margin-bottom:0; padding-left:20px; border-left:2px solid rgba(56, 189, 248, 0.3);">
                    ${baseEventsHTML}
                </div>
            </div>

            ${complementsHTML}
        `;
        return;
    }

    // 1. MODO "SELECCIONAR EXCURSIÓN" ( cuando cargas el día pero no has elegido opción A/B/C)
    // Mostramos las excursiones disponibles en horizontal con sus fotos
    if (mode === 'selector') {
        const location = getLocation(data);

        // Si hay opciones, mostrarlas en horizontal con nuevo layout
        if (data.hasOptions && data.options && data.options.length > 0) {
            // Hotel info (arriba izquierda)
            const hotelImage = data.hotelImage || '';
            const hotelGoogleLink = data.hotelGoogleLink || '';
            const hotelName = data.hotel || '';

            let hotelHTML = '';
            if (hotelName && hotelName !== 'Casa' && !hotelName.includes('vuelo') && !hotelName.includes('Vuelo')) {
                const hotelImgHTML = hotelImage ?
                    `<img src="${hotelImage}" class="hotel-image" onerror="this.style.display='none'">` :
                    `<div class="hotel-image-placeholder"><i class="fa-solid fa-hotel"></i></div>`;

                const hotelLinkHTML = hotelGoogleLink ?
                    `<a href="${hotelGoogleLink}" target="_blank" class="hotel-google-link" title="Ver en Google Maps">
                        <i class="fa-solid fa-map-marker-alt"></i> Ver en Google Maps
                    </a>` : '';

                hotelHTML = `
                    <div class="hotel-info-section">
                        ${hotelImgHTML}
                        <div class="hotel-details">
                            <h3 class="hotel-name"><i class="fa-solid fa-bed"></i> ${hotelName}</h3>
                            ${hotelLinkHTML}
                        </div>
                    </div>
                `;
            }

            // Ciudad (Pin arriba derecha) - Usamos nombres distintos para evitar conflictos de scope
            const selLocationBadgeHTML = location ?
                `<div class="location-badge"><i class="fa-solid fa-map-marker-alt"></i> ${location}</div>` : '';

            // Banner de ciudad en Neón (Bajo el hotel)
            const selCityBannerHTML = location ?
                `<div class="location-header" style="text-align:left; margin-bottom:0; padding:10px 0;">
                <h1 style="font-size:3rem; text-align:left; letter-spacing:4px;">${location}</h1>
            </div>` : '';

            // Extraer el nombre de la ciudad del título (ej: "🏯 Osaka: Samuráis y Neones" -> "Osaka")
            const cityMatch = data.title.match(/:\s*(.+?):/);
            const cityName = cityMatch ? cityMatch[1] : data.title.split(':')[0].replace(/[🏯⛩️🎌🦌🎢🛫🏠]/g, '').trim();
            const dayNameHTML = `
                <div class="day-info-section">
                    <h2 class="day-name">${cityName}</h2>
                    <p class="day-activity">${data.title}</p>
                </div>
            `;

            // Excursiones (debajo de todo)
            const numOptions = data.options.length;
            const gridClass = `excursions-grid excursions-grid-${numOptions}`;
            let optionsHTML = `<div class="${gridClass}">`;
            data.options.forEach(opt => {
                const optImg = opt.image || data.image || '';
                const imgHTML = optImg ? `<img src="${optImg}" class="excursion-thumb" onerror="this.style.display='none'">` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';

                optionsHTML += `
                   <button class="excursion-card"
                           data-option-id="${opt.id}"
                           onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${opt.id}', this)"
                           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectExcursionFromCard(${travelData.indexOf(data)}, '${opt.id}', this);}"
                            aria-label="${opt.name}: ${opt.summary}"
                            aria-pressed="false"
                            role="button"
                            tabindex="0">
                        ${imgHTML}
                        <div class="excursion-card-content">
                            <div class="excursion-id">${opt.id}</div>
                            <h3 class="excursion-title">${opt.name}</h3>
                            <p class="excursion-summary">${opt.summary}</p>
                        </div>
                    </button>
                `;
            });
            optionsHTML += `</div>`;

            card.innerHTML = `
                <div class="excursion-page-header">
                    <div class="header-left">
                        ${hotelHTML}
                        ${selCityBannerHTML}
                        <div class="day-info-section" style="margin-top:0;">
                            <p class="day-activity" style="font-size:1.1rem; color:var(--text-secondary);">${data.title}</p>
                        </div>
                    </div>
                    <div class="header-right">
                        ${selLocationBadgeHTML}
                    </div>
                </div>
                <div class="excursions-section">
                    ${optionsHTML}
                </div>
            `;
            return;
        }

        // Si no hay opciones, mostrar contenido estático
        const locationForFallback = getLocation(data);
        const locationDisplay = locationForFallback ? `<div class="location-header"><h1>${locationForFallback}</h1></div>` : '';
        let heroImg = data.image ? `<img src="${data.image}" class="cinema-mode-img" style="opacity:0.6; height:200px;">` : '';
        card.innerHTML = `
           ${locationDisplay}
           ${heroImg}
           <div class="empty-state">
               <i class="fa-solid fa-info-circle"></i>
               <h2>Información del Día</h2>
               <p>Consulta el panel derecho para ver los detalles y la línea de tiempo.</p>
           </div>
       `;
        return;
    }

    // 2. MODO "INFO ESTÁTICA" (Para días de vuelo que no tienen opciones)
    if (mode === 'static') {
        let imgSrc = data.image || '';
        let imgHTML = imgSrc ? `<img src="${imgSrc}" class="cinema-mode-img">` : '';
        const location = getLocation(data);
        const locationDisplay = location ? `<div class="location-header"><h1>${location}</h1></div>` : '';

        card.innerHTML = `
            ${locationDisplay}
            ${imgHTML}
            <div class="story-container">
                <h3 style="margin-top:0"><i class="fa-solid fa-circle-info"></i> Resumen de Operaciones</h3>
                <p>${data.visualContent.summary}</p>
                <div style="margin-top:20px; padding-top:20px; border-top:1px dashed rgba(255,255,255,0.2)">
                    <p><strong><i class="fa-solid fa-note-sticky"></i> Nota:</strong> ${data.visualContent.details}</p>
                </div>
            </div>
        `;
        return;
    }

    // 3. MODO "OPCIÓN" (Cuando eliges A, B o C) -> AQUÍ VA EL CONTENIDO RICO
    if (mode === 'option') {
        // Imagen: Usamos la de la opción si hay, si no la del día, si no nada.
        let imgSrc = optData.image || data.image || '';
        let imgHTML = imgSrc ?
            `<img src="${imgSrc}" class="cinema-mode-img" onerror="this.style.display='none'">` :
            `<div class="photo-placeholder"><i class="fa-solid fa-image"></i> Sin imagen</div>`;

        card.innerHTML = `
            <button onclick="loadDay(${travelData.indexOf(data)})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:15px; display:flex; align-items:center;">
                <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
            </button>
            ${imgHTML}
            
            <div class="story-container">
                <h2 style="font-size:2rem; color:white; margin-bottom:5px;">${optData.name || optData.title}</h2>
                <p style="color:var(--accent); margin-bottom:30px; font-style:italic;">${optData.summary || optData.description}</p>
                
                ${optData.fullDesc || ''}

                ${optData.ivanChallenge ? `
                    <div style="margin-top:30px; background:rgba(239,68,68,0.1); border:1px solid var(--danger); padding:20px; border-radius:12px;">
                        <strong style="color:var(--danger); display:block; margin-bottom:10px; font-size:1.1rem;">
                            <i class="fa-solid fa-dragon"></i> MISIÓN ESPECIAL (IVÁN)
                        </strong>
                        <p style="margin:0; color:#fca5a5;">${optData.ivanChallenge}</p>
                    </div>
                ` : ''}

                ${optData.price && optData.price !== 'Gratis' ? `
                    <div style="margin-top:30px; background:rgba(251, 191, 36, 0.1); border:1px solid var(--gold); padding:15px; border-radius:12px;">
                        <strong style="color:var(--gold); display:block; margin-bottom:8px; font-size:0.95rem;">
                            <i class="fa-solid fa-yen-sign"></i> GASTOS ESTIMADOS (Opción ${optData.id})
                        </strong>
                        <p style="margin:0; color:#fde68a; font-size:0.9rem;">${optData.price}</p>
                    </div>
                ` : ''}

                <div style="margin-top:30px; color:var(--gold); font-weight:bold; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
                    <i class="fa-solid fa-camera"></i> OBJETIVO FOTO: <span style="color:white; font-weight:normal;">${optData.photoSpot}</span>
                </div>
            </div>
        `;
    }

    // 4. MODO "OPCIÓN FLEXIBLE" (Para complementos en días base + complementos)
    if (mode === 'option-flexible') {
        let imgSrc = optData.image || data.image || '';
        let imgHTML = imgSrc ?
            `<img src="${imgSrc}" class="cinema-mode-img" onerror="this.style.display='none'">` :
            `<div class="photo-placeholder"><i class="fa-solid fa-image"></i> Sin imagen</div>`;

        card.innerHTML = `
             <button onclick="loadDay(${travelData.indexOf(data)})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:15px; display:flex; align-items:center;">
                 <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
             </button>
             
             ${imgHTML}
             
             <div class="story-container">
                 <h2 style="font-size:2rem; color:white; margin-bottom:5px;">${optData.title}</h2>
                 <p style="color:var(--accent); margin-bottom:30px; font-style:italic;">${optData.description}</p>
                 
                 ${optData.fullDesc ? optData.fullDesc :
                // Fallback si no hay fullDesc: usar description y quizás generar algo genérico
                `<p>${optData.description}</p>`
            }

                 ${optData.ivanChallenge ? `
                     <div style="margin-top:30px; background:rgba(239,68,68,0.1); border:1px solid var(--danger); padding:20px; border-radius:12px;">
                         <strong style="color:var(--danger); display:block; margin-bottom:10px; font-size:1.1rem;">
                             <i class="fa-solid fa-dragon"></i> MISIÓN ESPECIAL (IVÁN)
                         </strong>
                         <p style="margin:0; color:#fca5a5;">${optData.ivanChallenge}</p>
                     </div>
                 ` : ''}

                 ${optData.price && optData.price !== 'Gratis' ? `
                     <div style="margin-top:30px; background:rgba(251, 191, 36, 0.1); border:1px solid var(--gold); padding:15px; border-radius:12px;">
                         <strong style="color:var(--gold); display:block; margin-bottom:8px; font-size:0.95rem;">
                             <i class="fa-solid fa-yen-sign"></i> GASTOS ESTIMADOS
                         </strong>
                         <p style="margin:0; color:#fde68a; font-size:0.9rem;">${optData.price}</p>
                     </div>
                 ` : ''}

                 ${optData.video ? `
                    <div style="margin-top:30px;">
                        <h3 style="color:white; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Video Relacionado</h3>
                        <a href="${optData.video}" target="_blank" style="color:var(--neon-blue); text-decoration:none; display:flex; align-items:center;">
                            <i class="fa-solid fa-play-circle" style="font-size:2rem; margin-right:15px;"></i>
                            <span>Ver video en YouTube</span>
                        </a>
                    </div>
                 ` : ''}
             </div>
         `;
    }
}

// Función global para seleccionar excursión desde las tarjetas del panel central
function selectExcursionFromCard(dayIndex, optionId, cardElement) {
    const data = travelData[dayIndex];
    let selectedItem = null;

    if (data.isFlexible) {
        selectedItem = data.complements.find(comp => comp.id === optionId);
        if (!selectedItem && data.base && data.base.events) {
            selectedItem = data.base.events.find(evt => evt.id === optionId);
        }

        // AHORA: Renderizar igual que las opciones antiguas
        if (selectedItem) {
            renderCenterVisual(data, 'option-flexible', selectedItem);
        }
    } else {
        selectedItem = data.options.find(opt => opt.id === optionId);
        if (selectedItem) {
            // Actualizar botones activos y aria-pressed
            document.querySelectorAll('.excursion-card').forEach(card => {
                card.classList.remove('active');
                card.setAttribute('aria-pressed', 'false');
            });
            if (cardElement) {
                cardElement.classList.add('active');
                cardElement.setAttribute('aria-pressed', 'true');
            }

            // Renderizar la opción seleccionada
            renderCenterVisual(data, 'option', selectedItem);
        }
    }

    // Cerrar sidebar en móvil después de seleccionar
    if (window.innerWidth < 768 && window.closeMobileMenu) {
        window.closeMobileMenu();
    }
}

// --- FASE 2 & 3: LÓGICA DE INTERFACE TÁCTICA ---
function renderTacticalMission(missionId, dayIndex) {
    const data = travelData[dayIndex];
    const card = document.getElementById('visual-card');

    // Animación de salida opcional o simple transición
    card.style.opacity = '0';
    card.style.transform = 'scale(0.98) translateY(10px)';
    card.style.transition = 'all 0.3s ease';

    setTimeout(() => {
        let missionHTML = '';
        if (missionId === 'mission01') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 01</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_01: INFILTRACIÓN CASTILLO [JR LINE]</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="8" class="schema-point" />
                            <text x="35" y="40" class="schema-label">JR OSAKA STATION</text>
                            
                            <line x1="58" y1="60" x2="342" y2="60" class="schema-line loop-line" />
                            <text x="150" y="80" class="schema-meta">LOOP LINE (Outer Track 2)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="40" class="schema-label">OSAKAJOKOEN</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>BUSCAR:</strong> Línea Circular Roja (Osaka Loop Line)</li>
                                <li><strong>ANDÉN:</strong> Track 2</li>
                                <li><strong>DIRECCIÓN:</strong> "For Kyobashi" en pantallas</li>
                                <li><strong>BAJAR:</strong> 4ª Parada (Osakajokoen)</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-radar"></i> ESTADO DEL OBJETIVO:</div>
                            <div class="status-box">IDENTIFICADO_EXTERIOR</div>
                        </div>
                    </div>
                    
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission02') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 02</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_02: NAVEGACIÓN URBANA AL SKY BLDG</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 180" class="schema-svg">
                            <circle cx="50" cy="40" r="6" class="schema-point" />
                            <text x="35" y="25" class="schema-label">OSAKAJOKOEN</text>
                            
                            <line x1="58" y1="40" x2="192" y2="40" class="schema-line loop-line" />
                            
                            <circle cx="200" cy="40" r="6" class="schema-point" />
                            <text x="180" y="25" class="schema-label">OSAKA STATION</text>
                            
                            <path d="M 200 48 Q 200 120 342 120" class="schema-line-dotted transit-walk" fill="none" stroke-dasharray="4,4" />
                            <text x="210" y="140" class="schema-meta">CENTRAL NORTH GATE PATH</text>
                            
                            <circle cx="350" cy="120" r="8" class="schema-point-target" />
                            <text x="310" y="105" class="schema-label">UMEDA SKY BLDG</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-walking"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>RETORNO:</strong> Loop Line inversa hacia "Osaka Station"</li>
                                <li><strong>SALIDA:</strong> Busca "Central North Gate" (Puerta Norte)</li>
                                <li><strong>NAVEGACIÓN:</strong> Cruza hacia "Grand Front Osaka" y busca el paso subterráneo</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-satellite-dish"></i> ESTADO DEL OBJETIVO:</div>
                            <div class="status-box">IDENTIFICADO_ALTURA</div>
                        </div>
                    </div>
                    
                    <div class="scanline-overlay"></div>
                </div>
            `;
        }

        card.innerHTML = missionHTML;
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
    }, 300);
}

window.onload = init;
