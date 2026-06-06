/* ==========================================
   SISTEMA DE AUTENTICACIÓN (LOGIN)
   ========================================== */
window.checkLogin = function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');
    
    if (user === 'Family' && pass === 'Japan2026') {
        localStorage.setItem('auth_session', 'authenticated_' + Date.now());
        document.getElementById('login-overlay').classList.add('hidden');
        document.body.classList.remove('auth-hidden');
        console.log('Autenticación completada');
    } else {
        errorMsg.style.display = 'flex';
        // Animación de error en la caja
        const box = document.querySelector('.login-box');
        box.style.animation = 'none';
        box.offsetHeight; // trigger reflow
        box.style.animation = 'shake 0.4s ease-in-out';
    }
};

(function initAuth() {
    // Comprobar sesión antes de que el DOM esté listo para evitar parpadeos si es posible
    const session = localStorage.getItem('auth_session');
    if (session) {
        // Usar una clase en el HTML para ocultar/mostrar es más eficiente
        document.documentElement.classList.add('is-authenticated');
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const session = localStorage.getItem('auth_session');
        if (session) {
            const overlay = document.getElementById('login-overlay');
            if (overlay) overlay.classList.add('hidden');
            document.body.classList.remove('auth-hidden');
        }
    });
})();

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

// Helper function to extract query parameters from URLs
function getQueryParam(url, param) {
    if (!url) return null;
    try {
        const match = url.match(new RegExp('[?&]' + param + '=([^&#]*)'));
        return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : null;
    } catch(e) {
        return null;
    }
}



// Función para extraer el lugar principal del hotel donde se duerme esa noche
function getLocation(data) {
    // Caso especial: Día 11 es Kazeya Ryokan
    if (data.day === 11) return 'KAZEYA RYOKAN';

    // Solo extraer del hotel donde se hospedan esa noche
    if (data.hotel) {
        const hotel = data.hotel.toUpperCase();

        // Buscar ciudades principales en el nombre del hotel
        if (hotel.includes('OSAKA') || hotel.includes('DC桜') || hotel.includes('NAMBA')) return 'OSAKA';
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
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
}

window.openFlightSeatingModal = function() {
    let modal = document.getElementById('flight-seating-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'flight-seating-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '10000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
        modal.style.overflow = 'auto';

        const contentHTML = `
            <div style="position:relative; width:95%; max-width:800px; margin:20px auto; background:linear-gradient(135deg, #0f172a, #1e293b); border:1px solid var(--neon-blue); border-radius:16px; padding:20px; box-shadow: 0 0 30px rgba(0, 243, 255, 0.3); color:white;">
                <span style="position:absolute; top:10px; right:20px; color:#fff; font-size:30px; font-weight:bold; cursor:pointer;" onclick="document.getElementById('flight-seating-modal').style.display='none'">&times;</span>
                <h2 style="color:var(--neon-blue); text-align:center; margin-top:0;"><i class="fa-solid fa-plane-departure"></i> DISTRIBUCIÓN DE VUELOS</h2>
                
                <div style="text-align:center; margin-bottom:20px;">
                    <img src="images/flight_seating_map 1.png" style="max-width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.2); box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                </div>

                <div style="display:flex; flex-direction:column; gap:20px;">
                    <!-- TRAYECTO 1 -->
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border-left:4px solid var(--accent);">
                        <h3 style="color:var(--accent); margin-top:0;"><i class="fa-solid fa-plane"></i> TRAYECTO 1: Valencia (VLC) ✈️ Estambul (IST)</h3>
                        <p style="font-size:0.9rem; color:#cbd5e1;">Avión: Fuselaje estrecho (3-3). Todos en el lado izquierdo.</p>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-top:10px;">
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                                <strong style="color:white;">Fila 30</strong><br>
                                <span style="color:var(--gold);">30A:</span> Cesar Mari (Ventanilla)<br>
                                <span style="color:var(--gold);">30B:</span> Gema Mascarell (Centro)
                            </div>
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                                <strong style="color:white;">Fila 31</strong><br>
                                <span style="color:var(--gold);">31A:</span> Ivan Brasero (Ventanilla)<br>
                                <span style="color:var(--gold);">31B:</span> Vicente Mari (Centro)<br>
                                <span style="color:var(--gold);">31C:</span> Dolores Puerta (Pasillo)
                            </div>
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                                <strong style="color:white;">Fila 32</strong><br>
                                <span style="color:var(--gold);">32A:</span> Felipe Brasero (Ventanilla)<br>
                                <span style="color:var(--gold);">32B:</span> Laura Brasero (Centro)<br>
                                <span style="color:var(--gold);">32C:</span> Lorena Mari (Pasillo)
                            </div>
                        </div>
                    </div>

                    <!-- TRAYECTO 4 -->
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border-left:4px solid var(--neon-purple);">
                        <h3 style="color:var(--neon-purple); margin-top:0;"><i class="fa-solid fa-plane"></i> TRAYECTO 4 / ESTAMBUL ✈️ OSAKA / VALENCIA</h3>
                        <p style="font-size:0.9rem; color:#cbd5e1;">Avión: Fuselaje ancho. Grupo en parte central y lateral derecha.</p>
                        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; margin-top:10px;">
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px; grid-column: 1 / -1;">
                                <strong style="color:white;">Fila 32 (Centro)</strong><br>
                                <span style="color:var(--gold);">32D:</span> Felipe Brasero (Pasillo Izq) | 
                                <span style="color:var(--gold);">32E:</span> Laura Brasero (Centro) | 
                                <span style="color:var(--gold);">32F:</span> Lorena Mari (Centro) | 
                                <span style="color:var(--gold);">32G:</span> Ivan Brasero (Pasillo Der)
                            </div>
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                                <strong style="color:white;">Fila 32 (Derecha)</strong><br>
                                <span style="color:var(--gold);">32J:</span> Vicente Mari (Centro/Pasillo)<br>
                                <span style="color:var(--gold);">32K:</span> Dolores Puerta (Ventanilla)
                            </div>
                            <div style="background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                                <strong style="color:white;">Fila 33 (Derecha)</strong><br>
                                <span style="color:var(--gold);">33J:</span> Gema Mascarell (Centro/Pasillo)<br>
                                <span style="color:var(--gold);">33K:</span> Cesar Mari (Ventanilla)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modal.innerHTML = contentHTML;
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    }
    modal.style.display = 'block';
};

window.openTaxiInstructionsModal = function() {
    let modal = document.getElementById('taxi-instructions-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'taxi-instructions-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '10000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
        modal.style.overflow = 'auto';

        const contentHTML = `
            <div style="position:relative; width:95%; max-width:600px; margin:20px auto; background:#fff; border-radius:20px; padding:30px; color:#000; font-family: 'Inter', sans-serif; box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);">
                <span style="position:absolute; top:20px; right:25px; color:#000; font-size:40px; font-weight:bold; cursor:pointer;" onclick="document.getElementById('taxi-instructions-modal').style.display='none'">&times;</span>
                
                <div style="text-align:center; margin-bottom:25px;">
                    <i class="fa-solid fa-taxi" style="font-size:3rem; color:#f97316;"></i>
                    <h2 style="margin:10px 0 0 0; font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Taxi Driver Instructions</h2>
                    <p style="color:#666; margin:5px 0 0 0;">タクシー運転手さんへの指示</p>
                </div>

                <div style="border:3px solid #000; padding:25px; border-radius:15px; background:#f9fafb; margin-bottom:30px;">
                    <h1 style="font-size:2.8rem; text-align:center; margin:0 0 10px 0; line-height:1.1; font-weight:900;">
                        Dc桜の苑<br>難波南店
                    </h1>
                    <p style="font-size:1.3rem; text-align:center; margin:0; font-weight:700; color:#333;">
                        〒557-0022 大阪府大阪市西成区中開２丁目１−３
                    </p>
                </div>

                <div style="font-size:1.2rem; line-height:1.6;">
                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.3rem;">[ Booking.com ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.4rem;">Booking.comで予約しました。</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">(Hemos reservado por Booking.com)</p>
                    </div>

                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.3rem;">[ Group Size ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.4rem;">合計8人です。</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">(Somos 8 personas en total)</p>
                    </div>

                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.3rem;">[ 2 Taxis ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.4rem;">タクシーを2台予約しました（各4人ずつ）。</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">(Hemos reservado 2 taxis, 4 personas en cada uno)</p>
                    </div>

                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.3rem;">[ Capacity ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.4rem;">予約した車両は、1台あたり9名と荷物9個の定員です。</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">(Capacidad para 9 pax y 9 maletas por vehículo)</p>
                    </div>

                    <div style="background:#fff7ed; padding:15px; border-radius:12px; border:2px solid #fdba74;">
                        <p style="margin:0; font-weight:bold; font-size:1.5rem; text-align:center;">
                            このホテルまでお願いします。
                        </p>
                        <p style="margin:5px 0 0 0; color:#c2410c; font-size:0.9rem; text-align:center;">
                            (Por favor, llévenos a este hotel)
                        </p>
                    </div>
                </div>

                <button onclick="document.getElementById('taxi-instructions-modal').style.display='none'" style="width:100%; margin-top:20px; background:#000; color:#fff; border:none; padding:15px; border-radius:10px; font-size:1.2rem; font-weight:bold; cursor:pointer;">
                    Cerrar / 閉じる
                </button>
            </div>
        `;
        modal.innerHTML = contentHTML;
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    }
    modal.style.display = 'block';
};

// Función auxiliar para obtener la mejor infografía disponible para un día
window.getBestDayInfographic = function(data) {
    const infos = [];
    const dayNum = data.day;
    
    // 1. Días que exactamente tienen una infografía principal en la carpeta "infografía"
    const knownDays = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19];
    
    if (knownDays.includes(dayNum)) {
        infos.push(`infografía/inf dia ${dayNum}.png`);
        
        // NOTA: Ignoramos explícitamente las versiones "1" (ej: inf dia 3 1.png) 
        // para asegurar que solo se muestre una infografía a la derecha 
        // y mantener el layout limpio (como en el día 7).
    } else if (data && data.infographic) {
        // 2. Prioridad: Lo que venga definido en el objeto data en caso de que no esté en la lista hardcodeada
        infos.push(data.infographic);
    }

    // Limitamos estrictamente a 1 para no romper la visualización apilando dos mapas
    return infos.slice(0, 1);
};

// --- GASTRO TIPS & TIMELINE SUGGESTIONS ---

// Tip aleatorio para la parte superior del panel derecho
window.renderGastroTips = function(data) {
    if (!window.restaurantData || !data) return '';
    if (!window.usedGastroIds) window.usedGastroIds = new Set();
    
    const city = getLocation(data);
    const cityRestaurants = window.restaurantData.filter(r => r.city === city.toUpperCase());
    if (cityRestaurants.length === 0) return '';

    // Filtrar para no repetir con los de abajo
    const candidates = cityRestaurants.filter(r => !window.usedGastroIds.has(r.id));
    
    // Si no hay candidatos, no mostramos nada
    if (candidates.length === 0) return '';
    
    const tip = candidates[Math.floor(Math.random() * candidates.length)];
    window.usedGastroIds.add(tip.id);
    
    return `
        <div class="contextual-gastro-box" style="margin-top:20px; border-color:var(--gastro-gold); background:rgba(251,191,36,0.05); display:flex; gap:12px; align-items:center; padding:10px; border-radius:12px; border:1px solid rgba(251,191,36,0.2);">
            <img src="${tip.image}" style="width:40px; height:40px; border-radius:6px; object-fit:cover; border:1px solid var(--gastro-gold);" onerror="this.src='images/placeholder-food.jpg'">
            <div style="flex:1;">
                <div style="font-size:0.6rem; color:var(--gastro-gold); font-weight:800; text-transform:uppercase; margin-bottom:2px; letter-spacing:1px; opacity:0.8;">[ GASTRO_TIP ]</div>
                <div style="font-size:0.8rem; color:white; line-height:1.2;">${tip.name} en <strong>${tip.area}</strong></div>
            </div>
        </div>
    `;
};

// Sugerencia para el Timeline (Derecha) - Intenta ser contextual o aleatoria
window.getTimelineGastroSuggestion = function(city, contextLabel = '') {
    if (!window.restaurantData) return '';
    if (!window.usedGastroIds) window.usedGastroIds = new Set();
    
    const cityUpper = (city || '').toUpperCase();
    const cityRestaurants = window.restaurantData.filter(r => r.city === cityUpper);
    if (cityRestaurants.length === 0) return '';
    
    // Buscar candidatos no usados
    let candidates = cityRestaurants.filter(r => !window.usedGastroIds.has(r.id));
    
    // Si no hay candidatos nuevos, no mostramos nada
    if (candidates.length === 0) return '';
    
    // Intentar contextual entre los candidatos
    let target = null;
    if (contextLabel) {
        target = candidates.find(r => r.nearTo && r.nearTo.some(n => contextLabel.includes(n)));
    }
    
    const rest = target || candidates[Math.floor(Math.random() * candidates.length)];
    window.usedGastroIds.add(rest.id);
    
    return `
        <div class="timeline-gastro-suggestion">
            <img src="${rest.image}" class="timeline-gastro-thumb" onerror="this.src='images/placeholder-food.jpg'">
            <div class="timeline-gastro-info">
                <h4>${rest.name}</h4>
                <p><strong>${rest.category}</strong> · ${rest.area}</p>
                <div style="margin-top:5px;">
                    <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${rest.google_maps_place_id}" target="_blank" 
                       style="font-size:0.65rem; color:var(--gastro-gold); text-decoration:none; font-weight:bold; text-transform:uppercase; letter-spacing:0.5px;">
                       GOOGLE MAPS <i class="fa-solid fa-external-link" style="font-size:0.6rem;"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
};

// Recomendaciones contextuales para la ficha central (Center Card)
window.renderContextualRestaurants = function(data) {
    if (!window.restaurantData || !data) return '';
    
    const activityName = data.title || data.name || '';
    const suggested = window.restaurantData.filter(r => 
        r.nearTo && r.nearTo.some(n => activityName.includes(n))
    );

    if (suggested.length === 0) return '';

    return `
        <div class="contextual-gastro-box" style="margin-top:30px;">
            <h3 style="color:var(--gastro-gold); margin-bottom:15px; font-size:1.1rem;">
                <i class="fa-solid fa-lightbulb"></i> ¿DÓNDE COMER CERCA?
            </h3>
            <div style="display:flex; flex-direction:column; gap:15px;">
                ${suggested.map(rest => `
                    <div style="display:flex; gap:15px; align-items:center; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border:1px solid rgba(251,191,36,0.1);">
                        <img src="${rest.image}" style="width:60px; height:60px; border-radius:6px; object-fit:cover; border:1px solid var(--gastro-gold);">
                        <div style="flex:1;">
                            <div style="font-size:0.7rem; color:var(--gastro-gold); font-weight:bold; text-transform:uppercase;">${rest.category}</div>
                            <div style="font-size:0.95rem; color:white; font-weight:bold;">${rest.name}</div>
                            <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${rest.google_maps_place_id}" target="_blank" 
                               style="font-size:0.75rem; color:var(--gastro-gold); text-decoration:none; display:flex; align-items:center; gap:5px; margin-top:3px;">
                               Ver en Google Maps <i class="fa-solid fa-external-link" style="font-size:0.6rem;"></i>
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

// --- RADAR GASTRONÓMICO ---
window.renderRestaurantPanel = function(city, dayIndex) {
    if (!window.restaurantData) return;
    
    const cityUpper = city.toUpperCase();
    const restaurants = window.restaurantData.filter(r => r.city === cityUpper);
    
    if (restaurants.length === 0) {
        alert("No tenemos recomendaciones específicas para esta ciudad aún.");
        return;
    }

    const modal = document.getElementById('visual-card'); // Usamos el card central para la lista
    
    let html = `
        <button onclick="loadDay(${dayIndex})" style="background:transparent; border:none; color:var(--accent); cursor:pointer; font-size:1.1rem; margin-bottom:20px; display:flex; align-items:center;">
            <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Volver al Itinerario
        </button>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px; border-bottom:1px solid var(--gastro-gold); padding-bottom:15px;">
            <h1 style="color:var(--gastro-gold); margin:0; font-size:2.5rem;"><i class="fa-solid fa-utensils"></i> RADAR GASTRONÓMICO: ${cityUpper}</h1>
        </div>
        <div class="restaurants-list-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:25px;">
    `;

    restaurants.forEach(rest => {
        html += `
            <div class="restaurant-card" style="border: 1px solid rgba(251, 191, 36, 0.3); border-radius:16px; overflow:hidden; background:rgba(255,255,255,0.02);">
                <img src="${rest.image}" style="width:100%; height:180px; object-fit:cover;" onerror="this.src='images/placeholder-food.jpg'">
                <div style="padding:20px;">
                    <span class="restaurant-badge" style="background:var(--gastro-gold); color:black; font-size:0.7rem; font-weight:bold; padding:2px 8px; border-radius:4px;">${rest.category}</span>
                    <h3 style="color:white; margin:10px 0 5px 0; font-size:1.3rem;">${rest.name}</h3>
                    <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:15px; line-height:1.4;">${rest.description}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#cbd5e1; font-size:0.8rem;"><i class="fa-solid fa-location-dot"></i> ${rest.area}</span>
                        <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${rest.google_maps_place_id}" target="_blank" 
                           style="color:var(--gastro-gold); text-decoration:none; font-weight:bold; font-size:0.85rem;">
                           Ver en Maps <i class="fa-solid fa-external-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    modal.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // 3. Mapas eliminados por solicitud del usuario

    // 4. Botones con Lógica de Posición Dinámica
    const menu = document.getElementById('day-list');
    console.log("Iniciando carga de sidebar. travelData length:", travelData.length);

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
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.day-btn')[index].classList.add('active');
        renderPreparationPage(data);
        return;
    }

    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.day-btn')[index].classList.add('active');

    // Limpiar modo excursión al cargar un día
    document.body.classList.remove('mode-excursion-active');

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
                    
                    <div class="booking-grid-v3 custom-scroll">
                        ${data.bookingPanel.phases.map(phase => `
                            <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; border-left: 3px solid ${phase.color};">
                                <div style="font-size:0.75rem; color:${phase.color}; font-weight:900; text-transform:uppercase; margin-bottom:8px;">${phase.name}</div>
                                <div style="display: flex; flex-direction: column; gap: 4px;">
                                    ${phase.items.map(item => {
                                        const isComprado = Persistence.getItem(item.id) === 'comprado';
                                        return `
                                        <div style="font-size:0.8rem; display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 6px; margin-bottom: 5px;">
                                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                                <span style="color:white; opacity: 0.9; font-weight: bold; flex: 1;">${item.name}</span>
                                                <span style="color:rgba(255,255,255,0.4); font-size:0.65rem; margin-left: 10px;">${item.date}</span>
                                            </div>
                                            <div style="display: flex; gap: 6px; margin-top: 4px;">
                                                <button onclick="window.toggleBookingStatus('${item.id}', 0)" 
                                                        style="background: ${isComprado ? 'var(--success)' : 'rgba(239, 68, 68, 0.2)'}; 
                                                               color: white; border: 1px solid ${isComprado ? 'var(--success)' : 'var(--danger)'}; 
                                                               padding: 3px 8px; border-radius: 4px; font-size: 0.65rem; cursor: pointer; flex: 1; transition: all 0.3s;">
                                                    <i class="fa-solid ${isComprado ? 'fa-check-double' : 'fa-clock'}"></i> 
                                                    ${isComprado ? 'COMPRADO' : 'PENDIENTE'}
                                                </button>
                                                ${item.link ? `
                                                    <a href="${item.link}" target="_blank" 
                                                       style="background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid #38bdf8; 
                                                              padding: 3px 8px; border-radius: 4px; font-size: 0.65rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                                        <i class="fa-solid fa-link"></i> WEB
                                                    </a>
                                                ` : ''}
                                            </div>
                                        </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        <!-- BLOQUE MEDIO: SELECTOR DE VIAJEROS (UNA SOLA LÍNEA) -->
        <div class="traveler-control-strip">
            <div class="traveler-selector-v3">
                <div style="color: var(--neon-blue); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">
                    <i class="fa-solid fa-user-gear"></i> Misión de:
                </div>
                <div class="traveler-avatars-row" style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;">
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
                    <div class="preparation-title-row">
                        <h1>
                            PLAN DE <span style="color: var(--neon-blue);">ACCIÓN</span>
                        </h1>
                        
                        <!-- Infografías en cabecera de preparación -->
                        <div class="infographic-stack" style="display:flex; gap:10px;">
                            ${(window.getBestDayInfographic ? window.getBestDayInfographic(data) : []).map(src => `
                                <div class="infographic-preview-container" onclick="openInfographic('${src}')" style="width:100%; max-width:120px;">
                                    <img src="${src}" class="infographic-thumb" alt="Infografía" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
                                </div>
                            `).join('')}
                        </div>
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

window.decorateTransitTitle = function(title) {
    let decorated = title;
    
    // Define lines to replace
    const lines = [
        { key: "JR Yamanote", name: "JR Yamanote", code: "JY", bg: "#80c241", color: "#fff" },
        { key: "Yamanote", name: "JR Yamanote", code: "JY", bg: "#80c241", color: "#fff" },
        { key: "Metro Tozai", name: "Tozai Line", code: "T", bg: "#0095d9", color: "#fff" },
        { key: "Línea Tozai", name: "Tozai Line", code: "T", bg: "#0095d9", color: "#fff" },
        { key: "Ginza a", name: "Ginza Line", code: "G", bg: "#ff9500", color: "#fff" },
        { key: "Metro Ginza", name: "Ginza Line", code: "G", bg: "#ff9500", color: "#fff" },
        { key: "Yurikamome", name: "Yurikamome", code: "U", bg: "#004098", color: "#fff" },
        { key: "Metro Hibiya", name: "Hibiya Line", code: "H", bg: "#999999", color: "#fff" },
        { key: "Oedo a", name: "Oedo Line", code: "E", bg: "#b6007a", color: "#fff" },
        { key: "JR Sobu", name: "JR Sobu", code: "JB", bg: "#ffd400", color: "#000" },
        { key: "JR Chuo", name: "JR Chuo", code: "JC", bg: "#f15a22", color: "#fff" }
    ];
    
    let badgesHTML = '';
    let matchedKeys = [];
    
    lines.forEach(line => {
        if (title.toLowerCase().includes(line.key.toLowerCase()) && !matchedKeys.includes(line.code)) {
            badgesHTML += `<span style="background:${line.bg}; color:${line.color}; padding:2px 6px; border-radius:4px; font-size:0.75rem; font-weight:bold; font-family:monospace; margin-right:5px; display:inline-block; vertical-align:middle; border:1px solid rgba(255,255,255,0.15); box-shadow:0 2px 4px rgba(0,0,0,0.3);">${line.code}</span>`;
            matchedKeys.push(line.code);
        }
    });
    
    if (badgesHTML) {
        return `<div style="display:flex; align-items:center; gap:5px; flex-wrap:wrap;">${badgesHTML}<span style="vertical-align:middle;">${title}</span></div>`;
    }
    return title;
};

// Reconstructed clean functions for script_engine.js
function renderRightPanel(data) {
    const container = document.getElementById('info-content');
    const dayIndex = travelData.indexOf(data);
    
    if (data.customRightHTML) {
        container.innerHTML = data.customRightHTML;
        return;
    }

    let alerts = getSmartAlertsHTML(data, dayIndex);
    
    window.timelineGastroTrackers = {};
    window.usedGastroIds = new Set();

    let html = `
        ${alerts}
        <div style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:10px;">
            <span style="color:var(--accent); font-weight:800; text-transform:uppercase;">${data.date}</span>
            <h2 style="font-size:1.6rem; color:white;">${data.title}</h2>
        </div>
        ${renderGastroTips(data)}
    `;

    if (data.logistics) {
        html += '<div class="logistics-box"><div class="logistics-title">LOGÍSTICA</div>';
        data.logistics.forEach(l => html += '<div class="logistics-item"><strong>' + l.title + ':</strong> ' + l.text + '</div>');
        html += '</div>';
    }

    if (data.transportTimeline) {
        html += '<div class="transport-timeline-container" style="margin-top:20px;"><div class="logistics-title" style="margin-bottom:15px;"><i class="fa-solid fa-train"></i> TRANSPORTE Y RUTA</div>';
        data.transportTimeline.forEach(item => {
            if (item.type === 'point') {
                html += '<div class="transport-point" style="display:flex; align-items:center; margin-bottom:10px;"><span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">' + item.time + '</span><div style="background:rgba(255,255,255,0.1); padding:8px 12px; border-radius:8px; display:flex; align-items:center; flex:1;"><i class="' + item.icon + '" style="color:var(--gold); margin-right:10px;"></i><span style="color:#f0f0f0;">' + item.title + '</span></div></div>';
            } else if (item.type === 'transit') {
                html += '<div class="transport-transit" style="margin-left:75px; padding:10px 0; border-left:2px dashed rgba(255,255,255,0.2); position:relative; margin-bottom:15px;"><i class="fa-solid fa-arrow-down" style="position:absolute; left:-7px; top:40%; font-size:0.8rem; color:rgba(255,255,255,0.3);"></i><div style="padding-left:15px;"><div style="color:var(--accent); font-size:0.9rem; font-weight:bold; margin-bottom:5px;">' + window.decorateTransitTitle(item.title) + '</div><div style="display:flex; gap:15px; align-items:center; margin-bottom:10px;"><div style="color:var(--gold); font-size:0.85rem; font-weight:bold;">' + item.price + '</div>' + (item.timeLabel ? '<div style="color:rgba(255,255,255,0.5); font-size:0.8rem; font-style:italic;">' + item.timeLabel + '</div>' : '') + '</div><div style="display:flex; gap:8px;">' + (item.link ? '<a href="' + item.link + '" target="_blank" class="tactical-btn" style="flex:1; text-align:center; padding:5px; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>' : '') + (item.tacticalGuideId ? '<button onclick="renderTacticalMission(\'' + item.tacticalGuideId + '\', ' + dayIndex + ')" class="tactical-btn" style="flex:1.5; text-align:center; padding:8px 5px; font-size:0.75rem; border-radius:4px; background:rgba(249,115,22,0.15); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa-solid fa-file-contract"></i> ' + (item.tacticalBtnText || 'GUÍA TÁCTICA') + '</button>' : '') + '</div></div></div>';
            }
            const fullLabel = (item.time || '') + (item.timeLabel || '');
            const isLunchTime = fullLabel.includes('12:') || fullLabel.includes('13:') || fullLabel.includes('14:');
            const isDinnerTime = fullLabel.includes('19:') || fullLabel.includes('20:') || fullLabel.includes('21:');
            if ((isLunchTime || isDinnerTime) && !window.timelineGastroTrackers[dayIndex + "_" + (isLunchTime ? 'L' : 'D')]) {
                html += window.getTimelineGastroSuggestion(getLocation(data), item.title);
                window.timelineGastroTrackers[dayIndex + "_" + (isLunchTime ? 'L' : 'D')] = true;
            }
        });
        html += '</div>';
    } else if (data.timeline) {
        let lunchAdded = false;
        let dinnerAdded = false;
        html += '<div class="timeline-container">';
        data.timeline.forEach(t => {
            html += '<div class="timeline-item"><div class="time-tag">' + t.time + '</div><div class="timeline-content"><strong class="timeline-title">' + t.title + '</strong><div class="timeline-desc">' + t.desc + '</div></div></div>';
            const isLunchTime = t.time.includes('12:') || t.time.includes('13:') || t.time.includes('14:');
            const isDinnerTime = t.time.includes('19:') || t.time.includes('20:') || t.time.includes('21:');
            if (!lunchAdded && isLunchTime) {
                html += window.getTimelineGastroSuggestion(getLocation(data), t.title + ' ' + t.desc);
                lunchAdded = true;
            }
            if (!dinnerAdded && isDinnerTime) {
                html += window.getTimelineGastroSuggestion(getLocation(data), t.title + ' ' + t.desc);
                dinnerAdded = true;
            }
        });
        html += '</div>';
    }

    if (data.prices) {
        html += '<div class="prices-box"><div class="prices-title"><i class="fa-solid fa-yen-sign"></i> GASTOS APROXIMADOS</div>';
        if (data.prices.transport) html += '<div class="prices-item"><strong>Transporte:</strong> ' + data.prices.transport + '</div>';
        if (data.prices.entrances) html += '<div class="prices-item"><strong>Entradas:</strong> ' + data.prices.entrances + '</div>';
        if (data.prices.food) html += '<div class="prices-item"><strong>Comida:</strong> ' + data.prices.food + '</div>';
        if (data.prices.total) html += '<div class="prices-item" style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.1); font-weight:700; color:var(--gold);"><strong>TOTAL:</strong> ' + data.prices.total + '</div>';
        html += '</div>';
    }

    if (data.additions && data.additions.length > 0) {
        html += '<div class="additions-box" style="margin-top:20px;"><div class="additions-title"><i class="fa-solid fa-lightbulb"></i> CONSEJOS Y ADICIONES</div>';
        data.additions.forEach(a => html += '<div class="additions-item">' + a + '</div>');
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderCenterVisual(data, mode, optData = null) {
    const card = document.getElementById('visual-card');
    const dayIdx = travelData.indexOf(data);
    const location = getLocation(data);

    let tacticalHeaderBtn = '';
    if (data.day === 16) {
        tacticalHeaderBtn = '<div class="op-retorno-center-btn" style="margin-top:20px; display:flex; justify-content:center; width:100%;"><button onclick="renderTacticalMission(\'mission_fuji_excursion\', ' + dayIdx + ')" style="padding:10px 20px; background:rgba(249,115,22,0.2); border:2px solid var(--accent); color:white; font-weight:bold; border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px; box-shadow: 0 0 20px rgba(249,115,22,0.4); animation: pulse 2s infinite; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;"><i class="fa-solid fa-file-contract" style="font-size:1.1rem;"></i> 🚀 ABRIR MANUAL DE TRASLADO (Operación Retorno)</button></div>';
    } else if (data.day === 6) {
        tacticalHeaderBtn = '<div class="op-retorno-center-btn" style="margin-top:20px; display:flex; justify-content:center; width:100%;"><button onclick="renderTacticalMission(\'mission_osaka_to_kyoto\', ' + dayIdx + ')" style="padding:10px 20px; background:rgba(0,243,255,0.2); border:2px solid var(--neon-blue); color:white; font-weight:bold; border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px; box-shadow: 0 0 20px rgba(0,243,255,0.4); animation: pulse 2s infinite; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;"><i class="fa-solid fa-train" style="font-size:1.1rem;"></i> 🚄 ABRIR MANUAL DE VIAJE A KIOTO</button></div>';
    } else if (data.day === 10) {
        tacticalHeaderBtn = '<div class="op-retorno-center-btn" style="margin-top:20px; display:flex; justify-content:center; width:100%;"><button onclick="renderTacticalMission(\'mission_takkyubin_kyoto_tokyo\', ' + dayIdx + ')" style="padding:10px 20px; background:rgba(139,92,246,0.2); border:2px solid var(--neon-purple); color:white; font-weight:bold; border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px; box-shadow: 0 0 20px rgba(139,92,246,0.4); animation: pulse 2s infinite; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;"><i class="fa-solid fa-suitcase-rolling" style="font-size:1.1rem;"></i> 📦 MANUAL: ENVÍO MALETAS A TOKIO</button></div>';
    } else if (data.day === 11) {
        tacticalHeaderBtn = '<div class="op-retorno-center-btn" style="margin-top:20px; display:flex; justify-content:center; width:100%;"><button onclick="renderTacticalMission(\'mission_kyoto_to_okuhida\', ' + dayIdx + ')" style="padding:10px 20px; background:rgba(16,185,129,0.2); border:2px solid var(--success); color:white; font-weight:bold; border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px; box-shadow: 0 0 20px rgba(16,185,129,0.4); animation: pulse 2s infinite; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;"><i class="fa-solid fa-mountain-sun" style="font-size:1.1rem;"></i> 🏔️ GUIA TRANSPORTE KYOTO ONSEN</button></div>';
    } else if (data.day === 13) {
        tacticalHeaderBtn = '<div class="op-retorno-center-btn" style="margin-top:20px; display:flex; justify-content:center; width:100%;"><button onclick="renderTacticalMission(\'mission_takayama_to_fuji\', ' + dayIdx + ')" style="padding:10px 20px; background:rgba(249,115,22,0.2); border:2px solid var(--accent); color:white; font-weight:bold; border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px; box-shadow: 0 0 20px rgba(249,115,22,0.4); animation: pulse 2s infinite; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;"><i class="fa-solid fa-bus" style="font-size:1.1rem;"></i> 🗺️ GUIA TRANSPORTE A FUJI</button></div>';
    }

    if (data.customCenterHTML && (mode === 'selector' || mode === 'static')) {
        card.innerHTML = data.customCenterHTML;
        return;
    }

    const getPDFIcons = (loc) => {
        if (!loc) return '';
        const l = loc.toLowerCase();
        let pdfs = [];
        if (l.includes('osaka')) {
            pdfs = [{ file: 'metro osaka.pdf', icon: 'fa-subway', title: 'Metro Osaka' },{ file: 'osaka_metro_map.pdf', icon: 'fa-train-subway', title: 'Mapa Metro' },{ file: 'map_osaka jr.pdf', icon: 'fa-train', title: 'JR Osaka' },{ file: 'station_osaka.pdf', icon: 'fa-compass', title: 'Estación Osaka' }];
        } else if (l.includes('kyoto') || l.includes('kioto')) {
            pdfs = [{ file: 'kyoto Travel Map Subway & Bus Navi.pdf', icon: 'fa-bus', title: 'Bus/Metro Kyoto' },{ file: 'kyoto Travel Map Subway & Bus Navi front.pdf', icon: 'fa-map', title: 'Mapa Kyoto frontal' },{ file: 'map_kyoto_metro.pdf', icon: 'fa-subway', title: 'Mapa Metro' }];
        } else if (l.includes('tokio') || l.includes('tokyo')) {
            pdfs = [{ file: 'map_tokyo_metro.pdf', icon: 'fa-subway', title: 'Metro Tokio' },{ file: 'sibuya maps.pdf', icon: 'fa-compass', title: 'Mapa Shibuya' },{ file: 'sibuya maps 2.pdf', icon: 'fa-map-location-dot', title: 'Mapa Shibuya 2' },{ file: 'Akijabara tower maps.pdf', icon: 'fa-building', title: 'Mapa Akihabara' }];
        } else if (l.includes('alpes') || l.includes('takayama')) {
            pdfs = [{ file: 'TAKAYAMA_walking_map_en.pdf', icon: 'fa-person-walking', title: 'Mapa Takayama' }];
        } else if (l.includes('kix')) {
            pdfs = [{ file: 'Plano Terminal KIX (Andén 5, Airport Limousine Bus a Umeda).pdf', icon: 'fa-bus-simple', title: 'Bus KIX Umeda' }];
        }
        if (pdfs.length === 0) return '';
        return '<div class="pdf-downloads-wrapper" style="width:100%; display:flex; justify-content:flex-end; max-width:100%;"><div class="pdf-downloads-orange" style="display:flex; gap:8px; flex-wrap:nowrap; overflow-x:auto; overflow-y:visible; justify-content:flex-start; margin-top:10px; padding-bottom:5px; scrollbar-width:none; max-width:100%;">' + pdfs.map(p => '<a href="pdf/' + p.file + '" download title="' + p.title + '" style="background:rgba(249, 115, 22, 0.15); border:1px solid #f97316; color:#f97316; padding:6px 12px; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:6px; text-decoration:none; transition:all 0.3s ease; box-shadow: 0 0 10px rgba(249, 115, 22, 0.2); white-space:nowrap; min-width: 35px; flex-shrink: 0;"><i class="fa-solid ' + p.icon + '" style="font-size:1.0rem;"></i></a>').join('') + '</div></div>';
    };

    let regionInfoSrc = '';
    if (data.day === 2) {
        regionInfoSrc = 'infografía/inf dia 1.png';
    } else if (data.day > 2) {
        const getRegionPath = (loc) => {
            if (!loc) return '';
            const l = loc.toLowerCase();
            if (l.includes('tokyo') || l.includes('tokio')) return 'infografía/inf TOKIO.png';
            if (l.includes('osaka')) return 'infografía/inf osaka.png';
            if (l.includes('kyoto') || l.includes('kioto')) return 'infografía/inf kyoto.png';
            if (l.includes('alpes') || l.includes('takayama') || l.includes('shirakawa') || l.includes('kazeya')) return 'infografía/inf alpes.png';
            return 'infografía/inf.png';
        };
        regionInfoSrc = getRegionPath(location);
    }

    const regionInfographicHTML = (regionInfoSrc && data.day > 0) ? '<div class="infographic-preview-container" onclick="openInfographic(\'' + regionInfoSrc + '\')" style="width:100%; max-width:210px; transform-origin: top left;"><img src="' + regionInfoSrc + '" class="infographic-thumb" alt="Infografía Zona" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);"></div>' : '';

    let dayInfoSrcs = getBestDayInfographic(data);
    const dayInfographicHTML = (dayInfoSrcs.length > 0) ? '<div class="infographic-stack" style="display:flex; flex-direction:column; gap:10px;">' + dayInfoSrcs.map(src => '<div class="infographic-preview-container" onclick="openInfographic(\'' + src + '\')" style="width:100%; max-width:210px; transform-origin: top right;"><img src="' + src + '" class="infographic-thumb" alt="Infografía Día" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);"></div>').join('') + '</div>' : '';

    const hotelName = data.hotel || '';
    let hotelHTML = '';
    if (hotelName && hotelName !== 'Casa' && !hotelName.includes('vuelo') && !hotelName.includes('Vuelo')) {
        const hotelImage = data.hotelImage || '';
        const hotelGoogleLink = data.hotelGoogleLink || '';
        const hotelImgHTML = hotelImage ? '<img src="' + hotelImage + '" class="hotel-image" onerror="this.style.display=\'none\'">' : '<div class="hotel-image-placeholder"><i class="fa-solid fa-hotel"></i></div>';
        let extraAction = '';
        let badgeStyle = '';
        if (hotelName.includes('Dc桜 de Nishi') || hotelName.includes('Dc桜 de Nishi') || hotelName.includes('Dc桜の苑') || hotelName.includes('Dc Sakura')) {
            extraAction = 'onclick="window.showHotelMessage()" title="Ver Instrucciones de Check-in"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px rgba(249, 115, 22, 0.6); border: 2px solid var(--accent); animation: pulse 2s infinite;';
        } else if (hotelName.includes('Kazeya')) {
            extraAction = 'onclick="window.showKazeyaMessage()" title="Ver Reservas e Info del Ryokan"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px var(--gold); border: 2px solid var(--gold); animation: pulse 2s infinite;';
        } else if (hotelName.includes('Metropolitan') || hotelName.includes('Edmont')) {
            extraAction = 'onclick="window.showEdmontMessage()" title="Ver Info del Hotel Edmont"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px var(--neon-blue); border: 2px solid var(--neon-blue); animation: pulse 2s infinite;';
        } else if (hotelName.includes('Toyoko') || hotelName.includes('Kawaguchiko')) {
            extraAction = 'onclick="window.showToyokoMessage()" title="Ver Info del Toyoko Inn"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px var(--accent); border: 2px solid var(--accent); animation: pulse 2s infinite;';
        } else if (hotelName.includes('Residence')) {
            extraAction = 'onclick="window.showResidenceMessage()" title="Ver Info del Residence Hotel Takayama"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px var(--gold); border: 2px solid var(--gold); animation: pulse 2s infinite;';
        } else if (hotelName.includes('Kyoto Tower')) {
            extraAction = 'onclick="window.showKyotoTowerMessage()" title="Ver Info del Kyoto Tower Hotel Annex"';
            badgeStyle = 'cursor:pointer; box-shadow: 0 0 15px var(--neon-blue); border: 2px solid var(--neon-blue); animation: pulse 2s infinite;';
        }
        hotelHTML = '<div class="hotel-info-section">' + hotelImgHTML + '<div class="hotel-details"><h3 class="hotel-name">' + hotelName + '</h3></div><div class="hotel-actions"><div class="hotel-badge" ' + extraAction + ' style="' + badgeStyle + '"><i class="fa-solid fa-bed"></i></div>' + (hotelGoogleLink ? '<a href="' + hotelGoogleLink + '" target="_blank" class="hotel-google-link"><i class="fa-solid fa-map-location"></i> Maps</a>' : '') + '</div></div>';
    }

    const pdfIconsHTML = getPDFIcons(location);
    let routeMapsHTML = '';
    if (data.routeMapsLink) {
        routeMapsHTML = '<div class="route-maps-wrapper" style="margin-top:10px; display:flex; justify-content:flex-end; gap:10px;">';
        routeMapsHTML += '<a href="' + data.routeMapsLink + '" target="_blank" class="route-btn-blue pulse-blue" title="VER MAPA DE PUNTOS EN GOOGLE MAPS"><i class="fa-solid fa-map-location-dot" style="font-size:1.2rem;"></i></a>';
        routeMapsHTML += '</div>';
    }
    const mapsSectionHTML = '<div class="maps-section-column">' + (location ? '<div class="header-city-name"><i class="fa-solid fa-location-dot"></i> ' + location + '</div>' : '') + pdfIconsHTML + routeMapsHTML + '</div>';
    const titleMatch = data.title.match(/:\s*(.+)/);
    const subHeroText = titleMatch ? titleMatch[1] : data.title;
    const headerTitleHTML = '<div class="header-titles-center">' + (location ? '<h1 class="city-hero-title">' + location + '</h1>' : '') + '<p class="city-hero-subtitle">' + subHeroText + '</p>' + tacticalHeaderBtn + '</div>';
    const gastroRadarHTML = location ? '<div class="gastro-radar-wrapper"><button class="gastro-radar-btn pulse" onclick="renderRestaurantPanel(\'' + location + '\', ' + dayIdx + ')" title="Radar Gastronómico"><i class="fa-solid fa-utensils"></i></button><span class="gastro-radar-label">Radar Gastronómico</span></div>' : '';
    
    let flightIconHTML = '';
    if (data.day === 1) {
        flightIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);" onclick="openFlightSeatingModal()" title="Distribución de Asientos Vuelos"><i class="fa-solid fa-plane"></i></button><span class="gastro-radar-label" style="color:var(--neon-blue);">Asientos Vuelo</span></div>';
    }

    let taxiIconHTML = '';
    if (data.day === 2) {
        taxiIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse" style="background: rgba(249, 115, 22, 0.15); border: 2px solid var(--accent); color: var(--accent); box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);" onclick="openTaxiInstructionsModal()" title="Instrucciones Taxi"><i class="fa-solid fa-taxi"></i></button><span class="gastro-radar-label" style="color:var(--accent);">Info Taxi</span></div>';
    }
    
    const iconsGroupHTML = '<div style="display:flex; justify-content:center; align-items:flex-start; margin-top:10px;">' + gastroRadarHTML + flightIconHTML + taxiIconHTML + '</div>';

    const unifiedHeaderHTML = '<div class="excursion-page-header"><div class="header-infog-left">' + regionInfographicHTML + '</div><div class="header-title-container">' + headerTitleHTML + iconsGroupHTML + '</div><div class="header-infog-right">' + dayInfographicHTML + '</div><div class="header-hotel-container">' + hotelHTML + '</div><div class="header-icons-container">' + mapsSectionHTML + '</div></div>';

    const isExcursionMode = (mode === 'option' || mode === 'option-flexible' || mode === 'additional-excursions-list');
    if (isExcursionMode) document.body.classList.add('mode-excursion-active');
    else document.body.classList.remove('mode-excursion-active');

    if (mode === 'selector') {
        if (data.isFlexible) {
            let baseEventsHTML = '';
            if (data.base && data.base.events) {
                data.base.events.forEach(event => {
                    let eventImg = event.image ? '<img src="' + event.image + '" class="base-event-thumb" onerror="this.style.display=\'none\'">' : '';
                    if (event.id) {
                        baseEventsHTML += '<button class="timeline-item base-event-item clickable-event" onclick="selectExcursionFromCard(' + dayIdx + ', \'' + event.id + '\', this)" style="display:flex; align-items:flex-start; margin-bottom:20px; width:100%; text-align:left; border:none; background:transparent; color:inherit; font-family:inherit; cursor:pointer;"><div class="time-tag" style="min-width:60px;">' + event.time + '</div><div class="base-event-content" style="display:flex; flex:1;">' + eventImg + '<div class="base-event-text"><strong class="timeline-title" style="display:block; font-size:1.1rem; margin-bottom:5px; text-decoration:underline; text-decoration-color:var(--accent);">' + event.title + ' <i class="fa-solid fa-circle-info" style="font-size:0.8em; color:var(--accent); margin-left:5px;"></i></strong><div class="timeline-desc" style="color:#f0f0f0; display:flex; align-items:flex-start;"><i class="fa-solid fa-circle-info" style="color:var(--accent); font-size:0.8rem; margin-top:4px; margin-right:8px;"></i><span>' + event.description + '</span></div>' + (event.booking ? renderBookingBadge(event.booking, dayIdx) : '') + '</div></div></button>';
                    } else {
                        baseEventsHTML += '<div class="timeline-item base-event-item" style="display:flex; align-items:flex-start; margin-bottom:20px;"><div class="time-tag" style="min-width:60px;">' + event.time + '</div><div class="base-event-content" style="display:flex; flex:1;">' + eventImg + '<div class="base-event-text"><strong class="timeline-title" style="display:block; font-size:1.1rem; margin-bottom:5px;">' + event.title + '</strong><div class="timeline-desc" style="color:#cbd5e1;">' + event.description + '</div></div></div></div>';
                    }
                });
            }
            let complementsHTML = '';
            if (data.complements && data.complements.length > 0) {
                complementsHTML += '<div class="complements-section" style="margin-top:40px;"><h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;"><i class="fa-solid fa-plus-circle"></i> Personaliza tu día</h3><div class="excursions-grid excursions-grid-2">' + data.complements.map(comp => '<button class="excursion-card complement-card" onclick="selectExcursionFromCard(' + dayIdx + ', \'' + comp.id + '\', this)">' + (comp.image ? '<img src="' + comp.image + '" class="excursion-thumb">' : '') + '<div class="excursion-card-content"><div class="excursion-id" style="background:var(--neon-purple);">OPCIONAL</div><h3 class="excursion-title">' + comp.title + '</h3><div class="complement-meta"><span>' + comp.time + '</span> · <span>' + comp.price + '</span></div></div></button>').join('') + '</div></div>';
            }
            let addExcursionsHTML = '';
            if (data.additionalExcursions && data.additionalExcursions.length > 0) {
                const coverImg = data.additionalExcursions[0].image || '';
                const imgHTML = coverImg ? `<img src="${coverImg}" class="excursion-thumb" style="opacity:0.8;" onerror="this.style.display='none'">` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';
                addExcursionsHTML = `
                    <div class="additional-excursions-gateway" style="margin-top:40px;">
                        <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                            <i class="fa-solid fa-map-location-dot"></i> Excursiones Adicionales
                        </h3>
                        <p style="color:#94a3b8; margin-bottom:20px;">Explora más opciones para este día si prefieres desviarte de la ruta principal:</p>
                        
                        <button class="excursion-card additional-gateway-card" 
                                onclick="renderCenterVisual(travelData[${dayIdx}], 'additional-excursions-list')"
                                style="width: 100%; max-width: 500px; display: block; margin: 0; position: relative; overflow: hidden; border: 1px solid rgba(0,243,255,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                            ${imgHTML}
                            <div class="excursion-card-content" style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(15,23,42,1) 30%, transparent 100%); padding-top: 50px;">
                                <div class="excursion-id" style="background:var(--neon-blue); display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px; color:black; font-weight:bold;"><i class="fa-solid fa-plus"></i> ${data.additionalExcursions.length} OPCIONES</div>
                                <h3 class="excursion-title" style="font-size:1.3rem; color:white;">Ver Excursiones Adicionales</h3>
                            </div>
                        </button>
                    </div>
                `;
            }
            card.innerHTML = unifiedHeaderHTML + '<div class="base-itinerary-box" style="background:rgba(15, 23, 42, 0.6); padding:25px; border-radius:16px; border:1px solid rgba(255,255,255,0.1);"><div class="timeline-container" style="padding-left:20px; border-left:2px solid rgba(56, 189, 248, 0.3);">' + baseEventsHTML + '</div></div>' + complementsHTML + addExcursionsHTML;
        } else if (data.hasOptions) {
            card.innerHTML = unifiedHeaderHTML + '<div class="excursions-grid excursions-grid-3">' + data.options.map(opt => '<button class="excursion-card" onclick="renderCenterVisual(travelData[' + dayIdx + '], \'option\', travelData[' + dayIdx + '].options.find(o => o.id === \'' + opt.id + '\'))">' + (opt.image ? '<img src="' + opt.image + '" class="excursion-thumb">' : '') + '<div class="excursion-card-content"><div class="excursion-id">OPCIÓN ' + opt.id + '</div><h3 class="excursion-title">' + opt.title + '</h3><p class="excursion-desc">' + (opt.desc_short || opt.desc) + '</p></div></button>').join('') + '</div>';
        } else {
            renderCenterVisual(data, 'static');
        }
        return;
    }

    if (mode === 'additional-excursions-list') {
        let listHTML = `
            <button onclick="loadDay(${dayIdx})" class="back-itinerary-btn prominent">
                <i class="fa-solid fa-chevron-left"></i> VOLVER AL ITINERARIO
            </button>
            <div class="excursion-page-header" style="margin-top:20px; border-bottom:1px solid rgba(0, 243, 255, 0.3); padding-bottom:15px; margin-bottom:20px;">
                <h1 style="font-size:2.5rem; letter-spacing:2px; color:var(--neon-blue);"><i class="fa-solid fa-map-location-dot"></i> EXPLORACIÓN ALTERNATIVA</h1>
            </div>
            <div class="excursions-grid excursions-grid-${Math.min(data.additionalExcursions.length, 3)}">
        `;
        data.additionalExcursions.forEach(exc => {
            const excImg = exc.image || '';
            const imgHTML = excImg ? `<img src="${excImg}" class="excursion-thumb" onerror="this.style.display='none'">` : '<div class="excursion-thumb-placeholder"><i class="fa-solid fa-image"></i></div>';
            listHTML += `
                <button class="excursion-card complement-card" 
                        onclick="selectExcursionFromCard(${dayIdx}, '${exc.id}', this)">
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if ((mode === 'option' || mode === 'option-flexible') && optData) {
        Persistence.setItem('choice-' + dayIdx, optData.id);
        const isAdditionalExc = optData.id && optData.id.startsWith('add_');
        let backBtnHTML = '';
        if (isAdditionalExc) {
            backBtnHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:20px;">
                    <button onclick="loadDay(${dayIdx})" class="back-itinerary-btn prominent">
                        <i class="fa-solid fa-chevron-left"></i> VOLVER AL ITINERARIO
                    </button>
                    <button onclick="renderCenterVisual(travelData[${dayIdx}], 'selector')" class="back-itinerary-btn" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:white;">
                        <i class="fa-solid fa-list" style="margin-right:8px;"></i> MÁS OPCIONES
                    </button>
                </div>
            `;
        } else {
            backBtnHTML = `
                <button onclick="loadDay(${dayIdx})" class="back-itinerary-btn prominent">
                    <i class="fa-solid fa-chevron-left"></i> VOLVER AL ITINERARIO
                </button>
            `;
        }

        let imgSrc = optData.image || data.image || '';
        let imgHTML = imgSrc ?
            `<img src="${imgSrc}" class="cinema-mode-img" onerror="this.style.display='none'">` :
            `<div class="photo-placeholder"><i class="fa-solid fa-image"></i> Sin imagen</div>`;

        card.innerHTML = `
            ${backBtnHTML}
            <div class="excursion-detail-container">
                <div class="excursion-header">
                    ${imgHTML}
                    <div class="excursion-title-overlay">
                        <h2 class="excursion-main-title">${optData.title || optData.name}</h2>
                        <p class="excursion-subtitle">${optData.description || optData.summary || ''}</p>
                    </div>
                </div>

                <div class="excursion-content-wrapper">
                    <div class="excursion-main-column">
                        <div class="story-container" style="padding-top:0;">
                            ${optData.booking ? renderBookingBadge(optData.booking, dayIdx) : ''}
                            <div class="full-description-content">
                                ${optData.fullDesc ? optData.fullDesc : `<p>${optData.desc || optData.description || ''}</p>`}
                            </div>

                            ${optData.ivanChallenge ? `
                                <div class="mission-alert-box">
                                    <strong class="mission-alert-title">
                                        <i class="fa-solid fa-dragon"></i> MISIÓN ESPECIAL (IVÁN)
                                    </strong>
                                    <p class="mission-alert-text">${optData.ivanChallenge}</p>
                                </div>
                            ` : ''}
                            
                            ${window.renderContextualRestaurants ? window.renderContextualRestaurants(optData) : ''}
                            
                            ${optData.timeline && optData.timeline.length > 0 ? `
                                <div class="timeline-container">
                                    ${optData.timeline.map(t => `
                                        <div class="timeline-item">
                                            <div class="time-tag">${t.time}</div>
                                            <div class="timeline-content">
                                                <strong class="timeline-title">${t.title}</strong>
                                                <div class="timeline-desc">${t.desc}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="excursion-side-column">
                        <div class="quick-stats-card">
                            <h3 class="stats-title"><i class="fa-solid fa-bolt"></i> Datos de Misión</h3>
                            <div class="stat-item">
                                <i class="fa-solid fa-clock"></i>
                                <div>
                                    <span class="stat-label">Tiempo Est.</span>
                                    <span class="stat-value">${optData.time || 'Flexible'}</span>
                                </div>
                            </div>
                            ${optData.price && optData.price !== 'Gratis' ? `
                                <div class="stat-item">
                                    <i class="fa-solid fa-yen-sign"></i>
                                    <div>
                                        <span class="stat-label">Gasto Previsto</span>
                                        <span class="stat-value">${optData.price}</span>
                                    </div>
                                </div>
                            ` : `
                                <div class="stat-item">
                                    <i class="fa-solid fa-tag"></i>
                                    <div>
                                        <span class="stat-label">Coste</span>
                                        <span class="stat-value" style="color:var(--neon-blue);">Gratis</span>
                                    </div>
                                </div>
                            `}
                            <div class="stats-actions">
                                ${optData.link ? `
                                    <a href="${optData.link}" target="_blank" class="action-btn maps-btn">
                                        <i class="fa-solid fa-map-location-dot"></i> NAVEGAR MAPS
                                    </a>
                                ` : ''}
                                ${optData.tacticalGuideId ? `
                                    <button onclick="renderTacticalMission('${optData.tacticalGuideId}', ${dayIdx})" class="action-btn tactical-guide-btn">
                                        <i class="fa-solid fa-file-contract"></i> GUÍA TÁCTICA
                                    </button>
                                ` : ''}
                                ${optData.video ? `
                                    <a href="${optData.video}" target="_blank" class="action-btn video-btn">
                                        <i class="fa-brands fa-youtube"></i> VER RECONOCIMIENTO
                                    </a>
                                ` : ''}
                            </div>
                        </div>

                        ${optData.photoSpot ? `
                            <div class="photo-objective-card">
                                <i class="fa-solid fa-camera"></i>
                                <div>
                                    <span class="photo-label">OBJETIVO FOTOGRÁFICO</span>
                                    <span class="photo-value">${optData.photoSpot}</span>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                ${optData.tacticalOptions ? `
                    <div class="tactical-deployment-section">
                        <h3 class="tactical-section-title">
                            <i class="fa-solid fa-route"></i> OPCIONES DE DESPLIEGUE TÁCTICO
                        </h3>
                        <div class="tactical-options-grid">
                            ${optData.tacticalOptions.map(opt => `
                                <div class="datapad-container tactical-card">
                                    <div class="tactical-time-badge">[ ${opt.time} ]</div>
                                    <h4 class="tactical-card-title">${opt.title}</h4>
                                    <p class="tactical-card-desc">${opt.description}</p>
                                    ${opt.schedule ? `
                                        <div class="tactical-schedule">
                                            <div class="schedule-header">CRONOGRAMA_LOGÍSTICO:</div>
                                            ${opt.schedule.map(s => `
                                                <div class="schedule-row">
                                                    <span class="schedule-time">${s.time}</span>
                                                    <span class="schedule-event">${s.event}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : ''}
                                    <div class="tactical-card-actions">
                                        ${opt.buttons ? opt.buttons.map(btn => `
                                            <a href="${btn.link}" target="_blank" class="mini-tactical-btn maps">
                                                <i class="fa-solid fa-map-location-dot"></i> ${btn.text}
                                            </a>
                                        `).join('') : `
                                            <a href="${opt.link}" target="_blank" class="mini-tactical-btn maps">
                                                <i class="fa-solid fa-map-location-dot"></i> MAPS
                                            </a>
                                            <button onclick="renderTacticalMission('${opt.tacticalGuideId}', ${dayIdx})" class="mini-tactical-btn guide">
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (mode === 'static') {
        card.innerHTML = unifiedHeaderHTML + '<div class="timeline-container">' + (data.timeline || []).map(t => '<div class="timeline-item"><div class="time-tag">' + t.time + '</div><div class="timeline-content"><strong class="timeline-title">' + t.title + '</strong><div class="timeline-desc">' + t.desc + '</div></div></div>').join('') + '</div>';
    }
}

function selectExcursionFromCard(dayIndex, optionId, cardElement) {
    const data = travelData[dayIndex];
    let selectedItem = null;
    if (data.isFlexible) {
        selectedItem = (data.complements || []).find(comp => comp.id === optionId) || (data.base.events || []).find(evt => evt.id === optionId) || (data.additionalExcursions || []).find(exc => exc.id === optionId);
        if (selectedItem) renderCenterVisual(data, 'option-flexible', selectedItem);
    } else {
        selectedItem = (data.options || []).find(opt => opt.id === optionId);
        if (selectedItem) renderCenterVisual(data, 'option', selectedItem);
    }
    if (window.innerWidth < 768) window.closeMobileMenu();
}

// --- GESTIÓN DE MISIONES TÁCTICAS ---
window.tacticalMissions = {
    'mission_fuji_excursion': {
        title: "Operación Retorno",
        subtitle: "De los Lagos a la Jungla de Neón",
        steps: [
            {
                time: "09:00 – 09:30",
                title: "⛽ Operación Repostaje",
                content: "Llenar el depósito en la gasolinera más cercana a la oficina de Budget en la estación de Kawaguchiko (buscad una ENEOS u otra similar).",
                warning: "Punto Crítico: Guardad el ticket de la gasolina. Los agentes de la oficina de alquiler suelen exigirlo como prueba visual de que el depósito está lleno."
            },
            {
                time: "09:30 – 10:30",
                title: "🚗 Devolución de los Coches",
                content: "Lugar: Oficina de Budget Rent a Car (justo al lado de la estación de Kawaguchiko). Horario Límite: Se recomienda completar el trámite antes de las 10:30 para tener margen de sobra antes de que salga el tren."
            },
            {
                time: "10:55 – 12:55",
                title: "🚄 El Tren 'Fuji Excursion'",
                content: "Es el medio más eficiente, conectando la zona de los lagos con el centro de Tokio de forma directa. Salida: Estación de Kawaguchiko a las 10:55 AM. Destino: Estación de Shinjuku.",
                warning: "Reserva: Es IMPRESCINDIBLE reservar asiento con antelación por internet (aprox. 1 mes antes). Las plazas vuelan."
            },
            {
                time: "13:00 – 14:00",
                title: "🚕 Llegada a Tokio y Traslado al Hotel",
                content: "A las 12:55 llegaréis a Shinjuku. Mover a 8 personas con equipaje puede ser abrumador. Recomendado: Tomad 2 taxis furgoneta grandes hacia el barrio de Iidabashi. El trayecto dura unos 15 minutos y cuesta unos 2.000 JPY por taxi."
            }
        ]
    },
    'mission_osaka_to_kyoto': {
        title: "Manual de Viaje a Kioto",
        subtitle: "Traslado de Osaka a la Ciudad de los Templos",
        steps: [
            {
                time: "09:00",
                title: "1. Salida del Hotel en Osaka",
                content: "Salida del hotel Dc桜の苑-難波南店. Caminata de aproximadamente 8 minutos hasta la Estación Shin-Imamiya (JR)."
            },
            {
                time: "09:15",
                title: "2. Primer Tramo: Shin-Imamiya ➔ Estación de Osaka",
                content: "Transporte: JR Osaka Loop Line (Inner). Salida estimada a las 09:15. Duración: 15 minutos. Precio: 190 JPY (se paga con tarjeta IC)."
            },
            {
                time: "09:40",
                title: "3. Transbordo en la Estación de Osaka",
                content: "Acción: Al llegar a la Estación de Osaka, debéis cambiar de andén. Dirigíos a los Andenes 7-9.",
                warning: "Logística de grupo: Es una estación grande; mantened al grupo de 8 unido y seguid las señales de la JR Kyoto Line."
            },
            {
                time: "10:00",
                title: "4. Segundo Tramo: Osaka ➔ Kioto",
                content: "Transporte: JR Special Rapid Service (Kyoto Line). Frecuencia: Cada 15 min. Duración: 29 min. Precio: 580 JPY.",
                warning: "Consejo para el equipaje: Se recomienda subir al primer o último vagón del tren, ya que suelen tener más espacio para las maletas."
            },
            {
                time: "10:30",
                title: "5. Llegada a Kioto y Check-in",
                content: "Llegada: Estación de Kioto. Caminata al Hotel: Kyoto Tower Hotel Annex (3 min desde Salida Central).",
                warning: "Gestión de maletas: Al llegar, podréis realizar el check-in o dejar vuestras maletas en la recepción para empezar las visitas del día."
            }
        ],
        footer: `
            <div style="background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--neon-blue); margin-top:0;"><i class="fa-solid fa-credit-card"></i> Resumen de compra y pago</h4>
                <p style="font-size:0.9rem; color:white; margin-bottom:0;">Usad la tarjeta IC (Suica/Pasmo/ICOCA). Costo total: ~1.000 JPY por persona.</p>
            </div>
            <div style="background:rgba(249,115,22,0.1); border:1px solid var(--accent); border-radius:12px; padding:15px; margin-top:15px;">
                <h4 style="color:var(--accent); margin-top:0;"><i class="fa-solid fa-truck-ramp-box"></i> Nota sobre el equipaje</h4>
                <p style="font-size:0.9rem; color:white; margin-bottom:0;">Si enviasteis las maletas el día anterior por Takkyubin, os estarán esperando en el hotel de Kioto.</p>
            </div>
        `
    },
    'mission_kyoto_to_okuhida': {
        title: "Guía Transporte: Kyoto ➔ Onsen",
        subtitle: "Rumbo a los Alpes Japoneses (Okuhida)",
        steps: [
            {
                time: "07:00",
                title: "1. Hora de Levantarse & Check-out",
                content: "Reunión en el lobby a las 07:45. Tened listas las mochilas de mano. Recordad que el equipaje grande ya se envió por Takkyubin a Fuji/Tokio el día anterior.",
                warning: "Punto Crítico: Salir hacia la Estación de Kioto con tiempo para coger el tren de las 08:45."
            },
            {
                time: "08:45 – 09:19",
                title: "2. Tramo 1: Kioto ➔ Nagoya (Shinkansen)",
                content: "Tren: Shinkansen. Billetes YA COMPRADOS para las 08:45. Llegada puntual a Nagoya a las 09:19.",
                warning: "Billetes (8 pax): 20.680 ¥ (3 adultos + 1 niño) y 23.640 ¥ (4 adultos)."
            },
            {
                time: "10:00",
                title: "3. Tramo 2: Nagoya ➔ Takayama (Tren Escénico)",
                content: "Tren: Wide View Hida. Duración: ~2h 30min. Precio: ~6.000 JPY por persona. Vistas espectaculares del valle fluvial.",
                warning: "Reserva previa recomendable para ir todos juntos."
            },
            {
                time: "13:40",
                title: "4. Tramo 3: Takayama ➔ Okuhida (Autobús Nohi)",
                content: "Transporte: Autobús Nohi (Línea Shin-Hotaka). Duración: ~1h 30min. Tomaremos el primer bus disponible a las 13:40 tras dar una vuelta o comer por Takayama.",
                warning: "La terminal de Nohi Bus está justo al lado de la estación de tren de Takayama."
            }
        ],
        footer: `
            <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--accent); margin-top:0; border-bottom:1px solid rgba(249,115,22,0.3); padding-bottom:5px;"><i class="fa-solid fa-list-check"></i> Resumen de Compra</h4>
                <table style="width:100%; font-size:0.8rem; border-collapse:collapse; margin-top:10px; color:white;">
                    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                        <th style="text-align:left; padding:5px;">Servicio</th>
                        <th style="text-align:left; padding:5px;">Reserva</th>
                        <th style="text-align:right; padding:5px;">Precio (8 pax)</th>
                    </tr>
                    <tr>
                        <td style="padding:5px;">Shinkansen Kioto ➔ Nagoya</td>
                        <td style="padding:5px; color:var(--success); font-weight:bold;">COMPRADO</td>
                        <td style="padding:5px; text-align:right;">44.320 JPY</td>
                    </tr>
                    <tr>
                        <td style="padding:5px;">Wide View Hida</td>
                        <td style="padding:5px; color:var(--gold);">Pendiente</td>
                        <td style="padding:5px; text-align:right;">~48.000 JPY</td>
                    </tr>
                    <tr>
                        <td style="padding:5px;">Bus Nohi (13:40)</td>
                        <td style="padding:5px; color:var(--gold);">Al llegar</td>
                        <td style="padding:5px; text-align:right;">~17.600 JPY</td>
                    </tr>
                </table>
            </div>
        `
    },
    'mission_takayama_to_fuji': {
        title: "Guía Transporte: Takayama ➔ Fuji",
        subtitle: "Trayecto Alpino hacia el Monte Fuji (LIMON Bus)",
        steps: [
            {
                time: "08:40",
                title: "1. Llegada a la terminal",
                content: "Presentación 10 minutos antes en la Estación de Takayama. El autobús sale a las 08:50 puntual.",
                warning: "Billetes (8 pax): YA COMPRADOS."
            },
            {
                time: "08:50 – 13:59",
                title: "2. Trayecto en Autobús Turístico (LIMON Bus)",
                content: "Viaje directo hacia la Estación de Kawaguchiko (aprox. 5h). Disfrutad del paisaje de los Alpes hacia la región de los cinco lagos.",
                warning: "Tip: Las mejores vistas al aproximarse al Fuji suelen estar en las ventanillas del lado IZQUIERDO."
            },
            {
                time: "14:15",
                title: "3. Operación Coche de Alquiler",
                content: "Recogida de los dos vehículos en la oficina de Budget Rent a Car, situada en la propia estación de Kawaguchiko.",
                warning: "Logística: Aseguraos de tener los permisos internacionales y el grupo de 8 listo para dividirnos en los dos coches."
            }
        ],
        footer: `
            <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--accent); margin-top:0; border-bottom:1px solid rgba(249,115,22,0.3); padding-bottom:5px;"><i class="fa-solid fa-list-check"></i> Resumen de Compra</h4>
                <table style="width:100%; font-size:0.8rem; border-collapse:collapse; margin-top:10px; color:white;">
                    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                        <th style="text-align:left; padding:5px;">Servicio</th>
                        <th style="text-align:left; padding:5px;">Reserva</th>
                        <th style="text-align:right; padding:5px;">Precio Total (8 pax)</th>
                    </tr>
                    <tr>
                        <td style="padding:5px;">LIMON Bus (Takayama ➔ Fuji)</td>
                        <td style="padding:5px; color:var(--success); font-weight:bold;">COMPRADO</td>
                        <td style="padding:5px; text-align:right;">80.000 JPY</td>
                    </tr>
                </table>
            </div>
        `
    },
    'mission_takkyubin_kyoto_tokyo': {
        title: "Envío Maletas: Kioto ➔ Tokio",
        subtitle: "Servicio Takkyubin (Paso Crítico para los Alpes)",
        steps: [
            {
                time: "08:00 – 09:00",
                title: "1. Preparación en el Hotel de Kioto",
                content: "Acudid a la recepción del Kyoto Tower Hotel Annex antes de las 09:00 AM. Solicitad el servicio 'Takkyubin' para las 8 maletas grandes.",
                warning: "Destino: Hotel Metropolitan Edmont Tokyo. Es vital para viajar cómodos a los Alpes."
            },
            {
                time: "Rellenado",
                title: "2. Formulario y Pago",
                content: "Rellenad un formulario por maleta con la dirección del hotel de Tokio. Indicad claramente que la fecha de entrega es el Día 16 (11 de agosto).",
                warning: "Coste: ~2.500 JPY por maleta. Guardad siempre el resguardo de seguimiento."
            },
            {
                time: "Check-in",
                title: "3. Reencuentro en Tokio (Día 16)",
                content: "Al llegar al Hotel Metropolitan Edmont el Día 16, vuestras maletas ya os estarán esperando. Solo tendréis que confirmar vuestro equipaje al hacer el check-in.",
                warning: "Ubicación: Lobby o directamente en vuestras habitaciones."
            },
            {
                time: "Logística",
                title: "4. Kit de Transición (6 Días)",
                content: "Aseguraos de que en vuestras mochilas de mano lleváis ropa y útiles para los próximos 6 días (Alpes y Fuji).",
                warning: "No enviéis: Baterías de litio sueltas, medicación crítica ni objetos de valor extremo."
            }
        ],
        footer: `
            <div style="background:rgba(139,92,246,0.1); border:1px solid var(--neon-purple); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--neon-purple); margin-top:0;"><i class="fa-solid fa-language"></i> Frases Útiles</h4>
                <p style="font-size:0.85rem; color:white; margin-bottom:5px;"><strong>"Takkyubin o onegaishimasu"</strong> (Envío de equipaje, por favor).</p>
                <p style="font-size:0.85rem; color:white; margin-bottom:0;"><strong>"Hotel Metropolitan Edmont Tokyo made"</strong> (Hacia el Hotel Edmont Tokio).</p>
            </div>
        `
    }
};

function renderTacticalMission(missionId, dayIdx) {
    // 1. Intentar abrir como MODAL si está en el nuevo objeto tacticalMissions
    if (window.tacticalMissions && window.tacticalMissions[missionId]) {
        const mission = window.tacticalMissions[missionId];
        let modal = document.getElementById('tactical-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'tactical-modal';
            modal.className = 'tactical-modal';
            document.body.appendChild(modal);
        }
        
        let stepsHTML = '';
        mission.steps.forEach((step, idx) => {
            stepsHTML += `
                <div class="tactical-step">
                    <div class="step-header">
                        <div class="step-number">PASO ${idx + 1}</div>
                        <div class="step-time">${step.time}</div>
                    </div>
                    <h3 class="step-title">${step.title}</h3>
                    <div class="step-content">${step.content}</div>
                    ${step.warning ? `<div class="step-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${step.warning}</div>` : ''}
                </div>
            `;
        });
        
        modal.innerHTML = `
            <div class="tactical-modal-content">
                <button class="close-tactical" onclick="closeTacticalMission()">
                    <i class="fa-solid fa-times"></i>
                </button>
                <div class="tactical-header">
                    <div class="tactical-badge">MANUAL TÁCTICO</div>
                    <h1 class="tactical-title">${mission.title}</h1>
                    <p class="tactical-subtitle">${mission.subtitle}</p>
                </div>
                <div class="tactical-steps-container">
                    ${stepsHTML}
                </div>
                ${mission.footer ? `<div class="tactical-footer">${mission.footer}</div>` : ''}
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    // 2. FALLBACK: Si no está en el objeto, intentar llamar a la versión de script_tactical.js
    if (typeof renderLegacyTacticalMission === 'function') {
        renderLegacyTacticalMission(missionId, dayIdx);
    } else {
        console.error("Misión táctica no encontrada en tacticalMissions:", missionId);
    }
}

function closeTacticalMission() {
    const modal = document.getElementById('tactical-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log("Copiado al portapapeles:", text);
    });
}

window.showHotelMessage = function() {
    const existing = document.getElementById('hotel-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'hotel-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--accent); border-radius: 16px; padding: 25px; max-width: 600px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('hotel-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(249, 115, 22, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-hotel" style="font-size:3rem; color:var(--accent); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.5rem; color:var(--accent);">Dc桜の苑 - 難波南店</h2>
                <h3 style="margin:5px 0 0 0; color:#cbd5e1; font-size:1rem;">Dc Sakura Hotel - Namba South Branch</h3>
                <div style="display:inline-block; background:rgba(249, 115, 22, 0.1); border:1px solid var(--accent); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--accent); margin-top:10px;">
                    28 Jul 15:00 - 01 Aug 10:00 (4 Noches)
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Dirección Oficial -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-map-location-dot"></i> Dirección Oficial</strong>
                    <p style="margin:0 0 5px 0; font-size:0.9rem; font-family:monospace; color:white;">
                        〒557-0022, 大阪市西成区中開一丁目3番17号
                    </p>
                    <p style="margin:0; font-size:0.85rem; color:#cbd5e1;">
                        1-chōme-3-17 Nakahiraki, Nishinari Ward, Osaka, 557-0022
                    </p>
                </div>

                <!-- Método de Check-in -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-key"></i> Instrucciones de Check-in</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        El alojamiento enviará el método detallado de acceso y códigos de check-in **3 días antes de la llegada** (el 25 de Julio de 2026) directamente a través de la plataforma utilizada para reservar.
                    </p>
                </div>

                <!-- Contacto y Peticiones Especiales -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-paper-plane"></i> Contacto y Peticiones Especiales</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Booking y Airbnb:</strong> Podéis enviar cualquier petición especial o mensaje directamente a través del chat de la app.</li>
                        <li><strong>Agoda:</strong> Si la reserva se realizó por Agoda, debéis enviar un correo electrónico a: <code style="color:var(--gold); background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px;">M@dctaisei.com</code>.</li>
                    </ul>
                </div>

                <!-- Alerta de Sucursal -->
                <div style="background:rgba(239, 68, 68, 0.08); padding:12px 15px; border-radius:10px; border-left:3px solid var(--danger);">
                    <strong style="color:var(--danger); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-triangle-exclamation"></i> ALERTA TÁCTICA IMPORTANTE</strong>
                    <p style="margin:0; font-size:0.85rem; color:#fca5a5; font-weight:bold;">
                        La cadena tiene 8 sucursales en Osaka. Por favor, aseguraos de ir a la dirección indicada arriba (Namba South Branch / Nishinari Ward) y no a otra sucursal.
                    </p>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.showKazeyaMessage = function() {
    const existing = document.getElementById('kazeya-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'kazeya-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--gold); border-radius: 16px; padding: 25px; max-width: 650px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('kazeya-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(251, 191, 36, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-hot-tub-person" style="font-size:3rem; color:var(--gold); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.6rem; color:var(--gold);">Kazeya Ryokan</h2>
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Confirmación de Reserva: <strong>6666468417</strong></p>
                <div style="display:inline-block; background:rgba(251, 191, 36, 0.1); border:1px solid var(--gold); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--gold); margin-top:5px;">
                    Jueves, 6 de Agosto, 2026 (1 Noche)
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Distribución de Habitaciones -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-users"></i> Distribución del Grupo (8 personas)</strong>
                    <span style="display:block; font-size:0.8rem; color:#9ca3af; margin-bottom:5px;">6 adultos y 2 niños en 4 habitaciones:</span>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb;">
                        <li><strong>Habitación 1:</strong> 2 adultos (pareja)</li>
                        <li><strong>Habitación 2:</strong> 2 adultos (pareja)</li>
                        <li><strong>Habitación 3:</strong> 1 adulto y 1 niño</li>
                        <li><strong>Habitación 4:</strong> 1 adulto y 1 niño</li>
                    </ul>
                </div>

                <!-- Cenas y Comidas -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-utensils"></i> Régimen de Cenas y Desayunos</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Incluido:</strong> Desayuno y cena de un plato principal (pollo salteado o karaage) más acompañamientos.</li>
                        <li><strong>Mejora a Hida Beef (Plato):</strong> +2.000 yenes/persona.</li>
                        <li><strong>Mejora a Kaiseki Completo (Hida Beef Steak):</strong> +7.000 yenes/persona. Se debe reservar antes de las 17:00h 2 días antes. Exige check-in antes de las 19:00.</li>
                        <li style="color:#fca5a5;">⚠️ <strong>Crítico:</strong> Todo el grupo debe elegir el MISMO menú. No apto para vegetarianos estrictos/veganos, ni celíacos (NO preparan gluten-free).</li>
                    </ul>
                </div>

                <!-- Onsen Privado -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-bath"></i> Onsen Privado Gratis</strong>
                    <p style="margin:0; font-size:0.85rem;">Se utiliza libremente por orden de llegada cuando esté vacío. No se requiere reserva. Al ser 8 personas, hay oportunidades suficientes de disfrutarlo respetando los turnos del hotel.</p>
                </div>

                <!-- Transporte -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--accent);">
                    <strong style="color:var(--accent); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-bus"></i> Cómo Llegar (Bus o Coche)</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Nohi Bus desde Takayama:</strong> Dársena 5 en dirección a Shinhotaka-Ropeway. Bajar en parada <strong>Shinhotaka Onsenguchi (H55)</strong>. Andar 5 min recto. (~1.5h, ~2000 JPY/pax). Horarios: 13:40, 14:40, 15:40, 16:40, 17:40, 18:40 (último).</li>
                        <li><strong>Si vais en Coche (GPS):</strong> Teléfono <strong>0578-89-0112</strong> (alternativo 0578-89-2467, Hakuunsou Ryokan cercano) o Código Postal <strong>506-1421</strong>. Parking gratuito en el hotel.</li>
                    </ul>
                </div>

                <!-- Notas -->
                <div style="background:rgba(239, 68, 68, 0.05); padding:12px 15px; border-radius:10px; border-left:3px solid var(--danger);">
                    <strong style="color:var(--danger); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-circle-exclamation"></i> Tiempos y Detalles Críticos</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#fca5a5;">
                        <li><strong>Hora Límite de Check-in:</strong> Antes de las 19:00 para cenar. Si se llega después de las 20:00 sin avisar, cierran la entrada.</li>
                        <li><strong>Insectos de Montaña:</strong> Ryokan rodeado de naturaleza. Pueden colarse pequeños insectos (chinches hediondas / stink bugs). Evitar tocarlos directamente ya que desprenden fuerte olor.</li>
                        <li><strong>Pago:</strong> Se acepta tarjeta (Visa/Mastercard) en el establecimiento.</li>
                    </ul>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.showEdmontMessage = function() {
    const existing = document.getElementById('edmont-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'edmont-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--neon-blue); border-radius: 16px; padding: 25px; max-width: 650px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('edmont-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(0, 243, 255, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-building" style="font-size:3rem; color:var(--neon-blue); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.6rem; color:var(--neon-blue);">Hotel Metropolitan Edmont Tokyo</h2>
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Estación Base: <strong>Iidabashi Station</strong></p>
                <div style="display:inline-block; background:rgba(0, 243, 255, 0.1); border:1px solid var(--neon-blue); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--neon-blue); margin-top:5px;">
                    11 Ago - 18 Ago, 2026 (7 Noches)
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Datos de Ubicación y Contacto -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-map-location-dot"></i> Dirección y Contacto</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Dirección:</strong> 3-10-8 Iidabashi, Chiyoda-ku, Tokyo, 102-8130</li>
                        <li><strong>Teléfono:</strong> +81-3-3237-1111</li>
                        <li><strong>Email:</strong> <code style="color:var(--neon-blue);">front.edm@edmont.co.jp</code></li>
                    </ul>
                </div>

                <!-- Check-in / Check-out y Equipaje -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-clock"></i> Horarios y Equipaje</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Check-in:</strong> A partir de las 15:00.</li>
                        <li><strong>Check-out:</strong> Hasta las 11:00.</li>
                        <li><strong>Consigna de Equipaje:</strong> Almacenamiento gratuito antes del check-in y después del check-out el mismo día de salida.</li>
                        <li style="color:var(--gold);">⚠️ <strong>Atención colas:</strong> En días de grandes eventos (conciertos, etc.), el proceso puede ser muy lento. Emiten tickets numerados de cola por las mañanas. Consultar la web 1 semana antes.</li>
                    </ul>
                </div>

                <!-- Desayuno Buffet BELTEMPO -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-bowl-food"></i> Desayuno Buffet en BELTEMPO (6:30 - 10:00 AM)</strong>
                    <p style="margin:0 0 5px 0; font-size:0.85rem;">Se puede añadir y pagar en el mismo día. Precios especiales con descuento para huéspedes:</p>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb;">
                        <li><strong>Adultos:</strong> 2.900 JPY (Precio regular: 3.200 JPY).</li>
                        <li><strong>Niños (4-12 años):</strong> 1.600 JPY.</li>
                    </ul>
                    <span style="display:block; font-size:0.8rem; color:#9ca3af; margin-top:5px;">Platos recomendados: El bollo danés de limón "Mountain" (clásico del hotel), desayuno tradicional japonés (pescado a la plancha, natto, sopa miso), Bread Pudding o Curry.</span>
                </div>

                <!-- Niños en Habitación -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--accent);">
                    <strong style="color:var(--accent); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-child"></i> Política de Menores</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Menores de 6 años:</strong> Gratis si comparten cama existente con un adulto.</li>
                        <li><strong>Mayores de 7 años (o menores de 6 que requieran cama):</strong> Se asigna y cobra cama individual. Contactar con antelación si se requiere cama extra para menor de 6.</li>
                    </ul>
                </div>

                <!-- Instalaciones y Restaurantes -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #8b5cf6;">
                    <strong style="color:#8b5cf6; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-utensils"></i> Instalaciones y Restaurantes (Cierres)</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb;">
                        <li>Dispone de <strong>Laundry Lounge</strong> (8 lavadoras y secadoras con monedas) y <strong>Gimnasio</strong>.</li>
                        <li>5 restaurantes (Sushi, Teppanyaki, Bar, etc.).</li>
                        <li style="color:#fca5a5;">⚠️ <strong>Cierres semanales:</strong>
                            <br>- Rest. Japonés (Hirakawa, Yamahiko, Umihiko): Cerrados los <strong>lunes</strong>.
                            <br>- Rest. Chino (Nangoku Syuka): Cerrado los <strong>martes</strong>.
                            <br>- Bar (Carousel): Cerrado <strong>domingos y festivos</strong>.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.showToyokoMessage = function() {
    const existing = document.getElementById('toyoko-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'toyoko-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--accent); border-radius: 16px; padding: 25px; max-width: 650px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('toyoko-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(249, 115, 22, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-hotel" style="font-size:3rem; color:var(--accent); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.6rem; color:var(--accent);">Toyoko Inn Fuji Kawaguchiko Ohashi</h2>
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe Brasero Moreno</strong></p>
                <div style="display:inline-block; background:rgba(249, 115, 22, 0.1); border:1px solid var(--accent); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--accent); margin-top:5px;">
                    Sáb, 8 Ago - Mar, 11 Ago, 2026 (3 Noches)
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Autobús de Enlace Gratuito -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-bus-simple"></i> Traslado Gratuito (Shuttle Bus)</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Parada en Estación:</strong> Se realiza en la parada <strong>Número 10</strong> de la Estación de Kawaguchiko.</li>
                        <li><strong>Frecuencias/Horarios:</strong> Ver imagen o folleto de horarios adjunto en recepción.</li>
                        <li><strong>Buses de Conexión:</strong> Si deseáis tomar autobuses con destino a <strong>Mishima, Gotemba u Otsuki</strong>, se pueden reservar por anticipado mediante los enlaces del proveedor de reservas.</li>
                    </ul>
                </div>

                <!-- Equipaje -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-suitcase-rolling"></i> Consigna de Equipaje</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        Podéis guardar el equipaje de forma gratuita en los <strong>casilleros de autoservicio (self-service lockers)</strong> situados en el vestíbulo de la 1ª planta, tanto antes del check-in como después del check-out el mismo día de la estancia.
                    </p>
                </div>

                <!-- Modificaciones y Emergencias -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-circle-question"></i> Gestión de la Reserva</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Cambios / Cancelaciones:</strong> Deben realizarse a través de Booking.com dentro del período de cancelación gratuita. El hotel no puede gestionarlos directamente.</li>
                        <li><strong>Teléfono de contacto directo:</strong> <code style="color:var(--gold); background:rgba(0,0,0,0.2); padding:2px 6px; border-radius:4px;">03-6743-6650</code> (para urgencias inevitables durante el viaje).</li>
                    </ul>
                </div>

                <!-- Restricciones de Habitación -->
                <div style="background:rgba(239, 68, 68, 0.05); padding:12px 15px; border-radius:10px; border-left:3px solid var(--danger);">
                    <strong style="color:var(--danger); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-eye-slash"></i> Restricciones y Peticiones</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#fca5a5; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Vistas al Monte Fuji:</strong> El hotel <strong>no acepta solicitudes</strong> de habitaciones con vistas al Monte Fuji.</li>
                        <li><strong>Distribución de Habitaciones:</strong> El hotel intentará asignar habitaciones lo más cercanas/contiguas posible, aunque dependerá de la disponibilidad y el tipo de habitación.</li>
                        <li><strong>Capacidad Máxima:</strong> El establecimiento no cuenta con habitaciones capaces de alojar a más de 3 adultos.</li>
                        <li><strong>Cambios de Habitación:</strong> Si deseáis solicitar un tipo de habitación distinto al reservado, se gestionará bajo disponibilidad en el mismo día del check-in, aplicando el cargo adicional correspondiente.</li>
                    </ul>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.showResidenceMessage = function() {
    const existing = document.getElementById('residence-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'residence-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--gold); border-radius: 16px; padding: 25px; max-width: 650px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('residence-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(212, 175, 55, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-hotel" style="font-size:3rem; color:var(--gold); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.6rem; color:var(--gold);">Residence Hotel Takayama Station</h2>
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe Brasero Moreno</strong></p>
                <div style="display:inline-block; background:rgba(212, 175, 55, 0.1); border:1px solid var(--gold); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--gold); margin-top:5px;">
                    Vie, 7 Ago - Sáb, 8 Ago, 2026 (1 Noche)
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Horario de Check-in -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-clock"></i> Horario de Entrada (Check-in)</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        El horario de check-in es de <strong>15:00 a 24:00</strong>. Si prevés llegar más tarde de las 24:00, es obligatorio avisar al hotel con antelación para coordinar la entrada.
                    </p>
                </div>

                <!-- Equipamiento de las Habitaciones -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-kitchen-set"></i> Cocina y Lavandería Privadas</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        Todas las habitaciones están completamente equipadas e incluyen una <strong>cocina</strong> y una <strong>lavadora/secadora (laundry/dryer machine)</strong> privada.
                    </p>
                </div>

                <!-- Limitación de Agua Caliente -->
                <div style="background:rgba(239, 68, 68, 0.05); padding:12px 15px; border-radius:10px; border-left:3px solid var(--danger);">
                    <strong style="color:var(--danger); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-droplet-slash"></i> Límite de Agua Caliente</strong>
                    <p style="margin:0; font-size:0.85rem; color:#fca5a5;">
                        El calentador de agua tiene un límite de capacidad por uso de aproximadamente <strong>600 litros</strong> (equivalente a unos <strong>40-60 minutos</strong> de ducha continuados). Por favor, haced un uso responsable para evitar cortes de agua caliente.
                    </p>
                </div>

                <!-- Parking y Normas -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-square-parking"></i> Parking y Normativa de Humo</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Aparcamiento:</strong> Situado en la parte trasera del hotel, por orden de llegada (sin reserva previa) a un precio de <strong>800 JPY</strong> por noche.</li>
                        <li><strong>Espacio sin Humo:</strong> Todas las habitaciones son 100% no fumadores. Existe una zona habilitada para fumar exclusivamente en la 1ª planta (1F).</li>
                        <li><strong>Desayuno:</strong> El alojamiento no incluye servicio de desayuno.</li>
                    </ul>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.showKyotoTowerMessage = function() {
    const existing = document.getElementById('kyoto-tower-msg-modal');
    if (existing) existing.remove();
    const overlay = document.createElement('div');
    overlay.id = 'kyoto-tower-msg-modal';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15,23,42,0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.onclick = function(e) { if(e.target === overlay) overlay.remove(); };
    
    overlay.innerHTML = `
        <div style="background: linear-gradient(145deg, #111827, #1f2937); border: 2px solid var(--neon-blue); border-radius: 16px; padding: 25px; max-width: 650px; width: 95%; max-height: 90vh; overflow-y: auto; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.8); position:relative; animation: slideIn 0.3s ease-out;" class="custom-scroll">
            <button onclick="document.getElementById('kyoto-tower-msg-modal').remove()" style="position:absolute; top:15px; right:15px; background:transparent; border:none; color:white; font-size:1.5rem; cursor:pointer;"><i class="fa-solid fa-times"></i></button>
            
            <div style="text-align:center; margin-bottom:20px; border-bottom: 1px solid rgba(0, 243, 255, 0.2); padding-bottom: 15px;">
                <i class="fa-solid fa-hotel" style="font-size:3rem; color:var(--neon-blue); margin-bottom:10px;"></i>
                <h2 style="margin:0; font-size:1.6rem; color:var(--neon-blue);">Kyoto Tower Hotel Annex</h2>
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe Brasero Moreno</strong></p>
                <div style="display:inline-block; background:rgba(0, 243, 255, 0.1); border:1px solid var(--neon-blue); padding:5px 12px; border-radius:20px; font-weight:bold; font-size:0.85rem; color:var(--neon-blue); margin-top:5px;">
                    Sáb, 1 Ago - Jue, 6 Ago, 2026 (5 Noches)
                </div>
                <div style="margin-top:8px; font-size:0.95rem; color:var(--gold); font-weight:bold;">
                    Total Reserva: JPY 223,472.52
                </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:15px; font-size:0.9rem; line-height:1.5; color:#cbd5e1;">
                
                <!-- Tasa de Alojamiento Obligatoria -->
                <div style="background:rgba(255,165,0,0.05); padding:12px 15px; border-radius:10px; border-left:3px solid var(--gold);">
                    <strong style="color:var(--gold); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-receipt"></i> Tasa de Alojamiento en Kioto (Obligatoria)</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        Los huéspedes deben abonar la <strong>Tasa de Alojamiento (Accommodation Tax)</strong> de Kioto directamente en la recepción del hotel. Este recargo obligatorio <strong>no está incluido</strong> en el precio total de la reserva.
                    </p>
                </div>

                <!-- Equipaje -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid #10b981;">
                    <strong style="color:#10b981; display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-suitcase-rolling"></i> Recepción y Consigna de Equipaje</strong>
                    <p style="margin:0; font-size:0.85rem;">
                        El hotel puede guardar vuestro equipaje de forma gratuita en recepción tanto <strong>antes de realizar el check-in</strong> como <strong>después de realizar el check-out</strong>.
                    </p>
                </div>

                <!-- Tarifas y Niños -->
                <div style="background:rgba(255,255,255,0.03); padding:12px 15px; border-radius:10px; border-left:3px solid var(--neon-blue);">
                    <strong style="color:var(--neon-blue); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-child"></i> Número de Huéspedes y Niños</strong>
                    <ul style="margin:0; padding-left:20px; font-size:0.85rem; color:#e5e7eb; display:flex; flex-direction:column; gap:4px;">
                        <li><strong>Precisión en la Reserva:</strong> El precio total varía según la cantidad de huéspedes declarados. Si hay discrepancias con el número real de personas, se cobrará un cargo adicional.</li>
                        <li><strong>Niños (Edad de Primaria o inferior):</strong> Se alojan de forma gratuita si comparten cama con un adulto (máximo 1 niño por cama/adulto). <em>No incluye ropa de cama ni desayuno para los niños compartidos.</em></li>
                        <li><strong>Niños Mayores:</strong> Los niños que cursen primaria o superior se cobrarán con tarifa completa de adulto.</li>
                    </ul>
                </div>

                <!-- Aviso de Obras de Renovación -->
                <div style="background:rgba(239, 68, 68, 0.05); padding:12px 15px; border-radius:10px; border-left:3px solid var(--danger);">
                    <strong style="color:var(--danger); display:block; margin-bottom:5px; font-size:0.95rem;"><i class="fa-solid fa-person-digging"></i> Aviso: Obras de Renovación Exterior</strong>
                    <p style="margin:0 0 5px 0; font-size:0.85rem; color:#fca5a5;">
                        Se han programado obras esenciales de renovación exterior en el hotel. Aunque el periodo estimado era del 15 de diciembre de 2025 al 31 de marzo de 2026, <strong>está sujeto a posibles extensiones por motivos meteorológicos</strong>.
                    </p>
                    <ul style="margin:0; padding-left:20px; font-size:0.8rem; color:#fca5a5; display:flex; flex-direction:column; gap:2px;">
                        <li><strong>Horario de Trabajo:</strong> De 9:00 AM a 6:00 PM diariamente.</li>
                        <li><strong>Molestias Potenciales:</strong> Presencia de andamios y obstrucción de vistas (paredes Este, Sur y Norte), ruidos y olores durante las horas de trabajo, y tránsito de operarios por los andamios exteriores.</li>
                    </ul>
                </div>

            </div>
        </div>
        <style>
            @keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        </style>
    `;
    document.body.appendChild(overlay);
};

window.switchFujiTab = function(tabId) {
    document.querySelectorAll('.fuji-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.fuji-tab-btn').forEach(btn => btn.classList.remove('active'));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) selectedTab.style.display = 'block';
};

window.onload = init;
