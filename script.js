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
 if(data.hasOptions){
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
     checkbox.addEventListener('click', function() {
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

 html += `<div class="timeline-container" style="margin-top:20px;">`;
 data.timeline.forEach(t => {
     html += `<div class="timeline-item"><div class="time-tag">${t.time}</div><strong class="timeline-title">${t.title}</strong><div class="timeline-desc">${t.desc}</div></div>`;
 });
 html += `</div>`;

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
 
 // 1. MODO "SELECCIONAR EXCURSIÓN" (Cuando cargas el día pero no has elegido opción A/B/C)
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
         
         // Ciudad (arriba derecha)
         const locationHTML = location ? 
             `<div class="location-badge"><i class="fa-solid fa-map-pin"></i> ${location}</div>` : '';
         
         // Nombre del día y actividad (debajo del hotel)
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
                        onclick="selectExcursionFromCard(${data.day}, '${opt.id}', this)"
                        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectExcursionFromCard(${data.day}, '${opt.id}', this);}"
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
                     ${dayNameHTML}
                 </div>
                 <div class="header-right">
                     ${locationHTML}
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
         ${imgHTML}
         
         <div class="story-container">
             <h2 style="font-size:2rem; color:white; margin-bottom:5px;">${optData.name}</h2>
             <p style="color:var(--accent); margin-bottom:30px; font-style:italic;">${optData.summary}</p>
             
             ${optData.fullDesc}

             ${optData.ivanChallenge ? `
                 <div style="margin-top:30px; background:rgba(239,68,68,0.1); border:1px solid var(--danger); padding:20px; border-radius:12px;">
                     <strong style="color:var(--danger); display:block; margin-bottom:10px; font-size:1.1rem;">
                         <i class="fa-solid fa-dragon"></i> MISIÓN ESPECIAL (IVÁN)
                     </strong>
                     <p style="margin:0; color:#fca5a5;">${optData.ivanChallenge}</p>
                 </div>
             ` : ''}

             ${optData.price ? `
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
}

// Función global para seleccionar excursión desde las tarjetas del panel central
function selectExcursionFromCard(dayIndex, optionId, cardElement) {
 const data = travelData[dayIndex];
 const option = data.options.find(opt => opt.id === optionId);
 if (option) {
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
     renderCenterVisual(data, 'option', option);
     
     // Cerrar sidebar en móvil después de seleccionar
     if (window.innerWidth < 768 && window.closeMobileMenu) {
         window.closeMobileMenu();
     }
 }
}

window.onload = init;
