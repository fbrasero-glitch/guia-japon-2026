/* ==========================================
   JAPÓN 2026 - DATOS DÍAS 0-8
   ========================================== */

const travelData_00_08 = [
    // --- PREVIO: PREPARACIÓN DEL VIAJE ---
    {
        day: 0, type: "preparation",
        date: "Preparación", title: "📋 Preparación del Viaje",
        coords: [36, 138], zoom: 5,
        hotel: "",
        image: "",
        infographic: "infografía/inf dia 0.png",

        bookingPanel: {
            title: "Control Maestro de Reservas Críticas (Grupo 8 Pax)",
            phases: [
                {
                    name: "FASE 1: 2 Meses Antes",
                    color: "var(--neon-purple)",
                    items: [
                        { id: "bk_teamlab", name: "TeamLab Borderless (Tokio) [COMPRADO]", status: "completed", date: "COMPRADO", link: "https://www.teamlab.art/e/borderless/" },
                        { id: "bk_palacio", name: "Palacio Imperial de Kioto", status: "pending", date: "Exactamente 2 meses antes", link: "https://sankan.kunaicho.go.jp/english/index.html" }
                    ]
                },
                {
                    name: "FASE 2: 1 Mes Antes (BLOQUE CRÍTICO)",
                    color: "var(--danger)",
                    items: [
                        { id: "bk_shinkansen", name: "Shinkansen Kioto-Nagoya (Nozomi 2, 08:45-09:19) [COMPRADO] - ID Membresía: 1892692405 | Reservas 2000 y 2001. Asientos finales asignados el 6 de Julio.", status: "completed", date: "ENVIADO 6 JULIO", link: "https://shinkansen2.jr-central.co.jp/RSV_P/S_smart_en_index.htm" },
                        { id: "bk_hida", name: "Wide View Hida (Nagoya-Takayama)", status: "pending", date: "1 mes antes", link: "https://www.westjr.co.jp/global/en/ticket/route_search/" },
                        { id: "bk_fuji_excursion", name: "Tren Fuji Excursion (Regreso Tokio)", status: "pending", date: "Exactamente 1 mes antes", link: "https://www.eki-net.com/en/jreast-train-reservation/Top/Index" },
                        { id: "bk_bus_takayama_fuji", name: "LIMON Bus Takayama-Fuji (08:50) - 8 pax [80.000¥]", status: "completed", date: "COMPRADO", link: "https://www.nouhibus.co.jp/english/" },
                        { id: "bk_bus_nohi", name: "Bus Nohi (Shirakawa-go)", status: "pending", date: "1 mes antes", link: "https://www.nouhibus.co.jp/english/" }
                    ]
                },
                {
                    name: "FASE 3: 4 Semanas / 2 Semanas Antes",
                    color: "var(--gold)",
                    items: [
                        { id: "bk_shibuya", name: "Shibuya Sky (Atardecer)", status: "pending", date: "Exactamente 4 semanas antes (00:00 JST)", link: "https://www.shibuya-scramble-square.com/en/sky/ticket/" },
                        { id: "bk_kaiyukan", name: "Acuario Kaiyukan (Osaka)", status: "pending", date: "1-2 semanas antes", link: "https://www.kaiyukan.com/language/eng/" }
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
                            title: "Check-in Vuelos y Asignación de Asientos",
                            desc: "Asegurar que el grupo de 8 vuele junto. Confirmar dietas especiales si se requiere.",
                            who: "Todos los viajeros."
                        },
                        {
                            title: "Preparar 'Carpeta de Supervivencia'",
                            desc: "Imprimir reservas, mapas offline y PDFs de la guía técnica por si falla el digital.",
                            who: "Logística."
                        }
                    ]
                },
                {
                    title: "Logística y Transporte (Guía Técnica)",
                    icon: "fa-solid fa-truck-fast",
                    color: "#38bdf8",
                    items: [
                        {
                            title: "Configuración de Tarjetas IC (Suica/Pasmo)",
                            desc: "Añadir tarjeta al Apple Wallet (iPhone) o Google Pay. Carga inicial recomendada: 5.000 JPY.",
                            who: "Todos los viajeros.",
                            why: "Evita colas en máquinas y permite pagar en trenes, buses y máquinas de vending."
                        },
                        {
                            title: "Protocolo de Maletas (Takkyubin)",
                            desc: "Planificar los días de envío de maletas (Días 10 y 16). Las maletas tardan 24h en llegar.",
                            who: "Responsable de equipaje.",
                            why: "Crucial para los Alpes y Fuji donde no caben maletas grandes en el transporte local."
                        }
                    ]
                },
                {
                    title: "Compras Necesarias (Transporte)",
                    icon: "fa-solid fa-cart-shopping",
                    color: "#ec4899",
                    items: [
                        {
                            title: "Conectividad: eSIM o Pocket WiFi",
                            desc: "Contratar Holafly/Airalo para datos ilimitados. Es vital para el uso de Google Maps 'Last Mile'.",
                            who: "Todos los viajeros."
                        },
                        {
                            title: "Efectivo Físico (Yenes)",
                            desc: "Cambiar 40.000 - 50.000 JPY iniciales. Útil para cargar tarjetas IC físicas y sitios tradicionales.",
                            who: "Todos los viajeros."
                        },
                        {
                            title: "Tarjeta Welcome Suica (Si no hay stock digital)",
                            desc: "Si no tenéis iPhone, comprar la Welcome Suica roja al llegar al aeropuerto (KIX).",
                            who: "Viajeros Android."
                        }
                    ]
                },
                {
                    title: "Documentación y Salud",
                    icon: "fa-solid fa-file-shield",
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
                            desc: "Comprobar confirmación de vans y taxis reservados previamente para llegada directa al hotel y salidas.",
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
                "Comunicación: designa responsables (logística y documentación) que centralicen reservas y comprobaciones."
            ]
        },
        documentation: {
            title: "Expediente de Documentación Oficial",
            categories: [
                {
                    title: "Identidad y Seguro",
                    icon: "fa-solid fa-id-card",
                    color: "#00f3ff",
                    items: [
                        { name: "Pasaporte - FELIPE", file: "pdf/documentacion/Pasaporte_FELIPE.pdf", isIndividual: true, traveler: "FELIPE" },
                        { name: "Pasaporte - LORENA", file: "pdf/documentacion/Pasaporte_LORENA.pdf", isIndividual: true, traveler: "LORENA" },
                        { name: "Pasaporte - IVAN", file: "pdf/documentacion/Pasaporte_IVAN.pdf", isIndividual: true, traveler: "IVAN" },
                        { name: "Pasaporte - LAURA", file: "pdf/documentacion/Pasaporte_LAURA.pdf", isIndividual: true, traveler: "LAURA" },
                        { name: "Pasaporte - GEMA", file: "pdf/documentacion/Pasaporte_GEMA.pdf", isIndividual: true, traveler: "GEMA" },
                        { name: "Pasaporte - CESAR", file: "pdf/documentacion/Pasaporte_CESAR.pdf", isIndividual: true, traveler: "CESAR" },
                        { name: "Pasaporte - VICENTE", file: "pdf/documentacion/Pasaporte_VICENTE.pdf", isIndividual: true, traveler: "VICENTE" },
                        { name: "Pasaporte - LOLA", file: "pdf/documentacion/Pasaporte_LOLA.pdf", isIndividual: true, traveler: "LOLA" },
                        { name: "Seguro Heymondo (Condiciones Particulares)", file: "pdf/documentacion/Condiciones particulares seguro de viajes.pdf", isIndividual: false },
                        { name: "Seguro Heymondo (Condiciones Generales)", file: "pdf/documentacion/Condiciones generales seguro de viaje (1).pdf", isIndividual: false }
                    ]
                },
                {
                    title: "Vuelos Internacionales",
                    icon: "fa-solid fa-plane-departure",
                    color: "#a855f7",
                    items: [
                        { name: "Vuelo Ida (VLC-IST-KIX)", file: "pdf/documentacion/Vuelos_Ida_Turkish.pdf", isIndividual: false },
                        { name: "Vuelo Vuelta (NRT-IST-VLC)", file: "pdf/documentacion/Vuelos_Vuelta_Turkish.pdf", isIndividual: false }
                    ]
                },
                {
                    title: "Alojamientos (Reservas)",
                    icon: "fa-solid fa-hotel",
                    color: "#fbbf24",
                    items: [
                        { name: "Osaka: Dc桜の苑-難波南店", file: "pdf/documentacion/Reserva_Osaka_DC_Sakura.pdf", isIndividual: false },
                        { name: "Kyoto: Alojamiento", file: "pdf/documentacion/Reserva_Kyoto_Hotel.pdf", isIndividual: false },
                        { name: "Takayama: Ryokan", file: "pdf/documentacion/Reserva_Takayama_Ryokan.pdf", isIndividual: false },
                        { name: "Kanazawa: Hotel", file: "pdf/documentacion/Reserva_Kanazawa_Hotel.pdf", isIndividual: false },
                        { name: "Alpes: Shirakawa-go / Matsumoto", file: "pdf/documentacion/Reserva_Alpes_Hotel.pdf", isIndividual: false },
                        { name: "Tokio: Alojamiento", file: "pdf/documentacion/Reserva_Tokio_Hotel.pdf", isIndividual: false }
                    ]
                },
                {
                    title: "Transporte Interno",
                    icon: "fa-solid fa-train-subway",
                    color: "#10b981",
                    items: [
                        { name: "Shinkansen Kioto-Nagoya", file: "pdf/documentacion/Reserva_Shinkansen_Kyoto_Nagoya.pdf", isIndividual: false },
                        { name: "Wide View Hida Tren", file: "pdf/documentacion/Reserva_Tren_Hida.pdf", isIndividual: false },
                        { name: "Limon Bus (Takayama-Fuji)", file: "pdf/documentacion/Billetes_Bus_Limon.pdf", isIndividual: false },
                        { name: "Nohi Bus (Shirakawa-go)", file: "pdf/documentacion/Billetes_Bus_Nohi.pdf", isIndividual: false },
                        { name: "Fuji Excursion Tren", file: "pdf/documentacion/Reserva_Tren_Fuji_Excursion.pdf", isIndividual: false },
                        { name: "Taxis Aeropuerto KIX (2 Taxis)", file: "pdf/documentacion/Reserva_Taxis_KIX.pdf", isIndividual: false },
                        { name: "Permiso de Conducir Internacional", file: "pdf/documentacion/Permisos_Conducir_Internacionales.pdf", isIndividual: false },
                        { name: "Plano Terminal KIX y Bus", file: "pdf/Plano Terminal KIX (Andén 5, Airport Limousine Bus a Umeda).pdf", isIndividual: false }
                    ]
                },
                {
                    title: "Actividades y Entradas",
                    icon: "fa-solid fa-ticket",
                    color: "#ef4444",
                    items: [
                        { name: "TeamLab Borderless (Email/Reserva)", file: "pdf/correo teamslab.pdf", isIndividual: false },
                        { name: "TeamLab Borderless (Entrada 1)", file: "pdf/entrada teams labs 1.pdf", isIndividual: false },
                        { name: "TeamLab Borderless (Entrada 2)", file: "pdf/entrada teams labs 2.pdf", isIndividual: false },
                        { name: "Universal Studios (USJ Osaka)", file: "pdf/documentacion/Entradas_USJ_Osaka.pdf", isIndividual: false },
                        { name: "Shibuya Sky (Tokio)", file: "pdf/documentacion/Entradas_Shibuya_Sky.pdf", isIndividual: false },
                        { name: "Palacio Imperial de Kioto", file: "pdf/documentacion/Reserva_Palacio_Kyoto.pdf", isIndividual: false },
                        { name: "Acuario Kaiyukan (Osaka)", file: "pdf/documentacion/Entradas_Kaiyukan.pdf", isIndividual: false }
                    ]
                },
                {
                    title: "QRs Entrada y Conectividad",
                    icon: "fa-solid fa-qrcode",
                    color: "#f59e0b",
                    items: [
                        { name: "QR Visit Japan - FELIPE", file: "qr entrada/QR FELIPE.png", isIndividual: true, traveler: "FELIPE" },
                        { name: "QR Visit Japan - LORENA", file: "qr entrada/QR LORENA.png", isIndividual: true, traveler: "LORENA" },
                        { name: "QR Visit Japan - IVAN", file: "qr entrada/QR IVAN.png", isIndividual: true, traveler: "IVAN" },
                        { name: "QR Visit Japan - LAURA", file: "qr entrada/QR LAURA.png", isIndividual: true, traveler: "LAURA" },
                        { name: "QR Visit Japan - GEMA", file: "qr entrada/QR GEMA.png", isIndividual: true, traveler: "GEMA" },
                        { name: "QR Visit Japan - CESAR", file: "qr entrada/QR CESAR.png", isIndividual: true, traveler: "CESAR" },
                        { name: "QR Visit Japan - VICENTE", file: "qr entrada/QR VICENTE.png", isIndividual: true, traveler: "VICENTE" },
                        { name: "QR Visit Japan - LOLA", file: "qr entrada/QR LOLA.png", isIndividual: true, traveler: "LOLA" },
                        { name: "eSIM / Pocket WiFi", file: "pdf/documentacion/Comprobante_WiFi.pdf", isIndividual: false }
                    ]
                },
                {
                    title: "Mapas y Guías Oficiales",
                    icon: "fa-solid fa-map-location-dot",
                    color: "#06b6d4",
                    items: [
                        { name: "Guía de Kioto (Subway & Bus)", file: "pdf/kyoto Travel Map Subway & Bus Navi.pdf", isIndividual: false },
                        { name: "Guía de Kioto (Portada)", file: "pdf/kyoto Travel Map Subway & Bus Navi front.pdf", isIndividual: false },
                        { name: "Mapa de Shibuya 1", file: "pdf/sibuya maps.pdf", isIndividual: false },
                        { name: "Mapa de Shibuya 2", file: "pdf/sibuya maps 2.pdf", isIndividual: false },
                        { name: "Mapa Torres Akihabara", file: "pdf/Akijabara tower maps.pdf", isIndividual: false },
                        { name: "Guía de paseo Takayama", file: "pdf/TAKAYAMA_walking_map_en.pdf", isIndividual: false },
                        { name: "Mapa Metro de Tokio", file: "pdf/map_tokyo_metro.pdf", isIndividual: false },
                        { name: "Mapa Metro de Osaka", file: "pdf/osaka_metro_map.pdf", isIndividual: false },
                        { name: "Mapa Red JR Osaka", file: "pdf/map_osaka jr.pdf", isIndividual: false },
                        { name: "Plano Estación de Osaka", file: "pdf/station_osaka.pdf", isIndividual: false }
                    ]
                }
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
        infographic: "infografía/inf dia 1.png",

        logistics: [
            { title: "Documentación", text: "Pasaportes, permiso conducir internacional y QR Visit Japan Web listos." },
            { title: "Salud", text: "Llevad botiquín (analgésicos, antidiarreicos) y seguro médico a mano." },
            { title: "Estrategia de Sueño", text: "Vuelo VLC-IST: NO dormir (coincide con tarde/noche en España). Relajaros, cenad a bordo y estirad piernas en escala." }
        ],

        timeline: [
            { time: "16:00", title: "Aeropuerto Valencia (VLC)", desc: "Hora España. Recomendado llegar 3 horas antes. Facturación hasta destino final (KIX)." },
            { time: "18:55", title: "Salida Vuelo TK1314", desc: "Hora España / Local. Duración 3h 45m. Actividad: Cenar a bordo, ver películas y ¡no dormir!" },
            { time: "23:40", title: "Escala Estambul (22:40h Esp)", desc: "Llegada hora local IST. Escala corta de 2h 45m. Seguir carteles 'International Transfers'. Caminad para estirar las piernas." }
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
        hotel: "Dc桜の苑-難波南店",
        hotelImage: "images/hotel-dc-sakura.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Dc桜の苑-難波南店",
        image: "images/dia2-osaka.jpg", // Foto llegada

        logistics: [
            { title: "Estrategia Jet Lag (Vuelo)", text: "Dormid las primeras 5-6h del vuelo IST-KIX (noche de España). Despertad las últimas 4-5h para adaptaros a la llegada a Japón en horario de tarde/noche." },
            { title: "Dinero", text: "Sacad efectivo en cajero '7-Bank' (7-Eleven) en llegadas." },
            { title: "Transporte VIP", text: "Tenemos reservados 2 taxis (vía Booking) directos al hotel. Capacidad total sobrada para el grupo y maletas." }
        ],

        additions: [
            "Transporte Reservado: 2 Taxis a través de Booking. Capacidad por taxi: 9 personas y 9 maletas medianas.",
            "Punto de encuentro: Seguid las instrucciones de Booking/Chofer en la terminal de llegadas de KIX.",
            "Llevad efectivo: recomendación inicial 30.000–50.000 JPY por persona para gastos diarios y tarjetas IC."
        ],

        prices: {
            transport: "Pagado (Reserva Booking)",
            food: "~500 JPY (Onigiri/Sándwich)",
            total: "~500 JPY (Gastos día 2)"
        },

        timeline: [
            { time: "02:25", title: "Vuelo TK86 rumbo Osaka", desc: "Salida hora local IST (01:25h Esp). Duración 10h 40m. ¡A dormir las primeras 5-6 horas! (Madrugada española)." },
            { time: "19:05", title: "Aterrizaje KIX", desc: "Llegada hora local JPN. Inmigración (QR Visit Japan) y recogida de equipajes." },
            { time: "20:15", title: "Recogida Taxi Booking", desc: "Encuentro con los choferes de los 2 taxis reservados. Traslado directo sin esperas." },
            { time: "21:15", title: "Llegada al Hotel", desc: "Check-in directo en Dc桜の苑-難波南店. Sin transbordos de tren ni maletas por la calle." },
            { time: "22:00", title: "Cena y Dormir", desc: "Hora local JPN. Cena ligera en konbini cercano. Acostarse rápido para adaptar el cuerpo." }
        ],

        transportTimeline: [
            {
                time: "20:15",
                type: "transit",
                title: "2 Taxis Reservados (Booking.com)",
                price: "PRE-PAGADO",
                timeLabel: "60 min (Directo)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kansai+International+Airport&destination=Dc桜の苑-難波南店&travelmode=driving",
                desc: "Transporte directo KIX → Hotel. Capacidad: 9 pax + 9 maletas por vehículo."
            }
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
        hotel: "Dc桜の苑-難波南店",
        hotelImage: "images/hotel-dc-sakura.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Dc桜の苑-難波南店",
        routeMapsLink: "https://maps.app.goo.gl/btmUoBxhwRtg74So8",
        image: "images/dia3-portada.jpg",

        logistics: [
            { title: "Clima", text: "Calor y humedad extremos. Ropa transpirable e hidratación." },
            { title: "Reservas", text: "Para atracciones con aforo (Acuario, Umeda Sky), comprobar venta online." }
        ],

        timeline: [
            { time: "08:00", title: "Castillo de Osaka", desc: "Visita jardines y museo. (Base)" },
            { time: "11:00", title: "Umeda Sky Building", desc: "Vistas panorámicas de la ciudad. (Base)" },
            { time: "12:30", title: "Almuerzo en Umeda", desc: "Recomendación: Callejón Takimi Koji (bajo el Umeda Sky)." },
            { time: "14:30", title: "Shinsaibashi Parco", desc: "Cultura pop: Capcom, Godzilla y Lego Store." },
            { time: "17:30", title: "Santuario Namba Yasaka", desc: "La icónica cabeza de león gigante." },
            { time: "18:30", title: "Ebisubashisuji y Dotonbori", desc: "Paseo histórico hacia el canal." },
            { time: "20:00", title: "Cena en Dotonbori", desc: "Evento fijo de la ruta." }
        ],

        prices: {
            transport: "~800 JPY",
            entrances: "~2.100 JPY (Castillo + Umeda)",
            food: "~3.500 JPY",
            total: "~6.400 JPY (Base)"
        },

        transportTimeline: [
            { time: "08:00", type: "point", title: "Inicio en Hotel", icon: "fa-solid fa-bed" },
            {
                time: "",
                type: "transit",
                title: "Tren: JR Osaka Loop Line (Inner)",
                price: "180 JPY",
                timeLabel: "~18 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dc桜の苑-難波南店&destination=Osakajokoen+Station&travelmode=transit",
                tacticalGuideId: "mission01"
            },
            { time: "08:30", type: "point", title: "Llegada al Castillo de Osaka", icon: "fa-solid fa-fort-awesome" },
            {
                time: "",
                type: "transit",
                title: "JR Loop Line (Retorno a Umeda) + Caminata",
                price: "170 JPY",
                timeLabel: "~30 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Osakajokoen+Station&destination=Umeda+Sky+Building&travelmode=transit",
                tacticalGuideId: "mission02"
            },
            { time: "11:00", type: "point", title: "Llegada Umeda Sky", icon: "fa-solid fa-building" },
            { time: "12:30", type: "point", title: "Almuerzo en Umeda (Takimi Koji)", icon: "fa-solid fa-utensils" },
            {
                time: "",
                type: "transit",
                title: "Línea Midosuji (Umeda → Shinsaibashi)",
                price: "240 JPY",
                timeLabel: "~15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Umeda+Station&destination=Shinsaibashi+Parco&travelmode=transit",
                tacticalGuideId: "mission03"
            },
            { time: "14:30", type: "point", title: "Shinsaibashi Parco", icon: "fa-solid fa-gamepad" },
            {
                time: "",
                type: "transit",
                title: "Caminata o Metro a Namba Yasaka",
                price: "Gratis / 190 JPY",
                timeLabel: "~15-20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi+Parco&destination=Namba+Yasaka+Shrine&travelmode=transit"
            },
            { time: "17:30", type: "point", title: "Santuario Namba Yasaka", icon: "fa-solid fa-mask" },
            {
                time: "",
                type: "transit",
                title: "Caminata hacia Ebisubashi",
                price: "Gratis",
                timeLabel: "~10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Namba+Yasaka+Shrine&destination=Ebisubashisuji+Shopping+Street&travelmode=walking"
            },
            { time: "18:30", type: "point", title: "Ebisubashisuji y Dotonbori", icon: "fa-solid fa-person-walking-luggage" },
            { time: "20:00", type: "point", title: "Cena en Dotonbori", icon: "fa-solid fa-utensils" },
            {
                time: "",
                type: "transit",
                title: "JR Yamatoji Line o caminar",
                price: "170 JPY",
                timeLabel: "~15 min total",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dotonbori&destination=Dc桜の苑-難波南店&travelmode=transit",
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
                    time: "08:00",
                    title: "Castillo de Osaka",
                    description: "Construido en 1583. Torres, murallas y museo histórico.",
                    image: "images/dia3-itinerario-base.jpg",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/dir/Dc桜の苑-難波南店/Osaka+Castle/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-castle"></i> Castillo de Osaka</h3>
                        <p>Símbolo innegable de la ciudad. Originalmente construido en 1583 por el señor de la guerra Toyotomi Hideyoshi, fue diseñado para ser el centro de una nueva y unificada nación japonesa bajo su dominio. Aunque la imponente torre actual es una reconstrucción de 1931, se asienta sobre las formidables murallas y fosos de piedra originales de la era Tokugawa.</p>
                        <p><em>El interior es un museo moderno de ocho plantas que narra la turbulenta historia de la unificación de Japón. <strong>Consejo Pro:</strong> Subid directamente en ascensor a la planta 8 para las vistas y bajad caminando para ver el museo sin agobios.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 2-3 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 600 JPY.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto Clave:</strong> Desde los jardines Nishinomaru para el mejor encuadre del foso y la torre.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=N6O37n1E-vU"
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Umeda Sky Building",
                    description: "Edificio con observatorio flotante. Vistas espectaculares.",
                    image: "images/umeda.png",
                    price: "1.500 JPY",
                    link: "https://www.google.com/maps/dir/Osaka+Castle/Umeda+Sky+Building/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-building"></i> Umeda Sky Building</h3>
                        <p>Un espectáculo de la arquitectura futurista de los años 90. Consiste en dos torres gemelas de 40 pisos conectadas en la cima por el "Floating Garden Observatory" a 173 metros de altura.</p>
                        <p><em>El ascenso final se realiza a través de escaleras mecánicas acristaladas suspendidas en el vacío, ofreciendo una experiencia casi de ciencia ficción. La azotea circular está completamente al aire libre, permitiendo sentir la brisa y escuchar la ciudad.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Tiempo:</strong> 1-2 horas.</li>
                            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> 1.500 JPY.</li>
                            <li><i class="fa-solid fa-sun"></i> <strong>Momento Épico:</strong> Atardecer (16:30-18:00) para ver cómo la ciudad se enciende gradualmente.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=aSPhkem89vU"
                },
                {
                    id: "b3",
                    time: "14:30",
                    title: "Shinsaibashi Parco",
                    description: "Epicentro friki con las tiendas oficiales de Capcom, Godzilla y Lego.",
                    image: "images/shinsaibashi-parco.jpg",
                    price: "Entrada Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Shinsaibashi+Parco",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gamepad"></i> Shinsaibashi Parco (Cultura Pop)</h3>
                        <p>Inaugurado a finales de 2020, este centro comercial se ha convertido en una parada obligatoria para el "perfil friki". En su 6ª planta (Pop Culture Floor) encontraréis un despliegue sin igual de las marcas más icónicas de Japón.</p>
                        <p><em>Aquí podréis ver la estatua gigante de Godzilla, visitar la Capcom Store con merchandising exclusivo de Street Fighter y Resident Evil, y maravillaros con las construcciones de Lego inspiradas en Osaka. Es el lugar perfecto para ver productos que difícilmente veréis fuera de Japón.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-dragon"></i> <strong>Godzilla Store:</strong> Foto obligatoria con el rey de los monstruos.</li>
                            <li><i class="fa-solid fa-headset"></i> <strong>Capcom Store:</strong> El showroom oficial de la mítica desarrolladora.</li>
                            <li><i class="fa-solid fa-cubes"></i> <strong>Lego Store:</strong> Arte en bloques con sabor local.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "17:30",
                    title: "Santuario Namba Yasaka",
                    description: "Famoso por su enorme edificio en forma de cabeza de león que 'traga' los malos espíritus.",
                    image: "images/add-namba-yasaka.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Namba+Yasaka+Shrine",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mask"></i> Santuario Namba Yasaka</h3>
                        <p>Este santuario es famoso por su icónico edificio, el Ema-Den, que tiene la forma de una gigantesca cabeza de león (12 metros de altura y 11 metros de ancho). Su enorme boca abierta está diseñada para "tragar" los malos espíritus y la mala suerte, asegurando así el éxito en los negocios, el amor y los estudios.</p>
                        <p><em>Es una visita rápida pero de alto impacto estético que encantará a todos por su originalidad. Además, se encuentra en una zona tranquila de Namba, ofreciendo un respiro visual antes de sumergirse en el caos de neones de Dotonbori.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Horario ideal:</strong> Tarde (18:30 – 19:30), de camino a la cena en Dotonbori.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Santuario Fotogénico:</strong> Uno de los puntos más fotografiados y singulares de todo Osaka.</li>
                            <li><i class="fa-solid fa-ghost"></i> <strong>Misión:</strong> Dejar atrás las malas vibras antes de entrar en la fiesta de Dotonbori.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "18:30",
                    title: "Calle Ebisubashisuji",
                    description: "Galería comercial histórica que sirve de entrada triunfal a Dotonbori.",
                    image: "images/ebisubashi-suji.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Ebisubashi-suji+Shopping+Street",
                    fullDesc: `
                        <h3><i class="fa-solid fa-street-view"></i> Calle Comercial Ebisubashisuji</h3>
                        <p>Con orígenes que se remontan al periodo Edo, esta calle techada de 600 metros es el cordón umbilical que conecta la zona de Namba con el canal de Dotonbori. Es donde el bullicio, los puestos de comida y los neones empiezan a fusionarse.</p>
                        <p><em>Caminad por aquí para sentir la energía pura de Osaka. Veréis desde tiendas tradicionales de té hasta los puestos más modernos de dulces japoneses. Al final de la calle, apareceréis de repente ante el famoso puente Ebisubashi y el cartel de Glico.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-walking"></i> <strong>Entrada:</strong> Acceso directo al corazón de los neones.</li>
                            <li><i class="fa-solid fa-candy-cane"></i> <strong>Dato:</strong> Ideal para pillar un snack rápido antes de la cena oficial.</li>
                        </ul>
                    `
                },
                {
                    id: "b6",
                    time: "20:00",
                    title: "Cena en Dotonbori",
                    description: "Ver el cartel de Glico iluminado. Gastronomía local (Takoyaki, Kushikatsu).",
                    image: "images/dotonbori.png",
                    price: "~3.000 JPY",
                    link: "https://www.google.com/maps/dir/Ebisubashi-suji+Shopping+Street/Dotonbori/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Cena en Dotonbori</h3>
                        <p>El corazón y alma de la famosa filosofía osakeña del <em>Kuidaore</em> (comer hasta arruinarse). Este canal histórico es hoy un caótico, ruidoso y deslumbrante laberinto de cientos de neones gigantes.</p>
                        <p><em>Aquí se viene a disfrutar de la energía pura de Japón. La comida callejera es obligatoria: pequeñas bolas de pulpo ardiendo (Takoyaki), tortillas saladas japonesas cocinadas en la plancha (Okonomiyaki) y brochetas fritas crujientes (Kushikatsu).</em></p>
                        <ul>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidades:</strong> Takoyaki, Okonomiyaki, Kushikatsu.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Foto obligatoria:</strong> Cartel de Glico Runner iluminado y puente Ebisu.</li>
                        </ul>
                    `
                },
                {
                    id: "b7",
                    time: "22:00",
                    title: "Retorno al Hotel",
                    description: "Fin de la jornada. Descanso en el Cuartel General.",
                    image: "images/hotel-dc-sakura.jpg",
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
                title: "✅ [Incluido en el Plan General] Santuario Namba Yasaka",
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
        hotel: "Dc桜の苑-難波南店",
        hotelImage: "images/hotel-dc-sakura.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Dc桜の苑-難波南店",
        routeMapsLink: "https://maps.app.goo.gl/X56rv4yvkFGXvDdY6",
        image: "images/dia3-portada.jpg",
        infographic: "infografía/inf dia 4.png",

        logistics: [
            { title: "Compras", text: "Día ideal para souvenirs en Shinsaibashi." },
            { title: "Comida", text: "Kuromon Market cierra sobre las 17:00, id a comer." }
        ],

        transportTimeline: [
            { time: "08:30", type: "point", title: "Hotel (Nakahiraki)", icon: "fa-solid fa-hotel" },
            {
                time: "",
                type: "transit",
                title: "Tren: Nankai Koya Line hasta Sumiyoshihigashi o JR",
                price: "240 JPY",
                timeLabel: "~20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dc桜の苑-難波南店&destination=Sumiyoshi+Taisha&travelmode=transit"
            },
            { time: "09:00", type: "point", title: "Sumiyoshi Taisha e Isshinji", icon: "fa-solid fa-archway" },
            {
                time: "",
                type: "transit",
                title: "Ruta: Sumiyoshi → Templo Isshinji (Tennoji)",
                price: "210 JPY",
                timeLabel: "~20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Sumiyoshi+Taisha&destination=Isshin-ji+Temple&travelmode=transit"
            },
            {
                time: "",
                type: "transit",
                title: "Metro: Línea Midosuji (Tennoji → Nippombashi)",
                price: "190 JPY",
                timeLabel: "~10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Isshin-ji+Temple&destination=Kuromon+Ichiba+Market&travelmode=transit"
            },
            { time: "10:30", type: "point", title: "Kuromon Ichiba y Doguyasuji", icon: "fa-solid fa-fish" },
            {
                time: "",
                type: "transit",
                title: "Caminata hacia Shinsekai",
                price: "Gratis",
                timeLabel: "~15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Sennichimae+Doguyasuji+Shopping+Street&destination=Tsutenkaku+Tower&travelmode=walking"
            },
            { time: "13:00", type: "point", title: "Shinsekai (Punto de Encuentro)", icon: "fa-solid fa-users" },
            {
                time: "",
                type: "transit",
                title: "Caminata (Hacia Den Den Town)",
                price: "Gratis",
                timeLabel: "~10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tsutenkaku+Tower&destination=Nipponbashi+Den+Den+Town&travelmode=walking"
            },
            { time: "14:30", type: "point", title: "Nipponbashi (Den Den Town)", icon: "fa-solid fa-robot" },
            {
                time: "",
                type: "transit",
                title: "Caminata hacia Namba Parks",
                price: "Gratis",
                timeLabel: "~10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nipponbashi+Den+Den+Town&destination=Namba+Parks&travelmode=walking"
            },
            { time: "17:00", type: "point", title: "Namba Parks", icon: "fa-solid fa-tree" },
            {
                time: "",
                type: "transit",
                title: "Caminata hacia Cena",
                price: "Gratis",
                timeLabel: "~10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Namba+Parks&destination=34.6677,135.5019&travelmode=walking"
            },
            { time: "19:30", type: "point", title: "Cena Comilona de Carnaca", icon: "fa-solid fa-drumstick-bite" },
            {
                time: "",
                type: "transit",
                title: "JR Yamatoji Line (JR Namba → Imamiya)",
                price: "140 JPY",
                timeLabel: "~5 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Namba+Station&destination=Umeda+Station&travelmode=transit"
            },
            { time: "22:00", type: "point", title: "Retorno al Hotel", icon: "fa-solid fa-bed" }
        ],

        timeline: [
            { time: "09:00", title: "Sumiyoshi e Isshinji", desc: "Santuario clásico y el templo de las cenizas." },
            { time: "10:30", title: "Kuromon y Doguyasuji", desc: "Mercado gourmet y suministros de cocina." },
            { time: "13:00", title: "Shinsekai (Kushikatsu)", desc: "Encuentro de grupos y comida retro." },
            { time: "14:30", title: "Den Den Town", desc: "Paraíso otaku y electrónica." },
            { time: "17:00", title: "Namba Parks", desc: "Jardines colgantes al atardecer." },
            { time: "19:30", title: "Cena Carnaca", desc: "Yakiniku de alta calidad para el grupo." }
        ],

        prices: {
            transport: "~600 JPY",
            entrances: "~3.000 JPY",
            food: "~5.000 JPY",
            total: "~8.600 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Refinado",
            description: "Día reestructurado para el encuentro del grupo y optimización de visitas.",
            events: [
                {
                    id: "b_sumiyoshi_isshinji",
                    time: "09:00",
                    title: "Sumiyoshi Taisha e Isshinji",
                    description: "Visita al santuario más antiguo y al templo de estatuas de ceniza.",
                    image: "images/add-sumiyoshi.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Sumiyoshi+Taisha+Shrine",
                    fullDesc: `
                        <h3><i class="fa-solid fa-archway"></i> Sumiyoshi Taisha e Isshinji</h3>
                        <p>Empezáis el día en <strong>Sumiyoshi Taisha</strong>, uno de los santuarios más antiguos de Japón (fundado en el siglo III). Es famoso por su arquitectura pura de estilo <em>Sumiyoshi-zukuri</em> y su icónico puente rojo curvo <strong>Sorihashi</strong>.</p>
                        <p>Después, realizamos una parada rápida en el <strong>Templo Isshinji</strong>, cuyas estatuas Okotsubutsu están hechas con las cenizas de miles de devotos, ofreciendo un aire sobrecogedor y místico.</p>
                        <ul>
                            <li><i class="fa-solid fa-bridge"></i> <strong>Sumiyoshi:</strong> El puente Sorihashi se refleja en el agua creando un círculo perfecto.</li>
                            <li><i class="fa-solid fa-gopuram"></i> <strong>Isshinji:</strong> Arquitectura moderna y tradición ancestral unidas por la memoria.</li>
                            <li><i class="fa-solid fa-peace"></i> <strong>Paz:</strong> Caminos de grava blanca ideales para disfrutar sin prisas.</li>
                        </ul>
                    `
                },
                {
                    id: "b_kuromon_doguyasuji",
                    time: "10:30",
                    title: "Kuromon Market y Doguyasuji",
                    description: "Mercado de comida fresca y calle de herramientas de cocina.",
                    image: "images/dia5-kuromon.jpg",
                    price: "Variable",
                    link: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba+Market",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fish"></i> Mercado Kuromon y Calle Doguyasuji</h3>
                        <p>Conocido como "La cocina de Osaka", el <strong>Mercado Kuromon</strong> tiene más de 190 años de historia. Es el lugar perfecto para ver el producto fresco y probar especialidades como sushi, takoyaki o wagyu.</p>
                        <p>Justo al lado se encuentra <strong>Doguyasuji</strong>, la calle especializada en suministros de cocina profesionales y las famosas réplicas de comida en cera.</p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Horario:</strong> 9:00-17:00 (ideal para media mañana).</li>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Especialidades:</strong> No os vayáis sin probar un bocado local.</li>
                        </ul>
                    `
                },
                {
                    id: "b_shinsekai_encuentro",
                    time: "13:00",
                    title: "Encuentro en Shinsekai",
                    description: "REUNIÓN DE GRUPOS. Comida de brochetas Kushikatsu y fotos retro.",
                    image: "images/dia3-shinsekai.jpg",
                    price: "~1.500 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-ghost"></i> Shinsekai: El "Mundo Nuevo" Retro</h3>
                        <p>Inaugurado en 1912 como un ambicioso distrito de entretenimiento, Shinsekai se inspiró en París (mitad norte) y Nueva York (mitad sur). Hoy es el alma retro de Osaka, un lugar que parece haberse detenido en la posguerra japonesa.</p>
                        <ul>
                            <li><i class="fa-solid fa-tower-observation"></i> <strong>Torre Tsutenkaku:</strong> El símbolo del barrio. Frotad los pies de la estatua de Billiken para tener buena suerte.</li>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Kushikatsu:</strong> La especialidad local. Pinchos fritos deliciosos. ¡Prohibido mojar dos veces en la salsa!</li>
                            <li><i class="fa-solid fa-gamepad"></i> <strong>Arcades Retro:</strong> El Janjan Yokocho está lleno de salones de juego de los años 80 y 90.</li>
                        </ul>
                    `
                },
                {
                    id: "b_denden",
                    time: "14:30",
                    title: "Nipponbashi (Den Den Town)",
                    description: "El barrio de la electrónica y el anime en Osaka.",
                    image: "images/den-den-town.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Nipponbashi+Den+Den+Town",
                    fullDesc: `
                        <h3><i class="fa-solid fa-microchip"></i> Den Den Town: El Paraíso Otaku</h3>
                        <p>Conocido como el Akihabara de Osaka, este distrito es el centro neurálgico para los amantes de la tecnología, el anime y el manga en el oeste de Japón. Menos masificado que su contraparte de Tokio, pero igual de fascinante.</p>
                        <ul>
                            <li><i class="fa-solid fa-plug"></i> <strong>Electrónica:</strong> Desde componentes de PC raros hasta gadgets de última generación en tiendas como Joshin o Sofmap.</li>
                            <li><i class="fa-solid fa-robot"></i> <strong>Cultura Pop:</strong> Tiendas inmensas de figuras (Jungle, Animate) y centros de gachapon gigantescos.</li>
                            <li><i class="fa-solid fa-dragon"></i> <strong>Lawson Dragon Quest:</strong> Una tienda de conveniencia temática única que merece una foto rápida.</li>
                        </ul>
                    `
                },
                {
                    id: "b_nambaparks",
                    time: "17:00",
                    title: "Namba Parks",
                    description: "Centro comercial con jardines colgantes espectaculares.",
                    image: "images/namba-parks.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Namba+Parks",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tree"></i> Namba Parks: Un Cañón Urbano</h3>
                        <p>Construido sobre el antiguo estadio de béisbol de Osaka, este complejo rompe la rigidez del cemento con una arquitectura inspirada en un cañón natural esculpido por el viento y el agua.</p>
                        <ul>
                            <li><i class="fa-solid fa-cloud-sun"></i> <strong>Jardín Colgante:</strong> 8 niveles de terrazas, cascadas y más de 70,000 plantas que crean un microclima fresco en plena ciudad.</li>
                            <li><i class="fa-solid fa-compass"></i> <strong>Exploración:</strong> Un laberinto de tiendas y restaurantes que se integran con la naturaleza en cada piso.</li>
                            <li><i class="fa-solid fa-moon"></i> <strong>Iluminación:</strong> Visita recomendada al atardecer para ver el jardín iluminado.</li>
                        </ul>
                    `
                },
                {
                    id: "b_cena_carnaca",
                    time: "19:30",
                    title: "Cena Comilona de Carnaca",
                    description: "Gran cena de carne planificada para todo el grupo.",
                    image: "images/dia3-portada.jpg",
                    price: "~5.000 JPY",
                    fullDesc: `
                        <h3><i class="fa-solid fa-utensils"></i> Festín de Carne en Namba</h3>
                        <p>Osaka es conocida como "la cocina de Japón" and el barrio de Namba es su epicentro. Aquí la carne no es solo comida, es una experiencia religiosa de veteado and sabor.</p>
                        <ul>
                            <li><i class="fa-solid fa-fire"></i> <strong>Yakiniku:</strong> Barbacoa japonesa donde cocináis vuestros propios cortes de carne sobre brasas de carbón.</li>
                            <li><i class="fa-solid fa-gem"></i> <strong>Cortes Premium:</strong> Buscad los locales que ofrecen ternera de calidad A5 para una explosión de sabor en boca.</li>
                            <li><i class="fa-solid fa-beer-mug-empty"></i> <strong>Izakaya:</strong> El ambiente ruidoso and alegre de los callejones de Namba es el acompañamiento perfecto para este banquete.</li>
                        </ul>
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
                time: "10:00",
                description: "OPCIONAL: Apertura 10:00. Estancia hasta 12:30.",
                price: "2.700 JPY",
                image: "images/dia3-acuario.jpg",
                recommended: true,
                fullDesc: `
                    <h3><i class="fa-solid fa-fish"></i> Acuario Kaiyukan: El Océano Pacífico</h3>
                    <p>Considerado uno de los mejores acuarios del mundo, el Kaiyukan recrea los ecosistemas del Anillo de Fuego del Pacífico con una fidelidad asombrosa.</p>
                    <ul>
                        <li><i class="fa-solid fa-water"></i> <strong>Tanque Central:</strong> Una colosal estructura de 9 metros de profundidad que alberga a "Kai" y "Yu", los tiburones ballena residentes.</li>
                        <li><i class="fa-solid fa-person-arrow-down"></i> <strong>Recorrido Espiral:</strong> Empezaréis en el nivel superior y descenderéis rodeando el gran tanque central, viendo cómo cambian las especies según la profundidad.</li>
                        <li><i class="fa-solid fa-otter"></i> <strong>Zonas Destacadas:</strong> No os perdáis el Bosque de Japón con sus nutrias, ni la zona de pingüinos de la Antártida.</li>
                    </ul>
                `,
                video: "https://www.youtube.com/watch?v=1uPcdj8V_8g",
                tacticalOptions: [
                    {
                        title: "OPERACIÓN AQUA: DESPLIEGUE",
                        time: "10:00 - 13:00",
                        description: "Salida hotel 09:15. Entrada 10:00. Salida 12:30. Encuentro grupo 13:00.",
                        schedule: [
                            { time: "09:15", event: "Salida Hotel Wing" },
                            { time: "10:00", event: "Apertura Acuario" },
                            { time: "12:30", event: "Extracción hacia Shinsekai" },
                            { time: "13:00", event: "Encuentro en Shinsekai" }
                        ],
                        link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Aquarium+Kaiyukan&destination=Tsutenkaku+Tower&travelmode=transit",
                        tacticalGuideId: "mission_aquarium",
                    }
                ]
            },
            {
                id: "c2",
                title: "✅ [Incluido en el Plan General] Mercado Kuromon",
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
                title: "✅ [Incluido en el Plan General] Santuario Sumiyoshi Taisha",
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
                    <p>Un excelente recorrido visual para que veáis la ciudad desde otra perspectiva. El río Okawa ha sido el eje vital de Osaka durante siglos, conectando sus castillos con los distritos comerciales.</p>
                    <ul>
                        <li><i class="fa-solid fa-camera"></i> <strong>Skylines:</strong> Disfrutad de las vistas de los rascacielos de Nakanoshima y el parque del castillo desde el agua.</li>
                        <li><i class="fa-solid fa-sun-plant-wilt"></i> <strong>Atardecer:</strong> La luz dorada reflejada en los edificios de cristal crea un ambiente único.</li>
                        <li><i class="fa-solid fa-chair"></i> <strong>Comodidad:</strong> Una forma relajada de descansar las piernas tras caminar por Osaka.</li>
                    </ul>
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
        hotel: "Dc桜の苑-難波南店",
        hotelImage: "images/hotel-dc-sakura.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Dc桜の苑-難波南店",
        image: "images/dia4-portada.jpg",

        logistics: [
            { title: "Transporte", text: "JR Yamatoji Line (Rapid) desde Osaka Station." },
            { title: "Retorno", text: "Regreso a Osaka para descansar antes del traslado a Kioto." }
        ],

        transportTimeline: [
            {
                time: "08:00",
                type: "point",
                title: "Lawson: Enviar maletas a Kioto",
                icon: "fa-solid fa-suitcase-rolling"
            },
            {
                time: "09:00",
                type: "point",
                title: "Salida Hotel (Dc桜の苑)",
                icon: "fa-solid fa-hotel"
            },
            {
                time: "",
                type: "transit",
                title: "Caminar (~8 min) a Est. Shin-Imamiya",
                price: "Gratis",
                timeLabel: "8 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dc桜の苑-難波南店&destination=Shin-Imamiya+Station&travelmode=walking"
            },
            {
                time: "09:10",
                type: "point",
                title: "Estación Shin-Imamiya (JR)",
                icon: "fa-solid fa-train"
            },
            {
                time: "09:10",
                type: "transit",
                title: "Tren: Kintetsu Nara Line (Expresso)",
                price: "680 JPY",
                timeLabel: "40 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Osaka-Namba+Station&destination=Kintetsu-Nara+Station&travelmode=transit",
                tacticalGuideId: "mission_nara_kintetsu"
            },
            {
                time: "09:50",
                type: "point",
                title: "Estación JR Nara (Caminar/Bus a Parque)",
                icon: "fa-solid fa-location-dot"
            },
            {
                time: "",
                type: "transit",
                title: "Caminar a Nara Park o Bus a Todaiji",
                price: "Gratis / 220 JPY",
                timeLabel: "15-20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nara+Station&destination=Nara+Park&travelmode=transit"
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
                link: "https://www.google.com/maps/dir/?api=1&origin=Nara+Station&destination=Dc桜の苑-難波南店&travelmode=transit"
            },
            {
                time: "18:30",
                type: "point",
                title: "Extracción al Hotel",
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
                    id: "b0",
                    time: "08:00",
                    title: "Envío de Maletas a Kioto",
                    description: "Enviamos las 8 maletas grandes por Yu-Pack al Kyoto Tower Hotel Annex.",
                    image: "images/hotel-dc-sakura.jpg",
                    price: "115€-140€",
                    link: "https://maps.app.goo.gl/E6DavWXsZnCTgWZT7",
                    tacticalGuideId: "mission_luggage",
                    fullDesc: `
                        <h3><i class="fa-solid fa-suitcase-rolling"></i> Envío de Maletas (Yu-Pack)</h3>
                        <p>Para no cargar con las 8 maletas grandes en los trenes hacia Nara y luego a Kioto, las enviaremos directamente desde el Lawson hasta el Kyoto Tower Hotel Annex.</p>
                        <p><em>Esta es una maniobra logística crucial que nos permitirá movernos con total libertad. Al llegar a Kioto mañana, las maletas ya estarán esperando.</em></p>
                        <ul>
                            <li><i class="fa-solid fa-clock"></i> <strong>Hora:</strong> 08:00 AM (Primera hora para evitar aglomeraciones en la tienda).</li>
                            <li><i class="fa-solid fa-location-dot"></i> <strong>Lugar:</strong> Lawson cercano (Ver mapa: Dawson/Lawson).</li>
                            <li><i class="fa-solid fa-circle-info"></i> <strong>Instrucciones:</strong> Abre la guía táctica para ver el paso a paso y la "chuleta" para el dependiente.</li>
                        </ul>
                    `
                },
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
                    video: "https://www.youtube.com/watch?v=VlXjOunK6p4"
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
                video: "https://www.youtube.com/watch?v=aSPhkem89vU"
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
                    <h3><i class="fa-solid fa-deer"></i> Nara Park: Encuentro Sagrado</h3>
                    <p>Hogar de más de 1,200 ciervos Sika que campan a sus anchas, Nara Park es uno de los lugares más mágicos de Japón. Según la leyenda, los ciervos son mensajeros divinos del dios Takemikazuchi, quien llegó a Nara cabalgando un ciervo blanco hace 1,300 años.</p>
                    <ul>
                        <li><i class="fa-solid fa-cookie"></i> <strong>Shika Senbei:</strong> Comprad galletas especiales en los puestos (aprox. 200 JPY). ¡No les deis comida humana!</li>
                        <li><i class="fa-solid fa-person-bowing"></i> <strong>El Saludo:</strong> Si les hacéis una reverencia, muchos ciervos os la devolverán antes de pedir su galleta.</li>
                        <li><i class="fa-solid fa-triangle-exclamation"></i> <strong>Cuidado:</strong> Son animales salvajes. Si os ven con comida, pueden ser insistentes. Mostrad las manos vacías para que os dejen tranquilos.</li>
                    </ul>
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1ttxIE3lbi8hmEP_7xvVZLvVINXgbRpA&usp=sharing",
        image: "images/dia7-portada.jpg",

        logistics: [
            { title: "Traslado", text: "JR Special Rapid Service. Salida: JR Osaka (Andén 7-9). Cada 15 min." },
            { title: "Equipaje", text: "Llevad maletas con vosotros. Subid al primer o último vagón para más sitio." },
            { title: "Hotel", text: "Kyoto Tower Annex: A 3 min andando de la salida central de la estación." }
        ],

        transportTimeline: [
            {
                time: "09:00",
                type: "point",
                title: "Salida Hotel (Dc桜の苑)",
                icon: "fa-solid fa-hotel"
            },
            {
                time: "",
                type: "transit",
                title: "Caminar (~8 min) a Est. Shin-Imamiya",
                price: "Gratis",
                timeLabel: "8 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Dc桜の苑-難波南店&destination=Shin-Imamiya+Station&travelmode=walking"
            },
            {
                time: "09:15",
                type: "point",
                title: "Estación Shin-Imamiya (JR)",
                icon: "fa-solid fa-train"
            },
            {
                time: "",
                type: "transit",
                title: "JR Osaka Loop Line (Inner) hacia Osaka Station",
                price: "190 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shin-Imamiya+Station&destination=Osaka+Station&travelmode=transit"
            },
            {
                time: "09:40",
                type: "point",
                title: "Llegada a Osaka Station (Cambio Andén 7-9)",
                icon: "fa-solid fa-person-walking-luggage"
            },
            {
                title: "Tren: JR Special Rapid Service (Tokaido Line)",
                price: "580 JPY",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Station&destination=Kyoto+Station&travelmode=transit",
                tacticalGuideId: "mission_osaka_to_kyoto"
            },
            {
                time: "10:30",
                type: "point",
                title: "Check-in / Maletas (Kyoto Tower Annex)",
                icon: "fa-solid fa-hotel"
            },
            {
                type: "transit",
                title: "Metro Karasuma Line (Hacia Marutamachi)",
                price: "260 JPY",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Kyoto+Imperial+Palace&travelmode=transit"
            },
            {
                time: "11:30",
                type: "point",
                title: "Palacio Imperial de Kioto",
                icon: "fa-solid fa-crown"
            },
            {
                type: "transit",
                title: "Paseo por el Parque Imperial",
                price: "0 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Imperial+Palace&destination=Nijo+Castle&travelmode=walking"
            },
            {
                time: "15:00",
                type: "point",
                title: "Castillo de Nijo",
                icon: "fa-solid fa-fort-awesome"
            },
            {
                type: "transit",
                title: "Bus 9 / 50 o Metro Karasuma",
                price: "230 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nijo+Castle&destination=Kyoto+Tower&travelmode=transit"
            },
            {
                time: "17:30",
                type: "point",
                title: "Torre Kioto (Atardecer)",
                icon: "fa-solid fa-tower-observation"
            },
            {
                type: "transit",
                title: "Paseo hacia el Centro de Tiendas",
                price: "0 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower&destination=Kawaramachi+Station&travelmode=walking"
            },
            {
                time: "19:30",
                type: "point",
                title: "Kawaramachi (Cena y Paseo)",
                icon: "fa-solid fa-bag-shopping"
            }
        ],

        timeline: [
            { time: "14:30", title: "Castillo de Nijo", desc: "Residencia de los Shoguns y suelos de ruiseñor. (Base)" },
            { time: "18:00", title: "Cena Libra", desc: "Exploración gastronómica local." }
        ],

        prices: {
            transport: "~1.000 JPY",
            entrances: "800 (Nijo) + 800 (Torre) JPY",
            food: "~4.000 JPY",
            total: "~6.600 JPY (Est.)"
        },

        isFlexible: true,
        base: {
            title: "Despliegue: Capital Imperial",
            description: "Traslado táctico a Kioto y primera incursión en la historia samurái.",
            events: [
                {
                    id: "b1",
                    time: "10:00",
                    title: "Traslado: Osaka ➔ Kioto",
                    description: "JR Special Rapid Service. Rápido, eficiente y sin reserva.",
                    image: "images/hotel-kyoto-tower.jpg",
                    price: "580 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Osaka+Station&destination=Kyoto+Station&travelmode=transit",
                    tacticalGuideId: "mission_osaka_to_kyoto",
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
                        <p>Residencia oficial de la Familia Imperial hasta 1868. El recinto actual, aunque reconstruido en 1855, mantiene la elegancia del estilo Shinden-zukuri del periodo Heian.</p>
                        <ul>
                            <li><i class="fa-solid fa-landmark"></i> <strong>Shishinden:</strong> El salón de ceremonias más importante, donde se celebraron las entronizaciones de los emperadores Taisho y Showa.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Jardín Oikeniwa:</strong> Un jardín de paseo clásico con un estanque que refleja la arquitectura palaciega.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Arquitectura:</strong> Fijaos en los tejados de corteza de ciprés y las paredes de madera clara sin tratar.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "15:00",
                    title: "Castillo de Nijo",
                    description: "Fortaleza de los Shoguns con suelos 'ruiseñor' antininja.",
                    image: "images/dia6-despliegue-capital-imperial.jpg",
                    price: "800 JPY",
                    link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Nijo+Castle&travelmode=transit",
                    tacticalGuideId: "mission_nijo",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fort-awesome"></i> Castillo de Nijo-jo</h3>
                        <p>Construido en 1603 por Tokugawa Ieyasu, el primer shogun. Fue aquí donde, en 1867, el último shogun devolvió el poder al Emperador, cerrando 265 años de dominio militar.</p>
                        <ul>
                            <li><i class="fa-solid fa-music"></i> <strong>Suelos Ruiseñor:</strong> Los pasillos chirrían deliberadamente al caminar para alertar de la presencia de intrusos o ninjas.</li>
                            <li><i class="fa-solid fa-palette"></i> <strong>Palacio Ninomaru:</strong> Sus estancias están decoradas con pinturas de la escuela Kano sobre pan de oro, símbolo del poder del shogun.</li>
                            <li><i class="fa-solid fa-tree"></i> <strong>Jardín Ninomaru:</strong> Diseñado por el maestro Kobori Enshu, con rocas ornamentadas y pinos meticulosamente cuidados.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=N9AXzIbPJoE"
                },
                {
                    id: "b4",
                    time: "17:30",
                    title: "Torre Kioto",
                    description: "Vistas panorámicas desde el mirador justo frente a vuestro hotel.",
                    image: "images/kyoto_tower.png",
                    price: "~5€",
                    link: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tower-observation"></i> Kyoto Tower</h3>
                        <p>Con 131 metros, es la estructura más alta de la ciudad. Su diseño minimalista y blanco está inspirado en una vela budista tradicional.</p>
                        <ul>
                            <li><i class="fa-solid fa-binoculars"></i> <strong>Vistas 360°:</strong> La plataforma a 100 metros ofrece vistas de los templos de Higashiyama, Arashiyama y, en días claros, hasta Osaka.</li>
                            <li><i class="fa-solid fa-train"></i> <strong>Kyoto Station:</strong> Una perspectiva única de la gigantesca y moderna estación de Kioto desde el aire.</li>
                            <li><i class="fa-solid fa-cloud-sun"></i> <strong>Atardecer:</strong> El momento ideal para ver cómo las luces de neón empiezan a salpicar el trazado milenario de la ciudad.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "19:30",
                    title: "Calle Comercial Kawaramachi",
                    description: "Paseo nocturno por la zona de tiendas y cena en los alrededores.",
                    image: "images/kawaramachi.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Kawaramachi+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bag-shopping"></i> Kawaramachi</h3>
                        <p>El corazón comercial de Kioto, ideal para pasear y cenar. Sus galerías (como Teramachi) mezclan tiendas de última moda con pequeños templos y puestos de té tradicionales.</p>
                        <ul>
                            <li><i class="fa-solid fa-utensils"></i> <strong>Gastronomía:</strong> Cientos de opciones para todos los presupuestos en sus estrechos callejones.</li>
                            <li><i class="fa-solid fa-shirt"></i> <strong>Compras:</strong> Desde grandes almacenes (Daimaru, Takashimaya) hasta souvenirs únicos.</li>
                            <li><i class="fa-solid fa-bolt"></i> <strong>Energía:</strong> El lugar perfecto para sentir el pulso de la ciudad moderna.</li>
                        </ul>
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1Qgoj0B-HAAespWxZLEfWDcVpuCMuNlY&usp=sharing",
        image: "images/dia7-kiyomizu.jpg",

        logistics: [
            { title: "Ruta", text: "Recorrido lineal caminando de Kiyomizu-dera hasta Gion." },
            { title: "Tip", text: "Madrugad para ver la terraza de Kiyomizu sin multitudes (08:30)." }
        ],

        transportTimeline: [
            {
                time: "08:15",
                type: "transit",
                title: "Bus 206 / 100 desde Estación",
                price: "230 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Tower+Hotel+Annex&destination=Kiyomizu-dera+Temple&travelmode=transit"
            },
            {
                time: "08:30",
                type: "point",
                title: "Templo Kiyomizu-dera",
                icon: "fa-solid fa-mountain"
            },
            {
                type: "transit",
                title: "Descenso Sannenzaka / Ninenzaka",
                price: "0 JPY",
                timeLabel: "Paseo",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kiyomizu-dera&destination=Ninenzaka&travelmode=walking",
                tacticalGuideId: "mission_higashiyama"
            },
            {
                time: "10:30",
                type: "point",
                title: "Paseo Sannenzaka / Ninenzaka",
                icon: "fa-solid fa-walking"
            },
            {
                type: "transit",
                title: "Caminata hacia Maruyama Park",
                price: "0 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ninenzaka&destination=Yasaka+Shrine&travelmode=walking"
            },
            {
                time: "12:30",
                type: "point",
                title: "Santuario Yasaka / Almuerzo",
                icon: "fa-solid fa-bowl-food"
            },
            {
                type: "transit",
                title: "Paseo al Norte o Bus 100",
                price: "230 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Yasaka+Shrine&destination=Heian+Jingu+Shrine&travelmode=walking"
            },
            {
                time: "15:30",
                type: "point",
                title: "Heian Jingu (Torii Gigante)",
                icon: "fa-solid fa-torii-gate"
            },
            {
                type: "transit",
                title: "Bus 5 o Caminata a Gion",
                price: "230 JPY",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Heian+Jingu+Shrine&destination=Gion+Kyoto&travelmode=transit"
            },
            {
                time: "18:00",
                type: "point",
                title: "Barrio de Gion y Pontocho",
                icon: "fa-solid fa-person-dress-fairy"
            },
            {
                time: "20:00",
                type: "point",
                title: "Cena Tradicional",
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
                    description: "El templo del agua pura y su famosa terraza de madera.",
                    image: "images/dia7-kiyomizu.jpg",
                    price: "400 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Templo Kiyomizu-dera</h3>
                        <p>Uno de los templos más célebres de Japón, fundado en 778 en el lugar de la cascada Otowa. Su nombre significa "Templo del Agua Pura".</p>
                        <ul>
                            <li><i class="fa-solid fa-layer-group"></i> <strong>La Terraza de Madera:</strong> Sostenida por pilares de 13 metros de altura ensamblados sin un solo clavo, ofrece vistas espectaculares de todo Kioto.</li>
                            <li><i class="fa-solid fa-droplet"></i> <strong>Cascada Otowa:</strong> Beber de sus tres chorros supuestamente otorga longevidad, éxito escolar o suerte en el amor. (¡Elegid solo uno!)</li>
                            <li><i class="fa-solid fa-heart"></i> <strong>Santuario Jishu:</strong> Dedicado al amor. Si podéis caminar entre sus dos 'piedras del amor' con los ojos cerrados, encontraréis a vuestra alma gemela.</li>
                        </ul>
                    `,
                    video: "https://www.youtube.com/watch?v=_a-PPFMNpdU"
                },
                {
                    id: "b2",
                    time: "10:30",
                    title: "Sannenzaka y Ninenzaka",
                    description: "Descenso por las cuestas tradicionales más fotogénicas.",
                    image: "images/dia7-historico.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/dir/Kiyomizu-dera/Yasaka+Shrine/",
                    fullDesc: `
                        <h3><i class="fa-solid fa-walking"></i> Sannenzaka y Ninenzaka</h3>
                        <p>Estas cuestas empedradas bellamente conservadas son el alma del distrito de Higashiyama, repletas de edificios de madera tradicionales, tiendas de té y artesanía.</p>
                        <ul>
                            <li><i class="fa-solid fa-store"></i> <strong>Compras:</strong> Perfecto para comprar cerámica Kiyomizu-yaki, incienso, dulces tradicionales o alquilar un kimono.</li>
                            <li><i class="fa-solid fa-mug-hot"></i> <strong>Starbucks Ninenzaka:</strong> Ubicado en una antigua casa de té de madera (machiya). Podéis tomaros un café sentados sobre tatami en la planta superior.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Fotografía:</strong> Calles mágicas al amanecer, antes de que lleguen las multitudes, o al atardecer bajo la luz de las linternas calientes.</li>
                        </ul>
                    `
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
                    title: "Puerta Roja Roui (Heian Jingu)",
                    description: "Visita a uno de los toriis más grandes de Japón.",
                    image: "images/heian_shrine.png",
                    price: "Gratis (Recinto)",
                    link: "https://www.google.com/maps/search/?api=1&query=Heian+Jingu+Shrine",
                    fullDesc: `
                        <h3><i class="fa-solid fa-torii-gate"></i> Heian Jingu</h3>
                        <p>Santuario sintoísta construido a escala parcial recreando el antiguo Palacio Imperial (del periodo Heian), erigido para celebrar el 1.100 aniversario de la fundación de Kioto.</p>
                        <ul>
                            <li><i class="fa-solid fa-archway"></i> <strong>El Gran Torii:</strong> Su puerta de acceso es colosal, de casi 25 metros de altura, marcando la entrada visual al recinto desde lejos.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Jardines Shin-en:</strong> Un espectacular jardín de paseo rodeando los edificios del santuario, diseñado en el estilo Meiji y famoso por sus lirios y cerezos llorones.</li>
                            <li><i class="fa-solid fa-building"></i> <strong>Arquitectura Colorida:</strong> El brillante bermellón de sus pilares y los techos de tejas verdes vidriadas contrastan fuertemente con el cielo azul.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "18:00",
                    title: "Barrio de Gion y Pontocho",
                    description: "Búsqueda de Maikos en Hanamikoji y cena en los callejones junto al río Kamo.",
                    image: "images/dia7-gion.png",
                    price: "Gratis (Paseo)",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-dress-fairy"></i> Gion y Pontocho</h3>
                        <p>Los barrios de entretenimiento más afamados de Kioto. Gion es el dominio absoluto de las geishas (geiko) y maikos, mientras Pontocho es un estrecho callejón gastronómico pegado al río.</p>
                        <ul>
                            <li><i class="fa-solid fa-eye"></i> <strong>Hanamikoji:</strong> La calle principal de Gion. Con suerte e inmenso respeto, podríais ver a una maiko apresurándose a su compromiso nocturno.</li>
                            <li><i class="fa-solid fa-bowl-food"></i> <strong>Cena en Pontocho:</strong> Un largo y atmosférico callejón lleno de farolillos, escondiendo restaurantes de madera y terrazas sobre el agua (yuka).</li>
                            <li><i class="fa-solid fa-bridge"></i> <strong>El Río Kamo:</strong> Separando Pontocho y Gion, ofreciendo una brisa ideal para un paseo relajado de noche.</li>
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
                image: "images/dia7-gion.png",
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
                title: "✅ [Incluido en el Plan General] Gion Shirakawa",
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1L8-Oklw3BvF6Xr_APHVF7Ytqbk1URVI&usp=sharing",
        image: "images/arashiyama.png",

        logistics: [
            { title: "Reserva", text: "Si planeáis el Tren Romántico de Sagano, reservad con 1 mes de antelación." },
            { title: "Madrugar", text: "Lunes en Arashiyama. Bambú a las 8am máximo para evitar gente." },
            { title: "Transporte", text: "Tren JR Sagano Line hasta Saga-Arashiyama." }
        ],

        transportTimeline: [
            {
                time: "07:30",
                type: "point",
                title: "Salida Kyoto Station (JR Sagano Line)",
                icon: "fa-solid fa-train"
            },
            {
                type: "transit",
                title: "JR Sagano Line a Saga-Arashiyama",
                price: "240 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Saga-Arashiyama+Station&travelmode=transit",
                tacticalGuideId: "mission_arashiyama_transfer"
            },
            {
                time: "08:30",
                type: "point",
                title: "Bosque de Bambú / Tenryu-ji",
                icon: "fa-solid fa-leaf"
            },
            {
                type: "transit",
                title: "Paseo al Norte (Caminata Zen)",
                price: "0 JPY",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tenryu-ji+Temple&destination=Adashino+Nenbutsuji+Temple&travelmode=walking"
            },
            {
                time: "11:00",
                type: "point",
                title: "Adashino Nembutsuji",
                icon: "fa-solid fa-ghost"
            },
            {
                type: "transit",
                title: "Subida por la calle tradicional",
                price: "0 JPY",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Adashino+Nenbutsuji+Temple&destination=Otagi+Nenbutsuji+Temple&travelmode=walking"
            },
            {
                time: "12:00",
                type: "point",
                title: "Otagi Nembutsuji",
                icon: "fa-solid fa-face-smile"
            },
            {
                type: "transit",
                title: "Bus de bajada o Caminata",
                price: "230 JPY",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Otagi+Nenbutsuji+Temple&destination=Togetsukyo+Bridge&travelmode=transit"
            },
            {
                time: "14:30",
                type: "point",
                title: "Puente Togetsukyo / Almuerzo",
                icon: "fa-solid fa-bridge"
            },
            {
                type: "transit",
                title: "Paseo cruzando el río Katsura",
                price: "0 JPY",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Togetsukyo+Bridge&destination=Iwatayama+Monkey+Park&travelmode=walking"
            },
            {
                time: "16:00",
                type: "point",
                title: "Parque de Monos Iwatayama",
                icon: "fa-solid fa-mountain"
            }
        ],

        timeline: [
            { time: "08:30", title: "Bosque de Bambú", desc: "Inicio de la ruta. (Base)" },
            { time: "10:00", title: "Tenryu-ji", desc: "Jardín zen y dragón celestial. (Base)" },
            { time: "11:30", title: "Puente Togetsukyo", desc: "Icono de Arashiyama. (Base)" },
            { time: "12:30", title: "Iwatayama", desc: "Vistas y macacos. (Base)" }
        ],

        prices: {
            transport: "~800 JPY",
            entrances: "500 (Tenryu) + 500 (Adashino) + 300 (Otagi) + 600 (Monos) JPY",
            food: "~3.500 JPY",
            total: "~6.200 JPY (Est.)"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Naturaleza y templos en el oeste de Kioto.",
            events: [
                {
                    id: "b1",
                    time: "08:30",
                    title: "Bosque de Bambú y Templo Tenryu-ji",
                    description: "Imprescindible llegar temprano para evitar multitudes.",
                    image: "images/arashiyama.png",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Tenryu-ji+Temple+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Arashiyama Zen</h3>
                        <p>El Templo Tenryu-ji (sede de la secta Rinzai Zen) y su famoso bosque de bambú adyacente forman el corazón de esta zona occidental de Kioto.</p>
                        <ul>
                            <li><i class="fa-solid fa-tree"></i> <strong>Bosque de Bambú:</strong> Entrad antes de las 8:30 am para poder escuchar el susurro del viento entre los inmensos tallos (un sonido protegido por el gobierno).</li>
                            <li><i class="fa-solid fa-dragon"></i> <strong>Pintura del Dragón:</strong> En el techo del Hatto (Salón de la Doctrina) del Tenryu-ji hay un dragón que parece seguirte con la mirada desde cualquier ángulo.</li>
                            <li><i class="fa-solid fa-water"></i> <strong>Jardín Sogenchi:</strong> Diseñado en el siglo XIV, es uno de los primeros jardines de japón en utilizar la técnica del "paisaje prestado", integrando las montañas de Arashiyama.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Adashino Nembutsuji",
                    description: "Templo con miles de figuras de piedra que honran a los fallecidos.",
                    image: "images/adashino-nembutsuji.jpg",
                    price: "500 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Adashino+Nembutsuji+Temple",
                    fullDesc: `
                        <h3><i class="fa-solid fa-ghost"></i> Adashino Nembutsuji</h3>
                        <p>Fundado hace más de 1200 años en un lugar donde antiguamente se dejaban los cuerpos de los fallecidos sin familiares a la intemperie.</p>
                        <ul>
                            <li><i class="fa-solid fa-chess-pawn"></i> <strong>8.000 Estatuas de Piedra:</strong> Representan las almas de los difuntos abandonados, reunidas y colocadas aquí hace un siglo por los locales.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Su Propio Bosque:</strong> Tiene un pequeño pero espectacular bosque de bambú en su parte trasera, sin las multitudes del bosque principal.</li>
                            <li><i class="fa-solid fa-moon"></i> <strong>Sento Kuyo:</strong> En agosto se encienden miles de velas entre las estatuas, creando una atmósfera de otro mundo.</li>
                        </ul>
                    `
                },
                {
                    id: "b3",
                    time: "12:00",
                    title: "Templo Otagi Nembutsuji",
                    description: "El templo de las 1.200 estatuas con expresiones curiosas.",
                    image: "images/otagi-nembutsuji.jpg",
                    price: "300 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Otagi+Nembutsuji+Temple",
                    fullDesc: `
                        <h3><i class="fa-solid fa-face-smile"></i> Otagi Nembutsuji</h3>
                        <p>El templo más peculiar y entrañable de Arashiyama, reconstruido en los años 80 por un monje escultor que enseñó a cientos de aficionados a tallar piedra.</p>
                        <ul>
                            <li><i class="fa-solid fa-masks-theater"></i> <strong>1.200 Rakan:</strong> Figuras budistas talladas por devotos comunes. Cada una es diferente: algunas ríen a carcajadas, otras beben sake, y ¡hasta hay alguna con cámara de fotos!</li>
                            <li><i class="fa-solid fa-peace"></i> <strong>Atmósfera:</strong> Ubicado en una ladera boscosa, cubierto de musgo verde brillante. Es increíblemente tranquilo.</li>
                            <li><i class="fa-solid fa-magnifying-glass"></i> <strong>Juego:</strong> Intentad encontrar la estatua que más se parezca a vosotros.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "14:30",
                    title: "Puente Togetsukyo",
                    description: "Paseo por el río y almuerzo en la zona de Arashiyama.",
                    image: "images/dia8-puente.png",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Togetsukyo+Bridge",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bridge"></i> Puente Togetsukyo</h3>
                        <p>Su nombre romántico significa "Puente que cruza la luna". Su icónica silueta de madera sobre el río Katsura con las montañas de fondo es la postal clásica de Arashiyama.</p>
                        <ul>
                            <li><i class="fa-solid fa-fish"></i> <strong>Pesca Ukai:</strong> En las noches de verano se puede ver la pesca tradicional con cormoranes desde pequeñas barcas iluminadas con fuego.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Fotografía:</strong> Impresionante en otoño con los arces rojos, o en primavera con el cerezo llorón gigante en la orilla norte.</li>
                            <li><i class="fa-solid fa-ice-cream"></i> <strong>Descanso:</strong> Comprad un helado de matcha o yuba y sentaos a la orilla del río a observar las barcas pasar.</li>
                        </ul>
                    `
                },
                {
                    id: "b5",
                    time: "16:00",
                    title: "Parque de Monos Iwatayama",
                    description: "Subida a la colina para ver a los macacos y disfrutar de vistas panorámicas.",
                    image: "images/dia8-monos.png",
                    price: "600 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Iwatayama+Monkey+Park",
                    fullDesc: `
                        <h3><i class="fa-solid fa-mountain"></i> Parque de Monos Iwatayama</h3>
                        <p>Una divertida excursión de naturaleza que requiere subir una cuesta boscosa de unos 20 minutos desde la orilla sur del río.</p>
                        <ul>
                            <li><i class="fa-solid fa-disease"></i> <strong>Macacos Japoneses:</strong> Veréis a más de 120 monos de cara roja en libertad.</li>
                            <li><i class="fa-solid fa-apple-whole"></i> <strong>Interacción Segura:</strong> Estáis en su territorio, pero podéis darles comida (cacahuetes o manzanas) desde dentro de una cabaña vallada (¡vosotros estáis en la jaula, ellos libres!).</li>
                            <li><i class="fa-solid fa-city"></i> <strong>Vistas Panorámicas:</strong> El mirador ofrece una de las panorámicas más amplias y despejadas de toda la ciudad de Kioto.</li>
                        </ul>
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

];
