/* ==========================================
   SISTEMA DE AUTENTICACIÓN Y SEGURIDAD (SHA-256 + CARGA DINÁMICA)
   ========================================== */
async function sha256(message) {
    try {
        if (!window.crypto || !window.crypto.subtle) {
            throw new Error("API Crypto no disponible en este contexto");
        }
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } catch (e) {
        // Fallback para contextos no seguros o locales (como file://) donde subtle.digest puede dar error
        if (message === 'Family') return 'bd2d677b2ed4381b48bb1d0841052c6d076e7d634d5052e85dcbe0b8a0dedd80';
        if (message === 'Japan2026') return '173a2a1574ecef98bbbe18db6a67f17f56240817e536f5dcca7043fc6a193731';
        return 'dummy-hash-fallback';
    }
}

window.checkLogin = async function() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('login-error');
    
    try {
        const userHash = await sha256(user);
        const passHash = await sha256(pass);
        
        // Hashing de Family y Japan2026 en SHA-256
        if (userHash === 'bd2d677b2ed4381b48bb1d0841052c6d076e7d634d5052e85dcbe0b8a0dedd80' && 
            passHash === '173a2a1574ecef98bbbe18db6a67f17f56240817e536f5dcca7043fc6a193731') {
            
            localStorage.setItem('auth_session', 'authenticated_' + Date.now());
            document.getElementById('login-overlay').classList.add('hidden');
            document.body.classList.remove('auth-hidden');
            console.log('Autenticación completada');
            
            // Cargar dinámicamente el resto de la aplicación
            await loadAppAndInit();
        } else {
            showLoginError(errorMsg);
        }
    } catch (e) {
        console.error('Error durante la autenticación:', e);
        showLoginError(errorMsg);
    }
};

function showLoginError(errorMsg) {
    errorMsg.style.display = 'flex';
    const box = document.querySelector('.login-box');
    box.style.animation = 'none';
    box.offsetHeight; // trigger reflow
    box.style.animation = 'shake 0.4s ease-in-out';
}

/* ==========================================
   CARGADOR SEGURO DE SCRIPTS Y DEPENDENCIAS
   ========================================== */
async function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => {
            console.log(`Cargado dinámicamente: ${src}`);
            resolve();
        };
        s.onerror = () => reject(new Error("Error al cargar script: " + src));
        document.body.appendChild(s);
    });
}

function initSupabase() {
    const SUPABASE_URL = 'https://bgnrjfanmheylutlroia.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_2YmXljKcXIsAXTZ8_XG9SA_V2sniyXQ';
    
    try {
        const lib = window.supabase || window.supabaseJs;
        if (lib && typeof lib.createClient === 'function') {
            window.supabaseClient = lib.createClient(SUPABASE_URL, SUPABASE_KEY);
            console.log('Supabase: Cliente inicializado correctamente tras login');
        } else {
            console.error('Supabase: No se encontró la librería en window.supabase o window.supabaseJs');
        }
    } catch (e) {
        console.error('Supabase: Error durante la inicialización:', e);
    }
}

let isAppLoading = false;
async function loadAppAndInit() {
    if (isAppLoading) return;
    isAppLoading = true;
    
    const scripts = [
        "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
        "data_restaurants.js",
        "data_dias_00_08.js",
        "data_dias_09_16.js",
        "data_dias_17_24.js",
        "data_combinator.js",
        "script_tactical.js"
    ];

    console.log("Iniciando la carga segura de datos y lógica...");
    try {
        for (const src of scripts) {
            await loadScript(src);
        }
        
        initSupabase();

        if (typeof init === 'function') {
            console.log("Inicializando interfaz de usuario...");
            init();
        } else {
            console.error("Error: init() no está definido");
        }
    } catch (e) {
        console.error("Error crítico en cargador dinámico:", e);
        alert("Error de seguridad: No se pudieron cargar los datos del viaje. Comprueba tu conexión.");
    } finally {
        isAppLoading = false;
    }
}

(function initAuth() {
    const session = localStorage.getItem('auth_session');
    if (session) {
        document.documentElement.classList.add('is-authenticated');
    }
    
    function startApp() {
        const session = localStorage.getItem('auth_session');
        if (session) {
            const overlay = document.getElementById('login-overlay');
            if (overlay) overlay.classList.add('hidden');
            document.body.classList.remove('auth-hidden');
            loadAppAndInit();
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
})();

/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */
// --- MOTOR GRÁFICO ---
let map;        // Mapa principal
let previewMap; // Mapa de la ventana espía
let introVideo; // Video de portada

// --- OBTENER ESTADO DE RESERVA CON FALLBACK ---
window.getBookingStatus = function (id) {
    const localState = Persistence.getItem(id);
    if (localState !== null) {
        return localState;
    }
    
    // Fallback al estado definido por defecto en el panel de reservas del Día 0
    if (window.travelData && window.travelData[0] && window.travelData[0].bookingPanel) {
        for (const phase of window.travelData[0].bookingPanel.phases) {
            const found = phase.items.find(item => item.id === id);
            if (found) {
                return found.status === 'completed' ? 'comprado' : 'pendiente';
            }
        }
    }
    return 'pendiente';
};

// --- SISTEMA DE RESERVAS ---
window.toggleBookingStatus = function (id, dayIndex) {
    const currentStatus = window.getBookingStatus(id);
    if (currentStatus === 'comprado') {
        Persistence.setItem(id, 'pendiente');
    } else {
        Persistence.setItem(id, 'comprado');
    }

    // Si la vista de reservas críticas a pantalla completa está activa, re-renderizarla
    if (document.querySelector('.bookings-guide-container')) {
        window.openCriticalBookingsView();
        return;
    }

    // Si la guía de entradas está activa, refrescar tarjetas en caliente sin redirigir
    if (document.querySelector('.excursions-guide-container')) {
        if (typeof window.applyGuideFilters === 'function') {
            window.applyGuideFilters();
        }
        return;
    }

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
};

window.openDocument = function(name, filePath) {
    // Si es un enlace externo (Google Drive, etc.), abrir directamente sin comprobar
    if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
        window.open(filePath, '_blank');
        return;
    }

    // Si la ruta contiene 'qr/' o 'qr entrada/', definimos la ruta alternativa
    let altPath = null;
    if (filePath.includes('qr/')) {
        altPath = filePath.replace('qr/', 'qr entrada/');
    } else if (filePath.includes('qr entrada/')) {
        altPath = filePath.replace('qr entrada/', 'qr/');
    }

    // SI ESTAMOS EN PROTOCOLO LOCAL 'file://':
    // El navegador bloquea las llamadas AJAX/fetch a archivos locales por seguridad (CORS).
    if (window.location.protocol === 'file:') {
        const isImage = filePath.toLowerCase().endsWith('.png') || 
                        filePath.toLowerCase().endsWith('.jpg') || 
                        filePath.toLowerCase().endsWith('.jpeg');
        
        if (isImage) {
            // Para imágenes (QRs), podemos comprobar su existencia intentando cargarlas en un objeto Image.
            // Esto funciona perfectamente incluso bajo el esquema file://
            const img = new Image();
            img.onload = function() {
                window.open(filePath, '_blank');
            };
            img.onerror = function() {
                if (altPath) {
                    const imgAlt = new Image();
                    imgAlt.onload = function() {
                        window.open(altPath, '_blank');
                    };
                    imgAlt.onerror = function() {
                        window.showUploadHelperModal(name, filePath);
                    };
                    imgAlt.src = altPath;
                } else {
                    window.showUploadHelperModal(name, filePath);
                }
            };
            img.src = filePath;
        } else {
            // Para PDFs en file://, no hay forma segura de comprobar la existencia sin disparar error CORS.
            // Los abrimos directamente en pestaña nueva. Si no existen, el navegador mostrará su propio error 404 local.
            window.open(filePath, '_blank');
        }
        return;
    }

    // SI ESTAMOS EN UN SERVIDOR WEB (http:// o https://):
    function attemptFetch(path, fallbackPath) {
        fetch(path, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    window.open(path, '_blank');
                } else if (fallbackPath) {
                    attemptFetch(fallbackPath, null);
                } else {
                    window.showUploadHelperModal(name, filePath);
                }
            })
            .catch(() => {
                // HEAD puede fallar en algunos servidores. Probamos GET.
                fetch(path)
                    .then(res => {
                        if (res.ok) {
                            window.open(path, '_blank');
                        } else if (fallbackPath) {
                            attemptFetch(fallbackPath, null);
                        } else {
                            window.showUploadHelperModal(name, filePath);
                        }
                    })
                    .catch(() => {
                        if (fallbackPath) {
                            attemptFetch(fallbackPath, null);
                        } else {
                            window.showUploadHelperModal(name, filePath);
                        }
                    });
            });
    }

    attemptFetch(filePath, altPath);
};

window.showUploadHelperModal = function(name, filePath) {
    let modal = document.getElementById('upload-helper-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'upload-helper-modal';
        modal.className = 'upload-helper-modal';
        document.body.appendChild(modal);
    }

    const parts = filePath.split('/');
    const filename = parts.pop();
    const folder = parts.join('/') + '/';

    modal.innerHTML = `
        <div class="upload-helper-modal-content">
            <div class="upload-helper-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
                <div style="display:flex; align-items:center; gap: 10px;">
                    <i class="fa-solid fa-cloud-arrow-up upload-helper-icon" style="color:var(--neon-blue); font-size:1.5rem;"></i>
                    <h2 style="margin:0; font-size:1.2rem; color:white;">Documento no Encontrado</h2>
                </div>
                <button class="upload-helper-close" onclick="window.closeUploadHelperModal()" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
            </div>
            <div class="upload-helper-body" style="margin-top:15px; color:rgba(255,255,255,0.8);">
                <p>Para visualizar <strong>"${name}"</strong>, necesitas subir el archivo correspondiente al proyecto local en tu ordenador.</p>
                
                <div class="upload-path-box" style="background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px; margin:15px 0; font-family:monospace; font-size:0.85rem;">
                    <div style="margin-bottom:6px;"><span style="color:var(--text-secondary);">Carpeta destino:</span> <span style="color:white;">${folder}</span></div>
                    <div style="margin-bottom:6px;"><span style="color:var(--text-secondary);">Nombre archivo:</span> <span style="color:var(--neon-blue); font-weight:bold;">${filename}</span></div>
                    <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:6px; margin-top:6px;"><span style="color:var(--text-secondary);">Ruta completa:</span> <span style="color:var(--gold);">${filePath}</span></div>
                </div>

                <div class="upload-instructions" style="background:rgba(251,191,36,0.05); border-left:3px solid var(--gold); padding:10px; border-radius:4px; font-size:0.85rem;">
                    <h3 style="margin-top:0; margin-bottom:5px; color:var(--gold); font-size:0.9rem;">Instrucciones de subida:</h3>
                    <ol style="margin:0; padding-left:15px; display:flex; flex-direction:column; gap:4px;">
                        <li>Renombra tu documento local (PDF o Imagen) a: <strong style="color:white;">${filename}</strong></li>
                        <li>Cópialo en tu ordenador dentro de la carpeta del viaje: <strong style="color:white;">${folder}</strong></li>
                        <li>Una vez copiado, vuelve a pinchar sobre él para visualizarlo.</li>
                    </ol>
                </div>
            </div>
            <div class="upload-helper-footer" style="margin-top:20px; display:flex; justify-content:flex-end;">
                <button class="btn-primary-neon" onclick="window.closeUploadHelperModal()" style="background:var(--neon-blue); color:black; border:none; padding:8px 16px; border-radius:6px; font-weight:bold; cursor:pointer; box-shadow:0 0 10px rgba(0,243,255,0.3); transition:all 0.2s;">Entendido</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
};

window.closeUploadHelperModal = function() {
    const modal = document.getElementById('upload-helper-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

window.addEventListener('click', function(e) {
    const modal = document.getElementById('upload-helper-modal');
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});

window.renderBookingBadge = function (booking, dayIndex) {
    if (!booking) return '';
    const state = window.getBookingStatus(booking.id);
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
};

window.openFlightSeatingModal = function(isReturn = false) {
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
        modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
        modal.style.overflow = 'auto';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.padding = '20px';
        modal.style.boxSizing = 'border-box';
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal || e.target.tagName === 'SPAN' || e.target.classList.contains('close-btn')) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        };
    }

    const imageSrc = isReturn ? 'images/vuelo tokio - valenca asientos.png' : 'images/flight_seating_map 1.png';
    const titleText = isReturn ? 'Selección de Asientos - Vuelta' : 'Selección de Asientos - Ida';

    const contentHTML = `
        <div style="position:relative; width:100%; max-width:800px; margin:auto; background:linear-gradient(135deg, #0f172a, #1e293b); border:1px solid var(--neon-blue); border-radius:16px; padding:20px; box-shadow: 0 0 30px rgba(0, 243, 255, 0.3); color:white; font-family:'Montserrat', sans-serif;">
            <span class="close-btn" style="position:absolute; top:10px; right:20px; color:#fff; font-size:30px; font-weight:bold; cursor:pointer;">&times;</span>
            <h2 style="color:var(--neon-blue); text-align:center; margin-top:0; margin-bottom:20px; font-size:1.3rem; display:flex; align-items:center; justify-content:center; gap:10px;"><i class="fa-solid fa-plane"></i> ${titleText}</h2>
            
            <div style="text-align:center; display:flex; justify-content:center; align-items:center;">
                <img src="${imageSrc}" style="max-width:100%; max-height:80vh; object-fit:contain; border-radius:12px; border:1px solid rgba(255,255,255,0.15); box-shadow: 0 5px 25px rgba(0,0,0,0.6);">
            </div>
        </div>
    `;
    modal.innerHTML = contentHTML;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evitar scroll de la página de fondo
};

window.openTaxiInstructionsModal = function(dayNum = 2) {
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
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        };
    }

    let contentHTML = '';
    if (dayNum === 23) {
        contentHTML = `
            <div style="position:relative; width:95%; max-width:600px; margin:20px auto; background:#fff; border-radius:20px; padding:30px; color:#000; font-family: 'Inter', sans-serif; box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);">
                <span style="position:absolute; top:20px; right:25px; color:#000; font-size:40px; font-weight:bold; cursor:pointer;" onclick="document.getElementById('taxi-instructions-modal').style.display='none'">&times;</span>
                
                <div style="text-align:center; margin-bottom:25px;">
                    <i class="fa-solid fa-taxi" style="font-size:3rem; color:#f97316;"></i>
                    <h2 style="margin:10px 0 0 0; font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Traslado a Haneda</h2>
                    <p style="color:#666; margin:5px 0 0 0;">羽田空港への送迎予約</p>
                </div>

                <div style="border:3px solid #000; padding:20px; border-radius:15px; background:#f9fafb; margin-bottom:20px; text-align:center;">
                    <span style="background:#10b981; color:white; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:0.9rem;">RESERVA CONFIRMADA</span>
                    <h2 style="font-size:1.4rem; margin:15px 0 5px 0; font-weight:900;">
                        Metropolitan Edmont ➔ Haneda (HND)
                    </h2>
                    <p style="font-size:1.05rem; font-weight:700; color:#4b5563; margin:0 0 5px 0;">
                        Recogida: Martes, 18 de Agosto - 16:30 h
                    </p>
                    <p style="font-size:0.95rem; color:#6b7280; margin:0;">
                        Duración estimada: unos 29 min (directo)
                    </p>
                </div>

                <div style="font-size:1.1rem; line-height:1.6;">
                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.2rem;">[ Dirección de Recogida ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold;">Hotel Metropolitan Edmont Tokyo</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">〒102-0072 Tokyo, Chiyoda City, Iidabashi, 3-chōme−10−8</p>
                    </div>

                    <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <strong style="color:#f97316; font-size:1.2rem;">[ Para el Conductor / 運転手さんへ ]</strong>
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.15rem; background:#f3f4f6; padding:12px; border-radius:8px; line-height:1.4;">
                            Booking.comで予約されたプライベート送迎です。羽田空港の国際线ターミナル（第3ターミナル）までお願いします。
                        </p>
                        <p style="margin:5px 0 0 0; color:#555; font-size:0.9rem; font-style:italic;">
                            (Es un traslado privado reservado por Booking.com. Por favor, llévenos a la Terminal 3 de vuelos internacionales de Haneda).
                        </p>
                    </div>
                </div>

                <button onclick="document.getElementById('taxi-instructions-modal').style.display='none'" style="width:100%; margin-top:20px; background:#000; color:#fff; border:none; padding:15px; border-radius:10px; font-size:1.2rem; font-weight:bold; cursor:pointer;">
                    Cerrar / 閉じる
                </button>
            </div>
        `;
    } else {
        contentHTML = `
            <div style="position:relative; width:95%; max-width:600px; margin:20px auto; background:#fff; border-radius:20px; padding:30px; color:#000; font-family: 'Inter', sans-serif; box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);">
                <span style="position:absolute; top:20px; right:25px; color:#000; font-size:40px; font-weight:bold; cursor:pointer;" onclick="document.getElementById('taxi-instructions-modal').style.display='none'">&times;</span>
                
                <div style="text-align:center; margin-bottom:25px;">
                    <i class="fa-solid fa-taxi" style="font-size:3rem; color:#f97316;"></i>
                    <h2 style="margin:10px 0 0 0; font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Taxi Driver Instructions</h2>
                    <p style="color:#666; margin:5px 0 0 0;">タクシー運転手さんへの指示</p>
                </div>

                <div style="border:3px solid #000; padding:25px; border-radius:15px; background:#f9fafb; margin-bottom:30px;">
                    <h1 style="font-size:2.8rem; text-align:center; margin:0 0 10px 0; line-height:1.1; font-weight:900;">
                        Dc桜 de Nishi<br>難波南店
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
                        <p style="margin:5px 0 0 0; font-weight:bold; font-size:1.4rem;">予約した車両は、1台あたり9名と荷物9個 de 定员です。</p>
                        <p style="margin:2px 0 0 0; color:#666; font-size:0.9rem;">(Capacidad para 9 pax y 9 maletas por vehículo)</p>
                    </div>

                    <div style="background:#fff7ed; padding:15px; border-radius:12px; border:2px solid #fdba74;">
                        <p style="margin:0; font-weight:bold; font-size:1.5rem; text-align:center;">
                            このホテル hasta お願いします。
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
    }
    modal.innerHTML = contentHTML;
    modal.style.display = 'block';
};

window.openICCardInstructionsModal = function() {
    let modal = document.getElementById('ic-card-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ic-card-modal';
        modal.className = 'tactical-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '10000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(10, 15, 26, 0.95)';
        modal.style.backdropFilter = 'blur(10px)';
        modal.style.overflowY = 'auto';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        };
    }

    modal.innerHTML = `
        <div class="datapad-container animate-fade-in" style="width: 95%; max-width: 700px; margin: 40px auto; position: relative; max-height: 90vh; overflow-y: auto; box-shadow: 0 0 30px rgba(0, 243, 255, 0.2); border: 2px solid var(--neon-blue); background: rgba(13, 17, 23, 0.98); padding: 25px; border-radius: 16px;">
            <div class="datapad-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:12px; margin-bottom:15px;">
                <div class="datapad-mission-id" style="color:var(--neon-blue); font-family:monospace; font-weight:bold; font-size:0.85rem;">> MANUAL_TÁCTICO: TARJETA_IC_V1.0</div>
                <button onclick="document.getElementById('ic-card-modal').style.display='none'; document.body.style.overflow='auto';" 
                        style="background:rgba(239,68,68,0.15); border:1px solid var(--danger); color:var(--danger); padding:4px 10px; border-radius:6px; font-size:0.75rem; cursor:pointer; font-weight:bold; font-family:inherit; display:flex; align-items:center; gap:5px; transition:all 0.3s;">
                    <i class="fa-solid fa-xmark"></i> CERRAR
                </button>
            </div>
            
            <h1 style="display: flex; align-items: center; gap: 10px; color: var(--neon-blue); font-size:1.6rem; font-weight:bold; margin:0 0 8px 0; font-family: 'Montserrat', sans-serif;">
                <i class="fa-solid fa-credit-card"></i> 💳 GUÍA FAMILIAR: La Tarjeta IC
            </h1>
            <p style="color: var(--gold); font-size: 0.9rem; font-weight: bold; margin: 0 0 20px 0;">
                Tu llave para moverte por todo Japón (Osaka, Nara, Kioto y Tokio). Olvídate de los billetes de papel.
            </p>

            <div style="display: flex; flex-direction: column; gap: 20px; font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
                
                <!-- INTRO -->
                <div class="data-block" style="background: rgba(251,191,36,0.03); padding: 15px; border-radius: 8px; border-left: 4px solid var(--gold); border: 1px solid rgba(251,191,36,0.15); border-left-width: 4px;">
                    Para movernos por Japón (Osaka, Nara, Kioto y Tokio) no vamos a comprar billetes de papel. Usaremos una Tarjeta IC (un monedero electrónico en el móvil o en plástico). Se pasa por el torno, hace <strong>"bip"</strong> y listo.
                    <br><br>
                    Como aterrizamos en Osaka a las 19:00 y estaremos listos sobre las 21:00, aquí está el plan de acción exacto para que nadie se pierda.
                </div>

                <!-- PASO 1 -->
                <div class="data-block" style="border: 1px solid rgba(0, 243, 255, 0.15); border-left: 4px solid var(--neon-blue); background: rgba(0, 243, 255, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--neon-blue); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-mobile-screen-button"></i> 📱 PASO 1: ¿Cómo la conseguimos?
                    </div>
                    
                    <!-- Opción A -->
                    <div style="margin-bottom: 15px; border-bottom: 1px dashed rgba(255, 255, 255, 0.1); padding-bottom: 15px;">
                        <strong style="color: white; font-size: 0.95rem; display: block; margin-bottom: 5px;">Opción A: Si tienes iPhone (¡La más fácil y recomendada!)</strong>
                        <span style="font-size: 0.85rem; color: #94a3b8; display: block; margin-bottom: 10px;">No tienes que comprar nada al llegar. La configuras ahora mismo desde el sofá de tu casa en España:</span>
                        <ol style="padding-left: 20px; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
                            <li>Entra en la app <strong>Wallet (Cartera)</strong> de tu iPhone.</li>
                            <li>Pulsa el botón <strong>"+"</strong> (arriba a la derecha).</li>
                            <li>Selecciona <strong>Tarjeta de tránsito</strong> (o de transporte).</li>
                            <li>Busca <strong>"Suica"</strong> o <strong>"Pasmo"</strong>, elige una y dale a continuar.</li>
                            <li>Paga unos <strong>2.000 o 3.000 yenes</strong> con tu Apple Pay para activar el saldo inicial. ¡Y listo! Ya la tienes en el móvil antes de despegar.</li>
                        </ol>
                    </div>

                    <!-- Opción B -->
                    <div>
                        <strong style="color: white; font-size: 0.95rem; display: block; margin-bottom: 5px;">Opción B: Si tienes Android o prefieres tarjeta física de plástico</strong>
                        <span style="font-size: 0.85rem; color: #94a3b8; display: block; margin-bottom: 10px;">Como en el aeropuerto de Osaka las oficinas pueden tener colas o estar cerradas a nuestra llegada, tenéis <strong>dos momentos ideales</strong> para comprar la ICOCA física en las máquinas automáticas:</span>
                        
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
                            <span style="color: var(--neon-blue); font-weight: bold; font-size: 0.85rem; display: block; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">📍 Opción B1: En el Aeropuerto de Osaka (KIX) al llegar</span>
                            <ul style="padding-left: 18px; margin: 0; font-size: 0.8rem; display: flex; flex-direction: column; gap: 4px; color: #cbd5e1;">
                                <li>Tras recoger maletas, cruzad la pasarela hacia la estación de tren del aeropuerto.</li>
                                <li>Dirigíos a las máquinas expendedoras azules de <strong>JR West</strong> o de la línea <strong>Nankai</strong>.</li>
                            </ul>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid var(--neon-purple);">
                            <span style="color: var(--neon-purple); font-weight: bold; font-size: 0.85rem; display: block; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">📍 Opción B2: En la estación de vuestro barrio (¡Muy Recomendado!)</span>
                            <p style="margin: 0 0 5px 0; font-size: 0.8rem; color: #cbd5e1;">
                                Podéis acercaros a las máquinas automáticas de la estación de tren al lado de vuestro hotel: la <strong>Estación Shin-Imamiya</strong> (a solo 8 minutos a pie del hotel).
                            </p>
                            <ul style="padding-left: 18px; margin: 0; font-size: 0.8rem; display: flex; flex-direction: column; gap: 4px; color: #cbd5e1;">
                                <li><strong>El Día 2:</strong> Al llegar, después de hacer el check-in en el hotel, podéis dar un paseo corto hasta la estación Shin-Imamiya y comprarlas con calma.</li>
                                <li><strong>El Día 3:</strong> Por la mañana, antes de la primera excursión en Osaka, las compráis allí mismo en las máquinas justo antes de pasar por los tornos por primera vez.</li>
                            </ul>
                        </div>

                        <strong style="color: white; font-size: 0.85rem; display: block; margin-bottom: 8px;">¿Cómo comprarla en las máquinas automáticas?</strong>
                        <ol style="padding-left: 20px; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
                            <li>Cambiad el idioma de la pantalla a <strong>Español o Inglés</strong> (botón en la esquina superior derecha).</li>
                            <li>Seleccionad <strong>"Buy ICOCA"</strong> (En Osaka se llama ICOCA, funciona exactamente igual que la Suica en todo el país y os servirá incluso en Tokio).</li>
                            <li>Pagad en efectivo (Yenes). La tarjeta estándar cuesta <strong>2.000 yenes</strong> (incluye 1.500 JPY de saldo para viajar y 500 JPY de depósito).</li>
                        </ol>
                    </div>
                </div>

                <!-- PASO 2 -->
                <div class="data-block" style="border: 1px solid rgba(168, 85, 247, 0.15); border-left: 4px solid var(--neon-purple); background: rgba(168, 85, 247, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--neon-purple); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-money-bill-wave"></i> 💵 PASO 2: ¿Cuánto y cómo se carga?
                    </div>
                    <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 10px;">
                        <li><strong>Saldo inicial recomendado:</strong> Se recomienda empezar con <strong style="color: var(--gold);">5.000 Yenes por persona</strong>. Con esto cubriremos de sobra los primeros 5-6 días de rutas por Osaka, la excursión a Nara y los buses de Kioto sin tener que parar a recargar.</li>
                        <li><strong>Cómo recargar la tarjeta Digital (iPhone):</strong> Abres tu Wallet en cualquier sitio (incluso en mitad de la calle), le das a "Añadir dinero" y pagas con tu tarjeta del móvil.</li>
                        <li><strong>Cómo recargar la tarjeta Física (Plástico):</strong> Solo se puede recargar con dinero en efectivo (Yenes en billetes). Se hace en las máquinas automáticas que hay en la entrada de cualquier estación de metro o tren de Japón. Metes tu tarjeta en la ranura, introduces los billetes de yenes, seleccionas la cantidad en la pantalla y la máquina te la devuelve cargada.</li>
                    </ul>
                </div>

                <!-- PASO 3 -->
                <div class="data-block" style="border: 1px solid rgba(16, 185, 129, 0.15); border-left: 4px solid var(--success); background: rgba(16, 185, 129, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--success); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-person-walking-arrow-right"></i> 🏃‍♂️ PASO 3: ¿Cómo se utiliza en el día a día?
                    </div>
                    <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 10px;">
                        <li><strong>En el Metro y Trenes (Osaka, Nara y Tokio):</strong> Al llegar a los tornos de acceso, verás un lector digital azul. Toca con tu móvil o tu tarjeta física en el lector (no hace falta sacarla de la cartera si es física). El torno hará bip y se abrirá. Al llegar a tu destino, vuelves a tocar al salir. La pantalla del torno te mostrará cuánto te ha costado el viaje y cuánto saldo te queda.</li>
                        <li><strong>En los Autobuses urbanos (Kioto):</strong> En Kioto se sube por la puerta trasera del autobús y se sale por la delantera. Al bajarte, justo al lado del conductor, verás el lector azul. Tocas una sola vez al salir y se cobrará la tarifa plana del autobús (~230 yenes).</li>
                        <li><strong>💡 ¡Truco extra! Tiendas y Máquinas:</strong> Si os quedáis sin suelto, esta tarjeta también sirve para pagar en las máquinas expendedoras de bebidas de la calle y en los supermercados de conveniencia (7-Eleven, Lawson, FamilyMart). ¡Solo tienes que decir "IC Card" al pagar y tocar el lector de la caja!</li>
                    </ul>
                </div>

            </div>

            <div style="margin-top: 25px; text-align: center;">
                <button onclick="document.getElementById('ic-card-modal').style.display='none'; document.body.style.overflow='auto';" 
                        style="display: inline-block; padding: 12px 35px; background: linear-gradient(135deg, var(--neon-blue), #0284c7); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; font-family: inherit; font-size:0.9rem; box-shadow:0 4px 15px rgba(0,243,255,0.3); transition:all 0.3s;">
                    Entendido / OK
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.openPrintTicketModal = function() {
    let modal = document.getElementById('print-ticket-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'print-ticket-modal';
        modal.className = 'tactical-modal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '10000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(10, 15, 26, 0.95)';
        modal.style.backdropFilter = 'blur(10px)';
        modal.style.overflowY = 'auto';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        };
    }

    modal.innerHTML = `
        <div class="datapad-container animate-fade-in" style="width: 95%; max-width: 700px; margin: 40px auto; position: relative; max-height: 90vh; overflow-y: auto; box-shadow: 0 0 30px rgba(251, 191, 36, 0.2); border: 2px solid var(--gold); background: rgba(13, 17, 23, 0.98); padding: 25px; border-radius: 16px;">
            <div class="datapad-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:12px; margin-bottom:15px;">
                <div class="datapad-mission-id" style="color:var(--gold); font-family:monospace; font-weight:bold; font-size:0.85rem;">> RECORDATORIO: IMPRIMIR_BILLETES_JR</div>
                <button onclick="document.getElementById('print-ticket-modal').style.display='none'; document.body.style.overflow='auto';" 
                        style="background:rgba(239,68,68,0.15); border:1px solid var(--danger); color:var(--danger); padding:4px 10px; border-radius:6px; font-size:0.75rem; cursor:pointer; font-weight:bold; font-family:inherit; display:flex; align-items:center; gap:5px; transition:all 0.3s;">
                    <i class="fa-solid fa-xmark"></i> CERRAR
                </button>
            </div>
            
            <h1 style="display: flex; align-items: center; gap: 10px; color: var(--gold); font-size:1.6rem; font-weight:bold; margin:0 0 8px 0; font-family: 'Montserrat', sans-serif;">
                <i class="fa-solid fa-print"></i> 🎟️ Recordatorio: Imprimir Billetes JR
            </h1>
            <p style="color: white; font-size: 0.95rem; font-weight: bold; margin: 0 0 20px 0;">
                Acción recomendada en Kioto (Día 6 o Día 7)
            </p>

            <div style="display: flex; flex-direction: column; gap: 20px; font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
                
                <div class="data-block" style="background: rgba(251,191,36,0.03); padding: 15px; border-radius: 8px; border-left: 4px solid var(--gold); border: 1px solid rgba(251,191,36,0.15); border-left-width: 4px;">
                    El trayecto del <strong>Día 11 (Nagoya ➔ Takayama, en el tren expreso Wide View Hida)</strong> requiere <strong>obligatoriamente billetes físicos de cartón</strong>. No se permite acceder con QRs o billetes digitales en el móvil para este tren de JR West.
                    <br><br>
                    <strong>Recomendación:</strong> Aprovechad un momento de tranquilidad en la Estación de Kioto hoy o mañana para sacarlos de las máquinas automáticas o taquillas, y así viajar sin estrés el Día 11.
                </div>

                <div class="data-block" style="border: 1px solid rgba(0, 243, 255, 0.15); border-left: 4px solid var(--neon-blue); background: rgba(0, 243, 255, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--neon-blue); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-clipboard-list"></i> ¿Qué necesitas para imprimirlos?
                    </div>
                    <ul style="padding-left: 20px; margin: 0; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong>Tarjeta de Crédito Física:</strong> La tarjeta MasterCard terminada en <strong>7801</strong> que se usó para la compra en la web. Es necesario introducirla físicamente en la ranura de la máquina expendedora.</li>
                        <li><strong>Código PIN de 4 dígitos:</strong> El código PIN que creaste durante el proceso de compra online.</li>
                        <li><strong>Localizadores de las Reservas:</strong>
                            <br>• Reserva 1 (4 pax): <strong>[Ver PDF de Reservas]</strong>
                            <br>• Reserva 2 (4 pax): <strong>[Ver PDF de Reservas]</strong>
                        </li>
                    </ul>
                </div>

                <div class="data-block" style="border: 1px solid rgba(16, 185, 129, 0.15); border-left: 4px solid var(--success); background: rgba(16, 185, 129, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--success); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-map-location-dot"></i> ¿Dónde se imprimen?
                    </div>
                    En las <strong>máquinas verdes de venta de billetes de JR West</strong> (las que tienen lector de pasaportes incorporado) o directamente en las taquillas oficiales (llamadas <strong>Midori-no-madoguchi</strong>) de la Estación de Kioto.
                </div>

                <div class="data-block" style="border: 1px solid rgba(249, 115, 22, 0.15); border-left: 4px solid var(--accent); background: rgba(249, 115, 22, 0.02); padding: 15px; border-radius: 8px;">
                    <div style="color: var(--accent); font-weight: bold; font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-route"></i> Ruta desde el Hotel (Kyoto Tower Hotel Annex)
                    </div>
                    La Estación de Kioto se encuentra a tan solo <strong>3 minutos andando (250 metros)</strong> del hotel. Esta es la ruta exacta:
                    <ol style="padding-left: 20px; margin: 10px 0 0 0; display: flex; flex-direction: column; gap: 8px;">
                        <li>Sal de la puerta principal del hotel <strong>Kyoto Tower Hotel Annex</strong>.</li>
                        <li>Gira a la izquierda y camina unos metros hacia el sur (dirección a la gran torre de Kioto).</li>
                        <li>Cruza el paso de peatones al lado de la Torre y camina de frente.</li>
                        <li>La entrada principal de la <strong>Estación de Kioto (Salida Central / Central Gate)</strong> estará justo delante de ti.</li>
                        <li>Nada más cruzar las puertas al vestíbulo principal, a la izquierda verás la hilera de máquinas expendedoras JR verdes y la oficina de billetes JR.</li>
                    </ol>
                    <br>
                    <a href="https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=Kyoto+Station&travelmode=walking" target="_blank" class="tactical-btn" style="padding: 10px; font-size: 0.85rem; border-radius: 8px; text-decoration: none; background: rgba(249, 115, 22, 0.15); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                        <i class="fa-solid fa-map-location-dot"></i> VER RUTA EN GOOGLE MAPS
                    </a>
                </div>
                
            </div>
            
            <div style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.08); padding-top:15px; display:flex; justify-content:flex-end;">
                <button onclick="document.getElementById('print-ticket-modal').style.display='none'; document.body.style.overflow='auto';" 
                        class="tactical-btn" style="padding:8px 20px; font-size:0.85rem; border-radius:6px; background:rgba(251, 191, 36, 0.15); border:1px solid var(--gold); color:var(--gold); font-weight:bold; cursor:pointer;">
                    Entendido / OK
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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

        menu.appendChild(btn);
    });

    // NO cargar ningún día al inicio, dejar el video reproduciéndose como portada
    // Mostrar contador en la portada
    showCountdown();

    // 4. Inicializar sincronización Cloud si está configurada
    if (window.Persistence && window.Persistence.initCloudSync) {
        window.Persistence.initCloudSync();
    }

    // 5. Comprobación de versión automática al iniciar la app
    setTimeout(() => {
        if (typeof checkAppUpdates === 'function') {
            checkAppUpdates(false);
        }
    }, 1000);

    // 6. Mostrar mensaje de actualización si acabamos de actualizar
    if (localStorage.getItem('app_just_updated') === 'true') {
        localStorage.removeItem('app_just_updated');
        const updatedVersion = localStorage.getItem('app_updated_to_version');
        localStorage.removeItem('app_updated_to_version');
        setTimeout(() => {
            if (typeof showUpdateSuccessNotice === 'function') {
                showUpdateSuccessNotice(updatedVersion);
            }
        }, 1500);
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

function renderDocumentationCenter(data, standalone = false) {
    if (!data.documentation) return '';

    let categoriesHTML = data.documentation.categories.map(category => {
        let itemsHTML = category.items.map(item => {
            const isForSelectedTraveler = item.isIndividual && item.traveler === selectedTraveler;
            const itemClass = isForSelectedTraveler ? 'doc-item-highlight' : 'doc-item-normal';
            
            let iconClass = 'fa-solid fa-file-pdf';
            if (item.file.endsWith('.png') || item.file.endsWith('.jpg') || item.file.endsWith('.jpeg')) {
                iconClass = 'fa-solid fa-file-image';
            }
            if (item.name.toLowerCase().includes('qr')) {
                iconClass = 'fa-solid fa-qrcode';
            }

            return `
                <div class="doc-item ${itemClass}" onclick="window.openDocument('${item.name.replace(/'/g, "\\'")}', '${item.file}')" title="${item.name}">
                    <div class="doc-item-icon-wrapper">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="doc-item-info">
                        <span class="doc-item-name">${item.name}</span>
                        ${item.isIndividual ? `<span class="doc-item-badge">${item.traveler.substring(0, 3)}</span>` : ''}
                    </div>
                    <div class="doc-item-action">
                        <i class="fa-solid fa-arrow-up-right-from-square" title="Abrir Documento"></i>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="doc-category-card" style="border-top: 3px solid ${category.color};">
                <div class="doc-category-header">
                    <i class="${category.icon}" style="color: ${category.color};"></i>
                    <h3 style="color: ${category.color};">${category.title}</h3>
                </div>
                <div class="doc-category-items">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="docs-center-container">
            ${standalone ? '' : `
            <div class="docs-center-header">
                <h2><i class="fa-solid fa-folder-open" style="color: var(--neon-blue);"></i> Expediente de Documentación</h2>
                <p>Pincha en cualquier documento para abrirlo en una pestaña nueva o ver instrucciones de subida si aún no está subido.</p>
            </div>
            `}
            <div class="docs-grid">
                ${categoriesHTML}
            </div>
        </div>
    `;
}

window.openDocumentationCenterView = function() {
    const centerCard = document.getElementById('visual-card');
    if (!centerCard) return;
    
    document.body.classList.add('mode-excursion-active');
    
    const data = travelData[0];
    
    centerCard.innerHTML = `
        <div class="docs-guide-container" style="background: rgba(13, 17, 23, 0.85); border: 1px solid var(--neon-blue); border-radius: 16px; padding: 25px; box-shadow: 0 0 30px rgba(56, 189, 248, 0.2); backdrop-filter: blur(10px); animation: fadeIn 0.4s ease-out; color: white; font-family: 'Montserrat', sans-serif;">
            <!-- Cabecera -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(56, 189, 248, 0.3); padding-bottom: 15px; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                <h1 style="color: var(--neon-blue); margin: 0; font-size: 1.6rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 12px; font-weight: 800; text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);">
                    <i class="fa-solid fa-folder-open" style="color: var(--neon-blue); font-size: 1.8rem;"></i> EXPEDIENTE DE DOCUMENTACIÓN
                </h1>
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px; font-size: 0.75rem; letter-spacing: 0.5px; text-transform: uppercase; font-family: inherit;">
                    <i class="fa-solid fa-arrow-left"></i> Volver a Preparación
                </button>
            </div>

            <!-- Contenido -->
            ${renderDocumentationCenter(data, true)}

            <!-- Retorno al final de la página -->
            <div style="display: flex; justify-content: center; margin-top: 35px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 25px;">
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(56, 189, 248, 0.15); border: 1px solid var(--neon-blue); color: var(--neon-blue); padding: 12px 32px; border-radius: 10px; font-weight: 800; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 10px; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; font-family: inherit; box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);">
                    <i class="fa-solid fa-chevron-left"></i> Volver al Plan de Acción
                </button>
            </div>
        </div>
    `;
};

window.openCriticalBookingsView = function() {
    const centerCard = document.getElementById('visual-card');
    if (!centerCard) return;
    
    document.body.classList.add('mode-excursion-active');
    
    const data = travelData[0];
    
    centerCard.innerHTML = `
        <div class="bookings-guide-container" style="background: rgba(13, 17, 23, 0.85); border: 1px solid var(--neon-purple); border-radius: 16px; padding: 25px; box-shadow: 0 0 30px rgba(168, 85, 247, 0.2); backdrop-filter: blur(10px); animation: fadeIn 0.4s ease-out; color: white; font-family: 'Montserrat', sans-serif;">
            <!-- Cabecera -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 15px; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                <h1 style="color: var(--neon-purple); margin: 0; font-size: 1.6rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 12px; font-weight: 800; text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);">
                    <i class="fa-solid fa-calendar-check" style="color: var(--neon-purple); font-size: 1.8rem;"></i> CONTROL MAESTRO DE RESERVAS
                </h1>
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px; font-size: 0.75rem; letter-spacing: 0.5px; text-transform: uppercase; font-family: inherit;">
                    <i class="fa-solid fa-arrow-left"></i> Volver a Preparación
                </button>
            </div>

            <!-- Contenido del Control de Reservas -->
            <div class="booking-master-panel-v3" style="background: rgba(15,23,42,0.6); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 20px; box-shadow: 0 0 20px rgba(168, 85, 247, 0.05); width: 100%;">
                <div style="font-size: 0.85rem; color: rgba(255,255,255,0.7); margin-bottom: 20px; line-height: 1.5;">
                    <i class="fa-solid fa-info-circle" style="color: var(--neon-purple); margin-right: 6px;"></i>
                    Aquí puedes hacer el seguimiento del estado de reserva de los hitos críticos del viaje. Haz clic en <strong>PENDIENTE/COMPRADO</strong> para actualizar el estado.
                </div>
                
                <div class="booking-grid-v3-fullscreen" style="display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                    ${data.bookingPanel.phases.map(phase => `
                        <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); border-left: 4px solid ${phase.color};">
                            <div style="font-size:0.85rem; color:${phase.color}; font-weight:900; text-transform:uppercase; margin-bottom:12px; letter-spacing: 0.5px;">${phase.name}</div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                ${phase.items.map(item => {
                                    const isComprado = window.getBookingStatus(item.id) === 'comprado';
                                    return `
                                    <div style="font-size:0.85rem; display: flex; flex-direction: column; gap: 6px; background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.02);">
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                                            <span style="color:white; opacity: 0.9; font-weight: bold; line-height: 1.3;">${item.name}</span>
                                            <span style="color:rgba(255,255,255,0.5); font-size:0.7rem; white-space: nowrap;">${item.date}</span>
                                        </div>
                                        <div style="display: flex; gap: 8px; margin-top: 6px;">
                                            <button id="${item.id}_btn" onclick="window.toggleBookingStatus('${item.id}', 0)" 
                                                    style="background: ${isComprado ? 'var(--success)' : 'rgba(239, 68, 68, 0.2)'}; 
                                                           color: white; border: 1px solid ${isComprado ? 'var(--success)' : 'var(--danger)'}; 
                                                           padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; cursor: pointer; flex: 1; transition: all 0.3s; font-weight: bold; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                                <i class="fa-solid ${isComprado ? 'fa-check-double' : 'fa-clock'}"></i> 
                                                ${isComprado ? 'COMPRADO' : 'PENDIENTE'}
                                            </button>
                                            ${item.link ? `
                                                <a href="${item.link}" target="_blank" 
                                                   style="background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid #38bdf8; 
                                                          padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: bold;">
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

            <!-- Retorno al final de la página -->
            <div style="display: flex; justify-content: center; margin-top: 35px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 25px;">
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(168, 85, 247, 0.15); border: 1px solid var(--neon-purple); color: var(--neon-purple); padding: 12px 32px; border-radius: 10px; font-weight: 800; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 10px; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; font-family: inherit; box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);">
                    <i class="fa-solid fa-chevron-left"></i> Volver al Plan de Acción
                </button>
            </div>
        </div>
    `;
};

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

    // === TIRA DE CONTROL DE VIAJEROS (CON SELECTOR Y PROGRESO) ===
    let travelerControlStripHTML = `
        <div class="traveler-control-strip" style="margin-bottom: 25px; background: rgba(13, 17, 23, 0.4); padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; width: 100%;">
            <div class="traveler-selector-v3" style="display: flex; align-items: center; gap: 12px;">
                <div style="color: var(--neon-blue); font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; white-space: nowrap;">
                    <i class="fa-solid fa-user-gear"></i> Misión de:
                </div>
                <div class="traveler-avatars-row" style="display: flex; gap: 6px; flex-wrap: wrap;">
                    ${travelerAvatarsHTML}
                </div>
            </div>

            <div class="progress-info-compact" style="flex: 1; min-width: 240px; display: flex; align-items: center; gap: 15px;">
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
                        <div class="infographic-stack" style="display:flex; gap:15px; align-items: center; flex-wrap: wrap; margin-left: auto;">
                            ${(window.getBestDayInfographic ? window.getBestDayInfographic(data) : []).map(src => `
                                <div class="infographic-preview-container" onclick="openInfographic('${src}')" style="width:100%; max-width:120px; flex-shrink: 0;">
                                    <img src="${src}" class="infographic-thumb" alt="Infografía" style="width:100%; height:auto; box-shadow: 0 4px 15px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
                                </div>
                            `).join('')}
                            
                            <!-- Toolbar de Accesos a Subvistas -->
                            <div class="prep-access-toolbar" style="display: flex; gap: 15px; align-items: center;">
                                <!-- Guía de Entradas -->
                                <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                    <button class="prep-nav-btn prep-nav-btn-gold pulse" onclick="window.openExcursionsGuide()" title="Guía de Entradas y Excursiones">
                                        <i class="fa-solid fa-ticket"></i>
                                    </button>
                                    <span class="gastro-radar-label" style="color: var(--gold); margin-top: 4px; font-size: 0.65rem;">Entradas</span>
                                </div>

                                <!-- Expediente de Documentación -->
                                <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                    <button class="prep-nav-btn prep-nav-btn-blue" onclick="window.openDocumentationCenterView()" title="Centro de Documentación">
                                        <i class="fa-solid fa-folder-open"></i>
                                    </button>
                                    <span class="gastro-radar-label" style="color: var(--neon-blue); margin-top: 4px; font-size: 0.65rem;">Documentos</span>
                                </div>

                                <!-- Control Maestro de Reservas Críticas -->
                                <div style="display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
                                    <button class="prep-nav-btn prep-nav-btn-purple" onclick="window.openCriticalBookingsView()" title="Control Maestro de Reservas Críticas">
                                        <i class="fa-solid fa-calendar-check"></i>
                                    </button>
                                    <span class="gastro-radar-label" style="color: var(--neon-purple); margin-top: 4px; font-size: 0.65rem;">Reservas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ${travelerControlStripHTML}
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
            const state = window.getBookingStatus(act.booking.id);
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

window.getPayMethodBadge = function(item) {
    if (!item.price) return '';
    const priceClean = item.price.toLowerCase();
    const titleClean = item.title.toLowerCase();
    
    // Si es gratis o no tiene coste, no mostramos símbolo de pago
    if (priceClean.includes('gratis') || priceClean === '0' || priceClean.includes('sin coste') || priceClean.includes('libre') || priceClean.includes('incluido') || priceClean.includes('pre-pagado') || priceClean.includes('prepagado') || priceClean.includes('pre-paid')) {
        return '';
    }

    let isIC = false;
    
    // Si viene explícito en los datos
    if (item.payMethod === 'ic') isIC = true;
    else if (item.payMethod === 'other') isIC = false;
    else {
        // Reglas heurísticas basadas en títulos y precios
        if (priceClean.includes('ic') || priceClean.includes('suica') || priceClean.includes('icoca') || priceClean.includes('pasmo')) {
            isIC = true;
        } else if (titleClean.includes('metro') || titleClean.includes('subway') || titleClean.includes('yamanote') || titleClean.includes('loop line') || titleClean.includes('tren local') || titleClean.includes('monorrail') || titleClean.includes('monorail') || titleClean.includes('yurikamome') || titleClean.includes('rinkai') || titleClean.includes('chuo line') || titleClean.includes('tozai') || titleClean.includes('sobu') || titleClean.includes('bus de kioto') || titleClean.includes('autobús local') || titleClean.includes('bus local') || titleClean.includes('keihan') || titleClean.includes('hankyu') || titleClean.includes('tren jr')) {
            isIC = true;
        } else if (priceClean.includes('jpy') && !priceClean.includes('total') && !priceClean.includes('taxi') && !priceClean.includes('coche') && !priceClean.includes('shinkansen') && !priceClean.includes('hida') && !priceClean.includes('reserva') && !priceClean.includes('llegada')) {
            // Si el precio es menor de 1500 yenes y no tiene palabras clave de otros transportes
            const numberMatch = priceClean.match(/\d+/);
            if (numberMatch) {
                const val = parseInt(numberMatch[0]);
                if (val < 1500) {
                    isIC = true;
                }
            }
        }
    }

    if (isIC) {
        return '<span style="background:var(--neon-blue); color:#0a0f1a; width:18px; height:18px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.6rem; font-weight:900; font-family:monospace; margin-right:6px; box-shadow:0 0 8px rgba(0,243,255,0.4);" title="Pagar con tarjeta IC (Suica/ICOCA)">IC</span>';
    } else {
        return '<span style="background:var(--accent); color:#0a0f1a; width:18px; height:18px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:900; font-family:monospace; margin-right:6px; box-shadow:0 0 8px rgba(249,115,22,0.4);" title="Pago en Efectivo, Tarjeta o Reserva">¥</span>';
    }
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
                let ticketButtonsHTML = '';
                if (item.ticketLinks && Array.isArray(item.ticketLinks)) {
                    item.ticketLinks.forEach(ticket => {
                        ticketButtonsHTML += '<a href="' + ticket.url + '" target="_blank" class="tactical-btn" style="flex:1; text-align:center; padding:5px; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa-solid fa-ticket"></i> ' + ticket.name + '</a>';
                    });
                }
                html += '<div class="transport-transit" style="margin-left:75px; padding:10px 0; border-left:2px dashed rgba(255,255,255,0.2); position:relative; margin-bottom:15px;"><i class="fa-solid fa-arrow-down" style="position:absolute; left:-7px; top:40%; font-size:0.8rem; color:rgba(255,255,255,0.3);"></i><div style="padding-left:15px;"><div style="color:var(--accent); font-size:0.9rem; font-weight:bold; margin-bottom:5px;">' + window.decorateTransitTitle(item.title) + '</div><div style="display:flex; gap:15px; align-items:center; margin-bottom:10px;"><div style="color:var(--gold); font-size:0.85rem; font-weight:bold; display:inline-flex; align-items:center; gap:5px;">' + window.getPayMethodBadge(item) + '<span>' + item.price + '</span></div>' + (item.timeLabel ? '<div style="color:rgba(255,255,255,0.5); font-size:0.8rem; font-style:italic;">' + item.timeLabel + '</div>' : '') + '</div><div style="display:flex; gap:8px; flex-wrap:wrap;">' + (item.link ? '<a href="' + item.link + '" target="_blank" class="tactical-btn" style="flex:1; text-align:center; padding:5px; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>' : '') + ticketButtonsHTML + (item.tacticalGuideId ? '<button onclick="renderTacticalMission(\'' + item.tacticalGuideId + '\', ' + dayIndex + ')" class="tactical-btn" style="flex:1.5; text-align:center; padding:8px 5px; font-size:0.75rem; border-radius:4px; background:rgba(249,115,22,0.15); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;"><i class="fa-solid fa-file-contract"></i> ' + (item.tacticalBtnText || 'GUÍA TÁCTICA') + '</button>' : '') + '</div></div></div>';
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
        return '<div class="pdf-downloads-wrapper" style="width:100%; display:flex; justify-content:flex-end; max-width:100%;"><div class="pdf-downloads-orange" style="display:flex; gap:8px; flex-wrap:nowrap; overflow-x:auto; overflow-y:visible; justify-content:flex-start; margin-top:10px; padding-bottom:5px; scrollbar-width:none; max-width:100%;">' + pdfs.map(p => {
            const url = p.file.startsWith('http') ? p.file : 'pdf/' + p.file;
            const targetAttr = p.file.startsWith('http') ? 'target="_blank"' : 'download';
            return '<a href="' + url + '" ' + targetAttr + ' title="' + p.title + '" style="background:rgba(249, 115, 22, 0.15); border:1px solid #f97316; color:#f97316; padding:6px 12px; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:6px; text-decoration:none; transition:all 0.3s ease; box-shadow: 0 0 10px rgba(249, 115, 22, 0.2); white-space:nowrap; min-width: 35px; flex-shrink: 0;"><i class="fa-solid ' + p.icon + '" style="font-size:1.0rem;"></i></a>';
        }).join('') + '</div></div>';
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
    // 1. Radar Gastronómico (se oculta en el Día 2, se muestra en los demás días si hay localización)
    let gastroRadarHTML = '';
    if (location && data.day !== 2) {
        gastroRadarHTML = '<div class="gastro-radar-wrapper"><button class="gastro-radar-btn pulse" onclick="renderRestaurantPanel(\'' + location + '\', ' + dayIdx + ')" title="Radar Gastronómico"><i class="fa-solid fa-utensils"></i></button><span class="gastro-radar-label">Radar Gastronómico</span></div>';
    }

    // 2. Icono de Manual Tarjeta IC (se muestra en el Día 2 y Día 3)
    let icCardIconHTML = '';
    if (data.day === 2 || data.day === 3) {
        icCardIconHTML = '<div class="gastro-radar-wrapper" style="' + (data.day === 3 ? 'margin-left: 20px;' : '') + '"><button class="gastro-radar-btn pulse-cyan" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);" onclick="openICCardInstructionsModal()" title="Guía Tarjeta IC"><i class="fa-solid fa-credit-card"></i></button><span class="gastro-radar-label" style="color:var(--neon-blue);">Manual Tarjeta IC</span></div>';
    }
    
    let flightIconHTML = '';
    if (data.day === 1) {
        flightIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-cyan" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);" onclick="openFlightSeatingModal(false)" title="Distribución de Asientos Vuelos"><i class="fa-solid fa-plane"></i></button><span class="gastro-radar-label" style="color:var(--neon-blue);">Asientos Vuelo</span></div>';
    } else if (data.day === 23) {
        flightIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-cyan" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);" onclick="openFlightSeatingModal(true)" title="Distribución de Asientos Vuelos de Vuelta"><i class="fa-solid fa-plane"></i></button><span class="gastro-radar-label" style="color:var(--neon-blue);">Asientos Vuelta</span></div>';
    }

    let taxiIconHTML = '';
    if (data.day === 2) {
        taxiIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-accent" style="background: rgba(249, 115, 22, 0.15); border: 2px solid var(--accent); color: var(--accent); box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);" onclick="openTaxiInstructionsModal(2)" title="Instrucciones Taxi"><i class="fa-solid fa-taxi"></i></button><span class="gastro-radar-label" style="color:var(--accent);">Info Taxi</span></div>';
    } else if (data.day === 23) {
        taxiIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-accent" style="background: rgba(249, 115, 22, 0.15); border: 2px solid var(--accent); color: var(--accent); box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);" onclick="openTaxiInstructionsModal(23)" title="Instrucciones Taxi"><i class="fa-solid fa-taxi"></i></button><span class="gastro-radar-label" style="color:var(--accent);">Info Taxi</span></div>';
    }

        let printTicketIconHTML = '';
    if (data.day === 6 || data.day === 7) {
        printTicketIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-gold" style="background: rgba(251, 191, 36, 0.15); border: 2px solid var(--gold); color: var(--gold); box-shadow: 0 0 15px rgba(251, 191, 36, 0.4);" onclick="openPrintTicketModal()" title="Recordatorio: Imprimir Billetes JR"><i class="fa-solid fa-print"></i></button><span class="gastro-radar-label" style="color:var(--gold);">Imprimir JR</span></div>';
    }
    
    let karaokeIconHTML = '';
    if (data.day === 16 || data.day === 18) {
        karaokeIconHTML = '<div class="gastro-radar-wrapper" style="margin-left: 20px;"><button class="gastro-radar-btn pulse-cyan" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);" onclick="renderTacticalMission(\'mode_karaoke\', ' + dayIdx + ')" title="Modo Karaoke"><i class="fa-solid fa-microphone"></i></button><span class="gastro-radar-label" style="color:var(--neon-blue);">Modo Karaoke</span></div>';
    }
    
    const iconsGroupHTML = '<div style="display:flex; justify-content:center; align-items:flex-start; margin-top:10px;">' + gastroRadarHTML + icCardIconHTML + flightIconHTML + taxiIconHTML + printTicketIconHTML + karaokeIconHTML + '</div>';

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
                    let customNodeHTML = '<div class="timeline-node"><i class="' + getEventIcon(event.title, event.id) + '"></i></div>';
                    let badgesHTML = '<div class="event-badges-container">' + getEventBadges(event.title, event.id, data.day) + '</div>';
                    
                    if (event.id) {
                        baseEventsHTML += '<button class="timeline-item base-event-item clickable-event has-custom-node" onclick="selectExcursionFromCard(' + dayIdx + ', \'' + event.id + '\', this)">' +
                            customNodeHTML +
                            '<div class="time-tag">' + event.time + '</div>' +
                            '<div class="base-event-content">' +
                                eventImg +
                                '<div class="base-event-text">' +
                                    '<strong class="timeline-title">' + event.title + ' <i class="fa-solid fa-chevron-right" style="font-size:0.8em; color:var(--accent); margin-left:5px;"></i></strong>' +
                                    badgesHTML +
                                    '<div class="timeline-desc"><span>' + event.description + '</span></div>' +
                                    (event.booking ? renderBookingBadge(event.booking, dayIdx) : '') +
                                '</div>' +
                            '</div>' +
                        '</button>';
                    } else {
                        baseEventsHTML += '<div class="timeline-item base-event-item has-custom-node">' +
                            customNodeHTML +
                            '<div class="time-tag">' + event.time + '</div>' +
                            '<div class="base-event-content">' +
                                eventImg +
                                '<div class="base-event-text">' +
                                    '<strong class="timeline-title">' + event.title + '</strong>' +
                                    badgesHTML +
                                    '<div class="timeline-desc">' + event.description + '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
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
                            <i class="fa-solid fa-map-location-dot"></i> ${data.additionalExcursionsTitle || 'Excursiones Adicionales'}
                        </h3>
                        <p style="color:#94a3b8; margin-bottom:20px;">${data.additionalExcursionsSub || 'Explora más opciones para este día si prefieres desviarte de la ruta principal:'}</p>
                        
                        <button class="excursion-card additional-gateway-card" 
                                onclick="renderCenterVisual(travelData[${dayIdx}], 'additional-excursions-list')"
                                style="width: 100%; max-width: 500px; display: block; margin: 0; position: relative; overflow: hidden; border: 1px solid rgba(0,243,255,0.3); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                            ${imgHTML}
                            <div class="excursion-card-content" style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(15,23,42,1) 30%, transparent 100%); padding-top: 50px;">
                                <div class="excursion-id" style="background:var(--neon-blue); display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px; color:black; font-weight:bold;"><i class="fa-solid fa-plus"></i> ${data.additionalExcursions.length} ${data.additionalExcursionsLabel ? data.additionalExcursionsLabel.toUpperCase() : 'OPCIONES'}</div>
                                <h3 class="excursion-title" style="font-size:1.3rem; color:white;">${data.additionalExcursionsBtn || 'Ver Excursiones Adicionales'}</h3>
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
                        <div class="excursion-id" style="background:var(--neon-blue); color:black; font-weight:bold; display:inline-block; font-size:0.7rem; padding:2px 8px; border-radius:4px; margin-bottom:8px;">${data.additionalExcursionsLabel || 'ADICIONAL'}</div>
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
                        ${optData.id === 'b3' && data.day === 16 ? `
                            <div class="quick-stats-card" style="padding:0; overflow:hidden; position:relative; height: 260px; cursor:pointer; border:1px solid rgba(249, 115, 22, 0.3);" onclick="openInfographic('infografía/Festival_de_Verano_de_Ueno.png')" title="Ampliar Infografía de Ueno">
                                <img src="infografía/Festival_de_Verano_de_Ueno.png" style="width:100%; height:100%; object-fit:cover; object-position:top; display:block;" />
                                <div style="position:absolute; bottom:0; left:0; width:100%; padding:10px; background:linear-gradient(transparent, rgba(0,0,0,0.85)); color:white; font-size:0.75rem; text-align:center; font-weight:bold; box-sizing:border-box; display:flex; align-items:center; justify-content:center; gap:5px;">
                                    <i class="fa-solid fa-expand" style="color:var(--accent);"></i> VER INFOGRAFÍA COMPLETA
                                </div>
                            </div>
                        ` : `
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
                        `}

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

function getEventIcon(title, id) {
    const t = (title || "").toLowerCase();
    const i = (id || "").toLowerCase();
    
    if (t.includes("templo") || t.includes("senso-ji") || t.includes("santuario") || t.includes("jinja") || t.includes("temple") || t.includes("kaminarimon") || t.includes("pagoda") || t.includes("torii")) {
        return "fa-solid fa-torii-gate";
    }
    if (t.includes("skytree") || t.includes("torre") || t.includes("tower") || t.includes("tokyo tower") || t.includes("mirador") || t.includes("observatorio") || t.includes("sky")) {
        return "fa-solid fa-tower-broadcast";
    }
    if (t.includes("akihabara") || t.includes("game") || t.includes("otaku") || t.includes("retro") || t.includes("frikismo") || t.includes("maid") || t.includes("gaming") || t.includes("nintendo") || t.includes("shibuya crossing") || t.includes("gi-go") || t.includes("gigo") || t.includes("gundam")) {
        return "fa-solid fa-gamepad";
    }
    if (t.includes("hotel") || t.includes("alojamiento") || t.includes("check-in") || t.includes("regreso") || t.includes("dormir") || t.includes("llegada hotel") || t.includes("check in")) {
        return "fa-solid fa-hotel";
    }
    if (t.includes("rio") || t.includes("crucero") || t.includes("barco") || t.includes("fluvial") || t.includes("water bus") || t.includes("hotaluna") || t.includes("sumida") || t.includes("embarcadero")) {
        return "fa-solid fa-ship";
    }
    if (t.includes("metro") || t.includes("tren") || t.includes("shinkansen") || t.includes("linea") || t.includes("transit") || t.includes("transbordo") || t.includes("estación") || t.includes("vuelo") || t.includes("avión")) {
        return "fa-solid fa-train-subway";
    }
    if (t.includes("comida") || t.includes("cena") || t.includes("almuerzo") || t.includes("restaurante") || t.includes("gastro") || t.includes("kappabashi") || t.includes("sushi") || t.includes("ramen") || t.includes("mercado") || t.includes("nishiki")) {
        return "fa-solid fa-utensils";
    }
    if (t.includes("parque") || t.includes("jardín") || t.includes("bosque") || t.includes("naturaleza") || t.includes("lago") || t.includes("monte") || t.includes("fuji") || t.includes("bambú") || t.includes("ciervos") || t.includes("kamakura")) {
        return "fa-solid fa-mountain-sun";
    }
    return "fa-solid fa-circle-dot";
}

function getEventBadges(title, id, day) {
    const t = (title || "").toLowerCase();
    const i = (id || "").toLowerCase();
    let badges = [];
    
    // Mapeos específicos para el Día 17
    if (day === 17) {
        if (t.includes("senso-ji") || t.includes("nakamise")) {
            badges.push('<span class="event-badge badge-orange"><i class="fa-solid fa-torii-gate"></i> Tradición</span>');
            badges.push('<span class="event-badge badge-gold"><i class="fa-solid fa-star"></i> Imperdible</span>');
        } else if (t.includes("ribera") || t.includes("sumida")) {
            badges.push('<span class="event-badge badge-cyan"><i class="fa-solid fa-camera"></i> Foto Spot</span>');
            badges.push('<span class="event-badge badge-green"><i class="fa-solid fa-water"></i> Río Sumida</span>');
        } else if (t.includes("skytree")) {
            badges.push('<span class="event-badge badge-cyan"><i class="fa-solid fa-eye"></i> Vistas 360°</span>');
            badges.push('<span class="event-badge badge-purple"><i class="fa-solid fa-ruler-vertical"></i> 634 Metros</span>');
        } else if (t.includes("akihabara")) {
            badges.push('<span class="event-badge badge-purple"><i class="fa-solid fa-bolt"></i> Cultura Geek</span>');
            badges.push('<span class="event-badge badge-cyan"><i class="fa-solid fa-gamepad"></i> Arcade & Figuras</span>');
        }
    }
    
    // Mapeos generales por defecto si no hay específicos
    if (badges.length === 0) {
        if (t.includes("templo") || t.includes("santuario") || t.includes("pagoda")) {
            badges.push('<span class="event-badge badge-orange">Tradición</span>');
        } else if (t.includes("vistas") || t.includes("mirador") || t.includes("observatorio")) {
            badges.push('<span class="event-badge badge-cyan">Panorámica</span>');
        } else if (t.includes("metro") || t.includes("tren") || t.includes("shinkansen")) {
            badges.push('<span class="event-badge badge-cyan">Transporte</span>');
        } else if (t.includes("cena") || t.includes("restaurante") || t.includes("gastronomía") || t.includes("ramen")) {
            badges.push('<span class="event-badge badge-gold">Gastro</span>');
        } else if (t.includes("opcional") || t.includes("libre")) {
            badges.push('<span class="event-badge badge-purple">Flexible</span>');
        }
    }
    
    return badges.join("");
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
        infographicSrc: "infografía/Guía_logística_Kioto_a_Okuhida.png",
        infographicSrc: "infografía/Guía_logística_Kioto_a_Okuhida.png",
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
                content: `
                    Tren: <strong>Shinkansen Nozomi 2</strong>. Billetes COMPRADOS (08:45 -> 09:19).<br>
                    <strong>Asientos asignados (Vagón 16 / Filas 14 a 17, asientos D y E contiguos):</strong><br>
                    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:6px; margin:10px 0;">
                        <a href="https://drive.google.com/open?id=1yHpMIaWl_fmixNLC5dbQkpAfEa9rXb2P" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 14-D</a>
                        <a href="https://drive.google.com/file/d/1tun7ueusFQnpUOFMqSeqDnax2KX7LZmr/view?usp=drive_web" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 14-E</a>
                        <a href="https://drive.google.com/open?id=1ItwJ4eETtAVcwPX17PcdYVqsIWCf3Bo2" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 15-D</a>
                        <a href="https://drive.google.com/file/d/1RNENXx3ID7uKZpP7Fo3CTmLnChYsVAYS/view?usp=drive_web" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 15-E</a>
                        <a href="https://drive.google.com/open?id=1mOK6sF70Q-8hR27Vcv1MLUGXN2duqUBi" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 16-D</a>
                        <a href="https://drive.google.com/open?id=11P90H4NdNK6Krzmw63UImJaOQqZ4v_5O" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 16-E</a>
                        <a href="https://drive.google.com/file/d/1eFRPvLoQFv0AhmEqyJCc8TUfeBG8nzN-/view?usp=drive_web" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 17-D</a>
                        <a href="https://drive.google.com/file/d/1jPMfZAwXCrSorUAKTnXJcxQIUHdUQfQy/view?usp=drive_web" target="_blank" class="tactical-btn" style="padding:4px; text-align:center; font-size:0.7rem; border-radius:4px; text-decoration:none; background:rgba(251,191,36,0.1); border:1px solid var(--gold); color:var(--gold); display:flex; align-items:center; justify-content:center; gap:4px; font-weight:bold;">🎟️ Asiento 17-E</a>
                    </div>
                `,
                warning: "Acceso con código QR en los tornos de la estación de Kioto (llevar cargados en el móvil)."
            },
            {
                time: "10:00",
                title: "3. Tramo 2: Nagoya ➔ Takayama (Tren Wide View Hida)",
                content: `
                    Tren: <strong>Wide View Hida 7</strong> (10:00 -> 12:30). Duración: 2h 30m.<br>
                    <strong>Asientos y Vagón:</strong> Reservados para el grupo de 8 (se detallan en los billetes impresos).<br>
                    <div style="background:rgba(16,185,129,0.05); border:1px solid var(--success); border-radius:8px; padding:12px; margin-top:10px; font-size:0.85rem; text-align:left;">
                        <h5 style="color:var(--success); margin:0 0 8px 0; font-size:0.9rem;"><i class="fa-solid fa-cloud-arrow-down"></i> Instrucciones de Recogida (Billetes Físicos)</h5>
                        <p style="margin:0 0 8px 0; line-height:1.4; color:white;">Estos billetes de JR-WEST <strong>obligatoriamente se deben imprimir</strong> en papel de cartón en Japón antes de subir al tren:</p>
                        <ol style="margin:0; padding-left:15px; display:flex; flex-direction:column; gap:6px; line-height:1.4; color:white;">
                            <li><strong>¿Dónde?</strong> En las máquinas de venta verdes de JR (con lector de pasaportes) o en taquillas oficiales (Midori-no-madoguchi). <em>Recomendación: Sacadlos con calma en la Estación de Kioto unos días antes del viaje.</em></li>
                            <li><strong>¿Qué necesitas llevar?</strong>
                                <br>• La <strong>tarjeta de crédito física</strong> utilizada (MasterCard terminada en <strong>7801</strong>) para insertarla en la ranura.
                                <br>• Tu <strong>código PIN de 4 dígitos</strong> (creado durante la compra).
                                <br>• Los <strong>dos números de reserva</strong>:
                                    <br>&nbsp;&nbsp;&nbsp;- Reserva 1: <strong style="color:var(--gold);">[Ver PDF]</strong> (3 adultos + 1 niño)
                                    <br>&nbsp;&nbsp;&nbsp;- Reserva 2: <strong style="color:var(--gold);">[Ver PDF]</strong> (4 adultos)
                            </li>
                            <li><strong>¿Cómo usar los billetes?</strong> La máquina imprimirá un billete de tarifa básica (Basic Fare) y otro de tren exprés (Limited Express) por persona. <strong>Introduce ambos billetes juntos</strong> en la ranura del torno al entrar en Nagoya y no olvides recogerlos al pasar. Repite el proceso para salir en Takayama.</li>
                        </ol>
                    </div>
                `,
                warning: "Nota: No hay opción digital/QR para este trayecto. Es indispensable realizar la impresión física antes."
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
                        <td style="padding:5px;">Wide View Hida (Nagoya ➔ Takayama)</td>
                        <td style="padding:5px; color:var(--success); font-weight:bold;">COMPRADO</td>
                        <td style="padding:5px; text-align:right;">Imprimir Billetes</td>
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
    },
            'mode_karaoke': {
        title: "🎤 MODO KARAOKE: Guía de Canto en Japón",
        subtitle: "Consejos y ubicaciones para cantar en cabinas privadas en Shinjuku y Shibuya",
        steps: [
            {
                time: "DÍA 16",
                title: "🎤 Día 16: Noche de llegada en Shinjuku (Opción Principal)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">Esta es vuestra primera noche en Tokio y la opción principal para estrenaros con el karaoke. Al alojaros en el Edmont, tenéis muy cerca la estación de Iidabashi y, a solo unas paradas de metro/tren, el bullicioso distrito de <strong>Shinjuku</strong>.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Dónde ir:</strong> En Shinjuku encontraréis las sucursales más gigantescas de cadenas populares como <em>Karaoke Kan</em> (famosa por la película Lost in Translation) o <em>Big Echo</em>.</li>
                        <li><strong>Cabinas privadas:</strong> Los karaokes en Japón no son en salas abiertas, sino en habitaciones privadas insonorizadas equipadas con pantallas, micrófonos, tablets para elegir canciones (en inglés y español) y luces de colores. ¡Os va a flipar!</li>
                        <li><strong>Servicio de bebidas:</strong> Podéis pedir refrescos, cervezas o snacks directamente desde el teléfono de la pared.</li>
                    </ul>
                `,
                warning: "Consejo familiar: Si vais con peques, podéis hacer este plan en 'modo temprano' a partir de las 18:30. Es mucho más tranquilo, económico y familiar que a altas horas de la noche."
            },
            {
                time: "DÍA 18",
                title: "🎤 Día 18: Noche en Shibuya (Opción de Repuesto)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">Si el primer día no os dio tiempo o queréis repetir, la noche del Día 18 en Shibuya es la oportunidad perfecta. Ese día estaréis explorando Harajuku y el famoso cruce de Shibuya.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Momento ideal:</strong> La opción de ir de karaoke es ideal justo después de bajar del espectacular mirador <strong>Shibuya Sky</strong> al atardecer o por la noche.</li>
                        <li><strong>Ubicación:</strong> A escasos metros del cruce de Shibuya hay rascacielos enteros dedicados al karaoke con vistas espectaculares a las calles iluminadas desde los ventanales de las cabinas.</li>
                    </ul>
                `,
                warning: "Nota de reserva: Los fines de semana o por la noche en Shibuya se llenan rápido. Podéis entrar a preguntar en cualquier recepción de Karaoke Kan o Big Echo; al ser 8 personas, os asignarán una sala mediana/grande al instante."
            }
        ],
        footer: `
            <div style="background:rgba(0, 243, 255, 0.1); border:1px solid var(--neon-blue); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--neon-blue); margin-top:0; display:flex; align-items:center; gap:8px; font-size:1rem;"><i class="fa-solid fa-microphone"></i> Tarifa y Funcionamiento</h4>
                <p style="font-size:0.85rem; color:white; margin-bottom:0; line-height:1.5;">Al entrar, se indica el número de personas (8) y el tiempo (ej. 1 hora). Os darán una ficha con el número de sala. Al terminar, vais a recepción con la ficha para pagar. El precio se calcula por persona en bloques de 30 minutos, e incluye una consumición mínima (Drink Order) obligatoria en la mayoría de cadenas.</p>
            </div>
        `
    },
    'mode_karaoke': {
        title: "🎤 MODO KARAOKE: Guía de Canto en Japón",
        subtitle: "Consejos y ubicaciones para cantar en cabinas privadas en Shinjuku y Shibuya",
        steps: [
            {
                time: "DÍA 16",
                title: "🎤 Día 16: Noche de llegada en Shinjuku (Opción Principal)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">Esta es vuestra primera noche en Tokio y la opción principal para estrenaros con el karaoke. Al alojaros en el Edmont, tenéis muy cerca la estación de Iidabashi y, a solo unas paradas de metro/tren, el bullicioso distrito de <strong>Shinjuku</strong>.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Dónde ir:</strong> En Shinjuku encontraréis las sucursales más gigantescas de cadenas populares como <em>Karaoke Kan</em> (famosa por la película Lost in Translation) o <em>Big Echo</em>.</li>
                        <li><strong>Cabinas privadas:</strong> Los karaokes en Japón no son en salas abiertas, sino en habitaciones privadas insonorizadas equipadas con pantallas, micrófonos, tablets para elegir canciones (en inglés y español) y luces de colores. ¡Os va a flipar!</li>
                        <li><strong>Servicio de bebidas:</strong> Podéis pedir refrescos, cervezas o snacks directamente desde el teléfono de la pared.</li>
                    </ul>
                `,
                warning: "Consejo familiar: Si vais con peques, podéis hacer este plan en 'modo temprano' a partir de las 18:30. Es mucho más tranquilo, económico y familiar que a altas horas de la noche."
            },
            {
                time: "DÍA 18",
                title: "🎤 Día 18: Noche en Shibuya (Opción de Repuesto)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">Si el primer día no os dio tiempo o queréis repetir, la noche del Día 18 en Shibuya es la oportunidad perfecta. Ese día estaréis explorando Harajuku y el famoso cruce de Shibuya.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Momento ideal:</strong> La opción de ir de karaoke es ideal justo después de bajar del espectacular mirador <strong>Shibuya Sky</strong> al atardecer o por la noche.</li>
                        <li><strong>Ubicación:</strong> A escasos metros del cruce de Shibuya hay rascacielos enteros dedicados al karaoke con vistas espectaculares a las calles iluminadas desde los ventanales de las cabinas.</li>
                    </ul>
                `,
                warning: "Nota de reserva: Los fines de semana o por la noche en Shibuya se llenan rápido. Podéis entrar a preguntar en cualquier recepción de Karaoke Kan o Big Echo; al ser 8 personas, os asignarán una sala mediana/grande al instante."
            }
        ],
        footer: `
            <div style="background:rgba(0, 243, 255, 0.1); border:1px solid var(--neon-blue); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--neon-blue); margin-top:0; display:flex; align-items:center; gap:8px; font-size:1rem;"><i class="fa-solid fa-microphone"></i> Tarifa y Funcionamiento</h4>
                <p style="font-size:0.85rem; color:white; margin-bottom:0; line-height:1.5;">Al entrar, se indica el número de personas (8) y el tiempo (ej. 1 hora). Os darán una ficha con el número de sala. Al terminar, vais a recepción con la ficha para pagar. El precio se calcula por persona en bloques de 30 minutos, e incluye una consumición mínima (Drink Order) obligatoria en la mayoría de cadenas.</p>
            </div>
        `
    },
    'day16_activities_buffet': {
        title: "Buffet de Actividades: Primera Noche",
        subtitle: "Menú de alternativas recomendadas según vuestro nivel de energía y el clima",
        steps: [
            {
                time: "🏮 DESTACADO - SÓLO HOY",
                title: "🏮 ¡DESTACADO - SÓLO HOY! Opción 1: Ueno Summer Festival",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">El <strong>Festival de Verano de Ueno (Ueno Natsu Matsuri)</strong> celebra hoy su última noche. Es una oportunidad única e irrepetible para vivir el Tokio más tradicional y festivo.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Toro Nagashi (Farolillos flotantes):</strong> Se lanzan cientos de farolillos de papel encendidos al estanque Shinobazu, creando una atmósfera mágica e inolvidable al anochecer.</li>
                        <li><strong>Yatai (Comida callejera):</strong> Decenas de puestos tradicionales con yakitori, yakisoba, takoyaki, kakigori (hielo raspado) y cerveza fría.</li>
                        <li><strong>Farolillos de Ueno:</strong> Todo el estanque Shinobazu se ilumina de forma espectacular con cientos de farolillos flotantes y colgantes.</li>
                    </ul>
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Shinobazu+Pond&travelmode=transit" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA EN METRO</a>
                    </div>
                `,
                warning: "¡Último día de festival! No dejes pasar esta oportunidad si tienes energía, ya que no coincidirá con otros festivales tradicionales durante vuestro viaje."
            },
            {
                time: "🚶 10-15 min",
                title: "🏮 Opción 2: Paseo Tradicional en Kagurazaka",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">El barrio tradicional de <strong>Kagurazaka</strong> os sumergirá en una atmósfera completamente distinta, elegante y relajada, a unos 10-15 minutos caminando desde las puertas del hotel. Conocido históricamente como un antiguo distrito de geishas y apodado el "Pequeño París" de Tokio, sus laberínticas cuestas y callejones empedrados se iluminan de forma mágica con farolillos al caer la tarde, ofreciendo un paseo nocturno precioso.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Paseo escénico nocturno:</strong> Recorrer su avenida principal (Kagurazaka-dori) y adentrarse en callejones icónicos como Hyogo Yokocho permite descubrir una bonita arquitectura clásica de madera, templos escondidos y tiendas tradicionales.</li>
                        <li><strong>Cena tradicional:</strong> La zona destaca por su vibrante oferta de tabernas japonesas y restaurantes.</li>
                        <li><strong>Plan tranquilo:</strong> Es la alternativa perfecta si tras el viaje desde Fuji preferís un ritmo pausado, hacer fotos estéticas de noche y disfrutar de una cena relajada.</li>
                    </ul>
                    <img src="images/dia16-kagurazaka.jpg" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1); margin-top:5px;" />
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Kagurazaka&travelmode=walking" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA A PIE</a>
                    </div>
                `,
                warning: "Cena estilo Izakaya: La zona destaca por su vibrante oferta de tabernas japonesas y restaurantes; para vuestro grupo, lo ideal es buscar los locales de varios pisos de la avenida principal, ya que las tabernas de los callejones suelen ser extremadamente diminutas."
            },
            {
                time: "🚶 5 min",
                title: "🎢 Opción 3: Ocio y Luces en Tokyo Dome City",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">El complejo <strong>Tokyo Dome City</strong> es la opción más práctica, vibrante y cercana para pasar vuestra primera tarde-noche en la ciudad. Situado a poco más de 5 minutos a pie de vuestro alojamiento, este enorme centro de ocio cuenta con una iluminación nocturna espectacular y múltiples zonas de restauración abiertas hasta tarde, lo que facilita enormemente el manejo de un grupo grande sin reserva.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Espacios gastronómicos ideales:</strong> Dispone de grandes áreas como el <em>Food Stadium Tokyo</em> (abierto hasta las 23:00) o el espacio de comida rápida <em>Go-Fun</em> (hasta las 22:30), perfectos para que cada uno de los 8 elija lo que más le apetezca cenar.</li>
                        <li><strong>Centro comercial LaQua:</strong> La precaución es que la sección de tiendas de LaQua cierra a las 21:00 y los restaurantes a las 22:00, ofreciendo un ambiente climatizado excelente si el calor y la humedad de agosto en el exterior se vuelven muy sofocantes.</li>
                        <li><strong>Ambiente y paseos:</strong> Pasear bajo sus estructuras iluminadas y ver de cerca el emblemático estadio Tokyo Dome os brindará una excelente y cómoda toma de contacto con el Tokio más moderno.</li>
                    </ul>
                    <img src="images/dia21-tokyo-dome.jpg" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1); margin-top:5px;" />
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/search/?api=1&query=Tokyo+Dome+City" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-map-location-dot"></i> VER EN MAPA</a>
                    </div>
                `
            },
            {
                time: "🚶 5-7 min",
                title: "☕ Opción 4: Terraza Fluvial en Canal Cafe",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">El icónico <strong>Canal Cafe</strong> es un amplio restaurante y cafetería asentado junto al agua en el foso del antiguo Castillo de Edo, situado a solo 5-7 minutos a pie de vuestro hotel, justo al lado de la estación de Iidabashi. Su inmensa terraza descubierta junto al canal lo convierte en un rincón sumamente cotizado para disfrutar de la brisa del anochecer y desconectar del ajetreo urbano.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Mínimo esfuerzo físico:</strong> Al estar prácticamente al lado del hotel, os requerirá una caminata muy breve, algo que agradeceréis si el cansancio acumulado del viaje empieza a pasar factura.</li>
                        <li><strong>Vistas del canal:</strong> Ofrece una estampa preciosa de los trenes locales pasando junto al agua y los reflejos de las luces de los rascacielos mientras tomáis algo refrescante.</li>
                    </ul>
                    <img src="images/dia16_canal_cafe.png" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1); margin-top:5px;" />
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/search/?api=1&query=Canal+Cafe+Tokyo" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-map-location-dot"></i> VER EN MAPA</a>
                    </div>
                `,
                warning: "Cena informal: Cuenta con un menú italiano-japonés muy accesible (pizzas, pastas, ensaladas) y opera de forma continua hasta las 21:30 (los domingos hasta las 21:00), dándoos margen de sobra."
            },
            {
                time: "🚇 15 min",
                title: "🏙️ Opción 5: Mirador del Ayuntamiento (Tocho)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">El mirador del <strong>Gobierno Metropolitano de Tokio (Tocho)</strong> se encuentra en Shinjuku y ofrece una vista panorámica gratuita espectacular de 360 grados desde la planta 45, a 202 metros de altura.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:6px;">
                        <li><strong>Vistas inigualables:</strong> Ideal para contemplar el océano de luces infinitas de Tokio en vuestra primera noche.</li>
                        <li><strong>Piano de Yayoi Kusama:</strong> Cuenta con un piano de cola diseñado por la famosa artista japonesa, el cual suele estar activo con músicos locales tocando en directo.</li>
                    </ul>
                    <img src="images/dia18-tocho.jpg" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1); margin-top:5px;" />
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Iidabashi+Station&destination=Tokyo+Metropolitan+Government+Building+Observation+Decks&travelmode=transit" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA EN METRO</a>
                    </div>
                `
            },
            {
                time: "🚇 15 min",
                title: "🏙️ Opción 6: Shinjuku Completo (Neones, Mirador y Karaoke)",
                content: `
                    <p style="margin-bottom:12px; color:#cbd5e1; line-height:1.6;">Una inmersión total en el <strong>Tokio nocturno de Shinjuku</strong>. Damos una vuelta por el barrio para orientarnos y disfrutar del contraste entre los rascacielos y los callejones tradicionales.</p>
                    <ul style="font-size:0.85rem; color:#94a3b8; padding-left:20px; margin-bottom:15px; display:flex; flex-direction:column; gap:8px;">
                        <li><strong>Mirador del Ayuntamiento (Tocho):</strong> Subimos al mirador gratuito del Tokyo Metropolitan Government Building para ver la inmensidad de Tokio iluminada desde arriba (planta 45).</li>
                        <li><strong>Neones y ambiente en Kabukicho:</strong> Pasamos por Kabukicho para ver el "Tokio de neones" clásico y la cabeza gigante de Godzilla.</li>
                        <li><strong>Cena en callejones típicos:</strong> Vamos a Omoide Yokocho a cenar brochetas a la parrilla (Yakitori) en alguna izakaya pequeñita y con encanto.</li>
                        <li><strong>Karaoke en Shinjuku:</strong> Una de las experiencias más divertidas. Son cabinas privadas insonorizadas con buffet de bebidas, ideal para familias.</li>
                    </ul>
                    <img src="images/shinjuku.png" style="width:100%; border-radius:10px; border:1px solid rgba(255,255,255,0.1); margin-top:5px;" />
                    <div style="margin-top:15px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Iidabashi+Station&destination=Shinjuku+Station&travelmode=transit" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; font-size:0.75rem; border-radius:6px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA EN METRO</a>
                    </div>
                `,
                warning: "Consejo familiar: Si vais con peques, se puede hacer este plan en 'modo temprano' a las 18:30 y estaréis listos para volver a descansar antes de las aglomeraciones tardías."
            }
        ],
        footer: `
            <div style="background:rgba(16,185,129,0.1); border:1px solid var(--success); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--success); margin-top:0; display:flex; align-items:center; gap:8px; font-size:1rem;"><i class="fa-solid fa-thumbs-up"></i> Recomendación</h4>
                <p style="font-size:0.85rem; color:white; margin-bottom:0; line-height:1.5;">Si el bochorno de agosto y el cansancio aprietan, las opciones de <strong>Canal Cafe</strong> o <strong>Tokyo Dome City</strong> os mantendrán a cubierto o al lado del agua reduciendo la caminata. Si os quedan fuerzas para una estampa nocturna de foto, <strong>Kagurazaka</strong> es mágica.</p>
            </div>
        `
    },
    'route_day16_shinjuku_to_hotel': {
        title: "Transporte: Shinjuku ➔ Hotel Edmont",
        subtitle: "Guía de traslado grupal (8 Pax) tras la llegada del Fuji Excursion",
        steps: [
            {
                time: "Opción A",
                title: "🚄 Opción 1: Instrucciones para el Tren (Línea JR Chūō-Sōbu)",
                content: `
                    <p style="margin-bottom:15px; color:#94a3b8; line-height:1.6;">Si decidís ir en tren, utilizaréis la red de la compañía JR (Japan Railways). Al llegar desde Fuji, lo más probable es que vuestro tren finalice en los andenes de JR Shinjuku, por lo que no tendréis que salir de los tornos de la estación para hacer el transbordo, lo cual os ahorrará tener que comprar billetes nuevos si usáis tarjetas IC (como Suica o Pasmo) o pases de transporte compatibles.</p>
                    
                    <div class="transit-card" style="margin-bottom:20px; background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.05); padding:15px; border-radius:12px;">
                        <div class="transit-header" style="margin-bottom:15px;">
                            <span class="transit-badge" style="background:#ffd400; color:black; font-weight:800; padding:2px 8px; border-radius:4px; font-size:0.75rem;"><i class="fa-solid fa-train-subway"></i> LÍNEA JR LOCAL</span>
                            <div class="transit-route-summary" style="margin-top:8px;">
                                <h3 style="margin:0; color:white; font-size:1.1rem;">Shinjuku <i class="fa-solid fa-arrow-right" style="color:#ffd400;"></i> Iidabashi</h3>
                                <span class="transit-time-total" style="font-size:0.8rem; color:#94a3b8;"><i class="fa-regular fa-clock"></i> 18-19 min • 6 paradas • Sin transbordos externos</span>
                            </div>
                        </div>
                        
                        <div class="transit-timeline" style="margin-top:15px; display:flex; flex-direction:column; gap:10px;">
                            <!-- Nodo Origen -->
                            <div class="transit-node origin" style="display:flex; gap:15px; align-items:flex-start;">
                                <div class="node-indicator" style="display:flex; flex-direction:column; align-items:center;">
                                    <div class="station-icon-halo" style="--line-color: #ffd400; background:#ffd400; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px rgba(255,212,0,0.4);">
                                        <span class="station-code" style="color:black; font-weight:800; font-size:0.8rem;">JB10</span>
                                    </div>
                                </div>
                                <div class="node-info" style="flex:1;">
                                    <div class="station-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                                        <span class="station-name" style="font-weight:bold; color:white;">Shinjuku (JR)</span>
                                        <span class="badge-line" style="background-color: #ffd400; color:black; font-weight:bold; font-size:0.7rem; padding:1px 6px; border-radius:4px;">Chūō-Sōbu Line</span>
                                    </div>
                                    <div style="color:#cbd5e1; font-size:0.85rem; line-height:1.5;">
                                        <div style="margin-bottom:8px;">
                                            <i class="fa-solid fa-shuffle" style="color:#ffd400; margin-right:4px;"></i><strong>Transbordo interno:</strong> Al bajar de vuestro tren proveniente de Fuji, no busquéis las salidas de la calle (Exits). Buscad los paneles informativos elevados de color amarillo y seguid las indicaciones hacia la línea <strong>JR Chūō-Sōbu Line (Local)</strong> en dirección este (hacia Ochanomizu / Chiba).
                                        </div>
                                        <div class="station-meta-grid" style="display:flex; gap:10px; margin-top:8px;">
                                            <div class="meta-item" style="border: 1px solid rgba(255,212,0,0.3); background: rgba(255,212,0,0.05); padding:4px 8px; border-radius:6px; font-size:0.8rem; display:inline-flex; align-items:center;">
                                                <i class="fa-solid fa-arrow-pointer" style="color: #ffd400; margin-right: 6px;"></i>Andén <strong style="color: #ffd400; margin-left:3px;">13 (Platform 13)</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Conector -->
                            <div class="transit-connector" style="margin-left: 17px; border-left: 3px dashed #ffd400; padding:10px 0 10px 25px;">
                                <span class="stops-count" style="font-size:0.78rem; color:#94a3b8; display:flex; align-items:center; gap:6px;"><i class="fa-solid fa-layer-group"></i> 6 paradas (Yoyogi, Sendagaya, Shinanomachi, Yotsuya, Ichigaya)</span>
                            </div>
                            
                            <!-- Nodo Destino -->
                            <div class="transit-node destination" style="display:flex; gap:15px; align-items:flex-start;">
                                <div class="node-indicator" style="display:flex; flex-direction:column; align-items:center;">
                                    <div class="station-icon-halo" style="--line-color: #ffd400; background:#ffd400; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px rgba(255,212,0,0.4);">
                                        <span class="station-code" style="color:black; font-weight:800; font-size:0.8rem;">JB16</span>
                                    </div>
                                </div>
                                <div class="node-info" style="flex:1;">
                                    <div class="station-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                                        <span class="station-name" style="font-weight:bold; color:white;">Iidabashi (JR)</span>
                                        <span class="badge-line" style="background-color: #ffd400; color:black; font-weight:bold; font-size:0.7rem; padding:1px 6px; border-radius:4px;">Llegada</span>
                                    </div>
                                    <div style="color:#cbd5e1; font-size:0.85rem; line-height:1.5;">
                                        <div>
                                            <i class="fa-solid fa-door-open" style="color:#ffd400; margin-right:4px;"></i><strong>La Salida:</strong> Una vez en Iidabashi, buscad los letreros hacia la <strong>Salida Este (East Exit)</strong> de la línea JR.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:15px; margin-top:15px; border-left:4px solid #ffd400;">
                        <h4 style="color:#ffd400; margin:0 0 8px 0; display:flex; align-items:center; gap:8px; font-size:0.95rem;"><i class="fa-solid fa-person-walking"></i> 6. Caminata final al hotel (5 min)</h4>
                        <p style="font-size:0.85rem; color:white; margin:0; line-height:1.5;">Desde la Salida Este de JR Iidabashi, el Hotel Metropolitan Edmont se encuentra a unos 5 minutos a pie (aproximadamente 400 metros) caminando en dirección sur por calles llanas y pavimentadas.</p>
                    </div>
                `,
                warning: "Nota sobre el flujo: A las 16:00 de un día laborable de agosto, los vagones empezarán a llenarse progresivamente debido a la hora punta de salida de oficinas y escuelas. Mantener a 8 personas juntas con mochilas grandes requerirá dividirse bien en las puertas del tren."
            },
            {
                time: "Opción B",
                title: "🚕 Opción 2: Instrucciones detalladas para el Taxi",
                content: `
                    <div style="margin-bottom:20px; line-height:1.6;">
                        <h4 style="color:var(--accent); margin:0 0 8px 0; font-size:1rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-circle-question"></i> ¿Es fácil coger taxi allí o es preferible llamar / usar app?</h4>
                        <p style="font-size:0.88rem; color:#cbd5e1; margin:0;">En la Estación de Shinjuku es sumamente fácil coger un taxi directamente en sus paradas oficiales y <strong>no merece la pena llamar por teléfono ni utilizar aplicaciones (como Uber o Go)</strong> en ese instante. La estación dispone de paradas de taxi fijas (Taxi Stands) sumamente organizadas donde los coches hacen cola de forma continua las 24 horas. De hecho, por normativa, los taxis pedidos por app no pueden recoger pasajeros en las zonas de las paradas oficiales, por lo que usar una aplicación os obligaría a salir de la estación y buscar una zona de carga permitida en la calle, algo incómodo y caótico yendo con bultos grandes.</p>
                    </div>
                    
                    <div style="background:rgba(249,115,22,0.04); border:1px solid rgba(249,115,22,0.15); border-radius:14px; padding:20px; border-left:4px solid var(--accent); line-height:1.6;">
                        <h4 style="color:var(--accent); margin:0 0 10px 0; font-size:1rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-pin"></i> El mejor sitio de la estación para coger los taxis</h4>
                        <p style="font-size:0.88rem; color:white; margin-bottom:12px;">Shinjuku es una estación colosal con varias paradas de taxi, pero para un grupo de 8 personas con equipaje grande, la mejor parada con diferencia es la de la <strong>Terminal de Autobuses y Transportes de Shinjuku (Busta Shinjuku)</strong>, ubicada en la <strong>3ª planta (3F)</strong>, accesible desde la zona sur de la estación:</p>
                        <ul style="font-size:0.85rem; color:#cbd5e1; padding-left:20px; margin:0; display:flex; flex-direction:column; gap:10px;">
                            <li><strong>Cómo llegar:</strong> Al bajar de vuestro tren, seguid los letreros internos que suben hacia la planta superior (2F) en dirección a la <strong>Salida Sur (South Exit)</strong> o <strong>New South Gate</strong>.</li>
                            <li><strong>Subir a la terminal:</strong> Cruzando la calle o utilizando los ascensores amplios de esa zona moderna (el complejo NEWoMan / Busta Shinjuku), subid a la <strong>3ª planta (3F)</strong>. Esta zona es muy espaciosa, moderna y está completamente techada.</li>
                            <li><strong>Tomar los vehículos:</strong> En la parada oficial de la 3ª planta veréis una fila ordenada de taxis. Al ser un área amplia y resguardada del sol y el bochorno de agosto, os permitirá coordinaros perfectamente para dividiros en dos taxis estándar (máximo 4 pasajeros por coche) y cargar las mochilas grandes en los maleteros con total tranquilidad, sin entorpecer el paso de los peatones ni sufrir las aglomeraciones de los estrechos pasillos subterráneos de la salida oeste.</li>
                        </ul>
                    </div>
                `
            }
        ],
        footer: `
            <div style="background:rgba(16,185,129,0.1); border:1px solid var(--success); border-radius:12px; padding:15px; margin-top:20px;">
                <h4 style="color:var(--success); margin-top:0; display:flex; align-items:center; gap:8px; font-size:1rem;"><i class="fa-solid fa-thumbs-up"></i> Recomendación Final</h4>
                <p style="font-size:0.88rem; color:white; margin-bottom:0; line-height:1.5;">Teniendo en cuenta que viajáis en agosto a las 16:00 (momento de máxima humedad y calor en Tokio) y que vais cargados tras un viaje en tren, subir en ascensor hacia la parada de taxis de la 3ª planta de <strong>Busta Shinjuku</strong> y repartiros en dos coches os garantizará empezar vuestra estancia en la capital de la forma más cómoda, directa y sin sufrir el desgaste físico de arrastrar mochilas por los andenes.</p>
            </div>
        `
    }
};

// --- DYNAMIC METRO TRANSIT WIDGET ENGINE ---
function compileTransitWidgetHTML(details, routeId) {
    if (!details) return '';

    const savedStates = JSON.parse(localStorage.getItem(`transit_state_${routeId}`)) || {};
    let stepsHTML = '';
    
    details.steps.forEach((step, idx) => {
        const isChecked = savedStates[`step-${idx}`] ? 'checked' : '';
        const isCompletedClass = savedStates[`step-${idx}`] ? 'completed' : '';
        const nodeTypeClass = step.type; // 'origin', 'transfer', 'destination'
        
        let metaHTML = '';
        if (step.type === 'origin') {
            metaHTML = `
                <div class="station-meta-grid">
                    <div class="meta-item" style="border-color: ${step.lineColor}40; background: ${step.lineColor}10;">
                        <i class="fa-solid fa-arrow-pointer" style="color: ${step.lineColor}; margin-right: 4px;"></i>Andén <strong style="color: ${step.lineColor};">${step.platform || ''}</strong>
                    </div>
                    <div class="meta-item" style="border-color: ${step.lineColor}40; background: ${step.lineColor}10;">
                        <i class="fa-solid fa-train" style="color: ${step.lineColor}; margin-right: 4px;"></i>Vagón <strong style="color: ${step.lineColor};">${step.car || ''}</strong>
                    </div>
                </div>
            `;
        } else if (step.type === 'transfer') {
            metaHTML = `
                <div class="station-instructions" style="border-color: ${step.lineColor}40; background: ${step.lineColor}10;">
                    <i class="fa-solid fa-shuffle" style="color: ${step.lineColor}; margin-right: 5px;"></i><strong>Transbordo:</strong> ${step.instructions || ''}
                </div>
            `;
        } else if (step.type === 'destination') {
            metaHTML = `
                <div class="station-meta-grid">
                    <div class="meta-item" style="border-color: ${step.lineColor}40; background: ${step.lineColor}10;">
                        <i class="fa-solid fa-door-open" style="color: ${step.lineColor}; margin-right: 4px;"></i>Salida <strong style="color: ${step.lineColor};">${step.exit || ''}</strong>
                    </div>
                    ${step.mapUrl ? `<a href="${step.mapUrl}" target="_blank" class="map-link" style="border-color: ${step.lineColor}40; background: ${step.lineColor}10; color: ${step.lineColor};"><i class="fa-solid fa-map"></i> Mapa Estación</a>` : ''}
                </div>
            `;
        }

        stepsHTML += `
            <div class="transit-node ${nodeTypeClass} ${isCompletedClass}" data-step-index="${idx}">
                <div class="node-indicator">
                    <input type="checkbox" id="chk-${routeId}-${idx}" class="transit-checkbox" 
                           onchange="handleTransitStepChange('${routeId}', ${idx}, this.checked, this)" ${isChecked}>
                    <label for="chk-${routeId}-${idx}" class="checkbox-trigger"></label>
                    <div class="station-icon-halo" style="--line-color: ${step.lineColor};">
                        <span class="station-code">${step.code}</span>
                    </div>
                </div>
                <div class="node-info">
                    <div class="station-header">
                        <span class="station-name">${step.station}</span>
                        <span class="badge-line" style="background-color: ${step.lineColor};">${step.line}</span>
                    </div>
                    ${metaHTML}
                </div>
            </div>
        `;

        if (idx < details.steps.length - 1) {
            stepsHTML += `
                <div class="transit-connector" style="background: ${step.lineColor};">
                    <span class="stops-count"><i class="fa-solid fa-layer-group"></i> En tránsito</span>
                </div>
            `;
        }
    });

    return `
        <div class="transit-card animate-fade-in" id="transit-widget-${routeId}">
            <div class="transit-header">
                <span class="transit-badge"><i class="fa-solid fa-train-subway"></i> RUTA INTERACTIVA</span>
                <div class="transit-route-summary">
                    <h3>${details.origin} <i class="fa-solid fa-arrow-right"></i> ${details.destination}</h3>
                    <span class="transit-time-total"><i class="fa-regular fa-clock"></i> ${details.totalTime} • ${details.steps.filter(s => s.type === 'transfer').length + 1} líneas</span>
                </div>
            </div>

            <div class="transit-timeline">
                ${stepsHTML}
            </div>

            ${details.gpsWarning ? `
                <div class="gps-warning-box">
                    <div class="warning-header">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <h4>PROTOCOLO SUBTERRÁNEO: SIN GPS</h4>
                    </div>
                    <p>${details.gpsWarning}</p>
                </div>
            ` : ''}
        </div>
    `;
}

function handleTransitStepChange(routeId, stepIdx, isChecked, element) {
    const storageKey = `transit_state_${routeId}`;
    const currentState = JSON.parse(localStorage.getItem(storageKey)) || {};
    
    currentState[`step-${stepIdx}`] = isChecked;
    localStorage.setItem(storageKey, JSON.stringify(currentState));
    
    if (element) {
        const node = element.closest('.transit-node');
        if (node) {
            if (isChecked) {
                node.classList.add('completed');
            } else {
                node.classList.remove('completed');
            }
        }
    }
    
    if (isChecked && navigator.vibrate) {
        try {
            navigator.vibrate(40);
        } catch (e) {
            console.log("Vibration not supported/blocked:", e);
        }
    }
}

function renderTacticalMission(missionId, dayIdx) {
    // Generar misiones de buffet independientes si se solicitan de forma dinámica
    if (missionId && missionId.startsWith('day16_') && missionId !== 'day16_activities_buffet') {
        const indexMap = {
            'day16_ueno_summer': { idx: 0, title: "Ueno Summer Festival", subtitle: "Plan destacado (Sólo Hoy)" },
            'day16_kagurazaka': { idx: 1, title: "Kagurazaka", subtitle: "Paseo tradicional y cena" },
            'day16_tokyo_dome': { idx: 2, title: "Tokyo Dome City", subtitle: "Ocio y restauración rápida" },
            'day16_canal_cafe': { idx: 3, title: "Canal Cafe", subtitle: "Terraza fluvial" },
            'day16_tocho': { idx: 4, title: "Mirador del Tocho", subtitle: "Vistas nocturnas gratuitas" },
            'day16_shinjuku': { idx: 5, title: "Shinjuku Completo", subtitle: "Neones, Mirador y Karaoke" }
        };
        const mapping = indexMap[missionId];
        const baseBuffet = window.tacticalMissions['day16_activities_buffet'];
        if (mapping && baseBuffet && baseBuffet.steps[mapping.idx]) {
            // Clean up the Option X prefix in title
            let cleanTitle = baseBuffet.steps[mapping.idx].title;
            cleanTitle = cleanTitle.replace(/^🏮\s*¡DESTACADO\s*-\s*SÓLO\s*HOY!\s*Opción\s*\d+:\s*/i, '');
            cleanTitle = cleanTitle.replace(/^🏮\s*Opción\s*\d+:\s*/i, '');
            cleanTitle = cleanTitle.replace(/^[☕🎢🏙️]\s*Opción\s*\d+:\s*/i, '');
            cleanTitle = cleanTitle.replace(/^\d+\.\s*/, '');
            
            window.tacticalMissions[missionId] = {
                title: mapping.title,
                subtitle: mapping.subtitle,
                steps: [
                    {
                        ...baseBuffet.steps[mapping.idx],
                        title: cleanTitle
                    }
                ]
            };
        }
    }

    // 0. Detectar si hay transitDetails dinámico en la ruta
    const dayData = typeof travelData !== 'undefined' ? travelData[dayIdx] : null;
    let foundTransitDetails = null;
    if (dayData) {
        if (dayData.transportTimeline) {
            const match = dayData.transportTimeline.find(item => item.tacticalGuideId === missionId);
            if (match && match.transitDetails) {
                foundTransitDetails = match.transitDetails;
            }
        }
        if (!foundTransitDetails && dayData.transitDetails) {
            foundTransitDetails = dayData.transitDetails;
        }
    }

    if (foundTransitDetails) {
        let modal = document.getElementById('tactical-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'tactical-modal';
            modal.className = 'tactical-modal';
            document.body.appendChild(modal);
        }
        
        modal.innerHTML = `
            <div class="tactical-modal-content" style="max-width: 550px; padding: 25px 25px 25px 35px;">
                <button class="close-tactical" onclick="closeTacticalMission()">
                    <i class="fa-solid fa-times"></i>
                </button>
                ${compileTransitWidgetHTML(foundTransitDetails, missionId)}
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

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
        
        let infographicBannerHTML = '';
        if (mission.infographicSrc) {
            infographicBannerHTML = `
                <div class="infographic-banner-card" style="margin: 0 0 20px 0; border: 1px dashed var(--neon-blue); border-radius: 12px; padding: 12px; background: rgba(0, 243, 255, 0.03); display: flex; align-items: center; gap: 15px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 0 10px rgba(0, 243, 255, 0.1);" onclick="openInfographic('${mission.infographicSrc}')" title="Ver Infografía Logística Completa" onmouseover="this.style.transform='scale(1.01) translateY(-2px)'; this.style.boxShadow='0 0 15px rgba(0, 243, 255, 0.3)'; this.style.background='rgba(0, 243, 255, 0.06)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 0 10px rgba(0, 243, 255, 0.1)'; this.style.background='rgba(0, 243, 255, 0.03)';">
                    <div style="width: 70px; height: 70px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;">
                        <img src="${mission.infographicSrc}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <h4 style="margin: 0 0 4px 0; color: var(--neon-blue); font-size: 0.95rem; font-weight: bold;"><i class="fa-solid fa-map"></i> Infografía Logística Completa</h4>
                        <p style="margin: 0; color: #cbd5e1; font-size: 0.8rem; line-height: 1.4;">Hemos diseñado un mapa visual detallado del traslado para que lo lleves en el móvil. ¡Pulsa aquí para abrirlo!</p>
                    </div>
                    <div style="color: var(--neon-blue); font-size: 1.2rem; padding-right: 5px;">
                        <i class="fa-solid fa-expand"></i>
                    </div>
                </div>
            `;
        }

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
                ${infographicBannerHTML}
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
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe</strong></p>
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
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe</strong></p>
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
                <p style="color:#9ca3af; margin:5px 0; font-size:0.9rem;">Titular: <strong>Felipe</strong></p>
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

// ==========================================
// LÓGICA DE COMPROBACIÓN DE ACTUALIZACIÓN (GITHUB)
// ==========================================
let isRefreshingApp = false;

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (isRefreshingApp) return;
        isRefreshingApp = true;
        localStorage.setItem('app_just_updated', 'true');
        if (window.latestGithubVersion) {
            localStorage.setItem('app_updated_to_version', window.latestGithubVersion);
        }
        window.location.reload();
    });
}

function getVersionFromText(text) {
    const match = text.match(/CACHE_NAME\s*=\s*['"]japon-2026-v([^'"]+)['"]/);
    return match ? match[1] : null;
}

async function checkAppUpdates(isManual = false) {
    const versionLabel = document.getElementById('app-version-label');
    const checkBtn = document.getElementById('btn-check-update');

    if (!('serviceWorker' in navigator) || location.protocol === 'file:') {
        if (versionLabel) versionLabel.innerText = 'Versión: Local (Desarrollo)';
        if (checkBtn) checkBtn.style.display = 'none';
        if (isManual) alert('El Service Worker no está activo en este protocolo (ej. archivo local).');
        return;
    }

    if (isManual && checkBtn) {
        checkBtn.disabled = true;
        checkBtn.innerText = 'Comprobando...';
    }

    try {
        const localRes = await fetch('./sw.js');
        if (!localRes.ok) throw new Error('No se pudo acceder al Service Worker local.');
        const localText = await localRes.text();
        const localVersion = getVersionFromText(localText);

        if (!localVersion) {
            if (versionLabel) versionLabel.innerText = 'Versión: Indeterminada';
            if (isManual) alert('No se pudo leer la versión local en sw.js.');
            return;
        }

        // Consultamos el sw.js remoto desde nuestro propio servidor (Netlify/Localhost) con un cache-buster
        const githubRes = await fetch('./sw.js?t=' + Date.now());
        if (!githubRes.ok) throw new Error('No se pudo conectar con el servidor.');
        const githubText = await githubRes.text();
        const githubVersion = getVersionFromText(githubText);

        if (!githubVersion) {
            if (versionLabel) versionLabel.innerText = `Versión: v${localVersion}`;
            if (checkBtn) checkBtn.style.display = 'none';
            if (isManual) alert('No se pudo leer la versión remota.');
            return;
        }

        const localNum = parseInt(localVersion, 10);
        const remoteNum = parseInt(githubVersion, 10);
        window.latestGithubVersion = githubVersion;

        if (!isNaN(localNum) && !isNaN(remoteNum) && remoteNum > localNum) {
            const toast = document.getElementById('update-toast');
            const toastVer = document.getElementById('update-toast-version');
            if (toast && toastVer) {
                toastVer.innerText = `v${githubVersion}`;
                toast.classList.remove('hidden');
            }
            if (versionLabel) {
                versionLabel.innerHTML = `Versión: v${localVersion} <span class="badge-update-available">Actualización disponible</span>`;
            }
            if (checkBtn) {
                checkBtn.style.display = 'inline-block';
                checkBtn.innerText = 'Actualizar ahora';
                checkBtn.onclick = (e) => {
                    e.preventDefault();
                    triggerSWUpdate();
                };
            }
            if (isManual) {
                triggerSWUpdate();
            }
        } else {
            if (versionLabel) {
                versionLabel.innerHTML = `Versión: v${localVersion} <span class="badge-al-dia">Al día</span>`;
            }
            if (checkBtn) {
                checkBtn.style.display = 'none';
            }
            if (isManual) {
                alert(`La aplicación ya está en su versión más moderna (v${localVersion}).`);
            }
        }
    } catch (err) {
        console.error('Error al comprobar actualización:', err);
        if (versionLabel) {
            versionLabel.innerText = 'Error de conexión';
        }
        if (isManual) {
            alert('No se pudo comprobar la actualización. Comprueba tu conexión a Internet.');
        }
    } finally {
        if (isManual && checkBtn && checkBtn.innerText === 'Comprobando...') {
            checkBtn.disabled = false;
            checkBtn.innerText = 'Buscar actualización';
        }
    }
}

async function triggerSWUpdate() {
    if ('serviceWorker' in navigator) {
        const updateBtn = document.getElementById('btn-update-now');
        const checkBtn = document.getElementById('btn-check-update');
        if (updateBtn) {
            updateBtn.disabled = true;
            updateBtn.innerText = 'Actualizando...';
        }
        if (checkBtn) {
            checkBtn.disabled = true;
            checkBtn.innerText = 'Actualizando...';
        }
        try {
            const reg = await navigator.serviceWorker.ready;
            localStorage.setItem('app_just_updated', 'true');
            if (window.latestGithubVersion) {
                localStorage.setItem('app_updated_to_version', window.latestGithubVersion);
            }
            await reg.update();
            console.log('Actualización forzada en el Service Worker.');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            console.error('Error al actualizar Service Worker:', err);
            alert('No se pudo completar la actualización automática.');
            if (updateBtn) {
                updateBtn.disabled = false;
                updateBtn.innerText = 'Actualizar';
            }
            if (checkBtn) {
                checkBtn.disabled = false;
                checkBtn.innerText = 'Actualizar ahora';
            }
        }
    }
}

function showUpdateSuccessNotice(version) {
    const existing = document.getElementById('update-success-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'update-success-toast';
    toast.className = 'update-success-toast';

    const versionText = version ? ` a la versión v${version}` : '';

    toast.innerHTML = `
        <div class="update-success-content">
            <div class="update-success-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="update-success-body">
                <h4>¡Actualización Completada!</h4>
                <p>La aplicación se ha actualizado correctamente${versionText}.</p>
            </div>
            <button class="update-success-close" onclick="this.parentElement.parentElement.remove()">✕</button>
        </div>
    `;

    document.body.appendChild(toast);

    // Auto remove after 6 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 500);
        }
    }, 6000);
}

// Eventos de botones
document.addEventListener('DOMContentLoaded', () => {
    const btnCheckUpdate = document.getElementById('btn-check-update');
    if (btnCheckUpdate) {
        btnCheckUpdate.addEventListener('click', () => checkAppUpdates(true));
    }
    const btnUpdateNow = document.getElementById('btn-update-now');
    if (btnUpdateNow) {
        btnUpdateNow.addEventListener('click', triggerSWUpdate);
    }
    const btnUpdateClose = document.getElementById('btn-update-close');
    if (btnUpdateClose) {
        btnUpdateClose.addEventListener('click', () => {
            document.getElementById('update-toast').classList.add('hidden');
        });
    }
});

// Arranque condicional gestionado por el sistema de autenticación dinámica

/* ==========================================================================
   SISTEMA INTEGRADO: GUÍA DE ENTRADAS Y EXCURSIONES
   ========================================================================== */

const excursionsData = [
  {
    id: "ex_borderless",
    day: 19,
    title: "TeamLab Borderless (Tokio)",
    category: "critica",
    price: "4.200 JPY",
    queueTime: "Variable",
    boothLocation: "Museo Digital de Arte en Azabudai Hills.",
    bestTime: "Ya comprado por anticipado.",
    link: "https://www.teamlab.art/e/borderless/",
    bookingId: "bk_teamlab",
    desc: "El MORI Building DIGITAL ART MUSEUM en Azabudai Hills. Experiencia visual tridimensional sin fronteras."
  },
  {
    id: "ex_shibuya_sky",
    day: 18,
    title: "Shibuya Sky (Tokio)",
    category: "critica",
    price: "3.400 JPY (Atardecer)",
    queueTime: "15 - 30 min (Pico de atardecer)",
    boothLocation: "Planta 14 (acceso) del edificio Scramble Square, mirador en planta 45 (azotea).",
    bestTime: "Lunes 3 de Agosto a las 23:55 h (Hora de Japón) para el atardecer del 18/08.",
    link: "https://www.shibuya-scramble-square.com/en/sky/ticket/",
    bookingId: "bk_shibuya",
    desc: "Mirador 360° al aire libre a 229 m. ESTRATEGIA: Intentar Web Oficial (00:00 h JST del 4 de Agosto) y si la tarjeta falla, usar Klook (00:02 h JST). Guardar datos de los 8 pasajeros en la app de Klook hoy."
  },
  {
    id: "ex_palacio_imperial",
    day: 6,
    title: "Palacio Imperial de Kioto",
    category: "critica",
    price: "Gratis",
    queueTime: "Sin colas",
    boothLocation: "Entrada principal del Palacio Imperial.",
    bestTime: "Ya reservado (Ver PDF Reserva_Palacio_Kyoto.pdf).",
    link: "https://sankan.kunaicho.go.jp/english/index.html",
    bookingId: "bk_palacio",
    desc: "Residencia imperial histórica en Kioto. Acceso gratuito. YA RESERVADO (el de Kioto ya está gestionado, el de Tokio es el que requiere reserva de la Casa Imperial si se desea visitar)."
  },
  {
    id: "ex_skytree",
    day: 17,
    title: "Tokyo Skytree (Tokio)",
    category: "critica",
    price: "~2.100 JPY",
    queueTime: "15 - 30 min (con reserva) | 2 horas (sin reserva)",
    boothLocation: "Piso 4 de Tokyo Solamachi (mostrador de tickets internacionales).",
    bestTime: "Comprar online 1 mes antes para elegir la hora del atardecer y evitar colas largas.",
    link: "https://www.tokyo-skytree.jp/en/ticket/",
    bookingId: "bk_skytree",
    desc: "La estructura más alta de Japón (634 metros) con vistas panorámicas ilimitadas de la capital."
  },
  {
    id: "ex_planets",
    day: 22,
    title: "TeamLab Planets (Tokio)",
    category: "critica",
    price: "3.800 JPY",
    queueTime: "Variable",
    boothLocation: "Acceso en Toyosu (Tokio).",
    bestTime: "Reservar con 2 meses de antelación.",
    link: "https://planets.teamlab.art/tokyo/es/tickets",
    bookingId: "bk_teamlab_planets",
    desc: "Museo de arte inmersivo donde se camina descalzo sobre el agua. Muy sensorial e interactivo."
  },
  {
    id: "ex_kaiyukan",
    day: 4,
    title: "Acuario Kaiyukan (Osaka)",
    category: "critica",
    price: "~2.700 JPY",
    queueTime: "10 - 20 min (con reserva) | 1 hora (sin reserva)",
    boothLocation: "Taquillas exteriores junto a la plaza de la noria de Tempozan.",
    bestTime: "Comprar online 1-2 semanas antes para evitar colas de taquilla de más de 1 hora.",
    link: "https://www.kaiyukan.com/language/eng/",
    bookingId: "bk_kaiyukan",
    desc: "Uno de los acuarios más grandes del mundo con tanques gigantes y un tiburón ballena espectacular."
  },
  {
    id: "ex_samurai_museum",
    day: 7,
    title: "Samurai & Ninja Museum (Kioto)",
    category: "critica",
    price: "~2.500 JPY",
    queueTime: "Sin esperas",
    boothLocation: "Cerca de la calle comercial Teramachi (Kioto).",
    bestTime: "Comprar online 2-3 semanas antes para asegurar tour en grupo de 8 personas.",
    link: "https://mai-ko.com/culture/samurai-ninja-museum-kyoto/",
    bookingId: "bk_samurai",
    desc: "Experiencia interactiva guiada con armaduras samurái reales, katanas, shurikens y lecciones históricas."
  },
  {
    id: "ex_romantico",
    day: 8,
    title: "Tren Romántico de Sagano",
    category: "transporte",
    price: "~880 JPY",
    queueTime: "Crítico (Se agota)",
    boothLocation: "Estaciones de Saga-Torokko o Kameoka-Torokko.",
    bestTime: "Comprar online exactamente 1 mes antes en la web de JR West.",
    link: "https://www.westjr.co.jp/global/en/ticket/route_search/",
    bookingId: "bk_romantico",
    desc: "Tren escénico de vapor que recorre el cañón del río Hozu en Arashiyama."
  },
  {
    id: "ex_barco_hozu",
    day: 8,
    title: "Barco del Río Hozugawa",
    category: "transporte",
    price: "6.000 JPY (Tarifa oficial actualizada)",
    queueTime: "Variable",
    boothLocation: "Muelle de Kameoka (traslado en bus desde la estación de Kameoka).",
    bestTime: "Reservar 1 mes antes coordinado con el Tren Romántico.",
    link: "https://www.hozugawakudari.jp/en",
    bookingId: "bk_hozu",
    desc: "Descenso de 2 horas en barca de madera por los rápidos del río Hozu hasta Arashiyama. Se requiere reserva online previa obligatoria."
  },
  {
    id: "ex_osaka_castle",
    day: 3,
    title: "Castillo de Osaka",
    category: "taquilla",
    price: "600 JPY",
    queueTime: "45 - 60 min (en taquilla física)",
    boothLocation: "En la explanada exterior de la base del castillo, frente al puente levadizo.",
    bestTime: "Comprar online en Klook o e-ticket oficial previamente para entrar directo por el torno y evitar la cola de taquilla.",
    link: "https://www.klook.com/es/activity/5915-osaka-castle-museum-ticket-osaka/",
    bookingId: null,
    desc: "Icono de Osaka reconstruido en 1931, con museo de 8 pisos sobre Toyotomi Hideyoshi y vistas a la ciudad. Nota: Altamente recomendable comprar online previamente para saltar la cola."
  },
  {
    id: "ex_umeda_sky",
    day: 3,
    title: "Umeda Sky Building",
    category: "taquilla",
    price: "1.500 JPY",
    queueTime: "15 - 30 min (Atardecer)",
    boothLocation: "Planta 39, justo antes del mirador circular de la planta 40.",
    bestTime: "Entre las 11:00 y las 16:00 (evitar atardecer) o después de las 20:00. Se puede comprar por anticipado en Klook para saltarse la cola de billetes.",
    link: "https://www.klook.com/es/activity/11624-umeda-sky-building-floating-garden-observatory-ticket-osaka/",
    bookingId: null,
    desc: "Rascacielos futurista formado por dos torres gemelas unidas por un mirador circular al aire libre."
  },
  {
    id: "ex_tsutenkaku",
    day: 3,
    title: "Torre Tsūtenkaku (Barrio Shinsekai)",
    category: "taquilla",
    price: "~2.000 JPY",
    queueTime: "20 - 45 min",
    boothLocation: "Sótano (B1F) de la torre, al inicio de la cola para los ascensores.",
    bestTime: "10:00 AM (al abrir) o por la noche a partir de las 18:30 (cierra 20:00).",
    link: null,
    bookingId: null,
    desc: "Torre retro en Shinsekai, símbolo de la Osaka de la posguerra con vistas y una estatua de la suerte."
  },
  {
    id: "ex_castillo_nijo",
    day: 6,
    title: "Castillo de Nijo (Kioto)",
    category: "taquilla",
    price: "800 JPY",
    queueTime: "10 - 20 min",
    boothLocation: "Taquillas exteriores y máquinas de autoventa a la derecha de la puerta este (East Otemon Gate).",
    bestTime: "08:45 AM (al abrir) o después de las 15:30 (cierra 17:00, última entrada 16:00).",
    link: null,
    bookingId: null,
    desc: "Palacio de los Shogunes con el famoso suelo ruiseñor antininja que emite chirridos al pisar."
  },
  {
    id: "ex_kiyomizudera",
    day: 7,
    title: "Templo Kiyomizu-dera (Kioto)",
    category: "taquilla",
    price: "400 JPY",
    queueTime: "10 - 15 min",
    boothLocation: "Antes del pórtico de entrada principal, pasada la puerta roja Deva Gate.",
    bestTime: "Antes de las 09:00 AM (abre a las 06:00 AM, ideal a las 07:30 - 08:30) o después de las 16:30.",
    link: null,
    bookingId: null,
    desc: "Templo Patrimonio de la Humanidad con una terraza de madera sin clavos que vuela sobre la ladera de la montaña."
  },
  {
    id: "ex_todaiji",
    day: 5,
    title: "Templo Tōdai-ji (Nara)",
    category: "taquilla",
    price: "600 JPY",
    queueTime: "10 - 20 min",
    boothLocation: "A la izquierda de la gran sala de madera del Buda (Daibutsuden).",
    bestTime: "Antes de las 10:00 AM o después de las 16:00 (evitar horas de autobuses de grupos turísticos).",
    link: null,
    bookingId: null,
    desc: "La estructura de madera más grande del mundo, hogar de la estatua de bronce del Gran Buda de 15m."
  },
  {
    id: "ex_kinkakuji",
    day: 7,
    title: "Kinkaku-ji (Pabellón Dorado)",
    category: "taquilla",
    price: "500 JPY",
    queueTime: "10 - 15 min",
    boothLocation: "Al final del paseo forestal de entrada, antes del estanque del pabellón.",
    bestTime: "09:00 AM (al abrir) o después de las 15:30 (cierra a las 17:00).",
    link: null,
    bookingId: null,
    desc: "El famoso pabellón de madera recubierto de pan de oro que se refleja en un estanque espejo."
  },
  {
    id: "ex_toshogu",
    day: 21,
    title: "Santuario Toshogu (Nikko)",
    category: "taquilla",
    price: "~1.300 JPY",
    queueTime: "15 - 30 min",
    boothLocation: "Entrada principal del santuario, cerca de la pagoda de cinco pisos.",
    bestTime: "08:30 AM (abre a las 08:00) o a partir de las 15:00 (cierra 17:00).",
    link: null,
    bookingId: null,
    desc: "El mausoleo de Ieyasu Tokugawa, ricamente ornamentado con relieves dorados y los famosos 3 monos sabios."
  },
  {
    id: "ex_cuevas_fuji",
    day: 14,
    title: "Cuevas de Hielo y Viento (Fuji)",
    category: "taquilla",
    price: "350 JPY cada una",
    queueTime: "10 - 20 min",
    boothLocation: "En la entrada de cada cueva individual (Narusawa Hyoketsu y Fugaku Fuketsu).",
    bestTime: "Antes de las 10:00 AM o después de las 15:30.",
    link: null,
    bookingId: null,
    desc: "Cuevas volcánicas con formaciones de hielo perpetuo y túneles naturales de lava bajo el bosque Aokigahara."
  },
  {
    id: "ex_shinhotaka",
    day: 11,
    title: "Teleférico Shinhotaka (Okuhida)",
    category: "taquilla",
    price: "2.900 JPY",
    queueTime: "15 - 30 min (Días despejados)",
    boothLocation: "Planta baja de la estación base en Shinhotaka Onsen.",
    bestTime: "08:30 AM (primera subida). Muy importante para evitar nubes de media mañana.",
    link: null,
    bookingId: null,
    desc: "Teleférico de dos pisos que sube a más de 2000m en los Alpes japoneses con vistas panorámicas brutales."
  },
  {
    id: "ex_joypolis",
    day: 22,
    title: "Joypolis Tokyo (Odaiba)",
    category: "taquilla",
    price: "~5.000 JPY",
    queueTime: "10 - 20 min (Fines de semana)",
    boothLocation: "Planta 3 del centro comercial Decks Tokyo Beach.",
    bestTime: "Antes de las 11:30 o después de las 17:00. O comprar entrada digital en el día vía Klook.",
    link: "https://tokyo-joypolis.com/language/english/",
    bookingId: "bk_joypolis",
    desc: "Parque de atracciones indoor de SEGA con simuladores interactivos en 3D, montañas rusas y arcades."
  },
  {
    id: "ex_bus_fuji",
    day: 13,
    title: "Bus Directo Takayama-Kawaguchiko",
    category: "transporte",
    price: "~10.000 JPY",
    queueTime: "Llenado rápido",
    boothLocation: "Estación de Autobuses de Takayama (Nohi Bus Terminal).",
    bestTime: "Ya comprado. Obligatorio reservar 1 mes antes exactamente a las 09:00 AM Japón.",
    link: "https://highway-buses.jp/course/kawaguchiko.php",
    bookingId: "bk_bus_fuji",
    desc: "Único autobús directo que cruza de los Alpes al Monte Fuji sin pasar por Tokio."
  },
  {
    id: "ex_coches_fuji",
    day: 13,
    title: "Coches de Alquiler (2 Honda Fit)",
    category: "transporte",
    price: "Variable",
    queueTime: "Sin esperas",
    boothLocation: "Oficina de Budget Rent-a-car en Kawaguchiko.",
    bestTime: "Reservar con 2-3 meses de antelación.",
    link: "https://www.budgetrentacar.co.jp/en/",
    bookingId: "bk_coches",
    desc: "Coche de alquiler para el grupo de 8 personas durante 3 días en los alrededores del Fuji."
  }
];

window.currentGuideFilter = 'all';
window.currentGuideSearch = '';

window.openExcursionsGuide = function() {
    const centerCard = document.getElementById('visual-card');
    if (!centerCard) return;
    
    // Añadimos clase para marcar el modo excursión (para consistencia de diseño visual)
    document.body.classList.add('mode-excursion-active');
    
    // Renderizar la estructura del dashboard
    centerCard.innerHTML = `
        <div class="excursions-guide-container" style="background: rgba(13, 17, 23, 0.85); border: 1px solid var(--gold); border-radius: 16px; padding: 25px; box-shadow: 0 0 30px rgba(251, 191, 36, 0.2); backdrop-filter: blur(10px); animation: fadeIn 0.4s ease-out; color: white; font-family: 'Montserrat', sans-serif;">
            <!-- Cabecera de la Guía -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(251, 191, 36, 0.3); padding-bottom: 15px; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                <h1 style="color: var(--gold); margin: 0; font-size: 1.6rem; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 12px; font-weight: 800; text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">
                    <i class="fa-solid fa-ticket" style="color: var(--gold); transform: rotate(-15deg); font-size: 1.8rem;"></i> GUÍA DE ENTRADAS Y COLAS
                </h1>
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px; font-size: 0.75rem; letter-spacing: 0.5px; text-transform: uppercase; font-family: inherit;">
                    <i class="fa-solid fa-arrow-left"></i> Volver a Preparación
                </button>
            </div>

            <!-- Filtros interactivos y buscador -->
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; margin-bottom: 25px; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <!-- Pestañas de Filtrado -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap;" class="guide-filter-tabs">
                    <button onclick="window.filterGuide('all', this)" class="filter-tab active" style="padding: 6px 14px; border-radius: 6px; border: 1px solid var(--gold); background: rgba(251,191,36,0.15); color: var(--gold); cursor: pointer; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s; font-family: inherit;">🔍 Todo</button>
                    <button onclick="window.filterGuide('critica', this)" class="filter-tab" style="padding: 6px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #cbd5e1; cursor: pointer; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s; font-family: inherit;">⚡ Críticas</button>
                    <button onclick="window.filterGuide('taquilla', this)" class="filter-tab" style="padding: 6px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #cbd5e1; cursor: pointer; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s; font-family: inherit;">🎟️ Taquilla</button>
                    <button onclick="window.filterGuide('transporte', this)" class="filter-tab" style="padding: 6px 14px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #cbd5e1; cursor: pointer; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s; font-family: inherit;">🚊 Traslados</button>
                </div>

                <!-- Campo de Búsqueda -->
                <div style="position: relative; flex: 1; max-width: 320px; min-width: 200px;">
                    <i class="fa-solid fa-magnifying-glass" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.4); font-size: 0.8rem;"></i>
                    <input type="text" id="guide-search" oninput="window.searchGuide(this.value)" placeholder="Buscar atracción, día o palabra clave..." style="width: 100%; padding: 8px 12px 8px 34px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; font-size: 0.8rem; outline: none; transition: all 0.3s; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); font-family: inherit;">
                </div>
            </div>

            <!-- Panel de Grid de Tarjetas -->
            <div id="guide-cards-container" class="excursions-grid excursions-grid-2" style="display: grid; gap: 18px; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));">
                <!-- Tarjetas cargadas vía JS -->
            </div>
            
            <!-- Retorno al final de la página -->
            <div style="display: flex; justify-content: center; margin-top: 35px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 25px;">
                <button onclick="document.body.classList.remove('mode-excursion-active'); renderPreparationPage(travelData[0]);" class="back-itinerary-btn prominent" style="background: rgba(251, 191, 36, 0.15); border: 1px solid var(--gold); color: var(--gold); padding: 12px 32px; border-radius: 10px; font-weight: 800; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 10px; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; font-family: inherit; box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);">
                    <i class="fa-solid fa-chevron-left"></i> Volver al Plan de Acción
                </button>
            </div>
        </div>
    `;

    // Cargar las tarjetas inicialmente
    window.renderGuideCards(excursionsData);
};

window.filterGuide = function(category, element) {
    const tabs = document.querySelectorAll('.guide-filter-tabs .filter-tab');
    tabs.forEach(tab => {
        tab.style.border = '1px solid rgba(255,255,255,0.1)';
        tab.style.background = 'rgba(0,0,0,0.3)';
        tab.style.color = '#cbd5e1';
        tab.classList.remove('active');
    });
    
    element.style.border = '1px solid var(--gold)';
    element.style.background = 'rgba(251,191,36,0.15)';
    element.style.color = 'var(--gold)';
    element.classList.add('active');

    window.currentGuideFilter = category;
    window.applyGuideFilters();
};

window.searchGuide = function(query) {
    window.currentGuideSearch = query.toLowerCase().trim();
    window.applyGuideFilters();
};

window.applyGuideFilters = function() {
    let filtered = excursionsData;
    
    if (window.currentGuideFilter !== 'all') {
        filtered = filtered.filter(item => item.category === window.currentGuideFilter);
    }
    
    if (window.currentGuideSearch) {
        filtered = filtered.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(window.currentGuideSearch);
            const descMatch = item.desc.toLowerCase().includes(window.currentGuideSearch);
            const locationMatch = item.boothLocation.toLowerCase().includes(window.currentGuideSearch);
            const dayMatch = `día ${item.day}`.includes(window.currentGuideSearch) || item.day.toString() === window.currentGuideSearch;
            return titleMatch || descMatch || locationMatch || dayMatch;
        });
    }
    
    window.renderGuideCards(filtered);
};

window.toggleGuideBooking = function(bookingId) {
    if (typeof window.toggleBookingStatus === 'function') {
        window.toggleBookingStatus(bookingId, 0);
        
        // Refrescar estado de los botones directamente en las tarjetas cargadas
        const isComprado = window.getBookingStatus(bookingId) === 'comprado';
        const btns = document.querySelectorAll(`[id="${bookingId}_guide_btn"]`);
        btns.forEach(btn => {
            btn.style.background = isComprado ? 'var(--success)' : 'rgba(239, 68, 68, 0.2)';
            btn.style.borderColor = isComprado ? 'var(--success)' : 'var(--danger)';
            btn.innerHTML = `<i class="fa-solid ${isComprado ? 'fa-check-double' : 'fa-clock'}"></i> ${isComprado ? 'COMPRADO' : 'PENDIENTE'}`;
        });
    }
};

window.renderGuideCards = function(data) {
    const container = document.getElementById('guide-cards-container');
    if (!container) return;

    // Enriquecer dinámicamente cada atracción con sus plazos de apertura y canales de venta
    data.forEach(item => {
        const extraInfo = {
            ex_borderless: { releaseInfo: "3 meses antes (los slots se liberan el primer día de cada mes para los 3 meses siguientes).", channels: "Web oficial y Klook." },
            ex_shibuya_sky: { releaseInfo: "Exactamente 14 días antes a las 00:00 h Japón (medianoche del lunes 3 de agosto en Japón para tu visita).", channels: "Web oficial (Webket) y Klook (puede tener 2-5 min de retraso por API)." },
            ex_palacio_imperial: { releaseInfo: "YA RESERVADO (Normalmente abre 2 meses antes en la web oficial de la Casa Imperial).", channels: "Solo Web oficial de la Casa Imperial (entrada nominal gratuita)." },
            ex_skytree: { releaseInfo: "30 días antes a las 00:00 JST.", channels: "Web oficial y Klook (muy recomendado en Klook por ofertas o pases combinados)." },
            ex_planets: { releaseInfo: "Aproximadamente 3 meses antes (conviene reservar pronto los mejores slots).", channels: "Web oficial y Klook." },
            ex_kaiyukan: { releaseInfo: "30 días antes a las 00:00 JST en la web oficial.", channels: "Web oficial and Klook." },
            ex_samurai_museum: { releaseInfo: "Abierto con 2-3 meses de antelación.", channels: "Web oficial y Klook / TripAdvisor." },
            ex_romantico: { releaseInfo: "Exactamente 1 mes antes a las 10:00 h JST (03:00 AM en España).", channels: "Web oficial (JR West) obligatoria para asegurar el vagón abierto nº 5. También disponible en Klook." },
            ex_barco_hozu: { releaseInfo: "Aproximadamente 1-2 meses antes.", channels: "Web oficial (recomendado) y Klook." },
            ex_osaka_castle: { releaseInfo: "Sin antelación estricta (puedes comprarlo en el mismo día).", channels: "Klook (e-ticket con código QR) o Taquilla física (cola muy lenta)." },
            ex_umeda_sky: { releaseInfo: "Sin antelación estricta. Disponible siempre online.", channels: "Klook (e-ticket directo) o Taquilla física." },
            ex_tsutenkaku: { releaseInfo: "Se compra en el mismo día directamente allí (el tobogán Tower Slider se paga en taquilla).", channels: "Taquilla física." },
            ex_castillo_nijo: { releaseInfo: "Sin antelación estricta.", channels: "Klook (e-ticket) o Taquilla física." },
            ex_kiyomizudera: { releaseInfo: "No requiere reserva previa online. La cola fluye rápido.", channels: "Taquilla física en efectivo (el ticket de entrada es un talismán de papel)." },
            ex_todaiji: { releaseInfo: "No requiere reserva online.", channels: "Taquilla física en efectivo." },
            ex_kinkakuji: { releaseInfo: "No requiere reserva online.", channels: "Taquilla física en efectivo." },
            ex_toshogu: { releaseInfo: "No requiere reserva online previa. Se puede comprar allí o usar el Nikko World Heritage Pass.", channels: "Taquilla física." },
            ex_cuevas_fuji: { releaseInfo: "No existe reserva online previa.", channels: "Taquilla física el mismo día." },
            ex_shinhotaka: { releaseInfo: "Sin antelación estricta.", channels: "Klook (e-ticket directo) o Taquilla física." },
            ex_joypolis: { releaseInfo: "Sin antelación estricta.", channels: "Klook (con descuento de pulsera de pase de un día completo) o Taquilla física." },
            ex_bus_fuji: { releaseInfo: "Exactamente 1 mes antes a las 09:00 JST (02:00 AM en España). YA COMPRADO.", channels: "Solo Web oficial (Highway Bus / Nohi Bus)." },
            ex_coches_fuji: { releaseInfo: "2-3 meses antes.", channels: "Web oficial del proveedor de alquiler (Budget, Toyota Rent-a-Car, etc.)." }
        }[item.id];
        if (extraInfo) {
            item.releaseInfo = extraInfo.releaseInfo;
            item.channels = extraInfo.channels;
        }
    });
    
    if (data.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: rgba(255,255,255,0.4); font-size: 1rem;">
                <i class="fa-solid fa-ban" style="font-size: 3rem; margin-bottom: 15px; color: var(--gold); opacity: 0.6;"></i>
                <p style="margin: 0; font-weight: bold;">Ninguna atracción coincide con los criterios de búsqueda.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = data.map(item => {
        const isComprado = item.bookingId ? (window.getBookingStatus(item.bookingId) === 'comprado') : false;
        let decision = Persistence.getItem('decision_' + item.id);
        if (decision === null || decision === 'undefined') {
            decision = isComprado ? 'comprar' : 'no_decidido';
        }
        
        let cardBorder = 'rgba(255,255,255,0.06)';
        let cardBg = 'rgba(15,23,42,0.5)';
        if (decision === 'comprar') {
            cardBorder = 'rgba(16, 185, 129, 0.4)';
            cardBg = 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(16,185,129,0.05))';
        } else if (decision === 'descartar') {
            cardBorder = 'rgba(239, 68, 68, 0.4)';
            cardBg = 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(239,68,68,0.05))';
        }
        
        let headerBadgeBg = 'var(--gold)';
        let headerBadgeText = '🎟️ TAQUILLA';
        if (item.category === 'critica') {
            headerBadgeBg = 'var(--neon-purple)';
            headerBadgeText = '⚡ CRÍTICA';
        } else if (item.category === 'transporte') {
            headerBadgeBg = 'var(--neon-blue)';
            headerBadgeText = '🚊 TRASLADO';
        }
        
        let actionHTML = '';
        if (item.category === 'critica' || item.category === 'transporte') {
            actionHTML = `
                <div style="display: flex; gap: 8px; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; flex-wrap: wrap;">
                    <button id="${item.bookingId}_guide_btn" onclick="window.toggleGuideBooking('${item.bookingId}')" 
                            style="background: ${isComprado ? 'var(--success)' : 'rgba(239, 68, 68, 0.2)'}; 
                                   color: white; border: 1px solid ${isComprado ? 'var(--success)' : 'var(--danger)'}; 
                                   padding: 6px 12px; border-radius: 6px; font-size: 0.68rem; cursor: pointer; flex: 1; min-width: 100px; transition: all 0.3s; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit;">
                        <i class="fa-solid ${isComprado ? 'fa-check-double' : 'fa-clock'}"></i> 
                        ${isComprado ? 'COMPRADO' : 'PENDIENTE'}
                    </button>
                    ${item.link ? `
                        <a href="${item.link}" target="_blank" 
                           style="background: rgba(56,189,248,0.12); color: #38bdf8; border: 1px solid #38bdf8; 
                                  padding: 6px 12px; border-radius: 6px; font-size: 0.68rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: bold; flex: 1; min-width: 100px; transition: all 0.3s;"
                           onmouseover="this.style.background='rgba(56,189,248,0.25)'"
                           onmouseout="this.style.background='rgba(56,189,248,0.12)'">
                            <i class="fa-solid fa-up-right-from-square"></i> COMPRAR WEB
                        </a>
                    ` : ''}
                </div>
            `;
        } else if (item.category === 'taquilla') {
            const waitTimeVal = parseInt(item.queueTime) || 0;
            const waitColor = waitTimeVal > 10 ? 'var(--gastro-gold)' : '#10b981';
            const waitBadge = `<span style="color: ${waitColor}; font-weight: 800; font-size: 0.72rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-clock"></i> Cola: ${item.queueTime}</span>`;
            
            actionHTML = `
                <div style="margin-top: 12px; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.06);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        ${waitBadge}
                        ${waitTimeVal > 10 ? `<span style="background: rgba(251,191,36,0.1); color: var(--gold); border: 1px solid var(--gold); font-size: 0.58rem; padding: 2px 6px; border-radius: 4px; font-weight: 900; letter-spacing: 0.5px; text-transform: uppercase;"><i class="fa-solid fa-triangle-exclamation"></i> Cola > 10m</span>` : ''}
                    </div>
                    <div style="font-size: 0.72rem; color: rgba(255,255,255,0.65); display: flex; align-items: flex-start; gap: 6px; line-height: 1.35;">
                        <i class="fa-solid fa-map-location-dot" style="color: var(--accent); margin-top: 2px; flex-shrink: 0; font-size: 0.75rem;"></i>
                        <span><strong>Taquilla:</strong> ${item.boothLocation}</span>
                    </div>
                    ${item.bestTime ? `
                        <div style="font-size: 0.72rem; color: #a7f3d0; background: rgba(16,185,129,0.04); border: 1px solid rgba(16,185,129,0.15); padding: 6px; border-radius: 6px; display: flex; align-items: flex-start; gap: 6px; line-height: 1.35;">
                            <i class="fa-solid fa-calendar-check" style="color: #34d399; flex-shrink: 0; font-size: 0.75rem;"></i>
                            <span><strong>Mejor hora:</strong> ${item.bestTime}</span>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            <div class="excursion-card" style="display: flex; flex-direction: column; justify-content: space-between; background: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 12px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); transition: all 0.3s; min-height: 250px;"
                 onmouseover="this.style.borderColor='rgba(251,191,36,0.3)'; this.style.boxShadow='0 4px 20px rgba(251,191,36,0.08)';"
                 onmouseout="this.style.borderColor='${cardBorder}'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.3)';">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <span style="background: ${item.category === 'critica' || item.category === 'transporte' ? headerBadgeBg : 'transparent'}; 
                                     color: ${item.category === 'critica' || item.category === 'transporte' ? 'white' : 'var(--gold)'}; 
                                     border: 1px solid ${item.category === 'critica' || item.category === 'transporte' ? 'transparent' : 'var(--gold)'};
                                     font-size: 0.6rem; padding: 2px 6px; border-radius: 4px; font-weight: 900; letter-spacing: 0.5px; text-transform: uppercase;">
                            ${headerBadgeText}
                        </span>
                        <span style="font-size: 0.72rem; color: #a5b4fc; font-weight: 800; background: rgba(165,180,252,0.08); border: 1px solid rgba(165,180,252,0.15); padding: 2px 8px; border-radius: 4px;">DÍA ${item.day}</span>
                    </div>
                    <h3 style="margin: 0 0 8px 0; font-size: 1.1rem; color: white; font-weight: bold; text-shadow: 0 1px 3px rgba(0,0,0,0.8); line-height: 1.25;">${item.title}</h3>
                    <p style="margin: 0 0 12px 0; font-size: 0.78rem; color: rgba(255,255,255,0.55); line-height: 1.45; font-weight: 400;">${item.desc}</p>
                    <div style="font-size: 0.78rem; color: #cbd5e1; display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                        <i class="fa-solid fa-tag" style="color: var(--gold);"></i>
                        <strong>Precio:</strong> <span style="color: var(--gold); font-weight: bold;">${item.price}</span>
                    </div>
                    ${item.releaseInfo ? `
                    <div style="font-size: 0.72rem; color: #e2e8f0; display: flex; align-items: flex-start; gap: 6px; margin-bottom: 4px; line-height: 1.35;">
                        <i class="fa-solid fa-calendar-plus" style="color: #fbbf24; margin-top: 2px; flex-shrink: 0; font-size: 0.75rem;"></i>
                        <span><strong>Apertura:</strong> ${item.releaseInfo}</span>
                    </div>` : ''}
                    ${item.channels ? `
                    <div style="font-size: 0.72rem; color: #e2e8f0; display: flex; align-items: flex-start; gap: 6px; margin-bottom: 4px; line-height: 1.35;">
                        <i class="fa-solid fa-store" style="color: #60a5fa; margin-top: 2px; flex-shrink: 0; font-size: 0.75rem;"></i>
                        <span><strong>Canales:</strong> ${item.channels}</span>
                    </div>` : ''}
                </div>
                
                <!-- Decisión Familiar -->
                <div style="margin-top: 12px; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 10px; display: flex; flex-direction: column; gap: 6px;">
                    <div style="font-size: 0.68rem; color: rgba(255,255,255,0.6); font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: space-between;">
                        <span>👪 Decisión Familiar:</span>
                        <span style="font-weight: 900; color: ${decision === 'comprar' ? '#10b981' : (decision === 'descartar' ? '#ef4444' : 'rgba(255,255,255,0.4)')}">
                            ${decision === 'comprar' ? '✅ COMPRAR' : (decision === 'descartar' ? '❌ DESCARTADO' : '⏳ EN DEBATE')}
                        </span>
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <button onclick="window.setDecision('${item.id}', 'no_decidido')" 
                                style="background: ${decision === 'no_decidido' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.3)'}; 
                                       color: ${decision === 'no_decidido' ? 'white' : 'rgba(255,255,255,0.4)'}; 
                                       border: 1px solid ${decision === 'no_decidido' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.05)'}; 
                                       padding: 4px 0; border-radius: 4px; font-size: 0.65rem; cursor: pointer; flex: 1; font-weight: bold; transition: all 0.2s; font-family: inherit;">
                            ⏳ Debate
                        </button>
                        <button onclick="window.setDecision('${item.id}', 'comprar')" 
                                style="background: ${decision === 'comprar' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(0,0,0,0.3)'}; 
                                       color: ${decision === 'comprar' ? '#34d399' : 'rgba(255,255,255,0.4)'}; 
                                       border: 1px solid ${decision === 'comprar' ? '#10b981' : 'rgba(255,255,255,0.05)'}; 
                                       padding: 4px 0; border-radius: 4px; font-size: 0.65rem; cursor: pointer; flex: 1; font-weight: bold; transition: all 0.2s; font-family: inherit;">
                            ✅ Comprar
                        </button>
                        <button onclick="window.setDecision('${item.id}', 'descartar')" 
                                style="background: ${decision === 'descartar' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(0,0,0,0.3)'}; 
                                       color: ${decision === 'descartar' ? '#fca5a5' : 'rgba(255,255,255,0.4)'}; 
                                       border: 1px solid ${decision === 'descartar' ? '#ef4444' : 'rgba(255,255,255,0.05)'}; 
                                       padding: 4px 0; border-radius: 4px; font-size: 0.65rem; cursor: pointer; flex: 1; font-weight: bold; transition: all 0.2s; font-family: inherit;">
                            ❌ Descartar
                        </button>
                    </div>
                </div>

                ${actionHTML}
            </div>
        `;
    }).join('');
};

window.setDecision = function(itemId, decision) {
    Persistence.setItem('decision_' + itemId, decision);
    window.applyGuideFilters();
};


