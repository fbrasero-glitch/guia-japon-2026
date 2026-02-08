/* ==========================================
   JAPÓN 2026 - GUÍA MAESTRA (TEXTO ÍNTEGRO)
   ========================================== */

const travelData = [
    // --- PREVIO: PREPARACIÓN DEL VIAJE ---
    {
        day: 0, type: "preparation",
        date: "Preparación", title: "📋 Preparación del Viaje",
        coords: [36, 138], zoom: 5,
        hotel: "",
        image: "",

        preparation: {
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
                    image: "images/dia3-castillo.jpg",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/dir/Hotel+Wing+International+Select+Osaka+Umeda/Osaka+Castle/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-castle"></i> Castillo de Osaka</h3>
                        <p>Símbolo de Osaka. Construido en 1583 por Toyotomi Hideyoshi. El castillo actual es una reconstrucción de 1931.</p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 600 JPY.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto:</strong> Vistas desde la torre principal.</li>
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
                        <p>Observatorio flotante a 173 metros de altura. Vistas de 360° de Osaka.</p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-2 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 1.500 JPY.</li>
                            <li><i class="fa-solid fa-sun"></i> <strong>Mejor hora:</strong> Atardecer (16:30-18:00).</li>
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
                        <p>El corazón gastronómico de Osaka. Neones, el cartel de Glico, y comida callejera icónica.</p>
                        <ul>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidades:</strong> Takoyaki, Okonomiyaki, Kushikatsu.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto obligatoria:</strong> Cartel de Glico Runner.</li>
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
                    <h3><i class="fa-solid fa-tower-broadcast"></i> Shinsekai y Tsūtenkaku</h3>
                    <p>Barrio retro de Osaka con la icónica Torre Tsūtenkaku. Famoso por sus brochetas Kushikatsu.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                        <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidad:</strong> Kushikatsu (brochetas fritas).</li>
                        <li><i class="fa-solid fa-camera"></i> <strong>Ambiente:</strong> Neones retro, estilo Showa.</li>
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
        ]
    },

    // --- DÍA 4: OSAKA (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 4, type: "stay",
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
                        tacticalGuideId: "mission_aquarium"
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
        ]
    },

    // --- DÍA 5: OSAKA (OPCIONES) ---
    // --- DÍA 5: NARA Y EL BOSQUE SAGRADO ---
    {
        day: 5, type: "stay",
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
                        <h3><i class="fa-solid fa-landmark"></i> Todai-ji</h3>
                        <p>Hogar del Daibutsu. No olvides el reto de Iván en el pilar con el agujero.</p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-2 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 600 JPY.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto:</strong> Gran Buda de 15 metros.</li>
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
                        <p>Paseo por el bosque de linternas de piedra. Inmersión total en el sintoísmo antiguo.</p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-1.5 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 500 JPY.</li>
                            <li><i class="fa-solid fa-lantern"></i> <strong>Especial:</strong> 3.000 linternas de piedra y bronce.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=Wz9y6JI6qfU"
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
                video: "https://www.youtube.com/watch?v=RJy9LjTnz-Q"
            }
        ]
    },

    // --- DÍA 6: TRASLADO A KIOTO Y CASTILLO DE NIJO ---
    {
        day: 6, type: "travel",
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
                time: "11:00",
                type: "transit",
                title: "Opción: Paseo al Templo Tō-ji",
                price: "Gratis",
                timeLabel: "15 min walking",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=To-ji+Temple&travelmode=walking",
                tacticalGuideId: "mission_toji"
            },
            {
                time: "12:30",
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
                time: "18:00",
                type: "transit",
                title: "Regreso al Hotel o Cena",
                price: "230 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nijo+Castle&destination=Kyoto+Tower+Hotel+Annex&travelmode=transit",
                tacticalGuideId: "mission_kyoto_return"
            },
            {
                time: "18:30",
                type: "point",
                title: "Cena en Kioto",
                icon: "fa-solid fa-utensils"
            }
        ],

        timeline: [
            { time: "14:30", title: "Castillo de Nijo", desc: "Residencia de los Shoguns y suelos de ruiseñor. (Base)" },
            { time: "18:00", title: "Cena Libra", desc: "Exploración gastronómica local." }
        ],

        prices: {
            transport: "~580 JPY",
            entrances: "800 JPY (Castillo de Nijo)",
            food: "~3.500 JPY",
            total: "~4.900 JPY (Base)"
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
                    time: "14:30",
                    title: "Castillo de Nijo",
                    description: "Fortaleza de los Shoguns con suelos 'ruiseñor' antininja.",
                    image: "images/dia3-castillo.jpg",
                    price: "800 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Nijo+Castle&travelmode=transit",
                    tacticalGuideId: "mission_nijo",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fort-awesome"></i> Castillo de Nijo-jo</h3>
                        <p>Residencia en Kioto del Shogun Tokugawa Ieyasu. Famoso por su arquitectura palaciega y sus sistemas de seguridad antiguos.</p>
                        <ul>
                            <li><i class="fa-solid fa-bird"></i> <strong>Suelos de Ruiseñor:</strong> Diseñados para chirriar cuando alguien camina sobre ellos, alertando contra asesinos.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Palacio Ninomaru:</strong> Conserva las pinturas originales y el ambiente del shogunato.</li>
                        </ul>
                    `
                },
                {
                    time: "18:00",
                    title: "Cena en Kioto",
                    description: "Exploración libre por la zona de la estación o Pontocho.",
                    type: "gap"
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
        ]
    },

    // --- DÍA 7: TRADICIÓN Y GEISHAS (NORTE DE KIOTO) ---
    // --- DÍA 7: EL CORAZÓN HISTÓRICO (HIGASHIYAMA Y GION) ---
    {
        day: 7, type: "stay",
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
                title: "🍜 Almuerzo: Zona Higashiyama (Hisago/Tempura)",
                icon: "fa-solid fa-bowl-food"
            },
            {
                time: "14:30",
                type: "point",
                title: "⏸️ Tarde Libre / Opción Kinkaku-ji",
                icon: "fa-solid fa-hourglass-half"
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
            { time: "18:00", title: "Gion & Pontocho", desc: "Exploración del Kioto tradicional. (Base)" }
        ],

        prices: {
            transport: "~500 JPY",
            entrances: "400 JPY (Kiyomizu)",
            food: "~3.500 JPY",
            total: "~4.400 JPY (Base)"
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
                        <h3><i class="fa-solid fa-water"></i> Kiyomizu-dera</h3>
                        <p>Construido sin un solo clavo, este templo cuelga sobre la colina de Otowa.</p>
                        <ul>
                            <li><strong>Terraza de madera:</strong> Vistas panorámicas de Kioto.</li>
                            <li><strong>Cascada Otowa:</strong> Bebe de sus tres hilos de agua para salud, longevidad o éxito escolar.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "18:00",
                    title: "Gion & Pontocho",
                    description: "El distrito de las Geishas al atardecer y cena en los callejones atmosféricos junto al río Kamo.",
                    image: "images/dia7-portada.jpg",
                    price: "Gratis",
                    type: "area",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-dress-fairy"></i> Gion</h3>
                        <p>El barrio de entretenimiento más famoso de Kioto, donde aún se pueden ver Maikos y Geishas.</p>
                        <ul>
                            <li><strong>Hanamikoji:</strong> La calle más exclusiva con casas de té tradicionales.</li>
                            <li><strong>Pontocho:</strong> Callejón estrecho paralelo al río, ideal para cenar.</li>
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
        ]
    },


    // --- DÍA 8: ARASHIYAMA y NORTE (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 8, type: "stay",
        date: "Lun, 3 Agosto", title: "🎋 Arashiyama: Bambú y Zen",
        coords: [35.009, 135.678], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/arashiyama.png",

        logistics: [
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
                title: "🎋 Bosque de Bambú: Caminata 10 min desde estación.",
                icon: "fa-solid fa-leaf"
            },
            {
                time: "10:00",
                type: "point",
                title: "⛩️ Templo Tenryu-ji: Entrada por el jardín norte.",
                icon: "fa-solid fa-pagoda"
            },
            {
                time: "11:30",
                type: "point",
                title: "🌉 Puente Togetsukyo: Paseo fotográfico.",
                icon: "fa-solid fa-bridge"
            },
            {
                time: "12:30",
                type: "point",
                title: "🐒 Parque Iwatayama: Subida a la colina (20 min).",
                icon: "fa-solid fa-mountain"
            },
            {
                time: "14:00",
                type: "gap",
                title: "🍱 Almuerzo: Zona Riverside (Arashiyama Yoshimura)",
                icon: "fa-solid fa-utensils"
            },
            {
                time: "15:30",
                type: "point",
                title: "🧩 Tarde Opcional: Ryoan-ji / Otagi.",
                icon: "fa-solid fa-map-signs"
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
            { time: "08:30", title: "Bosque de Bambú", desc: "Inicio de la ruta. (Base)" },
            { time: "10:00", title: "Tenryu-ji", desc: "Jardín zen y dragón celestial. (Base)" },
            { time: "11:30", title: "Puente Togetsukyo", desc: "Icono de Arashiyama. (Base)" },
            { time: "12:30", title: "Iwatayama", desc: "Vistas y macacos. (Base)" }
        ],

        prices: {
            transport: "500 JPY",
            entrances: "1.100 JPY (Base)",
            food: "~3.000 JPY",
            total: "~4.600 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Naturaleza y templos en el oeste de Kioto.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Bosque de Bambú",
                    description: "Paseo icónico entre tallos gigantes. (Gratis)",
                    image: "images/dia8-bambu.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Bosque de Bambú</h3>
                        <p>El sonido del viento entre los tallos es considerado uno de los '100 sonidos a preservar' por el gobierno japonés.</p>
                    `
                },
                {
                    id: "b2",
                    time: "10:00",
                    title: "Templo Tenryu-ji",
                    description: "El dragón celestial. Jardín Sogenchi con técnica Shakkei. (500 JPY)",
                    image: "images/dia8-bambu.jpg",
                    price: "500 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-dragon"></i> Templo Tenryu-ji</h3>
                        <p>Principal templo de la escuela Rinzai. Su jardín zen del s. XIV usa las montañas como paisaje prestado.</p>
                    `
                },
                {
                    id: "b3",
                    time: "11:30",
                    title: "Puente Togetsukyo",
                    description: "El puente que 'cruza la luna'. Símbolo de Arashiyama. (Gratis)",
                    image: "images/arashiyama.png",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bridge"></i> Puente Togetsukyo</h3>
                        <p>Paseo fotográfico obligatorio por este puente de madera cargado de historia.</p>
                    `
                },
                {
                    id: "b4",
                    time: "12:30",
                    title: "Parque Iwatayama",
                    description: "Reserva de macacos japoneses con las mejores vistas panorámicas. (600 JPY)",
                    image: "images/dia8-bambu.jpg",
                    price: "600 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-monkey"></i> Iwatayama Monkey Park</h3>
                        <p>Tras una subida de 20 min, llegaréis a la cima donde habitan más de 120 macacos en libertad y se ve todo Kioto.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Opción A: Ryoan-ji (Jardín Zen)",
                time: "15:30",
                description: "A las 15:30. Desde Arashiyama: Tren Randen (20 min) hasta Ryoan-ji-michi. (500 JPY)",
                price: "500 JPY",
                image: "images/dia7-ginkakuji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-peace"></i> Ryoan-ji</h3>
                    <p>Famoso por su jardín seco karesansui. El lugar perfecto para terminar el día en contemplación.</p>
                    <div style="background:rgba(0,243,255,0.05); border:1px solid var(--neon-blue); padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:var(--neon-blue);"><i class="fa-solid fa-train"></i> Conexión Randen:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">De Arashiyama a Ryoan-ji usando el tranvía histórico.</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "ENLACE: TRANVÍA RANDEN",
                        time: "15:30 - 17:00",
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
            },
            {
                id: "c2",
                title: "Opción B: Otagi Nenbutsu-ji",
                time: "16:00",
                description: "A las 16:00. Desde Arashiyama: Bus 94 (10 min) hacia las 1200 estatuas. (300 JPY)",
                price: "300 JPY",
                image: "images/dia8-bambu.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Otagi Nenbutsu-ji</h3>
                    <p>El templo de las 1200 caras. Una de las experiencias más creativas y menos masificadas de Kioto.</p>
                    <div style="background:rgba(255,140,0,0.05); border:1px solid #ff8c00; padding:10px; border-radius:8px; margin-top:10px;">
                        <h4 style="margin:0; font-size:0.8rem; color:#ff8c00;"><i class="fa-solid fa-bus"></i> Bus Táctico:</h4>
                        <p style="margin:5px 0 0; font-size:0.75rem;">Bus 94 (10 min) desde el centro de Arashiyama.</p>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "ENLACE: OPERACIÓN SORPRESA",
                        time: "16:00 - 17:30",
                        description: "Visita relámpago a las 1200 esculturas búdicas.",
                        buttons: [
                            {
                                text: "Arashiyama ➔ Otagi",
                                link: "https://www.google.com/maps/dir/?api=1&origin=Arashiyama+Station&destination=Otagi+Nenbutsu-ji+Temple&travelmode=transit"
                            }
                        ],
                        tacticalGuideId: "mission_otagi"
                    }
                ]
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
                title: "⛩️ Fushimi Inari: Infiltración temprana. Caminata: Mirador Yotsutsuji.",
                icon: "fa-solid fa-torii-gate"
            },
            {
                time: "11:30",
                type: "transit",
                title: "🚇 Traslado: JR Inari ➔ Kyoto Station ➔ Metro Shijo",
                price: "150 + 220 JPY",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/Inari+Station/Shijo+Station/",
                tacticalGuideId: "mission_kyoto_center_link"
            },
            {
                time: "12:30",
                type: "point",
                title: "🍱 Mercado de Nishiki: Almuerzo y tapeo.",
                icon: "fa-solid fa-bowl-food"
            },
            {
                time: "14:30",
                type: "transit",
                title: "🚌 Salto al Norte: Bus 12 hacia Kinkaku-ji",
                price: "230 JPY",
                timeLabel: "35 min",
                link: "https://www.google.com/maps/dir/Nishiki+Market/Kinkaku-ji/",
                tacticalGuideId: "mission_kinkakuji_bus"
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
            { time: "08:00", title: "Fushimi Inari", desc: "Miles de toriis rojos. (Base)" },
            { time: "12:30", title: "Mercado Nishiki", desc: "Gastronomía local. (Base)" },
            { time: "15:30", title: "Kinkaku-ji", desc: "El pabellón de oro. (Base)" }
        ],

        prices: {
            transport: "~850 JPY",
            entrances: "0 (Fushimi) + 500 (Kinkaku-ji)",
            food: "~3.000 JPY",
            total: "~4.350 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Ruta de los Contrastes",
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
                        <h3><i class="fa-solid fa-torii-gate"></i> Fushimi Inari</h3>
                        <p><strong>Guía Táctica:</strong> Subid al menos 20 min por las toriis; la mayoría de turistas se queda al principio. El mirador Yotsutsuji ofrece las mejores vistas.</p>
                    `
                },
                {
                    id: "b2",
                    time: "12:30",
                    title: "Mercado de Nishiki",
                    description: "La despensa de Kioto. Un paraíso para los amantes de la comida callejera. (Variable)",
                    image: "images/nishiki_market.png",
                    price: "Variable",
                    link: "https://www.google.com/maps/search/Nishiki+Market+Kyoto/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bowl-food"></i> Mercado de Nishiki</h3>
                        <p><strong>Guía Táctica:</strong> Buscad el puesto de 'Tako Tamago' (mini pulpo con huevo). Es la foto gastronómica del viaje.</p>
                    `
                },
                {
                    id: "b3",
                    time: "15:30",
                    title: "Kinkaku-ji",
                    description: "El Pabellón Dorado. Una reliquia de oro que brilla sobre un estanque espejo. (500 JPY)",
                    image: "images/kinkakuji.png",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/dir/Nishiki+Market/Kinkaku-ji/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-sparkles"></i> Kinkaku-ji</h3>
                        <p><strong>Guía Táctica:</strong> La luz de la tarde (15:30-16:30) es la mejor para ver el reflejo del oro en el estanque.</p>
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
        image: "images/dia10-portada.jpg",

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
                    image: "images/dia10-portada.jpg",
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
        ]
    },

    // --- DÍA 11: ALPES JAPONESES (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 11, type: "travel",
        date: "Jue, 6 Agosto", title: "⛰️ Alpes: Relax en el Ryokan",
        coords: [36.259, 137.551], zoom: 13,
        hotel: "Kazeya Ryokan",
        hotelImage: "images/hotel-kazeya-ryokan.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kazeya+Ryokan+Shin-Hotaka+Onsen",
        image: "images/okuhida_ryokan.png",

        logistics: [
            { title: "Equipaje", text: "Solo mochilas de mano. Las maletas grandes van por Takkyubin." },
            { title: "Onsen", text: "Ducharse antes de entrar. Tatuajes: consultar política (o reservar privado)." }
        ],

        timeline: [
            { time: "09:00", title: "Tren a Takayama", desc: "Wide View Hida. Vistas espectaculares. (Base)" },
            { time: "15:30", title: "Check-in Ryokan", desc: "Té verde, yukata y onsen. (Base)" },
            { time: "19:00", title: "Cena Kaiseki", desc: "Banquete tradicional con Ternera de Hida. (Base)" }
        ],

        prices: {
            transport: "~13.000 JPY (Trenes y buses)",
            food: "Incluida en Ryokan",
            total: "~13.000 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de viaje escénico y relax total en un Ryokan tradicional con aguas termales.",
            events: [
                {
                    id: "b1",
                    time: "15:30",
                    title: "Llegada al Ryokan",
                    description: "Kazeya Ryokan. Poneos el Yukata y disfrutad del té de bienvenida.",
                    image: "images/dia11-zen.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-hot-tub-person"></i> Llegada al Ryokan Kazeya</h3>
                        <p>Inmersión total en la cultura japonesa. Dejad los zapatos en la entrada y entrad en un mundo de tatami y silencio.</p>
                        <ul>
                            <li><i class="fa-solid fa-vest"></i> <strong>Yukata:</strong> Podéis usarlo en todo el hotel, incluso para cenar.</li>
                            <li><i class="fa-solid fa-soap"></i> <strong>Onsen:</strong> Recordad ducharos bien antes de entrar al agua.</li>
                        </ul>
                    `
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
                    image: "images/dia11-zen.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Banquete Kaiseki</h3>
                        <p>Cena tradicional de múltiples platos presentados como obras de arte. Incluye la famosa ternera de Hida, una de las mejores de Japón.</p>
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
                description: "Baño mixto al aire libre junto al río. Experiencia salvaje.",
                price: "Gratis / Donación",
                image: "images/dia11-shinhotaka.jpg"
            },
            {
                id: "c2",
                title: "Teleférico Shinhotaka",
                time: "15:45",
                description: "Vistas alpinas desde las nubes (si llegáis a tiempo).",
                price: "~2.900 JPY",
                image: "images/dia11-teleferico.jpg"
            }
        ]
    },

    // --- DÍA 12: TAKAYAMA (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 12, type: "stay",
        date: "Vie, 7 Agosto", title: "🏔️ Takayama: Japón Feudal",
        coords: [36.146, 137.252], zoom: 13,
        hotel: "Residence Hotel Takayama Station",
        hotelImage: "images/hotel-residence-takayama.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Residence+Hotel+Takayama+Station",
        image: "images/takayama.png",

        logistics: [
            { title: "Transporte", text: "Bus desde el Ryokan a Takayama (1h)." },
            { title: "Andar", text: "Todo el centro se recorre a pie." }
        ],

        timeline: [
            { time: "12:15", title: "Llegada Takayama", desc: "Regreso desde el Ryokan. (Base)" },
            { time: "12:30", title: "Almuerzo Hida Beef", desc: "La mejor carne de Japón. (Base)" },
            { time: "14:30", title: "Takayama Jinya", desc: "Oficina histórica del Shogun. (Base)" },
            { time: "16:00", title: "Sanmachi Suji", desc: "Casco antiguo conservado. (Base)" }
        ],

        prices: {
            transport: "~2.200 JPY (Bus)",
            food: "~5.000 JPY (Carne Hida de calidad)",
            total: "~7.200 JPY (Base)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Explorar el casco antiguo mejor conservado y comer la famosa ternera de Hida.",
            events: [
                {
                    id: "b1",
                    time: "12:30",
                    title: "Almuerzo: Ternera de Hida",
                    description: "La joya gastronómica de la región (Yakiniku).",
                    image: "images/dia12-jinya.jpg",
                    price: "~4.000-6.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-drumstick-bite"></i> Hida Beef Yakiniku</h3>
                        <p>Considerada por muchos superior a la de Kobe por su marmoleo y sabor intenso. Se cocina a la parrilla en tu mesa.</p>
                    `
                },
                {
                    id: "b2",
                    time: "14:30",
                    title: "Takayama Jinya",
                    description: "Única oficina del gobierno del Shogun que queda en pie.",
                    image: "images/dia12-jinya.jpg",
                    price: "440 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-landmark"></i> Takayama Jinya</h3>
                        <p>Centro administrativo del periodo Edo. Incluye salas de tatami, almacenes de arroz y el pabellón de justicia.</p>
                    `
                },
                {
                    id: "b3",
                    time: "16:00",
                    title: "Barrio Sanmachi Suji",
                    description: "Corazón feudal de la ciudad con casas de madera negra.",
                    image: "images/dia12-jinya.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-house-chimney"></i> Sanmachi Suji</h3>
                        <p>Paseo por las calles históricas de Takayama. Buscad las bodegas de sake con sus Sugidamas (bolas de cedro) en la entrada.</p>
                    `
                },
                {
                    time: "14:30",
                    title: "Tarde Libre / Opcionales",
                    description: "Visita al Jinya, Museos o paseo Higashiyama.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Takayama Jinya",
                time: "14:30",
                description: "Antigua oficina del gobierno del Shogun. Salas de tatami e historia.",
                price: "440 JPY",
                image: "images/dia12-jinya.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "Yatai Kaikan",
                time: "15:00",
                description: "Museo de las carrozas del festival (Patrimonio UNESCO).",
                price: "1.000 JPY",
                image: "images/dia12-yatai.jpg"
            },
            {
                id: "c3",
                title: "Showa-kan",
                time: "16:00",
                description: "Museo retro de los años 50. Nostalgia pura.",
                price: "800 JPY",
                image: "images/dia12-yatai.jpg"
            },
            {
                id: "c4",
                title: "Higashiyama Walk",
                time: "16:00",
                description: "Paseo por los templos de la colina. Muy tranquilo.",
                price: "Gratis",
                image: "images/dia12-higashiyama.jpg"
            }
        ]
    },

    // --- DÍA 13: KAWAGUCHIKO (Llegada) ---
    {
        day: 13, type: "travel",
        date: "Sáb, 8 Agosto", title: "🗻 Kawaguchiko: El Monte Fuji",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia13-portada.jpg",

        logistics: [
            { title: "Bus", text: "Bus Expreso Nohi desde Takayama. Reservad 1 mes antes." },
            { title: "Coche", text: "Recogida en Budget Rent a Car al llegar." }
        ],

        timeline: [
            { time: "08:30", title: "Bus a Kawaguchiko", desc: "Trayecto de 4h 45min cruzando los Alpes. (Base)" },
            { time: "13:15", title: "Llegada Kawaguchiko", desc: "Primera vista del Fuji. (Base)" },
            { time: "13:30", title: "Recogida Coche", desc: "Libertad total para explorar la zona. (Base)" },
            { time: "15:00", title: "Check-in & Relax", desc: "Dejad maletas y salid a explorar. (Base)" }
        ],

        prices: {
            transport: "Incluido en pase / Alquiler coche aparte",
            total: "Base"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Llegada a la región de los Cinco Lagos y recogida del coche de alquiler.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Bus Expreso a Kawaguchiko",
                    description: "Fuji Five Lakes Bus. Travesía de 5 horas.",
                    price: "~5.000 JPY"
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "Recogida Coche (Budget)",
                    description: "Coche de alquiler para explorar los lagos con libertad.",
                    image: "images/dia13-portada.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-car"></i> Expedición Fuji: El Coche</h3>
                        <p>Recogida en Budget Rent a Car. Conduciremos por la izquierda. ¡Iván, serás el copiloto oficial!</p>
                    `
                },
                {
                    time: "15:00",
                    title: "Check-in y Preparativos",
                    description: "Dejar maletas y planificar la tarde.",
                    type: "gap"
                },
                {
                    id: "b3",
                    time: "17:30",
                    title: "Atardecer en el Lago",
                    description: "Paseo por la orilla norte (Oishi Park).",
                    image: "images/dia13-portada.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain-sun"></i> Fuji al Atardecer</h3>
                        <p>Primera gran vista del volcán reflejado en las aguas del lago Kawaguchi.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Pagoda Chureito",
                time: "16:00",
                description: "La foto más famosa de Japón. 400 escalones, pero vale la pena.",
                price: "Gratis",
                image: "images/dia13-chureito.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "Teleférico Kachi Kachi",
                time: "15:30",
                description: "Subida rápida para vistas panorámicas del lago y el volcán.",
                price: "900 JPY",
                image: "images/dia13-ropeway.jpg"
            },
            {
                id: "c3",
                title: "Oshino Hakkai",
                time: "16:30",
                description: "Pueblo tradicional con estanques de agua pura. Mágico al atardecer.",
                price: "Gratis",
                image: "images/dia13-oshino.jpg"
            },
            {
                id: "c4",
                title: "Lago Saiko",
                time: "16:00",
                description: "El lago del silencio. Naturaleza salvaje y menos turistas.",
                price: "Gratis",
                image: "images/dia13-saiko.jpg"
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
            { title: "Transporte", text: "Shuttle bus obligatorio desde el parking del volcán en agosto." }
        ],

        timeline: [
            { time: "08:00", title: "Excursión al Fuji", desc: "Acercarse al cráter o trekking RYUGATAKE. (Base)" }
        ],

        prices: {
            transport: "Gasolina + Shuttle (~2.500 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Tocar el volcán o verlo desde el mejor mirador alpino.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Aproximación al Fuji",
                    description: "Elegid entre subir a los 2300m o hacer el trekking del billete de 1000 yenes.",
                    image: "images/dia15-fuji.jpg",
                    price: "Variable",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Experiencia Fuji</h3>
                        <p>Día dedicado al volcán. Podéis subir a la 5ª estación (estilo turista) o hacer el trekking Ryugatake (estilo explorador) para ver la vista del billete de 1000 yenes.</p>
                    `,
                    video: "https://www.youtube.com/watch?v=Fst5jY_w7rM"
                },
                {
                    time: "13:00",
                    title: "Tiempo Libre / Almuerzo",
                    description: "Pausa para comer y descansar.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Trekking Ryugatake",
                time: "08:00",
                description: "Senderismo con vistas frontales brutales. La vista del billete de 1000 yenes.",
                price: "Gratis",
                image: "images/dia15-ryugatake.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "5ª Estación Fuji",
                time: "09:00",
                description: "Llegar a los 2300m en bus. Tiendas, santuario y aire alpino.",
                price: "2.500 JPY",
                image: "images/dia15-fuji.jpg"
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
            { title: "Coche", text: "Tened el coche disponible para las cascadas." }
        ],

        timeline: [
            { time: "09:30", title: "Santuario Sengen", desc: "Misticismo entre cedros milenarios. (Base)" },
            { time: "12:00", title: "Hoto Noodles", desc: "Almuerzo tradicional de la zona. (Base)" }
        ],

        prices: {
            transport: "Gasolina",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de carretera para explorar los tesoros culturales y naturales alrededor del volcán.",
            events: [
                {
                    id: "b1",
                    time: "09:00",
                    title: "Kitaguchi Hongu Sengen Jinja",
                    description: "Santuario histórico. Inicio original de la peregrinación al Fuji.",
                    image: "images/dia14-sengen.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-torii-gate"></i> Santuario Sengen Jinja</h3>
                        <p>Bosque de cedros gigantes y linternas de musgo. Es el santuario más solemne de la zona.</p>
                    `
                },
                {
                    id: "b2",
                    time: "12:00",
                    title: "Almuerzo Hoto Noodles",
                    description: "Plato típico local: fideos planos en sopa de miso y calabaza.",
                    image: "images/dia14-honcho.jpg",
                    price: "~1.500 JPY"
                },
                {
                    time: "14:00",
                    title: "Tarde de Carretera / Lagos",
                    description: "Tiempo para las cascadas o cuevas.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Cascada Shiraito",
                time: "14:00",
                description: "Patrimonio UNESCO. Cientos de hilos de agua. (1h en coche).",
                price: "300 JPY",
                image: "images/dia14-shiraito.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "Iyashi no Sato",
                time: "09:30",
                description: "Pueblo museo de casas de paja. Alquiler de armaduras samurái.",
                price: "500 JPY",
                image: "images/dia15-iyashi.jpg"
            },
            {
                id: "c3",
                title: "Calle Honcho",
                time: "11:00",
                description: "La foto icónica de la calle comercial con el Fuji gigante al fondo.",
                price: "Gratis",
                image: "images/dia14-honcho.jpg"
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
            { title: "Coche", text: "Llenad depósito y devolved en Budget (10:30). Guardad ticket." },
            { title: "Transporte", text: "Tren Fuji Excursion directo a Shinjuku (recomendado) o Highway Bus." },
            { title: "Equipaje", text: "Maletas grandes enviadas desde Kioto os estarán esperando en el hotel." }
        ],

        timeline: [
            { time: "10:30", title: "Devolución Coche", desc: "Llenad depósito. Devolución en Budget Kawaguchiko. (Base)" },
            { time: "11:00", title: "Traslado a Tokio", desc: "Tren Fuji Excursion o Highway Bus a Shinjuku. (Base)" },
            { time: "13:30", title: "Llegada Shinjuku", desc: "Estación más concurrida del mundo. Taxis al hotel. (Base)" },
            { time: "15:00", title: "Check-in", desc: "Recuperad maletas grandes. Descansad 1 hora. (Base)" },
            { time: "17:00", title: "Kagurazaka", desc: "Paseo por el barrio. Santuario Akagi. (Base)" }
        ],

        prices: {
            transport: "~4.000 JPY (Tren) + Taxi",
            total: "Base"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Regreso desde los Alpes/Fuji a la jungla de neón.",
            events: [
                {
                    id: "b1",
                    time: "10:30",
                    title: "Devolución Coche",
                    description: "En Kawaguchiko. Guardad el ticket de gasolina.",
                    image: "images/dia16-coche.jpg",
                    price: "Llenar depósito",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gas-pump"></i> Devolución del Vehículo</h3>
                        <p>Llenad el depósito en la gasolinera más cercana a Budget. ¡Misión cumplida en la carretera!</p>
                    `
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Tren/Bus a Tokio",
                    description: "Rumbo a Shinjuku. Adiós a las montañas.",
                    image: "images/tokio_skyline.png",
                    price: "~4.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Rumbo a la Capital</h3>
                        <p>Traslado directo a la estación de Shinjuku. Recordad que vuestras maletas grandes os esperan ya en el hotel de Tokio.</p>
                    `
                },
                {
                    time: "14:00",
                    title: "Check-in y Descanso",
                    description: "Llegada al Hotel Metropolitan Edmont.",
                    type: "gap"
                },
                {
                    id: "b3",
                    time: "17:00",
                    title: "Kagurazaka",
                    description: "Paseo por el barrio francés/geisha. Santuario Akagi.",
                    image: "images/dia16-kagurazaka.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bridge"></i> Barrio de Kagurazaka</h3>
                        <p>Un laberinto de callejones que esconden templos modernos y restaurantes exclusivos. Es el barrio donde os alojáis.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Vistas Tocho",
                time: "18:00",
                description: "Edificio del Gobierno Metropolitano. Vistas gratis desde la planta 45.",
                price: "Gratis",
                image: "images/dia18-tocho.jpg"
            }
        ]
    },

    // --- DÍA 17: ASAKUSA (Tradición) ---
    {
        day: 17, type: "stay",
        date: "Mié, 12 Agosto", title: "🗼 Asakusa y Skytree",
        coords: [35.710, 139.810], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia17-asakusa.jpg",

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Especialmente en Senso-ji. Madrugar ayuda." },
            { title: "Reservas", text: "Reservad entrada web para Skytree para evitar colas de 1h." }
        ],

        timeline: [
            { time: "09:30", title: "Senso-ji", desc: "Templo más antiguo. Linterna roja. (Base)" },
            { time: "11:30", title: "Río Sumida", desc: "Vistas del skyline. (Base)" },
            { time: "12:00", title: "Skytree / Ueno", desc: "Elegid complemento." }
        ],

        prices: {
            transport: "~400 JPY (Metro)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "El Tokio antiguo en Asakusa y las vistas del río Sumida.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Templo Senso-ji",
                    description: "El templo más antiguo. Linterna roja gigante y humo sagrado.",
                    image: "images/dia17-sensoji.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-temple"></i> Templo Senso-ji</h3>
                        <p>El corazón de Asakusa. Cruzad la puerta Kaminarimon y recorred la calle Nakamise.</p>
                        <ul>
                            <li><i class="fa-solid fa-wind"></i> <strong>Iván Reto:</strong> Échate el humo del incienso sobre la cabeza. ¡Dicen que te hace más inteligente!</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=Knd_N-v_B3Q"
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Río Sumida",
                    description: "Paseo con vistas al skyline y la 'caca dorada' de Asahi.",
                    image: "images/dia17-sumida.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-water"></i> Ribera del Sumida</h3>
                        <p>Vistas espectaculares de la Tokyo Skytree y el edificio de Asahi Beer.</p>
                    `
                },
                {
                    time: "13:00",
                    title: "Tiempo de Almuerzo",
                    description: "Elegid entre comida tradicional o centros comerciales.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Tokyo Skytree",
                time: "12:30",
                description: "La torre más alta del mundo. Vistas infinitas.",
                price: "2.100 JPY",
                image: "images/dia17-skytree.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "Calle Kappabashi",
                time: "15:00",
                description: "Paraíso de los chefs. Cuchillos japoneses y comida de plástico.",
                price: "Gratis",
                image: "images/dia17-kappabashi.jpg"
            },
            {
                id: "c3",
                title: "Museo Nacional (Ueno)",
                time: "14:00",
                description: "Tesoros nacionales, espadas samurái y arte antiguo.",
                price: "1.000 JPY",
                image: "images/dia17-ueno.jpg"
            },
            {
                id: "c4",
                title: "Hoppy Street",
                time: "19:00",
                description: "Cena de tapas japonesas (Izakaya) en la calle más animada de Asakusa.",
                price: "3.000 JPY",
                image: "images/dia17-hoppy.jpg"
            },
            {
                id: "c5",
                title: "Bandai & Hanayashiki",
                time: "15:00",
                description: "Figuras de acción y parque de atracciones retro.",
                price: "Varía",
                image: "images/dia17-bandai.jpg"
            }
        ]
    },

    // --- DÍA 18: SHIBUYA (Juventud) ---
    {
        day: 18, type: "stay",
        date: "Jue, 13 Agosto", title: "🚦 Shibuya y Harajuku",
        coords: [35.659, 139.701], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/shibuya_crossing.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥🔥 MUY ALTO. Shibuya es el caos." },
            { title: "Reservas", text: "Reservad Shibuya Sky para las 17:30 (atardecer)." }
        ],

        timeline: [
            { time: "09:30", title: "Meiji Jingu", desc: "Santuario en el bosque. (Base)" },
            { time: "11:00", title: "Harajuku?", desc: "Opcional (Complemento)." },
            { time: "15:00", title: "Shibuya Crossing", desc: "Cruce famoso + Hachiko. (Base)" }
        ],

        prices: {
            transport: "~400 JPY (Tren)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "El corazón palpitante de Tokio. Tradición imperial y caos moderno.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Meiji Jingu",
                    description: "Santuario imperial en un bosque denso. Paz absoluta.",
                    image: "images/dia18-meiji.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tree"></i> Santuario Meiji Jingu</h3>
                        <p>Entrad por Harajuku. Un bosque de 100.000 árboles plantados a mano rodea este santuario sintoísta.</p>
                        <p><strong>Curiosidad:</strong> Fijaos en los barriles de Sake y los barriles de vino francés (donaciones al emperador).</p>
                    `
                },
                {
                    time: "11:30",
                    title: "Tiempo de Compras / Harajuku",
                    description: "Explora Takeshita Dori o Cat Street.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "15:00",
                    title: "Shibuya Crossing",
                    description: "El paso de peatones más famoso del mundo. Estatua de Hachiko.",
                    image: "images/dia18-shibuya.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-people-arrows"></i> Cruce de Shibuya</h3>
                        <p>3.000 personas cruzan cada vez que el semáforo se pone en verde. ¡Cruza tú también!</p>
                        <ul>
                            <li><i class="fa-solid fa-dog"></i> <strong>Hachiko:</strong> No olvides saludar a la estatua del perro más fiel de Japón.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=fXyDglw_0f8"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Shibuya Sky",
                time: "18:00",
                description: "Atardecer desde la azotea al aire libre. Imprescindible reservar.",
                price: "2.200 JPY",
                image: "images/dia18-sky.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "Harajuku (Takeshita)",
                time: "11:00",
                description: "Moda loca y algodón de azúcar arcoíris. Muy concurrido.",
                price: "Gratis",
                image: "images/dia18-harajuku.jpg"
            },
            {
                id: "c3",
                title: "Shinjuku Gyoen",
                time: "13:00",
                description: "Oasis de paz. Jardín japonés perfecto para picnic.",
                price: "500 JPY",
                image: "images/dia18-shinjuku-gyoen.jpg"
            },
            {
                id: "c4",
                title: "Kabukicho (Godzilla)",
                time: "20:30",
                description: "El barrio que nunca duerme. Neones y el Godzilla gigante.",
                price: "Gratis",
                image: "images/dia18-kabukicho.jpg"
            },
            {
                id: "c5",
                title: "Omotesando",
                time: "12:00",
                description: "Arquitectura de lujo (Prada, Dior) cerca de Harajuku.",
                price: "Gratis",
                image: "images/dia18-omotesando.jpg"
            }
        ]
    },

    // --- DÍA 19: AKIHABARA Y GINZA ---
    {
        day: 19, type: "stay",
        date: "Vie, 14 Agosto", title: "🎮 Akihabara y Ginza",
        coords: [35.698, 139.773], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/akihabara.png",

        logistics: [
            { title: "Horarios", text: "Tiendas en Akihabara no abren hasta las 10:00-11:00." },
            { title: "Multitudes", text: "🔥🔥 MEDIO. Akihabara se llena por la tarde." }
        ],

        timeline: [
            { time: "10:15", title: "Akihabara", desc: "Electric Town. Anime y figuras. (Base)" },
            { time: "13:30", title: "Roast Beef Ohno", desc: "Almuerzo gourmet en Akihabara. (Base)" },
            { time: "15:30", title: "Ginza Luxury", desc: "La milla de oro. Showrooms. (Base)" },
            { time: "18:00", title: "Teatro Kabuki-za", desc: "Fachada mágica al atardecer. (Base)" }
        ],

        prices: {
            transport: "~400 JPY (Tren JR)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Contrastes de Tokio: Cultura Otaku y Lujo en Ginza.",
            events: [
                {
                    id: "b1",
                    time: "10:15",
                    title: "Akihabara Electric Town",
                    description: "Paraíso geek. Anime, figuras y videojuegos retro.",
                    image: "images/dia19-akihabara.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gamepad"></i> Akihabara</h3>
                        <p>Visitad Radio Kaikan para figuras y Super Potato para juegos antiguos. Las tiendas abren tarde, por eso empezamos a las 10:15.</p>
                        <p><strong>Iván Reto:</strong> Sube a la planta arcade de Super Potato y juega una partida de Street Fighter original.</p>
                    `
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "Almuerzo: Roast Beef Ohno",
                    description: "Carne de wagyu asada en capas. Imprescindible en la zona.",
                    image: "images/dia19-akihabara.jpg",
                    price: "~2.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Roast Beef Ohno</h3>
                        <p>Famoso por sus cuencos de arroz con carne asada que parecen una montaña. Tened paciencia con la cola, vale la pena.</p>
                    `
                },
                {
                    id: "b3",
                    time: "15:30",
                    title: "Ginza Luxury",
                    description: "Rascacielos de cristal y tiendas exclusivas. Showroom Nissan.",
                    image: "images/dia19-ginza.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gem"></i> Distrito de Ginza</h3>
                        <p>Elegancia pura. Visitad el edificio Ginza Six y disfrutad de su jardín en la azotea.</p>
                    `
                },
                {
                    id: "b4",
                    time: "18:00",
                    title: "Teatro Kabuki-za",
                    description: "La joya arquitectónica de Ginza al atardecer.",
                    image: "images/dia19-ginza.jpg",
                    price: "Gratis (Fachada)",
                    fullDesc: `
                        <h3><i class="fa-solid fa-masks-theater"></i> Teatro Kabuki-za</h3>
                        <p>Incluso si no entráis a ver una función, la fachada iluminada al atardecer es una de las vistas más bonitas de Tokio.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Maid Café",
                time: "12:00",
                description: "Experiencia única (y algo vergonzosa). Maidreamin.",
                price: "3.000 JPY",
                image: "images/dia19-maid.jpg"
            },
            {
                id: "c2",
                title: "Palacio Imperial",
                time: "09:00",
                description: "Jardines del Este (gratis). Historia samurái ante los rascacielos.",
                price: "Gratis",
                image: "images/dia19-palacio.jpg"
            },
            {
                id: "c3",
                title: "Mercado Tsukiji",
                time: "08:30",
                description: "Desayuno de sushi fresco en el antiguo mercado exterior.",
                price: "3.000 JPY",
                image: "images/dia19-tsukiji.jpg"
            },
            {
                id: "c4",
                title: "Harry Potter Tour",
                time: "10:00",
                description: "Warner Bros Studio Tour. (Imprescindible reservar meses antes).",
                price: "6.500 JPY",
                image: "images/dia19-harrypotter.jpg"
            },
            {
                id: "c5",
                title: "Tokyo Station",
                time: "17:00",
                description: "Fachada de ladrillo y Character Street (tiendas de personajes).",
                price: "Gratis",
                image: "images/dia19-tokyo-station.jpg"
            }
        ]
    },


    // --- DÍA 20: TEAMLAB Y ODAIBA ---
    {
        day: 20, type: "stay",
        date: "Sáb, 15 Agosto", title: "🌊 TeamLab y Odaiba",
        coords: [35.630, 139.776], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/teamlab.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Es sábado." },
            { title: "Ropa", text: "TeamLab Planets: Descalzos. Pantalones remangables." }
        ],

        timeline: [
            { time: "09:30", title: "TeamLab (Opcional)", desc: "Si tenéis entradas. (Complemento)" },
            { time: "11:30", title: "Monorraíl", desc: "Vistas panorámicas. (Base)" },
            { time: "12:00", title: "Odaiba", desc: "Gundam y Estatua Libertad. (Base)" }
        ],

        prices: {
            transport: "~600 JPY (Metro + Monorraíl)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "La isla artificial del futuro en la bahía de Tokio.",
            events: [
                {
                    id: "b1",
                    time: "11:30",
                    title: "Monorraíl Yurikamome",
                    description: "Vistas panorámicas de la bahía y el Rainbow Bridge.",
                    image: "images/dia20-monorail.jpg",
                    price: "320 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Monorraíl sin conductor</h3>
                        <p>Elegid el primer vagón. La vista cruzando el puente hacia Odaiba es espectacular.</p>
                    `
                },
                {
                    id: "b2",
                    time: "12:00",
                    title: "Odaiba Seaside",
                    description: "El Gundam gigante y la Estatua de la Libertad de Tokio.",
                    image: "images/dia20-odaiba.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> Gundam Unicorn</h3>
                        <p>No os perdáis la transformación del robot gigante (cada hora). Es un icono de Odaiba.</p>
                    `
                },
                {
                    time: "14:00",
                    title: "Tarde Libre en la Isla",
                    description: "Centros comerciales, paseos o TeamLab.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "TeamLab Planets",
                time: "09:30",
                description: "Arte digital inmersivo (Agua y Luz). Imprescindible reservar.",
                price: "3.800 JPY",
                image: "images/dia20-teamlab.jpg",
                recommended: true
            },
            {
                id: "c2",
                title: "DisneySea (Día Completo)",
                time: "08:00",
                description: "El mejor parque Disney del mundo. (Sustituye al resto del día).",
                price: "9.000 JPY",
                image: "images/dia20-disneysea.jpg"
            },
            {
                id: "c3",
                title: "Joypolis / Legoland",
                time: "14:00",
                description: "Parques temáticos indoor en Decks Tokyo Beach.",
                price: "Varía",
                image: "images/dia20-joypolis.jpg"
            },
            {
                id: "c4",
                title: "Spa Izumi Tenku",
                time: "17:00",
                description: "Baños termales con vistas a la ciudad.",
                price: "2.000 JPY",
                image: "images/dia20-spa.jpg"
            },
            {
                id: "c5",
                title: "Mercado Toyosu",
                time: "08:00",
                description: "El nuevo mercado de pescado. Subasta de atún.",
                price: "Gratis",
                image: "images/dia20-toyosu.jpg"
            }
        ]
    },

    // --- DÍA 21: NAKANO (Cultura) ---
    {
        day: 21, type: "stay",
        date: "Dom, 16 Agosto", title: "🎯 Nakano: Coleccionismo",
        coords: [35.710, 139.666], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/nakano_broadway.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥 MEDIO." },
            { title: "Transporte", text: "Metro Línea Tozai (Azul Cielo) desde Iidabashi a Nakano (15 min)." }
        ],

        timeline: [
            { time: "10:30", title: "Nakano Broadway", desc: "Mandarake. Paraíso retro. (Base)" },
            { time: "13:30", title: "Helado Gigante", desc: "Daily Chico. (Base)" },
            { time: "15:00", title: "Tarde Libre", desc: "Elegid complemento." }
        ],

        prices: {
            transport: "~400 JPY (Metro)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Paraíso del coleccionismo y cultura retro.",
            events: [
                {
                    id: "b1",
                    time: "10:30",
                    title: "Nakano Broadway",
                    description: "Centro comercial de subculturas. Mandarake (tiendas especializadas).",
                    image: "images/dia21-nakano.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> Nakano Broadway</h3>
                        <p>El paraíso de los coleccionistas. Buscad Mandarake para figuras, robots y merchandising vintage de alta calidad.</p>
                    `
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "Helado Gigante",
                    description: "Daily Chico. Helado de 8 pisos (Chi-Chico).",
                    image: "images/dia21-icecream.jpg",
                    price: "~700 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-ice-cream"></i> El Megagelato</h3>
                        <p><strong>Iván Reto:</strong> ¡Cómete el helado de 8 sabores antes de que se derrita! Es el reto más dulce de Tokio.</p>
                    `
                },
                {
                    time: "15:00",
                    title: "Tarde Libre / Compras",
                    description: "Últimos regalos en Nakano o Shinjuku.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Shinjuku Gato 3D",
                time: "14:30",
                description: "Cross Shinjuku Vision. Pantalla 3D curva con un gato gigante hiperrealista.",
                price: "Gratis",
                image: "images/dia21-cat3d.jpg"
            },
            {
                id: "c2",
                title: "Ikebukuro (Otome Rd)",
                time: "15:00",
                description: "Paraíso del anime femenino (Otome). Sunshine City (Pokémon Center).",
                price: "Gratis",
                image: "images/dia21-ikebukuro.jpg"
            },
            {
                id: "c3",
                title: "Tokyo Dome City",
                time: "18:00",
                description: "Parque de atracciones urbano. Montaña rusa Thunder Dolphin.",
                price: "Varía",
                image: "images/dia21-tokyo-dome.jpg"
            },
            {
                id: "c4",
                title: "Museo Ghibli",
                time: "10:00",
                description: "Si tenéis entradas (muy difícil). Mitaka.",
                price: "1.000 JPY",
                image: "images/dia21-ghibli.jpg"
            },
            {
                id: "c5",
                title: "Shimokitazawa",
                time: "16:00",
                description: "Barrio bohemio. Ropa vintage, cafeterías y música en vivo.",
                price: "Gratis",
                image: "images/dia21-shimokitazawa.jpg"
            }
        ]
    },

    // --- DÍA 22: KAMAKURA (Historia) ---
    {
        day: 22, type: "stay",
        date: "Lun, 17 Agosto", title: "🗿 Kamakura y Buda",
        coords: [35.319, 139.546], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/kamakura_buda.png",

        logistics: [
            { title: "Transporte", text: "Tren JR Shonan-Shinjuku Line a Kamakura (1 hora)." },
            { title: "Tren Local", text: "Enoden (tren verde retro) para moverse por la zona." }
        ],

        timeline: [
            { time: "10:00", title: "Gran Buda", desc: "Estatua de bronce al aire libre. (Base)" },
            { time: "11:30", title: "Hasedera", desc: "Templo con vistas al mar. (Base)" },
            { time: "14:00", title: "Tarde Libre", desc: "Elegid complemento (Playa, Chinatown, etc)." }
        ],

        prices: {
            transport: "~1.200 JPY (Tren)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Excursión a la ciudad costera de los samuráis.",
            events: [
                {
                    id: "b1",
                    time: "10:30",
                    title: "Gran Buda de Kamakura",
                    description: "Kotoku-in. Buda gigante de bronce al aire libre.",
                    image: "images/kamakura_buda.png",
                    price: "300 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-om"></i> Daibutsu (Gran Buda)</h3>
                        <p>Una de las estatuas más icónicas de Japón. Originalmente estaba dentro de un templo, pero un tsunami en el s. XV destruyó el edificio y dejó al Buda a la intemperie.</p>
                        <p><strong>Dato curioso:</strong> ¡Se puede entrar dentro de la estatua por 20 JPY!</p>
                    `
                },
                {
                    id: "b2",
                    time: "12:00",
                    title: "Templo Hasedera",
                    description: "Templo de las 11 cabezas de Kannon y jardines con vistas al mar.",
                    image: "images/dia22-kamakura.jpg",
                    price: "400 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-flower"></i> Templo Hasedera</h3>
                        <p>Famoso por su estatua de Kannon y sus miles de pequeñas estatuas Jizo. Las vistas desde la terraza superior hacia la bahía de Sagami son preciosas.</p>
                    `
                },
                {
                    time: "13:30",
                    title: "Almuerzo / Playa",
                    description: "Tiempo para comer en la calle Komachi-dori o pasear por la playa Yuigahama.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Enoshima",
                time: "14:00",
                description: "Isla conectada por puente. Santuarios, cuevas y vistas al mar.",
                price: "Gratis",
                image: "images/dia22-enoshima.jpg"
            },
            {
                id: "c2",
                title: "Yokohama Chinatown",
                time: "18:00",
                description: "El barrio chino más grande de Japón. Cena espectacular.",
                price: "Gratis",
                image: "images/dia22-chinatown.jpg"
            },
            {
                id: "c3",
                title: "Roppongi Hills",
                time: "20:00",
                description: "Mirador Tokyo City View y Museo Mori. Vistas de la Torre de Tokio iluminada.",
                price: "2.000 JPY",
                image: "images/dia22-roppongi.jpg"
            },
            {
                id: "c4",
                title: "Compras Finales (Donki)",
                time: "16:00",
                description: "Don Quijote (Mega Donki). Compras de souvenirs y KitKats.",
                price: "Varía",
                image: "images/dia22-donki.jpg"
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
        image: "images/dia23-portada.jpg",

        logistics: [
            { title: "Aeropuerto", text: "Vuelo desde Haneda (HND) a las 21:45." },
            { title: "Check-out", text: "Podéis dejar las maletas en recepción hasta la hora del traslado." }
        ],

        timeline: [
            { time: "11:00", title: "Mañana Libre", desc: "Últimas compras en Tokio. (Base)" },
            { time: "17:00", title: "Rumbo a Haneda", desc: "Taxi al aeropuerto. (Base)" },
            { time: "21:45", title: "Despegue", desc: "Vuelo TK199 hacia Estambul. (Base)" }
        ],

        prices: {
            transport: "~1.000 JPY (Aeropuerto)",
            total: "Base"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Gestión del equipaje y últimas horas en la capital.",
            events: [
                {
                    id: "b1",
                    time: "11:00",
                    title: "Últimas Compras / Iidabashi",
                    description: "Compras de última hora en Don Quijote o relax en el hotel.",
                    image: "images/dia23-portada.jpg",
                    price: "Libre",
                    fullDesc: `
                        <h3><i class="fa-solid fa-suitcase"></i> Despedida de Tokio</h3>
                        <p>Aprovechad para comprar esos dulces o souvenirs que faltan. Preparad bien las maletas para el vuelo.</p>
                    `
                },
                {
                    time: "13:00",
                    title: "Tiempo de Almuerzo",
                    description: "Última comida japonesa real antes del avión.",
                    type: "gap"
                },
                {
                    id: "b2",
                    time: "17:00",
                    title: "Traslado a Haneda (Taxi)",
                    description: "Salida hacia el aeropuerto para llegar 4h antes.",
                    image: "images/dia23-portada.jpg",
                    price: "~8.000 JPY (Taxi)",
                    fullDesc: `
                        <h3><i class="fa-solid fa-plane-departure"></i> Rumbo al Aeropuerto</h3>
                        <p>Facturación, control de seguridad y... ¡Sayonara! El taxi os dejará cómodamente en la terminal de salida.</p>
                    `
                }
            ]
        },
        complements: []
    },

    // --- DÍA 24: LLEGADA A ESPAÑA ---
    {
        day: 24, type: "stay",
        date: "Mié, 19 Agosto", title: "🏠 Hogar dulce hogar",
        coords: [39.469, -0.376], zoom: 10,
        hotel: "Valencia, España",
        hotelImage: "images/casa.jpg",

        isFlexible: true,
        base: {
            title: "Hogar Dulce Hogar",
            description: "Fin de una aventura inolvidable.",
            events: [
                {
                    time: "---",
                    title: "Llegada",
                    description: "Bienvenida a casa. ¡A descansar!",
                    image: "images/dia24-home.jpg",
                    price: "Gratis"
                }
            ]
        },
        complements: []
    },
];
