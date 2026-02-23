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
// Variable global para el viajero seleccionado
let selectedTraveler = localStorage.getItem('selectedTraveler') || 'FELIPE';

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
            if (localStorage.getItem(`prep-${selectedTraveler}-${sIdx}-${iIdx}`) === 'true') {
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

    // Renderizar panel central con las secciones principales
    let centerHTML = `
     <div class="preparation-container">
         <div class="preparation-header">
             <div class="preparation-title-row">
                 <h1><i class="fa-solid fa-clipboard-check"></i> Preparación del Viaje</h1>
             </div>
             
             <div class="traveler-selector-box">
                 <div class="traveler-selector-label">
                     <i class="fa-solid fa-users"></i> Selecciona tu viajero:
                 </div>
                 <div class="traveler-avatars">
                     ${travelerAvatarsHTML}
                 </div>
             </div>
             
             <div class="progress-section">
                 <div class="progress-header">
                     <span class="progress-traveler"><i class="fa-solid fa-user"></i> ${selectedTraveler}</span>
                     <span class="progress-text">${completedItems}/${totalItems} completados</span>
                 </div>
                 <div class="progress-bar-container">
                     <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
                 </div>
                 <div class="progress-percent">${progressPercent}%</div>
             </div>
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
            const isChecked = localStorage.getItem(`prep-${selectedTraveler}-${idx}-${itemIdx}`) === 'true';
            const checkIcon = isChecked ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle';
            const completedClass = isChecked ? 'completed' : '';

            // Generar indicadores de estado de todos los viajeros
            const travelerStatusHTML = travelers.map(t => {
                const tChecked = localStorage.getItem(`prep-${t}-${idx}-${itemIdx}`) === 'true';
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
             <p class="preparation-messages-desc">Textos listos para copiar:</p>
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

    // Añadir evento a los avatares de viajeros
    document.querySelectorAll('.traveler-avatar').forEach(avatar => {
        avatar.addEventListener('click', function () {
            selectedTraveler = this.dataset.traveler;
            localStorage.setItem('selectedTraveler', selectedTraveler);
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

            if (icon.classList.contains('fa-circle')) {
                icon.classList.remove('fa-regular', 'fa-circle');
                icon.classList.add('fa-solid', 'fa-circle-check');
                this.closest('.preparation-item').classList.add('completed');
                localStorage.setItem(key, 'true');
            } else {
                icon.classList.remove('fa-solid', 'fa-circle-check');
                icon.classList.add('fa-regular', 'fa-circle');
                this.closest('.preparation-item').classList.remove('completed');
                localStorage.removeItem(key);
            }

            // Re-renderizar para actualizar progreso y estados
            renderPreparationPage(data);
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
            } else if (item.type === 'gap') {
                html += `
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:15px; opacity: 0.8;">
                        <span style="color:rgba(255,255,255,0.4); font-weight:bold; min-width:55px; font-family:monospace;">${item.time}</span>
                        <div style="background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:8px; border:1px dashed rgba(255,255,255,0.15); display:flex; align-items:center; flex:1;">
                            <i class="${item.icon}" style="color:rgba(255,255,255,0.4); margin-right:10px;"></i>
                            <span style="color:rgba(255,255,255,0.5); font-size:0.85rem; font-style:italic;">${item.title}</span>
                        </div>
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

        // Pin de ubicación (Arriba derecha) + Descargas si es Osaka
        let locationBadgeHTML = location ?
            `<div class="location-badge">
                <i class="fa-solid fa-map-marker-alt"></i> ${location}
                ${location.toLowerCase().includes('osaka') ? `
                    <div class="pdf-downloads">
                        <a href="pdf/metro osaka.pdf" download title="Mapa Metro Osaka" class="pdf-download-link"><i class="fa-solid fa-train-subway"></i></a>
                        <a href="pdf/map_osaka jr.pdf" download title="Mapa JR Osaka" class="pdf-download-link"><i class="fa-solid fa-train"></i></a>
                        <a href="pdf/station_osaka.pdf" download title="Guía Estación Osaka" class="pdf-download-link"><i class="fa-solid fa-compass"></i></a>
                    </div>
                ` : ''}
            </div>` : '';

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
        } else if (missionId === 'mission03') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 03</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_03: INCURSIÓN GASTRONÓMICA EN DOTONBORI</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="8" class="schema-point" />
                            <text x="35" y="40" class="schema-label">ESTACIÓN UMEDA</text>
                            
                            <line x1="58" y1="60" x2="342" y2="60" class="schema-line" style="stroke:#ef4444; filter:drop-shadow(0 0 5px #ef4444);" />
                            <text x="150" y="80" class="schema-meta">MIDOSUJI LINE (Red Line)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="40" class="schema-label">ESTACIÓN NAMBA</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-map-pin"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>DESPLAZAMIENTO:</strong> Caminar desde Umeda Sky a Est. Umeda</li>
                                <li><strong>LÍNEA:</strong> Midosuji Line (Roja)</li>
                                <li><strong>DIRECCIÓN:</strong> "For Nakamozu / Tennoji"</li>
                                <li><strong>BAJAR:</strong> Estación Namba (Salida 14)</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-lightbulb"></i> OBJETIVO:</div>
                            <div class="status-box">DOTONBORI_LOCALIZED</div>
                        </div>
                    </div>
                    
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission04') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 04</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_04: EXTRACCIÓN AL CUARTEL GENERAL (HOTEL)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 160" class="schema-svg">
                            <circle cx="50" cy="120" r="8" class="schema-point" />
                            <text x="35" y="105" class="schema-label">ESTACIÓN NAMBA</text>
                            
                            <line x1="58" y1="120" x2="342" y2="40" class="schema-line" style="stroke:#ef4444; filter:drop-shadow(0 0 5px #ef4444);" />
                            <text x="130" y="70" class="schema-meta" transform="rotate(-15 130 70)">MIDOSUJI LINE (Red)</text>
                            
                            <circle cx="350" cy="40" r="8" class="schema-point" />
                            <text x="310" y="25" class="schema-label">ESTACIÓN UMEDA</text>
                            
                            <path d="M 350 48 Q 380 90 350 140" class="schema-line-dotted" fill="none" stroke-dasharray="4,4" />
                            <text x="310" y="155" class="schema-meta">WALK TO HQ (10 MIN)</text>
                            
                            <circle cx="350" cy="140" r="8" class="schema-point-target" />
                            <text x="300" y="130" class="schema-label">HOTEL_HQ</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-door-open"></i> EXTRACCIÓN:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Caminar a Est. Namba</li>
                                <li><strong>LÍNEA:</strong> Midosuji Line (Roja)</li>
                                <li><strong>DIRECCIÓN:</strong> "For Umeda / Senri-Chuo"</li>
                                <li><strong>BAJAR:</strong> Estación Umeda</li>
                                <li><strong>FINAL:</strong> Caminar 10 min al Hotel</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bed"></i> ESTADO DE MISIÓN:</div>
                            <div class="status-box">OBJECTIVE_COMPLETE</div>
                        </div>
                    </div>
                    
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission05') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 05</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_05: PROTOCOLO BARRIO RETRO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">UMEDA (HQ)</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-midosuji" stroke="#e60012" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">LINE_MIDOSUJI (RED)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">SHINSEKAI (EBISUCHO)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Nishi-Umeda o Umeda Station</li>
                                <li><strong>LÍNEA:</strong> Midosuji (Roja) hacia Dobutsuen-mae</li>
                                <li><strong>BAJAR:</strong> Dobutsuen-mae (M22) o Ebisucho</li>
                                <li><strong>FINAL:</strong> Salida hacia Tsutenkaku Tower</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-radar"></i> ESTADO DEL OBJETIVO:</div>
                            <div class="status-box">ZONA_RETRO_IDENTIFIED</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_aquarium') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: AQUA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_AQUA: INFILTRACIÓN PUERTO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">UMEDA (HQ)</text>
                            
                            <line x1="56" y1="60" x2="194" y2="60" class="schema-line transit-midosuji" stroke="#e60012" stroke-width="4" />
                            <circle cx="200" cy="60" r="6" class="schema-point" />
                            <text x="175" y="45" class="schema-label">HOMMACHI</text>
                            
                            <line x1="206" y1="60" x2="344" y2="60" class="schema-line transit-chuo" stroke="#009944" stroke-width="4" />
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">OSAKAKO (AQUARIUM)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>TRASLADO 1:</strong> Línea Midosuji (Roja) a Hommachi</li>
                                <li><strong>TRANSBORDO:</strong> Línea Chuo (Verde) dir. Cosmosquare</li>
                                <li><strong>BAJAR:</strong> Estación Osakako (C11)</li>
                                <li><strong>TIEMPO:</strong> ~45 min | <strong>PRECIO:</strong> ~290 JPY</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-utensils"></i> RECOMENDACIÓN RANCHO:</div>
                            <div class="status-box" style="font-size: 0.8rem; line-height: 1.2; text-align: left;">
                                <strong>TEMPOZAN MARKETPLACE:</strong> Naniwa Kuishinbo Yokocho (Callejón años 60).<br>
                                <strong>QUÉ BUSCAR:</strong> Takoyaki (Aizu-ya), Okonomiyaki o Arroz Curry (Jiyuken).
                            </div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_usj') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: USJ</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_USJ: NINTENDO_PROTOCOLO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">UMEDA (HQ)</text>
                            
                            <line x1="56" y1="60" x2="194" y2="60" class="schema-line transit-loop" stroke="#e60012" stroke-width="4" />
                            <circle cx="200" cy="60" r="6" class="schema-point" />
                            <text x="175" y="45" class="schema-label">NISHIKUJO</text>
                            
                            <line x1="206" y1="60" x2="344" y2="60" class="schema-line transit-yumesaki" stroke="#0091d2" stroke-width="4" />
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">UNIVERSAL CITY</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>TRASLADO 1:</strong> JR Loop Line a Nishikujo</li>
                                <li><strong>ENLACE:</strong> JR Yumesaki (Sakurajima Line)</li>
                                <li><strong>BAJAR:</strong> Universal City Station</li>
                                <li><strong>TIEMPO:</strong> ~25 min | <strong>PRECIO:</strong> ~190 JPY</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-warning"></i> NOTA DE CAMPO:</div>
                            <div class="status-box warning" style="font-size: 0.7rem;">
                                REQUERIDA ENTRADA TIMED-ENTRY PARA SUPER NINTENDO WORLD
                            </div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_nara') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NARA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_NARA: PROTOCOLO CIERVO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">OSAKA (HQ)</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-yamatoji" stroke="#31b131" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">JR YAMATOJI RAPID</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">JR NARA STATION</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Estación JR Osaka (Andenes 1 o 2)</li>
                                <li><strong>SERVICIO:</strong> Yamatoji Rapid Service</li>
                                <li><strong>BAJAR:</strong> Estación JR Nara (Final de línea)</li>
                                <li><strong>TRANSPORTE:</strong> ~50 min | <strong>PRECIO:</strong> ~820 JPY</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-shield-dog"></i> SEGURIDAD:</div>
                            <div class="status-box warning">CUIDADO_CON_LOS_CIERVOS</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_fushimi') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: INARI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_INARI: INFILTRACIÓN TORII</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">OSAKA (HQ)</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-inari" stroke="#ff4500" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">JR SPECIAL RAPID + LOCAL</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">INARI STATION</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>SALIDA:</strong> 07:00 (Recomendado)</li>
                                <li><strong>TRANSBORDO:</strong> Kyoto Station a Línea Nara (Local)</li>
                                <li><strong>BAJAR EN:</strong> Estación Inari</li>
                                <li><strong>ESTRATEGIA:</strong> Evitar masa crítica de turistas</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> OBJETIVO:</div>
                            <div class="status-box">RECON_YOTSUTSUJI_MIRADOR</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kyoto_transfer') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KYOTO_MOVE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_KIOTO: DESPLIEGUE</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">OSAKA STATION</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-kyoto" stroke="#0052ad" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">JR SPECIAL RAPID SERVICE</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">KYOTO STATION</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Estación JR Osaka (Andenes 7, 8 o 9)</li>
                                <li><strong>SERVICIO:</strong> Special Rapid Service (Línea Azul)</li>
                                <li><strong>BAJAR EN:</strong> Estación de Kioto (Final de trayecto)</li>
                                <li><strong>TIEMPO:</strong> 29 min | <strong>PRECIO:</strong> 570 JPY</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-suitcase"></i> LOGÍSTICA:</div>
                            <div class="status-box">MALETAS_RECEPCIÓN_CHECKIN_15:00</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_nijo') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NIJO_CASTLE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_NIJO: EL PALACIO DEL SHOGUN</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">KYOTO STATION</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-nijo" stroke="#ffd700" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">BUS 9 / 50 / 101 / SUBWAY</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">NIJO-JO MAE</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>TRANSPORTE:</strong> Bus 9, 50 o 101 desde central gate.</li>
                                <li><strong>METRO:</strong> Karasuma Line ➔ Nijojo-mae (vía Karasuma-Oike).</li>
                                <li><strong>ALERTA:</strong> Los suelos chirrían (Nightingale floors).</li>
                                <li><strong>TIEMPO:</strong> ~15-20 min desde estación.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-user-ninja"></i> ESTRATEGIA:</div>
                            <div class="status-box">DETECCIÓN_SILENCIOSA_ACTIVA</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_toji') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOJI_INFILTRATION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_TOJI: LA PAGODA DE MADERA</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">HOTEL (HQ)</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-toji" stroke="#8a2be2" stroke-width="2" stroke-dasharray="2,2" />
                            <text x="150" y="80" class="schema-meta">15 MIN WALKING</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">TO-JI TEMPLE</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Kyoto Tower Hotel Annex.</li>
                                <li><strong>ESTRATEGIA:</strong> Infiltración a pie al sur de la estación.</li>
                                <li><strong>OBJETIVO:</strong> Pagoda Heian (55m). Símbolo de Kioto.</li>
                                <li><strong>EXTRACCIÓN:</strong> Regreso para almuerzo en Ramen Koji.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tower-observation"></i> VIGILANCIA:</div>
                            <div class="status-box">PUNTO_DE_REFERENCIA_SUR</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kyoto_return') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KYOTO_RETURN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> EXTRACCIÓN: REGRESO AL HQ</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">NIJO / TOJI</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-return" stroke="#00f3ff" stroke-width="2" stroke-dasharray="5,5" />
                            <text x="150" y="80" class="schema-meta">ANY_BUS_TO_KYOTO_STATION</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">HOTEL (KYOTO TOWER)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-walking-arrow-right"></i> RETIRADA:</div>
                            <ul class="data-list">
                                <li>Desde Nijo: Metro Karasuma o Bus 9 / 50.</li>
                                <li>Desde To-ji: Caminando (15 min) o Bus 16 / 19.</li>
                                <li><strong>DESTINO:</strong> Kyoto Tower Hotel Annex.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney-user"></i> HQ:</div>
                            <div class="status-box">ZONA_SEGURA_RECUPERACIÓN</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_higashiyama') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIGASHIYAMA_WALK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> RUTA_TRADICIONAL: HIGASHIYAMA</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="30" r="5" class="schema-point" />
                            <text x="35" y="20" class="schema-label">KIYOMIZU-DERA</text>
                            
                            <path d="M 50 35 L 50 80 L 350 80 L 350 35" fill="none" stroke="#00f3ff" stroke-width="2" stroke-dasharray="4,4" class="schema-path-walk" />
                            <text x="150" y="100" class="schema-meta">RUTA LINEAL CAMINANDO</text>
                            
                            <circle cx="350" cy="30" r="5" class="schema-point" />
                            <text x="310" y="20" class="schema-label">YASAKA SHRINE</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-walking"></i> TRAYECTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Kiyomizu-dera (Lo alto de la colina).</li>
                                <li><strong>TRÁNSITO:</strong> Sannenzaka y Ninenzaka (Bajada).</li>
                                <li><strong>HITO:</strong> Templo Kodai-ji y Parque Maruyama.</li>
                                <li><strong>FINAL:</strong> Santuario Yasaka (Distrito Gion).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> VISUAL:</div>
                            <div class="status-box">ZONA_ALTA_POSTAL_JAPÓN</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_arashiyama_transfer') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ARASHIYAMA_LINK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> TRASLADO: HOTEL ➔ ARASHIYAMA</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">HOTEL (KYOTO ST)</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-jr" stroke="#8b4513" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">JR SAGANO LINE (PLAT 31-33)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">SAGA-ARASHIYAMA</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> LOGÍSTICA DE ACCESO:</div>
                            <ul class="data-list">
                                <li><strong>PLATAFORMAS:</strong> 31, 32 o 33 en Kyoto Station.</li>
                                <li><strong>DESTINO:</strong> Saga-Arashiyama (6 paradas).</li>
                                <li><strong>TIEMPO:</strong> 17-20 min dependiendo del tren.</li>
                                <li><strong>BAMBÚ:</strong> Al salir de la estación, seguid los carteles hacia el norte/oeste (10 min).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ticket"></i> ESTADO DE CARGA:</div>
                            <div class="status-box">IC_CARD_DISPONIBLE / 240 JPY</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_ryoanji_transit') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: RANDEN_CONNECTION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> TRANVÍA: ARASHIYAMA ➔ RYOAN-JI</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">ARASHIYAMA (RANDEN)</text>
                            
                            <line x1="56" y1="60" x2="194" y2="60" class="schema-line transit-randen" stroke="#9333ea" stroke-width="4" />
                            <circle cx="200" cy="60" r="4" class="schema-point" />
                            <text x="175" y="80" class="schema-meta">KATABIRANO-TSUJI (TRANSB)</text>
                            
                            <line x1="206" y1="60" x2="344" y2="60" class="schema-line transit-randen" stroke="#9333ea" stroke-width="4" stroke-dasharray="4,2" />
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">RYOAN-JI-MICHI</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tram"></i> RUTA RANDEN:</div>
                            <ul class="data-list">
                                <li><strong>PASO 1:</strong> Línea Arashiyama hasta Katabirano-tsuji.</li>
                                <li><strong>PASO 2:</strong> Línea Kitano hasta Ryoan-ji-michi.</li>
                                <li><strong>PRECIO:</strong> 250 JPY (Abono único).</li>
                                <li><strong>EXPERIENCIA:</strong> Tranvía histórico de una sola cabina.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clock"></i> TIEMPO ESTIMADO:</div>
                            <div class="status-box warning">APROX_20_MIN_CON_ENLACE</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_otagi') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OTAGI_NENBUTSU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> SECRETO_ZEN: OTAGI NENBUTSU-JI</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">ARASHIYAMA</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-bus" stroke="#ff8c00" stroke-width="3" stroke-dasharray="4,4" />
                            <text x="150" y="81" class="schema-meta">BUS 94 / 64 / 74 (10 MIN)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">OTAGI-TERA MAE</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-masks-theater"></i> EL TEMPLO DE LAS 1200 CARAS:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Parada Arashiyama-Tenryuji-mae.</li>
                                <li><strong>TRÁNSITO:</strong> Bus hacia Kiyotaki (Poco frecuente, mirad horarios).</li>
                                <li><strong>OBJETIVO:</strong> 1200 estatuas RAKAN esculpidas por fieles.</li>
                                <li><strong>ATMÓSFERA:</strong> Única y menos saturada que el centro.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-face-smile-wink"></i> DETECCIÓN:</div>
                            <div class="status-box warning">ZONA_ALTA_CREATIVIDAD_ESPIRITUAL</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission06') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 06</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_06: ENLACE MERCADO NEGRO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">SHINSEKAI</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-sakaisuji" stroke="#8b4513" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">LINE_SAKAISUJI (BROWN)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">NIPPOMBASHI (KUROMON)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Ebisucho Station (K18)</li>
                                <li><strong>LÍNEA:</strong> Sakaisuji (Marrón) hacia Nippombashi</li>
                                <li><strong>BAJAR EN:</strong> Nippombashi (K17)</li>
                                <li><strong>OBJETIVO:</strong> Mercado Kuromon (Salida 10)</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-radar"></i> SEGURIDAD:</div>
                            <div class="status-box warning">POS_ZONA_TURÍSTICA_ALTA</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission07') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 07</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_07: ZONA DE COMPROBACIÓN (SHOPPING)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">KUROMON</text>
                            
                            <path d="M 50 60 L 200 60 L 350 60" class="schema-line-dotted transit-walk" fill="none" stroke="#00f3ff" stroke-width="2" stroke-dasharray="5,5" />
                            <text x="150" y="80" class="schema-meta">CAMINATA_SENNICHIMAE_ST</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">SHINSAIBASHI-SUJI</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> RECONOCIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>RUTA:</strong> Caminata directa por Sennichimae hacia Namba</li>
                                <li><strong>TIEMPO:</strong> ~15 min de aproximación</li>
                                <li><strong>ZONA:</strong> Galerías techadas (Souvenirs, Don Quijote)</li>
                                <li><strong>REAGRUPAR:</strong> Área de Dotonbori para cena</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-credit-card"></i> LOGÍSTICA:</div>
                            <div class="status-box">PRESUPUESTO_FLEXIBLE</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission08') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: 08</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_08: EXTRACCIÓN FINAL (BASE RETURN)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="40" class="schema-label">NAMBA / SHINSAIBASHI</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-midosuji" stroke="#e60012" stroke-width="4" />
                            <text x="150" y="80" class="schema-meta">LINE_MIDOSUJI (RED)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="40" class="schema-label">UMEDA (HQ)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clipboard-list"></i> EXTRACCIÓN:</div>
                            <ul class="data-list">
                                <li><strong>METRO:</strong> Namba Station (M24)</li>
                                <li><strong>LÍNEA:</strong> Midosuji (Roja) hacia Umeda/Shin-Osaka</li>
                                <li><strong>DESTINO:</strong> Umeda (4ª parada)</li>
                                <li><strong>DESCANSO:</strong> Cuartel General de Osaka</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-moon"></i> ESTADO CUERPO:</div>
                            <div class="status-box danger">AGOTAMIENTO_MAX_DETECTED</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_shinsekai_a') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHINSEKAI_A</div>
                        <button onclick="selectExcursionFromCard(${dayIndex}, 'c1')" class="datapad-close">
                            <i class="fa-solid fa-chevron-left"></i> BACK_TO_INTEL
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> RUTA TÁCTICA A: SHINSEKAI (PREFERENCIA: CALMA)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="8" class="schema-point" />
                            <text x="25" y="40" class="schema-label">SALIDA: CASTILLO (11:30)</text>
                            
                            <line x1="58" y1="60" x2="342" y2="60" class="schema-line" style="stroke:#ef4444; filter:drop-shadow(0 0 5px #ef4444);" />
                            <text x="140" y="80" class="schema-meta">TRANSIT: JR LOOP LINE</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="40" class="schema-label">LLEGADA: SHINSEKAI (12:00)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clock"></i> CRONOGRAMA DETALLADO:</div>
                            <ul class="data-list">
                                <li><strong>11:30:</strong> Salida Castillo (Tras 2h visita)</li>
                                <li><strong>11:45:</strong> Abordar JR Loop Line (Pista 1)</li>
                                <li><strong>12:00:</strong> LLEGADA: Est. Tennoji</li>
                                <li><strong>15:30:</strong> SALIDA: Hacia Umeda Sky</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-heart"></i> PRIORIDAD:</div>
                            <p style="font-size:0.85rem; opacity:0.8; line-height:1.4;">PREFERENCIA: <strong>Comer tranquilo</strong> (Kushikatsu Daruma) y asegurar llegada a Umeda con margen para el atardecer (16:30).</p>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_shinsekai_b') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHINSEKAI_B</div>
                        <button onclick="selectExcursionFromCard(${dayIndex}, 'c1')" class="datapad-close">
                            <i class="fa-solid fa-chevron-left"></i> BACK_TO_INTEL
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> RUTA TÁCTICA B: SHINSEKAI (FOTOS NOCTURNAS)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="8" class="schema-point" />
                            <text x="35" y="40" class="schema-label">SALIDA: UMEDA (18:30)</text>
                            
                            <line x1="58" y1="60" x2="342" y2="60" class="schema-line" style="stroke:#ef4444; filter:drop-shadow(0 0 5px #ef4444);" />
                            <text x="140" y="80" class="schema-meta">TRANSIT: MIDOSUJI LINE</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="280" y="40" class="schema-label">LLEGADA: SHINSEKAI (19:00)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clock"></i> CRONOGRAMA DETALLADO:</div>
                            <ul class="data-list">
                                <li><strong>18:30:</strong> Salida Umeda Sky (Tras 2h visita)</li>
                                <li><strong>18:45:</strong> Abordar Línea Midosuji (Roja)</li>
                                <li><strong>19:00:</strong> LLEGADA: Est. Dobutsuen-mae</li>
                                <li><strong>20:10:</strong> SALIDA: Hacia Dotonbori (Cena tarde)</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> ADVERTENCIA:</div>
                            <p style="font-size:0.85rem; opacity:0.8; line-height:1.4;">FOTOS NOCTURNAS: <strong>Máximo impacto visual</strong> con neones. Menos tiempo en el barrio y la jornada acabará más tarde de lo previsto.</p>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kyoto_center_link') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: CENTER_LINK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> TRASLADO: INARI ➔ SHIJO (NISHIKI)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">INARI (JR)</text>
                            
                            <line x1="56" y1="60" x2="194" y2="60" class="schema-line transit-jr" stroke="#8b4513" stroke-width="4" />
                            <circle cx="200" cy="60" r="4" class="schema-point" />
                            <text x="175" y="80" class="schema-meta">KYOTO ST (TRANSB)</text>
                            
                            <line x1="206" y1="60" x2="344" y2="60" class="schema-line transit-metro" stroke="#00ac4a" stroke-width="4" />
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">SHIJO (METRO)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train-subway"></i> PROTOCOLO:</div>
                            <ul class="data-list">
                                <li><strong>INARI:</strong> JR Nara Line (Plat 2) a Kyoto St.</li>
                                <li><strong>KYOTO ST:</strong> Transbordo a Metro Karasuma (Línea Verde).</li>
                                <li><strong>BAJAR EN:</strong> Shijo Station (2 paradas).</li>
                                <li><strong>DESTINO:</strong> Mercado Nishiki a 5 min caminando al este.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-receipt"></i> COSTES:</div>
                            <div class="status-box">150 JPY (JR) + 220 JPY (METRO)</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kinkakuji_bus') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GOLDEN_BUS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> SALTO: NISHIKI ➔ KINKAKU-JI</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">SHIJO-KARASUMA</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-bus" stroke="#ff8c00" stroke-width="3" stroke-dasharray="4,4" />
                            <text x="150" y="81" class="schema-meta">BUS 12 (35 MIN)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">KINKAKUJI-MICHI</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bus"></i> TRANSPORTE URBANO:</div>
                            <ul class="data-list">
                                <li><strong>PARADA:</strong> Shijo Karasuma (Cerca de la salida del metro).</li>
                                <li><strong>LÍNEA:</strong> Bus 12 (Dirección Kinkakuji).</li>
                                <li><strong>PAGO:</strong> 230 JPY (Se paga al bajar).</li>
                                <li><strong>TÁCTICO:</strong> El bus 12 atraviesa gran parte de Kioto.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-map-location-dot"></i> DETECCIÓN:</div>
                            <div class="status-box warning">ZONA_NORTE_KIOTO_DETECTED</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_ohara_bus') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OHARA_EXPEDITION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> EXCURSIÓN: HOTEL ➔ OHARA (NORTE)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">KYOTO STATION</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-bus" stroke="#00ff7f" stroke-width="3" stroke-dasharray="4,4" />
                            <text x="150" y="81" class="schema-meta">BUS 17/18 (60 MIN)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">OHARA (SANZEN-IN)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bus"></i> PROTOCOLO DE BUS:</div>
                            <ul class="data-list">
                                <li><strong>PARADA:</strong> Kyoto Station (Salida Norte, Parada C3).</li>
                                <li><strong>LÍNEA:</strong> Bus 17 o 18 (Dirección Ohara).</li>
                                <li><strong>DURACIÓN:</strong> 60 min (580 JPY ida/vuelta).</li>
                                <li><strong>DESTINO:</strong> Bajar en "Ohara" y caminar 10 min al templo.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> OBJETIVO:</div>
                            <div class="status-box success">JARDINES_ZEN_DETECTED</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kyoto_tower') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOWER_OBSERVATION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> OBSERVACIÓN: TORRE DE KIOTO</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">HOTEL ANNEX</text>
                            
                            <path d="M 50 60 L 350 60" fill="none" stroke="#00bfff" stroke-width="2" stroke-dasharray="4,4" class="schema-path-walk" />
                            <text x="150" y="81" class="schema-meta">5 MIN ANDANDO</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">KYOTO TOWER</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tower-observation"></i> ACCESO:</div>
                            <ul class="data-list">
                                <li><strong>DISTANCIA:</strong> 5 min andando desde el hotel.</li>
                                <li><strong>ENTRADA:</strong> 900 JPY (adulto).</li>
                                <li><strong>ALTURA:</strong> 100 metros (vistas 360°).</li>
                                <li><strong>HORARIO:</strong> 10:00-21:00 (último acceso 20:40).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-binoculars"></i> VISIBILIDAD:</div>
                            <div class="status-box">PANORAMA_COMPLETO_KYOTO</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_nishiki_shopping') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FINAL_SHOPPING</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> COMPRAS: MERCADO NISHIKI</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">KYOTO STATION</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-metro" stroke="#ffd700" stroke-width="4" />
                            <text x="150" y="81" class="schema-meta">METRO KARASUMA (15 MIN)</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">SHIJO (NISHIKI)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-subway"></i> TRANSPORTE:</div>
                            <ul class="data-list">
                                <li><strong>LÍNEA:</strong> Metro Karasuma (Verde) a Shijo.</li>
                                <li><strong>DURACIÓN:</strong> 15 min (230 JPY).</li>
                                <li><strong>DESTINO:</strong> Mercado Nishiki a 5 min andando.</li>
                                <li><strong>HORARIO:</strong> Mercado abierto 10:00-18:00.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-shopping-bag"></i> COMPRAS:</div>
                            <div class="status-box warning">TSUKEMONO_TÉ_DULCES</div>
                        </div>
                    </div>
                    <div class="scanline-overlay"></div>
                </div>
            `;
        } else if (missionId === 'mission_kyoto_return') {
            missionHTML = `
                <div class="datapad-container animate-fade-in">
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: EXTRACTION_PROTOCOL</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> PROTOCOLO: REGRESO AL CUARTEL</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">ZONA_OPERATIVA</text>
                            
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-return" stroke="#00f3ff" stroke-width="3" stroke-dasharray="8,4" />
                            <text x="150" y="81" class="schema-meta">CONEXIÓN DIRECTA A KYOTO ST</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target hotel-point" />
                            <text x="310" y="45" class="schema-label">HOTEL (KYOTO TOWER)</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney-user"></i> EXTRACCIÓN FINAL:</div>
                            <ul class="data-list">
                                <li><strong>DESTINO:</strong> Kyoto Tower Hotel Annex.</li>
                                <li><strong>TRANSPORTE:</strong> JR Sagano Line / Bus / Taxi según ubicación.</li>
                                <li><strong>PLAN B:</strong> Cena en los alrededores de la estación si es tarde.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-battery-half"></i> ESTADO DE ENERGÍA:</div>
                            <div class="status-box warning">RECARGA_REQUERIDA_PARA_MAÑANA</div>
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
