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
                tacticalGuideId: "mission_alpes_1"
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
                tacticalGuideId: "mission_alpes_3"
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
                    image: "images/dia11-zen.jpg",
                    price: "Incluido",
                    fullDesc: `
                        <h3><i class="fa-solid fa-hot-tub-person"></i> Llegada al Ryokan Kazeya</h3>
                        <p>Inmersión total en la cultura japonesa. Dejad los zapatos en la entrada y entrad en un mundo de tatami y silencio.</p>
                        <div style="background:rgba(255,140,0,0.05); border:1px solid #ff8c00; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#ff8c00;"><i class="fa-solid fa-circle-exclamation"></i> Protocolo Onsen:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">1. Ducharos a fondo <strong>fuera</strong> del agua.<br>2. Entrad limpios y sin bañador.<br>3. No sumerjáis la toalla pequeña, dejadla en la cabeza o el borde.</p>
                        </div>
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
                description: "Baño mixto al aire libre junto al río. Experiencia salvaje (Baño público).",
                price: "Donación",
                image: "images/dia11-shinhotaka.jpg",
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
                    image: "images/dia12-yatai.jpg",
                    price: "~4.000-6.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-drumstick-bite"></i> Festín de Hida Beef</h3>
                        <p>Considerada por muchos superior a la de Kobe por su marmoleo y sabor intenso. Podéis probarla en formato Yakiniku (a la parrilla) o como nigiris de carne cruda en los puestos de la calle.</p>
                    `
                },
                {
                    id: "b2",
                    time: "14:30",
                    title: "Barrio Sanmachi Suji",
                    description: "Corazón feudal de la ciudad con casas de madera negra.",
                    image: "images/takayama.png",
                    price: "Gratis",
                    link: "https://www.google.com/maps/dir/Takayama+Station/Sanmachi+Suji/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-house-chimney"></i> Casco Antiguo (Sanmachi)</h3>
                        <p>Paseo por las calles históricas. Buscad las bodegas de sake con sus Sugidamas (bolas de cedro) colgando en la entrada.</p>
                        <div style="background:rgba(0,191,255,0.05); border:1px solid #00bfff; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#00bfff;"><i class="fa-solid fa-wine-bottle"></i> Misión Local:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">Entrad en una cervecería de sake para hacer una cata (por unos pocos yenes te dan una tacita que puedes llevarte).</p>
                        </div>
                    `
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
                image: "images/dia12-yatai.jpg",
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
                fullDesc: `
                    <h3><i class="fa-solid fa-tree"></i> Ruta de Templos</h3>
                    <p>Un paseo tranquilo alejado de las rutas comerciales comerciales, siguiendo en parte el diseño del Kioto original.</p>
                `
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
            { title: "Bus", text: "Bus Expreso Nohi desde Takayama. Reservad exactamente 1 mes antes para el grupo." },
            { title: "Coche", text: "Recogida de Budget Rent a Car nada más llegar a la estación." }
        ],

        transportTimeline: [
            { time: "08:15", type: "point", title: "Estación de Buses Takayama Nohi", icon: "fa-solid fa-bus-simple" },
            {
                time: "08:30",
                type: "transit",
                title: "Bus Directo Mt. Fuji (Express)",
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
                    `
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
                fullDesc: `
                    <h3><i class="fa-solid fa-vihara"></i> El Mirador Arakurayama</h3>
                    <p>Prepárate para subir unos 400 escalones. La recompensa es la vista que sale en todas las portadas de guías de viaje.</p>
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
                `
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
                    image: "images/dia15-fuji.jpg",
                    price: "Variable",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Experiencia Fuji</h3>
                        <p>Día dedicado al volcán. Podéis optar por conducir por la Subaru Line hasta la 5ª Estación de la línea Yoshida (estilo turista al lado del cráter) o hacer un trekking alejados como el del monte Ryugatake (estilo explorador) para tener la vista frontal al Fuji que sale en el billete de 1000 yenes.</p>
                        <div style="background:rgba(255,255,255,0.1); border:1px solid #ffffff; padding:10px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin:0; font-size:0.8rem; color:#ffffff;"><i class="fa-solid fa-triangle-exclamation"></i> Nota sobre el coche:</h4>
                            <p style="margin:5px 0 0; font-size:0.75rem;">En agosto la carretera Subaru Line suele estar cortada en el punto de peaje para vehículos privados. Hay que aparcar en el "Fujihoku-roku Parking Lot" y coger un bus lanzadera.</p>
                        </div>
                    `,
                    video: "https://www.youtube.com/watch?v=Fst5jY_w7rM"
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
                fullDesc: `
                    <h3><i class="fa-solid fa-person-walking-luggage"></i> El Mirador de los 1000 Yenes</h3>
                    <p>Un trekking empinado pero seguro por el Monte Ryugatake (dragón). Desde la cima no verás a turistas de bus, solo a otros montañeros y una vista panorámica irreal del Fuji junto a los lagos glaciares.</p>
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
                image: "images/dia15-fuji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-cloud"></i> Tocando el Cielo a 2300m</h3>
                    <p>El punto más alto al que se puede llegar de forma "fácil". Incluye el Santuario Komitake y la oficina de correos más alta de Japón (¡enviad una postal!).</p>
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
                        <h3><i class="fa-solid fa-torii-gate"></i> Santuario Sengen Jinja</h3>
                        <p>Impresionante santuario escondido en un frondoso bosque antiguo. La avenida de entrada está flanqueada por faroles de piedra con musgo y cedros gigantes, algunos sagrados atados con cuerdas shimenawa.</p>
                    `
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "Hoto Noodles",
                    description: "Plato de supervivencia invernal: fideos tremendos en sopa de miso y calabaza.",
                    image: "images/dia14-honcho.jpg",
                    price: "~1.500 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fire-burner"></i> Hoto Fudo</h3>
                        <p>Los fideos son planos y muy gruesos. El plato viene servido en una olla de hierro fundido directo del fuego a tu mesa. Hay local Hoto Fudo justo frente a la estación de tren de Kawaguchiko.</p>
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
                image: "images/dia14-honcho.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-camera"></i> La Calle de Instagram</h3>
                    <p>Honcho Street tiene esa vibra noventera retro. Ojo con el tráfico, la policía local está cansada de los turistas parando en medio de la calle principal para hacer fotos. Disparad rápido desde las aceras laterales.</p>
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
                        <h3><i class="fa-solid fa-bridge"></i> Barrio de Kagurazaka</h3>
                        <p>Está a pocos minutos de vuestro hotel. Es una mezcla fascinante: conserva callejones geisha de adoquines estrechos, templos y a la vez posee alta presencia gastronómica francesa. Visitad el moderno Santuario Kuma Kengo Akagi Jinja de cristal y madera para el atardecer.</p>
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
            { title: "Transporte", text: "Tarjeta Suica/Pasmo en Apple Wallet para el metro. Línea Tozai desde Iidabashi." },
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Especialmente en la calle Nakamise y el Templo Senso-ji. Madrugar es clave." },
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
            { time: "12:00", type: "point", title: "Vistas y fotos rascacielos/Skytree", icon: "fa-solid fa-camera" },
            {
                time: "13:30",
                type: "transit",
                title: "Metro/Tren a Ueno o Kappabashi",
                price: "Suica",
                timeLabel: "Variable",
                link: "https://www.google.com/maps/dir/?api=1&origin=Asakusa&destination=Ueno"
            },
            { time: "14:00", type: "point", title: "Almuerzo y Exploración Libre", icon: "fa-solid fa-utensils" }
        ],

        timeline: [
            { time: "09:30", title: "Senso-ji", desc: "Templo más antiguo. Linterna roja Kaminarimon. (Base)" },
            { time: "11:30", title: "Río Sumida", desc: "Paseo fluvial con vistas al skyline. (Base)" },
            { time: "12:30", title: "Opciones Tarde", desc: "Skytree, Ueno, o Kappabashi. (Opcionales)" }
        ],

        prices: {
            transport: "Metro (~500 JPY/día)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "El Tokio antiguo en Asakusa, templos enormes, multitudes y las impresionantes vistas modernas del río Sumida.",
            events: [
                {
                    id: "b1",
                    time: "09:30",
                    title: "Templo Senso-ji y Calle Nakamise",
                    description: "El templo budista más antiguo e importante de Tokio. Famoso por su gigantesca linterna roja.",
                    image: "images/dia17-sensoji.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-temple"></i> Templo Senso-ji</h3>
                        <p>El corazón espiritual e histórico de Asakusa. Se accede cruzando la mítica Kaminarimon (Puerta del Trueno) con su linterna de papel de 700 kg. Luego caminaréis por Nakamise, una calle comercial de 200 metros llena de puestecitos de dulces tradicionales y souvenirs que data del periodo Edo.</p>
                        <ul>
                            <li><i class="fa-solid fa-wind"></i> <strong>Ritual del Incienso:</strong> En el gran pebetero (Jokoro) frente al templo principal, echad el humo del incienso sobre vuestra cabeza u hombros. La tradición dice que atrae buena salud y te hace más inteligente.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=Knd_N-v_B3Q"
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
                    time: "13:00",
                    title: "Tiempo de Almuerzo Flexible",
                    description: "Elegid opciones de comida por Asakusa: okonomiyaki, soba o tempura.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Tokyo Skytree",
                time: "14:30",
                description: "La estructura más alta de Japón (634m). Vistas que demuestran que Tokio no tiene fin.",
                price: "2.100 JPY",
                image: "images/dia17-skytree.jpg",
                recommended: true,
                fullDesc: `
                    <h3><i class="fa-solid fa-tower-broadcast"></i> La Torre hacia el Cielo</h3>
                    <p>Ascenso vertical fulgurante a 350 metros. Recomendable ir hacia el atardecer (golden hour) para ver cómo se encienden los 30 millones de luces de la metrópolis. Si el día está muy claro se llega a ver la silueta del monte Fuji a lo lejos.</p>
                `,
                tacticalOptions: [
                    {
                        title: "CRUZANDO A SKYTREE",
                        time: "14:00 - 14:30",
                        description: "Cruzad el río Sumida a pie por el puente o tomad la línea Tobu Skytree un par de paradas.",
                        link: "https://www.google.com/maps/dir/?api=1&origin=Asakusa+Station&destination=Tokyo+Skytree",
                        tacticalGuideId: "mission_skytree"
                    }
                ]
            },
            {
                id: "c2",
                title: "Calle Kappabashi (Cocineros)",
                time: "15:00",
                description: "El barrio de suministros para restaurantes. Cuchillos forjados a mano y comida de plástico.",
                price: "Gratis",
                image: "images/dia17-kappabashi.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-kitchen-set"></i> Kappabashi Dogu-gai</h3>
                    <p>Una calle entera dedicada al 'hardware' culinario japonés. Podréis comprar los mejores cuchillos del mundo (os los graban con vuestro nombre), palillos preciosos y admirar las increíbles réplicas hiperrealistas de comida en cera/plástico que los restaurantes usan en sus escaparates.</p>
                `
            },
            {
                id: "c3",
                title: "Parque y Museos de Ueno",
                time: "14:00",
                description: "Gran parque que alberga multitud de museos, un zoo y el mercado callejero Ameyoko.",
                price: "Accesos gratis (Museos ~1000 JPY)",
                image: "images/dia17-ueno.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Ueno y Ameyoko</h3>
                    <p>Si queréis un respiro verde podéis pasear por el Estanque Shinobazu. Si queréis locura, adentraos bajo las vías del tren en Ameyoko, un antiguo mercado negro post-guerra que hoy es un bullicioso mercado de zapatillas, comida y souvenirs baratos a grito pelado.</p>
                `
            },
            {
                id: "c4",
                title: "Hoppy Street (Asakusa Noche)",
                time: "19:00",
                description: "Cena de 'tapas' japonesas (Izakayas) al aire libre en la calle más canalla y nostálgica de Asakusa.",
                price: "~3.000 JPY",
                image: "images/dia17-hoppy.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-beer-mug-empty"></i> Cerveza e Izakayas</h3>
                    <p>Por la noche Asakusa vacía las grandes avenidas y llena esta calle lateral. Hombres de negocios aflojándose la corbata y jóvenes bebiendo 'Hoppy' (una bebida casi sin alcohol que se mezcla con Soju) y comiendo estofado de carne. Puro ambiente Showa.</p>
                `
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
                    fullDesc: `
                        <h3><i class="fa-solid fa-tree"></i> Un Bosque Mágico Plantado a Mano</h3>
                        <p>A pesar de estar al lado del barrio más moderno, entrar al parque Yoyogi a primera hora para visitar el Meiji Jingu es sobrecogedor. Caminaréis bajo inmensos toriis de cedro y entre más de 100.000 árboles que fueron plantados a mano por los japoneses hace un siglo en honor al Emperador Meiji.</p>
                        <p><strong>Curiosidad:</strong> Fijaos en las grandes ofrendas en el camino: decenas de barriles tallados de Sake (común) enfrentados a docenas de barriles de vino de Borgoña francés (no tan común, reflejo del interés del emperador por occidente).</p>
                    `
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
                        <h3><i class="fa-solid fa-people-arrows"></i> Caos Organizado (Scramble Crossing)</h3>
                        <p>Es inmenso. Cuando todos los semáforos se ponen en rojo, la avalancha humana se cruza desde todas las direcciones sin chocar jamás. Es obligatorio cruzarlo, sacar vídeos en medio o buscar lugares elevados (Starbucks o Megadonki) para verlo desde arriba.</p>
                        <ul>
                            <li><i class="fa-solid fa-dog"></i> <strong>Punto de encuentro: Hachiko.</strong> Buscad la broncínea estatua de Hachiko a la salida de la estación, el mítico perro de raza Akita que esperó 9 años a su amo fallecido. Suele haber siempre cola para hacerse una foto.</li>
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
                time: "17:30",
                description: "El mirador que arrasa en Instagram. Azotea de helicópteros totalmente al aire libre.",
                price: "~2.200 JPY",
                image: "images/dia18-sky.jpg",
                recommended: true,
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

    // --- DÍA 19: AKIHABARA Y GINZA ---
    {
        day: 19, type: "stay",
        date: "Vie, 14 Agosto", title: "🎮 Akihabara y Lujo Ginza",
        coords: [35.698, 139.773], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/akihabara.png",

        logistics: [
            { title: "Horarios", text: "Importante: Las tiendas frikis de Akihabara abren algo tarde el fin de semana, en torno a las 11:00." },
            { title: "Compras", text: "Llevad el pasaporte físico original encima si planeáis comprar merchandising o electrónica en Yodobashi o Akiba (Duty Free Tax-free aplicable encima de 5.000 JPY)." },
            { title: "Etiqueta", text: "Ginza es el barrio caro y formal de Japón; aunque sois turistas, vestid un poquito casual-elegante si entráis a grandes tiendas por respeto." }
        ],

        transportTimeline: [
            { time: "09:45", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "10:00",
                type: "transit",
                title: "Tren JR Sobu a Akihabara",
                price: "Suica/JR Pass (~160 JPY)",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Akihabara+Station&travelmode=transit",
                tacticalGuideId: "mission_akihabara_jr"
            },
            { time: "10:15", type: "point", title: "Locura Akihabara y Arcades", icon: "fa-solid fa-gamepad" },
            { time: "13:00", type: "point", title: "Almuerzo en restaurante temático/Wagyu", icon: "fa-solid fa-bowl-rice" },
            {
                time: "15:00",
                type: "transit",
                title: "Metro Línea Ginza",
                price: "Suica (~180 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Akihabara&destination=Ginza&travelmode=transit"
            },
            { time: "15:30", type: "point", title: "Paseo por Milla de Oro (Ginza)", icon: "fa-solid fa-gem" },
            { time: "18:00", type: "point", title: "Teatro Kabukiza al Atardecer", icon: "fa-solid fa-masks-theater" }
        ],

        timeline: [
            { time: "10:15", title: "Akihabara", desc: "Electric Town. Capital mundial del Anime y tecnología. (Base)" },
            { time: "13:30", title: "Almuerzo Carne", desc: "Roast Beef Ohno u otras opciones de wagyu. (Base)" },
            { time: "15:30", title: "Ginza Luxury", desc: "Contraste brutal: alta costura y showrooms futuristas (Sony/Nissan). (Base)" },
            { time: "18:00", title: "Teatro Kabuki-za", desc: "Veréis la increíble fachada clásica iluminada rodeada de edificios. (Base)" }
        ],

        prices: {
            transport: "Metros (~400 JPY)",
            food: "Comida Especial (~2.500 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de contrastes radicales en el este de la red de trenes: empezamos empapándonos de la subcultura otaku extrema para terminar en el recato elitista y acristalado de la gran milla de oro.",
            events: [
                {
                    id: "b1",
                    time: "10:15",
                    title: "Akihabara: Electric Town",
                    description: "El paraíso geek. Edificios enteros de neón dedicados a un solo tema: cartas, robótica, retro-gaming o figuritas.",
                    image: "images/dia19-akihabara.jpg",
                    price: "Gratis / Gastos compras",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> La Meca Otaku</h3>
                        <p>Simplemente hay que salir por la puerta Electric Town Exit y dejarse cegar por edificios repletos de anime. Recomendados: <strong>Radio Kaikan</strong> (un centro comercial entero de coleccionables), <strong>Super Potato</strong> (peregrinación para encontrar juegos o consolas descatalogadas) o el mega-almacén tecnológico de <strong>Yodobashi Camera</strong>. Escucharéis música pop a todo volumen.</p>
                        <p><strong>Iván y Fran:</strong> Entrad a una de los míticos salones recreativos multicéntricos, subid plantas, cambiar 500 yenes a monedas sueltas y jugad a locuras que no importan nunca a occidente o un buen Street Fighter/Taiko no Tatsujin contra un japonés concentrado (SPOILER: vais a perder muy rápido).</p>
                    `
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "Banquete Carnívoro: Roast Beef Ohno",
                    description: "Recomendación top para comer carne premium espectacular a precio accesible.",
                    image: "images/dia19-akihabara.jpg", // CONSIDER UPDATING WITH MEAT PHOTO IF POSSIBLE
                    price: "~2.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> El Volcán de Wagyu</h3>
                        <p>Uno de los mejores restaurantes de Akihabara. Sirven grandes boles de arroz coronados con capas y capas superpuestas de lonchas finas de jugoso Roast Beef coronadas con una yema de huevo cruda local, mayonesa casera y rábano a modo de montaña humeante. Siempre hay cola bajando las escaleras del local (paciencia).</p>
                    `
                },
                {
                    time: "15:00",
                    title: "Cambio de Chip: Tren hacia el Lujo",
                    description: "Escapar del bullicio electrónico para visitar el Tokio más pulcro.",
                    type: "gap"
                },
                {
                    id: "b3",
                    time: "15:30",
                    title: "La Avenida Principal de Ginza (Chuo Dori)",
                    description: "Los domingos y sábados al mediodía las grandes avenidas de Ginza cierran al tráfico para ser un gran paseo peatonal.",
                    image: "images/dia19-ginza.jpg",
                    price: "Gratis",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gem"></i> La Milla de Diamantes</h3>
                        <p>Elegancia pura extrema. A parte de las flagship stores de alta costura, merece la pena entrar al macro complejo de marcas <strong>Ginza Six</strong> con sus espectaculares bóvedas artísticas interiores y su terraza de relax gratuita, o los showrooms experimentales gratuitos de tecnología punta de <strong>Nissan Crossing</strong> o Sony Park.</p>
                    `
                },
                {
                    id: "b4",
                    time: "18:00",
                    title: "Teatro Kabuki-za de Noche",
                    description: "La joya arquitectónica del teatro clásico sobreviviendo entre torres modernas.",
                    image: "images/dia19-ginza.jpg",
                    price: "Gratis (Visual)",
                    fullDesc: `
                        <h3><i class="fa-solid fa-masks-theater"></i> Reflejos Feudales</h3>
                        <p>Reconstruido varias veces, es el teatro principal donde se ejecuta hoy en día el arte dramático tradicional Kabuki de Japón (actuado sólo por varones sobre grandes maquillajes y escenarios giratorios). Llegando la noche, su estilizada e inmensa techumbre al uso de los castillos feudales se ilumina hermosamente, un spot fotográfico magnífico para cerrar Ginza.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Experiencia Maid Café",
                time: "12:00",
                description: "Cafeterías en Akihabara donde camareras disfrazadas os llaman 'amo' e infunden magia en los helados.",
                price: "~2.500 JPY",
                image: "images/dia19-maid.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-wand-magic-sparkles"></i> Surrealismo Kawaii Extremo</h3>
                    <p>Cadenas como "Maidreamin" u "At Home Café" ofrecen algo que no sabréis si amar o enterrar bajo tierra. Las maids os obligarán a hacer corazones con las manos para bendecir vuestro capuchino ("Moe Moe Kyun!") con orejas de gato frente al resto de clientela. Una inmersión en una moda nipona difícil de explicar a la abuela en España.</p>
                `,
                tacticalOptions: [
                    {
                        title: "ELEGIR MAID CAFÉ",
                        time: "Flexible Mediodía",
                        description: "En las aceras principales de Akihabara (Chuo Dori) habrá docenas de chicas repartiendo flyers. Elegid uno limpio y de red conocida.",
                        link: "https://www.google.com/maps/search/Maidreamin+Akihabara",
                        tacticalGuideId: "mission_maid"
                    }
                ]
            },
            {
                id: "c2",
                title: "Mercado Tsukiji (Exterior)",
                time: "08:30",
                description: "Para los paladares atrevidos, desayunad en los caóticos callejones pesqueros pegados a Ginza.",
                price: "Variable / Sushi Caro",
                image: "images/dia19-tsukiji.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-fish-fins"></i> El Desayuno del Mar</h3>
                    <p>Aunque la lonja mayorista atunera se mudó a Toyosu, el laberíntico 'Outer Market' de Tsukiji sigue vibrando de turismo y chefs y está a poca distancia de Ginza. Pinchos marineros ahumándose en la vía, tortilla dulce recién hecha y bares minúsculos que te cortan el sushi del día más hiper fresco que podáis imaginar. Muy concurrido y caro eso sí.</p>
                `
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
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> El Gusano Robótico</h3>
                        <p>Este sistema de tránsito ligero automatizado no tiene conductor. Si lográis sentaros en el gran ventanal frontal del primer vagón tendréis la sensación de ir montados en una montaña rusa urbana suave cuando cruza en espiral el gran puente colgante sobre la bahía.</p>
                    `
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
                        <h3><i class="fa-solid fa-robot"></i> Cultura Pop a Gran Escala</h3>
                        <p>Paseando por la pasarela elevada de Odaiba veréis la Estatua de la Libertad (construida como homenaje por el año de Japón en Francia) y detrás la imponente fachada del edificio FujiTV. Al otro lado, frente al mall DiverCity, custodia una réplica a escala real 1:1 de un mecha Gundam Unicorn (RX-0) que se transforma con luces y música cada hora en punto.</p>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "TeamLab Planets TOKYO",
                time: "09:30",
                description: "Una de las experiencias artísticas inmersivas más famosas del mundo. Agua, espejos y luces.",
                price: "3.800 JPY",
                image: "images/dia20-teamlab.jpg",
                recommended: true,
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
                        tacticalGuideId: "mission_teamlab"
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

    // --- DÍA 21: NAKANO (Cultura) ---
    {
        day: 21, type: "stay",
        date: "Dom, 16 Agosto", title: "🎯 Nakano Rretro",
        coords: [35.710, 139.666], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/nakano_broadway.png",

        logistics: [
            { title: "Transporte", text: "Línea Tozai de Metro directa desde Iidabashi hasta Nakano sin transbordos (15 minutos)." },
            { title: "Horarios", text: "Al igual que Akihabara, las tiendas especializadas del centro comercial Nakano Broadway abren tarde (11:00 am)." }
        ],

        transportTimeline: [
            { time: "10:00", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "10:15",
                type: "transit",
                title: "Metro Tozai a Nakano",
                price: "Suica (~200 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Nakano+Station&travelmode=transit"
            },
            { time: "10:45", type: "point", title: "Calle cubierta Sun Mall", icon: "fa-solid fa-store" },
            { time: "11:00", type: "point", title: "Edificio Nakano Broadway", icon: "fa-solid fa-box-open" },
            {
                time: "15:00",
                type: "transit",
                title: "Tren JR hacia Shinjuku",
                price: "Suica/JR Pass (~160 JPY)",
                timeLabel: "5 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nakano+Station&destination=Shinjuku+Station&travelmode=transit"
            }
        ],

        timeline: [
            { time: "10:45", title: "Kitsune Sun Mall", desc: "Calle comercial cubierta llena de comida rápida japonesa. (Base)" },
            { time: "11:00", title: "Nakano Broadway", desc: "El gran edificio de las reliquias. Complejo Mandarake. (Base)" },
            { time: "13:30", title: "Helado Coloso", desc: "Daily Chico en el sótano subterráneo. (Base)" },
            { time: "15:00", title: "Complemento Shinjuku", desc: "Tren a Shinjuku para ver al gato 3D o compras. (Complementos)" }
        ],

        prices: {
            transport: "Metro (~500 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Para los puristas del coleccionismo, Nakano superó a Akihabara hace años al no estar tan masificado por el turismo genérico, escondiendo los mejores tesoros de segunda mano retro en sus múltiples pisos techados.",
            events: [
                {
                    id: "b1",
                    time: "11:00",
                    title: "El Complejo Nakano Broadway",
                    description: "Edificio comercial de hormigón de varias plantas al final del Sun Mall plagado de pequeñas tiendas independientes y cristaleras.",
                    image: "images/dia21-nakano.jpg",
                    price: "Gratis / Gastos compras",
                    fullDesc: `
                        <h3><i class="fa-solid fa-robot"></i> La Madriguera del Conejo Blanca</h3>
                        <p>A diferencia del ruido de Akihabara, Nakano Broadway parece un centro comercial de los años 80 abandonado hasta que subes al segundo y tercer piso. Allí opera el imperio <strong>Mandarake</strong>, con decenas de pequeños locales temáticos especializados (algunos parecen museos o mazmorras) que venden desde cels originales de animación de Studio Ghibli, hasta cartuchos de Super Nintendo en su caja intacta, mangas antiquísimos, relojes rolex de segunda mano y Godzilla vintage de plástico inyectado.</p>
                    `
                },
                {
                    id: "b2",
                    time: "13:30",
                    title: "El Reto Helado",
                    description: "En el sótano subterráneo profundo (B1) (donde hay un supermercado local que huele a pescado) sobrevive un local minúsculo.",
                    image: "images/dia21-icecream.jpg",
                    price: "~700 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-ice-cream"></i> El Torreón de Daily Chico</h3>
                        <p><strong>Iván Reto:</strong> En la heladería Daily Chico sirven el famoso helado de 8 pisos extralargo con sabores extraños (como ramune, melón o boniato). Cómprenlo, llévenselo a la calle sin que se caiga y terminénselo rápido.</p>
                    `
                },
                {
                    time: "14:30",
                    title: "Almuerzo y Cambio Zona",
                    description: "Tras salir de Nakano, al lado está la macro-estación de Shinjuku para rematar la tarde.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "El Gato Gigante Anime (Shinjuku)",
                time: "15:30",
                description: "Cross Shinjuku Vision. Una pantalla curva 3D publicitaria donde un gato gigante te mira y miau desde un balcón.",
                price: "Gratis",
                image: "images/dia21-cat3d.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-cat"></i> Realidad Aumentada Callejera</h3>
                    <p>Saliendo por el lado este de Shinjuku. El espectáculo de ver el efecto de profundidad forzada (anamorfosis) desde la acera es genial. El gato suele salir a intervalos junto con un anuncio publicitario de robótica.</p>
                `,
                tacticalOptions: [
                    {
                        title: "UBICACIÓN EXACTA CROSS SHINJUKU",
                        time: "Aparece periódicamente",
                        description: "Justo al lado de la salida Este (East Exit) de la estación de Shinjuku.",
                        link: "https://www.google.com/maps/place/Cross+Shinjuku+Vision",
                        tacticalGuideId: "mission_cat3d"
                    }
                ]
            },
            {
                id: "c2",
                title: "Ikebukuro y Sunshine City",
                time: "16:00",
                description: "El equivalente a Akihabara pero con un enfoque del mercado otaku dirigido a historias dramáticas femeninas (Otome Road).",
                price: "Gratis",
                image: "images/dia21-ikebukuro.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-venus"></i> Otome Road y Pokémon</h3>
                    <p>En el gran complejo Sunshine City podréis encontrar el enorme "Pokémon Center Mega Tokyo" y numerosas tiendas de Gashapon de dos pisos (máquinas tragaperras de cápsulas sorpresa con miniaturas absurdas).</p>
                `
            }
        ]
    },

    // --- DÍA 22: KAMAKURA (Historia) ---
    {
        day: 22, type: "stay",
        date: "Lun, 17 Agosto", title: "🗿 Kamakura Costera",
        coords: [35.319, 139.546], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/kamakura_buda.png",

        logistics: [
            { title: "Transporte Directo", text: "Id desde Iidabashi a Shinjuku o Tokyo Station, y coged el tren Línea Yokosuka directos a Kamakura." },
            { title: "Costa", text: "Hará calor. Kamakura da al océano pacífico y es zona playera surfera, llevad agua." }
        ],

        transportTimeline: [
            { time: "08:45", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:00",
                type: "transit",
                title: "Tren Expréss/Normal a Kamakura",
                price: "JR Pass o Suica (~950 JPY)",
                timeLabel: "Iidabashi -> Shinjuku -> Kamakura (1h 15m)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Iidabashi+Station&destination=Kamakura+Station&travelmode=transit",
                tacticalGuideId: "mission_kamakura_jr"
            },
            {
                time: "10:30",
                type: "transit",
                title: "Tren Retro Enoden (Línea Costera)",
                price: "Suica (~200 JPY)",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kamakura+Station&destination=Hase+Station&travelmode=transit",
                tacticalGuideId: "mission_enoden"
            },
            { time: "11:00", type: "point", title: "Estación Hase (Zona Templos)", icon: "fa-solid fa-train-tram" },
            {
                time: "14:00",
                type: "transit",
                title: "Tranvía Enoden hacia Enoshima O Kamakura",
                price: "Suica",
                timeLabel: "Flexible",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hase+Station&destination=Enoshima+Station"
            }
        ],

        timeline: [
            { time: "11:00", title: "Gran Buda", desc: "El sereno coloso de bronce al aire libre. (Base)" },
            { time: "12:15", title: "Complejo Hasedera", desc: "Templo floral escalonado con vistas al pacífico. (Base)" },
            { time: "14:00", title: "Komachi Dori / Opciones", desc: "Almuerzo y elegir complemento: Enoshima vs Compras. (Base)" }
        ],

        prices: {
            transport: "Tren ida/vuelta + local (~2.500 JPY total)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Excursión de un día al 'Kioto del este'. Kamakura fue capital en el medievo, dejándola salpicada de templos increíbles rodeados de bosque, pero con ambiente relajado playero.",
            events: [
                {
                    id: "b1",
                    time: "11:00",
                    title: "Kotoku-in y el Gran Daibutsu",
                    description: "Estatua de las mayores dimensiones de todo Japón resistiendo elementos pacíficos.",
                    image: "images/kamakura_buda.png",
                    price: "300 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-om"></i> Sobreviviendo a Tsumanis</h3>
                        <p>El Gran Buda de Kamakura (Daibutsu) fue fundido en el siglo XIII dentro de un enorme templo de madera. Un terrible tsunami engulló la costa en el siglo XV borrando todo edificio protector de madera para siempre y dejando solo el peso del metal intacto. Meditar allí es obligatorio.</p>
                        <p><strong>Dato curioso:</strong> ¡Se puede pagar 20 tristes Yenes más entrar (litralmente por la espalda) a las entrañas metálicas de la estatua!</p>
                    `
                },
                {
                    id: "b2",
                    time: "12:15",
                    title: "Templo Floral de Hasedera",
                    description: "Gran recinto escalonado excavado en la ladera dedicada a la diosa Kannon.",
                    image: "images/dia22-kamakura.jpg",
                    price: "400 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Mil Guardianes de Piedra</h3>
                        <p>Uno de los sitios más cuidados y fotografiados de la zona. Subiendo por hermosos senderos con hortensias llegaréis a un mirador sobre el mar lejano. No os vayáis sin encontrar a los escondidos "Jizo adorables" que sonríen entre las hojas mojadas o recorrer su laberíntica cueva dedicada a Benzaiten (usa linterna móvil).</p>
                    `
                },
                {
                    time: "13:30",
                    title: "Almuerzo por las callejuelas",
                    description: "Encontrar un ramen o comida local cerca de la estación de Hase o volver en el tranvía.",
                    type: "gap"
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Isla de Enoshima",
                time: "15:00",
                description: "Tomad el pintoresco tren playero Enoden hasta la lejana costa oeste a la pequeña isla de santuarios.",
                price: "Tren (260 JPY)",
                image: "images/dia22-enoshima.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Cuevas, Faros y Playas</h3>
                    <p>Subiréis (hay escaleras mecánicas pagando si estáis reventados) hacia la torre faro de la cima entre gatos callejeros y podréis bajar por detrás hasta la agreste costa de roca para explorar las cuevas marítimas Iwaya golpeadas por la marea al atardecer.</p>
                `,
                tacticalOptions: [
                    {
                        title: "EL CRUCE DE SLAM DUNK",
                        time: "En trayecto de Enoden",
                        description: "Parada intermendia en 'Kamakurakōkō-Mae'. Famoso paso a nivel frente al mar del anime Slam Dunk.",
                        link: "https://www.google.com/maps/place/Kamakura-koko-mae+Station/",
                        tacticalGuideId: "mission_slamdunk"
                    }
                ]
            },
            {
                id: "c2",
                title: "Calle Komachi Dori / Vaciado de Carteras",
                time: "15:00",
                description: "Junto a la estación de origen de Kamakura. La arteria comercial enorme con souvenirs, sables samuráis y snacks.",
                price: "Gratis",
                image: "images/dia22-donki.jpg", // Consider changing this placeholder to a street photo
                fullDesc: `
                    <h3><i class="fa-solid fa-gift"></i> Croquetas y Recuerdos de Madera</h3>
                    <p>Evitad el viaje agotador a Enoshima si queréis relax. Recorred esta calle kilométrica que en la base lleva hasta el centro rojo sintoísta del Tsurugaoka Hachimangu. Buena zona para comer helados de boniato lila o comprar merchandising Ghibli tradicional en la gran "Symphony Totorogu".</p>
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
        image: "images/dia23-portada.jpg",

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
                    image: "images/dia23-portada.jpg",
                    price: "Libre",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gift"></i> Tetris de Equipaje</h3>
                        <p>Tras dejar el equipaje en el lobby del hotel, tenéis el día libre. Es el momento clásico de ir a un "Mega Donki" (Don Quijote gigante) a comprar cajas de Kit-Kats de sabores, mochis y chucherías para la familia, o volver a vuestro barrio favorito de días anteriores para una última mirada.</p>
                    `
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
                    image: "images/dia23-portada.jpg",
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
