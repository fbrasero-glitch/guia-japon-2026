/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */
// --- MOTOR GRÁFICO ---
let map;        // Mapa principal
let previewMap; // Mapa de la ventana espía
let introVideo; // Video de portada

// --- SISTEMA DE RESERVAS (LOCALSTORAGE) ---
window.toggleBookingStatus = function (id, dayIndex) {
    const currentState = Persistence.getItem(id);
    if (currentState === 'comprado') {
        Persistence.setItem(id, 'pendiente');
    } else {
        Persistence.setItem(id, 'comprado');
    }

    // Forzar re-render de la vista actual (si estamos en una excursión, el modal ya está abierto, 
    // pero lo más fácil es recargar el panel derecho o el visual card. En este caso recargamos la info estática para refrescar la UI)
    const btn = document.querySelector('.day-btn.active');
    if (btn) {
        // Un pequeño truco para re-renderizar manteniendo la vista es volver a generar el HTML del ticket,
        // pero como renderCenterVisual pisa todo, lo ideal es recargar el día, o simplemente cambiar el DOM interno.
        // Dado que recargar el día con loadDay cierra la excursión, haremos un update directo del DOM por simplicidad si se requiere, 
        // o re-pintar. Aquí recargamos la excursión llamando a click sobre optData si es posible, pero
        // lo más seguro globalmente para mantener consistencia:
        const currentBtn = document.getElementById(id + '_btn');
        if (currentBtn) {
            const newState = Persistence.getItem(id) === 'comprado';
            currentBtn.innerHTML = newState ? '<i class="fa-solid fa-check-circle"></i> Comprado' : '<i class="fa-solid fa-triangle-exclamation"></i> Pendiente';
            currentBtn.style.background = newState ? 'var(--success)' : 'var(--danger)';

            const badgeContainer = document.getElementById(id + '_badge');
            if (badgeContainer) {
                badgeContainer.style.borderColor = newState ? 'var(--success)' : 'var(--danger)';
                badgeContainer.style.background = newState ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';

                const icon = badgeContainer.querySelector('i.fa-ticket');
                const text = badgeContainer.querySelector('span.badge-time');
                if (icon) icon.style.color = newState ? 'var(--success)' : 'var(--danger)';
                if (text) text.style.color = newState ? 'var(--success)' : 'var(--danger)';
            }
        } else {
            loadDay(dayIndex); // fallback
        }
    }
};

window.renderBookingBadge = function (booking, dayIndex) {
    if (!booking) return '';
    const state = Persistence.getItem(booking.id) === 'comprado' ? 'comprado' : 'pendiente';
    const isComprado = state === 'comprado';

    return `
        <div id="${booking.id}_badge" style="margin-top:20px; margin-bottom: 20px; border:2px solid ${isComprado ? 'var(--success)' : 'var(--danger)'}; border-radius:12px; padding:15px; background:${isComprado ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}; transition: all 0.3s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <i class="fa-solid fa-ticket" style="font-size:1.5rem; color:${isComprado ? 'var(--success)' : 'var(--danger)'}; transition: color 0.3s ease;"></i>
                    <div>
                        <strong style="color:white; display:block; font-size:1.1rem;">Gestión de Billetes</strong>
                        <span class="badge-time" style="color:${isComprado ? 'var(--success)' : 'var(--danger)'}; font-size:0.9rem; font-weight:bold; transition: color 0.3s ease;">
                            <i class="fa-solid fa-clock"></i> ${booking.timeframe}
                        </span>
                    </div>
                </div>
                
                <div style="display:flex; gap:10px;">
                    <button id="${booking.id}_btn" onclick="toggleBookingStatus('${booking.id}', ${dayIndex})" 
                            style="cursor:pointer; padding:8px 15px; border-radius:8px; font-weight:bold; border:none; 
                                   background:${isComprado ? 'var(--success)' : 'var(--danger)'}; color:white; display:flex; align-items:center; gap:5px; transition: all 0.3s ease;">
                        ${isComprado ? '<i class="fa-solid fa-check-circle"></i> Comprado' : '<i class="fa-solid fa-triangle-exclamation"></i> Pendiente'}
                    </button>
                    ${booking.link ? `<a href="${booking.link}" target="_blank" style="padding:8px 15px; border-radius:8px; border:1px solid #38bdf8; color:#38bdf8; text-decoration:none; font-weight:bold; display:flex; align-items:center; gap:5px; background: rgba(56,189,248,0.1);"><i class="fa-solid fa-link"></i> Oficial</a>` : ''}
                </div>
            </div>
        </div>
    `;
};

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

// --- SISTEMA DE INFOGRAFÍAS ---
window.openInfographic = function(src) {
    const modal = document.getElementById('infographic-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
};

window.closeInfographic = function() {
    const modal = document.getElementById('infographic-modal');
    modal.style.display = "none";
}

// Función auxiliar para obtener la mejor infografía disponible para un día
window.getBestDayInfographic = function(data, dayIdx) {
    // 1. Prioridad: "inf dia X.png" (donde X es el índice del día)
    // El usuario ha confirmado que tiene estas infografías en la carpeta (0-10)
    const dailyInfographic = `infografía/inf dia ${dayIdx}.png`;
    
    // Lista de días que tienen esta infografía según la auditoría actual
    const knownDailyInfos = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];
    
    if (knownDailyInfos.includes(dayIdx)) {
        return dailyInfographic;
    }

    // 2. Prioridad: Lo que venga definido en el objeto data
    if (data.infographic) {
        return data.infographic;
    }

    // 3. Fallback: inf dia 0.png
    return 'infografía/inf dia 0.png';
};

function renderInfographicPreview(src) {
    if (!src) return '';
    return `
        <div class="infographic-preview-container" onclick="openInfographic('${src}')">
            <img src="${src}" class="infographic-thumb" alt="Infografía del día">
        </div>
    `;
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

    // 0.1 Toggle móvil para HUD táctico
    const hudToggle = document.getElementById('mobile-hud-toggle');
    const rightPanel = document.querySelector('.right-panel');
    const labelVisual = document.getElementById('label-visual');
    const labelHud = document.getElementById('label-hud');

    if (hudToggle && rightPanel) {
        hudToggle.addEventListener('click', () => {
            const isHudActive = rightPanel.classList.toggle('mobile-active');
            hudToggle.classList.toggle('hud-active', isHudActive);

            if (labelVisual && labelHud) {
                labelVisual.classList.toggle('active', !isHudActive);
                labelHud.classList.toggle('active', isHudActive);
            }

            // Si abrimos el HUD, ocultamos el scroll del body
            if (isHudActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
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
        <div class="countdown-container ${isMobile ? 'countdown-mobile' : ''}" >
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
        btn.setAttribute('aria-label', d.day === 0 ? `PREPARATIVOS` : `Día ${d.day}: ${d.title} `);
        if (d.day === 0) {
            btn.innerHTML = `<strong style="font-size:1.1em; letter-spacing:1px;">PREPARATIVOS</strong><br><small>${d.date}</small>`;
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

    // 4. Inicializar sincronización Cloud si está configurada
    if (window.Persistence && window.Persistence.initCloudSync) {
        window.Persistence.initCloudSync();
    }
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
// Variable global para el viajero seleccionado
let selectedTraveler = Persistence.getItem('selectedTraveler') || 'FELIPE';

function renderPreparationPage(data) {
    const centerCard = document.getElementById('visual-card');
    const rightPanel = document.getElementById('info-content');

    if (!data.preparation) return;

    const travelers = data.preparation.travelers || ["FELIPE", "LORENA", "IVAN", "LAURA", "GEMA", "CESAR", "VICENTE", "LOLA"];

    // Calcular progreso del viajero seleccionado
    let totalItems = 0;
    let completedItems = 0;
    data.preparation.sections.forEach((section, sIdx) => {
        section.items.forEach((item, iIdx) => {
            totalItems++;
            if (Persistence.getItem(`prep-${selectedTraveler}-${sIdx}-${iIdx}`) === 'true') {
                completedItems++;
            }
        });
    });
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    // Generar avatares de viajeros para el selector
    const travelerAvatarsHTML = travelers.map(t => {
        const initial = t.charAt(0);
        const isSelected = t === selectedTraveler;
        return `<button class="traveler-avatar ${isSelected ? 'selected' : ''}"
                data-traveler="${t}"
                title="${t}"
                aria-label="Seleccionar viajero ${t}">
                ${initial}
            </button>`;
    }).join('');

    // === BLOQUE SUPERIOR V3: PLAN MAESTRO COMPACTO (ANCHO COMPLETO) ===
    let topSectionHTML = `
        <div class="prep-top-layout-v3" style="margin-bottom: 30px;">
            ${data.bookingPanel ? `
                <div class="booking-master-panel-v3" style="background: rgba(15,23,42,0.9); border: 1px solid var(--gold); border-radius: 12px; padding: 15px; box-shadow: 0 0 20px rgba(251,191,36,0.1); width: 100%;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(251,191,36,0.2); padding-bottom: 10px; margin-bottom: 15px;">
                        <h3 style="color:var(--gold); margin:0; font-size:1rem; text-transform: uppercase; letter-spacing: 1px;">
                            <i class="fa-solid fa-calendar-check"></i> ${data.bookingPanel.title}
                        </h3>
                        <span style="font-size: 0.7rem; color: rgba(255,255,255,0.4); text-transform: uppercase;">Resumen de Fechas Críticas</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;" class="custom-scroll">
                        ${data.bookingPanel.phases.map(phase => `
                            <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; border-left: 3px solid ${phase.color};">
                                <div style="font-size:0.75rem; color:${phase.color}; font-weight:900; text-transform:uppercase; margin-bottom:8px;">${phase.name}</div>
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    ${phase.items.map(item => `
                                        <div style="font-size:0.8rem; display: flex; justify-content: space-between; align-items: center;">
                                            <span style="color:white; opacity: 0.9;">${item.name}</span>
                                            <span style="color:rgba(255,255,255,0.4); font-size:0.7rem;">${item.date}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        <!-- BLOQUE MEDIO: SELECTOR DE VIAJEROS (UNA SOLA LÍNEA) -->
        <div class="traveler-control-strip" style="background: rgba(255,255,255,0.05); padding: 15px 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="color: var(--neon-blue); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">
                    <i class="fa-solid fa-user-gear"></i> Misión de:
                </div>
                <div class="traveler-avatars-row" style="display: flex; gap: 6px;">
                    ${travelerAvatarsHTML}
                </div>
            </div>

            <div class="progress-info-compact" style="flex: 1; min-width: 200px; display: flex; align-items: center; gap: 15px;">
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
                        <span style="color: white; font-weight: 800;">VIAJERO: ${selectedTraveler}</span>
                        <span style="color: var(--neon-blue); font-weight: bold;">${completedItems}/${totalItems}</span>
                    </div>
                    <div class="progress-bar-container" style="height: 8px; background: rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05);">
                        <div class="progress-bar-fill" style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple)); transition: width 0.5s ease; box-shadow: 0 0 10px var(--neon-blue);"></div>
                    </div>
                </div>
                <div style="font-size: 1.2rem; font-weight: 900; color: white; min-width: 45px; text-align: right;">${progressPercent}%</div>
            </div>
        </div>
    `;

    // Renderizar panel central con las secciones principales
    let centerHTML = `
            <div class="preparation-container">
                <div class="preparation-header">
                    <div class="preparation-title-row" style="margin-bottom: 25px; text-align: left; border-left: 4px solid var(--neon-blue); padding-left: 15px;">
                        <h1 style="text-transform:uppercase; font-size: 2.2rem; font-weight: 900; letter-spacing:4px; color: white; margin: 0;">
                            PLAN DE <span style="color: var(--neon-blue);">ACCIÓN</span>
                        </h1>
                    </div>
                    
                    ${topSectionHTML}
                </div>

                <div class="preparation-sections">
    `;

    data.preparation.sections.forEach((section, idx) => {
        centerHTML += `
         <div class="preparation-section" style="border-left: 4px solid ${section.color};">
             <div class="preparation-section-header" style="background: linear-gradient(135deg, ${section.color}20, ${section.color}08);">
                 <i class="${section.icon}" style="color: ${section.color};"></i>
                 <h2>${section.title}</h2>
             </div>
             <div class="preparation-items">
     `;

        section.items.forEach((item, itemIdx) => {
            // Verificar si el viajero actual ha completado este item
            const isChecked = Persistence.getItem(`prep-${selectedTraveler}-${idx}-${itemIdx}`) === 'true';
            const checkIcon = isChecked ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle';
            const completedClass = isChecked ? 'completed' : '';

            // Generar indicadores de estado de todos los viajeros
            const travelerStatusHTML = travelers.map(t => {
                const tChecked = Persistence.getItem(`prep-${t}-${idx}-${itemIdx}`) === 'true';
                const initial = t.charAt(0);
                return `<span class="traveler-status-dot ${tChecked ? 'checked' : ''}" title="${t}: ${tChecked ? 'Completado' : 'Pendiente'}">
                ${initial}${tChecked ? '<i class="fa-solid fa-check"></i>' : ''}
            </span>`;
            }).join('');

            centerHTML += `
            <div class="preparation-item ${completedClass}">
                <div class="preparation-item-header">
                    <button class="preparation-checkbox" data-section="${idx}" data-item="${itemIdx}" aria-label="Marcar como completado">
                        <i class="${checkIcon}"></i>
                    </button>
                    <h3>${item.title}</h3>
                </div>
                <div class="preparation-item-content">
                    <p class="preparation-desc">${item.desc}</p>
                    <div class="preparation-meta">
                        <span class="preparation-who"><i class="fa-solid fa-user-tag"></i> ${item.who}</span>
                        ${item.why ? `<span class="preparation-why"><i class="fa-solid fa-circle-info"></i> ${item.why}</span>` : ''}
                    </div>
                </div>
                <div class="traveler-status-row">
                    <span class="traveler-status-label">Estado viajeros:</span>
                    <div class="traveler-status-dots">
                        ${travelerStatusHTML}
                    </div>
                </div>
            </div>
            `;
        });

        centerHTML += `</div></div>`;
    });

    centerHTML += `</div></div> `;

    // Renderizar panel derecho con información adicional
    let rightHTML = `
        <div class="preparation-sidebar" >
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
                    <div class="preparation-special-box" >
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
        <div class="preparation-messages-box" >
             <h3><i class="fa-solid fa-envelope"></i> Mensajes Tipo</h3>
             <p class="preparation-messages-desc">Textos listos para copiar:</p>
    `;

        data.preparation.messages.forEach((msg, idx) => {
            rightHTML += `
        <div class="preparation-message-item" >
                 <strong>${msg.title}</strong>
                 <div class="preparation-message-text" onclick="copyToClipboard(this)">
                     <code>${msg.text}</code>
                     <i class="fa-solid fa-copy copy-icon"></i>
                 </div>
             </div>
        `;
        });

        rightHTML += `</div> `;
    }

    // Consejos finales
    if (data.preparation.tips && data.preparation.tips.length > 0) {
        rightHTML += `
        <div class="preparation-tips-box" >
             <h3><i class="fa-solid fa-lightbulb"></i> Consejos Finales</h3>
             <ul>
                 ${data.preparation.tips.map(tip => `<li>${tip}</li>`).join('')}
             </ul>
         </div>
        `;
    }

    rightHTML += `</div> `;

    centerCard.innerHTML = centerHTML;
    rightPanel.innerHTML = rightHTML;

    // Añadir evento a los avatares de viajeros
    document.querySelectorAll('.traveler-avatar').forEach(avatar => {
        avatar.addEventListener('click', function () {
            selectedTraveler = this.dataset.traveler;
            Persistence.setItem('selectedTraveler', selectedTraveler);
            renderPreparationPage(data);
        });
    });

    // Añadir funcionalidad de checkboxes
    document.querySelectorAll('.preparation-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            const icon = this.querySelector('i');
            const section = this.dataset.section;
            const item = this.dataset.item;
            const key = `prep-${selectedTraveler}-${section}-${item}`;

            const isCurrentlyChecked = Persistence.getItem(key) === 'true';

            if (!isCurrentlyChecked) {
                // Marcar como completado
                icon.classList.remove('fa-regular', 'fa-circle');
                icon.classList.add('fa-solid', 'fa-circle-check');
                this.closest('.preparation-item').classList.add('completed');
                Persistence.setItem(key, 'true');
            } else {
                // Desmarcar
                icon.classList.remove('fa-solid', 'fa-circle-check');
                icon.classList.add('fa-regular', 'fa-circle');
                this.closest('.preparation-item').classList.remove('completed');
                Persistence.removeItem(key);
            }

            // Re-renderizar para actualizar progreso y estados de los demás viajeros
            renderPreparationPage(travelData[0]);
        });
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

// --- SISTEMA DE ALERTAS INTELIGENTES ---
window.getSmartAlertsHTML = function (data, dayIndex) {
    let alertsHTML = '';

    let activities = [];
    if (data.options) activities = activities.concat(data.options);
    if (data.complements) activities = activities.concat(data.complements);
    if (data.base && data.base.events) activities = activities.concat(data.base.events);
    if (data.additionalExcursions) activities = activities.concat(data.additionalExcursions);

    activities.forEach(act => {
        if (act && act.booking && (act.exactDate || data.exactDate)) {
            const state = Persistence.getItem(act.booking.id);
            if (state !== 'comprado') {
                const dateToUse = act.exactDate || data.exactDate;
                const eventDate = new Date(dateToUse);
                const openDate = new Date(eventDate);
                // Si es Shibuya Sky, TeamLab o Bus Takayama-Fuji, la ventana es distinta, pero por simplicidad usamos 30 días
                // como aviso genérico "Ventana Abierta".
                openDate.setDate(openDate.getDate() - 32); // Avisamos 2 días antes de que abra realmente

                const now = new Date();
                if (now >= openDate) {
                    alertsHTML += `
        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(0,0,0,0.6)); border-left: 4px solid var(--danger); border-radius: 8px; padding: 15px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(239,68,68,0.1);" >
            <div style="display:flex; align-items:flex-start; gap: 15px;">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 1.8rem; color: var(--danger); margin-top:2px;"></i>
                <div style="flex:1;">
                    <h4 style="color:var(--danger); margin:0 0 5px 0; font-size:1.05rem; text-transform:uppercase; font-weight:900; letter-spacing:0.5px;">¡Acción Requerida!</h4>
                    <p style="color:white; margin:0 0 12px 0; font-size:0.9rem; line-height:1.4;">
                        Se ha abierto la ventana de reserva para <strong style="color:var(--gold); font-size:1rem;">${act.title || act.name}</strong>.
                    </p>
                    <div style="display:flex; gap: 8px; flex-wrap: wrap;">
                        <button onclick="toggleBookingStatus('${act.booking.id}', ${dayIndex})" style="background:var(--danger); color:white; border:none; padding:6px 12px; border-radius:6px; font-weight:bold; cursor:pointer; flex:1; display:flex; justify-content:center; align-items:center; gap:6px; font-size:0.85rem; transition: background 0.3s ease;">
                            <i class="fa-solid fa-check"></i> Comprado
                        </button>
                        ${act.booking.link ? `<a href="${act.booking.link}" target="_blank" style="background:rgba(56,189,248,0.1); color:#38bdf8; border:1px solid #38bdf8; padding:6px 12px; border-radius:6px; font-weight:bold; text-decoration:none; flex:1; display:flex; justify-content:center; align-items:center; gap:6px; font-size:0.85rem; transition: all 0.3s ease;">
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Oficial
                                        </a>` : ''}
                    </div>
                </div>
            </div>
                        </div>
        `;
                }
            }
        }
    });

    return alertsHTML;
};

function renderRightPanel(data) {
    const container = document.getElementById('info-content');
    const dayIndex = travelData.indexOf(data);
    let alerts = getSmartAlertsHTML(data, dayIndex);

    let html = `
        ${alerts}
    <div style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:10px;">
        <span style="color:var(--accent); font-weight:800; text-transform:uppercase;">${data.date}</span>
        <h2 style="font-size:1.6rem; color:white;">${data.title}</h2>
    </div>
    `;

    if (data.logistics) {
        html += `<div class="logistics-box" > <div class="logistics-title">LOGÍSTICA</div>`;
        data.logistics.forEach(l => html += `<div class="logistics-item" > <strong>${l.title}:</strong> ${l.text}</div> `);
        html += `</div> `;
    }

    // Si tiene línea de tiempo de transporte específica
    if (data.transportTimeline) {
        html += `<div class="transport-timeline-container" style="margin-top:20px;" >
        <div class="logistics-title" style="margin-bottom:15px;"><i class="fa-solid fa-train"></i> TRANSPORTE Y RUTA</div>`;

        data.transportTimeline.forEach(item => {
            if (item.type === 'point') {
                html += `
            <div class="transport-point" style="display:flex; align-items:center; margin-bottom:10px;" >
                        <span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">${item.time}</span>
                        <div style="background:rgba(255,255,255,0.1); padding:8px 12px; border-radius:8px; display:flex; align-items:center; flex:1;">
                            <i class="${item.icon}" style="color:var(--gold); margin-right:10px;"></i>
                            <span style="color:#f0f0f0;">${item.title}</span>
                        </div>
                    </div>
        `;
            } else if (item.type === 'transit') {
                const transitContent = `
        <i class="fa-solid fa-arrow-down" style="position:absolute; left:-7px; top:40%; font-size:0.8rem; color:rgba(255,255,255,0.3);" ></i>
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
    style="margin-left:75px; padding:10px 0; border-left:2px dashed rgba(255,255,255,0.2); position:relative; margin-bottom:15px; display:block;" >
        ${transitContent}
                    </div>
        `;
            } else if (item.type === 'gap') {
                html += `
        <div class="transport-point" style="display:flex; align-items:center; margin-bottom:15px; opacity: 0.8;" >
                        <span style="color:rgba(255,255,255,0.4); font-weight:bold; min-width:55px; font-family:monospace;">${item.time}</span>
                        <div style="background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px; border:1px dashed rgba(255,255,255,0.15); display:flex; align-items:center; flex:1;">
                            <i class="${item.icon}" style="color:rgba(255,255,255,0.4); margin-right:10px;"></i>
                            <span style="color:rgba(255,255,255,0.5); font-size:0.85rem; font-style:italic;">${item.title}</span>
                        </div>
                    </div>
        `;
            }
        });
        html += `</div> `;
    } else {
        html += `<div class="timeline-container" style="margin-top:20px;" > `;
        data.timeline.forEach(t => {
            html += `<div class="timeline-item" ><div class="time-tag">${t.time}</div><strong class="timeline-title">${t.title}</strong><div class="timeline-desc">${t.desc}</div></div> `;
        });
        html += `</div> `;
    }

    // Añadir precios si existen
    if (data.prices) {
        html += `<div class="prices-box" > <div class="prices-title"><i class="fa-solid fa-yen-sign"></i> GASTOS APROXIMADOS</div>`;
        if (data.prices.transport) html += `<div class="prices-item" > <strong>Transporte:</strong> ${data.prices.transport}</div> `;
        if (data.prices.entrances) html += `<div class="prices-item" > <strong>Entradas:</strong> ${data.prices.entrances}</div> `;
        if (data.prices.food) html += `<div class="prices-item" > <strong>Comida:</strong> ${data.prices.food}</div> `;
        if (data.prices.total) html += `<div class="prices-item" style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); font-weight:700; color:var(--gold);" > <strong>TOTAL:</strong> ${data.prices.total}</div> `;
        html += `</div> `;
    }

    // Añadir adiciones/consejos al FINAL del panel derecho
    if (data.additions && data.additions.length > 0) {
        html += `<div class="additions-box" style="margin-top:20px;" > <div class="additions-title"><i class="fa-solid fa-lightbulb"></i> CONSEJOS Y ADICIONES</div>`;
        data.additions.forEach(a => html += `<div class="additions-item" > ${a}</div> `);
        html += `</div> `;
    }

    // Ya no mostramos las opciones aquí, se muestran en el panel central
    container.innerHTML = html;

    // Ya no creamos botones aquí, se manejan desde el panel central
}

/* --- FUNCIÓN VISUAL ACTUALIZADA (Sustituye solo esto al final de script.js) --- */

function renderCenterVisual(data, mode, optData = null) {
    const card = document.getElementById('visual-card');
    const dayIdx = travelData.indexOf(data);
    const location = getLocation(data);

    // --- 1. LÓGICA DE ICONOS PDF NARANJA (DINÁMICA POR CIUDAD) ---
    const getPDFIcons = (loc) => {
        if (!loc) return '';
        const l = loc.toLowerCase();
        let pdfs = [];

        if (l.includes('osaka')) {
            pdfs = [
                { file: 'metro osaka.pdf', icon: 'fa-subway', title: 'Metro Osaka' },
                { file: 'osaka_metro_map.pdf', icon: 'fa-train-subway', title: 'Mapa Metro' },
                { file: 'map_osaka jr.pdf', icon: 'fa-train', title: 'JR Osaka' },
                { file: 'station_osaka.pdf', icon: 'fa-compass', title: 'Estación Osaka' }
            ];
        } else if (l.includes('kyoto') || l.includes('kioto')) {
            pdfs = [
                { file: 'kyoto Travel Map Subway & Bus Navi.pdf', icon: 'fa-bus', title: 'Bus/Metro Kyoto' },
                { file: 'kyoto Travel Map Subway & Bus Navi front.pdf', icon: 'fa-map', title: 'Mapa Kyoto frontal' },
                { file: 'map_kyoto_metro.pdf', icon: 'fa-subway', title: 'Mapa Metro' }
            ];
        } else if (l.includes('tokio') || l.includes('tokyo')) {
            pdfs = [
                { file: 'map_tokyo_metro.pdf', icon: 'fa-subway', title: 'Metro Tokio' },
                { file: 'sibuya maps.pdf', icon: 'fa-compass', title: 'Mapa Shibuya' },
                { file: 'sibuya maps 2.pdf', icon: 'fa-map-location-dot', title: 'Mapa Shibuya 2' },
                { file: 'Akijabara tower maps.pdf', icon: 'fa-building', title: 'Mapa Akihabara' }
            ];
        } else if (l.includes('alpes') || l.includes('takayama')) {
            pdfs = [
                { file: 'TAKAYAMA_walking_map_en.pdf', icon: 'fa-person-walking', title: 'Mapa Takayama' }
            ];
        } else if (l.includes('kix')) {
            pdfs = [
                { file: 'Plano Terminal KIX (Andén 5, Airport Limousine Bus a Umeda).pdf', icon: 'fa-bus-simple', title: 'Bus KIX Umeda' }
            ];
        }

        if (pdfs.length === 0) return '';

        return `
            <div class="pdf-downloads-orange" style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end; margin-top:10px;">
                ${pdfs.map(p => `
                    <a href="pdf/${p.file}" download title="${p.title}" 
                       style="background:rgba(249, 115, 22, 0.15); border:1px solid #f97316; color:#f97316; width:45px; height:45px; border-radius:10px; display:flex; align-items:center; justify-content:center; text-decoration:none; transition:all 0.3s ease; font-size:1.3rem; box-shadow: 0 0 10px rgba(249, 115, 22, 0.2);">
                        <i class="fa-solid ${p.icon}"></i>
                    </a>
                `).join('')}
            </div>
        `;
    };

    // --- 2. LÓGICA DE INFOGRAFÍAS (DÍAS 0, 1 y 2) ---
    
    // Infografía Regional (Izquierda)
    let regionInfoSrc = '';
    if (dayIdx === 2) {
        regionInfoSrc = 'infografía/inf dia 1.png'; // Duplicado en Osaka D2
    } else if (dayIdx > 2) {
        const getRegionPath = (loc) => {
            if (!loc) return '';
            const l = loc.toLowerCase();
            if (l.includes('tokyo') || l.includes('tokio')) return 'infografía/inf TOKIO.png';
            if (l.includes('osaka')) return 'infografía/inf osaka.png';
            if (l.includes('kyoto') || l.includes('kioto')) return 'infografía/inf kyoto.png';
            if (l.includes('alpes') || l.includes('takayama') || l.includes('shirakawa')) return 'infografía/inf alpes.png';
            return '';
        };
        regionInfoSrc = getRegionPath(location);
    }

    const regionInfographicHTML = (regionInfoSrc && dayIdx > 1) ? `
        <div class="infographic-preview-container" onclick="openInfographic('${regionInfoSrc}')" style="width:100%; max-width:210px; transform-origin: top left;">
            <img src="${regionInfoSrc}" class="infographic-thumb" alt="Infografía Zona" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);">
        </div>
    ` : '';

    // Infografía de Día (Derecha)
    let dayInfoSrc = getBestDayInfographic(data, dayIdx);
    if (dayIdx === 2) dayInfoSrc = 'infografía/inf dia 1.png'; // Mantener hack para D2 si es necesario

    const dayInfographicHTML = (dayInfoSrc) ? `
        <div class="infographic-preview-container" onclick="openInfographic('${dayInfoSrc}')" style="width:100%; max-width:210px; transform-origin: top right;">
            <img src="${dayInfoSrc}" class="infographic-thumb" alt="Infografía Día" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);">
        </div>
    ` : '';

    // --- 3. COMPONENTES DE CABECERA ---
    
    // Hotel (Caja dinámica con altura 100%)
    const hotelName = data.hotel || '';
    let hotelHTML = '';
    if (hotelName && hotelName !== 'Casa' && !hotelName.includes('vuelo') && !hotelName.includes('Vuelo')) {
        const hotelImage = data.hotelImage || '';
        const hotelGoogleLink = data.hotelGoogleLink || '';
        const hotelHeight = dayIdx >= 3 ? '150px' : '60px';
        const hotelImgHTML = hotelImage ? `<img src="${hotelImage}" style="width:100%; height:${hotelHeight}; object-fit:cover; border-radius:10px; margin-bottom:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">` : '';
        hotelHTML = `
            <div class="hotel-info-section" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:10px; border-radius:12px; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; box-sizing:border-box; transition: transform 0.3s ease;">
                ${hotelImgHTML}
                <div class="hotel-details">
                    <h3 class="hotel-name" style="font-size:0.9rem; margin:0; color:white;"><i class="fa-solid fa-bed"></i> ${hotelName}</h3>
                    ${hotelGoogleLink ? `<a href="${hotelGoogleLink}" target="_blank" style="color:var(--neon-blue); font-size:0.75rem; text-decoration:none;"><i class="fa-solid fa-map-location"></i> Ver en Maps</a>` : ''}
                </div>
            </div>
        `;
    }

    // Mapas / PDFs (Caja dinámica con altura 100%)
    const pdfIconsHTML = getPDFIcons(location);
    const mapsSectionHTML = `
        <div class="maps-section-column" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:flex-end; box-sizing:border-box;">
            ${location ? `<div style="color:#f97316; font-size:1.1rem; font-weight:bold; margin-bottom:5px; text-transform:uppercase; text-align:right;"><i class="fa-solid fa-location-dot"></i> ${location}</div>` : ''}
            ${pdfIconsHTML}
        </div>
    `;

    // Banner Central
    const titleMatch = data.title.match(/:\s*(.+)/);
    const subHeroText = titleMatch ? titleMatch[1] : data.title;
    const headerTitleHTML = `
        <div class="header-titles-center" style="text-align:center;">
            ${location ? `<h1 style="font-size:4.5rem; letter-spacing:8px; text-transform:uppercase; color:var(--neon-blue); text-shadow:0 0 20px rgba(0,243,255,0.5); margin:0;">${location}</h1>` : ''}
            <p style="font-size:1.6rem; font-weight:800; color:white; text-transform:uppercase; margin-top:5px;">${subHeroText}</p>
        </div>
    `;

    // ESTRUCTURA FINAL DE CABECERA (3 COLUMNAS)
    const unifiedHeaderHTML = `
        <div class="excursion-page-header" style="display:flex; justify-content:space-between; align-items:stretch; width:100%; gap:20px; margin-bottom:30px;">
            <!-- Izquierda: Infografía Regional + Hotel -->
            <div class="header-col-left" style="width:20%; display:flex; flex-direction:column; gap:15px;">
                ${regionInfographicHTML}
                <div style="flex-grow:1; display:flex; align-items:stretch;">${hotelHTML}</div>
            </div>
            
            <!-- Centro: Ciudad y Actividad -->
            <div class="header-col-center" style="width:60%; display:flex; align-items:center; justify-content:center;">
                ${headerTitleHTML}
            </div>
            
            <!-- Derecha: Infografía Día + Mapas/PDFs -->
            <div class="header-col-right" style="width:20%; display:flex; flex-direction:column; gap:15px; align-items:flex-end;">
                ${dayInfographicHTML}
                <div style="flex-grow:1; width:100%; display:flex; align-items:stretch; justify-content:flex-end;">${mapsSectionHTML}</div>
            </div>
        </div>
    `;

    // 0. MODO "FLEXIBLE" (Nuevo sistema Base + Complementos)
    if (data.isFlexible && mode === 'selector') {

        // --- 2. Base Itinerary Section ---
        let baseEventsHTML = '';
        if (data.base.events) {
            data.base.events.forEach(event => {
                let eventImg = event.image ? `<img src = "${event.image}" class="base-event-thumb" onerror = "this.style.display='none'" style="width:200px; height:200px; object-fit:cover; border-radius:12px; margin-right:20px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" > ` : '';

                // Si el evento tiene ID, lo hacemos pulsable
                if (event.id) {
                    baseEventsHTML += `
        <button class="timeline-item base-event-item clickable-event"
    onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${event.id}', this)"
    style="display:flex; align-items:flex-start; margin-bottom:20px; width:100%; text-align:left; border:none; background:transparent; color:inherit; font-family:inherit; cursor:pointer;"
    aria - label="Ver detalles de: ${event.title}" >
                            <div class="time-tag" style="min-width:60px;">${event.time}</div>
                            <div class="base-event-content" style="display:flex; flex:1;">
                                ${eventImg}
                                <div class="base-event-text">
                                    <strong class="timeline-title" style="display:block; font-size:1.1rem; margin-bottom:5px; text-decoration:underline; text-decoration-color:var(--accent);">${event.title} <i class="fa-solid fa-circle-info" style="font-size:0.8em; color:var(--accent); margin-left:5px;"></i></strong>
                                    <div class="timeline-desc" style="color:#f0f0f0; display:flex; align-items:flex-start;">
                                        <i class="fa-solid fa-circle-info" style="color:var(--accent); font-size:0.8rem; margin-top:4px; margin-right:8px;"></i>
                                        <span>${event.description}</span>
                                    </div>
                                    ${event.booking ? renderBookingBadge(event.booking, travelData.indexOf(data)) : ''}
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
        <div class="timeline-item base-event-item" style="display:flex; align-items:flex-start; margin-bottom:20px; ${gapStyle}" >
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
            complementsHTML += `<div class="complements-section" style="margin-top:40px;" >
                <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                    <i class="fa-solid fa-plus-circle"></i> Personaliza tu día
                </h3>
                <p style="color:#94a3b8; margin-bottom:20px;">Añade estas experiencias opcionales a tu itinerario base:</p>
                <div class="excursions-grid excursions-grid-${Math.min(data.complements.length, 3)}">`;

            data.complements.forEach(comp => {
                const compImg = comp.image || '';
                const imgHTML = compImg ? `<img src="${compImg}" class="excursion-thumb" onerror="this.style.display='none'" style="width:100%; height:160px; object-fit:cover;">` : '<div class="excursion-thumb-placeholder" style="height:160px;"><i class="fa-solid fa-image"></i></div>';

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
            complementsHTML += `</div></div> `;
        }

        // --- 4. Excursiones Adicionales Block (Mosaico Completo) ---
        let addExcursionsHTML = '';
        if (data.additionalExcursions && data.additionalExcursions.length > 0) {
            
            // Generar las imágenes del mosaico
            let mosaicImagesHTML = '';
            data.additionalExcursions.forEach(exc => {
                 const img = exc.image || '';
                 if(img) {
                     mosaicImagesHTML += `<img src="${img}" style="flex:1; height: 160px; object-fit: cover; opacity:0.8; transition: opacity 0.3s;" onerror="this.style.display='none'">`;
                 } else {
                     mosaicImagesHTML += `<div style="flex:1; height: 160px; background:rgba(255,255,255,0.05); display:flex; align-items:center; justify-content:center; border-right:1px solid rgba(255,255,255,0.1);"><i class="fa-solid fa-image" style="opacity:0.5; font-size:2rem;"></i></div>`;
                 }
            });

            addExcursionsHTML = `
        <div class="additional-excursions-gateway" style="margin-top:40px;" >
                    <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                        <i class="fa-solid fa-map-location-dot"></i> Excursiones Adicionales
                    </h3>
                    <p style="color:#94a3b8; margin-bottom:20px;">Explora más opciones para este día si prefieres desviarte de la ruta principal:</p>
                    
                    <button class="excursion-mosaic-btn"
                            onclick="renderCenterVisual(travelData[${travelData.indexOf(data)}], 'additional-excursions-list')"
                            aria-label="Ver Excursiones Adicionales"
                            style="width: 100%; display: block; margin: 0; padding:0; position: relative; overflow: hidden; border: 1px solid rgba(0,243,255,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.3); border-radius: 12px; cursor:pointer;"
                            role="button" tabindex="0">
                        <div style="display:flex; width:100%; flex-wrap:nowrap;">
                            ${mosaicImagesHTML}
                        </div>
                        <div class="excursion-card-content" style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(15,23,42,1) 30%, transparent 100%); padding: 50px 20px 20px 20px; text-align:left;">
                            <div class="excursion-id" style="background:var(--neon-blue); display:inline-block; font-size:0.75rem; padding:4px 10px; border-radius:4px; margin-bottom:8px; color:black; font-weight:bold;"><i class="fa-solid fa-plus"></i> ${data.additionalExcursions.length} OPCIONES</div>
                            <h3 class="excursion-title" style="font-size:1.4rem; color:white; margin:0;">Ver Excursiones Adicionales</h3>
                            <div class="complement-meta" style="margin-top:5px; font-size:0.95rem; color:#cbd5e1;">
                                Haz clic aquí para explorar alternativas y detalles
                            </div>
                        </div>
                    </button>
                </div>
        `;
        }

        card.innerHTML = `
            ${unifiedHeaderHTML}

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
            ${addExcursionsHTML}
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
                    `<img src = "${hotelImage}" class="hotel-image" onerror = "this.style.display='none'" > ` :
                    `<div class="hotel-image-placeholder" > <i class="fa-solid fa-hotel"></i></div> `;

                const hotelLinkHTML = hotelGoogleLink ?
                    `<a href = "${hotelGoogleLink}" target = "_blank" class="hotel-google-link" title = "Ver en Google Maps" >
        <i class="fa-solid fa-map-marker-alt"></i> Ver en Google Maps
                    </a> ` : '';

                hotelHTML = `
        <div class="hotel-info-section" >
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
                `<div class="location-badge" style="margin-bottom:15px; width:100%; text-align:right;"> <i class="fa-solid fa-map-marker-alt"></i> ${location}</div> ` : '';

            // Banner de ciudad en Neón (Gigante, Centrado)
            const selCityBannerHTML = location ?
                `<div class="location-header" style="text-align:center; width:100%; margin-bottom:5px; padding:10px 0;" >
                <h1 style="font-size:4.5rem; text-align:center; letter-spacing:8px; text-transform:uppercase; color:var(--neon-blue); text-shadow: 0 0 20px rgba(0, 243, 255, 0.5); margin:0;">${location}</h1>
            </div> ` : '';

            // --- LÓGICA CONDICIONAL INFOGRAFÍAS DÍAS 0, 1 y 2 ---
            const dayIdxSel = travelData.indexOf(data);

            // Infografía de Zona (Izquierda)
            let regionInfoSrcSel = '';
            if (dayIdxSel > 2) {
                const getRegionInfographic = (loc) => {
                    if(!loc) return '';
                    const l = loc.toLowerCase();
                    if(l.includes('tokyo') || l.includes('tokio')) return 'infografía/inf TOKIO.png';
                    if(l.includes('osaka')) return 'infografía/inf osaka.png';
                    if(l.includes('kyoto') || l.includes('kioto')) return 'infografía/inf kyoto.png';
                    if(l.includes('alpes') || l.includes('takayama') || l.includes('fuji') || l.includes('shirakawa')) return 'infografía/inf alpes.png';
                    return '';
                };
                regionInfoSrcSel = getRegionInfographic(location);
            }
            
            const regionInfographicHTML = (regionInfoSrcSel && dayIdxSel > 1) ? `
                <div class="infographic-preview-container" onclick="openInfographic('${regionInfoSrcSel}')" style="margin-bottom:20px; width:100%; max-width:270px; transform-origin: top left;">
                    <img src="${regionInfoSrcSel}" class="infographic-thumb" alt="Infografía de Zona" style="width:100%;">
                </div>
            ` : '';

            // Infografía del Día (Derecha) + Fallback
            let dayInfoSrcSel = getBestDayInfographic(data, dayIdxSel);

            const dayInfographicHTML = (dayIdxSel > 1) ? `
                <div class="infographic-preview-container" onclick="openInfographic('${dayInfoSrcSel}')" style="margin-bottom:20px; width:100%; max-width:270px; transform-origin: top right;">
                    <img src="${dayInfoSrcSel}" class="infographic-thumb" alt="Infografía del Día" style="width:100%;">
                </div>
            ` : '';

            // Extraer el nombre de la ciudad del título (ej: "Osaka: Samuráis y Neones" -> "Samuráis y Neones")
            const titleMatch = data.title.match(/:\s*(.+)/);
            const subHeroText = titleMatch ? titleMatch[1] : data.title;
            
            const dayNameHTML = `
        <div class="day-info-section" style="margin-top:0; margin-bottom:30px; text-align:center;" >
                    <p class="day-activity" style="font-size:1.6rem; font-weight: 800; color:white; text-transform: uppercase;">${subHeroText}</p>
                </div>
        `;

            // Excursiones (debajo de todo)
            const numOptions = data.options.length;
            const gridClass = `excursions - grid excursions - grid - ${numOptions} `;
            let optionsHTML = `<div class="${gridClass}" > `;
            data.options.forEach(opt => {
                const optImg = opt.image || data.image || '';
                const imgHTML = optImg ? `<img src = "${optImg}" class="excursion-thumb" onerror = "this.style.display='none'" > ` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';

                optionsHTML += `
        <button class="excursion-card"
    data - option - id="${opt.id}"
    onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${opt.id}', this)"
    onkeydown = "if(event.key==='Enter'||event.key===' '){event.preventDefault();selectExcursionFromCard(${travelData.indexOf(data)}, '${opt.id}', this);}"
    aria - label="${opt.name}: ${opt.summary}"
    aria - pressed="false"
    role = "button"
    tabindex = "0" >
        ${imgHTML}
    <div class="excursion-card-content">
        <div class="excursion-id">${opt.id}</div>
        <h3 class="excursion-title">${opt.name}</h3>
        <p class="excursion-summary">${opt.summary}</p>
    </div>
                    </button>
        `;
            });
            optionsHTML += `</div> `;

            card.innerHTML = `
                ${unifiedHeaderHTML}
        <div class="excursions-section">
            ${optionsHTML}
        </div>
    `;
            return;
        }

        // Si no hay opciones, mostrar contenido estático
        const locationForFallback = getLocation(data);
        const locationDisplay = locationForFallback ? `<div class="location-header" > <h1>${locationForFallback}</h1></div> ` : '';
        let heroImg = data.image ? `<img src = "${data.image}" class="cinema-mode-img" style="opacity:0.6; height:200px;" > ` : '';
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

    // --- NUEVO MODO: LISTA DE EXCURSIONES ADICIONALES ---
    if (mode === 'additional-excursions-list') {
        let listHTML = `
        <button onclick="renderCenterVisual(travelData[${travelData.indexOf(data)}], 'selector')" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:20px; display:flex; align-items:center;" >
            <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Día
            </button>
            
            <div class="location-header" style="text-align:left; margin-bottom:10px;">
                <h1 style="font-size:2.5rem; letter-spacing:2px; color:var(--neon-blue);"><i class="fa-solid fa-map-location-dot"></i> EXPLORACIÓN ALTERNATIVA</h1>
            </div>
            <p style="color:#94a3b8; margin-bottom:30px; font-size:1.1rem;">Selecciona una misión para ver los detalles tácticos y logísticos.</p>
            
            <div class="excursions-grid excursions-grid-${Math.min(data.additionalExcursions.length, 3)}">
        `;

        data.additionalExcursions.forEach(exc => {
            const excImg = exc.image || '';
            const imgHTML = excImg ? `<img src="${excImg}" class="excursion-thumb" onerror="this.style.display='none'">` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';

            listHTML += `
                <button class="excursion-card complement-card"
                        data-option-id="${exc.id}"
                        onclick="selectExcursionFromCard(${travelData.indexOf(data)}, '${exc.id}', this)"
                        aria-label="${exc.title}"
                        role="button" tabindex="0">
                    ${imgHTML}
                    <div class="excursion-card-content">
                        <div class="excursion-id" style="background:var(--neon-blue); color:black; font-weight:bold; display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px;">ADICIONAL</div>
                        <h3 class="excursion-title" style="font-size:1.1rem; color:white;">${exc.title}</h3>
                        <div class="complement-meta" style="margin-top:10px; font-size:0.9rem; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center;">
                            <span><i class="fa-regular fa-clock"></i> ${exc.time || 'Flexible'}</span>
                            ${exc.price ? `<span style="color:var(--gold);"><i class="fa-solid fa-tag"></i> ${exc.price}</span>` : ''}
                        </div>
                    </div>
                </button>
            `;
        });

        listHTML += `</div>`;
        card.innerHTML = listHTML;
        // Scroll al inicio de la página al abrir la lista
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Intentar scroll en contenedores principales por si acaso (móvil vs desktop)
        const centerContent = document.querySelector('.center-stage');
        if (centerContent) centerContent.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // 2. MODO "INFO ESTÁTICA" (Para días de vuelo que no tienen opciones)
    if (mode === 'static') {
        let imgSrc = data.image || '';
        let imgHTML = imgSrc ? `<img src = "${imgSrc}" class="cinema-mode-img" > ` : '';

        card.innerHTML = `
            ${unifiedHeaderHTML}
            ${imgHTML}
            ${renderInfographicPreview(getBestDayInfographic(data, travelData.indexOf(data)))}
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
            ${unifiedHeaderHTML}
        <button onclick="loadDay(${travelData.indexOf(data)})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:15px; display:flex; align-items:center;">
            <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
            </button>
        ${imgHTML}

    <div class="story-container">
        <h2 style="font-size:2rem; color:white; margin-bottom:5px;">${optData.name || optData.title}</h2>
        <p style="color:var(--accent); margin-bottom:20px; font-style:italic;">${optData.summary || optData.description}</p>

        ${renderBookingBadge(optData.booking, travelData.indexOf(data))}

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
            `<img src = "${imgSrc}" class="cinema-mode-img" onerror = "this.style.display='none'" > ` :
            `<div class="photo-placeholder" > <i class="fa-solid fa-image"></i> Sin imagen</div> `;

        // Determinar si es una excursión adicional (id starts with 'add_')
        const isAdditionalExc = optData.id && optData.id.startsWith('add_');

        let backBtnHTML = '';
        if (isAdditionalExc) {
            // Mostrar AMBOS botones lado a lado
            backBtnHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:15px;" >
                    <button onclick="loadDay(${travelData.indexOf(data)})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; display:flex; align-items:center;">
                        <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
                    </button>
                    <button onclick="renderCenterVisual(travelData[${travelData.indexOf(data)}], 'additional-excursions-list')" style="background:transparent; border:none; color:var(--neon-blue); cursor:pointer; font-size:1.1rem; display:flex; align-items:center;">
                        <i class="fa-solid fa-list" style="margin-right:8px;"></i> Volver a Excursiones
                    </button>
                </div>
        `;
        } else {
            // Comportamiento normal (solo volver al itinerario)
            backBtnHTML = `
        <button onclick="loadDay(${travelData.indexOf(data)})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:15px; display:flex; align-items:center;" >
            <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
                </button>
        `;
        }

        card.innerHTML = `
             ${unifiedHeaderHTML}
             ${backBtnHTML}
             
             ${imgHTML}

    <div class="story-container">
        <h2 style="font-size:2rem; color:white; margin-bottom:5px;">${optData.title}</h2>
        <p style="color:var(--accent); margin-bottom:20px; font-style:italic;">${optData.description}</p>

        ${renderBookingBadge(optData.booking, travelData.indexOf(data))}

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

        ${(optData.link || optData.tacticalGuideId) ? `
                     <div style="margin-top:30px; display:flex; gap:15px; flex-wrap:wrap;">
                         ${optData.link ? `
                             <a href="${optData.link}" target="_blank" class="tactical-btn" 
                                style="flex:1; text-align:center; padding:12px; font-size:0.9rem; border-radius:8px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:8px; min-width:180px;">
                                 <i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS
                             </a>
                         ` : ''}
                         ${optData.tacticalGuideId ? `
                             <button onclick="renderTacticalMission('${optData.tacticalGuideId}', ${travelData.indexOf(data)})" class="tactical-btn" 
                                     style="flex:1; text-align:center; padding:12px; font-size:0.9rem; border-radius:8px; background:rgba(249,115,22,0.1); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; min-width:180px;">
                                 <i class="fa-solid fa-file-contract"></i> GUÍA TÁCTICA
                             </button>
                         ` : ''}
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

        ${optData.tacticalOptions ? `
                    <div style="margin-top:30px; border-top:1px solid rgba(0, 243, 255, 0.2); padding-top:20px;">
                        <h3 style="color:var(--neon-blue); margin-bottom:15px;"><i class="fa-solid fa-route"></i> OPCIONES DE DESPLIEGUE TÁCTICO</h3>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                            ${optData.tacticalOptions.map(opt => `
                                <div class="datapad-container" style="padding:15px; border-color:var(--accent);">
                                    <div style="font-size:0.7rem; color:var(--accent); font-weight:800; margin-bottom:5px;">[ ${opt.time} ]</div>
                                    <h4 style="color:white; font-size:0.9rem; margin-bottom:10px;">${opt.title}</h4>
                                    <p style="font-size:0.8rem; opacity:0.8; margin-bottom:12px;">${opt.description}</p>
                                    
                                    ${opt.schedule ? `
                                        <div style="margin-bottom:15px; padding:10px; background:rgba(255,255,255,0.05); border-radius:6px; border-left:2px solid var(--accent);">
                                            <div style="font-size:0.65rem; color:var(--accent); margin-bottom:8px; letter-spacing:1px;">CRONOGRAMA_SCHEMATIC:</div>
                                            ${opt.schedule.map(s => `
                                                <div style="display:flex; justify-content:space-between; font-family:monospace; font-size:0.75rem; margin-bottom:3px; color:rgba(255,255,255,0.9);">
                                                    <span style="color:var(--accent);">${s.time}</span>
                                                    <span>${s.event}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : ''}

                                    <div style="display:flex; gap:10px; flex-wrap:wrap;">
                                        ${opt.buttons ? opt.buttons.map(btn => `
                                            <a href="${btn.link}" target="_blank" class="tactical-btn" 
                                               style="flex:1; text-align:center; padding:8px; font-size:0.65rem; border-radius:4px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px; min-width:140px;">
                                                <i class="fa-solid fa-map-location-dot"></i> ${btn.text}
                                            </a>
                                        `).join('') : `
                                            <a href="${opt.link}" target="_blank" class="tactical-btn" 
                                               style="flex:1; text-align:center; padding:8px; font-size:0.65rem; border-radius:4px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px;">
                                                <i class="fa-solid fa-map-location-dot"></i> MAPS
                                            </a>
                                            <button onclick="renderTacticalMission('${opt.tacticalGuideId}', ${travelData.indexOf(data)})" class="tactical-btn" 
                                                    style="flex:1; text-align:center; padding:8px; font-size:0.65rem; border-radius:4px; background:rgba(249,115,22,0.1); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
                                                <i class="fa-solid fa-file-contract"></i> GUÍA
                                            </button>
                                        `}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                  ` : ''}
    </div>
    `;
        // Scroll al inicio de la página al abrir el detalle de excursión
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const centerContent = document.querySelector('.center-stage');
        if (centerContent) centerContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Función global para seleccionar excursión desde las tarjetas del panel central
function selectExcursionFromCard(dayIndex, optionId, cardElement) {
    const data = travelData[dayIndex];
    let selectedItem = null;

    if (data.isFlexible) {
        selectedItem = data.complements ? data.complements.find(comp => comp.id === optionId) : null;
        if (!selectedItem && data.base && data.base.events) {
            selectedItem = data.base.events.find(evt => evt.id === optionId);
        }
        if (!selectedItem && data.additionalExcursions) {
            selectedItem = data.additionalExcursions.find(exc => exc.id === optionId);
        }

        // AHORA: Renderizar igual que las opciones antiguas
        if (selectedItem) {
            // Actualizar botones activos y aria-pressed (para que funcione igual de visual que el modo opciones)
            document.querySelectorAll('.excursion-card').forEach(card => {
                card.classList.remove('active');
                card.setAttribute('aria-pressed', 'false');
            });
            if (cardElement) {
                cardElement.classList.add('active');
                cardElement.setAttribute('aria-pressed', 'true');
            }
            renderCenterVisual(data, 'option-flexible', selectedItem);
        }
    } else {
        selectedItem = data.options ? data.options.find(opt => opt.id === optionId) : null;
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


window.onload = init;

