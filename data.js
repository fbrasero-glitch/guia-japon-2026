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
        hotelImage: "images/hotel-wing-osaka.jpg", // Foto del hotel (preparar imagen)
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda", // Enlace Google Maps del hotel (actualizar con enlace real)
        image: "images/dia3-portada.jpg", // Foto general Osaka

        logistics: [
            { title: "Clima", text: "Calor y humedad extremos. Ropa transpirable e hidratación." },
            { title: "Reservas", text: "Para atracciones con aforo (Acuario, Umeda Sky), comprobar venta online." }
        ],

        additions: [
            "Para atracciones con aforo (ej. acuario Kaiyukan, cruceros o noria) comprobad venta anticipada online en temporada alta."
        ],

        timeline: [
            { time: "09:00", title: "Desayuno", desc: "Komeda's Coffee (estilo Nagoya) o Doutor cerca del hotel." },
            { time: "10:00", title: "Inicio Aventura", desc: "Elegid excursión en el panel central." },
            { time: "20:00", title: "Cena Dotonbori", desc: "Takoyaki, Okonomiyaki y paseo bajo los neones." }
        ],

        prices: {
            transport: "800 JPY",
            entrances: "600 JPY (Castillo) + 1.500 JPY (Umeda Sky)",
            food: "3.500 JPY",
            total: "~6.400 JPY (40€) - Opción A"
        },

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: El Clásico Imprescindible",
                summary: "Castillo de Osaka + Shinsekai + Umeda Sky Building",
                image: "images/dia3-castillo.jpg", // Foto Castillo
                price: "Transporte: 800 JPY | Entradas: 600 JPY (Castillo) + 1.500 JPY (Umeda Sky) | Comida: 3.500 JPY | Total: ~6.400 JPY (40€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>
                <p><strong>09:45 - Salida:</strong> Caminad 8 min hasta la estación de metro Higashi-Umeda.</p>
                <p><strong>10:00 - Transporte:</strong> Metro Línea Tanimachi (Morada) hacia Yaominami. Bajad en Tanimachi 4-chome (Salida 1-B o 9). Tiempo: 10 min.</p>

                <h3><i class="fa-solid fa-chess-rook"></i> 1. Castillo de Osaka (10:30)</h3>
                <p><strong>Caminata:</strong> 15 min cruzando el parque y los impresionantes fosos.</p>
                <p><strong>Historia:</strong> Construido en 1583 por Toyotomi Hideyoshi con la intención de ser el centro de un Japón nuevo y unificado bajo su mando. Fue la fortaleza más inexpugnable de su tiempo.</p>
                <p><strong>Lo más interesante:</strong> Aunque la torre principal es una reconstrucción de 1931 (por dentro es un museo moderno con ascensor), las murallas ciclópeas y las puertas Otemon son originales.</p>

                <h3><i class="fa-solid fa-utensils"></i> 2. Barrio de Shinsekai (13:00)</h3>
                <p><strong>Transporte:</strong> Metro desde Tanimachi 4-chome (Línea Chuo) hasta Sakaisuji-Hommachi, transbordo a Línea Sakaisuji hasta Ebisucho.</p>
                <p><strong>Comida:</strong> Probad el Kushikatsu (brochetas fritas de carne, verdura, queso) en el restaurante Daruma (famoso por la cara del dueño enfadado en la fachada).</p>
                <p><strong>Contexto:</strong> Barrio creado en 1912 imitando a París (zona norte) y Nueva York (zona sur). Hoy es una cápsula del tiempo "retro-futurista". Subid o admirad desde abajo la torre Tsutenkaku.</p>

                <h3><i class="fa-solid fa-building"></i> 3. Umeda Sky Building (17:30)</h3>
                <p><strong>Transporte:</strong> Metro de vuelta a Umeda. Caminad 10 min cruzando el paso subterráneo hacia el edificio.</p>
                <p><strong>La experiencia:</strong> Subid al "Jardín Flotante" (observatorio al aire libre). Es uno de los edificios más singulares del mundo. Las escaleras mecánicas cruzan el vacío entre las dos torres como un puente al cielo. Id al atardecer.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=cheNivXFOYU" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Castillo de Osaka (Parque y Museo)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=799uPYsvfl0" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Barrio de Shinsekai y Torre Tsutenkaku</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=ao2-xtmzD4U" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Umeda Sky Building</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Castillo reflejado en el foso  y escaleras flotantes del Umeda Sky.",
                ivanChallenge: "En las murallas del castillo: Fíjate en las piedras gigantescas. ¿Cómo las movieron sin grúas? Busca una persona al lado para comparar la escala."
            },
            {
                id: "B", name: "Opción B: Bahía y Relax",
                summary: "Acuario Kaiyukan + Marketplace Tempozan + Crucero",
                image: "images/dia3-acuario.jpg", // Foto Acuario

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada (Menos caminar)</h3>

                <h3><i class="fa-solid fa-fish"></i> 1. Acuario Kaiyukan (10:30)</h3>
                <p><strong>Transporte:</strong> Metro Línea Chuo desde Hommachi hasta Osakako.</p>
                <p><strong>La experiencia:</strong> Es uno de los acuarios más espectaculares del mundo por su diseño vertical (empiezas en la superficie y vas bajando en espiral hacia las profundidades).</p>
                <p><strong>Lo mejor:</strong> El tanque central con el Tiburón Ballena.</p>

                <h3><i class="fa-solid fa-utensils"></i> 2. Marketplace Tempozan (13:30)</h3>
                <p>Comida en el centro comercial anexo. Hay un "parque temático de comida" antigua llamado Naniwa Kuishinbo Yokocho.</p>

                <h3><i class="fa-solid fa-ship"></i> 3. Crucero Santa María (15:30)</h3>
                <p>Barco turístico que recorre la bahía (45 min).</p>

                <h3><i class="fa-solid fa-ferris-wheel"></i> 4. Noria de Tempozan (17:00)</h3>
                <p>Vistas de toda la bahía y el puerto industrial.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=GE9j5dS7KjE" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Acuario Kaiyukan (Puerto de Osaka)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=zW5HLsm5agg" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Noria de Tempozan y Market Place</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El Tiburón Ballena en el tanque central.",
                ivanChallenge: "Encuentra el pez luna o las medusas gigantes."
            },
            {
                id: "C", name: "Opción C: Cultura Profunda y Alturas",
                summary: "Abeno Harukas + Templo Shitennoji + Santuario Sumiyoshi",
                image: "images/dia3-abeno.jpg", // Foto Vistas

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>

                <h3><i class="fa-solid fa-cloud"></i> 1. Abeno Harukas (10:00)</h3>
                <p><strong>Transporte:</strong> Metro Línea Midosuji hasta Tennoji.</p>
                <p><strong>La experiencia:</strong> Subid al mirador "Harukas 300". Es el rascacielos más alto de Japón (300m). Las vistas son superiores a las de Umeda, se ve hasta Kioto y el mar.</p>

                <h3><i class="fa-solid fa-gopuram"></i> 2. Templo Shitennoji (12:30)</h3>
                <p><strong>Caminata:</strong> 10 min desde Tennoji.</p>
                <p><strong>Contexto:</strong> Fundado en el 593 por el Príncipe Shotoku, es el primer templo budista oficial del estado japonés.</p>

                <h3><i class="fa-solid fa-torii-gate"></i> 3. Santuario Sumiyoshi Taisha (15:00)</h3>
                <p><strong>Transporte:</strong> Tranvía Hankai desde Tennoji.</p>
                <p><strong>Contexto:</strong> Arquitectura puramente japonesa (Sumiyoshi-zukuri), anterior a la influencia china. Famoso por su puente rojo súper arqueado (Sorihashi).</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=bZwGfXBYJqw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Abeno Harukas / Harukas 300</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El puente rojo Sorihashi.",
                ivanChallenge: "Cruza el puente Sorihashi sin tropezar (es muy empinado)."
            }
        ]
    },

    // --- DÍA 4: NARA / KOBE / MINOH ---
    {
        day: 4, type: "stay",
        date: "Jue, 30 Julio", title: "🦌 Excursión: Tú Eliges",
        coords: [34.685, 135.805], zoom: 13,
        hotel: "Hotel Wing International Select Osaka Umeda",
        hotelImage: "images/hotel-wing-osaka.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda",
        image: "images/dia4-portada.jpg", // Foto Nara

        logistics: [
            { title: "Transporte", text: "Usad Google Maps o Navitime para horarios exactos. Tarjeta IC válida en todos." },
            { title: "Advertencia", text: "Los ciervos de Nara muerden si huelen comida. Ocultad los mapas de papel." }
        ],

        additions: [
            "Para atracciones con aforo (ej. acuario Kaiyukan, cruceros o noria) comprobad venta anticipada online en temporada alta."
        ],

        timeline: [
            { time: "09:00", title: "Salida", desc: "Dirigíos a Osaka Station/Umeda." },
            { time: "18:00", title: "Regreso", desc: "Vuelta a Osaka. Tarde libre (ej. Yodobashi Camera para electrónica)." }
        ],

        prices: {
            transport: "1.600 JPY (Ida/vuelta)",
            entrances: "1.000 JPY",
            food: "3.000 JPY",
            total: "~5.600 JPY (35€) - Opción A"
        },

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Nara: La Primera Capital",
                summary: "Parque de Nara + Templo Todai-ji + Santuario Kasuga",
                image: "images/dia4-nara.jpg", // Foto Nara con ciervos
                price: "Transporte: 1.600 JPY (Ida/vuelta) | Entradas: 1.000 JPY | Comida: 3.000 JPY | Total: ~5.600 JPY (35€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>
                <p><strong>09:00 - Salida:</strong> Caminad a JR Osaka Station.</p>
                <p><strong>09:30 - Transporte:</strong> Tren JR Yamatoji Rapid Service (Directo). Tiempo: 50 min. Llegada: JR Nara Station.</p>

                <h3><i class="fa-solid fa-paw"></i> 1. Parque de Nara y Ciervos (10:30)</h3>
                <p><strong>Caminata:</strong> 20 min subiendo por la calle Sanjo-dori (llena de tiendas de souvenirs y mochi).</p>
                <p><strong>Contexto:</strong> Nara fue la capital de 710 a 784. Los ciervos Sika se consideran mensajeros divinos del santuario Kasuga y están protegidos como tesoro nacional. Son libres y descarados (cuidado con los mapas, ¡se los comen!).</p>

                <h3><i class="fa-solid fa-monument"></i> 2. Templo Tōdai-ji (11:30)</h3>
                <p><strong>El monumento:</strong> El edificio de madera más grande del mundo. Alberga el Gran Buda (Daibutsu) de bronce, de 15 metros de altura.</p>
                <p><strong>Reto para Iván:</strong> Dentro del templo hay una columna de madera con un agujero en la base. Se dice que el agujero tiene el mismo tamaño que la fosa nasal del Buda. Si consigues pasar a través de él, tendrás iluminación (y buena suerte en los estudios) en tu próxima vida.</p>

                <h3><i class="fa-solid fa-utensils"></i> 3. Comida en Naramachi (13:30)</h3>
                <p>Zona de Naramachi (barrio antiguo de comerciantes). Probad el Kakinoha-zushi (sushi de caballa/salmón envuelto en hoja de caqui, típico de aquí).</p>

                <h3><i class="fa-solid fa-torii-gate"></i> 4. Santuario Kasuga Taisha (15:30)</h3>
                <p><strong>Caminata:</strong> Paseo por el bosque primigenio.</p>
                <p><strong>Qué ver:</strong> Famoso por sus 3.000 linternas de piedra (en el camino) y de bronce (colgantes).</p>

                <h3><i class="fa-solid fa-train"></i> 5. Regreso (17:30)</h3>
                <p>Tren JR de vuelta a Osaka. Tarde libre en Umeda (Yodobashi Camera para ver electrónica).</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=Y5GGrPcvwJ0" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Templo Todai-ji (Gran Buda de Nara)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=4ndYj_Kk8N8" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Parque de Nara (Encuentro con Ciervos)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=v2nsrvLrqBM" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Santuario Kasuga Taisha</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Dando de comer a un ciervo y el Gran Buda.",
                ivanChallenge: "<strong>EL AGUJERO DEL BUDA:</strong> En el Todai-ji hay una columna con un agujero en la base (tamaño de la fosa nasal del Buda). Si consigues pasar a través, tendrás iluminación y suerte en los estudios."
            },
            {
                id: "B", name: "Opción B: Kobe: Puerto y Elegancia",
                summary: "Kitano-cho + Carne de Kobe + Teleférico Shin-Kobe",
                image: "images/dia4-kobe.jpg", // Foto Carne de Kobe
                price: "Transporte: ~1.200 JPY | Entradas: ~1.500 JPY (Teleférico) | Comida: ~8.000 JPY (Carne de Kobe es cara) | Total: ~10.700 JPY (66€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>
                <p><strong>10:00 - Transporte:</strong> Tren JR Special Rapid desde Osaka a Sannomiya (25 min).</p>

                <h3><i class="fa-solid fa-building"></i> 1. Zona Kitano-cho (11:00)</h3>
                <p>Barrio de casas antiguas de comerciantes extranjeros. Arquitectura occidental del s. XIX.</p>

                <h3><i class="fa-solid fa-drumstick-bite"></i> 2. Comida (Carne de Kobe) (13:00)</h3>
                <p><strong>Recomendación:</strong> Restaurante Steakland Kobe (turístico pero asequible) o Mouriya (más nivel). Veréis cómo cocinan la carne delante de vosotros en plancha teppanyaki.</p>

                <h3><i class="fa-solid fa-mountain"></i> 3. Teleférico Shin-Kobe Ropeway (15:30)</h3>
                <p>Sube a los jardines de hierbas Nunobiki. Vistas espectaculares de la ciudad encajonada entre montaña y mar.</p>

                <h3><i class="fa-solid fa-anchor"></i> 4. Harborland (18:00)</h3>
                <p>Zona del puerto iluminada. Torre de Kobe (roja).</p>
            `,
                photoSpot: "El chef cocinando la carne con fuego.",
                ivanChallenge: "Encuentra la estatua del Saxofón en el puerto."
            },
            {
                id: "C", name: "Opción C: Naturaleza Cercana",
                summary: "Parque Minoh + Cascada + Momiji Tempura",
                image: "images/dia4-minoh.jpg", // Foto Cascada de Minoh
                price: "Transporte: ~600 JPY | Entradas: Gratis | Comida: ~2.000 JPY (Momiji Tempura) | Total: ~2.600 JPY (16€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>
                <p><strong>09:30 - Transporte:</strong> Tren Hankyu desde Umeda a Minoh Station (30 min).</p>

                <h3><i class="fa-solid fa-tree"></i> 1. La Actividad (Caminata)</h3>
                <p>Es una caminata de senderismo suave (asfaltada, 3km, 45 min) remontando un río hasta una cascada preciosa.</p>

                <h3><i class="fa-solid fa-cookie"></i> 2. Snack Curioso (Momiji Tempura)</h3>
                <p>Aquí es típico comer "hojas de arce fritas en tempura" (Momiji Tempura). Es un snack dulce y crujiente típico.</p>

                <h3><i class="fa-solid fa-building"></i> 3. Tarde</h3>
                <p>Regreso a Osaka y visita al barrio de Namba/Dotonbori de día para ver los carteles gigantes.</p>
            `,
                photoSpot: "La Cascada de Minoh.",
                ivanChallenge: "Sácate una foto comiendo una hoja de arce frita."
            }
        ]
    },

    // --- DÍA 5: OSAKA (OPCIONES) ---
    {
        day: 5, type: "stay",
        date: "Vie, 31 Julio", title: "🎢 Día Comodín: Gran Aventura",
        coords: [34.687, 135.526], zoom: 13,
        hotel: "Hotel Wing International Select Osaka Umeda",
        hotelImage: "images/hotel-wing-osaka.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Wing+International+Select+Osaka+Umeda",
        image: "images/dia5-portada.jpg",

        logistics: [
            { title: "Reservas", text: "Para USJ, comprad Studio Pass y Express Pass con 2 meses de antelación para todo el grupo (8 personas)." },
            { title: "Transporte", text: "Hiroshima requiere Shinkansen (caro sin JR Pass, ~22.000 JPY I/V)." }
        ],

        additions: [
            "Para atracciones con aforo (ej. acuario Kaiyukan, cruceros o noria) comprobad venta anticipada online en temporada alta.",
            "Si elegís USJ, comprad Studio Pass y Express Pass con antelación para todo el grupo (8 personas). En verano las plazas para Super Nintendo World se agotan; si queréis entrar a Mario Kart necesitáis reservar fecha/hora o el pase rápido para todos."
        ],

        timeline: [
            { time: "07:30", title: "Salida", desc: "Elegid opción en el panel derecho." },
            { time: "18:30", title: "Regreso", desc: "Vuelta a Osaka según la opción elegida." }
        ],

        prices: {
            transport: "~22.000 JPY (Shinkansen I/V - Opción A) o ~800 JPY (Opción C)",
            entrances: "4.000 JPY (Opción A) o ~12.000 JPY (USJ - Opción B)",
            food: "4.000 JPY (Opción A) o ~5.000 JPY (Opción B/C)",
            total: "~26.000 JPY (160€) - Opción A (más cara) | ~17.000 JPY (105€) - Opción B | ~6.000 JPY (37€) - Opción C"
        },

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Hiroshima y Miyajima",
                summary: "Miyajima + Hiroshima + Museo de la Paz",
                image: "images/dia5-miyajima.jpg", // Foto Torii flotante
                price: "Transporte: ~22.000 JPY (Shinkansen I/V - Es caro) | Entradas/Comida: 4.000 JPY | Total: ~26.000 JPY (160€) - Es la excursión más cara del viaje",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada (Día Largo)</h3>
                <p><strong>Nota:</strong> Esta excursión es cara en transporte si no tenéis JR Pass, pero es impactante.</p>
                <p><strong>07:30 - Transporte:</strong> Tren Bala Shinkansen (Sakura o Nozomi) desde Shin-Osaka a Hiroshima. (1h 25m).</p>

                <h3><i class="fa-solid fa-torii-gate"></i> 1. Miyajima (La Isla de los Dioses) (10:00)</h3>
                <p><strong>Transporte:</strong> Desde la estación de Hiroshima, tren local al puerto + Ferry (JR o Matsudai).</p>
                <p><strong>Qué ver:</strong> El Gran Torii Flotante del santuario Itsukushima. Cuando sube la marea parece que flota. Los ciervos aquí también son libres.</p>
                <p><strong>Comida:</strong> Ostras a la parrilla (especialidad local) y Momiji Manju (dulces con forma de hoja).</p>

                <h3><i class="fa-solid fa-monument"></i> 2. Hiroshima Ciudad (14:30)</h3>
                <p><strong>Vuelta:</strong> En ferry+tren al centro.</p>
                <p><strong>Cúpula de la Bomba Atómica (Genbaku Dome):</strong> El único edificio que quedó en pie cerca del hipocentro. Estremece verlo.</p>
                <p><strong>Museo de la Paz:</strong> Explica la tragedia del 6 de agosto de 1945. Es duro, pero educativo para Iván.</p>

                <h3><i class="fa-solid fa-train"></i> 3. Regreso (18:30)</h3>
                <p>Shinkansen de vuelta a Osaka.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=tbe4vzICoXQ" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Miyajima / Itsukushima</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El Torii flotante de Miyajima con la marea alta.",
                ivanChallenge: "En el Museo de la Paz: Reflexiona sobre la importancia de la paz mundial. Es un lugar duro pero necesario de visitar."
            },
            {
                id: "B", name: "Opción B: Universal Studios Japan",
                summary: "Super Nintendo World + Harry Potter + Adrenalina",
                image: "images/dia5-usj.jpg", // Foto USJ Nintendo World
                price: "Transporte: ~800 JPY | Entradas: ~12.000 JPY (Studio Pass + Express Pass) | Comida: ~5.000 JPY | Total: ~17.800 JPY (110€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada (Adrenalina)</h3>
                <p><strong>07:30 - Transporte:</strong> Tren JR Loop Line + Yumesaki Line a Universal City.</p>

                <h3><i class="fa-solid fa-gamepad"></i> Super Nintendo World</h3>
                <p>Entraréis en un videojuego real. Pulseras interactivas, Mario Kart en realidad aumentada.</p>

                <h3><i class="fa-solid fa-wand-magic-sparkles"></i> Harry Potter</h3>
                <p>El castillo de Hogwarts y la cerveza de mantequilla.</p>

                <h3><i class="fa-solid fa-exclamation-triangle"></i> Importante</h3>
                <p>Necesitáis comprar Studio Pass y Express Pass con 2 meses de antelación o no entraréis a Nintendo. En verano las plazas para Super Nintendo World se agotan; si queréis entrar a Mario Kart necesitáis reservar fecha/hora o el pase rápido para todos.</p>

                <h3><i class="fa-solid fa-utensils"></i> Cena</h3>
                <p>En el CityWalk fuera del parque (Hard Rock Cafe, etc.).</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=O51qi89GRGs" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Universal Studios Japan (Super Nintendo World & Harry Potter)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Super Nintendo World con las montañas rusas de fondo.",
                ivanChallenge: "Completa todos los minijuegos de Super Nintendo World y consigue el máximo de puntos en Mario Kart."
            },
            {
                id: "C", name: "Opción C: Osaka Profundo",
                summary: "Mercado Kuromon Ichiba + Denden Town + Shinsaibashi",
                image: "images/dia5-kuromon.jpg", // Foto Mercado Kuromon
                price: "Transporte: ~600 JPY | Entradas: Gratis | Comida: ~5.000 JPY (picoteo en mercado) | Total: ~5.600 JPY (35€)",

                fullDesc: `
                <h3><i class="fa-solid fa-route"></i> Ruta Detallada</h3>

                <h3><i class="fa-solid fa-fish"></i> 1. Mercado Kuromon Ichiba (10:00)</h3>
                <p>"La cocina de Osaka". Puestos de marisco fresco (erizos, vieiras, atún toro) que te cocinan al momento. Desayuno-Almuerzo de picoteo.</p>

                <h3><i class="fa-solid fa-robot"></i> 2. Denden Town (Nipponbashi) (12:00)</h3>
                <p>El "Akihabara de Osaka". Tiendas de anime, figuras y electrónica de segunda mano a mejor precio que en Tokio.</p>

                <h3><i class="fa-solid fa-shopping-bag"></i> 3. Shinsaibashi Suji (15:00)</h3>
                <p>Galería comercial cubierta infinita (shopping).</p>

                <h3><i class="fa-solid fa-building"></i> 4. America-mura (17:00)</h3>
                <p>El barrio de la moda joven y alternativa. Farolas con forma de robots.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=z-1J3NyiYVg" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Kuromon Ichiba Market (Osaka)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=7qdXcS2mPtw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Den Den Town / Nipponbashi</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El mercado Kuromon con marisco fresco y Denden Town.",
                ivanChallenge: "Encuentra una figura de anime rara en Denden Town y sácate una foto con las farolas robot de America-mura."
            }
        ]
    },

    // --- DÍA 6: TRASLADO A KIOTO ---
    {
        day: 6, type: "travel",
        date: "Sáb, 1 Agosto", title: "🏯 Traslado a la Capital Milenaria",
        coords: [34.985, 135.758], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg", // Foto del hotel (preparar imagen)
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex", // Enlace Google Maps del hotel (actualizar con enlace real)
        image: "images/dia6-portada.jpg",

        logistics: [
            { title: "Transporte", text: "Tren JR Special Rapid desde Osaka (29 min, 570 JPY). No usar Shinkansen, no compensa." },
            { title: "Check-in", text: "Dejad maletas en recepción si la habitación no está lista (check-in suele ser 15:00)." }
        ],

        additions: [
            "Aunque no uséis JR Pass, reservad asientos con antelación para Shinkansen (Nozomi/Hikari), Limited Express Hida (Nagoya–Takayama) y buses expresos para asegurar plazas contiguas para 8 personas. Podéis reservar online vía JR West/central o en taquillas (Midori no Madoguchi) en estaciones grandes. Si no hay asientos contiguos, considerad dividir el grupo en dos coches; llevad un responsable con la reserva.",
            "Para el tren a Kioto: Intentad subir a los primeros vagones o últimos para encontrar sitio, aunque suele ir lleno."
        ],

        prices: {
            transport: "1.140 JPY (Tren Osaka-Kyoto + Inari - Opción A)",
            food: "3.500 JPY",
            total: "~4.600 JPY (29€) - Opción A"
        },

        timeline: [
            { time: "09:30", title: "Check-out Osaka", desc: "Dejad llaves. Pedid al hotel que llame 4 taxis o reservad una van de 8 plazas para llevar a todo el grupo y el equipaje hasta JR Osaka Station." },
            { time: "10:15", title: "Tren a Kioto", desc: "JR Special Rapid Service. Andenes 7-9. Cada 15 min." },
            { time: "10:50", title: "Llegada Kioto", desc: "Kyoto Station. Salida Central Gate hacia la Torre." },
            { time: "13:00", title: "Comida", desc: "Kyoto Ramen Koji (planta 10 de la estación). 8 restaurantes de ramen." },
            { time: "14:30", title: "Inicio Aventura", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Fushimi Inari",
                summary: "Las 10.000 Puertas Naranjas (Recomendada)",
                image: "images/dia6-fushimi.jpg",
                price: "Transporte: 1.140 JPY (Tren Osaka-Kyoto + Inari) | Comida: 3.500 JPY | Total: ~4.600 JPY (29€)",

                fullDesc: `
                <h3><i class="fa-solid fa-train"></i> Transporte (14:30)</h3>
                <p>JR Nara Line (Andenes 8-10). Tren Local hasta Inari (2ª parada, 5 min).</p>
                
                <h3><i class="fa-solid fa-torii-gate"></i> Fushimi Inari-taisha (15:00)</h3>
                <p>Santuario sintoísta dedicado a Inari, dios del arroz. Las puertas naranjas (torii) son donaciones de empresas.</p>
                
                <p><strong>El Recorrido:</strong></p>
                <ul>
                    <li>Zona Baja: Abarrotada. Fotos rápido y subir.</li>
                    <li>Cruce Yotsutsuji (30-40 min): Aquí se rinde el 90% de turistas. Vistas espectaculares.</li>
                    <li>Cima: Si seguís, estaréis solos en bosque místico.</li>
                </ul>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=j2uv3BS4a9E" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Santuario Fushimi Inari-taisha (Ruta de los Mil Toriis)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Las puertas torii infinitas subiendo la montaña.",
                ivanChallenge: "Busca las estatuas de zorros (Kitsune). Tienen llaves, joyas o pergaminos en la boca. Cuenta cuántas encuentras."
            },
            {
                id: "B", name: "Opción B: Templo Toji",
                summary: "La Pagoda más Alta + Centro Comercial",
                image: "images/dia6-toji.jpg",
                price: "Transporte: ~570 JPY (Tren Osaka-Kyoto) | Entradas: ~800 JPY (Toji) | Comida: ~3.500 JPY | Total: ~4.870 JPY (30€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-walking"></i> Caminata (15:00)</h3>
                 <p>15 min desde el hotel hacia el suroeste.</p>
                 
                 <h3><i class="fa-solid fa-gopuram"></i> Templo Tōji (15:30)</h3>
                 <p>Pagoda de madera más alta de Japón (55m). Símbolo histórico de la ciudad. Cuartel del monje Kobo Daishi.</p>
                 
                 <h3><i class="fa-solid fa-shopping-cart"></i> AEON Mall (17:30)</h3>
                 <p>Centro comercial gigante. Tiendas de gashapon, Uniqlo/GU y food court.</p>
             `,
                photoSpot: "La pagoda de Toji desde el jardín.",
                ivanChallenge: "Compra un gashapon (bola sorpresa) en el AEON Mall y descubre qué figura te ha tocado."
            },
            {
                id: "C", name: "Opción C: Kyoto Tower",
                summary: "Vistas Aéreas desde la Torre",
                image: "images/dia6-kyoto-tower.jpg", // Foto Kyoto Tower
                price: "Transporte: ~570 JPY (Tren Osaka-Kyoto) | Entradas: ~800 JPY (Torre) | Comida: ~4.000 JPY | Total: ~5.370 JPY (33€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-building"></i> Torre de Kioto (16:00)</h3>
                 <p>Está justo enfrente del hotel. Subid al mirador. Con telescopios se ve la cuadrícula perfecta de la ciudad.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena</h3>
                 <p>En el sótano (Kyoto Tower Sando): food hall moderno con comida gourmet y cervezas artesanas.</p>
             `,
                photoSpot: "Vista panorámica desde la torre con la ciudad de fondo.",
                ivanChallenge: "Usa los telescopios para encontrar el templo más lejano que puedas ver."
            }
        ]
    },

    // --- DÍA 7: KIOTO HIGASHIYAMA ---
    {
        day: 7, type: "stay",
        date: "Dom, 2 Agosto", title: "🌸 El Kioto de Postal",
        coords: [34.995, 135.785], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/dia7-portada.jpg",

        logistics: [
            { title: "Advertencia", text: "Es domingo. Habrá mucha gente. Madrugar es clave." },
            { title: "Transporte", text: "Reservad 2 taxis o una van de 8 plazas para el traslado a Kiyomizu-dera. El autobús 206 va lleno y no es práctico para 8 personas." }
        ],

        additions: [
            "Aviso: Es domingo. Habrá mucha gente. Madrugar es la clave del éxito.",
            "Para Kiyomizu-dera: Llegad antes de las 09:00 para evitar las multitudes. El templo abre a las 06:00.",
            "En Gion: Si tenéis suerte, podréis ver una Geisha o Maiko (aprendiz) caminando por las calles. No les pidáis fotos, están trabajando."
        ],

        prices: {
            transport: "~3.000-4.000 JPY (2 taxis o van de 8 plazas, dividido entre 8 = ~375-500 JPY por persona)",
            entradas: "400 JPY (Kiyomizu-dera)",
            food: "3.500 JPY",
            total: "~4.275-4.400 JPY (26-27€) por persona - Opción A"
        },

        timeline: [
            { time: "08:00", title: "Salida", desc: "Reservad 2 taxis o una van de 8 plazas desde el hotel." },
            { time: "08:30", title: "Kiyomizu-dera", desc: "Templo del Agua Pura. Terraza de madera sin clavos." },
            { time: "11:00", title: "Sannenzaka/Ninenzaka", desc: "Calles peatonales empedradas preciosas." },
            { time: "13:00", title: "Comida Gion", desc: "Oyakodon o Soba." },
            { time: "15:00", title: "Santuario Yasaka", desc: "Corazón del distrito de Geishas. Calle Hanamikoji." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Ruta Dorada",
                summary: "Kiyomizu a Gion (Imprescindible)",
                image: "images/dia7-kiyomizu.jpg",
                price: "Transporte: ~375-500 JPY por persona (2 taxis o van de 8 plazas) | Entradas: 400 JPY (Kiyomizu) | Comida: 3.500 JPY | Total: ~4.275-4.400 JPY (26-27€) por persona",

                fullDesc: `
                <h3><i class="fa-solid fa-taxi"></i> Transporte (08:00)</h3>
                <p>Reservad 2 taxis o una van de 8 plazas hasta Kiyomizu-dera (15 min, ~3.000-4.000 JPY total). Os deja en la puerta y evita el autobús 206 saturado.</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Kiyomizu-dera (08:30)</h3>
                 <p>Fundado en 778. Terraza de madera sostenida por cientos de pilares de 13 metros sin un solo clavo. Patrimonio de la Humanidad.</p>
                 
                 <h3><i class="fa-solid fa-heart"></i> Reto de las Piedras del Amor</h3>
                 <p>En el santuario Jishu, hay dos piedras separadas por 18 metros. Camina de una a otra con los ojos cerrados. Si llegas, tendrás suerte en el amor.</p>
                 
                 <h3><i class="fa-solid fa-droplet"></i> Fuente Otowa</h3>
                 <p>Bebe de uno de los tres chorros (Salud, Amor o Éxito en estudios). ¡No bebas de los tres o se considera avaricia!</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Sannenzaka y Ninenzaka (11:00)</h3>
                 <p>Calles peatonales empedradas llenas de casas de madera tradicionales. Leyenda: si te caes en las escaleras de Sannenzaka, morirás en 3 años.</p>
                 
                 <h3><i class="fa-solid fa-mask"></i> Gion (15:00)</h3>
                 <p>Barrio de las Geishas. Pasead por Hanamikoji. Si veis una Geisha, no la paréis para fotos; van trabajando.</p>
                 
                 <h3><i class="fa-solid fa-torii-gate"></i> Santuario Yasaka (16:00)</h3>
                 <p>Corazón del distrito de Geishas. Santuario sintoísta con linternas rojas. Ideal para fotos al atardecer.</p>
                 
<h3><i class="fa-solid fa-utensils"></i> Cena en Gion (18:00)</h3>
                <p>Oyakodon (pollo y huevo sobre arroz) o Soba (fideos de trigo sarraceno) en restaurantes tradicionales del barrio. Regreso al hotel en metro o caminando.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=RTt2dr5v92s" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Templo Kiyomizu-dera</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=9TCdW1IRLhs" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Cuestas de Sannenzaka y Ninenzaka</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=OA_ZrgQQJr4" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Barrio de Gion y Pontocho</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "La terraza de Kiyomizu-dera con Kioto de fondo y las calles de Sannenzaka.",
                ivanChallenge: "Completa el reto de las piedras del amor con los ojos cerrados. Si lo consigues, tendrás suerte en el amor."
            },
            {
                id: "B", name: "Opción B: Camino del Filósofo",
                summary: "Ginkaku-ji + Paseo Zen",
                image: "images/dia7-ginkakuji.jpg",
                price: "Transporte: ~375-500 JPY por persona (2 taxis o van de 8 plazas) | Entradas: ~500 JPY (Ginkaku-ji) | Comida: ~3.500 JPY | Total: ~4.375-4.500 JPY (27-28€) por persona",

                fullDesc: `
                 <h3><i class="fa-solid fa-taxi"></i> Transporte (09:00)</h3>
                 <p>Reservad 2 taxis o una van de 8 plazas hasta Ginkaku-ji (~3.000-4.000 JPY total).</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Ginkaku-ji (09:30)</h3>
                 <p>Pabellón de Plata. Iba a ser recubierto de plata, pero la guerra paró la obra. Símbolo de la belleza imperfecta (Wabi-sabi). Su jardín de arena seca es hipnótico.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Paseo del Filósofo (11:00)</h3>
                 <p>Camino de 2km junto a un canal bajo cerezos. Zona más tranquila y bohemia. Entrad en templos pequeños como Honen-in.</p>
                 
                 <h3><i class="fa-solid fa-bridge"></i> Nanzen-ji (14:00)</h3>
                 <p>Acueducto de ladrillo rojo estilo romano cruza el recinto del templo budista. Mezcla arquitectónica única.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Paseo por el Canal (15:30)</h3>
                 <p>Continuad caminando por el canal hasta llegar a la zona de restaurantes cerca del río Kamo.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena (18:00)</h3>
                 <p>Cena en restaurantes junto al río Kamo. En verano hay terrazas sobre el río (Kawadoko). Regreso al hotel en metro.</p>
             `,
                photoSpot: "El jardín de arena del Ginkaku-ji y el acueducto de Nanzen-ji.",
                ivanChallenge: "Encuentra el templo Honen-in durante el paseo del filósofo. Es pequeño y escondido."
            },
            {
                id: "C", name: "Opción C: Poder Imperial",
                summary: "Castillo Nijo + Palacio Imperial",
                image: "images/dia7-nijo.jpg",
                price: "Transporte: ~500 JPY (Metro) | Entradas: ~1.000 JPY (Castillo Nijo) | Comida: ~3.500 JPY | Total: ~5.000 JPY (31€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (09:30)</h3>
                 <p>Metro hasta estación Nijojo-mae.</p>
                 
                 <h3><i class="fa-solid fa-chess-rook"></i> Castillo Nijo (10:00)</h3>
                 <p>Residencia del Shogun Tokugawa en Kioto. Más lujoso que el Palacio del Emperador.</p>
                 
                 <h3><i class="fa-solid fa-bird"></i> Suelos de Ruiseñor</h3>
                 <p>Los "Uguisu-bari". Al pisar el suelo de madera, los clavos rozan las abrazaderas y suenan como pájaros cantando. Sistema de alarma contra ninjas.</p>
                 
                 <h3><i class="fa-solid fa-crown"></i> Palacio Imperial (13:00)</h3>
                 <p>Jardines inmensos y gratuitos. Residencia del Emperador de Japón. Solo se puede visitar con reserva previa (gratis).</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Paseo por los Jardines (14:00-16:00)</h3>
                 <p>Recorred los jardines orientales (Higashi Gyoen). Encontrad el puente Nijubashi (puente doble), símbolo del palacio.</p>
                 
<h3><i class="fa-solid fa-utensils"></i> Comida y Regreso (17:00)</h3>
                <p>Comida en la zona de Kyoto Station o cerca del hotel. Regreso en metro.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=FxyrjUCh7sM" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Castillo de Nijo (Suelos de Ruiseñor)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Los pasillos de los suelos de ruiseñor del Castillo Nijo.",
                ivanChallenge: "Camina por los pasillos del Castillo Nijo y escucha cómo 'cantan' los suelos. Es un sistema de alarma antiguo increíble."
            }
        ]
    },

    // --- DÍA 8: ARASHIYAMA ---
    {
        day: 8, type: "stay",
        date: "Lun, 3 Agosto", title: "🎋 Arashiyama: Bambú y Monos",
        coords: [35.009, 135.678], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/arashiyama.png",

        logistics: [
            { title: "Hora", text: "Madrugar es esencial. El bosque de bambú a las 10:00 estará lleno." },
            { title: "Transporte", text: "Tren JR Sagano Line hasta Saga-Arashiyama (16 min)." }
        ],

        additions: [
            "Madrugar es esencial. El bosque de bambú a las 10:00 estará lleno de turistas. A las 08:30 la luz entra entre los tallos y se oye el viento.",
            "En el Parque de Monos: Los macacos son salvajes pero están acostumbrados a humanos. Seguid las instrucciones del personal y no miréis directamente a los ojos de los monos dominantes."
        ],

        prices: {
            transport: "500 JPY (Tren JR)",
            entradas: "1.500 JPY (Tenryu-ji + Monos)",
            food: "3.000 JPY",
            total: "~5.000 JPY (31€) - Opción A"
        },

        timeline: [
            { time: "08:00", title: "Salida", desc: "Tren JR desde Kyoto Station." },
            { time: "08:30", title: "Bosque de Bambú", desc: "Id directos. A esta hora la luz entra entre los tallos." },
            { time: "09:30", title: "Templo Tenryu-ji", desc: "Patrimonio de la Humanidad. Jardín zen del siglo XIV." },
            { time: "11:30", title: "Parque de Monos", desc: "Subida 20 min. Macacos japoneses en libertad." },
            { time: "13:00", title: "Comida", desc: "Tofu casero (Yudofu) o Udon en la calle principal." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Bambú y Monos",
                summary: "Clásico de Arashiyama",
                image: "images/dia8-bambu.jpg",
                price: "Transporte: 500 JPY (Tren JR) | Entradas: 1.500 JPY (Tenryu-ji + Monos) | Comida: 3.000 JPY | Total: ~5.000 JPY (31€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (08:00)</h3>
                 <p>JR Sagano Line hasta Saga-Arashiyama (16 min).</p>
                 
                 <h3><i class="fa-solid fa-tree"></i> Bosque de Bambú (08:30)</h3>
                 <p>Id directos. A esta hora la luz entra entre los tallos y se oye el viento. A las 10:00 estará lleno.</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Tenryu-ji (09:30)</h3>
                 <p>Patrimonio de la Humanidad. Jardín zen del siglo XIV conserva su diseño original. Usa técnica Shakkei (paisaje prestado).</p>
                 
<h3><i class="fa-solid fa-paw"></i> Parque de Monos Iwatayama (11:30)</h3>
                <p>Cruzad el puente Togetsukyo. Subida 20 min cuesta arriba. Vistas panorámicas de Kioto y macacos japoneses en libertad. Podéis darles cacahuetes desde dentro de una cabaña segura.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=6MPRrtYeOl8" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Arashiyama: Bosque de Bambú y Templo Tenryu-ji</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=y3_S5K4_jlo" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Puente Togetsukyo y Parque de los Monos</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El bosque de bambú con la luz entrando entre los tallos y los monos en el parque.",
                ivanChallenge: "Alimenta a los monos desde la cabaña segura. Son muy inteligentes y descarados."
            },
            {
                id: "B", name: "Opción B: Tren Romántico",
                summary: "Sagano Scenic Railway",
                image: "images/dia8-sagano.jpg",
                price: "Transporte: ~1.200 JPY (Tren + Barca opcional ~4.100 JPY) | Total: ~5.300 JPY (33€) o ~9.400 JPY (58€) con barca",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Sagano Scenic Railway (09:00)</h3>
                 <p>Tren antiguo de vapor/diésel que va por un acantilado junto al río Hozu.</p>
                 
                 <h3><i class="fa-solid fa-ship"></i> Vuelta en Barca (Opcional)</h3>
                 <p>Podéis volver en barca tradicional (Hozugawa Kudari), remada por barqueros expertos (2 horas, ~4.100 JPY).</p>
             `,
                photoSpot: "El tren romántico cruzando el acantilado junto al río.",
                ivanChallenge: "Si eliges la barca, cuenta cuántas veces el barquero tiene que esquivar rocas."
            },
            {
                id: "C", name: "Opción C: Toei Studio Park",
                summary: "Cine y Ninjas",
                image: "images/dia8-toei.jpg",
                price: "Transporte: ~500 JPY | Entradas: ~2.200 JPY (Toei Studio) | Comida: ~3.000 JPY | Total: ~5.700 JPY (35€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-film"></i> Eigamura (10:00)</h3>
                 <p>Parque temático y estudio de cine real de películas de samuráis (Jidaigeki). Shows de ninjas, casas con trucos, posibilidad de disfrazarse.</p>
             `,
                photoSpot: "Disfrazado de samurái o ninja en el estudio.",
                ivanChallenge: "Disfrázate de samurái o ninja y participa en un show. Las fotos son épicas."
            }
        ]
    },

    // --- DÍA 9: HIMEJI ---
    {
        day: 9, type: "stay",
        date: "Mar, 4 Agosto", title: "🏰 Himeji: El Mejor Castillo",
        coords: [34.839, 134.693], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/himeji_castle.png",

        logistics: [
            { title: "Transporte", text: "Shinkansen (Hikari/Kodama) a Himeji (55 min, ~5.000 JPY) o JR Special Rapid (90 min, 2.300 JPY)." },
            { title: "Reservas", text: "Reservad asientos con antelación en Shinkansen para asegurar plazas contiguas para 8 personas." }
        ],

        additions: [
            "Si optáis por Shinkansen a Himeji, reservad asientos con antelación (Hikari/Kodama) para asegurar plazas contiguas para 8 personas. Si no hay asientos contiguos, considerad dividir el grupo en dos coches. Si preferís ahorrar, el JR Special Rapid tarda 90 min y cuesta menos; comprobad horarios y plazas para evitar viajes de pie.",
            "El Castillo de Himeji es el mejor conservado de Japón. Nunca fue destruido por guerras, terremotos o incendios. Parece una garza blanca a punto de volar.",
            "En el Monte Shosha: El complejo de templos de madera oscura en la cima es donde se rodaron las escenas del templo nevado de El Último Samurái con Tom Cruise."
        ],

        prices: {
            transport: "~10.000 JPY (Shinkansen I/V) o ~4.600 JPY (Tren normal)",
            entradas: "2.000 JPY (Castillo + Monte Shosha)",
            food: "3.000 JPY",
            total: "~15.000 JPY (93€) si Shinkansen / ~9.600 JPY (59€) si tren normal - Opción A"
        },

        timeline: [
            { time: "08:30", title: "Salida", desc: "Tren desde Kyoto Station." },
            { time: "10:00", title: "Castillo de Himeji", desc: "La Garza Blanca. Castillo original más grande y mejor conservado." },
            { time: "13:00", title: "Monte Shosha", desc: "Templos en la montaña. Escenario de El Último Samurái." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: La Garza Blanca",
                summary: "Castillo + Monte Shosha",
                image: "images/dia9-himeji.jpg",
                price: "Transporte: ~10.000 JPY (Shinkansen I/V) o ~4.600 JPY (Tren normal) | Entradas: 2.000 JPY | Comida: 3.000 JPY | Total: ~15.000 JPY (93€) o ~9.600 JPY (59€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (08:30)</h3>
                 <p>Shinkansen (Hikari/Kodama) a Himeji (55 min) o JR Special Rapid (90 min, más barato).</p>
                 
                 <h3><i class="fa-solid fa-chess-rook"></i> Castillo de Himeji (10:00)</h3>
                 <p>El castillo original más grande y mejor conservado. Nunca fue destruido por guerras, terremotos o incendios. Parece una garza blanca a punto de volar.</p>
                 
                 <p>Descalzaos para subir las 6 plantas por escaleras de madera empinadas. Arriba hay un santuario pequeño. Las vistas defensivas (laberintos) son increíbles.</p>
                 
<h3><i class="fa-solid fa-mountain"></i> Monte Shosha (13:00)</h3>
                <p>Bus nº 8 desde el castillo + Teleférico. Complejo de templos de madera oscura en la cima. Aquí se rodaron las escenas del templo nevado de El Último Samurái.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=rUYvEQQJcbw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Himeji Castle (Tesoro Nacional)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El castillo de Himeji (La Garza Blanca) desde el foso y los templos del Monte Shosha.",
                ivanChallenge: "Sube las 6 plantas del castillo descalzo y cuenta cuántos laberintos defensivos encuentras. Es como un videojuego de estrategia real."
            },
            {
                id: "B", name: "Opción B: Uji - Paraíso del Té",
                summary: "Templo Byodo-in + Cultura Matcha",
                image: "images/dia9-uji.jpg",
                price: "Transporte: ~500 JPY (Tren JR) | Entradas: ~600 JPY (Byodo-in) | Comida: ~3.500 JPY | Total: ~4.600 JPY (28€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (09:00)</h3>
                 <p>JR Nara Line (Rapid) a estación Uji (20 min).</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Byodo-in (09:30)</h3>
                 <p>Su "Pabellón del Fénix" es tan famoso que sale en la moneda de 10 Yenes.</p>
                 
                 <h3><i class="fa-solid fa-leaf"></i> Cultura del Té (11:30)</h3>
                 <p>Uji produce el mejor té verde de Japón. Calle Omotesando llena de tiendas de té de 500 años. Fideos Cha-soba y helado de matcha intenso.</p>
             `,
                photoSpot: "El Pabellón del Fénix del Byodo-in y una taza de matcha tradicional.",
                ivanChallenge: "Prueba el helado de matcha más intenso que encuentres. Es como comer té verde concentrado."
            },
            {
                id: "C", name: "Opción C: Kurama y Kibune",
                summary: "Misticismo en la Montaña",
                image: "images/dia9-kurama.jpg",
                price: "Transporte: ~600 JPY (Tren Eizan) | Entradas: ~500 JPY (Kurama-dera) | Comida: ~4.000 JPY (Kawadoko) | Total: ~5.100 JPY (31€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (09:00)</h3>
                 <p>Tren Eizan desde Demachiyanagi.</p>
                 
                 <h3><i class="fa-solid fa-mountain"></i> La Ruta</h3>
                 <p>Subida al templo Kurama-dera (donde viven los Tengu, espíritus de nariz larga). Trekking de 1 hora cruzando la montaña hasta Kibune.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Comida</h3>
                 <p>En verano, restaurantes ponen plataformas sobre el río (Kawadoko) para comer frescos. Experiencia de lujo.</p>
             `,
                photoSpot: "El templo Kurama-dera en la montaña y las plataformas sobre el río en Kibune.",
                ivanChallenge: "Busca las estatuas de Tengu (espíritus de nariz larga) en Kurama-dera. Son guardianes del templo."
            }
        ]
    },

    // --- DÍA 10: OTRO KIOTO ---
    {
        day: 10, type: "stay",
        date: "Mié, 5 Agosto", title: "🍃 El Otro Kioto + Takkyubin",
        coords: [34.985, 135.758], zoom: 13,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        image: "images/dia10-portada.jpg",

        logistics: [
            { title: "⚠️ TAKKYUBIN IMPORTANTE", text: "ANTES de salir: Enviad maletas grandes con Yamato Transport al hotel de Tokio (día 16) o Kawaguchiko. Coste ~2.500 JPY/maleta. 48-72h de antelación." },
            { title: "Qué llevar", text: "Documentos, cargadores, medicinas, ropa para 2 días, chanclas, bañador." }
        ],

        additions: [
            "ANTES de salir a explorar: Enviad las maletas grandes con Yamato Transport (TA-Q-BIN) o Sagawa al hotel de destino. Coste orientativo: 2.000-3.000 JPY por maleta según tamaño y distancia.",
            "Plazo de entrega: 1-2 días entre ciudades grandes; en zonas montañosas puede tardar 2 días. Enviad con 48-72h de antelación si queréis recibirlas el día 11 en Tokio.",
            "Seguimiento: Pedid el tracking number y la fecha estimada de entrega; poned el nombre del hotel y la fecha de check-in exacta.",
            "Qué llevar en la mochila de mano: documentos, cargadores, medicinas, ropa para 2 días, chanclas, bañador y un cambio ligero."
        ],

        prices: {
            transport: "~600 JPY (Metro + Bus - Opción A)",
            entradas: "~700 JPY (Sanzen-in - Opción A)",
            food: "~3.000 JPY",
            total: "~4.300 JPY (27€) - Opción A"
        },

        timeline: [
            { time: "09:00", title: "Takkyubin", desc: "Recepción hotel o 7-Eleven/Lawson. Enviad maletas." },
            { time: "10:00", title: "Inicio Aventura", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Ohara",
                summary: "Musgo y Silencio",
                image: "images/dia10-ohara.jpg",
                price: "Transporte: ~600 JPY (Metro + Bus) | Entradas: ~700 JPY (Sanzen-in) | Comida: ~3.000 JPY | Total: ~4.300 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (09:00)</h3>
                 <p>Metro línea Karasuma hasta Kokusaikaikan + Bus Kyoto nº 19 (50 min total).</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Templo Sanzen-in (10:00)</h3>
                 <p>Pueblo rural de Ohara. Famoso por jardines de musgo aterciopelado con estatuas de piedra Jizo sonrientes semienterradas. Una de las imágenes más tiernas y pacíficas de Japón.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Comida</h3>
                 <p>Ohara es famosa por sus encurtidos (tsukemono). Hay buffets de encurtidos deliciosos.</p>
             `,
                photoSpot: "Los jardines de musgo con las estatuas Jizo semienterradas.",
                ivanChallenge: "Cuenta cuántas estatuas Jizo encuentras. Cada una representa un niño que no pudo nacer o crecer."
            },
            {
                id: "B", name: "Opción B: Mercado Nishiki",
                summary: "Compras y Río",
                image: "images/dia10-nishiki.jpg",
                price: "Transporte: ~300 JPY (Caminata/Metro) | Comida: ~3.500 JPY | Compras: Variable | Total: ~3.800 JPY (24€) sin compras",

                fullDesc: `
<h3><i class="fa-solid fa-fish"></i> Mercado de Nishiki (10:30)</h3>
                <p>Pasillo estrecho cubierto lleno de puestos de comida. Probad: Tortilla japonesa, Tako tamago (pulpito con huevo de codorniz en la cabeza), galletas de sésamo.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=8weM5zapLMc" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Mercado de Nishiki (La despensa de Kioto)</a></li>
                    </ul>
                </div>
                 
                 <h3><i class="fa-solid fa-kitchen-set"></i> Cuchillos Aritsugu</h3>
                 <p>Tienda fundada en 1560, proveedores de la Casa Imperial. Cuchillos japoneses de alta calidad.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Tarde</h3>
                 <p>Paseo por Pontocho (callejón estrecho de restaurantes) y sentaos en la orilla del río Kamo.</p>
             `,
                photoSpot: "El mercado Nishiki con sus puestos de comida y el río Kamo al atardecer.",
                ivanChallenge: "Prueba el Tako tamago (pulpito con huevo de codorniz en la cabeza). Es raro pero delicioso."
            },
            {
                id: "C", name: "Opción C: Heian y Manga",
                summary: "Santuario + Museo del Manga",
                image: "images/dia10-heian.jpg",
                price: "Transporte: ~400 JPY (Metro) | Entradas: ~800 JPY (Heian jardines + Manga) | Comida: ~3.000 JPY | Total: ~4.200 JPY (26€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-torii-gate"></i> Santuario Heian-jingu (10:00)</h3>
                 <p>Torii rojo gigante en medio de la carretera. Jardines famosos (escenario de Lost in Translation).</p>
                 
                 <h3><i class="fa-solid fa-book"></i> Museo del Manga (13:00)</h3>
                 <p>Antigua escuela convertida en biblioteca de manga. Puedes coger cualquier tomo y tumbarte en el césped artificial a leer.</p>
             `,
                photoSpot: "El torii gigante del Heian-jingu y el interior del Museo del Manga.",
                ivanChallenge: "Lee un capítulo completo de un manga en el museo. Elige uno que te llame la atención aunque no entiendas japonés."
            }
        ]
    },

    // --- DÍA 11: ALPES JAPONESES ---
    {
        day: 11, type: "travel",
        date: "Jue, 6 Agosto", title: "⛰️ Travesía a los Alpes",
        coords: [36.259, 137.551], zoom: 13,
        hotel: "Kazeya Ryokan",
        hotelImage: "images/hotel-kazeya-ryokan.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kazeya+Ryokan+Shin-Hotaka+Onsen",
        image: "images/okuhida_ryokan.png",

        logistics: [
            { title: "Equipaje", text: "Solo mochilas de mano. Las maletas grandes van por Takkyubin." },
            { title: "Reservas", text: "Reservad asientos con antelación en el Limited Express Hida para asegurar plazas contiguas para 8 personas (lado IZQUIERDO, fila C/D) para ver el río Hida." },
            { title: "Onsen", text: "Tatuajes: confirmad política del ryokan. Ducharse antes de entrar. Separación por sexos." }
        ],

        additions: [
            "Reservad asientos con antelación en el Limited Express Hida para asegurar plazas contiguas para 8 personas y evitar viajes de pie. Si no hay asientos contiguos, considerad dividir el grupo en dos coches. Lado IZQUIERDO (fila C/D) para ver el río Hida y las gargantas.",
            "En el ryokan recibiréis yukata y acceso a onsen. Tened en cuenta: Tatuajes: muchos onsen prohíben tatuajes visibles; si tenéis tatuajes, confirmad la política del ryokan o reservad un onsen privado.",
            "Higiene: ducharse y enjabonarse antes de entrar al onsen; no se permite jabón dentro del baño.",
            "Separación por sexos: la mayoría de baños son separados por sexo; si queréis baño familiar, pedid reserva de baño privado con antelación.",
            "Yukata: usad el yukata dentro del ryokan; no lo llevéis a la calle por la noche en zonas urbanas."
        ],

        prices: {
            transport: "~13.000 JPY (Trenes y buses). Es el día más caro de transporte.",
            food: "~1.500 JPY (Bento tren)",
            cena: "Incluida en el Ryokan",
            total: "~14.500 JPY (90€)"
        },

        timeline: [
            { time: "08:30", title: "Check-out", desc: "Solo mochilas. Comprad bento en la estación." },
            { time: "09:00", title: "Shinkansen", desc: "Kioto a Nagoya (35 min)." },
            { time: "10:48", title: "Limited Express Hida", desc: "Nagoya a Takayama (2h 20m). Paisaje precioso." },
            { time: "13:10", title: "Llegada Takayama", desc: "Takayama Station." },
            { time: "13:40", title: "Bus al Ryokan", desc: "Nohi Bus línea Hirayu/Shinhotaka." },
            { time: "15:15", title: "Llegada Ryokan", desc: "Parada H55. Caminad 2 min." },
            { time: "15:30", title: "Check-in", desc: "Os darán Yukata. Elegid opción para la tarde." },
            { time: "19:00", title: "Cena Kaiseki", desc: "Festín de platos pequeñitos y ternera de Hida." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Modo Zen",
                summary: "Disfrutar del Ryokan (Recomendada)",
                image: "images/dia11-zen.jpg",
                price: "Sin coste adicional (todo incluido en el ryokan)",

                fullDesc: `
                 <h3><i class="fa-solid fa-leaf"></i> Té en la Habitación (15:30)</h3>
                 <p>Relajaos con el té verde y los dulces de bienvenida.</p>
                 
                 <h3><i class="fa-solid fa-hot-tub-person"></i> Baño Privado / Rotenburo (16:30)</h3>
                 <p>Kazeya tiene baños termales preciosos. Algunos se pueden reservar para uso privado (ideal para familias).</p>
                 
                 <h3><i class="fa-solid fa-bed"></i> Siesta / Lectura (17:30)</h3>
                 <p>Descanso en el tatami escuchando los grillos o el río.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena Kaiseki (18:30)</h3>
                 <p>Bajad al comedor en Yukata para el festín de platos pequeñitos y ternera de Hida.</p>
             `,
                photoSpot: "El baño termal al aire libre (rotenburo) con las montañas de fondo.",
                ivanChallenge: "Relájate completamente en el onsen. Es una experiencia única que solo se vive en Japón. Respira el aire de la montaña."
            },
            {
                id: "B", name: "Opción B: Aventura Fluvial",
                summary: "Shinhotaka-no-Yu",
                image: "images/dia11-shinhotaka.jpg",
                price: "Transporte: Gratis (caminata) | Onsen: ~500 JPY | Total: ~500 JPY (3€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-walking"></i> Paseo al Río (15:45)</h3>
                 <p>Caminad 15-20 minutos bajando hacia el río Gamata.</p>
                 
                 <h3><i class="fa-solid fa-water"></i> Shinhotaka-no-Yu (16:15)</h3>
                 <p>Baño termal público mixto al aire libre situado debajo de un puente, pegado al río. Muy rústico (grandes rocas). Se permite bañador/toalla porque se ve desde el puente. La sensación de estar bañándote en agua caliente mientras el río frío pasa al lado es brutal.</p>
                 
                 <h3><i class="fa-solid fa-arrow-left"></i> Regreso (17:30)</h3>
                 <p>Vuelta al hotel para ducharos antes de cenar.</p>
             `,
                photoSpot: "El baño termal debajo del puente con el río pasando al lado.",
                ivanChallenge: "Experimenta la sensación única de estar en agua caliente mientras el río frío pasa a tu lado. Es como tener dos temperaturas a la vez."
            },
            {
                id: "C", name: "Opción C: Vistas y Teleférico",
                summary: "Base del Teleférico",
                image: "images/dia11-teleferico.jpg",
                price: "Transporte: ~500 JPY (Bus local) | Total: ~500 JPY (3€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-bus"></i> Bus Corto (15:40)</h3>
                 <p>Bus local o caminad (30-40 min) hasta la base del Teleférico de Shin-Hotaka.</p>
                 
                 <h3><i class="fa-solid fa-mountain"></i> Entorno (16:00)</h3>
                 <p>No os dará tiempo a subir y bajar con calma, pero podéis ver la estación base, comprar souvenirs exclusivos de los Alpes y ver las montañas desde abajo.</p>
                 
<h3><i class="fa-solid fa-feet"></i> Baños de Pies (16:30)</h3>
                <p>A veces hay baños de pies (Ashiyu) gratuitos por la zona para meter los pies calientes mientras miráis las montañas.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=Z-Bxsrh3K74" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Teleférico de Shin-Hotaka (Mirador Doble en los Alpes)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Las montañas de los Alpes Japoneses desde la base del teleférico.",
                ivanChallenge: "Usa los baños de pies (Ashiyu) y relájate mirando las montañas. Es gratis y muy relajante."
            }
        ]
    },

    // --- DÍA 12: KAWAGUCHIKO (Llegada) ---
    {
        day: 12, type: "stay",
        date: "Vie, 7 Agosto", title: "🏔️ Takayama: Japón Feudal",
        coords: [36.146, 137.252], zoom: 13,
        hotel: "Residence Hotel Takayama Station",
        hotelImage: "images/hotel-residence-takayama.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Residence+Hotel+Takayama+Station",
        image: "images/takayama.png",

        logistics: [
            { title: "Check-out Ryokan", text: "Desayuno tradicional. Check-out hasta las 10:00." },
            { title: "Bus", text: "Horarios de montaña son estrictos. Estad en la parada 10 min antes." }
        ],

        additions: [
            "El desayuno japonés en el ryokan es un espectáculo visual (pescado asado, sopa miso, arroz, encurtidos). Disfrutadlo con calma.",
            "Este hotel tiene lavadora/secadora en la habitación. Es el momento perfecto para hacer la colada a mitad de viaje.",
            "En Takayama Jinya: Es el único edificio gubernamental de la época de los samuráis que queda en pie en todo Japón. Aquí trabajaban los funcionarios que recaudaban impuestos (arroz) para el Shogun.",
            "En Sanmachi Suji: Buscad la bola de cedro verde/marrón colgada en la puerta de las fábricas de Sake. Es la señal tradicional de que venden sake."
        ],

        prices: {
            transport: "~2.200 JPY (Bus de vuelta desde el Onsen)",
            entradas: "~440 JPY (Jinya - Opción A)",
            food: "~5.000 - 8.000 JPY (Dependiendo de cuánta carne de Hida comáis, ¡es precio gourmet!)",
            total: "~9.000 JPY (~55€) - Opción A"
        },

        timeline: [
            { time: "08:00", title: "Desayuno Ryokan", desc: "Desayuno tradicional japonés. Espectáculo visual." },
            { time: "10:40", title: "Bus a Takayama", desc: "Nohi Bus desde parada H55." },
            { time: "12:15", title: "Llegada Takayama", desc: "Takayama Bus Center." },
            { time: "12:20", title: "Check-in", desc: "Residence Hotel. Lavadora/secadora en habitación." },
            { time: "12:30", title: "Inicio Aventura", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Corazón Feudal",
                summary: "Jinya + Sanmachi Suji",
                image: "images/dia12-jinya.jpg",
                price: "Transporte: ~300 JPY (Caminata) | Entradas: ~440 JPY (Jinya) | Comida: ~6.000 JPY (Hida Beef) | Total: ~6.740 JPY (42€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-drumstick-bite"></i> Comida: Hida Beef (12:30)</h3>
                 <p>Maruaki o Ajikura Tengoku. Parrillada de ternera de Hida (Yakiniku). Es cara pero obligatoria aquí.</p>
                 
                 <h3><i class="fa-solid fa-building"></i> Takayama Jinya (14:30)</h3>
                 <p>Único edificio gubernamental de la época de los samuráis que queda en pie en todo Japón. Aquí trabajaban los funcionarios que recaudaban impuestos (arroz) para el Shogun.</p>
                 
                 <p>Salas de tatami infinitas, el almacén de arroz más grande de la época y... la sala de interrogatorios (con instrumentos de tortura reales).</p>
                 
<h3><i class="fa-solid fa-village"></i> Sanmachi Suji (16:00)</h3>
                <p>Calles estrechas con casas de madera negra del periodo Edo. Entrad en una fábrica de Sake (buscad la bola de cedro verde/marrón colgada en la puerta).</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=7D4LHbOAd5I" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Takayama: Barrio Histórico Sanmachi Suji</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Las calles de Sanmachi Suji con casas de madera negra y el interior del Jinya.",
                ivanChallenge: "En el Jinya, busca la sala de interrogatorios. Verás instrumentos de tortura reales. Es impactante pero te hace entender cómo funcionaba la justicia en la época feudal."
            },
            {
                id: "B", name: "Opción B: Artesanía y Festivales",
                summary: "Yatai Kaikan + Showa-kan",
                image: "images/dia12-yatai.jpg",
                price: "Transporte: ~400 JPY (Caminata) | Entradas: ~1.200 JPY (Yatai + Showa-kan) | Comida: ~1.200 JPY (Ramen) | Total: ~2.800 JPY (17€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-utensils"></i> Comida (13:00)</h3>
                 <p>Ramen local rápido.</p>
                 
                 <h3><i class="fa-solid fa-drum"></i> Sakurayama Hachimangu y Yatai Kaikan (14:30)</h3>
                 <p>Takayama celebra uno de los 3 festivales más bonitos de Japón. Este museo expone las carrozas reales.</p>
                 
                 <p>Carrozas (Yatai) de varios pisos de altura, decoradas con oro y tallas de madera increíbles. Algunas tienen marionetas mecánicas (Karakuri) del siglo XIX que se mueven con mecanismos de cuerda y engranajes de madera (¡sin electricidad!).</p>
                 
                 <h3><i class="fa-solid fa-gamepad"></i> Showa-kan (16:30)</h3>
                 <p>Museo Retro. Recreación de calles japonesas de los años 50-60. Hay videoconsolas antiguas (Famicom), máquinas de gancho y comida antigua.</p>
             `,
                photoSpot: "Las carrozas Yatai decoradas con oro y el interior del museo Showa-kan.",
                ivanChallenge: "En el Yatai Kaikan, busca las marionetas mecánicas (Karakuri). Son del siglo XIX y funcionan sin electricidad. Es ingeniería pura."
            },
            {
                id: "C", name: "Opción C: Camino de los Templos",
                summary: "Higashiyama Walk",
                image: "images/dia12-higashiyama.jpg",
                price: "Transporte: Gratis (Caminata) | Comida: ~1.500 JPY | Total: ~1.500 JPY (9€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-utensils"></i> Comida (13:00)</h3>
                 <p>Comida local.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Higashiyama Walking Course (14:30)</h3>
                 <p>El señor feudal de Takayama quería que su ciudad se pareciera a Kioto, así que construyó muchos templos en las colinas del este.</p>
                 
                 <p>Sendero de 3.5 km que conecta más de 10 templos y santuarios a través del bosque. Es muy tranquilo y casi sin turistas.</p>
                 
                 <p>Cementerios: Pasaréis por cementerios antiguos japoneses encaramados en la ladera. No da miedo, es muy paz.</p>
                 
                 <h3><i class="fa-solid fa-feet"></i> Baños de Pies (17:00)</h3>
                 <p>Al bajar a la ciudad, buscad un Ashiyu (baño de pies público) para descansar.</p>
             `,
                photoSpot: "El sendero Higashiyama con templos y el cementerio antiguo en la ladera.",
                ivanChallenge: "Cuenta cuántos templos diferentes encuentras en el sendero. Algunos son muy pequeños y fáciles de pasar por alto."
            }
        ]
    },

    // --- DÍA 13: KAWAGUCHIKO (Llegada) ---
    {
        day: 13, type: "travel",
        date: "Sáb, 8 Agosto", title: "🗻 Kawaguchiko: Primera Vista del Fuji",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia13-portada.jpg",

        logistics: [
            { title: "Bus", text: "Bus Expreso Nohi/Fujikyuko. Reserva online 1 mes antes para asegurar plazas contiguas para 8 personas. Trayecto ~4h 45min." },
            { title: "Coche", text: "Budget Rent a Car. Pasaporte + Carnet Internacional. GPS en inglés o Google Maps." },
            { title: "Parking", text: "Hotel tiene parking (~500 JPY/noche, orden de llegada)." }
        ],

        additions: [
            "Este billete de bus debe comprarse online 1 mes antes. Es una ruta muy popular y se llena.",
            "Si el día está claro al llegar, el Fuji os recibirá enorme detrás de la estación.",
            "Para el coche: Revisad bien los arañazos antes de salir. Probablemente un Honda Fit o Toyota Yaris.",
            "El hotel está justo al cruzar el puente del lago. Tiene parking (aprox 500 JPY/noche, orden de llegada)."
        ],

        prices: {
            transport: "~4.500 JPY (Bus Takayama-Kawaguchiko)",
            coche: "~8.000-12.000 JPY/día (Alquiler coche)",
            parking: "~500 JPY/noche",
            total: "~13.000-16.500 JPY (80-102€) + alquiler coche"
        },

        timeline: [
            { time: "07:30", title: "Desayuno y Check-out", desc: "Residence Hotel Takayama. Comprad comida para el viaje." },
            { time: "08:30", title: "Bus a Kawaguchiko", desc: "Bus Expreso Nohi/Fujikyuko. Trayecto ~4h 45min." },
            { time: "13:15", title: "Llegada Kawaguchiko", desc: "Kawaguchiko Station. Primera vista del Fuji." },
            { time: "13:30", title: "Recogida Coche", desc: "Budget Rent a Car. Pasaporte + Carnet Internacional." },
            { time: "14:30", title: "Check-in Hotel", desc: "Toyoko Inn. Parking disponible." },
            { time: "15:00", title: "Inicio Aventura", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: El Calentamiento",
                summary: "Teleférico + Trekking de Bajada",
                image: "images/dia13-ropeway.jpg",
                price: "Transporte: ~500 JPY (Coche) | Entradas: ~900 JPY (Teleférico) | Total: ~1.400 JPY (9€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-mountain"></i> Mt. Fuji Panorama Ropeway (15:00)</h3>
                 <p>Subid en el teleférico desde la orilla del lago hasta la estación superior (3 min). Vistas panorámicas del Monte Fuji y el lago Kawaguchiko.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> El Trekking de Bajada (15:30)</h3>
                 <p>En lugar de bajar en teleférico como todo el mundo, haced la ruta de senderismo de bajada por el Monte Tenjo (aprox. 45 min). Pasa por bosques de hortensias y tiene vistas constantes al lago y al Fuji.</p>
                 
                 <h3><i class="fa-solid fa-cookie"></i> Fujiyama Cookie (16:30)</h3>
                 <p>El trekking acaba cerca de la tienda de galletas Fujiyama Cookie. Probad las galletas con forma del Fuji.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena y Regreso (18:00)</h3>
                 <p>Cena en restaurantes cerca del lago. Regreso al hotel en coche.</p>
             `,
                photoSpot: "El teleférico con el Fuji de fondo y el trekking de bajada por el Monte Tenjo.",
                ivanChallenge: "Haz el trekking de bajada en lugar de usar el teleférico. Verás bosques de hortensias y vistas constantes del Fuji."
            },
            {
                id: "B", name: "Opción B: La Postal del Atardecer",
                summary: "Pagoda Chureito",
                image: "images/dia13-chureito.jpg",
                price: "Transporte: ~500 JPY (Coche) | Entradas: Gratis | Total: ~500 JPY (3€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-torii-gate"></i> Parque Arakurayama Sengen (16:00)</h3>
                 <p>La Subida: 400 escalones de piedra (buen ejercicio de glúteos).</p>
                 
                 <h3><i class="fa-solid fa-camera"></i> Recompensa</h3>
                 <p>La Pagoda Chureito con el Fuji de fondo. Al atardecer la luz es mágica.</p>
                 
<h3><i class="fa-solid fa-mountain"></i> Extensión Senderista</h3>
                <p>Si os quedáis con ganas, desde la Pagoda sale un sendero hacia el Monte Arakura (1 hora más subida) que aleja a todos los turistas.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=ZNSLvQI3qzw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Pagoda Chureito (Arakurayama Sengen Park)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "La Pagoda Chureito con el Fuji de fondo al atardecer (la postal más famosa de Japón).",
                ivanChallenge: "Sube los 400 escalones y sácate una foto con la Pagoda y el Fuji. Es una de las fotos más famosas de Japón."
            },
            {
                id: "C", name: "Opción C: Pueblo Tradicional",
                summary: "Oshino Hakkai al anochecer",
                image: "images/dia13-oshino.jpg",
                price: "Transporte: ~500 JPY (Coche) | Comida: ~2.000 JPY (Soba) | Total: ~2.500 JPY (15€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-village"></i> Oshino Hakkai (16:30)</h3>
                 <p>Pueblo tradicional con 8 estanques de agua cristalina que reflejan el Fuji. Agua pura de deshielo del volcán. Durante el día está lleno de turistas, pero a partir de las 16:30 los autobuses se van y el ambiente se vuelve mágico y tranquilo.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Paseo (17:00)</h3>
                 <p>Caminad entre las casas de techo de paja y los estanques de agua cristalina viendo cómo se reflejan las montañas y el Fuji.</p>
                 
<h3><i class="fa-solid fa-utensils"></i> Cena (18:00)</h3>
                <p>Soba (fideos de trigo sarraceno) con agua de manantial en restaurantes tradicionales del pueblo. Regreso al hotel en coche.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=IlkdAB4Q05w" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Oshino Hakkai (Pueblo de los 8 manantiales)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Las casas de techo de paja y los estanques de agua cristalina con el Fuji reflejado.",
                ivanChallenge: "Espera hasta que se vayan los autobuses de turistas. El pueblo se vuelve mágico y tranquilo."
            },
            {
                id: "D", name: "Opción D: El Lago del Silencio",
                summary: "Lago Saiko",
                image: "images/dia13-saiko.jpg",
                price: "Transporte: ~500 JPY (Coche) | Total: ~500 JPY (3€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-water"></i> Vuelta al Lago Saiko (15:30)</h3>
                 <p>Conducid hacia el oeste. Es mucho más salvaje que Kawaguchiko.</p>
                 
                 <h3><i class="fa-solid fa-tree"></i> Caminata</h3>
                 <p>Parad en el "Saiko Wildbird Forest Park". Hay senderos llanos preciosos entre árboles antiguos de lava.</p>
                 
                 <h3><i class="fa-solid fa-sun"></i> Punto fuerte</h3>
                 <p>Ver el atardecer desde la orilla oeste (zona Nenba) donde el Fuji se ve inmenso y solitario.</p>
             `,
                photoSpot: "El Lago Saiko con el Fuji inmenso y solitario al atardecer.",
                ivanChallenge: "Encuentra el punto perfecto en la orilla oeste para ver el atardecer. El Fuji se ve enorme y solitario."
            }
        ]
    },

    // --- DÍA 14: PUEBLOS Y SANTUARIOS ---
    {
        day: 14, type: "stay",
        date: "Lun, 10 Agosto", title: "🏛️ Pueblos, Santuarios y Cascadas",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/fuji_sanctuary.png",

        logistics: [
            { title: "Coche", text: "Tened el coche disponible. Muchas opciones requieren transporte propio." }
        ],

        additions: [
            "El Kitaguchi Hongu Fuji Sengen Jinja es el punto de inicio histórico de los peregrinos que subían al Fuji.",
            "La Cascada Shiraito es Patrimonio de la Humanidad. Cientos de hilos de agua cayendo de la pared de roca volcánica.",
            "El Lago Yamanakako es el más grande de los 5 lagos. En el mirador Panorama-dai, si el día está claro, es perfecto para ver el Fuji.",
            "La Calle Honcho es famosa por la foto de Instagram con el Fuji gigante al fondo. Es una de las fotos más icónicas de Japón."
        ],

        prices: {
            transport: "~1.000 JPY (Coche - Opción A)",
            entradas: "Gratis (Santuarios)",
            food: "~3.000 JPY",
            total: "~4.000 JPY (25€) - Opción A"
        },

        timeline: [
            { time: "09:00", title: "Inicio", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Sengen Jinja",
                summary: "Santuarios en el Bosque",
                image: "images/dia14-sengen.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Entradas: Gratis | Comida: ~3.000 JPY | Total: ~4.000 JPY (25€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-torii-gate"></i> Kitaguchi Hongu Fuji Sengen Jinja (09:00)</h3>
                 <p>Situado en Fujiyoshida. Es el punto de inicio histórico de los peregrinos.</p>
                 
                 <h3><i class="fa-solid fa-tree"></i> Ambiente</h3>
                 <p>Cedros milenarios gigantescos y linternas de piedra cubiertas de musgo. Muy místico y solemne.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Caminata</h3>
                 <p>Pasead por el camino de peregrinación original (Yoshida Trail entrance) un tramo.</p>
             `,
                photoSpot: "Los cedros milenarios y las linternas de piedra cubiertas de musgo.",
                ivanChallenge: "Camina por el camino de peregrinación original. Imagina que eres un peregrino antiguo subiendo al Fuji."
            },
            {
                id: "B", name: "Opción B: Cascada Shiraito",
                summary: "Cascada + Lago Yamanaka",
                image: "images/dia14-shiraito.jpg",
                price: "Transporte: ~2.000 JPY (Coche, ida y vuelta) | Entradas: ~300 JPY (Cascada) | Comida: ~3.000 JPY | Total: ~5.300 JPY (33€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-water"></i> Cascada Shiraito (10:00)</h3>
                 <p>Está a 1 hora en coche hacia el sur (Fujinomiya). Cientos de hilos de agua cayendo de la pared de roca volcánica. Patrimonio de la Humanidad.</p>
                 
                 <h3><i class="fa-solid fa-walking"></i> Caminata</h3>
                 <p>Bajad hasta la base de la cascada.</p>
                 
                 <h3><i class="fa-solid fa-lake"></i> Lago Yamanakako (14:00)</h3>
                 <p>Parad en el mirador Panorama-dai. Si el día está claro, es perfecto. Paseo por la orilla del lago (es el lago de los cisnes).</p>
             `,
                photoSpot: "La cascada Shiraito con sus cientos de hilos de agua y el lago Yamanakako.",
                ivanChallenge: "En la cascada, cuenta cuántos hilos de agua diferentes puedes distinguir. Es como una cortina de agua natural."
            },
            {
                id: "C", name: "Opción C: Honcho Street",
                summary: "Fujiyoshida Urbano",
                image: "images/dia14-honcho.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Entradas: Gratis (Parque Fuji-Q zona gratuita) | Comida: ~3.000 JPY | Total: ~4.000 JPY (25€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-street-view"></i> Calle Honcho (10:00)</h3>
                 <p>La famosa calle comercial con el Fuji gigante al fondo (la foto de Instagram). Aparcad y caminad explorando las tiendas antiguas de telas.</p>
                 
                 <h3><i class="fa-solid fa-torii-gate"></i> Santuario Arakura Fuji Sengen (12:00)</h3>
                 <p>Conectadlo con una visita al Parque Fuji-Q (solo entrada gratuita para pasear y ver las montañas rusas desde abajo y comer, sin subir si no queréis).</p>
             `,
                photoSpot: "La calle Honcho con el Fuji gigante al fondo (la foto icónica de Instagram).",
                ivanChallenge: "Saca LA foto de la calle Honcho con el Fuji. Es una de las fotos más famosas de Japón. Luego explora las montañas rusas del Fuji-Q desde abajo."
            },
            {
                id: "D", name: "Opción D: Lago Shoji",
                summary: "Aventura Secreta",
                image: "images/dia14-shoji.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Total: ~1.000 JPY (6€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-lake"></i> Lago Shoji (09:30)</h3>
                 <p>El más pequeño y tranquilo de los 5 lagos.</p>
                 
                 <h3><i class="fa-solid fa-mountain"></i> Mirador Kodaki Fuji</h3>
                 <p>Desde aquí el monte Omuro parece estar abrazado por el Fuji (se llama "Fuji con niño").</p>
                 
                 <h3><i class="fa-solid fa-hiking"></i> Caminata</h3>
                 <p>Haced parte del Sendero Tokai Nature Trail que pasa por aquí. Bosque denso, silencio y naturaleza pura. Ideal para picnic.</p>
             `,
                photoSpot: "El Lago Shoji con el 'Fuji con niño' (Omuro abrazado por el Fuji).",
                ivanChallenge: "Encuentra el punto exacto donde el Omuro parece estar 'abrazado' por el Fuji. Es una vista única y especial."
            }
        ]
    },

    // --- DÍA 15: MONTE FUJI (EXPERIENCIA ALPINA) ---
    {
        day: 15, type: "stay",
        date: "Mar, 11 Agosto", title: "⛰️ Monte Fuji: La Experiencia Alpina",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia15-portada.jpg",

        logistics: [
            { title: "Equipo", text: "Botas de trekking, cortavientos (hace frío arriba) y agua. En agosto NO hace falta equipo técnico." },
            { title: "Shuttle Bus", text: "Coche al Fujisan Parking + Shuttle Bus a la 5ª Estación (2300m)." }
        ],

        additions: [
            "En agosto NO hace falta equipo técnico (cuerdas, piolets, crampones) porque no hay nieve. Es senderismo puro y duro, pero de alta montaña (menos oxígeno, viento frío).",
            "La Opción C (Tocar el Volcán) es perfecta para vosotros. Es la subida parcial, ideal para experimentar el Fuji sin hipotecar el viaje.",
            "Solo necesitáis botas de trekking buenas, cortavientos (hace frío arriba) y agua.",
            "El Monte Ryugatake ofrece la vista exacta del billete de 1000 yenes. Es una de las mejores rutas de senderismo de la zona."
        ],

        prices: {
            transport: "~1.500 JPY (Coche + Shuttle Bus - Opción C)",
            entradas: "~1.000 JPY (Shuttle Bus)",
            food: "~3.000 JPY",
            total: "~5.500 JPY (34€) - Opción C"
        },

        timeline: [
            { time: "08:00", title: "Inicio", desc: "Elegid excursión en el panel central." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: La Vista de los 1000 Yenes",
                summary: "Trekking Monte Ryugatake",
                image: "images/dia15-ryugatake.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Total: ~1.000 JPY (6€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-car"></i> Inicio en Lago Motosu (08:00)</h3>
                 <p>Aparcad en el camping de Motosu.</p>
                 
                 <h3><i class="fa-solid fa-mountain"></i> La Ruta</h3>
                 <p>Subida al Monte Ryugatake (aprox 3-4 horas ida y vuelta). Sendero ancho de bambú enano.</p>
                 
                 <h3><i class="fa-solid fa-eye"></i> La Cima</h3>
                 <p>Vistas frontales brutales del Fuji. Es la vista exacta del billete de 1000 yenes.</p>
                 
                 <h3><i class="fa-solid fa-signal"></i> Nivel</h3>
                 <p>Medio. Requiere esfuerzo pero es segura.</p>
             `,
                photoSpot: "La vista del Fuji desde el Monte Ryugatake (la del billete de 1000 yenes).",
                ivanChallenge: "Saca una foto del Fuji desde la cima y compárala con el billete de 1000 yenes. ¡Es la misma vista!"
            },
            {
                id: "B", name: "Opción B: El Pueblo Sanador",
                summary: "Iyashi no Sato + Cueva del Viento",
                image: "images/dia15-iyashi.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Entradas: ~1.500 JPY (Iyashi + Cuevas) | Total: ~2.500 JPY (15€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-village"></i> Iyashi no Sato (09:30)</h3>
                 <p>El pueblo museo de casas de paja. Aquí es donde Iván puede alquilar la armadura de Samurái (¡hacedlo, las fotos son increíbles!).</p>
                 
<h3><i class="fa-solid fa-tree"></i> Bosque Aokigahara y Cuevas (13:00)</h3>
                <p>Haced la ruta a pie que conecta la Fugaku Wind Cave con la Narusawa Ice Cave (aprox 45 min caminando por el bosque de lava). Es fresco, misterioso y fascinante geológicamente.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=2rEmuSVRHv0" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Cuevas de Viento de Fugaku y Hielo de Narusawa</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Disfrazado de samurái en Iyashi no Sato y el interior de las cuevas de lava.",
                ivanChallenge: "¡ALQUILA LA ARMADURA DE SAMURÁI! Las fotos son épicas y es una experiencia única. Luego explora las cuevas de lava y siente la temperatura diferente."
            },
            {
                id: "C", name: "Opción C: Tocar el Volcán",
                summary: "Subida Parcial al Fuji (Recomendada)",
                image: "images/dia15-fuji.jpg",
                price: "Transporte: ~1.500 JPY (Coche + Shuttle Bus) | Entradas: ~1.000 JPY (Shuttle Bus) | Comida: ~3.000 JPY | Total: ~5.500 JPY (34€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-bus"></i> Logística (08:00)</h3>
                 <p>Coche al Fujisan Parking + Shuttle Bus a la 5ª Estación (2300m).</p>
                 
                 <h3><i class="fa-solid fa-arrow-up"></i> Opción 1: Subida Vertical</h3>
                 <p>Sendero Yoshida. Subid hasta la 6ª Estación (45-60 min) o la 7ª (1h 30m más). Pisaréis la tierra negra volcánica, notaréis la falta de aire y veréis las nubes abajo. Total 3-4 horas.</p>
                 
                 <h3><i class="fa-solid fa-arrows-left-right"></i> Opción 2: Sendero Ochudo (Horizontal)</h3>
                 <p>Sendero que rodea el Fuji a la altura de la 5ª estación. No sube a la cima, avanza en horizontal. Menos gente, vegetación alpina (bonsáis naturales), vistas espectaculares de los lagos abajo. Podéis caminar 2 horas y volver.</p>
             `,
                photoSpot: "Pisando la tierra volcánica del Fuji con las nubes abajo y los lagos visibles.",
                ivanChallenge: "Sube hasta la 6ª o 7ª estación del Fuji. Notarás cómo cambia el aire y la temperatura. Es como estar en otro planeta. Si eliges el sendero horizontal, encuentra los bonsáis naturales."
            },
            {
                id: "D", name: "Opción D: El Mirador Definitivo",
                summary: "Trekking Monte Mitsutoge",
                image: "images/dia15-mitsutoge.jpg",
                price: "Transporte: ~1.000 JPY (Coche) | Total: ~1.000 JPY (6€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-mountain"></i> Inicio del Sendero (08:30)</h3>
                 <p>Acceso desde la zona de Mitsutoge (se puede acortar conduciendo hasta el inicio del sendero alto).</p>
                 
                 <h3><i class="fa-solid fa-route"></i> La Ruta</h3>
                 <p>Aprox 4-5 horas.</p>
                 
                 <h3><i class="fa-solid fa-eye"></i> La Cima</h3>
                 <p>Vistas del Fuji con el lago Kawaguchi debajo. Es espectacular. Favorito de los fotógrafos japoneses.</p>
                 
                 <h3><i class="fa-solid fa-arrow-down"></i> Bajada</h3>
                 <p>Podéis bajar hacia el lado del lago.</p>
             `,
                photoSpot: "Vista panorámica del Fuji con el lago Kawaguchi desde el Monte Mitsutoge.",
                ivanChallenge: "Este es el trekking más largo. Si lo completas, habrás visto una de las mejores vistas del Fuji. Es un reto físico real."
            }
        ]
    },

    // --- DÍA 16: LLEGADA A TOKIO ---
    {
        day: 16, type: "travel",
        date: "Mié, 12 Agosto", title: "🏙️ Llegada a Tokio",
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

        additions: [
            "Estaréis en la estación más concurrida del mundo (Shinjuku). No intentéis coger el metro aquí con equipaje. Salid a la superficie ('West Exit' o 'Taxi Stand') y reservad 2 vans de 8 plazas o 4 taxis para el traslado al hotel.",
            "Kagurazaka es el antiguo barrio de las Geishas, ahora lleno de restaurantes franceses y tiendas tradicionales. Está a 10 min andando desde el hotel.",
            "El Santuario Akagi es un santuario ultra-moderno de cristal y madera diseñado por Kengo Kuma. Es una obra de arquitectura contemporánea increíble."
        ],

        prices: {
            transport: "~4.000 JPY (Tren Fuji Excursion) + ~8.000-10.000 JPY (2 vans de 8 plazas o 4 taxis al hotel, dividido entre 8 = ~1.000-1.250 JPY por persona)",
            food: "~4.000 JPY (Cena en Kagurazaka)",
            total: "~5.000-5.250 JPY (31-32€) por persona"
        },

        timeline: [
            { time: "09:30", title: "Devolución Coche", desc: "Llenad depósito. Devolución en Budget." },
            { time: "11:00", title: "Traslado a Tokio", desc: "Tren Fuji Excursion o Highway Bus." },
            { time: "13:30", title: "Llegada Shinjuku", desc: "Estación más concurrida del mundo. Reservad 2 vans de 8 plazas o 4 taxis para el traslado al hotel." },
            { time: "15:00", title: "Check-in", desc: "Recuperad maletas grandes. Descansad 1 hora." },
            { time: "17:00", title: "Kagurazaka", desc: "Paseo por el barrio. Santuario Akagi (diseñado por Kengo Kuma)." }
        ],

        visualContent: {
            summary: "Llegada a la capital. Recuperación de maletas y primer contacto con el barrio de Iidabashi.",
            details: "Explorad Kagurazaka, el antiguo barrio de Geishas ahora lleno de restaurantes franceses."
        }
    },

    // --- DÍA 17: ASAKUSA Y SKYTREE ---
    {
        day: 17, type: "stay",
        date: "Jue, 13 Agosto", title: "🗼 Asakusa y Tokyo Skytree",
        coords: [35.710, 139.810], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia17-asakusa.jpg", // Foto Asakusa/Sensoji

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Especialmente en Senso-ji. Madrugar ayuda." },
            { title: "Reservas", text: "Reservad entrada web para Skytree para evitar colas de 1h." },
            { title: "Transporte", text: "Metro Oedo Line (E-06) a Ueno-okachimachi, transbordo a Ginza Line (G) hasta Asakusa." }
        ],

        additions: [
            "Zona: NORESTE (Asakusa y Skytree). Nivel de Multitudes: 🔥🔥🔥 ALTO (Especialmente en Senso-ji).",
            "Para Skytree, reservad entrada web para evitar colas de 1h. Las vistas llegan hasta el monte Fuji si está despejado."
        ],

        prices: {
            transport: "~400 JPY (Metro)",
            entrances: "~2.100 JPY (Skytree 450m)",
            food: "~3.500 JPY",
            total: "~6.000 JPY (37€)"
        },

        timeline: [
            { time: "08:30", title: "Salida", desc: "Metro Oedo Line desde Iidabashi." },
            { time: "09:30", title: "Senso-ji", desc: "Templo más antiguo de Tokio (año 628). Linterna roja de 700kg." },
            { time: "11:30", title: "Río Sumida", desc: "Caminata al río. Edificio Asahi (la 'caca dorada')." },
            { time: "12:00", title: "Tokyo Skytree", desc: "Comida en Solamachi. Subida a plataforma 450m." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Ruta Clásica",
                summary: "Senso-ji + Skytree (Recomendada)",
                image: "images/dia17-sensoji.jpg", // Foto Sensoji
                price: "Transporte: ~400 JPY | Entradas: ~2.100 JPY (Skytree) | Comida: ~3.500 JPY | Total: ~6.000 JPY (37€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Senso-ji (09:30)</h3>
                 <p>Templo más antiguo de Tokio (año 628). La linterna roja de Kaminarimon pesa 700kg. Calle Nakamise: 250 metros de tiendas. Comprad Ningyo-yaki (bizcochos con forma de pagoda).</p>
                 
                 <p>El humo del incienso en el centro cura las dolencias (Iván, échate humo en la cabeza para la inteligencia).</p>
                 
<h3><i class="fa-solid fa-tower-broadcast"></i> Tokyo Skytree (12:00)</h3>
                <p>Comida en Solamachi (base de la torre). Subid a la plataforma 450m. Las vistas llegan hasta el monte Fuji si está despejado.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=BjLVSfRIUiw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Templo Senso-ji y Calle Nakamise (Asakusa)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=YpTcCp-xjDA" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Tokyo Skytree (Vistas Panorámicas)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "La linterna roja de Kaminarimon y la vista desde Tokyo Skytree.",
                ivanChallenge: "Échate humo del incienso en la cabeza en Senso-ji (se dice que da inteligencia). Luego desde Skytree, intenta ver el Monte Fuji si está despejado."
            },
            {
                id: "B", name: "Opción B: Cultural",
                summary: "Ueno: Museo Nacional + Mercado Ameyoko",
                image: "images/dia17-ueno.jpg", // Foto Ueno/Museo
                price: "Transporte: ~400 JPY | Entradas: ~1.000 JPY (Museo) | Comida: ~3.000 JPY | Total: ~4.400 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a estación Ueno.</p>
                 
                 <h3><i class="fa-solid fa-landmark"></i> Museo Nacional de Tokio</h3>
                 <p>Uno de los museos más importantes de Japón. Colección de arte y arqueología japonesa.</p>
                 
                 <h3><i class="fa-solid fa-fish"></i> Mercado Ameyoko</h3>
                 <p>Mercado callejero bajo las vías del tren. Comida callejera, souvenirs y ambiente local.</p>
             `,
                photoSpot: "El mercado Ameyoko bajo las vías del tren y las salas del Museo Nacional.",
                ivanChallenge: "En el Museo Nacional, busca la espada de samurái más antigua. Luego en Ameyoko, prueba el takoyaki más barato que encuentres."
            },
            {
                id: "C", name: "Opción C: Cocina",
                summary: "Kappabashi: Calle de los Cuchillos",
                image: "images/dia17-kappabashi.jpg", // Foto Kappabashi
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~2.500 JPY | Total: ~2.900 JPY (18€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a estación Tawaramachi (Ginza Line).</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Calle Kappabashi</h3>
                 <p>La calle de los cuchillos y utensilios de cocina. Tiendas especializadas para chefs profesionales. Podéis comprar cuchillos japoneses de alta calidad.</p>
             `,
                photoSpot: "Los cuchillos japoneses expuestos en las vitrinas de Kappabashi.",
                ivanChallenge: "Encuentra el cuchillo más caro de la calle y pregunta para qué se usa. Los cuchillos japoneses son obras de arte."
            },
            {
                id: "D", name: "Opción D: Local",
                summary: "Hoppy Street: Tabernas al Atardecer",
                image: "images/dia17-hoppy.jpg", // Foto Hoppy Street
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida/Bebida: ~4.000 JPY | Total: ~4.400 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Asakusa.</p>
                 
                 <h3><i class="fa-solid fa-beer"></i> Hoppy Street</h3>
                 <p>Paseo por Hoppy Street (tabernas) al atardecer. Ambiente local auténtico. Comida callejera y bebidas.</p>
             `,
                photoSpot: "Las tabernas iluminadas de Hoppy Street al atardecer.",
                ivanChallenge: "Prueba el 'Hoppy' (bebida local) y encuentra la taberna más pequeña de la calle."
            },
            {
                id: "E", name: "Opción E: Niños",
                summary: "Bandai + Parque Hanayashiki",
                image: "images/dia17-bandai.jpg", // Foto Bandai/Hanayashiki
                price: "Transporte: ~400 JPY | Entradas: ~1.000 JPY (Hanayashiki) | Comida: ~3.000 JPY | Total: ~4.400 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Asakusa.</p>
                 
                 <h3><i class="fa-solid fa-robot"></i> Sede de Bandai</h3>
                 <p>Showroom de Bandai con figuras y juguetes. Para fans de Gundam, Dragon Ball, etc..</p>
                 
                 <h3><i class="fa-solid fa-ferris-wheel"></i> Parque Hanayashiki</h3>
                 <p>Parque de atracciones antiguo cerca de Senso-ji. Montañas rusas y atracciones clásicas.</p>
             `,
                photoSpot: "Las figuras de Gundam en Bandai y las atracciones del parque Hanayashiki.",
                ivanChallenge: "En Bandai, encuentra la figura más grande de Gundam. Luego sube a la montaña rusa más antigua del parque."
            }
        ]
    },

    // --- DÍA 18: SHIBUYA Y HARAJUKU ---
    {
        day: 18, type: "stay",
        date: "Vie, 14 Agosto", title: "🚦 Shibuya y Harajuku",
        coords: [35.659, 139.701], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/shibuya_crossing.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥🔥 MUY ALTO. Shibuya es el caos organizado." },
            { title: "Reservas", text: "Reservad Shibuya Sky para las 17:30 (atardecer)." },
            { title: "Transporte", text: "Tren JR Chuo-Sobu Line (Amarillo) desde Iidabashi a Yoyogi Station." }
        ],

        additions: [
            "Zona: OESTE (Shibuya y Harajuku). Nivel de Multitudes: 🔥🔥🔥🔥 MUY ALTO (Shibuya es el caos organizado).",
            "La calle Takeshita en Harajuku estará llenísima. Agarraos bien las mochilas. Comed un algodón de azúcar arcoíris en Totti Candy Factory.",
            "Para Shibuya Sky, reservad entrada para las 17:30 (atardecer). Las escaleras mecánicas al aire libre ofrecen la mejor vista moderna de Tokio."
        ],

        prices: {
            transport: "~400 JPY (Tren JR)",
            entrances: "~2.200 JPY (Shibuya Sky)",
            food: "~4.000 JPY",
            total: "~6.600 JPY (41€)"
        },

        timeline: [
            { time: "09:00", title: "Salida", desc: "Tren JR Chuo-Sobu desde Iidabashi." },
            { time: "09:30", title: "Meiji Jingu", desc: "Entrada norte. Bosque denso. Barriles de Sake y Vino." },
            { time: "11:00", title: "Harajuku", desc: "Calle Takeshita. Epicentro de la moda Kawaii." },
            { time: "13:30", title: "Shibuya", desc: "Comida sushi en cinta giratoria." },
            { time: "15:00", title: "Scramble Crossing", desc: "Estatua Hachiko. Cruce más famoso del mundo." },
            { time: "17:00", title: "Shibuya Sky", desc: "Atardecer desde Scramble Square." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Ruta Icónica",
                summary: "Meiji Jingu + Harajuku + Shibuya (Recomendada)",
                image: "images/dia18-shibuya.jpg", // Foto Shibuya Crossing
                price: "Transporte: ~400 JPY | Entradas: ~2.200 JPY (Shibuya Sky) | Comida: ~4.000 JPY | Total: ~6.600 JPY (41€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-torii-gate"></i> Meiji Jingu (09:30)</h3>
                 <p>Entrada norte (menos gente). Caminad 15 min por el bosque denso. Veréis barriles de Sake (donación japonesa) frente a los de Vino (donación francesa).</p>
                 
                 <h3><i class="fa-solid fa-rainbow"></i> Harajuku (11:00)</h3>
                 <p>Calle Takeshita: epicentro de la moda Kawaii. Estará llenísima. Comed algodón de azúcar arcoíris en Totti Candy Factory.</p>
                 
                 <h3><i class="fa-solid fa-sushi"></i> Shibuya (13:30)</h3>
                 <p>Sushi en cinta giratoria (Kura Sushi o Sushiro) para vivir la experiencia tecnológica.</p>
                 
                 <h3><i class="fa-solid fa-crosshairs"></i> Scramble Crossing (15:00)</h3>
                 <p>Salida "Hachiko". Foto con la estatua del perro. Cruzad el paso de peatones más famoso del mundo (pasan 3.000 personas por semáforo).</p>
                 
<h3><i class="fa-solid fa-cloud"></i> Shibuya Sky (17:00)</h3>
                <p>Subid las escaleras mecánicas al aire libre. Es la mejor vista moderna de Tokio.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=-0bqne7MFfU" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Santuario Meiji Jingu (Parque Yoyogi)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=t5v3ylsJDPk" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Calle Takeshita y Harajuku</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=zSNa6OCTLWU" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Cruce de Shibuya y Estatua de Hachiko</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El cruce de Shibuya desde arriba y la estatua de Hachiko.",
                ivanChallenge: "Cruzad el Scramble Crossing varias veces. Es como estar en un videojuego. Luego desde Shibuya Sky, cuenta cuántos edificios reconoces."
            },
            {
                id: "B", name: "Opción B: Verde",
                summary: "Parque Shinjuku Gyoen (Picnic)",
                image: "images/dia18-shinjuku-gyoen.jpg", // Foto Parque Shinjuku Gyoen
                price: "Transporte: ~400 JPY | Entradas: ~500 JPY (Parque) | Comida: ~3.000 JPY (Picnic) | Total: ~3.900 JPY (24€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Shinjuku-sanchome.</p>
                 
                 <h3><i class="fa-solid fa-tree"></i> Parque Shinjuku Gyoen</h3>
                 <p>Uno de los parques más bonitos de Tokio. Ideal para picnic. Jardines japoneses, franceses e ingleses.</p>
             `,
                photoSpot: "Los jardines del parque Shinjuku Gyoen.",
                ivanChallenge: "Encuentra los tres estilos de jardín diferentes (japonés, francés e inglés) y sácate una foto en cada uno."
            },
            {
                id: "C", name: "Opción C: Nocturna",
                summary: "Kabukicho (Godzilla) + Omoide Yokocho",
                image: "images/dia18-kabukicho.jpg", // Foto Kabukicho/Godzilla
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida/Bebida: ~5.000 JPY | Total: ~5.400 JPY (33€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (17:00)</h3>
                 <p>Tren a Shinjuku. Salida Este (East Exit).</p>
                 
                 <h3><i class="fa-solid fa-dragon"></i> Kabukicho (17:30)</h3>
                 <p>Barrio de entretenimiento. Ver el Godzilla gigante en el Hotel Gracery (sale cada hora desde la azotea). Es el barrio más animado de noche. Cuidado con los promotores de bares.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Omoide Yokocho (19:00)</h3>
                 <p>Cena en los callejones estrechos llenos de yakitori (brochetas). Ambiente auténtico de postguerra. Los restaurantes son pequeños (10-15 personas máximo).</p>
                 
<h3><i class="fa-solid fa-moon"></i> Paseo Nocturno (20:30)</h3>
                <p>Pasead por las calles iluminadas de Shinjuku. El barrio cobra vida de noche con neones y música.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=esxATRtasuU" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Shinjuku: Edificio del Gobierno y Kabukicho</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El Godzilla gigante en Kabukicho y los callejones de Omoide Yokocho.",
                ivanChallenge: "Sácate una foto con el Godzilla gigante. Luego en Omoide Yokocho, prueba el yakitori más picante que encuentres."
            },
            {
                id: "D", name: "Opción D: Lujo",
                summary: "Omotesando: Arquitectura Prada/Dior",
                image: "images/dia18-omotesando.jpg", // Foto Omotesando
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~6.000 JPY (restaurantes lujosos) | Total: ~6.400 JPY (40€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Omotesando.</p>
                 
                 <h3><i class="fa-solid fa-gem"></i> Omotesando</h3>
                 <p>Barrio de lujo. Arquitectura de Prada, Dior y otras marcas de alta costura. Edificios diseñados por arquitectos famosos.</p>
             `,
                photoSpot: "Los edificios de Prada y Dior en Omotesando.",
                ivanChallenge: "Encuentra el edificio de Prada diseñado por Herzog & de Meuron. Es una obra de arte arquitectónica."
            },
            {
                id: "E", name: "Opción E: Vistas Gratis",
                summary: "Edificio Gobierno (Tocho) - Vistas Gratuitas",
                image: "images/dia18-tocho.jpg", // Foto Tocho
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~3.000 JPY | Total: ~3.400 JPY (21€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Shinjuku.</p>
                 
                 <h3><i class="fa-solid fa-building"></i> Edificio Gobierno (Tocho)</h3>
                 <p>Subid a las plantas 45 y 32 (gratis). Vistas panorámicas de Tokio sin pagar entrada.</p>
             `,
                photoSpot: "Las vistas desde el edificio Tocho.",
                ivanChallenge: "Desde el Tocho, identifica el Monte Fuji si está despejado. Luego cuenta cuántos rascacielos puedes ver."
            }
        ]
    },

    // --- DÍA 19: AKIHABARA Y GINZA ---
    {
        day: 19, type: "stay",
        date: "Sáb, 15 Agosto", title: "🎮 Akihabara y Ginza",
        coords: [35.698, 139.773], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/akihabara.png",

        logistics: [
            { title: "Horarios", text: "Tiendas en Akihabara no abren hasta las 10:00-11:00." },
            { title: "Multitudes", text: "🔥🔥 MEDIO. Akihabara se llena por la tarde." },
            { title: "Transporte", text: "Tren JR Chuo-Sobu (Amarillo) desde Iidabashi a Akihabara (3 paradas, 7 min)." }
        ],

        additions: [
            "Zona: CENTRO (Akihabara y Ginza). Nivel de Multitudes: 🔥🔥 MEDIO (Akihabara se llena por la tarde).",
            "Las tiendas en Akihabara no abren hasta las 10:00 o 11:00. No madruguéis.",
            "En Akihabara, si os atrevéis, entrad al Maid Café (Maidreamin). Es caro y vergonzoso, pero muy japonés."
        ],

        prices: {
            transport: "~400 JPY (Tren JR)",
            entradas: "Gratis (solo compras)",
            food: "~4.000 JPY",
            total: "~4.400 JPY (27€) - sin compras grandes"
        },

        timeline: [
            { time: "10:00", title: "Akihabara", desc: "Electric Town. Radio Kaikan, Super Potato, Maid Café." },
            { time: "13:30", title: "Comida", desc: "Curry japonés o Roast Beef." },
            { time: "15:00", title: "Ginza", desc: "Ginza Six, Nissan Crossing, Itoya." },
            { time: "18:00", title: "Kabuki-za", desc: "Fachada iluminada del teatro." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Otaku y Lujo",
                summary: "Akihabara + Ginza (Recomendada)",
                image: "images/dia19-akihabara.jpg", // Foto Akihabara
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~4.000 JPY | Total: ~4.400 JPY (27€) - sin compras grandes",

                fullDesc: `
                 <h3><i class="fa-solid fa-gamepad"></i> Akihabara (10:00)</h3>
                 <p>Electric Town. Radio Kaikan (10 plantas de figuras). Super Potato (videojuegos retro, GameBoy, SNES). Maid Café (Maidreamin).</p>
                 
                 <h3><i class="fa-solid fa-gem"></i> Ginza (15:00)</h3>
                 <p>Barrio más caro. Ginza Six (centro comercial). Librería Tsutaya en planta 6 y jardín de la azotea. Nissan Crossing (showroom de coches futuristas gratis). Itoya (papelería gigante).</p>
                 
<h3><i class="fa-solid fa-theater-masks"></i> Kabuki-za (18:00)</h3>
                <p>Fachada iluminada del teatro y tiendas de souvenirs tradicionales.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=39z6HQsnRnc" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Barrio de Akihabara (Electric Town y Cultura Otaku)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Akihabara con sus neones y el interior de Super Potato con videojuegos retro.",
                ivanChallenge: "En Super Potato, encuentra el videojuego más antiguo que puedas. Luego en Ginza, compra un bolígrafo de alta calidad en Itoya como recuerdo."
            },
            {
                id: "B", name: "Opción B: Imperial",
                summary: "Jardines del Palacio Imperial",
                image: "images/dia19-palacio.jpg", // Foto Palacio Imperial
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~3.000 JPY | Total: ~3.400 JPY (21€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Otemachi.</p>
                 
                 <h3><i class="fa-solid fa-crown"></i> Jardines del Palacio Imperial</h3>
                 <p>Jardines inmensos y gratuitos. Residencia del Emperador de Japón. Solo se puede visitar con reserva previa (gratis).</p>
             `,
                photoSpot: "Los jardines del Palacio Imperial con los rascacielos de fondo.",
                ivanChallenge: "Encuentra el puente Nijubashi (el puente doble) que es el símbolo del Palacio Imperial."
            },
            {
                id: "C", name: "Opción C: Pescado",
                summary: "Mercado de Tsukiji (Comida Callejera)",
                image: "images/dia19-tsukiji.jpg", // Foto Tsukiji
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~5.000 JPY (comida callejera) | Total: ~5.400 JPY (33€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (09:00)</h3>
                 <p>Metro a Tsukiji. Salida 1.</p>
                 
                 <h3><i class="fa-solid fa-fish"></i> Mercado Exterior de Tsukiji (09:30)</h3>
                 <p>Mercado de pescado. Comida callejera fresca. Sushi, sashimi y marisco recién pescado. Los mejores puestos abren temprano (antes de las 10:00).</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Desayuno/Almuerzo (10:30)</h3>
                 <p>Probad el sushi más fresco del mercado. Los puestos de atún toro (toro) son los más populares. También hay tamagoyaki (tortilla dulce) y otros snacks.</p>
                 
<h3><i class="fa-solid fa-shopping-bag"></i> Compras (12:00)</h3>
                <p>Tiendas de cuchillos japoneses, utensilios de cocina y productos del mar. Regreso al hotel en metro.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=Qr4pCch8WqE" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Mercado de Pescado de Tsukiji (Outer Market)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "Los puestos de comida callejera del mercado de Tsukiji.",
                ivanChallenge: "Prueba el sushi más fresco que encuentres en el mercado. Luego encuentra el puesto de atún toro (el más caro)."
            },
            {
                id: "D", name: "Opción D: Harry Potter",
                summary: "Warner Bros Studio Tour",
                image: "images/dia19-harrypotter.jpg", // Foto Harry Potter
                price: "Transporte: ~600 JPY | Entradas: ~6.300 JPY (Studio Tour) | Comida: ~3.000 JPY | Total: ~9.900 JPY (61€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro Oedo a Toshimaen.</p>
                 
                 <h3><i class="fa-solid fa-wand-magic-sparkles"></i> Warner Bros Studio Tour</h3>
                 <p>Tour interactivo del mundo de Harry Potter. Sets originales, efectos especiales y experiencias mágicas.</p>
             `,
                photoSpot: "Los sets de Harry Potter y la experiencia mágica.",
                ivanChallenge: "Encuentra la varita de Harry Potter y prueba lanzar un hechizo. Luego prueba la cerveza de mantequilla."
            },
            {
                id: "E", name: "Opción E: Marunouchi",
                summary: "Tokyo Station + Fachada de Ladrillo",
                image: "images/dia19-tokyo-station.jpg", // Foto Tokyo Station
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~3.000 JPY | Total: ~3.400 JPY (21€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Tokyo Station.</p>
                 
                 <h3><i class="fa-solid fa-building"></i> Tokyo Station</h3>
                 <p>Fachada de ladrillo rojo restaurada. Estación histórica. Zona de compras y restaurantes.</p>
             `,
                photoSpot: "La fachada de ladrillo rojo de Tokyo Station.",
                ivanChallenge: "Encuentra el reloj histórico de la estación y sácate una foto con él."
            }
        ]
    },

    // --- DÍA 20: TEAMLAB Y ODAIBA ---
    {
        day: 20, type: "stay",
        date: "Dom, 16 Agosto", title: "🌊 TeamLab y Odaiba",
        coords: [35.630, 139.776], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/teamlab.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥🔥 ALTO. Es sábado." },
            { title: "Ropa", text: "TeamLab Planets: Descalzos. Pantalones remangables (agua llega a la rodilla)." }
        ],

        additions: [
            "Zona: BAHÍA (TeamLab y Odaiba). Nivel de Multitudes: 🔥🔥🔥 ALTO (Sábado).",
            "TeamLab Planets: Descalzos. Pantalones remangables (el agua llega a la rodilla). Caminaréis por esferas de luz y agua con peces proyectados. Experiencia única de 1.5 horas.",
            "En el monorraíl Yurikamome, intentad sentaros en el primer vagón. No tiene conductor y las vistas son panorámicas.",
            "El Gundam Unicorn hace una transformación a las 13:00, 15:00 y 17:00 (mueve el cuerno y se ilumina). Es espectacular verlo."
        ],

        prices: {
            transport: "~600 JPY (Metro + Monorraíl)",
            entradas: "~3.200 JPY (TeamLab Planets)",
            food: "~3.500 JPY",
            total: "~7.300 JPY (45€) - Opción A"
        },

        timeline: [
            { time: "09:00", title: "Salida", desc: "Metro Yurakucho Line desde Iidabashi." },
            { time: "09:30", title: "TeamLab Planets", desc: "Experiencia sensorial. 1.5 horas." },
            { time: "11:30", title: "Monorraíl", desc: "Yurikamome. Primer vagón sin conductor." },
            { time: "12:00", title: "Odaiba", desc: "Estatua de la Libertad, Gundam Unicorn." },
            { time: "15:00", title: "Miraikan", desc: "Museo de Ciencia. Robot ASIMO." },
            { time: "17:30", title: "Atardecer", desc: "Playa artificial de Odaiba." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Ruta Sensorial",
                summary: "TeamLab + Odaiba",
                image: "images/dia20-teamlab.jpg",
                price: "Transporte: ~600 JPY (Metro + Monorraíl) | Entradas: ~3.200 JPY (TeamLab Planets) | Comida: ~3.500 JPY | Total: ~7.300 JPY (45€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-lightbulb"></i> TeamLab Planets (09:30)</h3>
                 <p>Descalzos. Pantalones remangables. Caminaréis por esferas de luz y agua con peces proyectados. Experiencia única de 1.5 horas.</p>
                 
                 <h3><i class="fa-solid fa-train"></i> Monorraíl Yurikamome (11:30)</h3>
                 <p>Intentad sentaros en el primer vagón. No tiene conductor y las vistas son panorámicas. Cruzando el Rainbow Bridge.</p>
                 
                 <h3><i class="fa-solid fa-robot"></i> Odaiba (12:00)</h3>
                 <p>Estatua de la Libertad y puente. Gundam Unicorn: a las 13:00, 15:00 y 17:00 hace transformación (mueve el cuerno y se ilumina).</p>
                 
                 <h3><i class="fa-solid fa-flask"></i> Miraikan (15:00)</h3>
                 <p>Museo de Ciencia. Demostración del robot ASIMO o androides humanos.</p>
                 
<h3><i class="fa-solid fa-sun"></i> Atardecer (17:30)</h3>
                <p>Playa artificial de Odaiba. No para bañarse, pero sí para ver el atardecer con los barcos pasando.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=md5C3Bi9BYM" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> TeamLab Planets TOKYO (Arte Digital)</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=dtfd2vW-2UQ" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Odaiba: Gundam Gigante y Paseo Marítimo</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "TeamLab Planets con las esferas de luz y el Gundam Unicorn transformándose.",
                ivanChallenge: "En TeamLab, intenta 'tocar' los peces proyectados. Es una experiencia inmersiva increíble. Luego espera a ver la transformación del Gundam a las 13:00, 15:00 o 17:00."
            },
            {
                id: "B", name: "Opción B: Disney",
                summary: "Tokyo DisneySea",
                image: "images/dia20-disneysea.jpg", // Foto DisneySea
                price: "Transporte: ~800 JPY (Tren + Bus) | Entradas: ~8.200 JPY (DisneySea) | Comida: ~4.000 JPY | Total: ~13.000 JPY (80€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (08:00)</h3>
                 <p>Tren JR Keiyo Line a Maihama, luego monorraíl Disney Resort Line o bus a Tokyo DisneySea.</p>
                 
                 <h3><i class="fa-solid fa-mountain"></i> Tokyo DisneySea (09:00)</h3>
                 <p>Parque temático único en el mundo. Temática marina y aventuras. Montañas rusas y atracciones acuáticas. Entrada ~8.200 JPY. Llegad temprano para evitar colas.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Comida en el Parque (13:00)</h3>
                 <p>Comida temática en restaurantes del parque. Hay opciones desde comida rápida hasta restaurantes con reserva.</p>
                 
                 <h3><i class="fa-solid fa-fireworks"></i> Espectáculo Nocturno (19:00)</h3>
                 <p>Espectáculo de luces y fuegos artificiales sobre el agua (si está disponible). Regreso al hotel en tren.</p>
             `,
                photoSpot: "Las atracciones de DisneySea y el volcán del centro del parque.",
                ivanChallenge: "Sube a la montaña rusa Journey to the Center of the Earth. Es una de las mejores del mundo."
            },
            {
                id: "C", name: "Opción C: Compras",
                summary: "DiverCity + Decks (Legoland, Joypolis)",
                image: "images/dia20-odaiba-compras.jpg", // Foto Odaiba compras
                price: "Transporte: ~600 JPY | Entradas: ~3.000 JPY (Legoland/Joypolis) | Comida: ~3.500 JPY | Total: ~7.100 JPY (44€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (10:00)</h3>
                 <p>Monorraíl Yurikamome a Odaiba. Intentad sentaros en el primer vagón para vistas panorámicas.</p>
                 
                 <h3><i class="fa-solid fa-shopping-bag"></i> DiverCity (10:30)</h3>
                 <p>Centro comercial con el Gundam Unicorn gigante frente a la entrada. Tiendas de anime, videojuegos y tecnología.</p>
                 
                 <h3><i class="fa-solid fa-gamepad"></i> Legoland Discovery Center (12:00)</h3>
                 <p>Parque temático de Lego. Ideal para familias. Entrada ~2.400 JPY.</p>
                 
                 <h3><i class="fa-solid fa-vr-cardboard"></i> Joypolis (14:00)</h3>
                 <p>Parque de atracciones tech con realidad virtual y simuladores. Entrada ~800 JPY (solo entrada) + atracciones individuales.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena (18:00)</h3>
                 <p>Cena en Decks o DiverCity. Regreso al hotel en monorraíl y metro.</p>
             `,
                photoSpot: "El Gundam Unicorn frente a DiverCity y las atracciones de Joypolis.",
                ivanChallenge: "En Legoland, construye algo con las piezas. Luego en Joypolis, prueba el simulador de vuelo más realista."
            },
            {
                id: "D", name: "Opción D: Relax",
                summary: "Spa Izumi Tenku no Yu",
                image: "images/dia20-spa.jpg", // Foto Spa
                price: "Transporte: ~600 JPY | Entradas: ~1.500 JPY (Spa) | Comida: ~3.000 JPY | Total: ~5.100 JPY (31€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Monorraíl a Ariake.</p>
                 
                 <h3><i class="fa-solid fa-hot-tub-person"></i> Spa Izumi Tenku no Yu</h3>
                 <p>Spa con baños termales y vistas panorámicas. Relajación total después de días intensos.</p>
             `,
                photoSpot: "Las vistas desde el spa y los baños termales.",
                ivanChallenge: "Relájate completamente en el spa. Es el momento perfecto para descansar después de tantos días de aventuras."
            },
            {
                id: "E", name: "Opción E: Mercado",
                summary: "Mercado de Pescado de Toyosu",
                image: "images/dia20-toyosu.jpg", // Foto Mercado Toyosu
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~5.000 JPY (sushi fresco) | Total: ~5.400 JPY (33€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Toyosu.</p>
                 
                 <h3><i class="fa-solid fa-fish"></i> Mercado de Pescado de Toyosu</h3>
                 <p>El mercado de pescado más grande del mundo (sucesor de Tsukiji). Subasta de atún temprano (madrugada) o comida fresca al mediodía.</p>
             `,
                photoSpot: "La subasta de atún y los puestos de sushi fresco del mercado.",
                ivanChallenge: "Si vais temprano, intenta ver la subasta de atún (es espectacular). Luego prueba el sushi más fresco que hayas comido nunca."
            }
        ]
    },

    // --- DÍA 21: NAKANO ---
    {
        day: 21, type: "stay",
        date: "Lun, 17 Agosto", title: "🎯 Nakano: Retro y Coleccionismo",
        coords: [35.710, 139.666], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/nakano_broadway.png",

        logistics: [
            { title: "Multitudes", text: "🔥🔥 MEDIO." },
            { title: "Transporte", text: "Metro Línea Tozai (Azul Cielo) desde Iidabashi a Nakano (15 min)." }
        ],

        additions: [
            "Zona: SUBCULTURAS (Nakano). Nivel de Multitudes: 🔥🔥 MEDIO.",
            "Nakano Broadway es el paraíso del coleccionista serio. Aquí se encuentran cosas que no hay en Akihabara: juegos de GameCube, N64, figuras de los 80.",
            "En el sótano de Nakano Broadway hay una heladería famosa (Daily Chico) que sirve un helado de 8 pisos de altura. ¡Reto para Iván!"
        ],

        prices: {
            transport: "~400 JPY (Metro)",
            entradas: "Gratis",
            food: "~3.500 JPY",
            total: "~3.900 JPY (24€)"
        },

        timeline: [
            { time: "10:00", title: "Salida", desc: "Metro Tozai Line desde Iidabashi." },
            { time: "10:30", title: "Nakano Broadway", desc: "Paraíso del coleccionista. Tiendas Mandarake especializadas." },
            { time: "14:00", title: "Shinjuku", desc: "Gato 3D en Cross Shinjuku Vision. Tienda Disney o Don Quijote." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: Retro y Coleccionismo",
                summary: "Nakano Broadway + Shinjuku (Recomendada)",
                image: "images/dia21-nakano.jpg", // Foto Nakano Broadway
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~3.500 JPY | Total: ~3.900 JPY (24€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-building"></i> Nakano Broadway (10:30)</h3>
                 <p>Paraíso del coleccionista serio. Tiendas Mandarake especializadas (una solo de robots, otra de magical girls, otra de relojes antiguos).</p>
                 
                 <p>Para Iván: Aquí se encuentran cosas que no hay en Akihabara. Juegos de GameCube, N64, figuras de los 80.</p>
                 
                 <h3><i class="fa-solid fa-ice-cream"></i> Comida</h3>
                 <p>Heladería Daily Chico: helado de 8 pisos de altura. ¡Reto!</p>
                 
                 <h3><i class="fa-solid fa-cat"></i> Shinjuku (14:00)</h3>
                 <p>Gato 3D en la pantalla gigante de Cross Shinjuku Vision. Tienda Disney Flagship o Don Quijote gigante.</p>
             `,
                photoSpot: "El interior de Nakano Broadway con sus tiendas especializadas y el gato 3D de Shinjuku.",
                ivanChallenge: "Encuentra un juego retro que no conozcas en Nakano Broadway. Luego intenta comer el helado de 8 pisos de Daily Chico. ¡Es un reto físico!"
            },
            {
                id: "B", name: "Opción B: Femenina",
                summary: "Ikebukuro: Sunshine City + Otome Road",
                image: "images/dia21-ikebukuro.jpg", // Foto Ikebukuro
                price: "Transporte: ~400 JPY | Entradas: ~1.000 JPY (Sunshine City) | Comida: ~3.000 JPY | Total: ~4.400 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Metro a Ikebukuro.</p>
                 
                 <h3><i class="fa-solid fa-building"></i> Sunshine City</h3>
                 <p>Centro comercial gigante con acuario y observatorio.</p>
                 
                 <h3><i class="fa-solid fa-heart"></i> Otome Road</h3>
                 <p>Calle especializada en manga/anime para chicas. Tiendas de BL y merchandising femenino.</p>
             `,
                photoSpot: "Sunshine City y las tiendas de Otome Road.",
                ivanChallenge: "En Otome Road, encuentra el manga más popular del momento. Es una zona muy diferente a Akihabara."
            },
            {
                id: "C", name: "Opción C: Urbana",
                summary: "Tokyo Dome City (Montaña Rusa)",
                image: "images/dia21-tokyo-dome.jpg", // Foto Tokyo Dome
                price: "Transporte: ~200 JPY (caminando desde hotel) | Entradas: ~1.200 JPY (atracciones) | Comida: ~3.000 JPY | Total: ~4.400 JPY (27€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-walking"></i> Transporte</h3>
                 <p>Caminad desde el hotel a Tokyo Dome City.</p>
                 
                 <h3><i class="fa-solid fa-train"></i> Tokyo Dome City</h3>
                 <p>Parque de atracciones con montaña rusa. Cerca del hotel, ideal para un día relajado.</p>
             `,
                photoSpot: "La montaña rusa de Tokyo Dome City.",
                ivanChallenge: "Sube a la montaña rusa más alta del parque. Luego encuentra el Tokyo Dome (estadio de béisbol) al lado."
            },
            {
                id: "D", name: "Opción D: Ghibli",
                summary: "Museo Ghibli (si tenéis entradas)",
                image: "images/dia21-ghibli.jpg", // Foto Museo Ghibli
                price: "Transporte: ~600 JPY | Entradas: ~1.000 JPY (Ghibli - muy difícil conseguir) | Comida: ~3.000 JPY | Total: ~4.600 JPY (28€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Mitaka.</p>
                 
<h3><i class="fa-solid fa-film"></i> Museo Ghibli</h3>
                <p>Museo del estudio de animación Ghibli. Entradas muy limitadas, hay que reservar con meses de antelación.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=Q4tBHDupFQw" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Museo Ghibli en Mitaka</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El museo Ghibli y las esculturas de Totoro.",
                ivanChallenge: "Encuentra la habitación secreta del museo (hay una). Luego busca todas las referencias a tus películas favoritas de Ghibli."
            },
            {
                id: "E", name: "Opción E: Barrio",
                summary: "Shimokitazawa: Ropa Vintage",
                image: "images/dia21-shimokitazawa.jpg", // Foto Shimokitazawa
                price: "Transporte: ~400 JPY | Entradas: Gratis | Comida: ~3.000 JPY | Total: ~3.400 JPY (21€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Shimokitazawa.</p>
                 
                 <h3><i class="fa-solid fa-shirt"></i> Shimokitazawa</h3>
                 <p>Barrio bohemio lleno de tiendas de ropa vintage y cafeterías alternativas. Ambiente relajado y joven.</p>
             `,
                photoSpot: "Las calles de Shimokitazawa con sus tiendas vintage.",
                ivanChallenge: "Encuentra la tienda de ropa vintage más antigua del barrio. Luego prueba un café en una cafetería alternativa."
            }
        ]
    },

    // --- DÍA 22: KAMAKURA ---
    {
        day: 22, type: "stay",
        date: "Mar, 18 Agosto", title: "🗿 Kamakura: El Gran Buda",
        coords: [35.319, 139.546], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/kamakura_buda.png",

        logistics: [
            { title: "Transporte", text: "Tren desde Iidabashi a Shinjuku, luego JR Shonan-Shinjuku Line a Kamakura (1 hora)." }
        ],

        additions: [
            "Kamakura fue la capital de Japón durante el periodo Kamakura (1192-1333). Es una ciudad histórica llena de templos y santuarios.",
            "El Gran Buda de Kamakura es de bronce y tiene 11 metros de altura. Podéis entrar dentro de la estatua por 20 yenes. Es una experiencia única.",
            "El tren Enoden (verde y crema) es un tren eléctrico antiguo muy pintoresco. Conecta Kamakura con las playas y templos de la zona.",
            "La comida típica de Kamakura es el whitebait (pescaditos blancos diminutos) sobre arroz. Es una especialidad local deliciosa."
        ],

        prices: {
            transport: "~1.200 JPY (Tren a Kamakura + Enoden)",
            entradas: "~300 JPY (Gran Buda) + ~400 JPY (Hasedera)",
            food: "~3.000 JPY",
            total: "~4.900 JPY (30€) - Opción A"
        },

        timeline: [
            { time: "08:30", title: "Salida", desc: "Tren a Shinjuku." },
            { time: "10:00", title: "Kamakura", desc: "Tren Enoden (verde y crema) hasta Hase." },
            { time: "10:30", title: "Gran Buda", desc: "Kotoku-in. Buda de bronce de 11 metros. Podéis entrar dentro por 20 yenes." },
            { time: "12:00", title: "Hasedera", desc: "Templo famoso por estatuas Jizo y vistas al mar." },
            { time: "13:30", title: "Comida", desc: "Whitebait (pescaditos blancos) sobre arroz." },
            { time: "15:00", title: "Komachi-dori", desc: "Calle llena de tiendas de galletas y artesanía." }
        ],

        hasOptions: true,
        options: [
            {
                id: "A", name: "Opción A: El Gran Buda",
                summary: "Kamakura Clásica",
                image: "images/dia22-kamakura.jpg",
                price: "Transporte: ~1.200 JPY (Tren a Kamakura + Enoden) | Entradas: ~700 JPY (Gran Buda + Hasedera) | Comida: ~3.000 JPY | Total: ~4.900 JPY (30€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (08:30)</h3>
                 <p>Tren a Shinjuku, luego JR Shonan-Shinjuku Line a Kamakura (1 hora).</p>
                 
                 <h3><i class="fa-solid fa-train"></i> Tren Enoden (10:00)</h3>
                 <p>Tren eléctrico antiguo (verde y crema) hasta la estación Hase.</p>
                 
                 <h3><i class="fa-solid fa-monument"></i> Kotoku-in - Gran Buda (10:30)</h3>
                 <p>Buda de bronce de 11 metros sentado al aire libre. Podéis entrar dentro de la estatua por 20 yenes.</p>
                 
                 <h3><i class="fa-solid fa-temple-buddhist"></i> Hasedera (12:00)</h3>
                 <p>Templo famoso por sus estatuas Jizo y vistas al mar.</p>
                 
                 <h3><i class="fa-solid fa-fish"></i> Comida (13:30)</h3>
                 <p>Whitebait (pescaditos blancos diminutos) sobre arroz, especialidad local.</p>
                 
                 <h3><i class="fa-solid fa-shopping-bag"></i> Komachi-dori (15:00)</h3>
                 <p>Calle llena de tiendas de galletas y artesanía. Probad las galletas de Kamakura (Hato Sabure) y los dulces tradicionales.</p>
                 
                 <h3><i class="fa-solid fa-torii-gate"></i> Santuario Tsurugaoka Hachimangu (16:30)</h3>
                 <p>El santuario más importante de Kamakura. Subid las escaleras desde Komachi-dori. Vistas del templo y del mar.</p>
                 
<h3><i class="fa-solid fa-utensils"></i> Cena (18:00)</h3>
                <p>Cena en Kamakura o regreso a Tokio. Regreso en tren JR Shonan-Shinjuku Line.</p>
                
                <div class="video-links" style="margin-top:25px; padding-top:20px; border-top:1px solid rgba(255,255,255,0.1);">
                    <h4 style="color:var(--danger); margin-bottom:15px;"><i class="fa-brands fa-youtube"></i> Videos de Referencia</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=UqN9-K_n-m8" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Kamakura: Gran Buda (Kotoku-in) y Templo Hase-dera</a></li>
                        <li style="margin-bottom:10px;"><a href="https://www.youtube.com/watch?v=68t9MAnrW_c" target="_blank" style="color:var(--accent); text-decoration:none;"><i class="fa-solid fa-play-circle"></i> Isla de Enoshima (Santuarios y Cuevas)</a></li>
                    </ul>
                </div>
            `,
                photoSpot: "El Gran Buda de Kamakura al aire libre y el interior de la estatua.",
                ivanChallenge: "Entra dentro del Gran Buda (cuesta 20 yenes). Es una experiencia única ver la estatua desde dentro. Luego cuenta cuántas estatuas Jizo encuentras en Hasedera."
            },
            {
                id: "B", name: "Opción B: Yokohama",
                summary: "Barrio Chino + Puerto",
                image: "images/dia22-yokohama.jpg", // Foto Yokohama
                price: "Transporte: ~800 JPY (Tren a Yokohama) | Entradas: Gratis | Comida: ~4.000 JPY (Barrio Chino) | Total: ~4.800 JPY (30€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Yokohama.</p>
                 
                 <h3><i class="fa-solid fa-dragon"></i> Barrio Chino</h3>
                 <p>El barrio chino más grande de Japón. Comida auténtica y ambiente colorido.</p>
                 
                 <h3><i class="fa-solid fa-ship"></i> Puerto</h3>
                 <p>Zona portuaria de Yokohama. Vistas del puerto y paseo marítimo.</p>
             `,
                photoSpot: "El barrio chino de Yokohama y el puerto.",
                ivanChallenge: "En el barrio chino, prueba el dim sum más auténtico que encuentres. Luego encuentra el faro del puerto."
            },
            {
                id: "C", name: "Opción C: Roppongi",
                summary: "Arte y Miradores",
                image: "images/dia22-roppongi.jpg", // Foto Roppongi
                price: "Transporte: ~400 JPY | Entradas: ~1.500 JPY (Museos) | Comida: ~4.000 JPY | Total: ~5.900 JPY (36€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte (10:00)</h3>
                 <p>Metro Oedo Line a Roppongi. Salida 1 o 2.</p>
                 
                 <h3><i class="fa-solid fa-palette"></i> Museo de Arte Mori (10:30)</h3>
                 <p>Museo de arte moderno en el Roppongi Hills. Exposiciones temporales de arte contemporáneo. Entrada ~1.800 JPY.</p>
                 
                 <h3><i class="fa-solid fa-building"></i> Tokyo City View (12:00)</h3>
                 <p>Mirador en la azotea del Roppongi Hills Mori Tower. Vistas panorámicas de 360° de Tokio. Entrada incluida con el museo o ~1.800 JPY solo mirador.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Comida (13:30)</h3>
                 <p>Comida en Roppongi Hills o en restaurantes del barrio. Zona con muchos restaurantes internacionales.</p>
                 
                 <h3><i class="fa-solid fa-museum"></i> Museo Nacional de Arte (15:00)</h3>
                 <p>Museo de arte moderno con colección permanente. Entrada ~500 JPY. Arquitectura impresionante.</p>
                 
                 <h3><i class="fa-solid fa-utensils"></i> Cena (18:00)</h3>
                 <p>Cena en Roppongi (barrio conocido por su vida nocturna) o regreso al hotel. Regreso en metro.</p>
             `,
                photoSpot: "Los museos de Roppongi y las vistas desde los miradores.",
                ivanChallenge: "Encuentra la obra de arte más impactante en los museos. Luego desde un mirador, identifica el Tokyo Skytree."
            },
            {
                id: "D", name: "Opción D: Compras",
                summary: "Mega Don Quijote en Shibuya",
                image: "images/dia22-donki.jpg", // Foto Don Quijote
                price: "Transporte: ~400 JPY | Entradas: Gratis | Compras: Variable | Comida: ~3.000 JPY | Total: ~3.400 JPY (21€) + compras",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Tren a Shibuya.</p>
                 
                 <h3><i class="fa-solid fa-shopping-cart"></i> Mega Don Quijote</h3>
                 <p>Tienda de todo tipo de productos. Ideal para compras de última hora y souvenirs.</p>
             `,
                photoSpot: "El interior caótico de Don Quijote con todos sus productos.",
                ivanChallenge: "Encuentra el producto más raro de Don Quijote. Es una tienda llena de sorpresas."
            },
            {
                id: "E", name: "Opción E: Maletas",
                summary: "Comprar Maleta Extra + Organizar Equipaje",
                image: "images/dia22-maletas.jpg", // Foto Maletas
                price: "Transporte: ~400 JPY | Compras: ~5.000 JPY (maleta) | Comida: ~2.000 JPY | Total: ~7.400 JPY (46€)",

                fullDesc: `
                 <h3><i class="fa-solid fa-train"></i> Transporte</h3>
                 <p>Ginza Karen o Donki para comprar maleta.</p>
                 
                 <h3><i class="fa-solid fa-suitcase"></i> Organizar Equipaje</h3>
                 <p>Día dedicado a comprar maleta extra y organizar todo el equipaje para el vuelo de regreso.</p>
             `,
                photoSpot: "Las maletas organizadas y listas para el vuelo.",
                ivanChallenge: "Ayuda a organizar el equipaje de forma eficiente. Es importante distribuir el peso correctamente."
            }
        ]
    },

    // --- DÍA 23: DESPEDIDA ---
    {
        day: 23, type: "travel",
        date: "Mié, 19 Agosto", title: "✈️ La Despedida",
        coords: [35.549, 139.779], zoom: 13,
        hotel: "Vuelo a Estambul",
        image: "images/haneda.png",

        logistics: [
            { title: "Taxis", text: "Pedid al hotel que os reserven 2 vans de 8 plazas o 4 taxis por la mañana." },
            { title: "Equipaje", text: "8 maletas grandes + 8 equipajes de mano. No os compliquéis con el metro." }
        ],

        additions: [
            "No os compliquéis con el metro. Tenéis 8 maletas grandes, 8 equipajes de mano y cansancio. Pedid al hotel (por la mañana) que os reserven 2 vans de 8 plazas o 4 taxis para el traslado a Haneda.",
            "Haneda tiene duchas (de pago), tiendas de Uniqlo de última hora y comida excelente. Es un aeropuerto muy cómodo para pasar el tiempo antes del vuelo.",
            "El vuelo TK199 sale a las 21:45. Intentad dormir nada más despegar para ajustar el horario de vuelta."
        ],

        prices: {
            transport: "~8.000-10.000 JPY por taxi (2 vans de 8 plazas o 4 taxis = ~16.000-20.000 JPY total, dividido entre 8 = ~2.000-2.500 JPY por persona)",
            food: "~3.000 JPY (Última comida en Tokio)",
            total: "~5.000-5.500 JPY (31-34€) por persona"
        },

        timeline: [
            { time: "09:00", title: "Check-out", desc: "Dejad maletas en recepción." },
            { time: "12:00", title: "Última Comida", desc: "Ramen o Tonkatsu cerca del hotel." },
            { time: "17:00", title: "Traslado Aeropuerto", desc: "2 vans de 8 plazas o 4 taxis a Haneda T3. 30-45 min. 8.000-10.000 JPY por taxi/van." },
            { time: "18:00", title: "Llegada Haneda", desc: "Facturación Turkish Airlines. Seguridad." },
            { time: "21:45", title: "Vuelo TK199", desc: "Sayonara, Japón." }
        ],

        visualContent: {
            summary: "Último día en Japón. Traslado al aeropuerto y vuelo de regreso.",
            details: "Haneda tiene duchas (de pago), tiendas de Uniqlo de última hora y comida excelente."
        }
    },

    // --- DÍA 24: REGRESO ---
    {
        day: 24, type: "travel",
        date: "Jue, 20 Agosto", title: "🏠 Regreso a Casa",
        coords: [39.469, -0.377], zoom: 4,
        hotel: "Casa",
        image: "images/valencia.png",

        logistics: [
            { title: "Escala", text: "Estambul: 3h 30m. Desayuno turco en el aeropuerto." }
        ],

        additions: [
            "En Estambul tenéis 3h 30m de escala. Es tiempo suficiente para desayunar turco en el aeropuerto y estirar las piernas.",
            "El vuelo TK1301 sale a las 08:45 rumbo a Valencia. Llegaréis a las 11:50.",
            "¡Misión cumplida! Habéis completado un viaje épico de 24 días por Japón. Disfrutad del regreso a casa con todos los recuerdos."
        ],

        prices: {
            food: "~2.000 JPY (Desayuno en Estambul)",
            total: "~2.000 JPY (12€)"
        },

        timeline: [
            { time: "05:15", title: "Aterrizaje Estambul", desc: "Escala de 3h 30m." },
            { time: "08:45", title: "Vuelo TK1301", desc: "Rumbo a Valencia." },
            { time: "11:50", title: "Aterrizaje Valencia", desc: "Recogida de maletas. Fin de la aventura." }
        ],

        visualContent: {
            summary: "Regreso a casa. Fin de la expedición familiar a Japón 2026.",
            details: "¡Misión cumplida! Habéis completado un viaje épico de 24 días por Japón."
        }
    },
];
