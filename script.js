/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */
// --- MOTOR GRÁFICO ---
let map;        // Mapa principal
let previewMap; // Mapa de la ventana espía
let introVideo; // Video de portada

// --- SISTEMA DE RESERVAS (LOCALSTORAGE) ---
window.toggleBookingStatus = function (id, dayIndex) {
    const currentState = localStorage.getItem(id);
    if (currentState === 'comprado') {
        localStorage.setItem(id, 'pendiente');
    } else {
        localStorage.setItem(id, 'comprado');
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
            const newState = localStorage.getItem(id) === 'comprado';
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
    const state = localStorage.getItem(booking.id) === 'comprado' ? 'comprado' : 'pendiente';
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
                        <h1 style="text-transform:uppercase; letter-spacing:2px;"><i class="fa-solid fa-clipboard-check"></i> PREPARATIVOS</h1>
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

    // === NUEVO: PANEL DE RESERVAS MAESTRO ===
    if (data.bookingPanel) {
        let bookingHTML = `
                    <div style="margin-bottom:40px; background:rgba(20,20,20,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:25px;">
                        <h2 style="color:var(--gold); margin-bottom:20px; font-size:1.5rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px;">
                            <i class="fa-solid fa-calendar-check"></i> ${data.bookingPanel.title}
                        </h2>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
                            `;

        data.bookingPanel.phases.forEach(phase => {
            bookingHTML += `
            <div style="background:rgba(0,0,0,0.4); border-top: 3px solid ${phase.color || 'var(--accent)'}; border-radius:10px; padding:20px;">
                <h3 style="color:${phase.color || 'white'}; margin-top:0; margin-bottom:15px; font-size:1.1rem;">${phase.name}</h3>
                <ul style="list-style:none; padding:0; margin:0;">
            `;
            phase.items.forEach(item => {
                bookingHTML += `
                <li style="margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:8px;">
                    <strong style="color:white; display:block; font-size:0.95rem;">${item.name}</strong>
                    <span style="color:#9ca3af; font-size:0.85rem;"><i class="fa-regular fa-clock"></i> ${item.date}</span>
                </li>
                `;
            });
            bookingHTML += `
                        </ul>
                    </div>
                    `;
        });

        bookingHTML += `
                </div>
            </div>
            `;
        centerHTML += bookingHTML;
    }

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
            const key = `prep - ${selectedTraveler} -${section} -${item} `;

            const isCurrentlyChecked = localStorage.getItem(key) === 'true';

            if (!isCurrentlyChecked) {
                // Marcar como completado
                icon.classList.remove('fa-regular', 'fa-circle');
                icon.classList.add('fa-solid', 'fa-circle-check');
                this.closest('.preparation-item').classList.add('completed');
                localStorage.setItem(key, 'true');
            } else {
                // Desmarcar
                icon.classList.remove('fa-solid', 'fa-circle-check');
                icon.classList.add('fa-regular', 'fa-circle');
                this.closest('.preparation-item').classList.remove('completed');
                localStorage.removeItem(key);
            }

            // Re-renderizar para actualizar progreso y estados de los demás viajeros
            // Usamos travelData[0] que es el objeto de preparación
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
            const state = localStorage.getItem(act.booking.id);
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
                `<img src = "${hotelImage}" class="hotel-image" onerror = "this.style.display='none'" > ` :
                `<div class="hotel-image-placeholder" > <i class="fa-solid fa-hotel"></i></div> `;

            const hotelLinkHTML = hotelGoogleLink ?
                `<a href = "${hotelGoogleLink}" target = "_blank" class="hotel-google-link" title = "Ver en Google Maps" >
        <i class="fa-solid fa-map-marker-alt"></i> Ver en Google Maps
                 </a> ` : '';

            let extraAction = '';
            if (hotelName.includes('Dc桜の苑') || hotelName.includes('Dc Sakura')) {
                extraAction = `onclick="window.showHotelMessage()" style="cursor:pointer; text-decoration: underline; text-decoration-color: var(--accent); color: var(--gold);" title="Ver Instrucciones de Check-in"`;
            }

            hotelHTML = `
        <div class="hotel-info-section" >
            ${hotelImgHTML}
    <div class="hotel-details">
        <h3 class="hotel-name" ${extraAction}><i class="fa-solid fa-bed" ${extraAction ? 'style="animation: pulse 2s infinite;"' : ''}></i> ${hotelName}</h3>
        ${hotelLinkHTML}
    </div>
                 </div>
        `;
        }

        // Pin de ubicación (Arriba derecha) + Descargas si es Osaka
        let locationBadgeHTML = location ?
            `<div class="location-badge" >
        <i class="fa-solid fa-map-marker-alt"></i> ${location}
                ${location.toLowerCase().includes('osaka') ? `
                    <div class="pdf-downloads">
                        <a href="pdf/metro osaka.pdf" download title="Mapa Metro Osaka" class="pdf-download-link"><i class="fa-solid fa-train-subway"></i></a>
                        <a href="pdf/map_osaka jr.pdf" download title="Mapa JR Osaka" class="pdf-download-link"><i class="fa-solid fa-train"></i></a>
                        <a href="pdf/station_osaka.pdf" download title="Guía Estación Osaka" class="pdf-download-link"><i class="fa-solid fa-compass"></i></a>
                    </div>
                ` : ''
            }
            </div> ` : '';

        // Banner de ciudad en Neón (Bajo el hotel)
        const cityBannerHTML = location ?
            `<div class="location-header" style="text-align:left; margin-bottom:0; padding:10px 0;" >
        <h1 style="font-size:3rem; text-align:left; letter-spacing:4px;">${location}</h1>
            </div> ` : '';

        // Título del día (Debajo del neón)
        const dayInfoHTML = `
        <div class="day-info-section" style="margin-top:0; margin-bottom:20px;" >
            <p class="day-activity" style="font-size:1.1rem; color:var(--text-secondary);">${data.title}</p>
            </div>
        `;

        // --- 2. Base Itinerary Section ---
        let baseEventsHTML = '';
        if (data.base.events) {
            data.base.events.forEach(event => {
                let eventImg = event.image ? `<img src = "${event.image}" class="base-event-thumb" onerror = "this.style.display='none'" style="width:80px; height:80px; object-fit:cover; border-radius:8px; margin-right:15px;" > ` : '';

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
            complementsHTML += `</div></div> `;
        }

        // --- 4. Excursiones Adicionales Block ---
        let addExcursionsHTML = '';
        if (data.additionalExcursions && data.additionalExcursions.length > 0) {
            // Usamos la imagen de la primera excursión como portada
            const coverImg = data.additionalExcursions[0].image || '';
            const imgHTML = coverImg ? `<img src = "${coverImg}" class="excursion-thumb" style="opacity:0.8;" onerror = "this.style.display='none'" > ` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';

            addExcursionsHTML = `
        <div class="additional-excursions-gateway" style="margin-top:40px;" >
                    <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                        <i class="fa-solid fa-map-location-dot"></i> Excursiones Adicionales
                    </h3>
                    <p style="color:#94a3b8; margin-bottom:20px;">Explora más opciones para este día si prefieres desviarte de la ruta principal:</p>
                    
                    <button class="excursion-card additional-gateway-card"
                            onclick="renderCenterVisual(travelData[${travelData.indexOf(data)}], 'additional-excursions-list')"
                            aria-label="Ver Excursiones Adicionales"
                            style="width: 100%; max-width: 500px; display: block; margin: 0; position: relative; overflow: hidden; border: 1px solid rgba(0,243,255,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.3);"
                            role="button" tabindex="0">
                        ${imgHTML}
                        <div class="excursion-card-content" style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(15,23,42,1) 30%, transparent 100%); padding-top: 50px;">
                            <div class="excursion-id" style="background:var(--neon-blue); display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px; color:black; font-weight:bold;"><i class="fa-solid fa-plus"></i> ${data.additionalExcursions.length} OPCIONES</div>
                            <h3 class="excursion-title" style="font-size:1.3rem; color:white;">Ver Excursiones Adicionales</h3>
                            <div class="complement-meta" style="margin-top:5px; font-size:0.9rem; color:#cbd5e1;">
                                Haz clic para explorar alternativas
                            </div>
                        </div>
                    </button>
                </div>
        `;
        }

        card.innerHTML = `
        <div class="excursion-page-header" >
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

                let extraAction = '';
                if (hotelName.includes('Dc桜の苑') || hotelName.includes('Dc Sakura')) {
                    extraAction = `onclick="window.showHotelMessage()" style="cursor:pointer; text-decoration: underline; text-decoration-color: var(--accent); color: var(--gold);" title="Ver Instrucciones de Check-in"`;
                }

                hotelHTML = `
        <div class="hotel-info-section" >
            ${hotelImgHTML}
    <div class="hotel-details">
        <h3 class="hotel-name" ${extraAction}><i class="fa-solid fa-bed" ${extraAction ? 'style="animation: pulse 2s infinite;"' : ''}></i> ${hotelName}</h3>
        ${hotelLinkHTML}
    </div>
                    </div>
        `;
            }

            // Ciudad (Pin arriba derecha) - Usamos nombres distintos para evitar conflictos de scope
            const selLocationBadgeHTML = location ?
                `<div class="location-badge" > <i class="fa-solid fa-map-marker-alt"></i> ${location}</div> ` : '';

            // Banner de ciudad en Neón (Bajo el hotel)
            const selCityBannerHTML = location ?
                `<div class="location-header" style="text-align:left; margin-bottom:0; padding:10px 0;" >
        <h1 style="font-size:3rem; text-align:left; letter-spacing:4px;">${location}</h1>
            </div> ` : '';

            // Extraer el nombre de la ciudad del título (ej: "🏯 Osaka: Samuráis y Neones" -> "Osaka")
            const cityMatch = data.title.match(/:\s*(.+?):/);
            const cityName = cityMatch ? cityMatch[1] : data.title.split(':')[0].replace(/[🏯⛩️🎌🦌🎢🛫🏠]/g, '').trim();
            const dayNameHTML = `
        <div class="day-info-section" >
                    <h2 class="day-name">${cityName}</h2>
                    <p class="day-activity">${data.title}</p>
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
        <div class="excursion-page-header" >
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
        const location = getLocation(data);
        const locationDisplay = location ? `<div class="location-header" > <h1>${location}</h1></div> ` : '';

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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        <div class="datapad-container animate-fade-in" >
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
        } else if (missionId === 'mission_takayama_bus') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TAKAYAMA_DESCENT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> TRASLADO: OKUHIDA ➔ TAKAYAMA</h1>
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">RYOKAN (OKUHIDA)</text>
                            <line x1="56" y1="60" x2="344" y2="60" class="schema-line transit-bus" stroke="#f97316" stroke-width="3" stroke-dasharray="4,4" />
                            <text x="150" y="81" class="schema-meta">BUS NOHI (90 MIN)</text>
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">TAKAYAMA BUS CENTER</text>
                        </svg>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_bus') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJI_EXPRESS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> TRASLADO: TAKAYAMA ➔ KAWAGUCHIKO</h1>
                </div>
        `;
        } else if (missionId === 'mission_chureito') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: CHUREITO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_PAGODA: CHUREITO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-hiking"></i> ASCENSO:</div>
                            <ul class="data-list">
                                <li><strong>CAMINO:</strong> 400 escalones desde el parking/estación.</li>
                                <li><strong>ESTRATEGIA:</strong> Llegar 1h antes del atardecer.</li>
                                <li><strong>VISTA:</strong> La icónica postal de la pagoda con el Fuji.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box">IDENTIFICADO_VISUAL_TOP</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ryugatake') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAKANOKURA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> TREKKING: NAKANOKURA PASS</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> RUTA TÁCTICA:</div>
                            <ul class="data-list">
                                <li><strong>DIFICULTAD:</strong> Moderada.</li>
                                <li><strong>HITO:</strong> Mirador del billete de 1000 yenes (Lago Motosu).</li>
                                <li><strong>EQUIPO:</strong> Botas y agua (1.5L mín).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cloud-sun"></i> CLIMA:</div>
                            <div class="status-box warning">CHEQUEAR_PREVISIÓN_CUMBRES</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_drive') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJI_DRIVE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> CONDUCTOR: PROTOCOLO 5ª ESTACIÓN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-car"></i> RUTA SUBARU LINE:</div>
                            <ul class="data-list">
                                <li><strong>PEAJE:</strong> ~2.100 JPY (Solo efectivo/tarjeta).</li>
                                <li><strong>ALTURA:</strong> 2.300 metros (5ª Estación).</li>
                                <li><strong>ALERTA:</strong> En agosto el acceso suele ser solo por BUS lanzadera.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-road"></i> ESTADO:</div>
                            <div class="status-box">CONTROL_TRÁFICO_VERANO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_sengen') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SENGEN_SHRINE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_SACRA: SANTUARIO SENGEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-torii-gate"></i> INFILTRACIÓN:</div>
                            <ul class="data-list">
                                <li><strong>ENTRADA:</strong> Caminata por los cedros gigantes.</li>
                                <li><strong>SIMBOLOGÍA:</strong> Punto de inicio espiritual del ascenso.</li>
                                <li><strong>PAGO:</strong> Voluntario (Donación).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-shield-halved"></i> STATUS:</div>
                            <div class="status-box success">UNESCO_PROTECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shiraito') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHIRAITO_FALLS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_AQUA: CASCADAS SHIRAITO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> PROTOCOLO:</div>
                            <ul class="data-list">
                                <li><strong>ACCESO:</strong> 10 min caminando desde el parking.</li>
                                <li><strong>CARACTERÍSTICA:</strong> Hilos de agua filtrados por el volcán.</li>
                                <li><strong>RECOMENDACIÓN:</strong> Visitar Otodome Falls (al lado).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-droplet"></i> ESTADO:</div>
                            <div class="status-box">IDENTIFICADO_NATURAL</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_excursion') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJI_EXCURSION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXTRACCIÓN: TREN 'FUJI EXCURSION'</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train-subway"></i> NAVEGACIÓN DIRECTA:</div>
                            <ul class="data-list">
                                <li><strong>RUTA:</strong> Kawaguchiko ➔ Shinjuku (2h).</li>
                                <li><strong>RESERVA:</strong> Obligatoria (Tren muy demandado).</li>
                                <li><strong>PAGO:</strong> ~1.600 JPY extra si usas JR Pass.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-city"></i> OBJETIVO:</div>
                            <div class="status-box danger">TOKYO_RE_ENTRY</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tocho') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOCHO_OBS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: AYUNTAMIENTO DE TOKIO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building"></i> INTEL GRATUITA:</div>
                            <ul class="data-list">
                                <li><strong>PISO:</strong> 45 (Observatorio Sur es mejor de noche).</li>
                                <li><strong>COSTE:</strong> 0 JPY.</li>
                                <li><strong>ALERTA:</strong> Cerrado algunos lunes/martes.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> RANGO:</div>
                            <div class="status-box">PANORAMA_360_GRATIS</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tokyo_metro') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOKYO_METRO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: RED DE METRO Y JR</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-compass"></i> PROTOCOLO DE USO:</div>
                            <ul class="data-list">
                                <li><strong>HERRAMIENTA:</strong> Suica / Pasmo en el móvil.</li>
                                <li><strong>CÓDIGOS:</strong> Seguid letra y número de estación (ej: H01).</li>
                                <li><strong>APP:</strong> Google Maps imprescindible para andenes.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-network-wired"></i> STATUS:</div>
                            <div class="status-box">METRO_CONNECTED_100</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_skytree') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SKYTREE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_TECHO: TOKYO SKYTREE</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tower-broadcast"></i> DATOS TÁCTICOS:</div>
                            <ul class="data-list">
                                <li><strong>ALTURA:</strong> 634m (La estructura más alta de Japón).</li>
                                <li><strong>TICKET:</strong> Reserva previa recomendada.</li>
                                <li><strong>EXTRA:</strong> Visitar Solamachi (Base de la torre).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-binoculars"></i> RANGO:</div>
                            <div class="status-box">MAX_VISIBILITY_LEVEL</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_asakusa_walk') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ASAKUSA_WALK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RUTA: ASAKUSA TRADICIONAL</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-walking"></i> TRAYECTO:</div>
                            <ul class="data-list">
                                <li><strong>INICIO:</strong> Puerta Kaminarimon.</li>
                                <li><strong>TRÁNSITO:</strong> Calle Nakamise (Souvenirs/Snacks).</li>
                                <li><strong>FINAL:</strong> Templo Senso-ji.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box">ZONA_HISTÓRICA_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sensoji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SENSOJI_TEMPLE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_TEMPLO: SENSO-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fire-burner"></i> RITUAL TÁCTICO:</div>
                            <ul class="data-list">
                                <li><strong>INCIENSO:</strong> Bañarse en el humo del gran caldero (Salud/Suerte).</li>
                                <li><strong>OMIKUJI:</strong> Probar fortuna (100 JPY). Si es mala, atad el papel.</li>
                                <li><strong>HITO:</strong> El templo más antiguo de Tokio.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-scroll"></i> ESTADO:</div>
                            <div class="status-box success">TRADICIÓN_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_akihabara_intel') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: AKIBA_INTEL</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_OTAKU: AKIHABARA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-microchip"></i> PUNTOS CLAVE:</div>
                            <ul class="data-list">
                                <li><strong>RECON:</strong> Radio Kaikan, Mandarake, Super Potato.</li>
                                <li><strong>ESTRATEGIA:</strong> Perderse en los edificios verticales.</li>
                                <li><strong>ALERTA:</strong> Los domingos la calle principal es peatonal.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bolt"></i> ENERGÍA:</div>
                            <div class="status-box danger">SOBRECARGA_SENSORIAL_POSIBLE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shibuya_scramble') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHIBUYA_CORE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> INCURSIÓN: SHIBUYA SCRAMBLE</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 150" class="schema-svg">
                            <rect x="150" y="50" width="100" height="60" class="schema-box center-crossing" fill="none" />
                            <line x1="150" y1="50" x2="100" y2="20" class="schema-line" />
                            <line x1="250" y1="50" x2="300" y2="20" class="schema-line" />
                            <line x1="150" y1="110" x2="100" y2="140" class="schema-line" />
                            <line x1="250" y1="110" x2="300" y2="140" class="schema-line" />
                            <circle cx="200" cy="80" r="15" class="schema-point-target pulse" />
                            <text x="165" y="40" class="schema-label">CROSSING POINT</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-users-viewfinder"></i> PUNTOS DE OBSERVACIÓN:</div>
                            <ul class="data-list">
                                <li><strong>STARBUCKS QFRONT:</strong> El más famoso, pero siempre lleno. Planta 2.</li>
                                <li><strong>SHIBUYA SKY:</strong> Requiere reserva. Vistas 360 desde 230m de altura.</li>
                                <li><strong>MAG’S PARK:</strong> Terraza en la azotea del 109-2. Tienen una cámara fija para hacerte "selfies" desde el aire.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-dog"></i> HACHIKO INTEL:</div>
                            <ul class="data-list">
                                <li><strong>PUNTO:</strong> Salida "Hachiko Exit" de JR Shibuya.</li>
                                <li><strong>TÁCTICA:</strong> Suele haber cola para la foto. Paciencia familiiar.</li>
                                <li><strong>STATUS:</strong> <span class="status-box success">CONGESTIÓN_MÁXIMA_CONTROLADA</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_harajuku_takeshita') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TAKESHITA_ST</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CALLE TAKESHITA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ice-cream"></i> OBJETIVOS:</div>
                            <ul class="data-list">
                                <li><strong>CULTURA:</strong> Moda Kawaii y tiendas locas.</li>
                                <li><strong>RANCHO:</strong> Crêpes típicos de Harajuku.</li>
                                <li><strong>VIA DE ESCAPE:</strong> Calle Omotesando (Lujo y árboles).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mask"></i> STATUS:</div>
                            <div class="status-box">ZONA_KAWAII_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_meiji_jingu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MEIJI_SHRINE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INFILTRACIÓN: BOSQUE MEIJI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> TÁCTICA SILENCIOSA:</div>
                            <ul class="data-list">
                                <li><strong>ENTRADA:</strong> Gran Torii de madera junto a Harajuku Station.</li>
                                <li><strong>CAMBIÓ:</strong> Del bullicio de Shibuya a la paz absoluta.</li>
                                <li><strong>HITO:</strong> Los barriles de Sake y Vino decorativos.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> AMBIENTE:</div>
                            <div class="status-box success">BOSQUE_EN_LA_CIUDAD</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_teamlab_plan') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TEAMLAB</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_ARTE: TEAMLAB BORDERLESS / PLANETS</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wand-magic-sparkles"></i> PROTOCOLO:</div>
                            <ul class="data-list">
                                <li><strong>TICKET:</strong> Reserva 1-2 meses antes sin falta.</li>
                                <li><strong>DRESS CODE:</strong> Evitad faldas cortas (suelos de espejo).</li>
                                <li><strong>PLANETS:</strong> Se va descalzo por agua (llevad ropa cómoda).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-vial"></i> EXPERIMENTO:</div>
                            <div class="status-box danger">IMMERSIVE_MODE_ACTIVE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_odaiba_monorail') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: YURIKAMOME</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> NAVEGACIÓN: MONORRAÍL YURIKAMOME</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> RUTA PANORÁMICA:</div>
                            <ul class="data-list">
                                <li><strong>CONSEJO:</strong> Sentarse en el primer vagón (sin conductor).</li>
                                <li><strong>HITO:</strong> El giro de 270º del Rainbow Bridge.</li>
                                <li><strong>DESTINO:</strong> Odaiba (Isla artificial).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-robot"></i> OBJETIVO:</div>
                            <div class="status-box">GUNDAM_STATUE_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ueno_park') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: UENO_INTEL</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: PARQUE DE UENO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-map"></i> ZONA OPERATIVA:</div>
                            <ul class="data-list">
                                <li><strong>ESTRATEGIA:</strong> Visitar Estanque Shinobazu (Lotos).</li>
                                <li><strong>CULTURA:</strong> Museo Nacional de Tokio (Opcional).</li>
                                <li><strong>CONTINUACIÓN:</strong> Caminar hacia Yanaka para calma.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-paw"></i> STATUS:</div>
                            <div class="status-box">PANDAS_IN_THE_ZOO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_yanaka_ginza') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: YANAKA_GINZA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_RETRO: YANAKA GINZA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cat"></i> INTEL BARRIO VIEJO:</div>
                            <ul class="data-list">
                                <li><strong>AMBIENTE:</strong> El Tokio que sobrevivió a las bombas.</li>
                                <li><strong>SÍMBOLO:</strong> Los gatos de Yanaka.</li>
                                <li><strong>RECOMENDACIÓN:</strong> Cenos de escaleras "Yuyake Dandan" al atardecer.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clock-rotate-left"></i> ESTADO:</div>
                            <div class="status-box info">SHITAMACHI_VIBES</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nakano_broadway') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAKANO_BROADWAY</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_B: NAKANO BROADWAY</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-box-archive"></i> EL BÚNKER COLECCIONISTA:</div>
                            <ul class="data-list">
                                <li><strong>DIFERENCIA:</strong> Menos luces que Akiba, más tesoros antiguos.</li>
                                <li><strong>PLANTA 2/3:</strong> Tiendas Mandarake especializadas.</li>
                                <li><strong>HELADO:</strong> El helado gigante de 8 sabores durmiendo en el sótano.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-magnifying-glass"></i> STATUS:</div>
                            <div class="status-box">PRECIOUS_COLLECTIBLES_FOUND</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nikko_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NIKKO_LINK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXCURSIÓN: TOKIO ➔ NIKKO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> RUTA TÉCNICA:</div>
                            <ul class="data-list">
                                <li><strong>OPCIÓN A:</strong> Shinkansen a Utsunomiya + JR Nikko Line.</li>
                                <li><strong>OPCIÓN B:</strong> Tobu Nikko Line desde Asakusa (No JR).</li>
                                <li><strong>DURACIÓN:</strong> ~2h.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ticket"></i> ESTADO:</div>
                            <div class="status-box warning">JR_PASS_RECOMENDADO_OP_A</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_toshogu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOSHOGU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_GRANDEZA: TOSHOGU SHRINE</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> PUNTOS DE INTERÉS:</div>
                            <ul class="data-list">
                                <li><strong>MAESTRÍA:</strong> Los 3 monos sabios ("No oigo, no veo, no hablo").</li>
                                <li><strong>HITO:</strong> Tumba de Tokugawa Ieyasu.</li>
                                <li><strong>BELLEZA:</strong> Templo recubierto de pan de oro y tallas complejas.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gem"></i> STATUS:</div>
                            <div class="status-box success">PATRIMONIO_ORO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kamakura_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAMAKURA_LINK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXCURSIÓN: TOKIO ➔ KAMAKURA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> PROCEDIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>LÍNEA:</strong> JR Shonan-Shinjuku o Yokosuka Line.</li>
                                <li><strong>ORIGEN:</strong> Shinjuku o Tokyo Station.</li>
                                <li><strong>TIEMPO:</strong> ~1h directa.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> AMBIENTE:</div>
                            <div class="status-box info">COSTA_Y_TEMPLOS</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_daibutsu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: DAIBUTSU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_BUDA: GRAN BUDA DE KAMAKURA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-dharmachakra"></i> RECON:</div>
                            <ul class="data-list">
                                <li><strong>ESTADO:</strong> Buda de bronce de 13 metros al aire libre.</li>
                                <li><strong>ACCESO:</strong> 10 min caminando desde Est. Hase (Enoden).</li>
                                <li><strong>EXTRA:</strong> Se puede entrar dentro de la estatua (20 JPY).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-medal"></i> STATUS:</div>
                            <div class="status-box">IDENTIFICADO_BUDA_GIGANTE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_enoshima_link') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ENOSHIMA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> NAVEGACIÓN: ISLA DE ENOSHIMA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge"></i> ACCESO:</div>
                            <ul class="data-list">
                                <li><strong>TREN:</strong> Línea Enoden desde Kamakura.</li>
                                <li><strong>CRUCE:</strong> Puente peatonal de 600m hacia la isla.</li>
                                <li><strong>HITO:</strong> Santuario Enoshima y Faro Sea Candle.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-umbrella-beach"></i> STATUS:</div>
                            <div class="status-box">ZONA_COSTERA_ENOSHIMA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_toyosu_market') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOYOSU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_PESCADO: MERCADO TOYOSU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fish"></i> ESTRATEGIA:</div>
                            <ul class="data-list">
                                <li><strong>LLEGADA:</strong> Muy temprano (06:00-08:00) para subasta (con reserva).</li>
                                <li><strong>COMIDA:</strong> El sushi más fresco del mundo en los restaurantes anexos.</li>
                                <li><strong>TRANSPORTE:</strong> Yurikamome a Est. Shijo-mae.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-utensils"></i> RANCHO:</div>
                            <div class="status-box success">MAX_FRESHNESS_SUSHI</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ginza_walk') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GINZA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: DISTRITO GINZA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bag-shopping"></i> PUNTOS Z:</div>
                            <ul class="data-list">
                                <li><strong>LUJO:</strong> Edificio Wako, Uniqlo gigante (12 plantas).</li>
                                <li><strong>FIN DE SEMANA:</strong> Calle Chuo-dori peatonal.</li>
                                <li><strong>TECH:</strong> Sony Store / Nissan Crossing.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-credit-card"></i> STATUS:</div>
                            <div class="status-box warning">ZONA_ALTO_PRESUPUESTO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_roppongi_hills') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ROPPONGI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_CIUDAD: ROPPONGI HILLS</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-spider"></i> OBJETIVOS:</div>
                            <ul class="data-list">
                                <li><strong>ESTATUA:</strong> Araña gigante "Maman".</li>
                                <li><strong>VISTA:</strong> Tokyo City View (Mori Tower).</li>
                                <li><strong>ARTE:</strong> Museo Mori (Planta 53).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-moon"></i> NOCHE:</div>
                            <div class="status-box">ZONA_SEGURA_NOCTURNA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_haneda_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: EXFILTRATION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> EXTRACCIÓN: AEROPUERTO HANEDA (HND)</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <circle cx="50" cy="60" r="6" class="schema-point" />
                            <text x="35" y="45" class="schema-label">TOKIO CENTRO</text>
                            
                            <line x1="58" y1="60" x2="342" y2="60" class="schema-line transit-taxi" />
                            <text x="160" y="85" class="schema-meta">TAXI / MONORAIL / KEIKYU</text>
                            
                            <circle cx="350" cy="60" r="8" class="schema-point-target" />
                            <text x="310" y="45" class="schema-label">HANEDA T3</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-suitcase-rolling"></i> PROTOCOLO DE SALIDA:</div>
                            <ul class="data-list">
                                <li><strong>HORARIO:</strong> Facturación abre 3-4 horas antes. Vuelo TK199 (21:45).</li>
                                <li><strong>LOGÍSTICA:</strong> Taxis directos desde el hotel son la mejor opción para el grupo de 8 con maletas.</li>
                                <li><strong>TÁCTICA:</strong> Gastad las últimas monedas 100 JPY en las máquinas de vending o Gachapon del aeropuerto.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-plane-departure"></i> ÚLTIMO RECON:</div>
                            <ul class="data-list">
                                <li><strong>EDO KOJI:</strong> Planta 4. Réplica de calle antigua para la última cena.</li>
                                <li><strong>STATUS:</strong> <span class="status-box danger">FINAL_DE_TRAYECTO_JAPÓN_2026</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_osaka_housing') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OSAKA_HOUSING</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MUSEO DE LA VIVIENDA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney"></i> EDO EXPERIENCE:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Recreación a tamaño real de un barrio del periodo Edo.</li>
                                <li><strong>AMBIENTE:</strong> Interior con climatización (Ideal para el calor).</li>
                                <li><strong>DETALLE:</strong> Ciclo día/noche simulado con luces.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-snowflake"></i> STATUS:</div>
                            <div class="status-box success">REFUGIO_TÉRMICO_OPTIMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_namba_yasaka') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAMBA_YASAKA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> OBJETIVO: CABEZA DE LEÓN GIGANTE</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-face-grimace"></i> ESTRATEGIA VISUAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Edificio de 12m con forma de cabeza de león.</li>
                                <li><strong>FUNCIÓN:</strong> "Traga" los malos espíritus y atrae suerte.</li>
                                <li><strong>TIEMPO:</strong> Visita rápida (15-20 min) muy fotogénica.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box warning">ZONA_TOP_FOTOGRAFÍA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_okawa_cruise') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: RIVER_ASSAULT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> RECON: CRUCERO RÍO OKAWA</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 120" class="schema-svg">
                            <path d="M 50 80 Q 200 20 350 80" class="schema-line river-line" fill="none" stroke="#3b82f6" />
                            <circle cx="50" cy="80" r="6" class="schema-point" />
                            <text x="30" y="100" class="schema-label">Hachizanyato Pier</text>
                            
                            <circle cx="350" cy="80" r="8" class="schema-point-target" />
                            <text x="310" y="100" class="schema-label">Osaka Castle Pier</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ship"></i> NAVEGACIÓN:</div>
                            <ul class="data-list">
                                <li><strong>BARCO:</strong> Aqua-Liner (barcos de cristal que pasan bajo puentes bajos).</li>
                                <li><strong>VIBE:</strong> Perspectiva única de los rascacielos de Nakanoshima y el parque del castillo.</li>
                                <li><strong>TÁCTICA:</strong> Ideal para descansar las piernas tras caminar por el castillo.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box success">INFILTRACIÓN_FLUVIAL_EXITOSA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sumiyoshi') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SUMIYOSHI_TAISHA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO SUMIYOSHI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge"></i> ICONO TÁCTICO:</div>
                            <ul class="data-list">
                                <li><strong>PUENTE:</strong> Sorihashi (Puente Tambor tambaleante).</li>
                                <li><strong>HISTORIA:</strong> Uno de los santuarios más puros y antiguos.</li>
                                <li><strong>PAZ:</strong> Mucho menos concurrido que el centro.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> AMBIENTE:</div>
                            <div class="status-box success">ZEN_LEVEL_MAX</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_osaka_history') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OSAKA_HISTORY</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INTEL: MUSEO DE HISTORIA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-monument"></i> ESTRATEGIA DE VISITA:</div>
                            <ul class="data-list">
                                <li><strong>VISTA:</strong> La mejor panorámica aérea del Castillo de Osaka.</li>
                                <li><strong>DISEÑO:</strong> Planta alta (Edo) hacia abajo (Moderno).</li>
                                <li><strong>COMODIDAD:</strong> Totalmente accesible y con aire.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> RANGO:</div>
                            <div class="status-box">VIEW_CASTLE_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_koreatown') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KOREATOWN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_SABOR: TSURUHASHI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fire-burner"></i> OBJETIVOS:</div>
                            <ul class="data-list">
                                <li><strong>RANCHO:</strong> Barbacoa Coreana (Yakiniku) de nivel.</li>
                                <li><strong>AMBIENTE:</strong> Mercado laberíntico y multicultural.</li>
                                <li><strong>DETECCIÓN:</strong> Aromas intensos y cultura vibrante.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-pepper-hot"></i> STATUS:</div>
                            <div class="status-box warning">DIFERENTE_FACETA_OSAKA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_wakakusa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: WAKAKUSA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> ASCENSO: MONTE WAKAKUSA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> TÁCTICA DE ALTURA:</div>
                            <ul class="data-list">
                                <li><strong>VISTA:</strong> Panorámica total de Nara (Pagodas vs Ciudad).</li>
                                <li><strong>CIERVOS:</strong> Encuentros más 'salvajes' que en el parque.</li>
                                <li><strong>TIEMPO:</strong> 15-20 min de subida suave.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-sun"></i> STATUS:</div>
                            <div class="status-box success">VISTAS_IDENTIFICADAS_A1</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nara_museum') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NARA_MUSEUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INTEL CULTURAL: MUSEO NACIONAL</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-scroll"></i> ARTE BUDISTA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Mejores estatuas de bronce y madera del mundo.</li>
                                <li><strong>EDIFICIO:</strong> Joya de la arquitectura era Meiji.</li>
                                <li><strong>ALERTA:</strong> Refugio perfecto para el sol de mediodía.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-palette"></i> STATUS:</div>
                            <div class="status-box info">CULTURA_NARA_COMPLETADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_isuien') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ISUIEN_GARDEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> ZEN: JARDÍN ISUIEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> PAISAJE PRESTADO:</div>
                            <ul class="data-list">
                                <li><strong>TÉCNICA:</strong> Integra el Todai-ji y Wakakusa en su diseño.</li>
                                <li><strong>PAZ:</strong> Silencio absoluto frente al ruido del parque.</li>
                                <li><strong>HITO:</strong> Estanques con carpas y casa de té tradicional.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-spa"></i> STATUS:</div>
                            <div class="status-box success">SOBREVIVIENTE_SITUACIÓN_ESTRÉS</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sanjusangendo') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SANJUSANGENDO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_ORO: LAS 1001 KANNON</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-hands-praying"></i> VISUAL IMPACT:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Un salón con 1.001 estatuas cubiertas de pan de oro.</li>
                                <li><strong>TIEMPO:</strong> Visita rápida (45-60 min).</li>
                                <li><strong>REGLA:</strong> Prohibido hacer fotos en el interior.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bolt"></i> STATUS:</div>
                            <div class="status-box warning">MISTICISMO_DETETED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kamo_river') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAMO_RIVER</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: RÍO KAMO (KAMOGAWA)</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> PASEO COSTUMBRISTA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Tradición de sentarse a distancias exactas en la orilla.</li>
                                <li><strong>DETALLE:</strong> Terrazas 'Yuka' sobre el río en verano.</li>
                                <li><strong>VIBE:</strong> El lugar más relajado de Kioto al atardecer.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wind"></i> STATUS:</div>
                            <div class="status-box info">BRISA_REFRESCANTE_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nishi_honganji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NISHI_HONGANJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INTEL: TEMPLO NISHI HONGAN-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-archway"></i> ESTRUCTURA IMPERIAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Enormes salones de madera (Patrimonio Humanidad).</li>
                                <li><strong>VENTAJA:</strong> Entrada gratuita y poco masificado.</li>
                                <li><strong>COMODIDAD:</strong> Ideal para sentarse en el tatami y descansar.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box success">ZEN_FREE_ACCESS</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_samurai_ninja') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SAMURAI_NINJA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_INTERACTIVA: SAMURAI & NINJA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-user-ninja"></i> PROTOCOLO:</div>
                            <ul class="data-list">
                                <li><strong>RECON:</strong> Tour guiado con armaduras reales.</li>
                                <li><strong>ENTRENAMIENTO:</strong> Práctica de katanas y shurikens.</li>
                                <li><strong>STATUS:</strong> Actividad perfecta para romper con la rutina de templos.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-star"></i> OBJETIVO:</div>
                            <div class="status-box warning">EXPERIENCIA_FAMILIAR_TOP</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_gion_shirakawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GION_SHIRAKAWA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON_NOCTURNO: GION SHIRAKAWA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-moon"></i> ATMÓSFERA TÁCTICA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> El canal más bonito y romántico de Kioto.</li>
                                <li><strong>VISUAL:</strong> Sauces, casas de té y puentes de piedra.</li>
                                <li><strong>DETECCIÓN:</strong> Zona probable de avistamiento de Geishas.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box success">FOTOGRAFÍA_NOCTURNA_OPTIMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kenninji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KENNINJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_DRAGÓN: TEMPLO KENNIN-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-dragon"></i> INTEL VISUAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Pintura de los Dos Dragones en el techo.</li>
                                <li><strong>HISTORIA:</strong> El templo zen más antiguo de Kioto.</li>
                                <li><strong>DETALLE:</strong> Jardines de arena blanca impecables.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box info">ARTE_ZEN_LOCALIZED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hozugawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HOZUGAWA_BOAT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> NAVEGACIÓN: DESCENSO DEL RÍO HOZU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ship"></i> PROTOCOLO DE AVENTURA:</div>
                            <ul class="data-list">
                                <li><strong>DURACIÓN:</strong> 2 horas por el cañón montañoso.</li>
                                <li><strong>MÉTODO:</strong> Barcas tradicionales con remeros expertos.</li>
                                <li><strong>HITO:</strong> Entrada espectacular a Arashiyama desde Kameoka.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box warning">EMOCIÓN_MODERADA_SEGURA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kimono') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KIMONO_RENTAL</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_ESTÉTICA: KIMONO / YUKATA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-dress-fairy"></i> TRANSFORMACIÓN:</div>
                            <ul class="data-list">
                                <li><strong>ZONA:</strong> Arashiyama es el escenario perfecto.</li>
                                <li><strong>DETALLE:</strong> Incluye peinado y complementos.</li>
                                <li><strong>ALERTA:</strong> En agosto, pedid YUKATA (Kimono ligero).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box success">INMERSIÓN_CULTURAL_MAX</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_daikakuji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: DAIKAKUJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO DAIKAKU-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-crown"></i> ORIGEN PALACIEGO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Antiguo palacio imperial convertido en templo.</li>
                                <li><strong>PAISAJE:</strong> Gran lago artificial (el más viejo de Japón).</li>
                                <li><strong>ARQUITECTURA:</strong> Pasillos de madera elevados 'ruiseñores'.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box info">ELEGANCIA_ARISTOCRÁTICA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fushimi_sake') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUSHIMI_SAKE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_CATA: DISTRITO DE FUSHIMI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bottle-droplet"></i> INTEL LÍQUIDA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Bodegas históricas con muros de madera negra.</li>
                                <li><strong>EXPERIENCIA:</strong> Visita a Gekkeikan con cata incluida.</li>
                                <li><strong>ENTORNO:</strong> Canales y barcos tradicionales 'Jukkoku-bune'.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wine-glass"></i> STATUS:</div>
                            <div class="status-box warning">TRADICIÓN_ETÍLICA_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ninnaji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NINNAJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO NINNA-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-vihara"></i> COMPLEJO IMPERIAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Pagoda de cinco pisos y jardines palaciegos.</li>
                                <li><strong>DETALLE:</strong> Famoso por sus cerezos Omuro (enanos).</li>
                                <li><strong>VENTAJA:</strong> Gran espacio, ideal para el grupo de 8.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gem"></i> STATUS:</div>
                            <div class="status-box success">BELLEZA_AUSTERA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kitano') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KITANO_TENMANGU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: KITANO TENMANGU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cow"></i> TRADICIÓN TÁCTICA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Santuario del dios de los estudios (Cientos de bueyes de bronce).</li>
                                <li><strong>RITUAL:</strong> Frotar la cabeza del buey para obtener sabiduría.</li>
                                <li><strong>DETALLE:</strong> Arquitectura estilo Momoyama muy colorida.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-graduation-cap"></i> STATUS:</div>
                            <div class="status-box success">INTEL_ACADÉMICA_ACTIVE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_heian') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HEIAN_SHRINE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO HEIAN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-torii-gate"></i> GRAN ESCALA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Torii gigante y edificios naranja vibrante.</li>
                                <li><strong>JARDÍN:</strong> Shin'en (Trasero) con puentes cubiertos y estanques.</li>
                                <li><strong>ESPACIO:</strong> Muy amplio, ideal para caminar sin agobios.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-panorama"></i> STATUS:</div>
                            <div class="status-box info">ESTÉTICA_VIBRANTE_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tofukuji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOFUKUJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO TOFUKU-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge"></i> ICONO ZEN:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Puente Tsutenkyo sobre un barranco de arces.</li>
                                <li><strong>DISEÑO:</strong> Jardines de musgo y cuadros de piedra modernos.</li>
                                <li><strong>AMBIENTE:</strong> El Kioto más profundo y arquitectónico.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> STATUS:</div>
                            <div class="status-box success">VERDE_ELECTRICO_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_funaoka') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUNAOKA_ONSEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_RELAX: FUNAOKA ONSEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-hot-tub-person"></i> PROTOCOLO DE BAÑO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Uno de los sentos más antiguos y bonitos de Kioto.</li>
                                <li><strong>VIBE:</strong> Experiencia de barrio auténtica de 1923.</li>
                                <li><strong>DETALLE:</strong> Tallas de madera históricas y varios tipos de baños.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-battery-full"></i> STATUS:</div>
                            <div class="status-box warning">RECARGA_CUERPO_MENTE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hirayu_waterfall') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIRAYU_FALLS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CASCADA HIRAYU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> NATURALEZA SALVAJE:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Caída de 64m en el corazón de los Alpes.</li>
                                <li><strong>TIEMPO:</strong> 15 min andando desde la terminal de buses.</li>
                                <li><strong>DETALLE:</strong> Entorno fresco y sonido revitalizante.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> STATUS:</div>
                            <div class="status-box success">ALPES_NATURAL_VIBES</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_bear_park') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: BEAR_PARK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: BEAR PARK OKUHIDA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-paw"></i> FAUNA LOCAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Osos negros asiáticos nativos de la región.</li>
                                <li><strong>DETALLE:</strong> Se pueden comprar galletas para alimentarlos.</li>
                                <li><strong>ALERTA:</strong> Visita curiosa, no es un zoo tradicional.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-binoculars"></i> STATUS:</div>
                            <div class="status-box warning">ANIMAL_SIGHTING_CONFIRMED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_night_walk_hirayu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NIGHT_WALK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> PROTOCOLO: PASEO NOCTURNO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-moon"></i> DESCONEXIÓN TOTAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Caminar por el pueblo termal bajo las estrellas.</li>
                                <li><strong>DETALLE:</strong> Vapor de las alcantarillas y silencio de montaña.</li>
                                <li><strong>VIBE:</strong> La esencia de la noche alpina japonesa.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-star"></i> STATUS:</div>
                            <div class="status-box info">MODO_DESCONEXIÓN_MAX</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hida_no_sato') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIDA_NO_SATO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ALDEA FOLCLÓRICA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney"></i> RAÍCES DE HIDA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> 30 casas tradicionales con techos de paja (Gassho-zukuri).</li>
                                <li><strong>DETALLE:</strong> Demostraciones de artesanía y cultura campesina.</li>
                                <li><strong>VENTAJA:</strong> Mucho más tranquilo que Shirakawa-go.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-scroll"></i> STATUS:</div>
                            <div class="status-box success">HISTORIA_VIVA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_matsuri_no_mori') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MATSURI_NO_MORI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_B: MUSEO DEL FESTIVAL</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-masks-theater"></i> TECH MATSURI:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Carrozas con autómatas (Karakuri) y tambores gigantes.</li>
                                <li><strong>DETALLE:</strong> Museo subterráneo excavado en la montaña.</li>
                                <li><strong>VIBE:</strong> Espectáculo visual de herencia cultural.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bolt"></i> STATUS:</div>
                            <div class="status-box warning">IMPACTO_VISUAL_ALTO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sakurayama') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SAKURAYAMA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SAKURAYAMA HACHIMANGU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-torii-gate"></i> PAZ SEÑORIAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Santuario protector del norte de Takayama.</li>
                                <li><strong>DETALLE:</strong> Cedros centenarios y atmósfera austera.</li>
                                <li><strong>VIA:</strong> Final del barrio Sanmachi Suji.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box success">ZEN_LEVEL_MAX_TAKAYAMA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_music_forest') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MUSIC_FOREST</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: KAWAGUCHIKO MUSIC FOREST</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-music"></i> ARTE SONORO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Museo de cajas de música y órganos automáticos.</li>
                                <li><strong>ESTÉTICA:</strong> "Pequeña Europa" con vistas al Monte Fuji.</li>
                                <li><strong>DETALLE:</strong> Espectáculo de baile de fuentes sincronizado.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box info">BELLEZA_ESCÉNICA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ice_cave') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NARUSAWA_ICE_CAVE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CUEVA DE HIELO NARUSAWA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-icicles"></i> TEMPERATURA CRÍTICA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Tubo de lava con 0°C todo el año y pilares de hielo.</li>
                                <li><strong>DETALLE:</strong> Techos muy bajos (Se requiere casco).</li>
                                <li><strong>ALERTA:</strong> Suelo resbaladizo, precaución extrema.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-temperature-low"></i> STATUS:</div>
                            <div class="status-box danger">REFUGIO_TÉRMICO_EXTREMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_wind_cave') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUGAKU_WIND_CAVE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CUEVA DEL VIENTO FUGAKU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wind"></i> ACÚSTICA NATURAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Cueva de lava de 201m de longitud.</li>
                                <li><strong>DETALLE:</strong> No tiene eco por las paredes de basalto poroso.</li>
                                <li><strong>USO:</strong> Antiguo almacén natural de semillas y seda.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> STATUS:</div>
                            <div class="status-box success">GEOLOGÍA_ACTIVA_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_sengen') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJISAN_SENGEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SENGEN TAISHA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-torii-gate"></i> ORIGEN SAGRADO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> El santuario principal de los 1300 Sengen de Japón.</li>
                                <li><strong>PAISAJE:</strong> Estanque Wakutama alimentado por nieve del Fuji.</li>
                                <li><strong>HISTORIA:</strong> Punto de partida tradicional para subir la montaña.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box info">PU_AGUA_SAGRADA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_koishikawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KOISHIKAWA_GARDEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: KOISHIKAWA KORAKUEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> DISEÑO EDO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Uno de los jardines más antiguos y bonitos de Tokio.</li>
                                <li><strong>VISTA:</strong> Contraste brutal: Jardín tradicional vs Tokyo Dome.</li>
                                <li><strong>DETALLE:</strong> Influencia china en sus puentes y paisajes.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-city"></i> STATUS:</div>
                            <div class="status-box success">OASIS_URBANO_OPTIMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shinjuku_gyoen') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHINJUKU_GYOEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SHINJUKU GYOEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> PULMÓN DE SHINJUKU:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Mezcla de estilos: Japonés, Francés e Inglés.</li>
                                <li><strong>DETALLE:</strong> Muy popular para picnics y ver el skyline.</li>
                                <li><strong>ALERTA:</strong> Prohibido el alcohol en el interior.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box info">ESPACIO_ABIERTO_AMPLIO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hanazono') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HANAZONO_SHRINE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO HANAZONO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-place-of-worship"></i> ENCLAVE SHINJUKU:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Santuario escondido entre los rascacielos de Shinjuku.</li>
                                <li><strong>HISTORIA:</strong> Protector de los negocios y el espectáculo.</li>
                                <li><strong>VIBE:</strong> Paz absoluta a pocos metros del caos de Golden Gai.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">ZEN_URBANO_LOCALIZED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hotaluna') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HOTALUNA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> NAVEGACIÓN: HOTALUNA / HIMIKO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ship"></i> DISEÑO FUTURISTA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Barcos diseñados por Leiji Matsumoto (mangaka).</li>
                                <li><strong>RUTA:</strong> De Asakusa a Odaiba por el río Sumida.</li>
                                <li><strong>VISTA:</strong> Paseo bajo los puentes icónicos de Tokio.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-rocket"></i> STATUS:</div>
                            <div class="status-box warning">EXPERIENCIA_SCI-FI_LEVEL1</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sumida_aquarium') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SUMIDA_AQUARIUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SUMIDA AQUARIUM</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fish"></i> INTEL MARINA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Diseño moderno dentro del complejo Tokyo Skytree.</li>
                                <li><strong>DETALLE:</strong> Tanque abierto de pingüinos y medusas artísticas.</li>
                                <li><strong>VENTAJA:</strong> Interior climatizado, ideal para el calor.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box success">REFUGIO_AZUL_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kanda_myojin') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KANDA_MYOJIN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO KANDA MYOJIN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-microchip"></i> TECH SPIRIT:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Santuario protector de Akihabara (IT y Electrónica).</li>
                                <li><strong>AMULETO:</strong> Venden el "IT Omamori" para proteger dispositivos.</li>
                                <li><strong>HISTORIA:</strong> 1300 años de antigüedad, reconstruido en hormigón.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bolt"></i> STATUS:</div>
                            <div class="status-box info">PROTECCIÓN_DATOS_ESPIRITUAL</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_chureito') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: CHUREITO_PAGODA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: PAGODA CHUREITO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> POSTAL DE JAPÓN:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> La vista más icónica: Pagoda roja + Monte Fuji.</li>
                                <li><strong>ESFUERZO:</strong> 400 escalones (15-20 min de subida).</li>
                                <li><strong>DETALLE:</strong> Ubicada en el Parque Arakurayama Sengen.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> STATUS:</div>
                            <div class="status-box success">VISUAL_LEGENDARIA_ALCANZADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ryugatake') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAKANOKURA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> ASCENSO: NAKANOKURA PASS</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain-sun"></i> TREKKING TÁCTICO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Una de las mejores vistas frontales del Fuji.</li>
                                <li><strong>REGLA:</strong> Nivel moderado, requiere calzado adecuado.</li>
                                <li><strong>PREMIO:</strong> Panorámica de los 5 Lagos desde la cima.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-hiking"></i> STATUS:</div>
                            <div class="status-box warning">DESAFÍO_FÍSICO_ACTIVO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_excursion') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJI_EXCURSION</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: FUJI EXCURSION TRAIN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> TRANSPORTE RÁPIDO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Tren directo de Shinjuku a Kawaguchiko.</li>
                                <li><strong>VENTAJA:</strong> Cómodo, moderno y evita atascos de bus.</li>
                                <li><strong>ALERTA:</strong> Requiere reserva previa obligatoria.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ticket"></i> STATUS:</div>
                            <div class="status-box info">LOGÍSTICA_OPTIMIZADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tokyo_gov') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOKYO_GOV</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: AYUNTAMIENTO (TMG)</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building"></i> INTEL DE ALTURA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Observatorios gratuitos a 202 metros.</li>
                                <li><strong>DISEÑO:</strong> Edificio de Kenzo Tange inspirado en una catedral tech.</li>
                                <li><strong>ALERTA:</strong> Cerrado en días festivos específicos.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">VISTAS_GRATIS_CONFIRMED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tokyo_metro') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOKYO_TRANSIT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> SISTEMA: METRO & JR TOKIO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-subway"></i> NAVEGACIÓN URBANA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> La red ferroviaria más compleja del mundo.</li>
                                <li><strong>TÁCTICA:</strong> Usar Google Maps/Navitime sin miedo.</li>
                                <li><strong>HERRAMIENTA:</strong> Tarjeta Suica/Pasmo o IC Card en iPhone.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-map"></i> STATUS:</div>
                            <div class="status-box warning">MOVILIDAD_TOTAL_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_skytree') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOKYO_SKYTREE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TOKYO SKYTREE</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tower-broadcast"></i> RANGO MÁXIMO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> La torre más alta de Japón (634m).</li>
                                <li><strong>DETALLE:</strong> Pasarela de cristal a 450 metros.</li>
                                <li><strong>ALERTA:</strong> Comprar entradas online para evitar colas de 1h.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cloud"></i> STATUS:</div>
                            <div class="status-box info">VISTAS_ESTRATOSFÉRICAS</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_asakusa_walk') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ASAKUSA_WALK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CALLES DE ASAKUSA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-street-view"></i> BARRIO BAJO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Nakamise-dori (Mercado) y callejuelas retro.</li>
                                <li><strong>SABOR:</strong> Probar el Melopan y las galletas Senbei.</li>
                                <li><strong>VIBE:</strong> La esencia del Tokio antiguo de preguerra.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bowl-food"></i> STATUS:</div>
                            <div class="status-box success">INMERSIÓN_BARRIO_ALTA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sensoji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SENSOJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO SENSO-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-archway"></i> EPICENTRO ESPIRITUAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> El templo más antiguo y visitado de Tokio.</li>
                                <li><strong>RITUAL:</strong> El incienso sanador frente al salón principal.</li>
                                <li><strong>DETALLE:</strong> Puertas Kaminarimon y Hozomon gigantes.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fire"></i> STATUS:</div>
                            <div class="status-box warning">ZONA_ALTA_AFLUENCIA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_akihabara') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: AKIHABARA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_OTAKU: AKIBA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gamepad"></i> TECH & ANIME:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Radio Kaikan, Super Potato y Yodobashi Camera.</li>
                                <li><strong>ZONA:</strong> Chuo-dori (Se cierra al tráfico los domingos).</li>
                                <li><strong>DETECCIÓN:</strong> Todo tipo de gadgets, figuras y cultura pop.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bolt"></i> STATUS:</div>
                            <div class="status-box danger">SOBRECARGA_SENSORIAL_POSIBLE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shibuya_scramble') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHIBUYA_CROSSING</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CRUCE DE SHIBUYA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-users"></i> FLUJO HUMANO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> El paso de cebra más transitado del planeta.</li>
                                <li><strong>VISUAL:</strong> Pantallas LED gigantes y luces de neón.</li>
                                <li><strong>TÁCTICA:</strong> Verlo desde el Starbucks o el puente de la estación.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-walking"></i> STATUS:</div>
                            <div class="status-box success">ICONA_MODERNA_LOCALIZED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_takeshita') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TAKESHITA_STREET</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CALLE TAKESHITA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ice-cream"></i> CULTURA KAWAII:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> El epicentro de la moda juvenil y los crepes.</li>
                                <li><strong>SABOR:</strong> Probar los crepes gigantes de colores.</li>
                                <li><strong>ALERTA:</strong> Saturación máxima los fines de semana.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-masks-theater"></i> STATUS:</div>
                            <div class="status-box danger">ZONA_KAWAII_OVERLOAD</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_meiji_jingu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MEIJI_JINGU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO MEIJI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> BOSQUE SAGRADO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Bosque de 100.000 árboles plantados a mano.</li>
                                <li><strong>RITUAL:</strong> El gran Torii de madera de cedro de 1500 años.</li>
                                <li><strong>DETALLE:</strong> Dedicado al Emperador Meiji y la Emperatriz Shoken.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box success">ZEN_URBANO_OPTIMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_teamlab') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TEAMLAB</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_INMERSIVA: TEAMLAB</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wand-sparkles"></i> ARTE DIGITAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Museos Borderless o Planets (Experiencia sensorial).</li>
                                <li><strong>REGLA:</strong> Reservar entradas con semanas de antelación.</li>
                                <li><strong>DETALLE:</strong> Se camina descalzo por agua y espejos (Planets).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-lightbulb"></i> STATUS:</div>
                            <div class="status-box warning">VISUAL_EXPERIENCE_MAX</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_yurikamome') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: YURIKAMOME</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> NAVEGACIÓN: MONORRAÍL YURIKAMOME</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> TECH TRANSIT:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Tren automatizado sin conductor a Odaiba.</li>
                                <li><strong>VISTA:</strong> Cruce del Rainbow Bridge y skyline de la bahía.</li>
                                <li><strong>TÁCTICA:</strong> Intentad sentaros en la primera ventana frontal.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge"></i> STATUS:</div>
                            <div class="status-box info">VISTAS_BAHÍA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ueno_park') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: UENO_PARK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: PARQUE UENO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-landmark"></i> NÚCLEO CULTURAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Museos, templos y estanque de lotos (Shinobazu).</li>
                                <li><strong>INTEL:</strong> Estatua de Saigo Takamori (El último samurái).</li>
                                <li><strong>COMODIDAD:</strong> Ideal para pasear y descansar del asfalto.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> STATUS:</div>
                            <div class="status-box success">ESPACIO_POLIVALENTE_IDENTIFIED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_yanaka_ginza') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: YANAKA_GINZA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: YANAKA GINZA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cat"></i> BARRIO DE GATOS:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Calle comercial con ambiente Shitamachi (Retro).</li>
                                <li><strong>DETALLE:</strong> Pequeñas tiendas de comida y artesanía.</li>
                                <li><strong>VIBE:</strong> El Tokio que sobrevivió a los bombardeos.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney-window"></i> STATUS:</div>
                            <div class="status-box info">ATMÓSFERA_AUSTERA_NOSTÁLGICA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nakano_broadway') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAKANO_BROADWAY</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> MISIÓ_COLECCIONISTA: NAKANO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-book-open"></i> INTEL OTAKU:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Búnker del coleccionismo retro y Mandarake.</li>
                                <li><strong>DETALLE:</strong> Mucho más compacto y barato que Akihabara.</li>
                                <li><strong>SABOR:</strong> Probar los helados gigantes de 8 pisos.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ghost"></i> STATUS:</div>
                            <div class="status-box warning">TESOROS_OCULTOS_LOCALIZED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nikko_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NIKKO_TRANSFER</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: TRASLADO A NIKKO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> DESPLIEGUE NORTE:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Shinkansen a Utsunomiya + JR Nikko Line.</li>
                                <li><strong>TIEMPO:</strong> ~120 min desde Tokio Estación.</li>
                                <li><strong>COMODIDAD:</strong> Se recomienda madrugar (Check-out temprano).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-suitcase"></i> STATUS:</div>
                            <div class="status-box info">MOVIMIENTO_A_BASE_NIKKO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_toshogu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOSHOGU_SHRINE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO TOSHOGU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-crown"></i> LEGADO SHOGUN:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Mausoleo de Tokugawa Ieyasu (Patrimonio Humanidad).</li>
                                <li><strong>VISUAL:</strong> Los tres monos sabios y el gato durmiente.</li>
                                <li><strong>DETALLE:</strong> La arquitectura más barroca y dorada de Japón.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gem"></i> STATUS:</div>
                            <div class="status-box success">BELLEZA_SUPREMA_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kamakura_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAMAKURA_TRANSFER</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: TRASLADO A KAMAKURA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-train"></i> DESPLIEGUE SUR:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Tren JR Shonan-Shinjuku o Yokosuka Line.</li>
                                <li><strong>TIEMPO:</strong> ~60 min desde Shinjuku o Tokio.</li>
                                <li><strong>DETALLE:</strong> Cambio al tren Enoden para Enoshima.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-anchor"></i> STATUS:</div>
                            <div class="status-box info">LOGÍSTICA_COSTERA_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_daibutsu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GREAT_BUDDHA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: GRAN BUDA (KOTOKU-IN)</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-om"></i> PRESENCIA TÁCTICA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Estatua de bronce de 13m al aire libre.</li>
                                <li><strong>DETALLE:</strong> Se puede entrar en el interior de la estatua (Check).</li>
                                <li><strong>HISTORIA:</strong> Sobrevivió a un tsunami que destruyó su templo en el s.XV.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">BELLEZA_MONUMENTAL_DETECTED</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_enoshima') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ENOSHIMA_ISLAND</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ISLA DE ENOSHIMA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-umbrella-beach"></i> OBJETIVO COSTEÑO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Cuevas Iwaya, Sea Candle (Faro) y santuarios.</li>
                                <li><strong>GASTRO:</strong> Famosa por el Shirasu (crías de sardina).</li>
                                <li><strong>VISTA:</strong> En días claros se ve el Fuji sobre el mar.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-sun"></i> STATUS:</div>
                            <div class="status-box warning">EXPLORACIÓN_MÁXIMA_REQUERIDA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_toyosu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOYOSU_MARKET</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INTEL GASTRO: MERCADO TOYOSU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fish-fins"></i> LOGÍSTICA DE PESCADO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Sucesor de Tsukiji, el mercado más grande del mundo.</li>
                                <li><strong>DETALLE:</strong> Zona comercial Senkyaku Banrai (estilo Edo).</li>
                                <li><strong>TÁCTICA:</strong> Ideal para desayunar el sushi más fresco.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-utensils"></i> STATUS:</div>
                            <div class="status-box info">PRODUCTO_CALIDAD_SUPREMA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ginza_walk') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GINZA_WALK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: GINZA (MILLA DE ORO)</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bag-shopping"></i> ALTA GAMA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Rascacielos de lujo y grandes almacenes (Mitsukoshi).</li>
                                <li><strong>DETALLE:</strong> Edificio Uniqlo más grande (12 plantas).</li>
                                <li><strong>TÁCTICA:</strong> Paseo por la calle peatonal los fines de semana.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gem"></i> STATUS:</div>
                            <div class="status-box success">ESTILO_Y_TECNOLOGÍA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_roppongi_hills') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ROPPONGI_HILLS</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ROPPONGI HILLS</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building-columns"></i> ARQUITECTURA TECH:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Mori Tower y la araña gigante "Maman".</li>
                                <li><strong>VISTA:</strong> Sky Deck (Observatorio abierto al aire libre).</li>
                                <li><strong>VIBE:</strong> El Tokio más cosmopolita y artístico.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box warning">VISTA_360_PANORÁMICA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_haneda_transfer') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HANEDA_OUT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXTRACCIÓN: A HANEDA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-plane-up"></i> CORTO ALCANCE:</div>
                            <ul class="data-list">
                                <li><strong>MÉTODO A:</strong> Monorraíl desde Hamamatsucho (Vistas bahía).</li>
                                <li><strong>MÉTODO B:</strong> Línea Keikyu desde Shinagawa/Asakusa.</li>
                                <li><strong>TIEMPO:</strong> ~15-30 min.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-suitcase-rolling"></i> STATUS:</div>
                            <div class="status-box danger">MISSION_ENDING_PROTOCOL</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_aquarium') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAIYUKAN_AQUARIUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ACUARIO KAIYUKAN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fish"></i> VIDA MARINA:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Uno de los acuarios más grandes del mundo.</li>
                                <li><strong>ESTRELLA:</strong> El tiburón ballena en el tanque central.</li>
                                <li><strong>DETALLE:</strong> Recorrido en espiral desde el Pacífico hasta el fondo.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box success">INMERSIÓN_TOTAL_RECOMENDADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fushimi') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUSHIMI_INARI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    
                    <h1 class="datapad-title">> MISIÓ_09: EL SENDERO DE LOS MIL TORIIS</h1>
                    
                    <div class="holographic-schema">
                        <svg viewBox="0 0 400 150" class="schema-svg">
                            <path d="M 50 120 Q 100 20 200 40 T 350 110" class="schema-line path-mountain" fill="none" stroke-dasharray="8,4" />
                            <circle cx="50" cy="120" r="6" class="schema-point" />
                            <text x="20" y="140" class="schema-label">ENTRADA PRINCIPAL</text>
                            
                            <circle cx="150" cy="45" r="4" class="schema-point" />
                            <text x="120" y="30" class="schema-label">SENBON TORII</text>
                            
                            <circle cx="350" cy="110" r="8" class="schema-point-target" />
                            <text x="300" y="130" class="schema-label">MT. INARI CUMBRE</text>
                        </svg>
                    </div>

                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-scroll"></i> INTEL & LORE:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Fundado en 711, es el santuario más importante dedicado a Inari, la deidad del arroz y los negocios.</li>
                                <li><strong>SIMBOLOGÍA:</strong> Los zorros (kitsune) son los mensajeros de Inari. Buscad los que llevan una llave en la boca (granero de arroz).</li>
                                <li><strong>OFRENDAS:</strong> Cada uno de los miles de toriis ha sido donado por una empresa japonesa para atraer prosperidad.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-map-location-dot"></i> LOGÍSTICA:</div>
                            <ul class="data-list">
                                <li><strong>ESTRATEGIA:</strong> Al llegar a Senbon Torii (donde el camino se bifurca en dos), id por la derecha; es la ruta tradicional.</li>
                                <li><strong>TIEMPO:</strong> La subida completa toma 2-3 horas. Si no queréis cansaros, el mirador intermedio (Yotsuji) ofrece la mejor vista.</li>
                                <li><strong>STATUS:</strong> <span class="status-box success">SANTUARIO_BENDICIÓN_ACTIVA</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="scanline-overlay"></div>
                </div>
        `;
        } else if (missionId === 'mission_narita_transfer') {







            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NARITA_OUT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXTRACCIÓN: A NARITA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-plane-up"></i> LARGO ALCANCE:</div>
                            <ul class="data-list">
                                <li><strong>RECOMENDADO:</strong> Narita Express (N'EX) con JR Pass.</li>
                                <li><strong>OPCIÓN B:</strong> Skyliner (Más rápido pero no JR).</li>
                                <li><strong>TIEMPO:</strong> ~60-90 min.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-suitcase-rolling"></i> STATUS:</div>
                            <div class="status-box danger">MISSION_ENDING_PROTOCOL</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_osaka_housing') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OSAKA_HOUSING</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MUSEO DE LA VIVIENDA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney-window"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Recreación hiperrealista del periodo Edo (s. XIX).</li>
                                <li><strong>INMERSIÓN:</strong> Ciclos de día/noche bajo cúpula artificial.</li>
                                <li><strong>TÁCTICA:</strong> Perfecto para evitar un golpe de calor al mediodía.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">MÁQUINA_DEL_TIEMPO_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_namba_yasaka') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NAMBA_YASAKA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO NAMBA YASAKA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mask"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Ema-Den gigante con forma de cabeza de león.</li>
                                <li><strong>TÁCTICA:</strong> "Traga" los malos espíritus y asegura el éxito.</li>
                                <li><strong>VIBE:</strong> Altamente fotogénico, visita rápida y visual.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box success">PUNTO_FOTOGRÁFICO_LOCALIZADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_okawa_cruise') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OKAWA_CRUISE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: CRUCERO DEL RÍO OKAWA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ship"></i> NAVEGACIÓN FLUVIAL:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Isla de Nakanoshima desde el agua.</li>
                                <li><strong>VIBE:</strong> Contraste brutal: arquitectura retro-europea vs rascacielos.</li>
                                <li><strong>TÁCTICA:</strong> Descanso táctico de piernas al atardecer.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-anchor"></i> STATUS:</div>
                            <div class="status-box info">NAVEGACIÓN_CONFIRMADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sumiyoshi') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SUMIYOSHI_TAISHA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SUMIYOSHI TAISHA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-archway"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Santuario del siglo III (Arquitectura pre-budista pura).</li>
                                <li><strong>HITO:</strong> El reflejo circular del puente Sorihashi.</li>
                                <li><strong>TÁCTICA:</strong> Refugio zen lejano a las masas de Dotonbori.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box success">SANTUARIO_BÁSICO_DETECTADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_osaka_history') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: OSAKA_HISTORY</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MUSEO DE HISTORIA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-monument"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Recreación del antiguo Palacio Naniwa (S. VII).</li>
                                <li><strong>VIBE:</strong> Osaka fue capital de facto antes que Kioto/Nara.</li>
                                <li><strong>TÁCTICA:</strong> Ofrece la mejor vista cenital del Castillo (aire acondicionado).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building-columns"></i> STATUS:</div>
                            <div class="status-box info">ARCHIVO_TEMPORAL_ACCEDIDO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_koreatown') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TSURUHASHI_KOREATOWN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> INTEL GASTRO: TSURUHASHI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fire-burner"></i> INFILTRACIÓN CULTURAL:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Comunidad Zainichi post Segunda Guerra Mundial.</li>
                                <li><strong>HITO:</strong> Laberinto de Kimchi, K-pop y humo de parrillas.</li>
                                <li><strong>TÁCTICA:</strong> Barbacoa coreana (Yakiniku) hasta reventar.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-utensils"></i> STATUS:</div>
                            <div class="status-box warning">ZONA_MULTICULTURAL_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_wakakusa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MT_WAKAKUSA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MONTE WAKAKUSA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain-sun"></i> OBSERVATORIO NATURAL:</div>
                            <ul class="data-list">
                                <li><strong>TERRENO:</strong> Colina de hierba 100% natural sin árboles.</li>
                                <li><strong>HITO:</strong> Panorámica infinita de la llanura de Nara con ciervos.</li>
                                <li><strong>TÁCTICA:</strong> Escalar 15 min al primer nivel antes del ocaso.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">VANTAGE_POINT_AQUIRIDO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nara_museum') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NARA_NATIONAL_MUSEUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MUSEO NACIONAL DE NARA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-chess-knight"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>EDIFICIO:</strong> Tesoro del Renacimiento Francés era Meiji (1894).</li>
                                <li><strong>CONTENIDO:</strong> Arte budista temprano y estatuilla original.</li>
                                <li><strong>TÁCTICA:</strong> Evitar la insolación del parque a las 14:00 PM.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-shield"></i> STATUS:</div>
                            <div class="status-box info">SANTUARIO_CLIMATIZADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_isuien') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ISUIEN_GARDEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: JARDÍN ISUIEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-spa"></i> DISEÑO PAISAJÍSTICO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Jardín nivel top de la era Edo y Meiji.</li>
                                <li><strong>TÉCNICA:</strong> <em>Shakkei</em> (Robar el paisaje) - Integra el Todai-ji visualmente.</li>
                                <li><strong>VIBE:</strong> Aristocrático, silencioso, alejado del caos del parque central.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> STATUS:</div>
                            <div class="status-box success">PACIFICACIÓN_COMPLETADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sanjusangendo') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SANJUSANGENDO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANJŪSANGEN-DŌ</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-users-rays"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Salón de madera de 120 metros (el más largo de Japón).</li>
                                <li><strong>EFECTIVO:</strong> 1.001 estatuas de la diosa Kannon doradas.</li>
                                <li><strong>VIBE:</strong> Atmósfera de asombro y repetición fractal.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-eye"></i> STATUS:</div>
                            <div class="status-box success">UNIDAD_CLON_DETECTADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kamogawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAMO_GAWA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: RÍO KAMO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge-water"></i> NAVEGACIÓN URBANA:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Arteria fluvial principal de Kioto.</li>
                                <li><strong>HITO:</strong> Terrazas 'Yuka' sobre el agua y músicos locales.</li>
                                <li><strong>TÁCTICA:</strong> Paseo de recuperación al atardecer (Gratis).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wind"></i> STATUS:</div>
                            <div class="status-box info">BRISA_CAPTURADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_nishi_honganji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NISHI_HONGANJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: NISHI HONGAN-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building-ngo"></i> INFILTRACIÓN ESPIRITUAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Patrimonio Mundial, cero masificación, acceso libre.</li>
                                <li><strong>CONFORT:</strong> Interiores masivos en tatami ideales para meditar.</li>
                                <li><strong>TÁCTICA:</strong> Zona segura para recargar baterías (físicas y mentales).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-couch"></i> STATUS:</div>
                            <div class="status-box success">SANTUARIO_SEGURO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_samurai_museum') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SAMURAI_MUSEUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MUSEO SAMURÁI & NINJA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-user-ninja"></i> COMBATE CERCANO (CQC):</div>
                            <ul class="data-list">
                                <li><strong>ACTIVIDAD:</strong> Entrenamiento interactivo con shurikens y armadura.</li>
                                <li><strong>VIBE:</strong> Tensión lúdica, rompe el ciclo de visitas a templos.</li>
                                <li><strong>TÁCTICA:</strong> Perfecto para mantener la moral alta en el escuadrón.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-khalifah"></i> STATUS:</div>
                            <div class="status-box warning">ARMADURA_EQUIPADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_gion_shirakawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: GION_SHIRAKAWA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: GION SHIRAKAWA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mask"></i> ZONA DE INFILTRACIÓN:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Canal empedrado, machiyas y sauces llorones.</li>
                                <li><strong>VIBE:</strong> Menos turistas que Hanamikoji, estética nocturna impecable.</li>
                                <li><strong>TÁCTICA:</strong> Detectar geishas en tránsito hacia las casas de té.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box success">PUNTO_FOTOGRÁFICO_ÓPTIMO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kenninji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KENNIN_JI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO KENNIN-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-dragon"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Estructura Zen más antigua de Kioto.</li>
                                <li><strong>HITO:</strong> Pintura colosal de Dragones Gemelos en el techo.</li>
                                <li><strong>TÁCTICA:</strong> Refugio silencioso rodeado por el bullicio de Gion.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> STATUS:</div>
                            <div class="status-box info">SISTEMA_ZEN_RESTAURADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hozugawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HOZUGAWA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: RÍO HOZUGAWA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-ship"></i> NAVEGACIÓN TÁCTICA:</div>
                            <ul class="data-list">
                                <li><strong>OPERACIÓN:</strong> Descenso de 16km (2 horas) en barcas tradicionales de madera.</li>
                                <li><strong>VIBE:</strong> Naturaleza brutal, rápidos suaves, remeros que usan la fuerza bruta.</li>
                                <li><strong>TÁCTICA:</strong> Llegada inmejorable a Arashiyama desde las montañas.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box success">EMBARCACIÓN_ASEGURADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kimono_arashiyama') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KIMONO_ARASHIYAMA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EQUIPAMIENTO: CAMUFLAJE CULTURAL</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-person-dress"></i> INDUMENTARIA (KIMONO/YUKATA):</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> El bosque de bambú y el puente Togetsukyo.</li>
                                <li><strong>ACCIÓN:</strong> Alquiler por todo el día, incluye accesorios y peinado en algunas tiendas.</li>
                                <li><strong>TÁCTICA:</strong> Garantiza el mejor recuerdo fotográfico del escuadrón.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box info">TRAJES_NATIVOS_DISPONIBLES</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_daikakuji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: DAIKAKUJI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO DAIKAKU-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-landmark"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Antiguo Palacio Imperial transformado en templo en el 876.</li>
                                <li><strong>HITO:</strong> El estanque de Osawa (uno de los estanques de jardín más antiguos de Japón).</li>
                                <li><strong>TÁCTICA:</strong> Escapar del centro masificado de Arashiyama hacia el este.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-chess-rook"></i> STATUS:</div>
                            <div class="status-box success">ZONA_ZONA_CERO_MULTITUDES</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fushimi_sake') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUSHIMI_SAKE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: DISTRITO SAKE FUSHIMI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-wine-glass"></i> REABASTECIMIENTO:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Bodegas tradicionales de sake junto a canales de sauces llorones.</li>
                                <li><strong>ACCIÓN:</strong> Visita a Gekkeikan Okura Museum + Cata de Sake.</li>
                                <li><strong>TÁCTICA:</strong> Recuperar energía después de la escalada al Fushimi Inari.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-vial"></i> STATUS:</div>
                            <div class="status-box warning">LIQUIDO_REGENERATIVO_ACTIVO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_ninnaji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: NINNA_JI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO NINNA-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-hotel"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Templo principal de la escuela Omuro de la secta Shingon (S. IX).</li>
                                <li><strong>HITO:</strong> El Palacio Goten con sus pasillos cubiertos y vistas al jardín de arena.</li>
                                <li><strong>TÁCTICA:</strong> Espacio masivo y palaciego, ideal para descongestionar al escuadrón.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-crown"></i> STATUS:</div>
                            <div class="status-box success">RECINTO_IMPERIAL_ASEGURADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kitano') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KITANO_TENMANGU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: KITANO TENMANGU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-pen-nib"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>DEDICATORIA:</strong> Santuario del erudito Sugawara no Michizane (Dios de la Educación).</li>
                                <li><strong>RITUAL:</strong> Frotar las cabezas de las estatuas de bueyes de bronce para el éxito mental.</li>
                                <li><strong>VIBE:</strong> Vibrante, rodeado de farolillos de piedra y cientos de estudiantes.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cow"></i> STATUS:</div>
                            <div class="status-box info">MEJORA_INTELIGENCIA_DISPONIBLE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_heian') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HEIAN_JINGU</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SANTUARIO HEIAN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-torii-gate"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>EDIFICIO:</strong> Réplica a escala (5:8) del antiguo Palacio Imperial de la era Heian.</li>
                                <li><strong>HITO:</strong> Los cuatro jardines (Shin'en) que rodean el santuario, pura maravilla paisajística.</li>
                                <li><strong>TÁCTICA:</strong> Cruzar el icónico puente Taihei-kaku cubierto, que divide el estanque.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> STATUS:</div>
                            <div class="status-box success">FOTOGRAFÍA_ÉPICA_GARANTIZADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_tofukuji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: TOFUKU_JI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO TŌFUKU-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge-water"></i> ARQUITECTURA ZEN:</div>
                            <ul class="data-list">
                                <li><strong>HITO VISUAL:</strong> El puente Tsutenkyo (Puente Hacia el Cielo) que cruza un denso valle boscoso.</li>
                                <li><strong>JARDINES:</strong> Hondō Hōjō, una obra maestra moderna del 1939 con jardines de musgo cuadriculado.</li>
                                <li><strong>TÁCTICA:</strong> Situado al sureste, ideal como despedida panorámica antes de abandonar Kioto.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-square"></i> STATUS:</div>
                            <div class="status-box info">VANTAGE_POINT_ACTIVO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_funaoka') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUNAOKA_ONSEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: FUNAOKA ONSEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-hot-tub-person"></i> RECUPERACIÓN TÉRMICA:</div>
                            <ul class="data-list">
                                <li><strong>INSTALACIÓN:</strong> Uno de los Sentōs (baños públicos) más antiguos e icónicos de Kioto.</li>
                                <li><strong>ESTÉTICA:</strong> Famoso por sus azulejos Majolica importados y madera tallada que narra historias de samuráis.</li>
                                <li><strong>TÁCTICA:</strong> Curación física completa ('Denki Buro' o baño eléctrico) para aliviar los pies de los mayores.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-battery-full"></i> STATUS:</div>
                            <div class="status-box success">SALUD_RESTABLECIDA_AL_100%</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hirayu_waterfall') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIRAYU_WATERFALL</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CASCADA HIRAYU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> TERRENO NATURAL:</div>
                            <ul class="data-list">
                                <li><strong>ESCALA:</strong> Caída de agua brutal de 64 metros y 6 metros de ancho.</li>
                                <li><strong>VIBE:</strong> Frescor extremo rodeado de bosque volcánico originario.</li>
                                <li><strong>TÁCTICA:</strong> Caminata corta y fácil desde la terminal de autobuses de Hirayu.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> STATUS:</div>
                            <div class="status-box info">ZONA_ZONA_ENFRIAMIENTO_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_bear_park') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: BEAR_PARK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: OKUHIDA BEAR PARK</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-paw"></i> OBSERVACIÓN DE FAUNA:</div>
                            <ul class="data-list">
                                <li><strong>OBJETIVO:</strong> Más de 100 osos negros asiáticos de cuello de luna.</li>
                                <li><strong>ACCIÓN:</strong> Posibilidad de alimentar a los osos con galletas especiales.</li>
                                <li><strong>VIBE:</strong> Una parada retro-turística encantadora de los Alpes Japoneses.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cookie"></i> STATUS:</div>
                            <div class="status-box warning">FAUNA_SALVAJE_LOCALIZADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_night_walk_hirayu') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIRAYU_NIGHT</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: PASEO NOCTURNO HIRAYU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-moon"></i> INFILTRACIÓN NOCTURNA:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Pueblo alpino a oscuras iluminado solo por vapor geotérmico.</li>
                                <li><strong>VIBE:</strong> Silencio absoluto tras la cena Kaiseki, ideal para pasear con Yukata.</li>
                                <li><strong>TÁCTICA:</strong> Buscar las salidas de vapor de las alcantarillas (atmósfera hiper-real).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-cloud"></i> STATUS:</div>
                            <div class="status-box success">CAMUFLAJE_DE_VAPOR_ACTIVO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hida_no_sato') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HIDA_NO_SATO</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: HIDA NO SATO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-house-chimney"></i> ARQUITECTURA ALPINA:</div>
                            <ul class="data-list">
                                <li><strong>EL GEMELO:</strong> Alternativa al masificado Shirakawa-go, en plena ciudad de Takayama.</li>
                                <li><strong>HITO:</strong> Estilo 'Gassho-zukuri' (manos rezando) en los tejados de paja contra la nieve.</li>
                                <li><strong>TÁCTICA:</strong> Ideal para exploración interior. Menos colas, fotos limpias.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-campground"></i> STATUS:</div>
                            <div class="status-box success">CAMPAMENTO_RURAL_DESCUBIERTO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_matsuri_no_mori') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MATSURI_NO_MORI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: MATSURI NO MORI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-masks-theater"></i> TECNOLOGÍA TRADICIONAL:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Museo subterráneo que aloja el corazón del festival de Takayama.</li>
                                <li><strong>EFECTIVO:</strong> Carrozas ('Yatai') equipadas con autómatas mecánicos que tocan instrumentos.</li>
                                <li><strong>TÁCTICA:</strong> Ver los tambores taiko gigantes rodar por sí solos. Surrealista.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-gear"></i> STATUS:</div>
                            <div class="status-box info">MECANISMOS_KARAKURI_EN_LÍNEA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sakurayama') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SAKURAYAMA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: SAKURAYAMA HACHIMANGU</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-peace"></i> INFILTRACIÓN ESPIRITUAL:</div>
                            <ul class="data-list">
                                <li><strong>HITO:</strong> Santuario protector de la mitad norte del casco antiguo de Takayama.</li>
                                <li><strong>VIBE:</strong> Majestuoso, profundo silencio, rodeado de cedros criptomeria colosales.</li>
                                <li><strong>TÁCTICA:</strong> Escape instantáneo de las calles comerciales concurridas del sur.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> STATUS:</div>
                            <div class="status-box success">SANTUARIO_BOSCOSO_DESPEJADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_music_forest') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: MUSIC_FOREST</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: KAWAGUCHIKO MUSIC FOREST</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-music"></i> ZONA TEMÁTICA:</div>
                            <ul class="data-list">
                                <li><strong>ESCENARIO:</strong> Réplica de ciudad europea dedicada a instrumentos mecánicos autojugables.</li>
                                <li><strong>HITO VISUAL:</strong> Jardines de rosas impecables enmarcando al gigantesco Monte Fuji de fondo.</li>
                                <li><strong>TÁCTICA:</strong> Relajarse en las terrazas con vistas hiperrealistas antes del atardecer.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-volume-high"></i> STATUS:</div>
                            <div class="status-box info">SINFONÍA_EUROPEA_DETECTADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fuji_caves') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJI_CAVES</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: CUEVAS DE HIELO Y VIENTO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-snowflake"></i> EXPLORACIÓN SUBTERRÁNEA:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Tubos volcánicos masivos formados por las pasadas erupciones del Fuji.</li>
                                <li><strong>EFECTIVO:</strong> Temperatura interior rondando los 0-3ºC incluso en agosto.</li>
                                <li><strong>TÁCTICA:</strong> Aventurismo ligero en la base del volcán. Equipar capa térmica rápida.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-temperature-arrow-down"></i> STATUS:</div>
                            <div class="status-box info">CHOQUE_TÉRMICO_INMINENTE</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_fujinomiya_shrine') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: FUJINOMIYA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: FUJINOMIYA SENGEN TAISHA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> INTEL HISTÓRICO:</div>
                            <ul class="data-list">
                                <li><strong>MANDO CENTRAL:</strong> Santuario principal (de más de 1.300) dedicados a la diosa del Monte Fuji.</li>
                                <li><strong>HITO:</strong> Estanque Wakutama, alimentado por deshielo que emerge del lecho volcánico.</li>
                                <li><strong>TÁCTICA:</strong> Llenar cantimploras con el agua bendita hiper-fría del manantial sagrado.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bottle-water"></i> STATUS:</div>
                            <div class="status-box success">AGUA_SAGRADA_RECOLECTADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_koishikawa') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KOISHIKAWA</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: JARDÍN KOISHIKAWA KORAKUEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-leaf"></i> DISEÑO EDO:</div>
                            <ul class="data-list">
                                <li><strong>ORIGEN:</strong> Uno de los jardines de señor feudal más antiguos de Tokio (siglo XVII).</li>
                                <li><strong>HITO VISUAL:</strong> El puente de media luna Engetsu-kyo reflejándose en el agua.</li>
                                <li><strong>TÁCTICA:</strong> Desconexión instantánea de la jungla de asfalto del Tokyo Dome colindante.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-tree"></i> STATUS:</div>
                            <div class="status-box success">OASIS_URBANO_ASEGURADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shinjuku_gyoen') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHINJUKU_GYOEN</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: SHINJUKU GYOEN</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-park"></i> TERRENO MIXTO:</div>
                            <ul class="data-list">
                                <li><strong>COBERTURA:</strong> 144 acres mezclando jardines formales franceses, paisajísticos ingleses y tradicionales japoneses.</li>
                                <li><strong>HITO:</strong> Antiguo jardín imperial, el Central Park de Tokio.</li>
                                <li><strong>TÁCTICA:</strong> Parada técnica obligatoria para tumbarse en el césped y reposar articulaciones.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bed"></i> STATUS:</div>
                            <div class="status-box info">RECUPERACIÓN_TÁCTICA_EN_PROGRESO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_hotaluna') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: HOTALUNA_CRUISE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> TRANSPORTE: NAVE HOTALUNA / HIMIKO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-rocket"></i> MOVILIDAD FUTURISTA:</div>
                            <ul class="data-list">
                                <li><strong>DISEÑO:</strong> Barco diseñado por Leiji Matsumoto (creador de anime hiper-futurista).</li>
                                <li><strong>RUTA:</strong> Descenso del río Sumida conectando Asakusa directamente con la isla artificial de Odaiba.</li>
                                <li><strong>TÁCTICA:</strong> Evitar metros subterráneos; disfrutar del skyline desde una cubierta panorámica acristalada.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-anchor"></i> STATUS:</div>
                            <div class="status-box warning">SISTEMA_NAVAL_HÍBRIDO_EN_LÍNEA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_sumida_aquarium') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SUMIDA_AQUARIUM</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ACUARIO SUMIDA</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-fish-fins"></i> BIO-INTEL:</div>
                            <ul class="data-list">
                                <li><strong>UBICACIÓN:</strong> Base de la Tokyo Skytree, diseño completamente abierto y moderno.</li>
                                <li><strong>HITO:</strong> Piscina masiva central con pingüinos en observación 360 grados.</li>
                                <li><strong>TÁCTICA:</strong> Visita ideal nocturna, excelente iluminación arquitectónica y clima controlado.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-water"></i> STATUS:</div>
                            <div class="status-box info">HÁBITAT_MARINO_ARTIFICIAL_ASEGURADO</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_engakuji') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ENGAKU_JI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: TEMPLO ENGAKU-JI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-vihara"></i> COMPLEJO ZEN:</div>
                            <ul class="data-list">
                                <li><strong>RELEVANCIA:</strong> Uno de los templos Zen más importantes de Japón, esculpido en la colina de Kamakura.</li>
                                <li><strong>HITO:</strong> La campana gigante (O-gane) y la sala Shariden con reliquias de Buda.</li>
                                <li><strong>TÁCTICA:</strong> Ubicado directamente junto a la estación Kita-Kamakura. Entrada táctica antes de la multitud.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-mountain"></i> STATUS:</div>
                            <div class="status-box success">ELEVACIÓN_ESPIRITUAL_MÁXIMA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_shinkyo') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: SHINKYO_BRIDGE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: PUENTE SHINKYO</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-bridge"></i> ESTRUCTURA SAGRADA:</div>
                            <ul class="data-list">
                                <li><strong>ROL:</strong> Entrada a los santuarios de Nikko, considerado uno de los 3 puentes más hermosos de Japón.</li>
                                <li><strong>LEYENDA:</strong> Formado por serpientes gigantes transformadas en puente sagrado bermellón.</li>
                                <li><strong>TÁCTICA:</strong> Fotografiar desde la carretera lateral (gratis). Opcional pagar para pisar la madera.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-camera"></i> STATUS:</div>
                            <div class="status-box info">POSTAL_ICÓNICA_CAPTURADA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_kawagoe') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: KAWAGOE</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> EXTRACCIÓN: KAWAGOE (LITTLE EDO)</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-clock-rotate-left"></i> VIAJE EN EL TIEMPO:</div>
                            <ul class="data-list">
                                <li><strong>ZONA:</strong> Kurazukuri Street (calle de antiguos almacenes con gruesos muros de arcilla).</li>
                                <li><strong>HITO:</strong> Toki no Kane, la icónica Torre de la Campana de madera que suena desde la era Edo.</li>
                                <li><strong>TÁCTICA:</strong> Callejear por Kashiya Yokocho (Calle de los Dulces) probando sorbetes de boniato.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-building-columns"></i> STATUS:</div>
                            <div class="status-box warning">SIMULACIÓN_ÉPOCA_EDO_ACTIVA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_anamori') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: ANAMORI_INARI</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> RECON: ANAMORI INARI</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-place-of-worship"></i> CULTO INARI:</div>
                            <ul class="data-list">
                                <li><strong>RELEVANCIA:</strong> Santuario protector cerca de Haneda, reverenciado por pilotos y locales.</li>
                                <li><strong>ACTIVIDAD:</strong> Llevarse arena sagrada del santuario en pequeños sobres de papel.</li>
                                <li><strong>TÁCTICA:</strong> Oportunidad de pasar bajo un mini túnel de toriis rojos sin multitudes (vs. Kioto).</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-plane"></i> STATUS:</div>
                            <div class="status-box success">BENDICIÓN_DE_VUELO_OBTENIDA</div>
                        </div>
                    </div>
                </div>
        `;
        } else if (missionId === 'mission_jonanjima') {
            missionHTML = `
        <div class="datapad-container animate-fade-in" >
                    <div class="datapad-header">
                        <div class="datapad-mission-id">> MISSION_FILE: JONANJIMA_PARK</div>
                        <button onclick="renderCenterVisual(travelData[${dayIndex}], 'selector')" class="datapad-close">
                            <i class="fa-solid fa-xmark"></i> CLOSE_FILE
                        </button>
                    </div>
                    <h1 class="datapad-title">> LOGÍSTICA: JONANJIMA SEASIDE PARK</h1>
                    <div class="tactical-data-grid">
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-plane-arrival"></i> MONITOREO AÉREO:</div>
                            <ul class="data-list">
                                <li><strong>UBICACIÓN:</strong> Parque artificial en la bahía, literalmente bajo las rutas de vuelo de Haneda.</li>
                                <li><strong>VIBE:</strong> Brisa marina, familias locales pescando y aviones rozando sus cabezas.</li>
                                <li><strong>TÁCTICA:</strong> Matar las últimas horas de estancia en Japón observando la bahía con extrema melancolía.</li>
                            </ul>
                        </div>
                        <div class="data-block">
                            <div class="data-label"><i class="fa-solid fa-teardrop"></i> STATUS:</div>
                            <div class="status-box info">CIERRE_DE_MISIÓN_JAPÓN_INMINENTE</div>
                        </div>
                    </div>
                </div>
        `;
        }

        card.innerHTML = missionHTML;
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
    }, 300);
}

window.onload = init;

