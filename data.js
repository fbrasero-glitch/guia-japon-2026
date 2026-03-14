/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */

const travelData = [
    // --- PREVIO: PREPARACIÓN DEL VIAJE ---
    {
        day: 0, type: "preparation",
        date: "PREPARATIVOS", title: "📋 PREPARATIVOS",
        coords: [36, 138], zoom: 5,
        hotel: "",
        image: "",

        bookingPanel: {
            title: "Control Maestro de Reservas Críticas",
            phases: [
                {
                    name: "FASE 1: 2-3 Meses Antes",
                    color: "var(--neon-purple)",
                    items: [
                        { name: "Coches de Alquiler en Fuji (2 Honda Fit)", status: "pending", date: "2-3 meses antes" },
                        { name: "TeamLab Planets (Tokio)", status: "pending", date: "Exactamente 2 meses antes" },
                        { name: "Palacio Imperial de Kioto", status: "pending", date: "Exactamente 2 meses antes" }
                    ]
                },
                {
                    name: "FASE 2: 1 Mes Antes (CRÍTICA)",
                    color: "var(--danger)",
                    items: [
                        { name: "Bus Takayama-Fuji (Highwaybus)", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Shibuya Sky (Atardecer)", status: "pending", date: "Exactamente 4 semanas antes" },
                        { name: "Tren Romántico de Arashiyama", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Shinkansen Kioto-Nagoya", status: "pending", date: "Exactamente 1 mes antes" },
                        { name: "Bus Nohi Shirakawa-go", status: "pending", date: "Exactamente 1 mes antes" }
                    ]
                },
                {
                    name: "FASE 3: 2-3 Semanas Antes",
                    color: "var(--gold)",
                    items: [
                        { name: "Samurai & Ninja Museum (Kioto)", status: "pending", date: "2-3 semanas antes" },
                        { name: "Acuario Kaiyukan (Osaka)", status: "pending", date: "1-2 semanas antes" }
                    ]
                }
            ]
        },
        preparation: {

            travelers: ["FELIPE", "LORENA", "IVAN", "LAURA", "GEMA", "CESAR", "VICENTE", "LOLA"],
            sections: [
                {
                    title: "Ahora — Acción Inmediata",
                    icon: "fa-solid fa-exclamation-triangle",
                    color: "#ef4444",
                    items: [
                        {
                            title: "Comprobar y renovar pasaportes",
                            desc: "Verificar validez de todos los pasaportes; iniciar renovación si alguno vence en menos de 6 meses desde la fecha de regreso.",
                            who: "Todos los viajeros (8). Prioridad para los mayores y niños.",
                            why: "Los trámites de renovación pueden tardar semanas; no dejar para el último momento."
                        },
                        {
                            title: "Documentación sanitaria y medicación",
                            desc: "Reunir recetas, medicación habitual, historial médico breve para los mayores, y preparar botiquín familiar.",
                            who: "Familia responsable; revisar medicación de los mayores."
                        },
                        {
                            title: "Reservar transporte aeropuerto‑hotel",
                            desc: "Reservar van/minibús o varios taxis para llegada y salida (8 pax + equipaje).",
                            who: "Persona encargada de logística."
                        },
                        {
                            title: "Contratar seguro de viaje",
                            desc: "Seguro con cobertura médica, repatriación, cancelación y asistencia para mayores. Guardar póliza en móvil y en papel.",
                            who: "Responsable de reservas."
                        }
                    ]
                },
                {
                    title: "6 Meses Antes",
                    icon: "fa-solid fa-calendar-check",
                    color: "#f59e0b",
                    items: [
                        {
                            title: "Reservar plazas en Shinkansen y Limited Express",
                            desc: "Reservar asientos para todos los tramos largos (Shinkansen, Hida, etc.) y buses expresos. Pedir asientos contiguos.",
                            who: "Responsable de transporte."
                        },
                        {
                            title: "Comprar entradas con antelación",
                            desc: "USJ (Studio Pass + Express), teleféricos, cruceros, entradas con cupo (Super Nintendo World).",
                            who: "Responsable de actividades."
                        },
                        {
                            title: "Reservar ryokan y habitaciones con necesidades especiales",
                            desc: "Confirmar habitaciones con camas accesibles o plantas bajas para mayores; solicitar futons si procede.",
                            who: "Responsable de alojamiento."
                        }
                    ]
                },
                {
                    title: "3 Meses Antes",
                    icon: "fa-solid fa-clock",
                    color: "#3b82f6",
                    items: [
                        {
                            title: "Contratar eSIM o pocket Wi‑Fi",
                            desc: "Comprar eSIMs o reservar pocket Wi‑Fi para 8 dispositivos; comprobar cobertura en zonas montañosas.",
                            who: "Responsable de comunicaciones."
                        },
                        {
                            title: "Alquiler de vehículo y unidades ETC",
                            desc: "Reservar coche/van para los días de conducción (Kawaguchiko, Alpes); solicitar unidad ETC y GPS en inglés.",
                            who: "Responsable de conducción."
                        },
                        {
                            title: "Solicitar asistencia en aeropuertos",
                            desc: "Si los mayores necesitan ayuda, solicitar asistencia para embarque/desembarque y en transbordos.",
                            who: "Responsable de viajes."
                        }
                    ]
                },
                {
                    title: "1–2 Meses Antes",
                    icon: "fa-solid fa-calendar-days",
                    color: "#10b981",
                    items: [
                        {
                            title: "Cambio de divisas y tarjetas",
                            desc: "Sacar efectivo inicial (recomendación 30.000–50.000 JPY por persona) y avisar al banco de viaje para evitar bloqueos. Planificar retiradas en 7‑Bank/Japan Post.",
                            who: "Responsable financiero."
                        },
                        {
                            title: "Enviar maletas por Takkyubin (opcional)",
                            desc: "Contratar envío de maletas entre hoteles para días con muchos traslados; reduce carga en trenes.",
                            who: "Responsable de equipaje."
                        },
                        {
                            title: "Confirmar reservas de transporte puerta a puerta",
                            desc: "Confirmar vans/minibús/taxis para llegada y salida; pedir confirmación de espacio para equipaje.",
                            who: "Responsable de logística."
                        }
                    ]
                },
                {
                    title: "2–3 Semanas Antes",
                    icon: "fa-solid fa-file-lines",
                    color: "#8b5cf6",
                    items: [
                        {
                            title: "Documentación digital y copias físicas",
                            desc: "Guardar QR de Visit Japan Web, pólizas, reservas, direcciones en japonés en el móvil y llevar copias impresas.",
                            who: "Todos; responsable de documentación coordina."
                        },
                        {
                            title: "Descargar apps y mapas offline",
                            desc: "Google Maps offline, Google Translate, Navitime/Hyperdia, apps JR; guardar direcciones de hoteles en japonés.",
                            who: "Responsable de tecnología."
                        },
                        {
                            title: "Comprobación final de vacunas y salud",
                            desc: "Revisar vacunas rutinarias; llevar certificados si procede. Consultar médico para mayores si hay dudas.",
                            who: "Familia y médico."
                        }
                    ]
                },
                {
                    title: "1 Semana Antes",
                    icon: "fa-solid fa-plane",
                    color: "#ec4899",
                    items: [
                        {
                            title: "Check‑in online y tarjetas de embarque",
                            desc: "Hacer check‑in online para todos los pasajeros; confirmar facturación hasta destino final.",
                            who: "Responsable de vuelos."
                        },
                        {
                            title: "Preparar equipaje y etiquetas",
                            desc: "Etiquetar maletas con nombre y teléfono; preparar equipaje de mano con medicación, documentos y cargadores.",
                            who: "Todos los viajeros."
                        },
                        {
                            title: "Confirmar transporte local y reservas",
                            desc: "Revisar horarios Haruka/limousine bus, confirmar vans y reservas de taxis para llegada y salida.",
                            who: "Responsable de logística."
                        }
                    ]
                },
                {
                    title: "48–24 Horas Antes",
                    icon: "fa-solid fa-hourglass-half",
                    color: "#f97316",
                    items: [
                        {
                            title: "Revisar estado de vuelos y tiempos de llegada al aeropuerto",
                            desc: "Comprobar posibles retrasos; planificar llegada al aeropuerto con margen extra por grupo grande (recomendado 3 horas antes).",
                            who: "Responsable de vuelos."
                        },
                        {
                            title: "Imprimir documentación esencial",
                            desc: "Pasaportes, pólizas, reservas de tren, billetes de bus, direcciones en japonés, números de emergencia.",
                            who: "Responsable de documentación."
                        }
                    ]
                },
                {
                    title: "Día de Salida",
                    icon: "fa-solid fa-rocket",
                    color: "#06b6d4",
                    items: [
                        {
                            title: "Llegar al aeropuerto con antelación",
                            desc: "Llegar 3 horas antes para facturación de 8 personas y control de seguridad.",
                            who: "Todo el grupo."
                        },
                        {
                            title: "Comprobación final",
                            desc: "Verificar pasaportes, tarjetas de embarque, efectivo y medicación en equipaje de mano.",
                            who: "Responsable de grupo."
                        }
                    ]
                }
            ],
            specialNotes: [
                {
                    title: "Acciones específicas para mayores y niños",
                    items: [
                        "Asistencia en aeropuertos y trenes: solicitar ayuda para embarque y desplazamientos en estaciones.",
                        "Asientos y confort: reservar asientos con espacio adicional cuando sea posible; evitar cambios de tren largos sin descanso.",
                        "Documentación médica: llevar historial y recetas en inglés o traducidas."
                    ]
                }
            ],
            messages: [
                {
                    title: "Reserva van/minibús aeropuerto",
                    text: "Solicito reserva de un minibús/van para 8 pasajeros con espacio para 8 maletas grandes y 8 equipajes de mano. Llegada KIX 28‑Jul, salida prevista del aeropuerto aprox. 20:30. Punto de recogida: salida internacional. ¿Confirmación y precio, por favor?"
                },
                {
                    title: "Solicitud de asistencia en aeropuerto",
                    text: "Solicitamos asistencia para dos pasajeros mayores (más de 70 años) en los procesos de inmigración, recogida de equipaje y transbordos. Vuelo llegada KIX 28‑Jul 18:50. ¿Cómo lo gestionan?"
                },
                {
                    title: "Reserva de asientos Shinkansen",
                    text: "Reservar 8 asientos contiguos en el Shinkansen (Nozomi/Hikari) desde Shin‑Osaka a Hiroshima el 31‑Jul, ida y vuelta. ¿Asientos juntos disponibles?"
                },
                {
                    title: "Envío de maletas (Takkyubin)",
                    text: "Solicito envío de 8 maletas grandes desde Hotel A (Osaka) a Hotel B (Kioto) para entrega el 1‑Ago. ¿Precio y tiempo de entrega?"
                }
            ],
            priorities: [
                { level: "Máxima", items: ["Pasaportes y seguro de viaje"] },
                { level: "Alta", items: ["Reservas de transporte (vans, Shinkansen, buses) y entradas a atracciones con aforo"] }
            ],
            tips: [
                "Optimización de equipaje: usar takkyubin para días con muchos traslados; facilita movilidad y confort para mayores.",
                "Comunicación: designad 1–2 responsables (logística y documentación) que centralicen reservas y comprobaciones."
            ]
        }
    },

    // --- DÍA 1: INICIO DE LA EXPEDICIÓN ---
    {
        day: 1, type: "travel",
        date: "Lun, 27 Julio", title: "🛫 El Gran Despegue",
        coords: [41.2865, 28.8713], zoom: 4,
        hotel: "Noche en vuelo (Turkish Airlines)",
        image: "images/dia1-vuelo.jpg", // Foto del avión

        logistics: [
            { title: "Documentación", text: "Pasaportes, permiso conducir internacional y QR Visit Japan Web listos." },
            { title: "Salud", text: "Llevad botiquín (analgésicos, antidiarreicos) y seguro médico a mano." },
            { title: "Estrategia Sueño", text: "Intentad relajaros pero NO dormir profundamente en el primer vuelo para ajustar el sueño luego." }
        ],

        timeline: [
            { time: "22:30", title: "Aeropuerto Valencia (VLC)", desc: "Mostradores Turkish Airlines. Facturar maletas hasta destino final (KIX)." },
            { time: "01:45", title: "Salida Vuelo TK1314", desc: "Duración 3h 40m. Cena a bordo. Destino Estambul." },
            { time: "06:05", title: "Escala en Estambul", desc: "Seguir carteles púrpuras 'International Transfers'. No recoger maletas. Buscar puerta vuelo TK86." }
        ],

        visualContent: {
            summary: "Inicio de la Expedición Familiar. Objetivo: Gestión del cansancio y logística.",
            details: "Revisad mochilas de cabina: Cargadores, Powerbank y almohadilla de cuello."
        }
    },

    // --- DÍA 2: LLEGADA A JAPÓN ---
    {
        day: 2, type: "travel",
        date: "Mar, 28 Julio", title: "🎌 Aterrizaje en Japón",
        coords: [34.434, 135.244], zoom: 12,
        hotel: "Hotel Wing International Select Osaka Umeda",
        image: "images/dia2-osaka.jpg", // Foto llegada/hotel

        logistics: [
            { title: "Jet Lag", text: "En el avión, reloj en hora Japón (+7h). Dormir primeras 6h, aguantar las últimas 4h." },
            { title: "Dinero", text: "Sacad efectivo en cajero '7-Bank' (7-Eleven) en llegadas." },
            { title: "Transporte", text: "Comprad tarjeta ICOCA en máquinas JR o llevad Suica en iPhone." }
        ],

        additions: [
            "Llevad efectivo: recomendación inicial 30.000–50.000 JPY por persona. Usad cajeros 7‑Bank (7‑Eleven) o Japan Post ATM para retirar con tarjeta extranjera.",
            "Contratad eSIM o pocket Wi‑Fi para datos; en zonas montañosas la cobertura puede ser limitada. Instalad y descargad offline: Google Maps, Google Translate."
        ],

        prices: {
            transport: "~3.600-4.800 JPY (3-4 taxis o van de 8 plazas desde Osaka Station, dividido entre 8 = ~450-600 JPY por persona)",
            food: "~500 JPY (Onigiri/Sándwich)",
            total: "~950-1.100 JPY (6-7€) por persona"
        },

        timeline: [
            { time: "08:40", title: "Vuelo a Osaka", desc: "Salida TK86. Duración 11h 10m." },
            { time: "18:50", title: "Aterrizaje KIX", desc: "Inmigración (QR Visit Japan) y recogida de maletas." },
            { time: "20:15", title: "Tren Haruka Express", desc: "Ticket hasta Osaka Station. ~50 min trayecto reservado." },
            { time: "21:30", title: "Taxi al Hotel", desc: "Desde Osaka Station. Reservad 3-4 taxis o una van de 8 plazas. Enseñad dirección en japonés. Coste ~1.200 JPY por taxi (total ~3.600-4.800 JPY para grupo de 8)." },
            { time: "22:00", title: "Cena y Dormir", desc: "Onigiri/Sándwich en Lawson. Dormir inmediatamente para vencer al jet lag." }
        ],

        visualContent: {
            summary: "Primer contacto con suelo nipón. Prioridad: Trámites rápidos y descanso.",
            photoSpot: "Foto de bienvenida en el aeropuerto KIX."
        }
    },

    // --- DÍA 3: OSAKA (OPCIONES) ---
    {
        day: 3, type: "stay",
        date: "Mié, 29 Julio", title: "🏯 Osaka: Samuráis y Neones",
        coords: [34.687, 135.526], zoom: 13,
        hotel: "Hotel Wing International Select Osaka Umeda",
        hotelImage: "images/hotel-wing-osaka.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda",
        image: "images/dia3-portada.jpg",

        logistics: [
            { title: "Clima", text: "Calor y humedad extremos. Ropa transpirable e hidratación." },
            { title: "Reservas", text: "Para atracciones con aforo (Acuario, Umeda Sky), comprobar venta online." }
        ],

        timeline: [
            { time: "09:00", title: "Castillo de Osaka", desc: "Visita jardines y museo. (Base)" },
            { time: "16:30", title: "Umeda Sky Building", desc: "Vistas panorámicas al atardecer. (Base)" },
            { time: "20:00", title: "Cena Comilona", desc: "Evento fijo de la ruta." }
        ],

        prices: {
            transport: "~800 JPY",
            entrances: "~2.100 JPY (Castillo + Umeda)",
            food: "~3.500 JPY",
            total: "~6.400 JPY (Base)"
        },

        transportTimeline: [
            { time: "09:00", type: "point", title: "Inicio en Hotel", icon: "fa-solid fa-bed" },
            {
                time: "",
                type: "transit",
                title: "Tren: JR Osaka Loop Line (Rojo)",
                price: "180 JPY",
                timeLabel: "~25 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Wing+International+Select+Osaka+Umeda&destination=Osakajokoen+Station&travelmode=transit",
                tacticalGuideId: "mission01"
            },
            { time: "09:30", type: "point", title: "Llegada a Castillo Osaka", icon: "fa-solid fa-fort-awesome" },
            {
                time: "",
                type: "transit",
                title: "JR Loop Line (Retorno) + Caminata",
                price: "170 JPY",
                timeLabel: "~30 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Osakajokoen+Station&destination=Umeda+Sky+Building&travelmode=transit",
                tacticalGuideId: "mission02"
            },
            { time: "16:30", type: "point", title: "Llegada Umeda Sky", icon: "fa-solid fa-building" },
            {
                time: "",
                type: "transit",
                title: "Línea Midosuji (Umeda → Namba)",
                price: "230 JPY",
                timeLabel: "~15 min tren",
                link: "https://www.google.com/maps/dir/?api=1&origin=Umeda+Sky+Building&destination=Dotonbori&travelmode=transit",
                tacticalGuideId: "mission03"
            },
            { time: "20:00", type: "point", title: "Cena en Dotonbori", icon: "fa-solid fa-utensils" },
            {
                time: "",
                type: "transit",
                title: "Línea Midosuji (Namba → Umeda) + Caminata",
                price: "230 JPY",
                timeLabel: "~20 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dotonbori&destination=Hotel+Wing+International+Select+Osaka+Umeda&travelmode=transit",
                tacticalGuideId: "mission04"
            },
            { time: "22:00", type: "point", title: "Retorno al Hotel", icon: "fa-solid fa-bed" }
        ],

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "La ruta principal inamovible de hoy.",
            events: [
                {
                    id: "b1",
                    time: "09:00",
                    title: "Castillo de Osaka",
                    description: "Construido en 1583. Torres, murallas y museo histórico.",
                    image: "images/dia3-itinerario-base.jpg",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/dir/Hotel+Wing+International+Select+Osaka+Umeda/Osaka+Castle/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-castle"></i> Castillo de Osaka</h3>
                        <p>Símbolo innegable de la ciudad. Originalmente construido en 1583 por el señor de la guerra Toyotomi Hideyoshi, fue diseñado para ser el centro de una nueva y unificada nación japonesa bajo su dominio. Aunque la imponente torre actual es una reconstrucción de 1931 (restaurada en 1997), se asienta sobre las formidables murallas y fosos de piedra originales de la era Tokugawa.</p>
                        <p><em>El interior es un museo moderno de ocho plantas que narra la turbulenta historia de la unificación de Japón, culminando en un mirador panorámico en la azotea. Los interminables jardines que lo rodean, especialmente el parque Nishinomaru, son un oasis de paz en el tejido urbano de Osaka.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 600 JPY.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto Clave:</strong> Vistas desde la torre principal y desde los jardines.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "16:30",
                    title: "Umeda Sky Building",
                    description: "Edificio con observatorio flotante. Vistas espectaculares.",
                    image: "images/umeda.png",
                    price: "1.500 JPY",
                    link: "https://www.google.com/maps/dir/Osaka+Castle/Umeda+Sky+Building/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-building"></i> Umeda Sky Building</h3>
                        <p>Un espectáculo de la arquitectura futurista de los años 90. Diseñado por Hiroshi Hara, consiste en dos torres gemelas de 40 pisos conectadas en la cima por el "Floating Garden Observatory" (Observatorio del Jardín Flotante) a 173 metros de altura.</p>
                        <p><em>El ascenso final se realiza a través de escaleras mecánicas acristaladas suspendidas en el vacío, ofreciendo una experiencia casi de ciencia ficción. A diferencia de otros miradores cerrados, su azotea circular está completamente al aire libre (sin cristales), permitiendo sentir la brisa y escuchar la ciudad mientras se admira una panorámica de 360 grados de la gigantesca red urbana de Kansai.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-2 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 1.500 JPY.</li>
                            <li><i class="fa-solid fa-sun"></i> <strong>Momento Épico:</strong> Atardecer (16:30-18:00) para ver cómo la ciudad se enciende.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "20:00",
                    title: "Cena en Dotonbori",
                    description: "Ver el cartel de Glico iluminado. Gastronomía local (Takoyaki, Kushikatsu).",
                    image: "images/dotonbori.png",
                    price: "~3.000 JPY",
                    link: "https://www.google.com/maps/dir/Umeda+Sky+Building/Dotonbori/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Cena en Dotonbori</h3>
                        <p>El corazón y alma de la famosa filosofía osakeña del <em>Kuidaore</em> (comer hasta arruinarse). Este canal histórico, antaño núcleo de teatros en el periodo Edo, es hoy un caótico, ruidoso y deslumbrante laberinto de cientos de neones gigantes.</p>
                        <p><em>Aquí se viene a disfrutar de la energía pura de Japón. La comida callejera es obligatoria: pequeñas bolas de pulpo ardiendo (Takoyaki), tortillas saladas japonesas cocinadas en la plancha (Okonomiyaki) y brochetas fritas crujientes (Kushikatsu). Es abrumador pero absolutamente imprescindible para el paladar y la vista.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidades:</strong> Takoyaki, Okonomiyaki, Kushikatsu.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto obligatoria:</strong> Cartel de Glico Runner iluminado y puente Ebisu.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "22:00",
                    title: "Retorno al Hotel",
                    description: "Fin de la jornada. Descanso en el Cuartel General.",
                    image: "images/hotel-wing-osaka.jpg",
                    price: "Gratis"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Barrio Shinsekai y Torre Tsūtenkaku",
                time: "Flex: 12:00 / 19:00",
                description: "Barrio retro, comida callejera (Kushikatsu).",
                price: "~2.000 JPY",
                image: "images/dia3-shinsekai.jpg",
                recommended: true,
                fullDesc: `
                    <h3><i class="fa-solid fa-tower-broadcast"></i> Shinsekai y Tsutenkaku</h3>
                    <p>Creado en 1912 como el "Parque de Atracciones del Nuevo Mundo" (combinando mitades inspiradas en París y Coney Island), Shinsekai quedó estancado tras la Segunda Guerra Mundial, conservando una irresistible atmósfera retro (estilo Showa) y un aura ligeramente melancólica o decadente muy especial.</p>
                    <p><em>En el centro se alza la torre Tsutenkaku ("la torre que llega al cielo"), su símbolo icónico. Actualmente, todo el barrio es famoso por estar saturado de vibrantes letreros luminosos vintage, estatuillas de Billiken (el dios de cabeza puntiaguda que da suerte al frotarle los pies) y docenas de izakayas especializadas en <strong>Kushikatsu</strong>: deliciosa carne, pescado y verduras rebozadas, fritas en aceite y untadas en una salsa especial (¡solo se permite untar una vez!).</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                        <li><i class="fa-solid fa-bowl-food"></i> <strong>Regla de oro:</strong> Probar Kushikatsu (comer de pie en barras tradicionales).</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Ambiente:</strong> Excelente para fotos callejeras nocturnas, rebosa carácter retro-futurista.</li>
                    </ul>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA A: POST-CASTILLO (Comida)",
                        time: "11:30 - 15:30",
                        description: "PREFERENCIA: Comer tranquilo y asegurar Umeda con margen. Salida del Castillo tras 2h de visita.",
                        schedule: [
                            { time: "11:30", event: "Salida Castillo" },
                            { time: "12:00", event: "Llegada Shinsekai" },
                            { time: "15:30", event: "Salida hacia Umeda Sky" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Osakajokoen+Station&destination=Tsutenkaku+Tower&travelmode=transit",
                        tacticalGuideId: "mission_shinsekai_a"
                    },
                    {
                        title: "RUTA B: POST-UMEDA SKY (Atardecer)",
                        time: "18:30 - 20:00",
                        description: "FOTOS NOCTURNAS: Menos tiempo en barrio pero mejores luces. Se acabará más tarde.",
                        schedule: [
                            { time: "18:30", event: "Salida Umeda Sky" },
                            { time: "19:00", event: "Llegada Shinsekai" },
                            { time: "20:10", event: "Salida hacia Dotonbori" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Umeda+Station&destination=Tsutenkaku+Tower&travelmode=transit",
                        tacticalGuideId: "mission_shinsekai_b"
                    }
                ]
            },
        ],
        additionalExcursions: [
            {
                id: "add_osaka_housing",
                title: "Museo de la Vivienda y la Vida de Osaka",
                image: "images/add-osaka-housing.jpg",
                description: "Inmersión total en el pasado de Osaka con una recreación a tamaño real de un barrio del periodo Edo.",
                time: "10:00 – 12:00",
                price: "~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Osaka+Museum+of+Housing+and+Living",
                tacticalGuideId: "mission_osaka_housing",
                fullDesc: `
                    <h3><i class="fa-solid fa-house-chimney-window"></i> Museo de la Vivienda y la Vida</h3>
                    <p>Una joya oculta que ofrece una inmersión total en el pasado de la ciudad. Lo más impresionante es su recreación a tamaño real de un barrio de Osaka durante el periodo Edo (siglo XIX). Podréis caminar por calles antiguas, entrar en casas tradicionales japonesas (machiya), tiendas y almacenes.</p>
                    <p><em>Nota histórica: Durante el periodo Edo, Osaka era conocida como la "cocina de la nación" debido a su papel central en el comercio del arroz y otros bienes. Este museo captura fielmente la vida comerciante de esa época dorada.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (10:00 – 12:00), antes del calor intenso.</li>
                        <li><i class="fa-solid fa-snowflake"></i> <strong>Refugio:</strong> Interiores con aire acondicionado, ideal para el grupo y los mayores si el calor de julio es sofocante. Experiencia muy visual y poco cansada.</li>
                        <li><i class="fa-solid fa-shadows-light-show"></i> <strong>Efecto:</strong> Todo se encuentra bajo una cúpula que simula el ciclo del día y la noche con efectos de luces y sonido.</li>
                    </ul>
                `
            },
            {
                id: "add_namba_yasaka",
                title: "Santuario Namba Yasaka",
                image: "images/add-namba-yasaka.jpg",
                description: "Famoso por su enorme edificio en forma de cabeza de león que 'traga' los malos espíritus.",
                time: "18:30 – 19:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Namba+Yasaka+Shrine",
                tacticalGuideId: "mission_namba_yasaka",
                fullDesc: `
                    <h3><i class="fa-solid fa-mask"></i> Santuario Namba Yasaka</h3>
                    <p>Este santuario es famoso por su icónico edificio, el Ema-Den, que tiene la forma de una gigantesca cabeza de león (12 metros de altura y 11 metros de ancho). Su enorme boca abierta está diseñada para "tragar" los malos espíritus y la mala suerte, asegurando así el éxito en los negocios, el amor y los estudios.</p>
                    <p><em>Es una visita rápida pero de alto impacto estético que encantará a todos por su originalidad. Además, se encuentra en una zona tranquila de Namba, ofreciendo un respiro visual antes de sumergires en el caos de neones de Dotonbori.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (18:30 – 19:30), de camino a la cena en Dotonbori.</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Santuario Fotogénico:</strong> Uno de los puntos más fotografiados y singulares de todo Osaka.</li>
                    </ul>
                `
            },
            {
                id: "add_okawa_cruise",
                title: "Cruceros por el río Okawa",
                image: "images/add-okawa-cruise.jpg",
                description: "Relajado paseo en barco por la isla fluvial de Nakanoshima con vistas al skyline.",
                time: "17:30 – 18:30",
                price: "~1.500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Okawa+River+Cruise+Osaka",
                tacticalGuideId: "mission_okawa_cruise",
                video: "https://www.youtube.com/watch?v=wWhqU2kzF2s",
                fullDesc: `
                    <h3><i class="fa-solid fa-ship"></i> Crucero por el río Okawa</h3>
                    <p>Un relajado paseo en barco por la isla fluvial de Nakanoshima. Desde el agua, veréis el contraste arquitectónico entre los majestuosos edificios gubernamentales de estilo europeo (como el Ayuntamiento de Osaka y el Banco de Japón) y los rascacielos de cristal modernos.</p>
                    <p><em>Es una actividad ideal para que los mayores del grupo descansen las piernas mientras disfrutan de la brisa del río y ven cómo se encienden gradualmente las luces de la ciudad al caer la noche.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Atardecer (17:30 – 18:30).</li>
                        <li><i class="fa-solid fa-couch"></i> <strong>Confort Máximo:</strong> Perspectiva única del skyline de Osaka sin esfuerzo físico.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 4: OSAKA (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 4, exactDate: "2026-07-30", type: "stay",
        date: "Jue, 30 Julio", title: "🐙 Osaka: Sabores y Compras",
        coords: [34.665, 135.502], zoom: 14,
        hotel: "Hotel Wing International Select Osaka Umeda",
        hotelImage: "images/hotel-wing-osaka.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda",
        image: "images/dia3-portada.jpg",

        logistics: [
            { title: "Compras", text: "Día ideal para souvenirs en Shinsaibashi." },
            { title: "Comida", text: "Kuromon Market cierra sobre las 17:00, id a comer." }
        ],

        transportTimeline: [
            { time: "09:00", type: "point", title: "Hotel Wing (Umeda)", icon: "fa-solid fa-hotel" },
            {
                time: "",
                type: "transit",
                title: "Línea Midosuji (Umeda → Shinsekai)",
                price: "240 JPY",
                timeLabel: "~20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Umeda+Station&destination=Tsutenkaku+Tower&travelmode=transit",
                tacticalGuideId: "mission05"
            },
            { time: "09:30", type: "point", title: "Shinsekai & Tsutenkaku", icon: "fa-solid fa-tower-observation" },
            {
                time: "12:00",
                type: "gap",
                title: "Tiempo Libre / Almuerzo (Opcional: Mercado Kuromon)",
                icon: "fa-solid fa-utensils"
            },
            {
                time: "",
                type: "transit",
                title: "Caminata / Metro a Shinsaibashi",
                price: "Variable",
                timeLabel: "~15-20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tsutenkaku+Tower&destination=Shinsaibashi-suji+Shopping+Arcade&travelmode=transit",
                tacticalGuideId: "mission07"
            },
            { time: "15:30", type: "point", title: "Shinsaibashi-suji", icon: "fa-solid fa-bag-shopping" },
            { time: "20:00", type: "point", title: "Cena Comilona de Carnaca", icon: "fa-solid fa-drumstick-bite" },
            {
                time: "",
                type: "transit",
                title: "Línea Midosuji (Namba → Umeda)",
                price: "240 JPY",
                timeLabel: "~15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Namba+Station&destination=Umeda+Station&travelmode=transit",
                tacticalGuideId: "mission08"
            },
            { time: "22:00", type: "point", title: "Retorno al Hotel Wing (Umeda)", icon: "fa-solid fa-bed" }
        ],

        timeline: [
            { time: "09:30", title: "Shinsekai & Tsutenkaku", desc: "Barrio retro y torre icónica." },
            { time: "12:00", title: "Tiempo Libre", desc: "Almuerzo opcional (Kuromon recomendado)." },
            { time: "15:30", title: "Compras Shinsaibashi", desc: "Galería comercial kilométrica." },
            { time: "20:00", title: "Cena Comilona de Carnaca", desc: "Evento fijo: Yakiniku." },
            { time: "22:00", title: "Retorno al Hotel", desc: "Fin de la jornada." }
        ],

        prices: {
            transport: "~600 JPY",
            entrances: "~2.700 JPY (Acuario - Opcional)",
            food: "~5.000 JPY (Cena Carnaca)",
            total: "~5.600 JPY (Base + Cena) + Opciones"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de contrastes: el Osaka retro y el shopping moderno.",
            events: [
                {
                    id: "b_shinsekai",
                    time: "09:30",
                    title: "Shinsekai & Tsutenkaku",
                    description: "Barrio retro congelado en el tiempo. Probad las brochetas Kushikatsu.",
                    image: "images/dia3-shinsekai.jpg",
                    price: "~1.500 JPY (Torre)",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tower-broadcast"></i> Shinsekai y Tsutenkaku</h3>
                        <p>Creado en 1912 como el "Parque de Atracciones del Nuevo Mundo" (combinando mitades inspiradas en París y Coney Island), Shinsekai quedó estancado tras la Segunda Guerra Mundial, conservando una irresistible atmósfera retro (estilo Showa) y un aura ligeramente melancólica o decadente muy especial.</p>
                        <p><em>En el centro se alza la torre Tsutenkaku ("la torre que llega al cielo"), su símbolo icónico. Actualmente, todo el barrio es famoso por estar saturado de vibrantes letreros luminosos vintage, estatuillas de Billiken (el dios de cabeza puntiaguda que da suerte al frotarle los pies) y docenas de izakayas especializadas en <strong>Kushikatsu</strong>: deliciosa carne, pescado y verduras rebozadas, fritas en aceite y untadas en una salsa especial (¡solo se permite untar una vez!).</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Regla de oro:</strong> Probar Kushikatsu (comer de pie en barras tradicionales).</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Ambiente:</strong> Excelente para fotos callejeras nocturnas, rebosa carácter retro-futurista.</li>
                        </ul>
                    `,
                    tacticalOptions: [
                        {
                            title: "DESPLIEGUE: ZONA RETRO",
                            time: "09:30 - 13:00",
                            description: "Exploración de Tsutenkaku y callejones. Recomendado: Comer Kushikatsu.",
                            schedule: [
                                { time: "09:00", event: "Salida Hotel (Umeda)" },
                                { time: "09:30", event: "Llegada Shinsekai" },
                                { time: "12:00", event: "Inicio Tiempo Libre / Almuerzo" }
                            ],
                            link: "https://www.google.com/maps/dir/?api=1&origin=Umeda+Station&destination=Tsutenkaku+Tower&travelmode=transit",
                            tacticalGuideId: "mission05"
                        }
                    ]
                },
                {
                    id: "b_shinsaibashi",
                    time: "15:30",
                    title: "Shinsaibashi-suji",
                    description: "Tarde libre o compras en la galería comercial kilométrica.",
                    image: "images/shinsaibashi.png",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-shop"></i> Shinsaibashi-suji</h3>
                        <p>La arteria comercial más antigua e importante de Osaka, con una historia que se remonta a 380 años, cuando el distrito se convirtió en un bullicioso centro de comerciantes durante el periodo Edo.</p>
                        <p><em>Hoy en día es una galería techada (arcada) de casi 600 metros de longitud que personifica el espíritu consumista y vibrante de la ciudad. Aquí se encuentran desde grandes almacenes históricos de lujo hasta tiendas de electrónica de vanguardia, cosméticos y moda urbana. Es el mejor lugar para observar la "moda de Osaka", conocida por ser más atrevida y colorida que la de Tokio.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-walking"></i> <strong>Distancia:</strong> 600 metros de compras ininterrumpidas.</li>
                            <li><i class="fa-solid fa-lightbulb"></i> <strong>Tip:</strong> Manteneos a la izquierda para fluir con el río de gente.</li>
                            <li><i class="fa-solid fa-cart-shopping"></i> <strong>Objetivo:</strong> Souvenirs, Kit-Kats de sabores raros y gadgets.</li>
                        </ul>
                    `,
                    tacticalOptions: [
                        {
                            title: "INFILTRACIÓN: SHOPPING PROTOCOL",
                            time: "15:30 - 19:30",
                            description: "Galería comercial infinita. Ideal para souvenirs y electrónica.",
                            schedule: [
                                { time: "15:30", event: "Entrada Shinsaibashi" },
                                { time: "18:00", event: "Exploración Libre" },
                                { time: "20:00", event: "Extracción Cena Carnaca" }
                            ],
                            link: "https://www.google.com/maps/dir/?api=1&origin=Tsutenkaku+Tower&destination=Shinsaibashi-suji+Shopping+Arcade&travelmode=walking",
                            tacticalGuideId: "mission07"
                        }
                    ]
                },
                {
                    id: "b1",
                    time: "20:00",
                    title: "Cena Comilona de Carnaca",
                    description: "Evento principal: Festín de carne Yakiniku.",
                    image: "images/dia3-portada.jpg",
                    price: "~5.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-drumstick-bite"></i> Cena Yakiniku Especial</h3>
                        <p>Día 4: Punto culminante gastronómico. Carne de alta calidad a la parrilla.</p>
                        <p><strong>Misión:</strong> Disfrutar de la mejor carne de Osaka en grupo.</p>
                    `,
                    video: "https://www.youtube.com/watch?v=sOidw_0XqP4"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Acuario Kaiyukan",
                booking: { id: "bk_kaiyukan", timeframe: "1-2 semanas antes", required: true, link: "https://www.kaiyukan.com/language/eng/" },
                time: "09:30",
                description: "Uno de los acuarios más grandes del mundo (Tiburón ballena).",
                price: "2.700 JPY",
                image: "images/dia3-acuario.jpg",
                recommended: true,
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Acuario Kaiyukan</h3>
                    <p>Uno de los acuarios más grandes del mundo. Su principal atracción es el tanque central con tiburones ballena.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                        <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> ~2.700 JPY.</li>
                    </ul>
                `,
                video: "https://www.youtube.com/watch?v=1uPcdj8V_8g",
                tacticalOptions: [
                    {
                        title: "OPERACIÓN AQUA: DESPLIEGUE",
                        time: "09:00 - 15:30",
                        description: "Infiltración en el Puerto de Osaka. Incluye almuerzo en zona temática de los 60.",
                        schedule: [
                            { time: "09:00", event: "Salida Hotel Wing (Umeda)" },
                            { time: "09:45", event: "Llegada Acuario Kaiyukan" },
                            { time: "13:00", event: "Almuerzo: Naniwa Kuishinbo Yokocho" },
                            { time: "14:45", event: "Extracción hacia Shinsaibashi" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Wing+International+Select+Osaka+Umeda&destination=Osaka+Aquarium+Kaiyukan&travelmode=transit",
                        tacticalGuideId: "mission_aquarium",
                    }
                ]
            },
            {
                id: "c2",
                title: "Mercado Kuromon",
                time: "13:00",
                description: "'La cocina de Osaka'. Recomendado por cercanía (A solo 15 min de Shinsekai).",
                price: "Variable",
                image: "images/dia5-kuromon.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-store"></i> Mercado Kuromon</h3>
                    <p>Conocido como "La cocina de Osaka". Mercado tradicional con más de 190 años de historia.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> 9:00-17:00 (la mayoría de puestos).</li>
                        <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidades:</strong> Sushi fresco, Takoyaki, Wagyu.</li>
                        <li><i class="fa-solid fa-location-dot"></i> <strong>Ubicación:</strong> 15 min desde Shinsekai.</li>
                    </ul>
                `,
                video: "https://www.youtube.com/watch?v=8bRz6jHSfwQ",
                tacticalOptions: [
                    {
                        title: "INFILTRACIÓN: LOGÍSTICA KUROMON",
                        time: "12:30 - 15:30",
                        description: "Comida en mercado. Cuidado con los horarios de cierre (17:00).",
                        schedule: [
                            { time: "12:30", event: "Salida Shinsekai" },
                            { time: "13:00", event: "Llegada Nippombashi" },
                            { time: "15:30", event: "Movimiento a Shinsaibashi" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Tsutenkaku+Tower&destination=Kuromon+Ichiba+Market&travelmode=transit",
                        tacticalGuideId: "mission06"
                    }
                ]
            },
            {
                id: "c3",
                title: "Shinsaibashi-suji",
                time: "15:30",
                description: "Galería comercial techada para compras.",
                price: "Gratis",
                image: "images/shinsaibashi.png",
                fullDesc: `
                    <h3><i class="fa-solid fa-shop"></i> Shinsaibashi-suji</h3>
                    <p>Galería comercial cubierta de 600 metros. Desde moda hasta electrónica.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> 10:00-20:00 (varía por tienda).</li>
                        <li><i class="fa-solid fa-shopping-bag"></i> <strong>Compras:</strong> Ropa, cosméticos, souvenirs.</li>
                        <li><i class="fa-solid fa-walking"></i> <strong>Conexión:</strong> Conecta con Dotonbori.</li>
                    </ul>
                `,
                video: "https://www.youtube.com/watch?v=VJp1OpZW8mQ",
                tacticalOptions: [
                    {
                        title: "PROTOCOLO: SHOPPING ZONE",
                        time: "15:30 - 19:30",
                        description: "Zona de compras intensa. Punto de encuentro final cerca de Namba.",
                        schedule: [
                            { time: "15:30", event: "Entrada Shinsaibashi" },
                            { time: "18:00", event: "Exploración Libre" },
                            { time: "19:45", event: "Reagrupamiento Cena" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Kuromon+Ichiba+Market&destination=Shinsaibashi-suji+Shopping+Arcade&travelmode=walking",
                        tacticalGuideId: "mission07"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_sumiyoshi",
                title: "Santuario Sumiyoshi Taisha",
                image: "images/add-sumiyoshi.jpg",
                description: "Uno de los santuarios más antiguos de Japón con el icónico puente curvo Sorihashi.",
                time: "09:30 – 11:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Sumiyoshi+Taisha+Shrine",
                tacticalGuideId: "mission_sumiyoshi",
                fullDesc: `
                    <h3><i class="fa-solid fa-archway"></i> Santuario Sumiyoshi Taisha</h3>
                    <p>Es uno de los santuarios más antiguos de Japón, fundado en el siglo III, mucho antes de la introducción del budismo. Es famoso por su arquitectura estilo <em>Sumiyoshi-zukuri</em>, caracterizada por techos rectos exentos de la curvatura habitual de influencia continental.</p>
                    <p><em>El punto más icónico es el puente curvo Sorihashi, que se refleja perfectamente en el agua creando un círculo completo. Es un lugar de paz absoluta, de caminos anchos de grava blanca, ideal para disfrutar sin aglomeraciones turísticas.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (09:30 – 11:30).</li>
                        <li><i class="fa-solid fa-peace"></i> <strong>Paz y Espacio:</strong> Caminata cómoda y relajante, perfecta para los mayores del grupo.</li>
                    </ul>
                `
            },
            {
                id: "add_osaka_history",
                title: "Museo de Historia de Osaka",
                image: "images/add-osaka-history.jpg",
                description: "Vistas panorámicas del Castillo de Osaka y maquetas detalladas de la antigua Naniwa.",
                time: "12:00 – 14:00",
                price: "~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Osaka+Museum+of+History",
                tacticalGuideId: "mission_osaka_history",
                fullDesc: `
                    <h3><i class="fa-solid fa-monument"></i> Museo de Historia de Osaka</h3>
                    <p>Este museo cuenta la historia de la ciudad de forma cronológica de arriba hacia abajo. En la planta superior os recibirán figuras a tamaño real en una recreación del antiguo Palacio Naniwa, mostrando cómo Osaka fue la primera capital de facto de Japón en el siglo VII antes que Nara o Kioto.</p>
                    <p><em>Lo mejor no es solo el museo en sí: sus enormes ventanales panorámicos ofrecen la mejor vista aérea del impresionante Castillo de Osaka, permitiendo disfrutar de la estampa sin tener que subir a pie a la torre del castillo en el calor del verano.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mediodía (12:00 – 14:00).</li>
                        <li><i class="fa-solid fa-elevator"></i> <strong>Refugio Estratégico:</strong> Totalmente climatizado, con ascensores y zonas de descanso. Educativo y muy cómodo.</li>
                    </ul>
                `
            },
            {
                id: "add_tsuruhashi",
                title: "Tsuruhashi Koreatown",
                image: "images/add-tsuruhashi.jpg",
                description: "El corazón multicultural de Osaka con los mejores mercados y barbacoa coreana.",
                time: "18:00 – 20:00",
                price: "Variable",
                link: "https://www.google.com/maps/search/?api=1&query=Tsuruhashi+Koreatown+Osaka",
                tacticalGuideId: "mission_koreatown",
                video: "https://www.youtube.com/watch?v=YnFZkCGTCa8",
                fullDesc: `
                    <h3><i class="fa-solid fa-fire-burner"></i> Tsuruhashi Koreatown</h3>
                    <p>El corazón de la vibrante comunidad coreana de Osaka (los <em>Zainichi</em>). Originado tras la Segunda Guerra Mundial, este extenso laberinto de callejuelas está lleno de puestos de kimchi, prendas tradicionales y decenas de restaurantes de Yakiniku (barbacoa coreana).</p>
                    <p><em>Es una alternativa fantástica si queréis probar sabores intensos y ver una cara de Osaka mucho más multicultural, frenética y auténtica que las zonas puramente turísticas, con el olor a carne asada inundando el aire desde la propia salida de la estación del tren.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde/Cena (18:00 – 20:00).</li>
                        <li><i class="fa-brands fa-youtube"></i> <strong>Ambiente:</strong> Multicultural, ruidoso y lleno de energía. Una experiencia completamente distinta al resto del día.</li>
                    </ul>
                `
            },
            {
                id: "add_okawa_cruise",
                title: "Crucero por el río Okawa (Osaka)",
                image: "images/add-okawa-cruise.jpg",
                description: "Recorrido visual en 4K por los canales de Osaka.",
                time: "17:00 – 18:00",
                price: "~1.500 JPY",
                video: "https://www.youtube.com/watch?v=wWhqU2kzF2s",
                link: "https://www.google.com/maps/search/?api=1&query=Okawa+River+Cruise+Osaka",
                tacticalGuideId: "mission_okawa_cruise",
                fullDesc: `
                    <h3><i class="fa-solid fa-ship"></i> Crucero Fluvial Okawa</h3>
                    <p>Un excelente recorrido visual para que veáis la ciudad desde otra perspectiva. Especialmente mágico con las luces del atardecer.</p>
                `
            }
        ]
    },

    // --- DÍA 5: OSAKA (OPCIONES) ---
    // --- DÍA 5: NARA Y EL BOSQUE SAGRADO ---
    {
        day: 5, exactDate: "2026-07-31", type: "stay",
        date: "Vie, 31 Julio", title: "🦌 Nara: El Bosque de los Dioses",
        coords: [34.685, 135.805], zoom: 13,
        hotel: "Hotel Wing International Select Osaka Umeda",
        hotelImage: "images/hotel-wing-osaka.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda",
        image: "images/dia4-portada.jpg",

        logistics: [
            { title: "Transporte", text: "JR Yamatoji Line (Rapid) desde Osaka Station." },
            { title: "Retorno", text: "Regreso a Osaka para descansar antes del traslado a Kioto." }
        ],

        transportTimeline: [
            {
                time: "09:00",
                type: "point",
                title: "Salida Hotel Wing (Umeda)",
                icon: "fa-solid fa-hotel"
            },
            {
                type: "transit",
                title: "JR Yamatoji Line (Rapid)",
                price: "820 JPY",
                timeLabel: "50 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Wing+International+Select+Osaka+Umeda&destination=Nara+Park&travelmode=transit",
                tacticalGuideId: "mission_nara"
            },
            {
                time: "10:30",
                type: "point",
                title: "Llegada Nara Park / Ciervos",
                icon: "fa-solid fa-leaf"
            },
            {
                time: "11:30",
                type: "point",
                title: "Templo Todai-ji (Gran Buda)",
                icon: "fa-solid fa-gopuram"
            },
            {
                time: "13:30",
                type: "gap",
                title: "Almuerzo en Naramachi",
                icon: "fa-solid fa-utensils"
            },
            {
                time: "15:30",
                type: "point",
                title: "Santuario Kasuga Taisha",
                icon: "fa-solid fa-torii-gate"
            },
            {
                time: "17:30",
                type: "transit",
                title: "Regreso a Osaka",
                price: "820 JPY",
                timeLabel: "50 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nara+Station&destination=Hotel+Wing+International+Select+Osaka+Umeda&travelmode=transit"
            },
            {
                time: "18:30",
                type: "point",
                title: "Extracción al Hotel Umeda",
                icon: "fa-solid fa-bed"
            }
        ],

        prices: {
            transport: "~1.640 JPY",
            entrances: "600 JPY (Todai-ji) + 500 JPY (Kasuga Taisha)",
            food: "~3.000 JPY",
            total: "~5.800 JPY"
        },

        isFlexible: true,
        base: {
            title: "Nara Tradicional",
            description: "La primera capital permanente de Japón y sus ciervos sagrados.",
            events: [
                {
                    id: "b1",
                    time: "11:30",
                    title: "Templo Tōdai-ji",
                    description: "El Gran Buda y el edificio de madera más grande del mundo.",
                    image: "images/dia4-buda.jpg",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/dir/Nara+Station/Todai-ji+Temple/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-landmark"></i> Templo Tōdai-ji</h3>
                        <p>Construido originalmente en el año 752 por decreto del Emperador Shomu, este templo no es solo un edificio religioso, sino que fue concebido como la pieza central de una red nacional de templos para proteger a Japón. Su sala principal, la Daibutsuden, es mundialmente famosa por ser la estructura de madera más grande del mundo, a pesar de que la versión actual (reconstruida en 1709 tras incendios sufridos en guerras civiles) es sorprendentemente un 30% más pequeña que la original.</p>
                        <p><em>En su interior se encuentra el Daibutsu (Gran Buda) de bronce fundido, una de las estatuas más grandes de su tipo en el mundo, que pesa más de 500 toneladas. Detrás de la estatua, buscad el pilar con un agujero en su base: la leyenda dice que quien logre pasar por él (tiene el mismo tamaño que la fosa nasal del Gran Buda) alcanzará la iluminación en su próxima vida. Iván, este es tu reto oficial del día.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-2 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 600 JPY.</li>
                            <li><i class="fa-solid fa-dragon"></i> <strong>Hito:</strong> Esculturas guardianas Niō en la puerta Nandaimon.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=Wz9y6JI6qfU"
                },
                {
                    id: "b2",
                    time: "15:30",
                    title: "Kasuga Taisha",
                    description: "Santuario famoso por sus miles de linternas colgantes.",
                    image: "images/dia4-nara.jpg",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/dir/Todai-ji+Temple/Kasuga+Taisha/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-lightbulb"></i> Kasuga Taisha</h3>
                        <p>Fundado en el año 768 y dedicado a las deidades que protegen la ciudad de Nara, este santuario es el mausoleo espiritual del poderoso clan Fujiwara. El camino hacia el santuario atraviesa un bosque místico habitado por ciervos salvajes (mensajeros divinos en la mitología sintoísta).</p>
                        <p><em>El complejo es famoso por su arquitectura bermellón brillante y, sobre todo, por sus más de 3.000 linternas. Unas 2.000 son linternas de piedra que bordean los senderos y otras 1.000 son linternas de bronce que cuelgan del propio santuario. Solo se encienden todas dos veces al año (Mantōrō), creando una imagen mágica de otro mundo.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-1.5 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 500 JPY.</li>
                            <li><i class="fa-solid fa-tree"></i> <strong>Vibe:</strong> Profundo silencio y espiritualidad antigua en el bosque.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=5zdQAZmpgUE"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Fushimi Inari (A primera hora)",
                time: "07:30",
                description: "OPCIONAL: Madrugar para ver las toriis antes que nadie de camino a Nara.",
                price: "Gratis",
                image: "images/dia6-fushimi.jpg",
                fullDesc: `
                    <div style="background:rgba(239, 68, 68, 0.1); border:1px solid #ef4444; padding:15px; border-radius:12px; margin-bottom:20px;">
                        <h4 style="color:#ef4444; margin-top:0;"><i class="fa-solid fa-triangle-exclamation"></i> Cambio de Ruta Requerido</h4>
                        <p style="font-size:0.9rem; color:#fca5a5; margin-bottom:0;">
                            <strong>Aviso:</strong> Si eliges esta misión, no tomes la línea Yamatoji directa. Debes ir vía Kioto.<br>
                            <strong>Ruta:</strong> Osaka Station ➔ Kyoto Station (JR Kyoto Line) ➔ Fushimi Inari (JR Nara Line).<br>
                            <strong>Costo de tiempo:</strong> +20 min aprox. respecto al trayecto directo.
                        </p>
                    </div>
                    <h3><i class="fa-solid fa-torii-gate"></i> Fushimi Inari-taisha</h3>
                    <p>El santuario de las mil puertas. Al ir a primera hora (07:45), evitaréis la masa de turistas y podréis disfrutar del bosque místico en silencio.</p>
                `,
                tacticalOptions: [
                    {
                        title: "OPERACIÓN: MADRUGADOR INARI",
                        time: "07:00 - 10:30",
                        description: "⚠️ DESVÍO REQUERIDO: Salida vía Kioto para infiltración temprana en los Torii.",
                        schedule: [
                            { time: "07:00", event: "Salida Osaka Station (JR Special Rapid)" },
                            { time: "07:45", event: "Infiltración Fushimi Inari" },
                            { time: "10:00", event: "Enlace Tren Local hacia Nara" },
                            { time: "10:30", event: "Re-enganche Itinerario Nara" }
                        ],
                        buttons: [
                            {
                                text: "Ir a Inari (Vía Kioto)",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Station&destination=Fushimi+Inari-taisha&travelmode=transit"
                            },
                            {
                                text: "De Inari a Nara",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Fushimi+Inari-taisha&destination=Nara+Park&travelmode=transit"
                            }
                        ],
                        tacticalGuideId: "mission_fushimi"
                    }
                ],
                video: "https://www.youtube.com/watch?v=lX9z-LwS88c"
            }
        ],
        additionalExcursions: [
            {
                id: "add_nara_deer",
                title: "Nara Deer Experience",
                image: "images/dia4-nara.jpg",
                description: "Interacción inmersiva con los ciervos sagrados de Nara.",
                time: "Flexible",
                price: "Gratis",
                video: "https://www.youtube.com/watch?v=Xz2Z0x-N_2k",
                link: "https://www.google.com/maps/search/?api=1&query=Nara+Park",
                tacticalGuideId: "mission_nara_deer",
                fullDesc: `
                    <h3><i class="fa-solid fa-deer"></i> Encuentro con los Ciervos</h3>
                    <p>Un recorrido visual por el parque de Nara, mostrando la interacción con los ciervos y los rincones más tranquilos del bosque.</p>
                `
            },
            {
                id: "add_wakakusa",
                title: "Monte Wakakusa",
                image: "images/add-wakakusa.jpg",
                description: "Vistas panorámicas espectaculares de Nara al atardecer.",
                time: "16:00 – 17:30",
                price: "~150 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Mount+Wakakusa",
                tacticalGuideId: "mission_wakakusa",
                video: "https://www.youtube.com/watch?v=L3Gx5sbREeE",
                fullDesc: `
                    <h3><i class="fa-solid fa-mountain-sun"></i> Monte Wakakusa</h3>
                    <p>Una verde colina de 342 metros de altura situada justo detrás del parque y del Gran Santuario Kasuga Taisha. Su ladera está desprovista de árboles gruesos y cubierta completamente de suave hierba, lo que ofrece un sendero despejado ideal para caminar.</p>
                    <p><em>La recompensa tras una caminata de unos 15-20 minutos hasta el primer nivel es una vista panorámica espectacular e ininterrumpida de toda la antigua capital de Nara. Es el mejor lugar para observar a los ciervos pastando en un entorno de montaña mucho más salvaje y natural, lejos del asfalto. Las fotos al atardecer desde aquí son absolutamente legendarias.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (16:00 – 17:30).</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Vistas:</strong> Panorámica total de Nara y ciervos en libertad.</li>
                    </ul>
                `
            },
            {
                id: "add_nara_museum",
                title: "Museo Nacional de Nara",
                image: "images/add-nara-museum.jpg",
                description: "Una de las colecciones de arte budista más importantes del mundo.",
                time: "Mediodía",
                price: "~700 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Nara+National+Museum",
                tacticalGuideId: "mission_nara_museum",
                fullDesc: `
                    <h3><i class="fa-solid fa-chess-knight"></i> Museo Nacional de Nara</h3>
                    <p>El edificio original, finalizado en 1894 y diseñado por Katayama Tokuma, es una obra maestra de la arquitectura del estilo renacentista francés de la era Meiji y está designado como Propiedad Cultural Importante. Alberga una de las colecciones de arte budista más importantes y antiguas del mundo.</p>
                    <p><em>Entre sus galerías climatizadas encontraréis impresionantes estatuas originales de bronce y madera, mandalas elaborados y pergaminos históricos. Esta visita no solo ofrece un refugio vital contra el intenso calor de agosto, sino que es clave para entender la magnitud de Nara como el centro espiritual y político de Japón en el siglo VIII.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-snowflake"></i> <strong>Estrategia de escape:</strong> Visitar al mediodía para huir del sol picante.</li>
                        <li><i class="fa-solid fa-building-columns"></i> <strong>Valor Histórico:</strong> Contexto esencial sobre el origen del Budismo en Japón.</li>
                    </ul>
                `
            },
            {
                id: "add_isuien",
                title: "Jardín Isuien",
                image: "images/add-isuien.jpg",
                description: "Jardín zen extremadamente tranquilo con técnica de 'paisaje prestado'.",
                time: "10:00 – 11:30",
                price: "~900 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Isuien+Garden",
                tacticalGuideId: "mission_isuien",
                video: "https://www.youtube.com/watch?v=q6P4e6P3nL0",
                fullDesc: `
                    <h3><i class="fa-solid fa-spa"></i> Jardín Isuien</h3>
                    <p>Uno de los jardines japoneses más exquisitos, construido durante el periodo Edo y Meiji. El Isuien utiliza de manera magistral la técnica del <em>Shakkei</em> o "paisaje prestado", integrando visualmente elementos lejanos (como el imponente techo del Templo Todai-ji y las verdes laderas del Monte Wakakusa) como si fueran parte de su propio trazado.</p>
                    <p><em>A diferencia del ajetreo del Parque de Nara, es un recinto privado que respira un nivel zen superior. Caminar por sus senderos de piedra, admirar sus casas de té y cruzar los arroyos llenos de carpas koi ofrece una experiencia aristocrática, pacífica y visualmente deslumbrante que el grupo agradecerá.</em></p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (10:00 – 11:30), antes de que apriete el calor.</li>
                        <li><i class="fa-solid fa-mountain"></i> <strong>Diseño Paisajístico:</strong> Pura maestría fotográfica en vivo.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 6: TRASLADO A KIOTO Y CASTILLO DE NIJO ---
    {
        day: 6, exactDate: "2026-08-01", type: "travel",
        date: "Sáb, 1 Agosto", title: "📅 DÍA 1 AGOSTO: OSAKA ➔ KIOTO",
        coords: [35.011, 135.748], zoom: 14,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/dia7-portada.jpg",

        logistics: [
            { title: "Traslado", text: "JR Special Rapid Service. Salida: JR Osaka (Andén 7-9). Cada 15 min." },
            { title: "Equipaje", text: "Llevad maletas con vosotros. Subid al primer o último vagón para más sitio." },
            { title: "Hotel", text: "Kyoto Tower Annex: A 3 min andando de la salida central de la estación." }
        ],

        transportTimeline: [
            {
                time: "09:30",
                type: "point",
                title: "Check-out Osaka / Tren Kyoto",
                icon: "fa-solid fa-train"
            },
            {
                type: "transit",
                title: "JR Special Rapid Service",
                price: "580 JPY",
                timeLabel: "29 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Station&destination=Kyoto+Station&travelmode=transit",
                tacticalGuideId: "mission_kyoto_transfer"
            },
            {
                time: "10:30",
                type: "point",
                title: "Llegada Kyoto Station / Maletas",
                icon: "fa-solid fa-suitcase"
            },
            {
                time: "11:30",
                type: "point",
                title: "Palacio Imperial: Paseo matutino por los jardines.",
                icon: "fa-solid fa-crown"
            },
            {
                time: "13:00",
                type: "gap",
                title: "Almuerzo: Kyoto Ramen Koji (Estación)",
                icon: "fa-solid fa-bowl-food"
            },
            {
                time: "14:15",
                type: "transit",
                title: "Bus 9 / 50 / 101 o Metro",
                price: "230 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=Nijo+Castle&travelmode=transit",
                tacticalGuideId: "mission_nijo"
            },
            {
                time: "14:30",
                type: "point",
                title: "Despliegue: Castillo de Nijo",
                icon: "fa-solid fa-fort-awesome"
            },
            {
                time: "17:00",
                type: "transit",
                title: "Movimiento: Nijo ➔ Kyoto Tower",
                price: "230 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nijo+Castle&destination=Kyoto+Tower&travelmode=transit"
            },
            {
                time: "17:30",
                type: "point",
                title: "Torre Kioto: Atardecer sobre la ciudad.",
                icon: "fa-solid fa-tower-observation"
            },
            {
                time: "19:00",
                type: "gap",
                title: "Cena: Zona Estación o Pontocho",
                icon: "fa-solid fa-utensils"
            },
            {
                time: "20:30",
                type: "point",
                title: "Kawaramachi: Paseo nocturno y tiendas.",
                icon: "fa-solid fa-bag-shopping"
            }
        ],

        timeline: [
            { time: "11:30", title: "Palacio Imperial", desc: "Residencia histórica. (Base)" },
            { time: "14:30", title: "Castillo de Nijo", desc: "Residencia Shogun y suelos ruiseñor. (Base)" },
            { time: "17:30", title: "Torre Kioto", desc: "Vistas panorámicas. (Base)" },
            { time: "20:30", title: "Kawaramachi", desc: "Área comercial vibrante. (Base)" }
        ],

        prices: {
            transport: "~1.100 JPY",
            entrances: "800 (Nijo) + 900 (Torre) JPY",
            food: "~4.000 JPY",
            total: "~6.800 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Despliegue: Capital Imperial",
            description: "Traslado táctico a Kioto y primera incursión en la historia samurái.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Traslado: Osaka ➔ Kioto",
                    description: "JR Special Rapid Service. Rápido, eficiente y sin reserva.",
                    image: "images/hotel-kyoto-tower.jpg",
                    price: "580 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Station&destination=Kyoto+Station&travelmode=transit",
                    tacticalGuideId: "mission_kyoto_transfer",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Puente Ferroviario Osaka-Kioto</h3>
                        <p>La vía más rápida entre las dos capitales. No es necesario reservar, pero se recomienda ir a los extremos del tren para encontrar sitio con maletas.</p>
                        <ul>
                            <li><strong>Andenes 7-9:</strong> JR Osaka Station.</li>
                            <li><strong>Tiempo:</strong> 29 min de trayecto.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Palacio Imperial de Kioto",
                    description: "Residencia histórica de la familia imperial con jardines extensos. (Gratis)",
                    image: "images/palacio-imperial-kyoto.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Kyoto+Imperial+Palace",
                    tacticalGuideId: "mission_imperial_palace",
                    fullDesc: `
                        <h3><i class="fa-solid fa-crown"></i> Palacio Imperial de Kioto (Kyoto Gosho)</h3>
                        <p>Fue la residencia de la familia imperial de Japón hasta 1868, cuando la capital se trasladó a Tokio. Ubicado en el inmenso Parque Imperial (Kyoto Gyoen), el palacio ofrece una visión de la arquitectura aristocrática y la vida ceremonial de la corte.</p>
                        <p><em>Aunque los edificios actuales son reconstrucciones de 1855, mantienen fielmente el estilo Heian. Podréis pasear por los jardines y admirar los salones de ceremonias desde el exterior. Es un lugar remanso de paz en el corazón de la ciudad, ideal para desconectar tras el ajetreo del traslado desde Osaka.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> 09:00 - 17:00 (Cerrado lunes).</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> Gratuita y sin necesidad de reserva previa para los terrenos generales.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "14:30",
                    title: "Castillo de Nijo",
                    description: "Fortaleza de los Shoguns con suelos 'ruiseñor' antininja.",
                    image: "images/dia6-despliegue-capital-imperial.jpg",
                    price: "800 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Nijo+Castle&travelmode=transit",
                    tacticalGuideId: "mission_nijo",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fort-awesome"></i> Castillo de Nijo-jo</h3>
                        <p>Construido en 1603 como la residencia oficial en Kioto del primer Shogún del periodo Edo, Tokugawa Ieyasu. El complejo es un testimonio del poder y la opulencia del shogunato, contrastando con la relativa sencillez del Palacio Imperial de Kioto.</p>
                        <p><em>La joya del castillo es el Palacio Ninomaru, donde destaca el ingenioso "suelo de ruiseñor" (uguisubari). Estos tablones de madera fueron diseñados deliberadamente para emitir un chirrido similar al canto de un pájaro al ser pisados, funcionando como un sistema de alarma natural contra posibles intrusos o asesinos ninja. El interior del palacio está decorado con impresionantes biombos pintados por la escuela Kanō, representando tigres y pinos que simbolizaban la fuerza del Shogún.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-bird"></i> <strong>Suelos de Ruiseñor:</strong> Una obra maestra de la carpintería defensiva antigua.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Jardín Ninomaru:</strong> Diseñado por el maestro de té Kobori Enshu, con rocas masivas que representan la longevidad.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=N9AXzIbPJoE"
                },
                {
                    id: "b4",
                    time: "17:30",
                    title: "Torre de Kioto",
                    description: "Vistas panorámicas 360° desde el edificio más alto de la ciudad.",
                    image: "images/kyoto_tower.png",
                    price: "900 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Nijo+Castle&destination=Kyoto+Tower&travelmode=transit",
                    tacticalGuideId: "mission_kyoto_tower",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tower-observation"></i> Kyoto Tower</h3>
                        <p>Símbolo moderno de la ciudad, situada justo frente a vuestro hotel. Sus 131 metros ofrecen la mejor panorámica de Kioto, permitiendo ver desde los templos hasta las montañas que rodean el valle.</p>
                        <p><em>El momento ideal es al atardecer, cuando las luces de la ciudad empiezan a encenderse. Podréis usar los telescopios gratuitos para localizar lugares que visitaréis los próximos días. Es el plan perfecto de transición antes de ir a cenar.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-eye"></i> <strong>Especial:</strong> Telescopios de alta tecnología gratuitos en el observatorio.</li>
                            <li><i class="fa-solid fa-clock"></i> <strong>Nota:</strong> Está abierta hasta las 21:00.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "20:30",
                    title: "Kawaramachi Shopping",
                    description: "Inmersion nocturna en el centro comercial y gastronómico de Kioto.",
                    image: "images/kawaramachi.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Kawaramachi+Shopping+Street+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bag-shopping"></i> Kawaramachi-dori</h3>
                        <p>La arteria principal de la vida moderna en Kioto. Un contraste fascinante con los templos visitados durante el día. Aquí encontraréis grandes almacenes, boutiques de moda, recreativos y cientos de opciones para cenar o tomar algo.</p>
                        <p><em>Pasear por Kawaramachi de noche es una experiencia vibrante. Podéis explorar las calles transversales que llevan hacia Pontocho o el Mercado Nishiki (ya cerrado pero atmosférico) para ver el lado más cosmopolita de la antigua capital.</em></p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Templo Tō-ji (Mañana)",
                time: "11:00",
                description: "La pagoda más alta de Japón. Paseo matutino desde el hotel.",
                price: "500 JPY",
                image: "images/dia7-portada.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-tower-observation"></i> Templo Tō-ji</h3>
                    <p>Fundado a principios del período Heian. Su pagoda de cinco pisos es un símbolo de Kioto (54,8 m).</p>
                    <div style="background:rgba(0,243,255,0.05); border:1px solid var(--neon-blue); padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:var(--neon-blue);"><i class="fa-solid fa-route"></i> Trayectoria:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">Hotel ➔ Templo Tō-ji (15 min andando).</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "ENLACE: OPERACIÓN PAGODA",
                        time: "11:00 - 12:30",
                        description: "Infiltración temprana a pie desde el Cuartel General.",
                        schedule: [
                            { time: "11:00", event: "Salida Hotel (Walking)" },
                            { time: "11:15", event: "Llegada Tō-ji" },
                            { time: "12:30", event: "Regreso Estación (Almuerzo)" }
                        ],
                        buttons: [
                            {
                                text: "Ir andando al To-ji",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=To-ji+Temple&travelmode=walking"
                            }
                        ],
                        tacticalGuideId: "mission_toji"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_sanjusangendo",
                title: "Templo Sanjūsangen-dō",
                image: "images/add-sanjusangendo.jpg",
                description: "1.001 estatuas de la diosa Kannon cubiertas de pan de oro.",
                time: "15:00 – 16:30",
                price: "~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Sanjusangendo+Temple",
                tacticalGuideId: "mission_sanjusangendo",
                video: "https://www.youtube.com/watch?v=ECJfCEUoMaA",
                fullDesc: `
                    <h3><i class="fa-solid fa-users-rays"></i> Sanjūsangen-dō</h3>
                    <p>Salón de madera de 120 metros con un ejército místico de estatuas talladas a mano. Atmósfera sobrecogedora.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (15:00 – 16:30).</li>
                        <li><i class="fa-solid fa-eye"></i> <strong>Visual:</strong> Una de las vistas interiores más increíbles de Japón.</li>
                    </ul>
                `
            },
            {
                id: "add_kamogawa",
                title: "Paseo por el río Kamo",
                image: "images/add-kamogawa.jpg",
                description: "Paseo local y relajado junto al río para ver el Kioto costumbrista.",
                time: "18:30 – 19:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Kamo+River+Kyoto",
                tacticalGuideId: "mission_kamogawa",
                fullDesc: `
                    <h3><i class="fa-solid fa-bridge"></i> Río Kamo (Kamo-gawa)</h3>
                    <p>Caminad por la orilla desde la calle Shijo. Ideal para ver músicos, parejas y la vida local de Kioto.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Atardecer (18:30 – 19:30).</li>
                        <li><i class="fa-solid fa-wind"></i> <strong>Refrescante:</strong> Paseo gratuito con brisa fluvial en verano.</li>
                    </ul>
                `
            },
            {
                id: "add_nishi_honganji",
                title: "Templo Nishi Hongan-ji",
                image: "images/add-nishi-honganji.jpg",
                description: "Enorme complejo Patrimonio de la Humanidad, gratuito y poco turístico.",
                time: "11:00 – 12:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Nishi+Hongan-ji+Temple",
                tacticalGuideId: "mission_nishi_honganji",
                fullDesc: `
                    <h3><i class="fa-solid fa-building-ngo"></i> Nishi Hongan-ji</h3>
                    <p>Salones de madera gigantescos y tallas doradas exquisitas. Ideal para observar rituales en silencio.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (11:00 – 12:00).</li>
                        <li><i class="fa-solid fa-couch"></i> <strong>Confort:</strong> Salones amplios con tatami para sentarse y descansar.</li>
                    </ul>
                `
            },
            {
                id: "add_imperial_palace",
                title: "Palacio Imperial de Kioto",
                booking: { id: "bk_imperial_palace", timeframe: "Fase 1 (Semanas antes)", required: true, link: "https://sankan.kunaicho.go.jp/english/index.html" },
                image: "images/add-osaka-history.jpg",
                description: "Residencial imperial histórica con jardines extensos.",
                time: "14:00 – 15:30",
                price: "Gratis (Reserva recomendada)",
                link: "https://www.google.com/maps/search/?api=1&query=Kyoto+Imperial+Palace",
                tacticalGuideId: "mission_imperial_palace",
                fullDesc: `
                    <h3><i class="fa-solid fa-crown"></i> Palacio Imperial de Kioto</h3>
                    <p>Antigua residencia de la familia imperial hasta 1868. Situado en el vasto Parque Imperial de Kioto.</p>
                `
            }
        ]
    },

    // --- DÍA 7: TRADICIÓN Y GEISHAS (NORTE DE KIOTO) ---
    // --- DÍA 7: EL CORAZÓN HISTÓRICO (HIGASHIYAMA Y GION) ---
    {
        day: 7, exactDate: "2026-08-02", type: "stay",
        date: "Dom, 2 Agosto", title: "👘 KIOTO: EL CORAZÓN HISTÓRICO",
        coords: [34.995, 135.785], zoom: 14,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/dia7-kiyomizu.jpg",

        logistics: [
            { title: "Ruta", text: "Recorrido lineal caminando de Kiyomizu-dera hasta Gion." },
            { title: "Tip", text: "Madrugad para ver la terraza de Kiyomizu sin multitudes (08:30)." }
        ],

        transportTimeline: [
            {
                time: "08:30",
                type: "point",
                title: "🏨 Salida Hotel",
                icon: "fa-solid fa-hotel"
            },
            {
                time: "09:00",
                type: "point",
                title: "⛩️ Templo Kiyomizu-dera (Cima)",
                icon: "fa-solid fa-mountain"
            },
            {
                time: "11:00",
                type: "transit",
                title: "🚶 La Bajada Histórica (Sannenzaka/Ninenzaka)",
                price: "Gratis",
                timeLabel: "1.5 km (Paseo)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera&destination=Yasaka+Shrine&travelmode=walking",
                tacticalGuideId: "mission_higashiyama"
            },
            {
                time: "12:30",
                type: "point",
                title: "⛩️ Santuario Yasaka (Fin Paseo)",
                icon: "fa-solid fa-torii-gate"
            },
            {
                time: "13:00",
                type: "gap",
                title: "🍜 Almuerzo: Zona Higashiyama",
                icon: "fa-solid fa-bowl-food"
            },
            {
                time: "15:30",
                type: "point",
                title: "⛩️ Heian Jingu: El gran Torii Rojo.",
                icon: "fa-solid fa-archway"
            },
            {
                time: "18:00",
                type: "point",
                title: "👘 Barrio de Gion (Hanamikoji)",
                icon: "fa-solid fa-person-dress-fairy"
            },
            {
                time: "20:00",
                type: "point",
                title: "🏮 Cena en Pontocho",
                icon: "fa-solid fa-utensils"
            }
        ],

        timeline: [
            { time: "08:30", title: "Kiyomizu-dera", desc: "El gran templo del agua pura. (Base)" },
            { time: "15:30", title: "Heian Jingu", desc: "El gran Torii Rojo de Okazaki. (Base)" },
            { time: "18:00", title: "Gion & Pontocho", desc: "Exploración del Kioto tradicional. (Base)" }
        ],

        prices: {
            transport: "~700 JPY",
            entrances: "400 JPY (Kiyomizu)",
            food: "~4.000 JPY",
            total: "~5.100 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "El Corazón de Kioto",
            description: "De la terraza de madera de Kiyomizu al distrito de las Geishas.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Templo Kiyomizu-dera",
                    description: "El templo del agua pura. Su inmensa terraza de madera ofrece las mejores vistas de la ciudad. Patrimonio de la Humanidad.",
                    image: "images/dia7-kiyomizu.jpg",
                    price: "400 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Templo Kiyomizu-dera</h3>
                        <p>Fundado en el año 778, este templo es un tesoro del Patrimonio Mundial de la UNESCO. Su nombre, que significa "Templo del Agua Pura", proviene de la cascada Otowa que fluye por las colinas circundantes. Lo más espectacular es su gran terraza de madera, que sobresale 13 metros sobre el valle y fue construida sin utilizar un solo clavo, empleando un complejo sistema de encajes y pilares de madera de zelkova.</p>
                        <p><em>En la base de la terraza, veréis a los visitantes bebiendo de los tres chorros de la cascada Otowa. Cada chorro tiene un significado: longevidad, éxito escolar y una vida amorosa afortunada (¡pero cuidado, se dice que beber de los tres es señal de codicia!). Es un lugar de vistas inolvidables de Kioto, especialmente hermoso cuando la luz baña la estructura al amanecer.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Horario recomendado:</strong> 08:30 para evitar el grueso de turistas.</li>
                            <li><i class="fa-solid fa-droplet"></i> <strong>Cascada Otowa:</strong> Elegid vuestro deseo antes de beber.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=_a-PPFMNpdU"
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Paseo Higashiyama (Sannenzaka/Ninenzaka)",
                    description: "Descenso por las calles empedradas más icónicas de Kioto.",
                    image: "images/dia7-historico.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/dir/Kiyomizu-dera/Yasaka+Shrine/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-walking"></i> El Alma de Kioto: Higashiyama</h3>
                        <p>Caminar por las pendientes de Sannenzaka y Ninenzaka es como retroceder siglos en el tiempo. Estas calles empedradas, flanqueadas por casas de madera restauradas que ahora albergan tiendas de artesanía, dulces tradicionales y casas de té, capturan la esencia del Kioto medieval.</p>
                        <p><em>El nombre de las calles tiene un toque de superstición local: se decía que si tropezabas en Sannenzaka tendrías tres años de mala suerte. Más allá de las leyendas, el paseo es visualmente deslumbrante, con vistas que incluyen la Pagoda Yasaka (Hokan-ji) asomando entre los tejados de paja y teja oscura.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-camera"></i> <strong>Perspectiva:</strong> Buscad el encuadre con la pagoda al fondo desde Sannenzaka.</li>
                            <li><i class="fa-solid fa-ice-cream"></i> <strong>Tip:</strong> Probad los helados de té matcha o los dulces Yatsuhashi.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=qS_D_M6N3XU"
                },
                {
                    id: "b3",
                    time: "12:30",
                    title: "Santuario Yasaka y Parque Maruyama",
                    description: "El 'Santuario de Gion' y su famosa puerta bermellón.",
                    image: "images/dia7-yasaka.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-torii-gate"></i> Santuario Yasaka-jinja</h3>
                        <p>Estratégicamente situado entre los distritos de Gion y Higashiyama, este santuario es uno de los más populares de la ciudad. Su puerta bermellón de dos pisos (Nishi-ro-mon) en la calle Shijo es uno de los hitos más reconocibles de Kioto.</p>
                        <p><em>Es conocido como el protector del distrito de geishas. Por la noche, sus cientos de linternas se iluminan, creando un ambiente místico. Si camináis un poco más hacia el interior, llegaréis al Parque Maruyama, el lugar favorito de los locales para el hanami (contemplación de los cerezos), donde destaca un enorme cerezo llorón central.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-lightbulb"></i> <strong>Linternas:</strong> Veréis los nombres de los negocios locales donados en ellas.</li>
                            <li><i class="fa-solid fa-peace"></i> <strong>Atmósfera:</strong> Especialmente mágico al atardecer cuando se encienden las luces.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "15:30",
                    title: "Heian Jingū",
                    description: "El impresionante Santuario Heian y su Torii gigante de 24 metros.",
                    image: "images/add-heian.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Heian+Jingu+Shrine",
                    tacticalGuideId: "mission_heian",
                    fullDesc: `
                        <h3><i class="fa-solid fa-archway"></i> Santuario Heian Jingū</h3>
                        <p>Construido en 1895 para conmemorar el 1100 aniversario de la fundación de Kioto como capital. El complejo es una réplica a escala parcial del Palacio Imperial original del periodo Heian. Lo primero que os impactará es el **O-Torii**, una de las puertas sintoístas más grandes de Japón, que se alza a 24 metros de altura sobre la avenida.</p>
                        <p><em>El recinto del santuario es vasto y de un color rojo vibrante que contrasta con el cielo. Detrás de los edificios principales se encuentran cuatro jardines (Shin-en) que representan los estilos de diferentes periodos, famosos por sus lirios, puentes cubiertos y la paz que se respira lejos del centro.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-torii-gate"></i> <strong>Visual:</strong> El gran torii rojo es una parada fotográfica obligatoria.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Jardines:</strong> Entrada opcional (600 JPY) para ver los puentes sobre los estanques.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "18:00",
                    title: "Barrio de Gion",
                    description: "El legendario distrito de las Geishas. Infiltración nocturna.",
                    image: "images/dia7-gion.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-dress-fairy"></i> El Enigma de Gion</h3>
                        <p>Gion es el distrito de entretenimiento más famoso de Kioto, donde el mundo de las Geiko (geishas) y Maiko (aprendices) todavía late con fuerza detrás de las celosías de madera de las ochaya (casas de té). La calle Hanamikoji es el epicentro visual, con su pavimento de piedra y edificios tradicionales perfectamente conservados.</p>
                        <p><em>Pasear por Gion al anochecer es una experiencia de paciencia y respeto. Si tenéis suerte, podréis ver la silueta rápida de una Maiko dirigiéndose a una cita. Recordad que son artistas trabajando, no atracciones turísticas; mantened la distancia y disfrutad del aura de misterio que envuelve estas calles.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-user-secret"></i> <strong>Código Ético:</strong> No molestar ni tocar a las Geiko/Maiko.</li>
                            <li><i class="fa-solid fa-camera-retro"></i> <strong>Canal Shirakawa:</strong> La zona más pintoresca de Gion, paralela al canal bajo los sauces.</li>
                        </ul>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Opción Tarde: El Pabellón Dorado",
                time: "14:30 - 17:00",
                description: "Aprovecha el hueco de la tarde para visitar la imagen más icónica de Kioto.",
                price: "500 JPY",
                image: "images/dia7-portada.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-sun"></i> Kinkaku-ji</h3>
                    <div style="background:rgba(0,243,255,0.05); border:1px solid var(--neon-blue); padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:var(--neon-blue);"><i class="fa-solid fa-truck-fast"></i> Logística Táctica:</h4>
                        <ul style="margin:5px 0 0; padding-left:15px; font-size:0.75rem;">
                            <li><strong>Origen:</strong> Parada Gion (cerca de Yasaka).</li>
                            <li><strong>Transporte:</strong> Bus 12 o 206 (45 min).</li>
                            <li><strong>Visita:</strong> 1h - 1.5h aprox.</li>
                            <li><strong>Retorno:</strong> Bus directo a Pontocho para cena.</li>
                        </ul>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "ENLACE: OPERACIÓN ORO",
                        time: "14:30 - 17:30",
                        description: "Incursión relámpago al norte de la ciudad.",
                        schedule: [
                            { time: "14:30", event: "Extracción Gion (Bus)" },
                            { time: "15:30", event: "Infiltración Kinkaku-ji" },
                            { time: "17:00", event: "Retorno a zona Centro" }
                        ],
                        buttons: [
                            {
                                text: "De Gion a Kinkaku-ji",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Gion+Station&destination=Kinkaku-ji&travelmode=transit"
                            },
                            {
                                text: "Regreso a Pontocho",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Kinkaku-ji&destination=Pontocho+Kyoto&travelmode=transit"
                            }
                        ]
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_pontocho_night",
                title: "Paseo Nocturno Pontocho",
                image: "images/dia7-gion.jpg",
                description: "Recorrido atmosférico por el callejón más famoso de Kioto de noche.",
                time: "20:00 – 21:30",
                price: "Gratis",
                video: "https://www.youtube.com/watch?v=8mG_nI_yKys",
                link: "https://www.google.com/maps/search/?api=1&query=Pontocho+Alley+Kyoto",
                tacticalGuideId: "mission_pontocho_night",
                fullDesc: `
                    <h3><i class="fa-solid fa-lantern"></i> Pontocho bajo la Luna</h3>
                    <p>Inmersión visual en las luces de neón y linternas tradicionales que bañan este estrecho callejón lleno de secretos.</p>
                `
            },
            {
                id: "add_samurai_museum",
                title: "Museo de Samuráis y Ninjas de Kioto",
                booking: { id: "bk_samurai", timeframe: "Fase 3 (Semanas antes)", required: true, link: "https://mai-ko.com/culture/samurai-ninja-museum-kyoto/" },
                image: "images/add-samurai-museum.jpg",
                description: "Experiencia interactiva con armaduras, katanas y entrenamiento ninja.",
                time: "11:30 – 13:30",
                price: "~2.500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Samurai+and+Ninja+Museum+with+Experience",
                tacticalGuideId: "mission_samurai_museum",
                fullDesc: `
                    <h3><i class="fa-solid fa-user-ninja"></i> Museo Samurái y Ninja</h3>
                    <p>Situado cerca de Nishiki Market. Podréis ver armaduras reales, aprender sobre la historia y participar en una breve clase de entrenamiento.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mediodía (11:30 – 13:30).</li>
                        <li><i class="fa-solid fa-khalifah"></i> <strong>Especial:</strong> Podéis probaros una armadura samurái para fotos.</li>
                    </ul>
                `
            },
            {
                id: "add_gion_shirakawa",
                title: "Gion Shirakawa",
                image: "images/add-gion-shirakawa.jpg",
                description: "La zona más pintoresca de Gion con canales, sauces llorones y casas de té.",
                time: "18:00 – 19:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Gion+Shirakawa+Area",
                tacticalGuideId: "mission_gion_shirakawa",
                fullDesc: `
                    <h3><i class="fa-solid fa-bridge-water"></i> Gion Shirakawa</h3>
                    <p>Zona mucho más tranquila que la calle Hanamikoji. Paseo idílico junto al canal Shirakawa.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Atardecer/Noche (18:00 – 19:00).</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Visual:</strong> Puentes de madera y fachadas tradicionales iluminadas.</li>
                    </ul>
                `
            },
            {
                id: "add_kenninji",
                title: "Templo Kennin-ji",
                image: "images/add-kenninji.jpg",
                description: "El templo zen más antiguo de Kioto con unos dragones gemelos en el techo impresionantes.",
                time: "14:00 – 15:30",
                price: "~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Kennin-ji+Temple",
                tacticalGuideId: "mission_kenninji",
                fullDesc: `
                    <h3><i class="fa-solid fa-dragon"></i> Templo Kennin-ji</h3>
                    <p>Famoso por su pintura de los dragones gemelos en el techo del salón principal y sus jardines de arena zen.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (14:00 – 15:30).</li>
                        <li><i class="fa-solid fa-peace"></i> <strong>Ambiente:</strong> Zen absoluto en el centro de Gion.</li>
                    </ul>
                `
            }
        ]
    },


    // --- DÍA 8: ARASHIYAMA y NORTE (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 8, exactDate: "2026-08-03", type: "stay",
        date: "Lun, 3 Agosto", title: "🎋 Arashiyama: Bambú y Zen",
        coords: [35.009, 135.678], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/arashiyama.png",

        logistics: [
            { title: "Reserva", text: "Si planeáis el Tren Romántico de Sagano, reservad con 1 mes de antelación." },
            { title: "Madrugar", text: "Lunes en Arashiyama. Bambú a las 8am máximo para evitar gente." },
            { title: "Transporte", text: "Tren JR Sagano Line hasta Saga-Arashiyama." }
        ],

        transportTimeline: [
            {
                time: "07:30",
                type: "transit",
                title: "Infiltración: Hotel ➔ Arashiyama",
                price: "240 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=Saga-Arashiyama+Station&travelmode=transit",
                tacticalGuideId: "mission_arashiyama_transfer"
            },
            {
                time: "08:00",
                type: "point",
                title: "🚄 Salida: Kyoto Station (JR Sagano Line)",
                icon: "fa-solid fa-train-subway"
            },
            {
                time: "08:30",
                type: "point",
                title: "🎋 Bosque de Bambú: Caminata matutina.",
                icon: "fa-solid fa-leaf"
            },
            {
                time: "09:30",
                type: "point",
                title: "⛩️ Templo Tenryu-ji: Jardín zen.",
                icon: "fa-solid fa-pagoda"
            },
            {
                time: "11:00",
                type: "point",
                title: "⛩️ Adashino Nembutsuji: El campo de estatuas.",
                icon: "fa-solid fa-person-praying"
            },
            {
                time: "12:00",
                type: "point",
                title: "⛩️ Otagi Nembutsuji: Las 1.200 caras.",
                icon: "fa-solid fa-masks-theater"
            },
            {
                time: "13:30",
                type: "gap",
                title: "🍱 Almuerzo: Zona Saga-Toriimoto",
                icon: "fa-solid fa-utensils"
            },
            {
                time: "15:00",
                type: "point",
                title: "🌉 Puente Togetsukyo y Parque de Monos.",
                icon: "fa-solid fa-bridge"
            },
            {
                time: "17:30",
                type: "transit",
                title: "Extracción: Regreso al Hotel",
                price: "240 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Saga-Arashiyama+Station&destination=Kyoto+Tower+Hotel+Annex&travelmode=transit",
                tacticalGuideId: "mission_kyoto_return"
            }
        ],

        timeline: [
            { time: "08:30", title: "Bosque de Bambú", desc: "El alma verde de Arashiyama. (Base)" },
            { time: "11:00", title: "Adashino Nembutsuji", desc: "El templo de las miles de estatuas. (Base)" },
            { time: "12:00", title: "Otagi Nembutsuji", desc: "Las 1.200 caras sonrientes. (Base)" },
            { time: "15:00", title: "Puente y Monos", desc: "Iconos y panorámicas del sur. (Base)" }
        ],

        prices: {
            transport: "600 JPY",
            entrances: "2.500 JPY (Base)",
            food: "~3.000 JPY",
            total: "~6.100 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Naturaleza y templos en el oeste de Kioto.",
            events: [
                {
                    id: "b0",
                    time: "09:30",
                    title: "Tren Romántico de Sagano",
                    description: "Paseo escénico en tren de vapor por el desfiladero del río Hozugawa.",
                    image: "images/dia8-bambu.jpg",
                    price: "~880 JPY",
                    booking: { id: "bk_sagano_train", timeframe: "Exactamente 1 mes antes", required: true, link: "https://www.westjr.co.jp/global/en/ticket/route_search/" },
                    fullDesc: `<h3><i class="fa-solid fa-train"></i> Tren Romántico (Sagano Scenic Railway)</h3><p>Un viaje de 25 minutos por la belleza natural del valle de Hozugawa.</p>`
                },
                {
                    id: "b1",
                    time: "08:30",
                    title: "Bosque de Bambú",
                    description: "Paseo icónico entre tallos gigantes. (Gratis)",
                    image: "images/dia8-itinerario-base.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Bosque de Bambú de Sagano</h3>
                        <p>Uno de los paisajes más fotografiados y evocadores de todo Japón. El camino serpentea a través de miles de altísimos tallos de bambú que filtran la luz del sol, creando una atmósfera verde y mágica. No es solo un espectáculo visual: el sonido del viento meciedo ligeramente los troncos de bambú ha sido designado por el Ministerio de Medio Ambiente como uno de los "100 Paisajes Sonoros de Japón" que deben ser preservados.</p>
                        <p><em>Para disfrutar de este aura de paz y escuchar el susurro místico del bosque, es vital llegar a primera hora (antes de las 08:30), cuando el silencio todavía reina antes de la llegada de los grupos turísticos.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 30-45 min de paseo.</li>
                            <li><i class="fa-solid fa-music"></i> <strong>Experiencia:</strong> Deteneos un momento en silencio para escuchar el bosque.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "10:00",
                    title: "Templo Tenryū-ji",
                    description: "El Templo del Dragón Celestial y su jardín zen del siglo XIV.",
                    image: "images/dia8-tenryuji.jpg",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/dir/Sagano+Bamboo+Forest/Tenryu-ji/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-pagoda"></i> Templo Tenryū-ji</h3>
                        <p>Fundado en 1339 por el Shogún Ashikaga Takauji en honor al emperador Go-Daigo, este es el templo zen más importante de Arashiyama. Aunque sus edificios han sido reconstruidos varias veces, su jardín Sogenchi es una obra maestra que se conserva en su diseño original del siglo XIV.</p>
                        <p><em>El jardín utiliza la técnica del "paisaje prestado" (shakkei), integrando las montañas de Arashiyama y Kameyama en su propia composición. Dentro del Dharma Hall, no os perdáis la impresionante pintura del "Dragón de las Nubes" en el techo, cuya mirada parece seguirte desde cualquier punto de la sala.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1 hora.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 500 JPY (Jardín) + 300 JPY (Interior).</li>
                            <li><i class="fa-solid fa-dragon"></i> <strong>Clave:</strong> El dragón del techo y la paz del estanque central.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=_PWIY6trR2U"
                },
                {
                    id: "b3",
                    time: "11:00",
                    title: "Adashino Nenbutsu-ji",
                    description: "Un templo místico con 8.000 estatuas dedicadas a las almas sin nombre.",
                    image: "images/adashino-nembutsuji.jpg",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Adashino+Nenbutsuji+Temple",
                    fullDesc: `
                        <h3><i class="fa-solid fa-peace"></i> Adashino Nenbutsu-ji</h3>
                        <p>Situado al final de la pintoresca calle preservada de Saga-Toriimoto. Lo más impresionante es el "Saito-no-Kawara", un campo lleno de miles de pequeñas estatuas de piedra budistas (Jizo) que conmemoran a las almas que murieron sin familia.</p>
                        <p><em>El templo tiene una atmósfera de paz profunda y sagrada. No os perdáis el pequeño pero denso bosque de bambú que se encuentra detrás del complejo; es mucho más tranquilo que el principal y ofrece una experiencia más íntima.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Vibe:</strong> Serena y reflexiva, lejos de las masas.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Escalera Verde:</strong> El camino de piedra hacia el bosque de bambú es una joya fotográfica.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "12:00",
                    title: "Otagi Nenbutsu-ji",
                    description: "El templo de las 1.200 caras sonrientes. Una experiencia única y creativa.",
                    image: "images/otagi-nembutsuji.jpg",
                    price: "300 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Otagi+Nenbutsu-ji+Temple",
                    fullDesc: `
                        <h3><i class="fa-solid fa-masks-theater"></i> Otagi Nenbutsu-ji</h3>
                        <p>A solo 10 minutos caminando desde Adashino. Este templo es famoso por sus 1.200 estatuas de piedra (rakan), cada una grabada con una expresión facial distinta y a menudo humorística: monjes riendo, sosteniendo raquetas de tenis o bebiendo sake.</p>
                        <p><em>Las estatuas fueron creadas por personas corrientes de todo Japón en los años 80 bajo la guía del escultor y monje Kocho Nishimura. Es un lugar que desprende alegría y calidez humana en un entorno natural precioso.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-face-smile"></i> <strong>Búsqueda:</strong> Intentad encontrar una estatua que se parezca a alguien que conocéis.</li>
                            <li><i class="fa-solid fa-bell"></i> <strong>Campana:</strong> Podéis ver la triple campana de la paz en la entrada.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "15:00",
                    title: "Puente Togetsukyō",
                    description: "El 'Puente que cruza la Luna', icono histórico de Arashiyama.",
                    image: "images/dia8-puente.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/dir/Otagi+Nenbutsuji/Togetsukyo+Bridge/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bridge"></i> Puente Togetsukyō</h3>
                        <p>Símbolo central de Arashiyama. Recibe su nombre del emperador Kameyama, quien dijo ver a la luna cruzar el puente durante una noche de fiesta en barco.</p>
                    `
                },
                {
                    id: "b6",
                    time: "16:00",
                    title: "Parque de los Monos Iwatayama",
                    description: "Encuentro con macacos japoneses y vistas panorámicas de Kioto.",
                    image: "images/dia8-monos.jpg",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/dir/Togetsukyo+Bridge/Iwatayama+Monkey+Park/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Parque de Monos Iwatayama</h3>
                        <p>Tras una caminata de 20 minutos, disfrutaréis de vistas increíbles y la compañía de macacos en libertad.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Opción Tarde: Ryoan-ji (Jardín Zen)",
                time: "16:00",
                description: "Desde Arashiyama: Tren Randen (20 min) hasta Ryoan-ji-michi. (500 JPY)",
                price: "500 JPY",
                image: "images/dia7-ginkakuji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-peace"></i> Ryoan-ji</h3>
                    <p>Famoso por su jardín seco karesansui. El lugar perfecto para terminar el día en contemplación.</p>
                `,
                tacticalOptions: [
                    {
                        title: "ENLACE: TRANVÍA RANDEN",
                        time: "16:00 - 17:30",
                        description: "Trayecto panorámico en el último tranvía de Kioto.",
                        buttons: [
                            {
                                text: "Arashiyama ➔ Ryoan-ji",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Arashiyama+Station+Randen&destination=Ryoan-ji&travelmode=transit"
                            }
                        ],
                        tacticalGuideId: "mission_ryoanji_transit"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_hozugawa",
                title: "Barco por el río Hozugawa",
                image: "images/add-hozugawa.jpg",
                description: "Descenso tradicional de 2 horas por los rápidos del río entre montañas.",
                time: "10:00 – 12:00",
                price: "~4.100 JPY",
                tacticalGuideId: "mission_hozugawa",
                video: "https://www.youtube.com/watch?v=Hiy0gA5V9V0",
                link: "https://www.google.com/maps/search/?api=1&query=Hozugawa+River+Boat+Ride",
                tacticalGuideId: "mission_hozugawa",
                fullDesc: `
                    <h3><i class="fa-solid fa-ship"></i> Descenso del Hozugawa</h3>
                    <p>Una experiencia de 16km río abajo en barcas de madera guiadas por remeros expertos. Paisaje montañoso espectacular.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Estrategia:</strong> Ir temprano a Kameoka para pillar la primera barca.</li>
                        <li><i class="fa-solid fa-mountain"></i> <strong>Naturaleza:</strong> Ideal para ver la vegetación exuberante de Arashiyama.</li>
                    </ul>
                `
            },
            {
                id: "add_kimono_arashiyama",
                title: "Alquiler de Kimono en Arashiyama",
                image: "images/add-kimono.jpg",
                description: "Paseo por el bosque de bambú y los puentes vestido con la prenda tradicional.",
                time: "09:00 – 17:00",
                price: "~3.500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Kimono+Rental+Arashiyama",
                tacticalGuideId: "mission_kimono_arashiyama",
                fullDesc: `
                    <h3><i class="fa-solid fa-person-dress"></i> Experiencia Kimono</h3>
                    <p>Arashiyama es el escenario fotográfico perfecto para vestir un Kimono o Yukata. Hay muchas tiendas cerca de la estación JR.</p>
                    <ul>
                        <li><i class="fa-solid fa-camera"></i> <strong>Visual:</strong> Fotos increíbles en el bosque de bambú y el puente Togetsukyo.</li>
                        <li><i class="fa-solid fa-clock"></i> <strong>Duración:</strong> Podéis llevarlo todo el día.</li>
                    </ul>
                `
            },
            {
                id: "add_daikakuji",
                title: "Templo Daikaku-ji",
                image: "images/add-daikakuji.jpg",
                description: "Antiguo palacio imperial con un gran estanque artificial y pasarelas de madera.",
                time: "14:30 – 16:00",
                price: "~500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Daikakuji+Temple",
                tacticalGuideId: "mission_daikakuji",
                fullDesc: `
                    <h3><i class="fa-solid fa-landmark"></i> Templo Daikaku-ji</h3>
                    <p>Mucho menos concurrido que Tenryu-ji. Sus pasillos de madera conectan varios edificios sobre el agua del estanque Osawa.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (14:30 – 16:00).</li>
                        <li><i class="fa-solid fa-peace"></i> <strong>Paz:</strong> Un escondite perfecto de las multitudes del bosque de bambú.</li>
                    </ul>
                `
            }
        ]
    },


    // --- DÍA 9: KIOTO: CONTRASTES IMPERDIBLES ---
    {
        day: 9, type: "stay",
        date: "Mar, 4 Agosto", title: "Kioto: Contrastes Imperdibles",
        coords: [34.967, 135.772], zoom: 12,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/fushimi_inari.png",

        logistics: [
            { title: "Transporte", text: "Hoy cruzamos Kioto. Usaremos tren JR por la mañana y bus urbano por la tarde. Ten la tarjeta IC (Suica/Pasmo) lista." },
            { title: "Tip", text: "En el Mercado Nishiki no se debe caminar mientras se come; busca los espacios designados en cada puesto." }
        ],

        transportTimeline: [
            {
                time: "07:30",
                type: "point",
                title: "🚄 Salida: Kyoto Station (JR Nara Line) a Estación Inari",
                icon: "fa-solid fa-train"
            },
            {
                time: "08:00",
                type: "point",
                title: "⛩️ Fushimi Inari: Infiltración temprana.",
                icon: "fa-solid fa-torii-gate"
            },
            {
                time: "11:00",
                type: "transit",
                title: "🚇 Traslado: JR Inari ➔ Nishiki Market",
                price: "150 + 220 JPY",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/Inari+Station/Nishiki+Market/",
                tacticalGuideId: "mission_kyoto_center_link"
            },
            {
                time: "11:30",
                type: "point",
                title: "🍱 Mercado de Nishiki: Almuerzo temprano.",
                icon: "fa-solid fa-bowl-food"
            },
            {
                time: "13:00",
                type: "transit",
                title: "🚌 Salto al Este: Bus 32/203 hacia Paseo del Filósofo",
                price: "230 JPY",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/Nishiki+Market/Philosopher's+Path/"
            },
            {
                time: "13:30",
                type: "point",
                title: "🌿 Paseo del Filósofo: Ruta zen junto al canal.",
                icon: "fa-solid fa-scroll"
            },
            {
                time: "15:00",
                type: "transit",
                title: "🚌 Salto al Noroeste: Bus 204 hacia Kinkaku-ji",
                price: "230 JPY",
                timeLabel: "35 min",
                link: "https://www.google.com/maps/dir/Philosopher's+Path/Kinkaku-ji/"
            },
            {
                time: "15:30",
                type: "point",
                title: "✨ Kinkaku-ji: El Pabellón Dorado.",
                icon: "fa-solid fa-sparkles"
            },
            {
                time: "17:30",
                type: "point",
                title: "💤 Retorno: Bus o Taxi hacia el hotel.",
                icon: "fa-solid fa-bed"
            }
        ],

        timeline: [
            { time: "08:00", title: "Fushimi Inari", desc: "Santuario de los mil toriis. (Base)" },
            { time: "11:30", title: "Mercado Nishiki", desc: "La despensa de Kioto. (Base)" },
            { time: "13:30", title: "Paseo del Filósofo", desc: "Camino zen junto al canal. (Base)" },
            { time: "15:30", title: "Kinkaku-ji", desc: "El pabellón recubierto de oro. (Base)" }
        ],

        prices: {
            transport: "~1.100 JPY",
            entrances: "500 JPY (Kinkaku-ji)",
            food: "~3.000 JPY",
            total: "~4.600 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Kioto: Contrastes Imperdibles",
            description: "De los senderos sagrados al bullicio del mercado y la paz del pabellón dorado.",
            events: [
                {
                    id: "b1",
                    time: "08:00",
                    title: "Fushimi Inari-taisha",
                    description: "El santuario de los mil toriis. Infiltración temprana para evitar las masas. (Gratis)",
                    image: "images/fushimi_inari.png",
                    price: "Gratis",
                    link: "https://www.google.com/maps/dir/Kyoto+Station/Fushimi+Inari-taisha/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-torii-gate"></i> Fushimi Inari-taisha</h3>
                        <p>Dedicado a Inari, el dios Shinto del arroz y la prosperidad, este santuario es famoso por sus miles de toriis bermellón que forman túneles interminables por la ladera del monte Inari. Cada puerta es una donación de una empresa o individuo, con sus nombres grabados en negro en la parte posterior.</p>
                        <p><em>En el camino veréis numerosas estatuas de zorros (kitsune), considerados mensajeros divinos de Inari, a menudo representados con una llave en la boca (del granero de arroz). Para disfrutar de la magia real sin multitudes, subid al menos hasta el mirador Yotsutsuji; allí la mayoría de la gente se da la vuelta, dejando los senderos superiores sumidos en un silencio sagrado y boscoso.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Estrategia:</strong> Infiltración temprana (08:00) es clave para las fotos sin gente.</li>
                            <li><i class="fa-solid fa-mountain"></i> <strong>Vistas:</strong> El mirador Yotsutsuji ofrece una panorámica espectacular del sur de Kioto.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Mercado de Nishiki",
                    description: "La despensa de Kioto. Un paraíso para los amantes de la comida callejera. (Variable)",
                    image: "images/nishiki_market.png",
                    price: "Variable",
                    video: "https://www.youtube.com/watch?v=1KWnkAaefbo",
                    link: "https://www.google.com/maps/search/Nishiki+Market+Kyoto/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bowl-food"></i> Mercado de Nishiki (Kyoto Kitchen)</h3>
                        <p>Con más de 400 años de historia, Nishiki es una estrecha calle comercial techada que alberga más de cien tiendas y restaurantes. Conocida como "La despensa de Kioto", aquí se encuentran los ingredientes más frescos y exquisitos de la gastronomía japonesa, desde marisco de alta calidad hasta vegetales únicos de la región y encurtidos tradicionales (tsukemono).</p>
                        <p><em>Es un paraíso sensorial. Probad el famoso "Tako Tamago" (un pequeño pulpo asado con un huevo de codorniz dentro de su cabeza) o los pinchos de carne wagyu. Recordad la etiqueta local: no se debe caminar mientras se come; comprad el bocado, disfrutadlo en el propio puesto y luego continuad vuestra exploración.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> 09:30-18:00 (la mayoría abre sobre las 10:00).</li>
                            <li><i class="fa-solid fa-basket-shopping"></i> <strong>Souvenirs:</strong> Lugar ideal para comprar cuchillos de cocina artesanos y especias.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "13:30",
                    title: "Paseo del Filósofo",
                    description: "Paseo meditativo junto al canal siguiendo los pasos de Nishida Kitaro.",
                    image: "images/paseo-filosofo.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Philosopher's+Path+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-scroll"></i> Tetsugaku-no-michi</h3>
                        <p>Este sendero de piedra de 2km sigue un canal bordeado de cientos de árboles. Recibe su nombre en honor al filósofo Nishida Kitaro, quien se dice que meditaba aquí durante su trayecto diario a la Universidad de Kioto.</p>
                        <p><em>Es uno de los paseos más evocadores de la ciudad. Aunque es famoso en primavera por los cerezos, en verano ofrece un frescor verde y una paz única. El camino conecta la zona de Ginkaku-ji (Norte) con los alrededores del templo Nanzen-ji (Sur), pasando por pequeños santuarios y cafeterías con encanto.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-walking"></i> <strong>Distancia:</strong> Aproximadamente 2 km.</li>
                            <li><i class="fa-solid fa-peace"></i> <strong>Concepto:</strong> Paseo ideal para la introspección y disfrutar del paisaje urbano tradicional.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "15:30",
                    title: "Kinkaku-ji",
                    description: "El Pabellón Dorado. Una reliquia de oro que brilla sobre un estanque espejo. (500 JPY)",
                    image: "images/kinkakuji.png",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/dir/Nishiki+Market/Kinkaku-ji/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-sparkles"></i> Kinkaku-ji (Pabellón Dorado)</h3>
                        <p>Es, sin duda, la imagen más icónica de Kioto. Este templo zen de la escuela Rinzai fue originalmente la villa de retiro del Shogún Ashikaga Yoshimitsu. Lo más impactante es que sus dos plantas superiores están completamente recubiertas de pan de oro puro, brillando intensamente sobre el "Estanque del Espejo" (Kyoko-chi) que lo rodea.</p>
                        <p><em>Cada planta representa un estilo arquitectónico diferente: la primera es estilo palaciego Heian, la segunda estilo de casa samurái y la tercera estilo templo zen. El edificio que veis hoy es una reconstrucción fiel de 1955, después de que un joven monje fanático lo incendiara en 1950, un suceso que conmovió a Japón.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto Clave:</strong> Desde la orilla opuesta del estanque para capturar el reflejo perfecto.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> El ticket es un amuleto (ofuda) que atrae la buena suerte.</li>
                        </ul>
                    `
                }
            ]
        },

        complements: [
            {
                id: "c1",
                title: "Templo Ryoan-ji",
                time: "16:45",
                description: "El jardín seco más famoso del mundo. A 15 min de Kinkaku-ji. (500 JPY)",
                price: "500 JPY",
                image: "images/dia7-ginkakuji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-peace"></i> Ryoan-ji</h3>
                    <p>A solo 15 min caminando desde Kinkaku-ji. Contempla las 15 piedras místicas de su jardín zen.</p>
                `,
                link: "https://www.google.com/maps/dir/Kinkaku-ji/Ryoan-ji/"
            }
        ],
        additionalExcursions: [
            {
                id: "add_fushimi_sake",
                title: "Distrito del Sake de Fushimi",
                image: "images/add-fushimi-sake.jpg",
                description: "Bodegas tradicionales de sake junto a canales con barcos de madera.",
                time: "10:30 – 12:30",
                price: "Variable",
                link: "https://www.google.com/maps/search/?api=1&query=Fushimi+Sake+District",
                tacticalGuideId: "mission_fushimi_sake",
                fullDesc: `
                    <h3><i class="fa-solid fa-wine-glass"></i> Fushimi Sake District</h3>
                    <p>Cerca de Fushimi Inari. Podéis visitar la fábrica Gekkeikan y pasear por los canales bordeados de sauces.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (10:30 – 12:30).</li>
                        <li><i class="fa-solid fa-vial"></i> <strong>Cata:</strong> Muchas bodegas ofrecen degustaciones por pocos yenes.</li>
                    </ul>
                `
            },
            {
                id: "add_ninnaji",
                title: "Templo Ninna-ji",
                image: "images/add-ninnaji.jpg",
                description: "Complejo imperial enorme con una pagoda de cinco pisos y jardines palaciegos.",
                time: "14:00 – 15:30",
                price: "~500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Ninnaji+Temple",
                tacticalGuideId: "mission_ninnaji",
                fullDesc: `
                    <h3><i class="fa-solid fa-hotel"></i> Templo Ninna-ji</h3>
                    <p>Patrimonio de la Humanidad. Famoso por sus cerezos de floración tardía y sus elegantes edificios de estilo imperial.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (14:00 – 15:30).</li>
                        <li><i class="fa-solid fa-vector-square"></i> <strong>Espacio:</strong> Recinto muy amplio y tranquilo.</li>
                    </ul>
                `
            },
            {
                id: "add_kitano",
                title: "Santuario Kitano Tenmangu",
                image: "images/add-kitano.jpg",
                description: "El santuario del dios del estudio, famoso por sus ciruelos y sus estatuas de bueyes.",
                time: "16:00 – 17:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Kitano+Tenmangu+Shrine",
                tacticalGuideId: "mission_kitano",
                fullDesc: `
                    <h3><i class="fa-solid fa-pen-nib"></i> Kitano Tenmangu</h3>
                    <p>Un santuario vibrante cerca de la zona de Geishas de Kamigyo. Los estudiantes vienen aquí a pedir éxito en los exámenes.</p>
                    <ul>
                        <li><i class="fa-solid fa-cow"></i> <strong>Tradición:</strong> Acariciad la nariz de los bueyes de bronce para tener buena suerte.</li>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (16:00 – 17:00).</li>
                    </ul>
                `
            }
        ]
    },


    // --- DÍA 10: DESPEDIDA DE KIOTO (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 10, type: "stay",
        date: "Mié, 5 Agosto", title: "🍃 Kioto: Últimas Compras y Zen",
        coords: [34.985, 135.758], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/dia10-itinerario-base.jpg",

        logistics: [
            { title: "Takkyubin", text: "IMPORTANTE: Enviar maletas grandes a Tokio/Kawaguchiko." },
            { title: "Check-out", text: "Dejad maletas en recepción si no las enviáis." },
            { title: "Flexibilidad", text: "Día libre. Elegid las excursiones que más os interesen según vuestro ritmo." }
        ],

        transportTimeline: [
            {
                time: "09:00",
                type: "point",
                title: "🏨 Check-out y Logística Takkyubin",
                icon: "fa-solid fa-suitcase-rolling"
            },
            {
                time: "10:00",
                type: "point",
                title: "☕ Desayuno/Café cerca del hotel",
                icon: "fa-solid fa-mug-hot"
            },
            {
                time: "10:30",
                type: "transit",
                title: "🚌 Opción A: Salida hacia Ohara (Norte de Kioto)",
                price: "580 JPY (ida/vuelta)",
                timeLabel: "60 min",
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Sanzen-in+Temple,+Ohara/",
                tacticalGuideId: "mission_ohara_bus"
            },
            {
                time: "10:30",
                type: "transit",
                title: "🚶 Opción B: Torre de Kioto (5 min andando)",
                price: "900 JPY",
                timeLabel: "5 min",
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Kyoto+Tower/",
                tacticalGuideId: "mission_kyoto_tower"
            },
            {
                time: "13:00",
                type: "point",
                title: "🍜 Almuerzo: Mercado Nishiki o zona Kawaramachi",
                icon: "fa-solid fa-bowl-rice"
            },
            {
                time: "14:30",
                type: "transit",
                title: "🛍️ Opción C: Mercado Nishiki (Compras finales)",
                price: "Gratis (entrada)",
                timeLabel: "15 min metro",
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Nishiki+Market/",
                tacticalGuideId: "mission_nishiki_shopping"
            },
            {
                time: "17:00",
                type: "point",
                title: "🏨 Regreso al hotel para recoger maletas",
                icon: "fa-solid fa-hotel"
            },
            {
                time: "19:00",
                type: "point",
                title: "🍱 Cena de despedida en Kioto",
                icon: "fa-solid fa-utensils"
            }
        ],

        timeline: [
            { time: "09:00", title: "Check-out", desc: "Gestión de maletas. (Base)" },
            { time: "10:30", title: "Excursión Matutina", desc: "Ohara o Torre de Kioto. (Opcional)" },
            { time: "13:00", title: "Almuerzo", desc: "Nishiki o Kawaramachi. (Base)" },
            { time: "14:30", title: "Compras/Relax", desc: "Últimas compras. (Opcional)" },
            { time: "19:00", title: "Cena", desc: "Despedida de Kioto. (Base)" }
        ],

        prices: {
            transport: "~580 JPY (Ohara) o ~460 JPY (Nishiki)",
            entrances: "700 JPY (Ohara) + 900 JPY (Torre)",
            food: "~4.000 JPY",
            total: "~5.500 JPY (con 1 excursión)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Mañana de logística y despedida. Elegid las excursiones según vuestro ritmo.",
            events: [
                {
                    id: "b1",
                    time: "09:00",
                    title: "Check-out y Takkyubin",
                    description: "Enviar maletas grandes y prepararse para los Alpes.",
                    image: "images/dia10-itinerario-base-1.jpg",
                    price: "~2.500 JPY/maleta",
                    fullDesc: `
                        <h3><i class="fa-solid fa-truck-fast"></i> Logística Vital: Takkyubin</h3>
                        <p>No llevéis maletas grandes a los Alpes. Las enviaremos directamente a Tokio (para el día 11) o Kawaguchiko. Viajad solo con mochila.</p>
                        <div style="background:rgba(255,140,0,0.05); border:1px solid #ff8c00; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#ff8c00;"><i class="fa-solid fa-circle-info"></i> Proceso:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">Pedid el servicio en recepción. Rellenad el formulario con la dirección del hotel de destino. Pago en efectivo.</p>
                        </div>
                    `
                },
                {
                    id: "b2",
                    time: "13:00",
                    title: "Almuerzo en Kioto",
                    description: "Última comida en la antigua capital. Mercado Nishiki o restaurantes en Kawaramachi.",
                    image: "images/dia10-nishiki.jpg",
                    price: "~2.000 JPY",
                    link: "https://www.google.com/maps/search/restaurants+near+Nishiki+Market+Kyoto/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bowl-rice"></i> Almuerzo Táctico</h3>
                        <p><strong>Opciones recomendadas:</strong></p>
                        <ul>
                            <li><strong>Mercado Nishiki:</strong> Tapeo de puestos (Tako Tamago, Yakitori).</li>
                            <li><strong>Kawaramachi:</strong> Restaurantes de ramen o sushi.</li>
                            <li><strong>Pontocho:</strong> Callejón tradicional con izakayas.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "19:00",
                    title: "Cena de Despedida",
                    description: "Última cena en Kioto antes de partir a los Alpes.",
                    image: "images/dia10-portada.jpg",
                    price: "~2.000 JPY",
                    link: "https://www.google.com/maps/search/izakaya+near+Kyoto+Station/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Cena de Despedida</h3>
                        <p>Disfrutad de una última cena en Kioto. Opciones cerca de la estación para facilitar el traslado del día siguiente.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Ohara (Sanzen-in)",
                time: "10:30",
                description: "Jardines de musgo y estatuas Jizo. Al norte de Kioto. (700 JPY)",
                price: "700 JPY + 580 JPY (bus)",
                image: "images/dia10-ohara.jpg",
                recommended: true,
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Sanzen-in+Temple,+Ohara/",
                fullDesc: `
                    <h3><i class="fa-solid fa-tree"></i> Ohara: Jardines de Musgo</h3>
                    <p>Una escapada zen al norte de Kioto. El templo Sanzen-in es famoso por sus jardines cubiertos de musgo y las adorables estatuas Jizo.</p>
                    <div style="background:rgba(0,255,127,0.05); border:1px solid #00ff7f; padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:#00ff7f;"><i class="fa-solid fa-bus"></i> Transporte:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">Bus 17 o 18 desde Kyoto Station (60 min, 580 JPY ida/vuelta). Salida recomendada: 10:30.</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA: HOTEL ➔ OHARA",
                        time: "10:30 - 16:00",
                        description: "Excursión matutina a los jardines de musgo del norte de Kioto.",
                        buttons: [
                            {
                                text: "Hotel ➔ Ohara",
                                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Sanzen-in+Temple,+Ohara/"
                            }
                        ],
                        tacticalGuideId: "mission_ohara_bus"
                    }
                ]
            },
            {
                id: "c2",
                title: "Torre de Kioto",
                time: "10:30",
                description: "Vistas panorámicas frente a la estación. (900 JPY)",
                price: "900 JPY",
                image: "images/hotel-kyoto-tower.jpg",
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Kyoto+Tower/",
                fullDesc: `
                    <h3><i class="fa-solid fa-tower-observation"></i> Torre de Kioto</h3>
                    <p>Vistas de 360° de la ciudad desde 100 metros de altura. Perfecta para una última mirada panorámica de Kioto.</p>
                    <div style="background:rgba(0,191,255,0.05); border:1px solid #00bfff; padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:#00bfff;"><i class="fa-solid fa-walking"></i> Acceso:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">5 min andando desde el hotel. Entrada: 900 JPY. Horario: 10:00-21:00.</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA: HOTEL ➔ TORRE",
                        time: "10:30 - 12:00",
                        description: "Visita rápida a la torre con vistas panorámicas de Kioto.",
                        buttons: [
                            {
                                text: "Hotel ➔ Torre (5 min)",
                                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Kyoto+Tower/"
                            }
                        ],
                        tacticalGuideId: "mission_kyoto_tower"
                    }
                ]
            },
            {
                id: "c3",
                title: "Mercado Nishiki",
                time: "14:30",
                description: "Últimas compras gastronómicas. (Gratis)",
                price: "Gratis (entrada)",
                image: "images/nishiki_market.png",
                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Nishiki+Market/",
                fullDesc: `
                    <h3><i class="fa-solid fa-store"></i> Mercado Nishiki</h3>
                    <p>La despensa de Kioto. Ideal para compras gastronómicas de último momento: tsukemono, té, dulces tradicionales.</p>
                    <div style="background:rgba(255,215,0,0.05); border:1px solid #ffd700; padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:#ffd700;"><i class="fa-solid fa-subway"></i> Transporte:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">Metro Karasuma Line a Shijo (15 min, 230 JPY). Horario del mercado: 10:00-18:00.</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA: HOTEL ➔ NISHIKI",
                        time: "14:30 - 17:00",
                        description: "Compras finales en el mercado gastronómico más famoso de Kioto.",
                        buttons: [
                            {
                                text: "Hotel ➔ Nishiki",
                                link: "https://www.google.com/maps/dir/Kyoto+Tower+Hotel+Annex/Nishiki+Market/"
                            }
                        ],
                        tacticalGuideId: "mission_nishiki_shopping"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_heian",
                title: "Santuario Heian",
                image: "images/add-heian.jpg",
                description: "Famoso por su gigantesco Torii rojo y sus jardines imperiales con puentes de madera.",
                time: "11:00 – 12:30",
                price: "Jardín ~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Heian+Shrine",
                tacticalGuideId: "mission_heian",
                video: "https://www.youtube.com/watch?v=E3mX_M7B7_k",
                fullDesc: `
                    <h3><i class="fa-solid fa-torii-gate"></i> Santuario Heian</h3>
                    <p>Construido para celebrar el 1100 aniversario de Kioto. Su jardín trasero es uno de los más bellos para pasear sobre el agua.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Mañana (11:00 – 12:30).</li>
                        <li><i class="fa-solid fa-bridge"></i> <strong>Visual:</strong> El puente Taihei-kaku es icónico.</li>
                    </ul>
                `
            },
            {
                id: "add_tofukuji",
                title: "Templo Tōfuku-ji",
                image: "images/add-tofukuji.jpg",
                description: "Templo zen con un puente que cruza un valle de arces y jardines de piedra modernos.",
                time: "14:30 – 16:00",
                price: "~600 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Tofukuji+Temple",
                tacticalGuideId: "mission_tofukuji",
                video: "https://www.youtube.com/watch?v=2W6M48uS-i4",
                fullDesc: `
                    <h3><i class="fa-solid fa-bridge-water"></i> Tōfuku-ji</h3>
                    <p>Posee uno de los jardines zen más fotografiados (el de cuadrados de musgo y piedra). El puente Tsutenkyo ofrece vistas de bosque urbano.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (14:30 – 16:00).</li>
                        <li><i class="fa-solid fa-square"></i> <strong>Diseño:</strong> Mezcla perfecta de tradición y vanguardia zen.</li>
                    </ul>
                `
            },
            {
                id: "add_funaoka",
                title: "Funaoka Onsen",
                image: "images/add-funaoka.jpg",
                description: "Uno de los baños públicos más antiguos y bonitos de Kioto con tallas de madera históricas.",
                time: "18:00 – 20:00",
                price: "~490 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Funaoka+Onsen+Kyoto",
                tacticalGuideId: "mission_funaoka",
                video: "https://www.youtube.com/watch?v=Kz-rV-jEwVs",
                fullDesc: `
                    <h3><i class="fa-solid fa-hot-tub-person"></i> Funaoka Onsen</h3>
                    <p>No es un onsen natural de montaña, sino un Sentō (baño público) histórico. Impulsaos por su historia y sus azulejos decorativos.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Noche (18:00 – 20:00).</li>
                        <li><i class="fa-solid fa-user-check"></i> <strong>Auténtico:</strong> Experiencia local 100% fuera de la ruta turística.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 11: ALPES JAPONESES (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 11, exactDate: "2026-08-06", type: "travel",
        date: "Jue, 6 Agosto", title: "⛰️ Alpes: Relax en el Ryokan",
        coords: [36.259, 137.551], zoom: 13,
        hotel: "Kazeya Ryokan",
        hotelImage: "images/hotel-kazeya.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kazeya+Ryokan+Shin-Hotaka+Onsen",
        image: "images/okuhida_ryokan.png",

        logistics: [
            { title: "Equipaje", text: "Solo mochilas de mano. Las maletas grandes van por Takkyubin a Tokio o Kawaguchiko." },
            { title: "Onsen", text: "Ducharse antes de entrar. Tatuajes: consultar política (o reservar privado)." }
        ],

        transportTimeline: [
            { time: "08:30", type: "point", title: "Salida de Kioto", icon: "fa-solid fa-train-subway" },
            {
                time: "08:50",
                type: "transit",
                title: "Shinkansen Nozomi a Nagoya",
                price: "Cubierto por pase o ~5.940 JPY",
                timeLabel: "35 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Nagoya+Station&travelmode=transit",
                tacticalGuideId: "mission_alpes_1",
                booking: { id: "bk_shinkansen", timeframe: "1 mes antes (App SmartEX)", required: true, link: "https://smart-ex.jp/en/index.php" }
            },
            { time: "09:30", type: "point", title: "Transbordo en Nagoya", icon: "fa-solid fa-person-walking-arrow-right" },
            {
                time: "10:00",
                type: "transit",
                title: "Tren Wide View Hida a Takayama",
                price: "Cubierto por pase o ~6.000 JPY",
                timeLabel: "2h 30m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nagoya+Station&destination=Takayama+Station&travelmode=transit",
                tacticalGuideId: "mission_alpes_2"
            },
            { time: "12:30", type: "point", title: "LLegada a Takayama / Almuerzo rápido", icon: "fa-solid fa-bowl-food" },
            {
                time: "14:00",
                type: "transit",
                title: "Bus Nohi hacia Okuhida (Shin-Hotaka)",
                price: "~2.200 JPY",
                timeLabel: "1h 30m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Nohi+Bus+Center&destination=Shin-Hotaka+Onsen&travelmode=transit",
                tacticalGuideId: "mission_alpes_3",
                booking: { id: "bk_nohi_okuhida", timeframe: "1 mes antes", required: true, link: "https://www.nouhibus.co.jp/english/" }
            },
            { time: "15:30", type: "point", title: "Check-in Kazeya Ryokan", icon: "fa-solid fa-hot-tub-person" }
        ],

        timeline: [
            { time: "08:50", title: "Tren a Takayama", desc: "Wide View Hida. Vistas espectaculares. (Base)" },
            { time: "15:30", title: "Check-in Ryokan", desc: "Té verde, yukata y onsen. (Base)" },
            { time: "19:00", title: "Cena Kaiseki", desc: "Banquete tradicional con Ternera de Hida. (Base)" }
        ],

        prices: {
            transport: "~14.000 JPY (Trenes y buses)",
            food: "Incluida en Ryokan",
            total: "~14.000 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de viaje escénico cruzando montañas y relax total en un Ryokan tradicional.",
            events: [
                {
                    id: "b1",
                    time: "15:30",
                    title: "Llegada al Ryokan",
                    description: "Kazeya Ryokan. Poneos el Yukata y disfrutad del té de bienvenida.",
                    image: "images/dia11-itinerario-base.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-hot-tub-person"></i> El Arte del Ryokan: Kazeya</h3>
                        <p>Alojarse en un Ryokan es una inmersión profunda en el concepto de <em>Omotenashi</em> (la hospitalidad japonesa llevada al extremo). El Kazeya Ryokan, con su estructura de madera y suelos de tatami, os invita a desconectar del mundo moderno. Al llegar, dejad vuestro calzado y preocupaciones en la entrada; aquí el tiempo fluye de otra manera.</p>
                        <p><em>El ritual comienza con un té verde de bienvenida mientras os invitan a elegir vuestro Yukata (kimono ligero de algodón). Este Ryokan es famoso por sus baños termales (onsen) privados y su decoración que mezcla la elegancia rústica de los Alpes con el refinamiento tradicional.</em></p>
                        <div style="background:rgba(255,140,0,0.05); border:1px solid #ff8c00; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#ff8c00;"><i class="fa-solid fa-circle-exclamation"></i> Protocolo Onsen:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">1. Lavaros a fondo en los tabueretes <strong>antes</strong> de entrar al agua.<br>2. El agua del onsen es para relajarse, no para lavar el cuerpo.<br>3. Disfrutad del silencio y la vista de la montaña.</p>
                        </div>
                    `,
                },
                {
                    time: "16:00",
                    title: "Tiempo de Onsen / Relax",
                    description: "Disfrutad de los baños termales antes de cenar.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "19:00",
                    title: "Cena Kaiseki",
                    description: "Festín de platos de temporada y Ternera de Hida.",
                    image: "images/dia11-itinerario-base-1.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Kaiseki: Alta Cocina Estacional</h3>
                        <p>La cena Kaiseki es la máxima expresión de la gastronomía japonesa. No es solo una comida, sino una ceremonia visual y gustativa donde cada plato se presenta como una obra de arte que refleja la estación actual.</p>
                        <p><em>En esta región de los Alpes, el plato estrella es la <strong>Ternera de Hida</strong>, considerada por muchos como superior incluso a la de Kobe por su intenso veteado y suavidad. Cocinaréis finas láminas de esta carne sobre una hoja de magnolia (estilo Hoba Miso), rodeados de vegetales de montaña y pescados de río fresquísimos.</em></p>
                    `,
                    video: "https://www.youtube.com/watch?v=5U_O8G63X4M"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Shinhotaka-no-yu",
                time: "16:30",
                description: "Baño mixto al aire libre junto al río. Experiencia salvaje (Baño público).",
                price: "Donación",
                image: "images/dia11-shinhotaka.jpg",
                video: "https://www.youtube.com/watch?v=mG0oR74fL1A",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Onsen Salvaje junto al río</h3>
                    <p>Un baño rústico al aire libre literalmente pegado al río. Es mixto y los bañadores suelen estar prohibidos (usar toalla grande).</p>
                `,
                tacticalOptions: [
                    {
                        title: "PASEO AL ONSEN PÚBLICO",
                        time: "16:30 - 18:00",
                        description: "Salida del hotel antes de cenar para explorar las aguas termales naturales del valle.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Kazeya+Ryokan&destination=Shinhotaka-no-yu",
                        tacticalGuideId: "mission_onsen_walk"
                    }
                ]
            },
            {
                id: "c2",
                title: "Teleférico Shinhotaka",
                time: "15:45",
                description: "Vistas alpinas desde las nubes (Si os da tiempo a llegar).",
                price: "2.900 JPY",
                image: "images/dia11-teleferico.jpg",
                video: "https://www.youtube.com/watch?v=c7vvq-x5T2g",
                fullDesc: `
                    <h3><i class="fa-solid fa-cable-car"></i> Teleférico de Dos Pisos</h3>
                    <p>Sube a más de 2.000 metros para una vista panorámica de los Alpes del Norte. Cierra a las 16:45, la logística debe ser perfecta.</p>
                `,
                tacticalOptions: [
                    {
                        title: "CARRERA A LAS NUBES",
                        time: "15:00 - 17:00",
                        description: "Requiere tomar el autobús más allá del ryokan sin hacer check-in previo.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Station&destination=Shinhotaka+Ropeway&travelmode=transit",
                        tacticalGuideId: "mission_ropeway"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_shinkansen_fuji",
                title: "Shinkansen: Vistas al Fuji",
                image: "images/fuji_sanctuary.png",
                description: "La experiencia de ver el Monte Fuji desde el tren bala a 300km/h.",
                time: "Durante el traslado",
                price: "Incluido en billete",
                video: "https://www.youtube.com/shorts/z-52C4vJ1mI",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Tokyo+Station&travelmode=transit",
                tacticalGuideId: "mission_shinkansen_fuji",
                fullDesc: `
                    <h3><i class="fa-solid fa-train"></i> El Rayo Escénico</h3>
                    <p>Un vídeo que captura el momento mágico en que el volcán aparece tras la ventana del Shinkansen.</p>
                `
            },
            {
                id: "add_hirayu_waterfall",
                title: "Cascada Hirayu",
                image: "images/add-hirayu-waterfall.jpg",
                description: "Impresionante caída de agua de 64 metros rodeada de naturaleza salvaje.",
                time: "16:00 – 17:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Hirayu+Waterfall",
                tacticalGuideId: "mission_hirayu_waterfall",
                video: "https://www.youtube.com/watch?v=w7AunW8YQ08",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Cascada Hirayu</h3>
                    <p>Una de las mejores cascadas de Japón. El entorno es muy fresco y el sonido del agua cayendo entre las rocas volcánicas es revitalizante.</p>
                `
            },
            {
                id: "add_kaiyukan",
                title: "Acuario Kaiyukan",
                image: "images/add-kaiyukan.jpg",
                description: "Uno de los acuarios más grandes del mundo con un tiburón ballena espectacular.",
                time: "10:00 – 12:30",
                price: "~2.400 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Osaka+Kaiyukan+Aquarium",
                tacticalGuideId: "mission_kaiyukan",
                video: "https://www.youtube.com/watch?v=R9KclW_jW5A",
                fullDesc: `
                    <h3><i class="fa-solid fa-fish"></i> Kaiyukan: El Océano en Osaka</h3>
                    <p>Ubicado en la bahía de Osaka, este acuario es famoso por su tanque central de 9 metros de profundidad que representa el Océano Pacífico, hogar de dos tiburones ballena. El recorrido es descendente, simulando una inmersión desde la superficie hasta el fondo marino.</p>
                `,
                booking: { id: "bk_kaiyukan", timeframe: "1-2 semanas antes", required: true, link: "https://www.kaiyukan.com/language/eng/" }
            },
            {
                id: "add_night_walk_hirayu",
                title: "Paseo Nocturno en Hirayu Onsen",
                image: "images/add-night-walk.jpg",
                description: "Caminata mágica por el pueblo termal viendo el vapor de las alcantarillas bajo las estrellas.",
                time: "20:30 – 21:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Hirayu+Onsen+Town",
                tacticalGuideId: "mission_night_walk_hirayu",
                video: "https://www.youtube.com/watch?v=Tq_YvT82Cis",
                fullDesc: `
                    <h3><i class="fa-solid fa-moon"></i> Paseo Nocturno</h3>
                    <p>Un plan de 'desconexión total' tras la cena Kaiseki. El silencio de la montaña y el vapor de las aguas termales crean un ambiente único.</p>
                `
            }
        ]
    },

    // --- DÍA 12: TAKAYAMA (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 12, exactDate: "2026-08-07", type: "stay",
        date: "Vie, 7 Agosto", title: "🏔️ Takayama: Japón Feudal",
        coords: [36.146, 137.252], zoom: 13,
        hotel: "Residence Hotel Takayama Station",
        hotelImage: "images/hotel-residence-takayama.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Residence+Hotel+Takayama+Station",
        image: "images/takayama.png",

        logistics: [
            { title: "Transporte", text: "Bus de vuelta desde Okuhida a Takayama (1h 30m)." },
            { title: "Pateo", text: "El casco antiguo de Takayama es completamente peatonal." }
        ],

        transportTimeline: [
            { time: "10:00", type: "point", title: "Relajo Final y Check-out Ryokan", icon: "fa-solid fa-mug-hot" },
            {
                time: "10:30",
                type: "transit",
                title: "Bus Nohi de regreso a Takayama",
                price: "~2.200 JPY",
                timeLabel: "1h 30m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shin-Hotaka+Onsen&destination=Takayama+Nohi+Bus+Center&travelmode=transit",
                tacticalGuideId: "mission_takayama_bus"
            },
            { time: "12:15", type: "point", title: "Llegada Takayama / Dejar equipajes", icon: "fa-solid fa-suitcase-rolling" },
            { time: "12:30", type: "point", title: "Almuerzo Carne Hida", icon: "fa-solid fa-drumstick-bite" },
            {
                time: "14:30",
                type: "transit",
                title: "Caminata al casco antiguo",
                price: "Gratis",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Station&destination=Sanmachi+Suji&travelmode=walking"
            },
            { time: "14:45", type: "point", title: "Exploración Sanmachi Suji", icon: "fa-solid fa-house-chimney" },
            { time: "18:00", type: "point", title: "Cena en Takayama y descanso", icon: "fa-solid fa-bed" }
        ],

        timeline: [
            { time: "12:15", title: "Llegada Takayama", desc: "Regreso desde el Ryokan. (Base)" },
            { time: "12:30", title: "Almuerzo Hida Beef", desc: "La mejor carne de Japón. (Base)" },
            { time: "14:30", title: "Sanmachi Suji", desc: "Casco antiguo conservado. (Base)" },
            { time: "16:00", title: "Tiempo Libre", desc: "Elegid complemento (Jinya, Museos). (Opcional)" }
        ],

        prices: {
            transport: "~2.200 JPY (Bus)",
            entrances: "Variable",
            food: "~5.000 JPY (Carne Hida de calidad)",
            total: "~7.200 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Descenso de la montaña para explorar las calles de madera oscura del casco antiguo.",
            events: [
                {
                    id: "b1",
                    time: "12:30",
                    title: "Almuerzo: Ternera de Hida",
                    description: "La joya gastronómica de la región (Yakiniku o Sushi de carne).",
                    image: "images/dia12-itinerario-base.jpg",
                    price: "~4.000-6.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-drumstick-bite"></i> El Manjar de los Alpes: Carne de Hida</h3>
                        <p>Considerada por los expertos como una de las carnes de más alta calidad del mundo, la ternera de Hida (Hida-gyu) compite directamente con la de Kobe. Lo que la hace especial es su marmoleo extremadamente fino que se funde a temperaturas muy bajas, dándole una textura de "mantequilla de carne".</p>
                        <p><em>No os perdáis la oportunidad de probarla en formato <strong>Hoba Miso</strong> (asada sobre una hoja de magnolia con pasta de miso local) o simplemente como nigiris en los puestos callejeros de Sanmachi Suji. Es un sabor que define la riqueza de esta región montañosa.</em></p>
                    `,
                },
                {
                    id: "b2",
                    time: "14:30",
                    title: "Barrio Sanmachi Suji",
                    description: "Corazón feudal de la ciudad con casas de madera negra.",
                    image: "images/takayama.png",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=iPTK9vDqPPA",
                    link: "https://www.google.com/maps/dir/Takayama+Station/Sanmachi+Suji/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-house-chimney"></i> Sanmachi Suji: El Corazón Edo</h3>
                        <p>Este distrito histórico es un viaje directo al periodo Edo (1603-1868). Sus tres calles principales están flanqueadas por casas de mercaderes excelentemente conservadas, con sus características fachadas de madera oscura y canales de agua cristalina que todavía corren por los lados de las calles.</p>
                        <p><em>Buscad las <strong>Sugidama</strong> (grandes bolas de agujas de cedro) que cuelgan sobre las puertas de las bodegas de sake; si la bola es verde, el sake de la nueva temporada está listo. Es el lugar perfecto para perderse entre tiendas de artesanía, museos locales y destilerías centenarias.</em></p>
                        <div style="background:rgba(0,191,255,0.05); border:1px solid #00bfff; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#00bfff;"><i class="fa-solid fa-wine-bottle"></i> Misión Sake:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">Muchas bodegas ofrecen catas por unos 200-500 JPY. Elegid una, recibid vuestra tacita <em>choko</em> de cerámica y degustad la pureza del agua de los Alpes hecha licor.</p>
                        </div>
                    `,
                },
                {
                    time: "16:00",
                    title: "Tarde Libre / Opcionales",
                    description: "Visitas a museos, templos o paseos relajados.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Takayama Jinya",
                time: "15:30",
                description: "Antigua oficina del gobierno del Shogun. Salas de tatami e historia.",
                price: "440 JPY",
                image: "images/dia12-jinya.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=jDMq_m1fpzI",
                fullDesc: `
                    <h3><i class="fa-solid fa-landmark"></i> Takayama Jinya</h3>
                    <p>Única oficina del gobierno del periodo Edo que queda en pie. Incluye el pabellón de justicia (con herramientas de interrogatorio) y enormes almacenes de arroz.</p>
                `,
                tacticalOptions: [
                    {
                        title: "VISITA AL JINYA",
                        time: "15:30 - 16:30",
                        description: "A 10 mins del centro histórico.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Sanmachi+Suji&destination=Takayama+Jinya",
                        tacticalGuideId: "mission_jinya"
                    }
                ]
            },
            {
                id: "c2",
                title: "Yatai Kaikan",
                time: "16:00",
                description: "Museo de las carrozas del festival de Takayama (Patrimonio UNESCO).",
                price: "1.000 JPY",
                image: "images/dia12-yatai-kaikan.jpg",
                video: "https://www.youtube.com/watch?v=4U0_0R4R_A0",
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Exposición de Carrozas</h3>
                    <p>Muestra las espectaculares y gigantescas carrozas de madera adornadas que desfilan en los festivales de primavera y otoño.</p>
                `
            },
            {
                id: "c3",
                title: "Higashiyama Walk",
                time: "16:30",
                description: "Paseo por los templos de la colina. Silencio y musgo.",
                price: "Gratis",
                image: "images/dia12-higashiyama.jpg",
                video: "https://www.youtube.com/watch?v=x7Eof_uWkic",
                fullDesc: `
                    <h3><i class="fa-solid fa-tree"></i> Ruta de Templos</h3>
                    <p>Un paseo tranquilo alejado de las rutas comerciales comerciales, siguiendo en parte el diseño del Kioto original.</p>
                `
            }
        ],
        additionalExcursions: [
            {
                id: "add_hida_no_sato",
                title: "Hida no Sato",
                image: "images/add-hida-no-sato.jpg",
                description: "Museo al aire libre con más de 30 casas tradicionales de techos de paja.",
                time: "15:30 – 17:30",
                price: "~700 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Hida+no+Sato",
                tacticalGuideId: "mission_hida_no_sato",
                video: "https://www.youtube.com/watch?v=M9-y_fG25m4",
                fullDesc: `
                    <h3><i class="fa-solid fa-house-chimney"></i> Aldea Folclórica de Hida</h3>
                    <p>Gemelo de Shirakawa-go pero en Takayama. Podréis entrar en casas reales y ver demostraciones de artesanía.</p>
                `
            },
            {
                id: "add_matsuri_no_mori",
                title: "Matsuri no Mori",
                image: "images/add-matsuri-no-mori.jpg",
                description: "Museo subterráneo con carrozas tecnológicas y tambores taiko gigantes.",
                time: "12:00 – 13:30",
                price: "~1.000 JPY",
                tacticalGuideId: "mission_matsuri_no_mori",
                video: "https://www.youtube.com/watch?v=0id97z_gM0w",
                link: "https://www.google.com/maps/search/?api=1&query=Matsuri+no+Mori",
                tacticalGuideId: "mission_matsuri_no_mori",
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Museo del Festival</h3>
                    <p>Alberga las carrozas más modernas con autómatas mecánicos que realizan demostraciones.</p>
                `
            },
            {
                id: "add_sakurayama",
                title: "Santuario Sakurayama Hachimangu",
                image: "images/add-sakurayama.jpg",
                description: "Protector del norte de la ciudad con una atmósfera señorial y cedros centenarios.",
                time: "11:00 – 12:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Sakurayama+Hachimangu+Shrine",
                tacticalGuideId: "mission_sakurayama",
                video: "https://www.youtube.com/watch?v=mD-mG8zM8Gk",
                fullDesc: `
                    <h3><i class="fa-solid fa-peace"></i> Sakurayama Hachimangu</h3>
                    <p>Un santuario que ofrece paz absoluta. Es el lugar donde se celebra el festival de otoño de Takayama.</p>
                `
            }
        ]
    },

    // --- DÍA 13: KAWAGUCHIKO (Llegada) ---
    {
        day: 13, exactDate: "2026-08-08", type: "travel",
        date: "Sáb, 8 Agosto", title: "🗻 Kawaguchiko: El Monte Fuji",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia13-portada.jpg",

        logistics: [
            { title: "Bus", text: "Bus Expreso Nohi desde Takayama. Reservad exactamente 1 mes antes para el grupo." },
            { title: "Coche", text: "Recogida de Budget Rent a Car nada más llegar a la estación." }
        ],

        transportTimeline: [
            { time: "08:15", type: "point", title: "Estación de Buses Takayama Nohi", icon: "fa-solid fa-bus-simple" },
            {
                time: "08:30",
                type: "transit",
                title: "Bus Directo Mt. Fuji (Express)",
                booking: { id: "bk_fuji_bus", timeframe: "Exactamente 1 mes antes", required: true, link: "https://www.nouhibus.co.jp/english/" },
                price: "~5.000 JPY (Reserva previa obligatoria)",
                timeLabel: "4h 45m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Nohi+Bus+Center&destination=Kawaguchiko+Station&travelmode=transit",
                tacticalGuideId: "mission_fuji_bus"
            },
            { time: "13:15", type: "point", title: "Llegada Kawaguchiko Station", icon: "fa-solid fa-flag-checkered" },
            { time: "13:30", type: "point", title: "Recogida Coche en Budget", icon: "fa-solid fa-car" },
            {
                time: "14:15",
                type: "transit",
                title: "Desplazamiento en coche de alquiler",
                price: "Gasolina compartida",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi"
            },
            { time: "14:30", type: "point", title: "Check-in Hotel Toyoko Inn", icon: "fa-solid fa-bed" },
            { time: "16:00", type: "point", title: "Exploración al Atardecer", icon: "fa-solid fa-mountain-sun" }
        ],

        timeline: [
            { time: "08:30", title: "Bus a Kawaguchiko", desc: "Trayecto de casi 5h cruzando sierras. (Base)" },
            { time: "13:30", title: "Recogida Coche", desc: "Libertad total para explorar la zona alpina. (Base)" },
            { time: "16:00", title: "Opciones Atardecer", desc: "Pagoda o Vistas del Lago. (Opcional)" }
        ],

        prices: {
            transport: "Reserva de Bus (~5.000 JPY) + Alquiler coche compartido (~2.000 JPY/pax/día)",
            total: "~7.000 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Gran traslado a la región de los Cinco Lagos y toma de control logístico con el coche.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Viaje a la falda del Volcán",
                    description: "Jornada de descanso visual en el Highway Bus a través de las montañas centrales de Japón.",
                    price: "~5.000 JPY",
                    image: "images/fuji_lago.png",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bus"></i> Expreso Takayama ➔ Kawaguchiko</h3>
                        <p>Aprovechad para dormir. A medio camino el paisaje cambia radicalmente revelando poco a poco la inmensa silueta cónica del Fuji.</p>
                    `
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "Recogida de Coche (Budget)",
                    description: "Clave logística: El transporte público alrededor del Fuji es muy deficiente. El coche da alas.",
                    image: "images/dia13-portada.jpg",
                    price: "Coche Alquiler",
                    fullDesc: `
                        <h3><i class="fa-solid fa-car-side"></i> Operación Conducción Nipona</h3>
                        <p>Iván o Felipe: Os tocará conducir por la izquierda. El GPS vendrá configurado. La velocidad máxima suele ser 60km/h en estas vías montañosas. ¡Precaución máxima!</p>
                    `,
                    booking: { id: "bk_coches", timeframe: "2-3 meses antes", required: true, link: "https://www.budgetrentacar.co.jp/en/" }
                },
                {
                    time: "15:00",
                    title: "Acomodación y Organización",
                    description: "Reparto de habitaciones y planificación de la tarde según la nubosidad del Fuji.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Pagoda Chureito",
                time: "16:30",
                description: "La foto más famosa de Japón: Pagoda roja, cerezos/pinos y el Fuji detrás.",
                price: "Gratis (Parking ~1.000 JPY)",
                image: "images/dia13-chureito.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=o_wU1jOudYg",
                fullDesc: `
                        <h3><i class="fa-solid fa-vihara"></i> La Pagoda de la Paz: Chureito</h3>
                        <p>Ubicada en el Parque Arakurayama Sengen, esta pagoda de cinco pisos es un monumento conmemorativo de la paz construido en 1963. Aunque es relativamente moderna, se ha convertido en el símbolo visual de Japón por excelencia.</p>
                        <p><em>Para llegar a la plataforma de observación, deberéis subir exactamente 398 escalones (conocidos como la Escalera al Éxito). Al llegar arriba, entenderéis por qué: la alineación perfecta de la pagoda bermellón con el Monte Fuji al fondo crea una composición que parece pintada. Es un lugar de meditación visual sobre el paso del tiempo y la imponente presencia del volcán.</em></p>
                    `,
                tacticalOptions: [
                    {
                        title: "SUBIDA AL ATARDECER",
                        time: "16:30 - 18:30",
                        description: "Conducción desde el hotel unos 15 min. La luz de la tarde ilumina frontalmente la Pagoda.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Toyoko+Inn+Fuji+Kawaguchiko&destination=Chureito+Pagoda",
                        tacticalGuideId: "mission_chureito"
                    }
                ]
            },
            {
                id: "c2",
                title: "Lago Saiko (Pueblo Iyashi)",
                time: "16:00",
                description: "Escape del turismo masivo. Lago misterioso y pueblo de tejados de paja.",
                price: "Variable",
                image: "images/dia13-saiko.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> La Cara Oculta del Fuji</h3>
                    <p>Un paseo en coche rodeando el vecino lago Saiko buscando tranquilidad rural.</p>
                `,
                video: "https://www.youtube.com/watch?v=vVj4u_3n08o"
            },
            {
                id: "c3",
                title: "Oshino Hakkai",
                time: "16:30",
                description: "Pueblo mágico alimentado por el deshielo del Mt. Fuji (Ocho estanques transparentes).",
                price: "Gratis",
                image: "images/dia13-oshino.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-droplet"></i> Los Estanques de Cristal</h3>
                    <p>El agua de estos estanques tarda décadas en filtrarse desde el cráter a través de la piedra pómez porosa. Podrás beber agua sagrada súper fría.</p>
                `,
                video: "https://www.youtube.com/watch?v=D-w-pA8YtG8"
            }
        ],
        additionalExcursions: [
            {
                id: "add_music_forest",
                title: "Music Forest Museum",
                image: "images/add-music-forest.jpg",
                description: "Pequeño pueblo europeo dedicado a instrumentos musicales mecánicos.",
                time: "15:00 – 17:00",
                price: "~1.800 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Music+Forest+Museum",
                tacticalGuideId: "mission_music_forest",
                video: "https://www.youtube.com/watch?v=vN3p7qBAnIs",
                fullDesc: `
                    <h3><i class="fa-solid fa-music"></i> Bosque de la Música</h3>
                    <p>Jardines con estética suiza y una de las mejores vistas encuadradas del Monte Fuji.</p>
                `
            }
        ]
    },

    // --- DÍA 14: EL MONTE FUJI (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 14, type: "stay",
        date: "Dom, 9 Agosto", title: "⛰️ El Gigante Sagrado",
        coords: [35.360, 138.727], zoom: 12,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia15-portada.jpg",

        logistics: [
            { title: "Vertical", text: "Si subís a la 5ª estación, llevad cortavientos (hace frío)." },
            { title: "Transporte", text: "Shuttle bus obligatorio desde el parking del volcán en agosto." },
            { title: "Coche", text: "El Ryugatake requiere conducir unos 40 minutos bordeando el lago Motosu." }
        ],

        transportTimeline: [
            { time: "07:30", type: "point", title: "Salida del Hotel (Coche)", icon: "fa-solid fa-car" },
            {
                time: "07:45",
                type: "transit",
                title: "Conducción hacia destino alpino",
                price: "Gasolina",
                timeLabel: "15m - 40m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Toyoko+Inn+Kawaguchiko&destination=Mt+Fuji+Subaru+Line",
                tacticalGuideId: "mission_fuji_drive"
            },
            { time: "08:30", type: "point", title: "Inicio Excursión Elegida (5ª Estación o Ryugatake)", icon: "fa-solid fa-person-hiking" },
            { time: "13:30", type: "point", title: "Almuerzo libre por la zona de los lagos", icon: "fa-solid fa-burger" },
            { time: "15:30", type: "point", title: "Tarde de Baños Termales o relax frontal", icon: "fa-solid fa-hot-tub-person" }
        ],

        timeline: [
            { time: "08:00", title: "Excursión al Fuji", desc: "Acercarse al cráter o trekking RYUGATAKE. (Base)" },
            { time: "13:30", title: "Almuerzo", desc: "Comida reconfortante tras la montaña. (Base)" },
            { time: "16:00", title: "Opciones Tarde", desc: "Onsen Fujiyama u otras vistas. (Opcional)" }
        ],

        prices: {
            transport: "Gasolina + Peaje/Shuttle (~2.500 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día físico. Tocar el volcán de cerca o caminar para conseguir la vista perfecta.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Aproximación al Fuji",
                    description: "Elegid entre subir a los 2300m o hacer el trekking del billete de 1000 yenes.",
                    image: "images/dia14-itinerario-base.jpg",
                    price: "Variable",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Shinkō: La Devoción al Fuji</h3>
                        <p>El Fuji no es solo una montaña; es un ser sagrado. Durante siglos, peregrinos vestidos de blanco han ascendido por sus laderas como un acto de purificación. Hoy tenéis dos formas de conectar con su energía: subiendo por la Subaru Line (comodidad táctica) o alejándoos por el Ryugatake para contemplar su magnitud desde la distancia, tal como hacían los antiguos artistas de Grabados Ukiyo-e.</p>
                        <div style="background:rgba(255,255,255,0.1); border:1px solid #ffffff; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#ffffff;"><i class="fa-solid fa-triangle-exclamation"></i> Logística de Agosto:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">Debido a la alta afluencia, los vehículos privados tienen prohibido el paso a la Subaru Line. Deberéis aparcar en el <strong>Parking Fujihoku-roku</strong> y tomar el bus lanzadera (shuttle) que sale cada 30 min aprox.</p>
                        </div>
                    `
                },
                {
                    time: "13:00",
                    title: "Tiempo Libre / Almuerzo",
                    description: "Pausa en algún pueblo u orilla del lago para reponer calorías.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Trekking Ryugatake",
                time: "08:00",
                description: "Senderismo (2h de subida) con vistas frontales brutales. La vista del billete de 1000 yenes.",
                price: "Gratis",
                image: "images/dia15-ryugatake.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=azaJ9W5kXfU",
                fullDesc: `
                        <h3><i class="fa-solid fa-person-walking-luggage"></i> El Mirador de los 1000 Yenes</h3>
                        <p>El trekking al Monte Ryugatake ("El Dragón que surge") es la ruta preferida por los entusiastas de la fotografía. Desde su cima, se obtiene la perspectiva exacta del Fuji reflejado en el lago Motosu que aparece en el billete de 1000 yenes.</p>
                        <p><em>Es una caminata empinada por un sendero de tierra y raíces, pero la recompensa es una vista panorámica sin las multitudes que encontraréis en la 5ª estación. Es el lugar ideal para un picnic con vistas al coloso.</em></p>
                    `,
                tacticalOptions: [
                    {
                        title: "RUTA AL DRAGÓN",
                        time: "08:00 - 13:00",
                        description: "Conducción al Camping Motosu (40 min). Aparcar y subir unas 2 horas a buen ritmo.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Toyoko+Inn+Kawaguchiko&destination=Lake+Motosuko+Campground",
                        tacticalGuideId: "mission_ryugatake"
                    }
                ]
            },
            {
                id: "c2",
                title: "5ª Estación Fuji",
                time: "09:00",
                description: "Llegar a los 2300m en bus. Tiendas, santuario milenario y mirar hacia la cumbre.",
                price: "2.500 JPY (Shuttle Bus)",
                image: "images/dia14-5-estaci-n-fuji.jpg",
                video: "https://www.youtube.com/watch?v=4rEzBJarLoc",
                fullDesc: `
                        <h3><i class="fa-solid fa-cloud"></i> El Umbral del Cielo: 5ª Estación</h3>
                        <p>Situada a 2.305 metros sobre el nivel del mar, la 5ª estación de la línea Yoshida es el punto más alto accesible por transporte motorizado. Es el punto de partida real para los montañeros que intentan conquistar la cima.</p>
                        <p><em>Aquí se encuentra el <strong>Santuario Komitake</strong>, un lugar de oración para los escaladores con más de mil años de historia. Incluso si no vais a subir a la cumbre, la sensación de estar por encima de las nubes y la vista de la cima tan cercana es sobrecogedora.</em></p>
                    `,
            }
        ],
        additionalExcursions: [
            {
                id: "add_fuji_caves",
                title: "Bosque Aokigahara y Cuevas",
                image: "images/add-fuji-caves.jpg",
                description: "Exploración del místico bosque del mar de árboles y sus formaciones volcánicas.",
                time: "09:00 – 11:30",
                price: "~350 JPY",
                video: "https://www.youtube.com/watch?v=VJEA0kMdaV0",
                link: "https://www.google.com/maps/search/?api=1&query=Aokigahara+Forest",
                tacticalGuideId: "mission_fuji_caves",
                fullDesc: `
                    <h3><i class="fa-solid fa-snowflake"></i> Cuevas del Fuji</h3>
                    <p>Experiencia de aventura suave en las profundidades de la lava del Fuji. Un alivio térmico increíble.</p>
                `
            }
        ]
    },

    // --- DÍA 15: PUEBLOS Y SANTUARIOS (BASE + COMPLEMENTOS) ---
    {
        day: 15, type: "stay",
        date: "Lun, 10 Agosto", title: "🏛️ Alrededores del Fuji",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/fuji_sanctuary.png",

        logistics: [
            { title: "Coche", text: "Último día completo con el vehículo alquilado." },
            { title: "Tráfico", text: "Ruta occidental (Shiraito) implica unos 45-60 min de conducción tranquila." }
        ],

        transportTimeline: [
            { time: "08:45", type: "point", title: "Salida del Hotel (Coche)", icon: "fa-solid fa-key" },
            {
                time: "09:00",
                type: "transit",
                title: "Conducción a Santuario Sengen",
                price: "Gasolina",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Toyoko+Inn+Kawaguchiko&destination=Kitaguchi+Hongu+Fuji+Sengen+Jinja",
                tacticalGuideId: "mission_fuji_sengen"
            },
            { time: "09:15", type: "point", title: "Santuario y Bosque de Cedros", icon: "fa-solid fa-torii-gate" },
            {
                time: "10:30",
                type: "transit",
                title: "Conducción a Kawaguchiko Centro",
                price: "Gasolina",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kitaguchi+Hongu+Fuji+Sengen+Jinja&destination=Kawaguchiko+Station"
            },
            { time: "11:30", type: "point", title: "Almuerzo Noodles (Hoto Fudo)", icon: "fa-solid fa-bowl-food" },
            {
                time: "13:30",
                type: "transit",
                title: "Conducción al oeste (Ej. Cascadas)",
                price: "Peaje local opcional",
                timeLabel: "45 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko&destination=Shiraito+Falls",
                tacticalGuideId: "mission_shiraito"
            },
            { time: "14:30", type: "point", title: "Tarde de Naturaleza Libre", icon: "fa-solid fa-tree" }
        ],

        timeline: [
            { time: "09:15", title: "Santuario Sengen", desc: "Misticismo entre cedros milenarios. (Base)" },
            { time: "11:30", title: "Hoto Noodles", desc: "Almuerzo tradicional espeso de la zona. (Base)" },
            { time: "14:00", title: "Tarde en coche", desc: "Elegir entre cascadas o pueblos museo. (Opcional)" }
        ],

        prices: {
            transport: "Gasolina",
            food: "~1.500 JPY",
            total: "~1.500 JPY +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de carretera para explorar la cultura y misticismo alrededor del volcán.",
            events: [
                {
                    id: "b1",
                    time: "09:15",
                    title: "Kitaguchi Hongu Sengen Jinja",
                    description: "Santuario histórico. Inicio original de la peregrinación ritual al Fuji.",
                    image: "images/dia14-sengen.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-torii-gate"></i> Santuario Kitaguchi Hongu Sengen Jinja</h3>
                        <p>Este majestuoso santuario, rodeado de cedros centenarios, ha sido el punto de partida espiritual para la ascensión al Monte Fuji durante siglos. Tras cruzar su gigantesco Torii rojo (uno de los más grandes de madera en Japón), caminaréis por una avenida de faroles de piedra cubiertos de musgo que os transportará a otra época.</p>
                        <p><em>En el recinto principal, buscad el enorme cedro sagrado atado con una cuerda shimenawa; se dice que tiene más de mil años. Es el lugar donde los peregrinos pedían protección al espíritu de la montaña antes de adentrarse en sus laderas.</em></p>
                    `
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Hoto Noodles",
                    description: "Plato de supervivencia invernal: fideos tremendos en sopa de miso y calabaza.",
                    image: "images/dia15-itinerario-base.jpg",
                    price: "~1.500 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fire-burner"></i> Hoto Fudo: La Gastronomía Samurái</h3>
                        <p>El Hoto es un plato reconfortante único de la prefectura de Yamanashi. Consiste en fideos de trigo planos y anchos, similares al udon pero con una textura más rústica, cocinados a fuego lento en un caldo de miso con calabaza (kabocha) y verduras de montaña.</p>
                        <p><em>Cuenta la leyenda que el daimyo Takeda Shingen comía este contundente guiso con sus tropas para ganar fuerza antes de las batallas. Hoy es un ritual imperdible en la zona; se sirve en pesadas ollas de hierro que mantienen el calor durante toda la comida. El local frente a la estación de Kawaguchiko es famoso por su arquitectura blanca con forma de nube.</em></p>
                    `
                },
                {
                    time: "13:30",
                    title: "Tarde de Carretera / Lagos",
                    description: "Tiempo libre usando el coche para buscar tesoros fuera del radio de los buses turísticos.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Cascada Shiraito",
                time: "14:30",
                description: "Patrimonio UNESCO. Cientos de finos hilos de agua cayendo en herradura (1h en coche).",
                price: "300 JPY",
                image: "images/dia14-shiraito.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=K-lEnA7-QpY",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Cascadas de Hilo Blanco</h3>
                    <p>Un muro curvo de 150 metros de ancho por donde se vierten las aguas del deshielo del monte Fuji creando innumerables cascadas finas como hilos de seda. Temperatura fresca incluso en verano.</p>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA AL SUROESTE",
                        time: "13:30 - 16:30",
                        description: "Bonito trayecto en coche por autopista escénica bordeando la base del Fuji por el oeste.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Shiraito+Falls",
                        tacticalGuideId: "mission_shiraito"
                    }
                ]
            },
            {
                id: "c2",
                title: "Iyashi no Sato",
                time: "10:30",
                description: "Pueblo museo en el lago Saiko con casas de tejados de paja. Alquiler de armaduras.",
                price: "500 JPY",
                image: "images/dia15-iyashi.jpg",
                video: "https://www.youtube.com/watch?v=e_B64Y07SV0",
                fullDesc: `
                    <h3><i class="fa-solid fa-house"></i> Alda Museo Saiko Iyashi</h3>
                    <p>Antiguo poblado agrícola reconstruido tras un tifón de los 60. Preciosas fotos de paja contra el volcán y posibilidad ridícula (¡y obligatoria!) de probarse armaduras de papel maché samurai.</p>
                `
            },
            {
                id: "c3",
                title: "Honcho Street",
                time: "16:00",
                description: "Calle mítica (Fujiyoshida) con viejos negocios y el Fuji gigante de fondo.",
                price: "Gratis",
                image: "images/dia15-honcho-street.jpg",
                video: "https://www.youtube.com/watch?v=2rrUQEVWKVE",
                fullDesc: `
                    <h3><i class="fa-solid fa-camera"></i> La Calle de Instagram</h3>
                    <p>Honcho Street tiene esa vibra noventera retro. Ojo con el tráfico, la policía local está cansada de los turistas parando en medio de la calle principal para hacer fotos. Disparad rápido desde las aceras laterales.</p>
                `
            }
        ],
        additionalExcursions: [
            {
                id: "add_fujinomiya_shrine",
                title: "Santuario Fujisan Hongu Sengen Taisha",
                image: "images/add-fujinomiya.jpg",
                description: "Santuario principal de los 1.300 Sengen de Japón con agua de deshielo.",
                time: "15:30 – 17:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Fujisan+Hongu+Sengen+Taisha",
                tacticalGuideId: "mission_fujinomiya_shrine",
                video: "https://www.youtube.com/watch?v=rBJpHPcVj0k",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Santuario de Fujinomiya</h3>
                    <p>Posee el estanque Wakutama-ike de agua cristalina que brota directamente de la roca volcánica.</p>
                `
            }
        ]
    },

    // --- DÍA 16: ÚLTIMO DÍA FUJI Y TOKIO (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 16, type: "travel",
        date: "Mar, 11 Agosto", title: "🏙️ Regreso a la Capital",
        coords: [35.702, 139.774], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/tokio_skyline.png",

        logistics: [
            { title: "Coche", text: "Llenad depósito de gasolina y devolved en Budget Kawaguchiko Station (10:30 max). Guardad ticket." },
            { title: "Transporte", text: "Tren Expreso Fuji Excursion directo a Shinjuku (imprescindible reservar). Alternativa: Highway Bus." },
            { title: "Equipaje", text: "Maletas grandes enviadas desde Kioto u Osaka os estarán esperando en el lobby o habitación del hotel." }
        ],

        transportTimeline: [
            { time: "09:30", type: "point", title: "Pagar Gasolina / Devolución Coche", icon: "fa-solid fa-gas-pump" },
            {
                time: "10:55",
                type: "transit",
                title: "Tren Expréss 'Fuji Excursion' a Tokio",
                price: "Cubierto por JR Pass + Suplemento (~1.740 JPY)",
                timeLabel: "1h 55m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Shinjuku+Station&travelmode=transit",
                tacticalGuideId: "mission_fuji_excursion"
            },
            { time: "12:55", type: "point", title: "Llegada al caos de Shinjuku (Tokio)", icon: "fa-solid fa-city" },
            {
                time: "13:30",
                type: "transit",
                title: "Taxis a Iidabashi",
                price: "~2.000 JPY por taxi (a dividir)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Hotel+Metropolitan+Edmont+Tokyo"
            },
            { time: "14:00", type: "point", title: "Check-in Edmont Tokyo / Descanso", icon: "fa-solid fa-bed" },
            {
                time: "17:00",
                type: "transit",
                title: "Paseo al Barrio Kagurazaka",
                price: "Gratis",
                timeLabel: "10 min a pie",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Kagurazaka&travelmode=walking"
            },
            { time: "17:15", type: "point", title: "Sunset en Santuario Akagi", icon: "fa-solid fa-torii-gate" }
        ],

        timeline: [
            { time: "10:30", title: "Devolución Coche", desc: "Llenad depósito. Recepción en Budget. (Base)" },
            { time: "10:55", title: "Traslado a Tokio", desc: "Tren Directo Fuji Excursion a Shinjuku. (Base)" },
            { time: "13:30", title: "Llegada Shinjuku", desc: "Cruce de la estación más concurrida del mundo hacia Taxis. (Base)" },
            { time: "15:00", title: "Check-in Edmont", desc: "Recuperad maletas grandes y descanso brutal. (Base)" },
            { time: "17:00", title: "Kagurazaka", desc: "Paseo por el barrio cercano al hotel. Santuario Akagi. (Base)" }
        ],

        prices: {
            transport: "Suplemento Tren (~1.740 JPY) + Taxis Shinjuku (~2.000 JPY)",
            total: "~3.800 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Regreso desde el aire puro de las montañas a la jungla de neón y cemento de Tokio.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Devolución Vehículo y Gasolinera",
                    description: "En Kawaguchiko Station. Último trámite antes de subir al tren.",
                    image: "images/dia16-coche.jpg",
                    price: "Llenar depósito",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gas-pump"></i> Operación Repostaje</h3>
                        <p>Llenad el depósito en la gasolinera (ENEOS u otra) más cercana a la oficina de Budget. ¡Misión cumplida en la carretera montañosa! <strong>Atención:</strong> Las agencias piden revisar el tapón llenado y a veces ver el ticket final de compra de gasolina.</p>
                    `
                },
                {
                    id: "b2",
                    time: "10:55",
                    title: "Tren a Shinjuku (Tokio)",
                    description: "Tren Expreso Especial que no requiere transbordos. Fin del descanso.",
                    image: "images/tokio_skyline.png",
                    price: "JR Pass + Supl",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Rumbo a la Capital del Mundo Orientral</h3>
                        <p>Traslado directo a la estación de Shinjuku. Entrar en Tokio por Shinjuku es un golpe frontal: neones incesantes, multitudes cruzando en todas direcciones, publicidad auditiva. Bienvenidos a Cyberpunk.</p>
                    `
                },
                {
                    time: "14:00",
                    title: "Check-in y Reencuentro con Equipaje",
                    description: "Llegada al Hotel Metropolitan Edmont en el barrio de Iidabashi.",
                    type: "gap"
                },
                {
                    id: "b3",
                    time: "17:00",
                    title: "El Barrio Geisha (Kagurazaka)",
                    description: "Paseo por el barrio colindante de vuestro hotel para aclimataros a Tokio.",
                    image: "images/dia16-kagurazaka.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bridge"></i> Kagurazaka: La Pequeña Francia de Kioto</h3>
                        <p>Kagurazaka es uno de los pocos lugares en Tokio que todavía emana la atmósfera del periodo Edo. Antiguamente fue un prestigioso distrito de Geishas (Hanamachi) fuera de los límites de la ciudad vieja. Sus callejones empedrados y sinuosos, como el famoso "Callejón Kakurenbo", esconden restaurantes de lujo y casas de té tradicionales tras discretas puertas de madera.</p>
                        <p><em>Hoy es conocido como el barrio francés de Tokio por la alta concentración de residentes de esa nacionalidad y excelentes panaderías y bistrós. No os perdáis el <strong>Santuario Akagi</strong>, reconstruido recientemente por el afamado arquitecto Kengo Kuma, fusionando de forma brillante la madera tradicional con el cristal moderno.</em></p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Vistas Tocho (Ayuntamiento Tokio)",
                time: "18:00",
                description: "Edificio del Gobierno Metropolitano en Shinjuku. Vistas gratis 360º desde la planta 45.",
                price: "Gratis",
                image: "images/dia18-tocho.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-building"></i> Ascensor a las Estrellas</h3>
                    <p>Subida hiperveloz gratuita al mirador (observatorio Sur o Norte). Al ser gratis suele haber una cola manejable de 20-30 mins de subida. Vistas que dominan hasta el monte Fuji si el cielo está despejado. Hay un piano público decorado por Yayoi Kusama arriba.</p>
                `,
                tacticalOptions: [
                    {
                        title: "MIRADOR EN SHINJUKU",
                        time: "18:00 - 19:30",
                        description: "Tomar la línea JR Chuo o línea de metro Tozai desde Iidabashi a Shinjuku.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Iidabashi+Station&destination=Tokyo+Metropolitan+Government+Building+Observation+Decks&travelmode=transit",
                        tacticalGuideId: "mission_tocho"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_samurai_restaurant",
                title: "Samurai Restaurant Show",
                image: "images/dia16-kagurazaka.jpg",
                description: "El nuevo espectáculo heredero del Robot Restaurant en Kabukicho.",
                time: "20:00 – 21:30",
                price: "~9.000 JPY",
                video: "https://www.youtube.com/watch?v=oR7AAgVv0_g",
                link: "https://www.google.com/maps/search/?api=1&query=Samurai+Restaurant+Time+Shinjuku",
                tacticalGuideId: "mission_samurai_show",
                fullDesc: `
                    <h3><i class="fa-solid fa-drum"></i> Locura en Kabukicho</h3>
                    <p>Un espectáculo de luces, tambores Taiko y coreografías samurái modernas en el corazón de Shinjuku.</p>
                `
            },
            {
                id: "add_koishikawa",
                title: "Jardín Koishikawa Korakuen",
                image: "images/add-koishikawa.jpg",
                description: "Uno de los jardines japoneses más antiguos y hermosos de Tokio, junto al hotel.",
                time: "16:00 – 17:30",
                price: "~300 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Koishikawa+Korakuen+Garden",
                tacticalGuideId: "mission_koishikawa",
                video: "https://www.youtube.com/watch?v=ZiE9L77S_pk",
                fullDesc: `
                    <h3><i class="fa-solid fa-tree"></i> Jardín Koishikawa Korakuen</h3>
                    <p>Construido por el clan Tokugawa. Utiliza elementos chinos y japoneses. Un oasis de paz al lado de vuestro hotel para vuestro primer contacto con Tokio.</p>
                `
            },
            {
                id: "add_shinjuku_gyoen",
                title: "Shinjuku Gyoen",
                image: "images/add-shinjuku-gyoen.jpg",
                description: "Parque inmenso que combina jardines japoneses, franceses e ingleses.",
                time: "15:30 – 17:30",
                price: "~500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Gyoen+National+Garden",
                tacticalGuideId: "mission_shinjuku_gyoen",
                video: "https://www.youtube.com/watch?v=dvIxjRdvbeo",
                fullDesc: `
                    <h3><i class="fa-solid fa-leaf"></i> Shinjuku Gyoen</h3>
                    <p>Un pulmón de paz en medio de los rascacielos. Ideal para caminar en grupo sin agobios.</p>
                `
            }
        ]
    },

    // --- DÍA 17: ASAKUSA, SKYTREE Y AKIHABARA ---
    {
        day: 17, exactDate: "2026-08-12", type: "stay",
        date: "Mié, 12 Agosto", title: "🗼 Asakusa, Skytree y Akihabara",
        coords: [35.710, 139.810], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia17-asakusa.jpg",

        logistics: [
            { title: "Transporte", text: "Tarjeta Suica/Pasmo en Apple Wallet para el metro. Línea Tozai desde Iidabashi." },
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Madrugad para el Templo Senso-ji. Akihabara se llena por la tarde." },
            { title: "Reservas", text: "Si subís al Skytree, comprad el ticket online días antes para evitar colas de 1 hora." }
        ],

        transportTimeline: [
            { time: "08:45", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:00",
                type: "transit",
                title: "Metro Tozai / Ginza a Asakusa",
                price: "Suica (~250 JPY)",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Asakusa+Station&travelmode=transit",
                tacticalGuideId: "mission_tokyo_metro"
            },
            { time: "09:30", type: "point", title: "Puerta Kaminarimon (Asakusa)", icon: "fa-solid fa-torii-gate" },
            {
                time: "11:30",
                type: "transit",
                title: "Paseo a las orillas del Río Sumida",
                price: "Gratis",
                timeLabel: "15 min a pie",
                link: "https://www.google.com/maps/dir/?api=1&origin=Senso-ji&destination=Sumida+Park&travelmode=walking"
            },
            {
                time: "13:00",
                type: "transit",
                title: "Línea Tobu o Caminata al Skytree",
                price: "Suica (~160 JPY)",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Asakusa+Station&destination=Tokyo+Skytree",
                tacticalGuideId: "mission_skytree"
            },
            { time: "13:30", type: "point", title: "Tokyo Skytree y Solamachi", icon: "fa-solid fa-tower-broadcast" },
            {
                time: "16:00",
                type: "transit",
                title: "Tren hacia Akihabara",
                price: "Suica",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tokyo+Skytree&destination=Akihabara+Station"
            },
            { time: "16:30", type: "point", title: "Locura Akihabara (Electric Town)", icon: "fa-solid fa-gamepad" }
        ],

        timeline: [
            { time: "09:30", title: "Senso-ji", desc: "Templo antiguo y linterna roja Kaminarimon. (Base)" },
            { time: "11:30", title: "Río Sumida", desc: "Paseo fluvial con vistas al skyline. (Base)" },
            { time: "13:30", title: "Tokyo Skytree", desc: "Mirador de 634m o centro comercial Solamachi. (Base)" },
            { time: "16:30", title: "Akihabara", desc: "Neon, anime, retro-gaming y compras otakus. (Base)" }
        ],

        prices: {
            transport: "Metro/Tren (~800 JPY/día)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día intensísimo que mezcla el Tokio más antiguo (Asakusa), cruza el río hacia el futuro de altura (Skytree) y termina en la capital mundial del frikismo japonés (Akihabara).",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Templo Senso-ji y Calle Nakamise",
                    description: "El templo budista más antiguo e importante de Tokio. Famoso por su gigantesca linterna roja.",
                    image: "images/dia17-sensoji.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-temple"></i> Templo Senso-ji: El Origen de Edo</h3>
                        <p>Fundado en el año 645, es el templo más antiguo de Tokio y el corazón espiritual de Asakusa. Su historia se remonta a una leyenda de dos hermanos pescadores que hallaron una estatua dorada de Kannon (la diosa de la misericordia) en el río Sumida. Tras cruzar la imponente <strong>Kaminarimon</strong> (Puerta del Trueno) con su linterna de 700 kg, caminaréis por <strong>Nakamise-dori</strong>, una calle comercial que ha servido a los peregrinos con dulces y artesanía desde el periodo Edo.</p>
                        <ul>
                            <li><i class="fa-solid fa-wind"></i> <strong>Ritual del Incienso:</strong> Frente al templo principal, atraed el humo del Jokoro hacia vosotros; se dice que purifica y concede sabiduría.</li>
                            <li><i class="fa-solid fa-om"></i> <strong>Omikuji:</strong> Probad vuestra suerte extrayendo un palillo de la caja de madera por solo 100 yenes.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=IbPBdY5xuDM"
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Ribera del Río Sumida",
                    description: "Paseo fotográfico espectacular contrastando barcos tradicionales y la torre Skytree.",
                    image: "images/dia17-sumida.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-water"></i> Vistas al Sumida</h3>
                        <p>Vistas espectaculares de la modernidad tokiota. A un lado el río con los cruceros futuristas (como el Hotaluna de Leiji Matsumoto) y al otro la torre de telecomunicaciones Tokyo Skytree (634m) junto al surrealista edificio de Asahi Beer coronado por la "flame d'or" (o como lo llaman cariñosamente: el truño dorado).</p>
                    `
                },
                {
                    id: "b3",
                    time: "13:30",
                    title: "Tokyo Skytree",
                    booking: { id: "bk_skytree", timeframe: "1 mes antes", required: true, link: "https://www.tokyo-skytree.jp/en/ticket/" },
                    description: "La estructura más alta de Japón (634m). Vistas que demuestran que Tokio no tiene fin.",
                    image: "images/dia17-skytree.jpg",
                    price: "Opcional 2.100 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tower-broadcast"></i> Tokyo Skytree: Superando las Nubes</h3>
                        <p>Con 634 metros, es la torre de comunicaciones más alta del mundo y un prodigio de la ingeniería antisísmica moderna. Su diseño exterior, de color "Blanco Skytree" (basado en el tinte tradicional japonés <em>aijiro</em>), fusiona la estética neofuturista con la belleza de las pagodas tradicionales de cinco pisos.</p>
                        <p><em>Incluso si decidís no subir a sus observatorios a 350 o 450 metros, el complejo **Tokyo Solamachi** en su base es una ciudad en sí misma, con tiendas oficiales de Ghibli, Pokémon Center y una oferta gastronómica infinita que abarca desde sushi de cinta hasta postres temáticos.</em></p>
                    `,
                },
                {
                    id: "b4",
                    time: "16:30",
                    title: "Akihabara: Electric Town",
                    description: "El paraíso geek. Edificios enteros de neón dedicados a un solo tema: cartas, robótica, retro-gaming o figuritas.",
                    image: "images/dia19-akihabara.jpg",
                    price: "Gratis / Gastos compras",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> Akihabara: Ciudad Eléctrica</h3>
                        <p>Antiguamente el epicentro de la tecnología de postguerra, Akihabara ha evolucionado hasta convertirse en la capital mundial de la cultura otaku (anime, manga y videojuegos). Es un laberinto vertical de neón donde cada edificio oculta tesoros impensables.</p>
                        <p><em>Imprescindible visitar **Radio Kaikan** (10 plantas de figuras y coleccionismo), **Super Potato** para revivir la era de los 8 y 16 bits, y perderse en los infinitos pasillos de **Yodobashi Camera**. <strong>Misión para Iván y Fran:</strong> Entrad en un salón GiGO, subid a las plantas de juegos de ritmo y flipad con la destreza sobrehumana de los locales.</em></p>
                    `,
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Calle Kappabashi (Cocineros)",
                time: "Flexible Mañana",
                description: "El barrio de suministros para restaurantes. Cuchillos forjados a mano y comida de plástico.",
                price: "Gratis",
                image: "images/dia17-calle-kappabashi-cocineros.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-kitchen-set"></i> Kappabashi Dogu-gai</h3>
                    <p>Una calle entera dedicada al 'hardware' culinario japonés muy cerca de Asakusa. Podréis comprar los mejores cuchillos del mundo (os los graban con vuestro nombre), palillos preciosos y admirar las increíbles réplicas hiperrealistas de comida en plástico que los restaurantes usan en sus escaparates.</p>
                `
            },
            {
                id: "c2",
                title: "Experiencia Maid Café (Akihabara)",
                time: "Flexible Tarde",
                description: "Cafeterías en Akihabara donde camareras disfrazadas os llaman 'amo' e infunden magia en los helados.",
                price: "~2.500 JPY",
                image: "images/dia19-maid.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-wand-magic-sparkles"></i> Surrealismo Kawaii Extremo</h3>
                    <p>Cadenas como "Maidreamin" u "At Home Café" ofrecen algo que no sabréis si amar o enterrar bajo tierra. Las maids os obligarán a hacer corazones con las manos para bendecir vuestro capuchino ("Moe Moe Kyun!"). Una inmersión en una moda nipona difícil de explicar a la abuela en España.</p>
                `,
                tacticalOptions: [
                    {
                        title: "ELEGIR MAID CAFÉ",
                        time: "Atardecer",
                        description: "En las aceras principales de Akihabara habrá docenas de chicas repartiendo flyers.",
                        link: "https://www.google.com/maps/search/Maidreamin+Akihabara",
                        tacticalGuideId: "mission_maid"
                    }
                ]
            }
        ],
        additionalExcursions: [
            {
                id: "add_hotaluna",
                title: "Crucero Fluvial Hotaluna",
                image: "images/add-hotaluna.jpg",
                description: "Trayecto en barco futurista desde Asakusa hasta Odaiba.",
                time: "12:00 – 13:00",
                price: "~1.700 JPY",
                tacticalGuideId: "mission_hotaluna",
                video: "https://www.youtube.com/watch?v=H7_4j_f5Wks",
                link: "https://www.google.com/maps/search/?api=1&query=Hotaluna+Water+Bus+Asakusa",
                tacticalGuideId: "mission_hotaluna",
                fullDesc: `
                    <h3><i class="fa-solid fa-ship"></i> Crucero Hotaluna</h3>
                    <p>Diseñado por Leiji Matsumoto. El barco parece una nave espacial de cristal. Vistas increíbles del skyline desde el río Sumida.</p>
                `
            },
            {
                id: "add_sumida_aquarium",
                title: "Sumida Aquarium",
                image: "images/add-sumida-aquarium.jpg",
                description: "Acuario de diseño moderno y artístico dentro del complejo Skytree.",
                time: "15:00 – 16:30",
                price: "~2.300 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Sumida+Aquarium",
                tacticalGuideId: "mission_sumida_aquarium",
                fullDesc: `
                    <h3><i class="fa-solid fa-fish"></i> Acuario de Sumida</h3>
                    <p>Destaca su zona de pingüinos y medusas. Un ambiente fresco y relajante tras bajar del Skytree.</p>
                `
            },
            {
                id: "add_kanda_myojin",
                title: "Kanda Myōjin (Templo IT & Anime)",
                image: "images/add-kanda-myojin.jpg",
                description: "El templo de los informáticos y el anime. Famoso por sus amuletos para dispositivos electrónicos.",
                time: "10:00 – 11:30",
                price: "Gratis",
                video: "https://www.youtube.com/watch?v=UtuCPV240dc",
                link: "https://www.google.com/maps/search/?api=1&query=Kanda+Myojin+Shrine",
                tacticalGuideId: "mission_kanda_myojin",
                fullDesc: `
                    <h3><i class="fa-solid fa-microchip"></i> Kanda Myōjin</h3>
                    <p>Un santuario con más de 1300 años de historia, pero con un giro moderno único: es el protector del distrito tecnológico de Akihabara. Aquí podéis comprar amuletos para bendecir vuestro PC o smartphone y ver colaboraciones con series de anime.</p>
                    <ul>
                        <li><i class="fa-solid fa-bolt-lightning"></i> <strong>Especial:</strong> Los informáticos vienen aquí a rezar para que no fallen sus servidores.</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Visual:</strong> Puerta Zuimon de madera dorada y bermellón espectacular.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 18: SHIBUYA (Juventud) ---
    {
        day: 18, exactDate: "2026-08-13", type: "stay",
        date: "Jue, 13 Agosto", title: "🚦 Shibuya y Harajuku",
        coords: [35.659, 139.701], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/shibuya_crossing.png",

        logistics: [
            { title: "Transporte", text: "Línea central JR Chuo/Sobu desde Iidabashi hasta Yoyogi/Shinjuku, transbordo a JR Yamanote." },
            { title: "Multitudes", text: "🔥🔥🔥🔥 MUY ALTO. Shibuya es el puro caos organizado; los domingos Takeshita (Harajuku) es intransitable." },
            { title: "Reservas", text: "Si queréis subir al mirador Shibuya Sky al atardecer, es IMPRESCINDIBLE reservar con semanas o meses de antelación en su web." }
        ],

        transportTimeline: [
            { time: "09:00", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:15",
                type: "transit",
                title: "Tren JR Sobu/Yamanote a Harajuku",
                price: "JR Pass o Suica (~250 JPY)",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Harajuku+Station&travelmode=transit",
                tacticalGuideId: "mission_yamanote"
            },
            { time: "09:45", type: "point", title: "Parque Yoyogi / Meiji Jingu", icon: "fa-solid fa-tree" },
            {
                time: "11:30",
                type: "transit",
                title: "Caminar hacia Takeshita Dori",
                price: "Gratis",
                timeLabel: "10 min a pie",
                link: "https://www.google.com/maps/dir/?api=1&origin=Meiji+Jingu&destination=Takeshita+Street+Harajuku&travelmode=walking"
            },
            { time: "12:00", type: "point", title: "Locura Harajuku / Almuerzo", icon: "fa-solid fa-shop" },
            {
                time: "14:30",
                type: "transit",
                title: "Caminar por Cat Street a Shibuya",
                price: "Gratis",
                timeLabel: "25 min a pie (con tiendas)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Harajuku&destination=Shibuya+Crossing&travelmode=walking"
            },
            { time: "15:00", type: "point", title: "Cruce de Shibuya y Hachiko", icon: "fa-solid fa-people-arrows" }
        ],

        timeline: [
            { time: "09:45", title: "Santuario Meiji", desc: "El gran bosque sintoísta en medio de la ciudad. (Base)" },
            { time: "11:30", title: "Harajuku opcional", desc: "Takeshita Dori: crepes y cultura kawai. (Complemento)" },
            { time: "15:00", title: "Shibuya Crossing", desc: "El legendario cruce a nivel del suelo. (Base)" },
            { time: "18:00", title: "Shibuya Sky", desc: "Mirador espectacular abierto. (Complemento recomendado)" }
        ],

        prices: {
            transport: "~500 JPY (Tren)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "El corazón palpitante del oeste de Tokio. Un día de contrastes extremos: la paz del bosque imperial y los neones y cruces abarrotados.",
            events: [
                {
                    id: "b1",
                    time: "09:45",
                    title: "Santuario Meiji Jingu",
                    description: "Santuario imperial camuflado en un bosque denso enorme y silencioso.",
                    image: "images/dia18-meiji.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=VN_Kk0KWAvk",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tree"></i> Meiji Jingu: Un Bosque Sagrado</h3>
                        <p>Dedicado a las almas del Emperador Meiji y la Emperatriz Shoken, este santuario es un remanso de paz absoluta en el corazón de la urbe. Tras cruzar los inmensos Torii de madera de cedro de 1.500 años de antigüedad, caminaréis por un bosque artificial de 70 hectáreas compuesto por 100.000 árboles donados por todo Japón cuando se fundó el santuario en 1920.</p>
                        <p><em>No os perdáis los coloridos barriles de sake (kazaridaru) donados anualmente, enfrentados a los barriles de vino de Borgoña, reflejo del amor del emperador por la cultura internacional. Con suerte, podréis ver una procesión de boda tradicional (shinto) cruzando el patio principal.</em></p>
                    `,
                },
                {
                    time: "12:00",
                    title: "Pausa Almuerzo en Omotesando/Harajuku",
                    description: "Recomendado buscar en calles paralelas a The Cat Street para restaurantes más relajados.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "15:00",
                    title: "El Cruce de Shibuya y Hachiko",
                    description: "El 'Times Square' nipón. El paso de peatones múltiple más concurrido del mundo.",
                    image: "images/dia18-shibuya.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-people-arrows"></i> El Cruce de Shibuya: Caos en Armonía</h3>
                        <p>Cuando los semáforos se ponen en rojo para los coches, la marea humana se lanza al asfalto desde cinco direcciones distintas. Es el "Scramble Crossing" más famoso del mundo, un icono de la modernidad y la densidad de Tokio. Cruzarlo es un rito de iniciación obligatorio; observarlo desde lo alto (como el Starbucks del edificio QFRONT) es hipnótico.</p>
                        <ul>
                            <li><i class="fa-solid fa-dog"></i> <strong>Hachiko: La Lealtad Eterna.</strong> Junto al cruce se encuentra la estatua de bronce de Hachiko, el perro de raza Akita que esperó a su dueño fallecido en este mismo punto durante casi 10 años. Es el concepto japonés de <em>giri</em> (deber y lealtad) hecho carne... o bronce.</li>
                            <li><i class="fa-solid fa-lightbulb"></i> <strong>Consejo:</strong> Si buscáis una vista espectacular del cruce, el **Magnets by Shibuya 109** tiene una planta superior panorámica menos masificada.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=pZRHMKangVQ"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Shibuya Sky",
                booking: { id: "bk_shibuya", timeframe: "Exactamente 4 semanas antes (00:00 Japón)", required: true, link: "https://www.shibuya-scramble-square.com/en/sky/ticket/" },
                time: "17:30",
                description: "El mirador que arrasa en Instagram. Azotea de helicópteros totalmente al aire libre.",
                price: "~2.200 JPY",
                image: "images/dia18-sky.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=-92mxe5UQYg",
                fullDesc: `
                    <h3><i class="fa-solid fa-wind"></i> Tokio bajo tus pies (literal)</h3>
                    <p>Subir al atardecer es una experiencia increíble; las paredes son de cristal bajo, dejando entrar la brisa y dando la sensación de volar sobre los rascacielos y el cruce. Además cuenta con hamacas tejidas e iluminación LED dinámica de noche. Solo pueden colarse cámaras pequeñas (mochilas prohibidas arriba por el viento).</p>
                `,
                tacticalOptions: [
                    {
                        title: "EDIFICIO SCRAMBLE SQUARE",
                        time: "A la hora reservada",
                        description: "El rascacielos de cristal adyacente a la estación JR Shibuya (vistos desde la salida Hachiko).",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Shibuya+Crossing&destination=Shibuya+Sky",
                        tacticalGuideId: "mission_shibuya_sky"
                    }
                ]
            },
            {
                id: "c2",
                title: "Harajuku (Takeshita Street)",
                time: "11:30",
                description: "El epicentro de la moda adolescente, locura kawaii y el azúcar concentrado.",
                price: "Gratis",
                image: "images/dia18-harajuku.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-ice-cream"></i> Locura Estudiantil Pop</h3>
                    <p>Solo 400 metros de calle, pero extremadamente densa. Veréis tiendas que venden moda lolita gotica punk, enormes tiendas Daiso de todo a 100 yenes y colas larguísimas para probar crepes hiper calóricas dobladas a rebosar de fresas y nata o algodon de azúcar arcoíris tamaño XXL.</p>
                `
            },
            {
                id: "c3",
                title: "Avenida Omotesando",
                time: "13:00",
                description: "Arquitectura moderna de lujo y marcas exclusivas bordeando grandes árboles.",
                price: "Gratis",
                image: "images/dia18-omotesando.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-shop"></i> Los Campos Elíseos Asiáticos</h3>
                    <p>El polo opuesto a la barata y loca calle Takeshita. Bajando la calle paralela entraréis en amplias aceras sombreadas rodeadas de flagships arquitectónicos espectaculares de Dior, Prada y marcas mundiales. Entrad al Tokyu Plaza Omotesando Harajuku para su mítica entrada de espejos poligonales.</p>
                `
            }
        ]
    },

    // --- DÍA 19: TEAMLAB Y ODAIBA ---
    {
        day: 19, exactDate: "2026-08-14", type: "stay",
        date: "Vie, 14 Agosto", title: "🌊 TeamLab y Odaiba",
        coords: [35.630, 139.776], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/teamlab.png",

        logistics: [
            { title: "Transporte", text: "Metro hacia Shimbashi. Allí se pilla el famoso tren Yurikamome (No entra en el pase regular de metro)." },
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Los fines de semana la isla artificial de Odaiba se llena de familias japonesas." },
            { title: "Ropa (TeamLab)", text: "En Planets entraréis descalzos y caminaréis sobre agua por la rodilla. Llevad pantalones que se puedan remangar fácilmente." }
        ],

        transportTimeline: [
            { time: "08:15", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "08:30",
                type: "transit",
                title: "Metro Tozai / Ginza a Shimbashi",
                price: "Suica (~180 JPY)",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Shimbashi+Station&travelmode=transit",
                tacticalGuideId: "mission_tokyo_metro"
            },
            {
                time: "09:00",
                type: "transit",
                title: "Tren Yurikamome a Shin-Toyosu",
                price: "Suica (~390 JPY - No entra en pases normales)",
                timeLabel: "25 min (Espectacular)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shimbashi&destination=Shin-Toyosu&travelmode=transit",
                tacticalGuideId: "mission_yurikamome"
            },
            { time: "09:30", type: "point", title: "Inicio Turno TeamLab Planets", icon: "fa-solid fa-water" },
            {
                time: "12:00",
                type: "transit",
                title: "Tren Yurikamome a Nube de Odaiba",
                price: "Suica (~260 JPY)",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shin-Toyosu&destination=Daiba+Station"
            },
            { time: "12:15", type: "point", title: "Estatua Libertad y Gundam", icon: "fa-solid fa-robot" }
        ],

        timeline: [
            { time: "09:30", title: "TeamLab Planets", desc: "Arte digital hiper inmersivo. (Complemento muy recomendado)" },
            { time: "11:30", title: "Tren Yurikamome", desc: "Vistas panorámicas de la bahía y el Rainbow Bridge. (Base)" },
            { time: "12:15", title: "Odaiba Seaside", desc: "Centros comerciales, Gundam gigante y Liberty. (Base)" }
        ],

        prices: {
            transport: "~1.000 JPY (Yurikamome es caro)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Adentrarse en la bahía de Tokio. Odaiba es una isla artificial ganada al mar llena de centros comerciales enormes, réplicas y arquitectura futurista ochentera.",
            events: [
                {
                    id: "b1",
                    time: "11:30",
                    title: "El Tren Monorraíl Yurikamome",
                    description: "No es solo transporte, es una verdadera atracción gracias a las vistas cruzando el Rainbow Bridge.",
                    image: "images/dia20-monorail.jpg",
                    price: "Suica/Pasmo",
                    video: "https://www.youtube.com/watch?v=7iSOMLkFizU",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Yurikamome: El Viaje al Futuro</h3>
                        <p>Este sistema de tránsito ligero totalmente automatizado (sin conductor) es el mejor mirador móvil de Tokio. Recibe su nombre de la gaviota de cabeza negra, el ave oficial de la capital.</p>
                        <p><em>El momento culminante es cuando el tren realiza una doble curva de 270 grados para ganar altura antes de cruzar el <strong>Rainbow Bridge</strong>. Las vistas de los rascacielos de Minato a un lado y la bahía al otro son imbatibles. Truco: Intentad sentaros en el gran ventanal del primer vagón.</em></p>
                    `,
                },
                {
                    time: "12:30",
                    title: "Almuerzo en los Mega Centros Comerciales",
                    description: "Decks, AquaCity o DiverCity ofrecen cientos de opciones con vistas al puente.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "14:00",
                    title: "Odaiba:🗽 y 🤖",
                    description: "Los dos iconos absurdos fotográficos de la isla artificial.",
                    image: "images/dia20-odaiba.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> Odaiba: Isla de Entretenimiento</h3>
                        <p>Odaiba es una serie de islas artificiales ganadas al mar. Originalmente construidas como fortalezas defensivas en 1853, hoy son el centro de ocio futurista de Tokio. Aquí la escala es diferente: espacios abiertos, brisa marina y arquitecturas audaces como el edificio de Fuji TV.</p>
                        <ul>
                            <li><i class="fa-solid fa-robot"></i> <strong>Unicorn Gundam:</strong> Frente al centro comercial DiverCity veréis una estatua escala 1:1 de 20 metros que realiza transformaciones rítmicas de luz y placas mecánicas cada hora.</li>
                            <li><i class="fa-solid fa-statue-mercurial"></i> <strong>Estatua de la Libertad:</strong> Una réplica encargada en 1998 para celebrar el "Año de Francia en Japón", situada con el skyline de Tokio al fondo.</li>
                        </ul>
                    `,
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "TeamLab Planets TOKYO",
                booking: { id: "bk_teamlab", timeframe: "Meses de antelación", required: true, link: "https://planets.teamlab.art/tokyo/es/tickets" },
                time: "09:30",
                description: "Una de las experiencias artísticas inmersivas más famosas del mundo. Agua, espejos y luces.",
                price: "3.800 JPY",
                image: "images/dia20-teamlab.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=bFE0Kas391k",
                fullDesc: `
                    <h3><i class="fa-solid fa-hand-sparkles"></i> Nadar en Luz</h3>
                    <p>Imprescindible reservar con semanas de antelación. Caminaréis descalzos por ríos de agua tibia donde se proyectan carpas koi virtuales, atravesaréis laberintos infinitos de cristales LED colgantes y os tumbaréis en cúpulas de orquídeas flotantes. Una experiencia alucinante (y muy "instagrameable").</p>
                `,
                tacticalOptions: [
                    {
                        title: "RESERVA ONLINE PREVIA",
                        time: "Meses de antelación",
                        description: "No se venden entradas en taquilla física casi nunca.",
                        link: "https://planets.teamlab.art/tokyo/es/tickets",
                        tacticalGuideId: "mission_teamlab",
                    }
                ]
            },
            {
                id: "c2",
                title: "DisneySea (Día Completo Alternativo)",
                time: "08:00",
                description: "Para los amantes de parques. El único parque Disney de temática marina del mundo (Sustituye todo Odaiba).",
                price: "~9.000 JPY",
                image: "images/dia20-disneysea.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-volcano"></i> El Parque Único</h3>
                    <p>Considerado por los expertos el parque temático mejor diseñado arquitectónicamente y con historias más oscuras y adultas (Jules Verne) de toda la franquicia Disney. Cuenta con un volcán gigante central que entra en erupción.</p>
                `
            },
            {
                id: "c3",
                title: "Joypolis Tokyo",
                time: "16:00",
                description: "Parque de atracciones totalmente indoor propiedad de SEGA. Montañas rusas simuladores bajo techo.",
                price: "Pase diario ~5.000 JPY",
                image: "images/dia20-joypolis.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-roller-coaster"></i> La Locura SEGA</h3>
                    <p>Ideal si llueve o sois fans de Sonic y los salones arcades gigantescos repletos de japoneses adolescentes compitiendo en simuladores de derrape a lo Initial-D.</p>
                `
            }
        ]
    },


    // --- DÍA 20: UENO, YANAKA Y NAKANO ---
    {
        day: 20, type: "stay",
        date: "Sáb, 15 Agosto", title: "🍃 Ueno, Yanaka y Nakano",
        coords: [35.711, 139.773], zoom: 12,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia20-itinerario-base.jpg",

        logistics: [
            { title: "Transporte", text: "Día completo de moverse en tren. JR Yamanote es la clave para conectar todo." },
            { title: "Horarios", text: "Ameyoko y Yanaka cierran sus puestos pronto (sobre las 18:00). Nakano Broadway abre a las 11:00." },
            { title: "Multitudes", text: "🔥🔥 ALTO. Ueno el sábado por la mañana rebosa de gente." }
        ],

        transportTimeline: [
            { time: "09:00", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:15",
                type: "transit",
                title: "Tren hacia Ueno (vía Akihabara/Ochanomizu)",
                price: "Suica (~160 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Ueno+Station&travelmode=transit"
            },
            { time: "09:30", type: "point", title: "Parque Ueno y Estanque Shinobazu", icon: "fa-solid fa-tree" },
            {
                time: "11:00",
                type: "transit",
                title: "Caminar por mercado Ameyoko",
                price: "Gratis",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ueno+Park&destination=Ameya-Yokocho&travelmode=walking"
            },
            {
                time: "12:30",
                type: "transit",
                title: "Tren Yamanote a Nippori (Para Yanaka)",
                price: "Suica (~150 JPY)",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ueno+Station&destination=Nippori+Station&travelmode=transit"
            },
            { time: "12:45", type: "point", title: "Yanaka Ginza (Tokio Retro)", icon: "fa-solid fa-cat" },
            {
                time: "15:00",
                type: "transit",
                title: "Tren JR hacia Nakano (vía Shinjuku)",
                price: "Suica (~220 JPY)",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nippori+Station&destination=Nakano+Station&travelmode=transit"
            },
            { time: "15:30", type: "point", title: "Nakano Broadway", icon: "fa-solid fa-box-open" }
        ],

        timeline: [
            { time: "09:30", title: "Parque Ueno", desc: "El gran parque cultural y el templo flotante. (Base)" },
            { time: "11:00", title: "Mercado Ameyoko", desc: "Mercado negro postguerra bullicioso. (Base)" },
            { time: "13:00", title: "Yanaka Ginza", desc: "Barrio gato de la época Showa. Almuerzo callejero. (Base)" },
            { time: "15:30", title: "Nakano Broadway", desc: "Coleccionismo retro y figuras. (Complemento recomendado)" }
        ],

        prices: {
            transport: "Tren JR (~800 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Un recorrido por el Tokio más nostálgico. Desde los vestigios del mercado negro en Ueno y la paz felina de Yanaka Ginza, hasta culminar la tarde escarbando reliquias en Nakano.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Parque Ueno y Estanque Shinobazu",
                    description: "El parque público más popular, hogar de museos, un zoo y un estanque de lotos gigante.",
                    image: "images/dia20-itinerario-base-2.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=bgC0Vno1wJo",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Parque Ueno: El Corazón Cultural</h3>
                        <p>Este inmenso parque fue antiguamente el recinto del templo Kan'ei-ji, uno de los más poderosos de la ciudad, destruido durante la guerra civil Boshin. Hoy es un epicentro cultural que alberga los mejores museos del país y el famoso zoológico de Ueno.</p>
                        <p><em>No os perdáis el <strong>Estanque Shinobazu</strong>, un vasto humedal que en verano se cubre completamente de flores de loto gigantescas, ocultando el agua y creando un mar verde bajo los rascacielos. En su centro flota el templo Bentendo, dedicado a la diosa de la fortuna y el conocimiento.</em></p>
                    `,
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Mercado Ameyoko",
                    description: "El ruido y el regateo en bruto bajo las vías del tren elevado.",
                    image: "images/dia20-itinerario-base-1.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-store"></i> Ameyoko: El Mercado del Azúcar</h3>
                        <p>Ameya Yokocho ("Callejón de las tiendas de caramelos") nació como un bullicioso mercado negro tras la Segunda Guerra Mundial, donde se vendía azúcar y productos de los soldados estadounidenses. Hoy conserva esa energía cruda y caótica, con puestos bajo las vías del tren elevado.</p>
                        <p><em>Es el lugar perfecto para ver el Tokio menos pulido: vendedores gritando ofertas de pescado fresco, especias, ropa vintage y zapatillas. Es una experiencia de asalto a los sentidos ineludible.</em></p>
                    `,
                },
                {
                    id: "b3",
                    time: "13:00",
                    title: "Yanaka Ginza (Barrio Gato)",
                    description: "Escapando de la guerra y los terremotos, este barrio mantiene la madera y escala de los años 50.",
                    image: "images/dia20-museo-nacional-de-tokio-ueno.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-cat"></i> Yanaka Ginza: El Tokio de Ayer</h3>
                        <p>Yanaka es uno de los pocos barrios que sobrevivió a los bombardeos de la guerra y a los terremotos, manteniendo la escala y el encanto de la era Showa (mediados del siglo XX). Es conocido como el "Barrio de los Gatos" por la abundancia de felinos y figuritas decorativas de estos animales.</p>
                        <p><em>El acceso por las escaleras **Yuyake Dandan** ofrece una de las vistas más nostálgicas de la ciudad al atardecer. Es ideal para comer croquetas caseras (korokke) recién hechas mientras paseáis entre pescaderías, teterías y tiendas de sellos tradicionales.</em></p>
                    `,
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Nakano Broadway (Cultura Retro)",
                time: "15:30",
                description: "Edificio de hormigón plagado del imperio Mandarake. Tesoros otaku de pura cepa.",
                price: "Gratis",
                image: "images/nakano_broadway.png",
                recommended: true,
                fullDesc: `
                    <h3><i class="fa-solid fa-box-open"></i> La Madriguera del Conejo Blanca</h3>
                    <p>Mientras os acercáis por el Sun Mall cubierto parece normal, pero al subir a los pisos superiores entraréis en celdas especializadas llenas de cels de Ghibli originales, cartuchos de SNES en caja y Godzilla vintage. <strong>Reto:</strong> Buscad en el sótano el helado de 8 pisos de Daily Chico.</p>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA DIRECTA A NAKANO",
                        time: "Tarde",
                        description: "Tomar la línea Yamanote a Shinjuku, y cambiar a JR Chuo (Express a Nakano).",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Nippori+Station&destination=Nakano+Station",
                        tacticalGuideId: "mission_nakano_jr"
                    }
                ]
            },
            {
                id: "c2",
                title: "Museo Nacional de Tokio (Ueno)",
                time: "10:00",
                description: "Si sois amantes de la historia de los Samuráis, Katanas y armaduras.",
                price: "~1.000 JPY",
                image: "images/dia17-ueno.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-building-columns"></i> El Legado del Imperio</h3>
                    <p>Ubicado dentro del inmenso parque Ueno, contiene la mayor colección de arte japonés del mundo. Las exposiciones de espadas históricas forjadas por los grandes maestros son formidables.</p>
                `
            }
        ]
    },

    // --- DÍA 21: EXCURSIÓN (NIKKO O KAMAKURA) ---
    {
        day: 21, type: "stay",
        date: "Dom, 16 Agosto", title: "🌳 Nikko Tokugawa o Kamakura Buda",
        coords: [36.758, 139.598], zoom: 10,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia21-nikko.jpg",

        logistics: [
            { title: "Decisión Fuerte", text: "Es domingo y tendréis que madrugar mucho para evitar muchedumbres en los trenes. Decidid entre la montaña dorada (Nikko) o la costa budista (Kamakura)." },
            { title: "Transporte Nikko", text: "Nikko requiere el JR Pass o el pase Tobu (caro de pagar suelto), 2 horas de trayecto en tren Shinkansen/Exprés." },
            { title: "Transporte Kamakura", text: "Kamakura está a 1h directo desde Shinjuku pagando solo 950 JPY con Suica." }
        ],

        transportTimeline: [
            { time: "07:30", type: "point", title: "Salida Hotel Edmont (Madrugón)", icon: "fa-solid fa-hotel" },
            {
                time: "08:00",
                type: "transit",
                title: "Ruta 1: Shinkansen a Utsunomiya -> Nikko",
                price: "JR Pass o ~5.500 JPY",
                timeLabel: "2h",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tokyo+Station&destination=Nikko+Station&travelmode=transit",
                tacticalGuideId: "mission_nikko_jr"
            },
            {
                time: "08:30",
                type: "transit",
                title: "Ruta 2: Tren JR a Kamakura",
                price: "Suica (~1.000 JPY)",
                timeLabel: "1h 15min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Kamakura+Station&travelmode=transit",
                tacticalGuideId: "mission_kamakura_jr"
            }
        ],

        timeline: [
            { time: "10:30", title: "Llegada Destino", desc: "Inicio de la exploración elegida. (Base)" },
            { time: "11:00", title: "Toshogu (Nikko) o Daibutsu (Kamakura)", desc: "Monumentos principales de cada ruta. (Base)" },
            { time: "13:30", title: "Almuerzo local", desc: "Comer en las callejuelas. (Base)" }
        ],

        prices: {
            transport: "Variables (1.000 - 5.500 JPY trayecto)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Día de Bifurcación",
            description: "Día para escapar de la gran urbe de neón de cristal buscando la herencia histórica monumental en los bosques.",
            events: [
                {
                    id: "b1",
                    time: "Todo el día",
                    title: "Opción A: El Esplendor de Nikko",
                    description: "Montañas frondosas, santuarios profusamente decorados en oro y el mausoleo de Ieyasu Tokugawa.",
                    image: "images/dia21-nikko.jpg",
                    price: "Santuarios ~1.300 JPY",
                    video: "https://www.youtube.com/watch?v=XGDPWTPx_JM",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Nikko: La Morada de los Shogunes</h3>
                        <p>Nikko es Patrimonio de la Humanidad por la UNESCO y un lugar donde la arquitectura japonesa alcanza su máximo esplendor decorativo. El complejo **Toshogu**, mausoleo del gran shogun Tokugawa Ieyasu, rompe con la sobriedad budista habitual mostrando tallas intrincadas, pan de oro y colores vibrantes en medio de un bosque de cedros milenarios.</p>
                        <p><em>Buscad el relieve de los "Tres Monos Sabios" (no oír, no decir, no ver el mal) y el "Gato Durmiente". Nikko combina espiritualidad samurái con una naturaleza salvaje de cascadas y lagos alpinos.</em></p>
                    `,
                },
                {
                    id: "b2",
                    time: "Todo el día",
                    title: "Opción B: La Tranquilidad Costera de Kamakura",
                    description: "La antigua capital surfera. Famosa por su inmenso Daibutsu (Gran Buda) de bronce al aire libre.",
                    image: "images/kamakura_buda.png",
                    price: "Templos ~300-400 JPY",
                    video: "https://www.youtube.com/watch?v=3a7hEF16KpA",
                    fullDesc: `
                        <h3><i class="fa-solid fa-om"></i> Kamakura: El Gran Buda del Mar</h3>
                        <p>Kamakura fue la capital política de Japón en el siglo XII y hoy es una ciudad costera llena de templos zen y una vibra relajada. Su icono es el **Daibutsu** del templo Kotoku-in, una estatua de bronce de 13 metros que ha resistido terremotos y tsunamis desde 1252.</p>
                        <p><em>Pasead por la calle Komachi-dori para probar dulces locales y visitad el templo **Hasedera**, famoso por sus miles de pequeñas estatuas Jizo y sus jardines con vistas panorámicas al océano Pacífico.</em></p>
                    `,
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Enoshima (Si elegís Kamakura)",
                time: "15:00",
                description: "Tomar el tranvía Enoden a la isla de santuarios y cuevas marinas.",
                price: "Tren (260 JPY)",
                image: "images/dia22-enoshima.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Vistas al Fuji</h3>
                    <p>Una pequeña isla rocosa en el mar de Sagami conectada por un puente. Escaleras infernales (o de pago mecánicas) os llevarán a la cima iluminada al atardecer lleno de gatos, pescadores y templos budistas. Si hace un frente claro espectacular, podréis ver el monte Fuji asomar detrás del mar.</p>
                `
            },
            {
                id: "c2",
                title: "Cascadas Kegon o Lago Chuzenji (Si elegís Nikko)",
                time: "14:00",
                description: "Subir la montaña en autobús zigzagueante para ver la naturaleza brutal del parque nacional.",
                price: "Bus ~1.500 JPY",
                image: "images/dia21-kegon.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Fuerzas Naturales</h3>
                    <p>Si el santuario Toshogu se os queda corto y no os importa el largo trayecto en bus de peaje subiendo puertos de montaña (cuidado mareos), la caída libre de 97 metros de la gran cascada Kegon partiendo del lago de cráter Chuzenji es sobrecogedora.</p>
                `
            }
        ],
        additionalExcursions: [
            {
                id: "add_engakuji",
                title: "Templo Engaku-ji",
                image: "images/add-engakuji.jpg",
                description: "Centro zen con atmósfera de quietud absoluta y arboledas de cedros en Kamakura.",
                time: "10:00 – 11:30",
                price: "~500 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Engakuji+Temple+Kamakura",
                tacticalGuideId: "mission_engakuji",
                fullDesc: `
                    <h3><i class="fa-solid fa-peace"></i> Templo Engaku-ji</h3>
                    <p>Uno de los centros zen más importantes. La introducción perfecta antes de las zonas más concurridas de Kamakura.</p>
                `
            },
            {
                id: "add_shinkyo_bridge",
                title: "Puente Shinkyo (Nikko)",
                image: "images/add-shinkyo.jpg",
                description: "El famoso puente sagrado rojo sobre el río Daiya.",
                time: "10:30 – 11:30",
                price: "~300 JPY",
                link: "https://www.google.com/maps/search/?api=1&query=Shinkyo+Bridge+Nikko",
                tacticalGuideId: "mission_shinkyo",
                fullDesc: `
                    <h3><i class="fa-solid fa-bridge"></i> Puente Shinkyo</h3>
                    <p>Icono de Nikko. El agua brava y el bosque verde crean una estampa de naturaleza pura.</p>
                `
            },
            {
                id: "add_kawagoe",
                title: "Kawagoe (Little Edo)",
                image: "images/add-kawagoe.jpg",
                description: "Ciudad que conserva almacenes de la época Edo con paredes de arcilla negra.",
                time: "Día Completo",
                price: "Variable",
                tacticalGuideId: "mission_kawagoe",
                video: "https://www.youtube.com/watch?v=A2SlyMstSCo",
                link: "https://www.google.com/maps/search/?api=1&query=Kawague+Little+Edo",
                tacticalGuideId: "mission_kawagoe",
                fullDesc: `
                    <h3><i class="fa-solid fa-landmark"></i> Kawagoe: El Pequeño Edo</h3>
                    <p>A solo 30 min de Tokio. Una opción excelente si el grupo prefiere algo histórico pero menos exigente físicamente que Nikko.</p>
                `
            }
        ]
    },

    // --- DÍA 22: TOYOSU, GINZA Y ROPPONGI ---
    {
        day: 22, type: "stay",
        date: "Lun, 17 Agosto", title: "🏙️ Toyosu, Ginza y Roppongi",
        coords: [35.671, 139.765], zoom: 12,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia22-itinerario-base.jpg",

        logistics: [
            { title: "Transporte", text: "Día de metros por la zona céntrica y bahía exterior de Tokio." },
            { title: "Vestimenta", text: "En Ginza y Roppongi impera la formalidad y el lujo, vestid casual-elegante." }
        ],

        transportTimeline: [
            { time: "08:00", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "08:15",
                type: "transit",
                title: "Metro a Toyosu",
                price: "Suica",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Toyosu+Market&travelmode=transit"
            },
            { time: "08:45", type: "point", title: "Toyosu Market / Senkyaku Banrai", icon: "fa-solid fa-fish" },
            {
                time: "12:00",
                type: "transit",
                title: "Bus o Yurikamome a Ginza",
                price: "Suica",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Toyosu&destination=Ginza&travelmode=transit"
            },
            { time: "12:30", type: "point", title: "Ginza Luxury (Milla de Oro)", icon: "fa-solid fa-gem" },
            {
                time: "16:00",
                type: "transit",
                title: "Metro Hibiya/Oedo a Roppongi",
                price: "Suica (~180 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ginza+Station&destination=Roppongi+Station&travelmode=transit"
            },
            { time: "16:15", type: "point", title: "Roppongi Hills y vistas Torre Tokyo", icon: "fa-solid fa-city" }
        ],

        timeline: [
            { time: "08:45", title: "Toyosu Market", desc: "La nueva lonja de pescado y baños termales. (Base)" },
            { time: "12:30", title: "Ginza", desc: "Lujo, arquitectura y comida top. (Base)" },
            { time: "16:15", title: "Roppongi", desc: "Vida nocturna expat y la icónica Torre de Tokio roja. (Base)" }
        ],

        prices: {
            transport: "Metro (~600 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día ecléctico. Amanecer inmerso en los pescados y gastronomía del puerto en Toyosu, comer en la milla de oro más cara de Japón, y terminar bebiendo algo con los expatriados bajo la copia parisina de la Torre de Tokio.",
            events: [
                {
                    id: "b1",
                    time: "08:45",
                    title: "Toyosu Senkyaku Banrai",
                    description: "El nuevo complejo comercial termal junto al mercado mayorista de atunes más grande del mundo.",
                    image: "images/dia22-toyosu.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=dpPnum86GoA",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fish-fins"></i> Toyosu: El Nuevo Legado del Mar</h3>
                        <p>Tras el cierre del icónico Tsukiji, Toyosu se ha convertido en la lonja de pescado más avanzada del mundo. Aunque el área mayorista es de acceso restringido y muy tecnológica, el nuevo complejo **Senkyaku Banrai** ("Mil Huéspedes") recrea un animado mercado del periodo Edo con arquitectura de madera tradicional.</p>
                        <p><em>Es el lugar definitivo para desayunar el sushi mejor seleccionado de la madrugada. No os perdáis el **Manyo Club**, donde podréis disfrutar de un baño de pies (ashiyu) gratuito en la azotea con vistas panorámicas a la bahía de Tokio y al skyline.</em></p>
                    `,
                },
                {
                    id: "b2",
                    time: "12:30",
                    title: "La Avenida Principal de Ginza (Chuo Dori)",
                    description: "La zona más elitista comercial de todo el país. Flagships imponentes, boutiques de diseño y restaurantes de estrellas michelin ocultos en rascacielos.",
                    image: "images/dia22-teatro-kabuki-za-desde-fuera.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gem"></i> Ginza: La Milla de Diamantes</h3>
                        <p>Elegancia pura extrema. Aparte de las flagship stores de alta costura, merece la pena entrar al macro complejo de marcas **Ginza Six** con sus espectaculares bóvedas artísticas interiores, o los showrooms experimentales de grandes marcas tecnológicas japonesas como Nissan Crossing o Sony.</p>
                        <p>Los domingos y sábados al mediodía las grandes avenidas de Ginza cierran al tráfico para ser un gran paseo peatonal masivo. Al ser Lunes hoy, tendréis que caminar por las aceras, pero el ambiente sigue siendo vibrante.</p>
                    `,
                },
                {
                    id: "b3",
                    time: "16:15",
                    title: "Roppongi Hills y Torre de Tokio",
                    description: "El complejo futurista expat coronado con vistas a la torre de comunicaciones roja clásica.",
                    image: "images/dia22-roppongi.jpg",
                    price: "Gratis visual",
                    fullDesc: `
                        <h3><i class="fa-solid fa-martini-glass"></i> Roppongi: Noches de Torre Roja</h3>
                        <p>Roppongi es un barrio transformado: del desenfreno militar al hub de arte y diseño de cristal con ambiente multicultural de millonarios expatriados. Caminar por el complejo **Roppongi Hills** cruzando con la gran escultura de la araña de Louise Bourgeois (Maman). Destaca acercarse caminando a la zona del templo Zojoji o la base de la Tokyo Tower, una increíble estructura de celosía naranja y blanca (copia modernizada de la torre Eiffel de Francia) que se enciende rotundamente al caer la noche destacando sobre los rascacielos sombríos.</p>
                    `,
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Mercado Tsukiji (Exterior)",
                time: "Flexible Mediodía",
                description: "Para los puristas. Si no queréis la modernidad de Toyosu, los callejones del antiguo mercado en Tsukiji siguen sirviendo marisco y wagyu increíble.",
                price: "Variable",
                image: "images/dia19-tsukiji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-fire-burner"></i> Las Parrillas Callejeras</h3>
                    <p>A pesar de que el mercado central se mudó a Toyosu, el 'Outer Market' de Tsukiji se niega a morir. Pinchos de salmón ahumándose en la vía, cangrejo real, tortilla dulce recién hecha y bares minúsculos atestados llenos de bullicio e inmersión sensorial absoluta para desayunar a base de pescados al carbón.</p>
                `
            },
            {
                id: "c2",
                title: "Teatro Kabuki-za (Desde fuera)",
                time: "15:00",
                description: "La joya arquitectónica del teatro clásico sobreviviendo entre torres modernas de cristal en Ginza.",
                price: "Gratis",
                image: "images/dia19-ginza.jpg", // Needs custom image or reuse
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Reflejos Feudales</h3>
                    <p>Reconstruido varias veces, es el teatro principal donde se ejecuta hoy en día el arte dramático tradicional Kabuki de Japón (actuado sólo por varones y con elaborados sets giratorios). Su inmensa techumbre al uso de los castillos feudales es un spot fotográfico magnífico para constatar la dualidad de Ginza entre lo ultra-moderno y lo intocablemente clásico.</p>
                `
            }
        ]
    },

    // --- DÍA 23: DESPEDIDA Y VUELO (Viaje) ---
    {
        day: 23, type: "travel",
        date: "Mar, 18 Agosto", title: "✈️ Sayonara Japón",
        coords: [35.549, 139.779], zoom: 12,
        hotel: "Vuelo de regreso",
        hotelImage: "images/avion.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Haneda+Airport",
        image: "images/dia23-itinerario-base.jpg",

        logistics: [
            { title: "Aeropuerto", text: "Vuelo TK199 desde Haneda (HND) a las 21:45. Hay que estar 4 horas antes por precaución (17:45)." },
            { title: "Equipaje", text: "Haced el Check-out a las 10:00 pero pedid en recepción que os guarden las maletas grandes hasta la tarde." }
        ],

        transportTimeline: [
            { time: "10:00", type: "point", title: "Check-out Hotel Edmont", icon: "fa-solid fa-bell-concierge" },
            { time: "10:15", type: "point", title: "Día Libre en Tokio", icon: "fa-solid fa-bag-shopping" },
            { time: "16:00", type: "point", title: "Volver al Hotel / Recoger Maletas", icon: "fa-solid fa-suitcase-rolling" },
            {
                time: "16:30",
                type: "transit",
                title: "Taxis hacia Aeropuerto de Haneda",
                price: "Efectivo/Tarjeta (~8.000 JPY por taxi)",
                timeLabel: "45 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Haneda+Airport",
                tacticalGuideId: "mission_haneda"
            },
            { time: "17:45", type: "point", title: "Llegada a Terminal / Check-in", icon: "fa-solid fa-plane-arrival" },
            {
                time: "21:45",
                type: "transit",
                title: "Despegue Vuelo TK199 (Turkish)",
                price: "Incluido",
                timeLabel: "13h hacia Estambul",
                link: "https://www.flightaware.com/live/flight/THY199"
            }
        ],

        timeline: [
            { time: "11:00", title: "Mañana Libre", desc: "Últimas compras de souvenirs o relax. (Base)" },
            { time: "16:30", title: "Traslado a Haneda", desc: "Taxis desde el hotel directo a la terminal. (Base)" },
            { time: "17:45", title: "Aeropuerto", desc: "Facturación, comer algo y puertas de embarque. (Base)" },
            { time: "21:45", title: "Despegue", desc: "Vuelo de medianoche hacia Estambul. (Base)" }
        ],

        prices: {
            transport: "Taxis al aeropuerto (~8000 JPY/vehículo)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Es el momento de cerrar las maletas (probablemente sentándose encima) y aprovechar las últimas horas para despdirse de la ciudad antes del largo vuelo nocturno.",
            events: [
                {
                    id: "b1",
                    time: "11:00",
                    title: "Compras Finales (Don Quijote o Akihabara)",
                    description: "Comprar los últimos Kit-Kats raros, matcha o electrónica.",
                    image: "images/dia23-itinerario-base-1.jpg",
                    price: "Libre",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gift"></i> Don Quijote: El Paraíso de las Compras</h3>
                        <p>Tras dejar el equipaje en el lobby del hotel, tenéis el día libre. Es el momento clásico de ir a un "Mega Donki" (Don Quijote gigante) a comprar cajas de Kit-Kats de sabores, mochis y chucherías para la familia, o volver a vuestro barrio favorito de días anteriores para una última mirada.</p>
                        <p><em>**Don Quijote** es una cadena de tiendas de descuento con todo tipo de productos, desde snacks y cosméticos hasta electrónica y disfraces. Es el lugar perfecto para encontrar souvenirs únicos y a buen precio.</em></p>
                    `,
                },
                {
                    time: "13:00",
                    title: "Último Almuerzo Japonés",
                    description: "Última oportunidad para sushi decente o un gran plato de ramen antes de la comida de avión.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "16:30",
                    title: "Operación Traslado: Taxis a Haneda",
                    description: "Se recomiendan taxis furgoneta grandes para acomodar todo vuestro equipaje final.",
                    image: "images/dia23-terminal-3-internacional-haneda.jpg",
                    price: "A dividir",
                    fullDesc: `
                        <h3><i class="fa-solid fa-taxi"></i> Ruta al Aeropuerto</h3>
                        <p>Pedid en el hotel que os llamen a un par de taxis adaptados para volumen (tipo Nissan NV200 que abundan). Haneda está cerca de la ciudad (al sur, a diferencia de Narita que está lejísmos). Serán unos 45 minutos cómodos por autopista.</p>
                        <ul>
                            <li><i class="fa-solid fa-plane"></i> <strong>Haneda:</strong> El aeropuerto de Haneda es excelente. Tiene un puente de madera estilo Edo en la planta superior y muchas opciones de comida y tiendas si llegáis con tiempo extra.</li>
                        </ul>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Terminal 3 (Internacional) Haneda",
                time: "18:00",
                description: "Edo Koji. Réplica de una calle del periodo Edo dentro del propio aeropuerto.",
                price: "Gratis",
                image: "images/dia23-portada.jpg", // CONSIDER USING A HANEDA PHOTO
                fullDesc: `
                    <h3><i class="fa-solid fa-torii-gate"></i> Despedida Cultural</h3>
                    <p>Si llegáis pronto, subid a la planta 4 y 5 de la T3. Han reconstruido un puente japonés de madera enorme y calles comerciales preciosas. Buen sitio para la última cena antes de entrar a las aburridas puertas de embarque internacionales.</p>
                `
            }
        ],
        additionalExcursions: [
            {
                id: "add_anamori_inari",
                title: "Santuario Anamori Inari",
                image: "images/add-anamori.jpg",
                description: "Santuario con decenas de pequeños toris rojos muy cerca de Haneda.",
                time: "16:30 – 17:30",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Anamori+Inari+Shrine",
                tacticalGuideId: "mission_anamori",
                fullDesc: `
                    <h3><i class="fa-solid fa-torii-gate"></i> Santuario Anamori Inari</h3>
                    <p>Despedida espiritual perfecta. Podéis recoger 'arena sagrada' para la protección en vuestro vuelo de regreso.</p>
                `
            },
            {
                id: "add_jonanjima_park",
                title: "Jonanjima Seaside Park",
                image: "images/add-jonanjima.jpg",
                description: "Parque costero para ver los aviones despegar a baja altura en Haneda.",
                time: "17:00 – 18:00",
                price: "Gratis",
                link: "https://www.google.com/maps/search/?api=1&query=Jonanjima+Seaside+Park",
                tacticalGuideId: "mission_jonanjima",
                fullDesc: `
                    <h3><i class="fa-solid fa-plane-departure"></i> Parque Costero Jonanjima</h3>
                    <p>Relax al atardecer sobre la bahía viendo de cerca los gigantes del aire antes de ser uno de ellos.</p>
                `
            }
        ]
    },

    // --- DÍA 24: LLEGADA A ESPAÑA ---
    {
        day: 24, type: "stay",
        date: "Mié, 19 Agosto", title: "🏠 Hogar dulce hogar",
        coords: [39.469, -0.376], zoom: 10,
        hotel: "Valencia, España",
        hotelImage: "images/casa.jpg",

        logistics: [
            { title: "Escala", text: "Llegada a Estambul a las 05:15 am. Escala de 3 horas." },
            { title: "Llegada", text: "Vuelo TK1313. Llegada a Valencia a las 11:30 am hora local." }
        ],

        transportTimeline: [
            { time: "05:15", type: "point", title: "Aterrizaje en Estambul (IST)", icon: "fa-solid fa-plane-arrival" },
            {
                time: "08:20",
                type: "transit",
                title: "Despegue Vuelo TK1313",
                price: "Incluido",
                timeLabel: "4h 10m",
                link: "https://www.flightaware.com/live/flight/THY1313"
            },
            { time: "11:30", type: "point", title: "Aterrizaje en Valencia (VLC)", icon: "fa-solid fa-house" }
        ],

        isFlexible: true,
        base: {
            title: "Fin de la Aventura",
            description: "Cambio de huso horario brusco y llegada a Manises al mediodía.",
            events: [
                {
                    time: "11:30",
                    title: "Llegada a Tierra Conocida",
                    description: "Recogida de equipaje y bienvenida familiar. ¡Toca lidiar con el Jetlag!",
                    image: "images/dia24-home.jpg",
                    price: "Gratis"
                }
            ]
        },
        complements: []
    }
];
