/* ==========================================
   JAPÓN 2026 - DATOS DÍAS 9-16
   ========================================== */

const travelData_09_16 = [
    // --- DÍA 9: KIOTO: CONTRASTES IMPERDIBLES ---
    {
        day: 9, type: "stay",
        date: "Mar, 4 Agosto", title: "Kioto: Contrastes Imperdibles",
        coords: [34.967, 135.772], zoom: 12,
        hotel: "Kyoto Tower Hotel Annex",
        hotelImage: "images/hotel-kyoto-tower.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Tower+Hotel+Annex",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1QX0oai9XsdBCPdWuGd-wQ8nP3Zgqvrw&usp=sharing",
        image: "images/fushimi_inari.png",

        logistics: [
            { title: "Transporte", text: "Hoy cruzamos Kioto. Usaremos tren JR por la mañana y bus urbano por la tarde. Ten la tarjeta IC (Suica/Pasmo) lista." },
            { title: "Tip", text: "En el Mercado Nishiki no se debe caminar mientras se come; busca los espacios designados en cada puesto." }
        ],

        transportTimeline: [
            {
                time: "07:45",
                type: "transit",
                title: "JR Nara Line a Inari",
                price: "150 JPY",
                timeLabel: "5 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Inari+Station+Kyoto&travelmode=transit",
                tacticalGuideId: "route_day9_kyoto_to_inari",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Kyoto Station",
                    destination: "Inari (Fushimi Inari)",
                    totalTime: "5 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Kyoto Station",
                            code: "JR-D01",
                            line: "JR Nara Line (Verde)",
                            lineColor: "#009944",
                            platform: "8, 9 u 10 (Línea Nara)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Inari Station",
                            code: "JR-D03",
                            line: "JR Nara Line (Verde)",
                            lineColor: "#009944",
                            exit: "Salida única (justo enfrente del Torii gigante del templo)"
                        }
                    ],
                    gpsWarning: "¡ATENCIÓN! Sube exclusivamente a un tren LOCAL. Los trenes Express o Rapid Service de la línea Nara NO paran en la estación de Inari y acabaríais en Uji."
                }
            },
            {
                time: "08:00",
                type: "point",
                title: "Fushimi Inari (Toriis)",
                icon: "fa-solid fa-torii-gate"
            },
            {
                type: "transit",
                title: "JR Inari + Bus 203/204",
                price: "150 + 230 JPY",
                timeLabel: "40 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Inari+Station&destination=Ginkaku-ji+Temple&travelmode=transit",
                tacticalGuideId: "mission_kyoto_center_link"
            },
            {
                time: "12:30",
                type: "point",
                title: "Paseo del Filósofo",
                icon: "fa-solid fa-person-walking-zen"
            },
            {
                type: "transit",
                title: "Bus 102 / 204 / 205",
                price: "230 JPY",
                timeLabel: "45 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ginkaku-ji&destination=Kinkaku-ji&travelmode=transit",
                tacticalGuideId: "mission_kinkakuji_bus"
            },
            {
                time: "15:30",
                type: "point",
                title: "Kinkaku-ji (Pabellón Oro)",
                icon: "fa-solid fa-sparkles"
            },
            {
                type: "transit",
                title: "Bus 12 / 59 al Centro",
                price: "230 JPY",
                timeLabel: "35 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kinkaku-ji&destination=Kawaramachi+Station&travelmode=transit"
            },
            {
                time: "19:00",
                type: "point",
                title: "Cena de Despedida Kioto",
                icon: "fa-solid fa-utensils"
            }
        ],

        timeline: [
            { time: "08:00", title: "Fushimi Inari", desc: "Miles de toriis rojos. (Base)" },
            { time: "12:30", title: "Mercado Nishiki", desc: "Gastronomía local. (Base)" },
            { time: "15:30", title: "Kinkaku-ji", desc: "El pabellón de oro. (Base)" }
        ],

        prices: {
            transport: "~1.000 JPY",
            entrances: "500 (Kinkaku-ji) JPY",
            food: "~5.000 (Cena Especial) JPY",
            total: "~6.500 JPY (Est.)"
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
                        <h3><i class="fa-solid fa-torii-gate"></i> Fushimi Inari-taisha</h3>
                        <p>Dedicado a Inari, el dios Shinto del arroz y la prosperidad, este santuario es famoso por sus miles de toriis bermellón que forman túneles sobre la montaña sagrada.</p>
                        <ul>
                            <li><i class="fa-solid fa-person-hiking"></i> <strong>Ascenso:</strong> El camino completo hasta la cima lleva unas 2-3 horas, pero el tramo más denso de toriis (Senbon Torii) está justo al principio.</li>
                            <li><i class="fa-solid fa-fox"></i> <strong>Zorros Protectores:</strong> Veréis estatuas de zorros (kitsune) por todas partes, llevando la llave del granero en la boca o una joya sagrada.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Fotografía:</strong> Llegar a las 08:00 AM os garantiza fotos limpias de los densos túneles rojos sin aglomeraciones.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "12:30",
                    title: "Paseo del Filósofo",
                    description: "Sendero zen junto al canal rodeado de templos y vegetación.",
                    image: "images/filosofo.png",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Philosopher's+Walk+Kyoto",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-walking-zen"></i> Tetsugaku no michi</h3>
                        <p>Llamado así por el influyente filósofo japonés del siglo XX, Nishida Kitaro, quien solía meditar aquí mientras caminaba hacia la universidad de Kioto diariamente.</p>
                        <ul>
                            <li><i class="fa-solid fa-water"></i> <strong>El Canal:</strong> El sendero empedrado sigue un pequeño canal que conecta Ginkaku-ji con la zona de Nanzen-ji.</li>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Vegetación:</strong> Famoso por sus cientos de cerezos que forman un dosel floral en primavera, y por el intenso verde que da sombra fresca en verano.</li>
                            <li><i class="fa-solid fa-cat"></i> <strong>Ambiente:</strong> Encontraréis pequeñas cafeterías encantadoras, tiendas de artesanía local y bastantes gatos descansando.</li>
                        </ul>
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
                        <h3><i class="fa-solid fa-sparkles"></i> Kinkaku-ji (Pabellón Dorado)</h3>
                        <p>Originalmente una villa de descanso del shogun Ashikaga Yoshimitsu, se convirtió en templo Zen tras su muerte. Sus dos pisos superiores están completamente recubiertos de pan de oro.</p>
                        <ul>
                            <li><i class="fa-solid fa-camera-retro"></i> <strong>El Reflejo:</strong> En días despejados, el edificio dorado se refleja perfectamente en el agua del lago Kyoko-chi.</li>
                            <li><i class="fa-solid fa-fire"></i> <strong>Historia:</strong> El actual pabellón es de 1955; el original fue quemado en 1950 por un monje novicio obsesionado, historia contada en la novela de Mishima.</li>
                            <li><i class="fa-solid fa-tree"></i> <strong>Jardín Strolling:</strong> Tras admirar el pabellón, caminaréis por su cuidado jardín de estilo Muromachi.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "19:00",
                    title: "Cena de Despedida",
                    description: "Última cena en Kioto para celebrar vuestros días imperiales.",
                    image: "images/cena_despedida.png",
                    price: "Variable",
                    link: "https://www.google.com/maps/search/?api=1&query=best+restaurants+Kyoto+Station",
                    fullDesc: `<h3><i class="fa-solid fa-utensils"></i> Farewell Dinner</h3><p>Una cena especial para despedirse de la capital cultural de Japón antes de partir a los Alpes.</p>`
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
                    <p>A solo 15 min caminando desde Kinkaku-ji, este templo alberga el karesansui (jardín de roca seco) más icónico y enigmático de Japón.</p>
                    <ul>
                        <li><i class="fa-solid fa-hand-holding-hand"></i> <strong>Las 15 Piedras:</strong> En el mar de grava blanca hay 15 rocas dispuestas en grupos. El diseño es tal que, te sientes donde te sientes, nunca podrás ver las 15 a la vez.</li>
                        <li><i class="fa-solid fa-brain"></i> <strong>Significado:</strong> Se cree que representa el infinito o islas en el mar, pero no tiene una explicación oficial única, invitando a la meditación.</li>
                        <li><i class="fa-solid fa-water"></i> <strong>Tsukubai:</strong> Buscad la palangana de piedra para purificarse que tiene la inscripción zen oculta: "Solo sé lo que es suficiente".</li>
                    </ul>
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1JqenywGFFB_5RJcd9AeQDmCX82vuECw&usp=sharing",
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
                icon: "fa-solid fa-suitcase-rolling",
                tacticalGuideId: "mission_takkyubin_kyoto_tokyo"
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1ZE3_GUt49OwUVbsbOGrb6fG1M5m-yLo&usp=sharing",
        coords: [36.259, 137.551], zoom: 13,
        hotel: "Kazeya Ryokan",
        hotelImage: "images/hotel-kazeya.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Kazeya+Ryokan+Shin-Hotaka+Onsen",
        image: "images/okuhida_ryokan.png",

        logistics: [
            { title: "Billetes Shinkansen", text: "COMPRADO: Nozomi 2 (08:45 -> 09:19). Asientos reservados en <strong>Vagón 16 (Filas 14 a 17, asientos D y E)</strong>. Los códigos QR individuales de acceso están vinculados en el panel de Documentos (Día 0) y en la Guía de Transporte de este día." },
            { title: "Billetes Hida (Nagoya-Takayama)", text: "COMPRADO: Hida 7 (10:00 -> 12:30). Localizadores <strong>41256</strong> (3 Ad + 1 Ch) y <strong>42023</strong> (4 Ad). Deben ser <strong>impresos físicamente</strong> en una máquina JR verde o ventanilla (ej. en Kioto) usando la tarjeta MasterCard terminada en <strong>7801</strong> y el PIN de 4 dígitos creado. Ver instrucciones completas en la Guía de Transporte." },
            { title: "Equipaje", text: "Solo mochilas de mano. Las maletas grandes van por Takkyubin a Tokio o Kawaguchiko." },
            { title: "Onsen", text: "Ducharse antes de entrar. Tatuajes: consultar política (o reservar privado)." }
        ],

        transportTimeline: [
            { time: "08:15", type: "point", title: "Salida hacia Estación de Kioto", icon: "fa-solid fa-train-subway" },
            {
                time: "08:45",
                type: "transit",
                title: "Shinkansen Nozomi a Nagoya (COMPRADO)",
                price: "Asientos: Vagón 16, Filas 14-17 (D/E)",
                timeLabel: "34 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Nagoya+Station&travelmode=transit",
                tacticalGuideId: "mission_kyoto_to_okuhida",
                booking: { id: "bk_shinkansen", timeframe: "COMPRADO (QRs listos)", required: true, link: "https://shinkansen2.jr-central.co.jp/RSV_P/S_smart_en_index.htm" }
            },
            { 
                time: "09:19", 
                type: "point", 
                title: "⚠️ CRÍTICO: Transbordo en Nagoya", 
                icon: "fa-solid fa-triangle-exclamation",
                desc: "Llegada a las 09:19. Salir de tornos Shinkansen y buscar señales AMARILLAS hacia vías 10-11 (Hida). Moverse como bloque de 8."
            },
            {
                time: "10:00",
                type: "transit",
                title: "Tren Wide View Hida a Takayama (COMPRADO)",
                price: "Localizadores: 41256 / 42023",
                timeLabel: "2h 30m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nagoya+Station&destination=Takayama+Station&travelmode=transit",
                tacticalGuideId: "mission_kyoto_to_okuhida",
                booking: { id: "bk_hida", timeframe: "COMPRADO (Imprimir JR)", required: true, link: "https://www.westjr.co.jp/global/en/ticket/route_search/" }
            },
            { time: "12:30", type: "point", title: "LLegada a Takayama / Almuerzo rápido", icon: "fa-solid fa-bowl-food" },
            {
                time: "13:40",
                type: "transit",
                title: "Primer Bus Nohi hacia Okuhida",
                price: "~2.200 JPY",
                timeLabel: "1h 30m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Nohi+Bus+Center&destination=Shin-Hotaka+Onsen&travelmode=transit",
                tacticalGuideId: "mission_kyoto_to_okuhida",
                booking: { id: "bk_nohi_okuhida", timeframe: "1 mes antes", required: true, link: "https://www.nouhibus.co.jp/english/" }
            },
            { time: "15:10", type: "point", title: "Check-in Kazeya Ryokan", icon: "fa-solid fa-hot-tub-person" }
        ],

        timeline: [
            { time: "08:45", title: "Tren a Takayama", desc: "Shinkansen a Nagoya y Wide View Hida. (Base)" },
            { time: "15:10", title: "Check-in Ryokan", desc: "Té verde, yukata y onsen. (Base)" },
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
                        <ul>
                            <li><i class="fa-solid fa-leaf"></i> <strong>Naturaleza Pura:</strong> El agua puede estar muy caliente, pero la brisa fresca del río y las vistas a la montaña compensan.</li>
                            <li><i class="fa-solid fa-eye-slash"></i> <strong>Privacidad:</strong> Al ser mixto y público, requiere quitarse pudores y fundirse con la costumbre local en un entorno único.</li>
                        </ul>
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
                        <ul>
                            <li><i class="fa-solid fa-camera"></i> <strong>Vistas de 360°:</strong> Desde la plataforma de observación se ven picos imponentes que rozan los 3.000 metros.</li>
                            <li><i class="fa-solid fa-snowflake"></i> <strong>Temperatura:</strong> Llevar chaqueta, la temperatura baja drásticamente al cruzar el mar de nubes.</li>
                        </ul>
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
                    <ul>
                        <li><i class="fa-solid fa-chair"></i> <strong>El Mejor Asiento:</strong> Si viajáis de Nagoya/Kioto a Tokio, el Fuji aparecerá por las ventanas del lado izquierdo (Asientos E).</li>
                        <li><i class="fa-solid fa-cloud"></i> <strong>Suerte climática:</strong> Verlo requiere suerte, ya que las nubes suelen cubrirlo velózmente.</li>
                    </ul>
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
                    <ul>
                        <li><i class="fa-solid fa-person-hiking"></i> <strong>Caminata Fácil:</strong> Un paseo pavimentado de 15 minutos desde la parada de autobús os dejará a sus pies.</li>
                    </ul>
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
                    <ul>
                        <li><i class="fa-solid fa-shoe-prints"></i> <strong>Vestimenta:</strong> Salid en Yukata y Geta (sandalias de madera). Escuchar el cloc-cloc de la madera en la noche es puramente japonés.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 12: TAKAYAMA (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 12, exactDate: "2026-08-07", type: "stay",
        date: "Vie, 7 Agosto", title: "🏔️ Takayama: Japón Feudal",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1WI_8rcojN2LWqVF7oS1AaDX7OeCDT4U&usp=sharing",
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
                    <p>Única oficina del gobierno del periodo Edo que queda en pie, instalada directamente por el shogunato Tokugawa para administrar sus ricas tierras madereras.</p>
                    <ul>
                        <li><i class="fa-solid fa-scale-balanced"></i> <strong>Justicia:</strong> Se puede ver la sala de interrogatorios de madera.</li>
                        <li><i class="fa-solid fa-warehouse"></i> <strong>Graneros de Arroz:</strong> Solían almacenar el impuesto de la región, que se cobraba en arroz en lugar de dinero.</li>
                    </ul>
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
                    <p>Muestra las espectaculares y gigantescas carrozas de madera adornadas que desfilan en los festivales de Takayama, considerados de los más bellos de Japón.</p>
                    <ul>
                        <li><i class="fa-solid fa-gem"></i> <strong>Detalle Extremo:</strong> Apreciaréis de cerca las intrincadas tallas, trabajos de orfebrería y complejas marionetas mecánicas.</li>
                    </ul>
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
                    <p>Un paseo tranquilo alejado de las rutas comerciales, diseñado en el siglo XVI para emular los templos de la zona de Higashiyama en Kioto.</p>
                    <ul>
                        <li><i class="fa-solid fa-person-walking"></i> <strong>Paz Absoluta:</strong> Un sendero de varios km que serpentea por laderas boscosas y panteones centenarios llenos de musgo.</li>
                    </ul>
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
                    <p>Museo al aire libre. Podréis entrar en decenas de casas reales desmontadas de los alpes y reensambladas aquí, con sus enormes tejados de paja (estilo Gassho-zukuri).</p>
                    <ul>
                        <li><i class="fa-solid fa-fire"></i> <strong>Vida Tradicional:</strong> En el interior de las casas aún encienden los hogares (irori) haciéndoos sentir en el Japón rural de hace siglos.</li>
                    </ul>
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
                    <h3><i class="fa-solid fa-masks-theater"></i> Museo del Festival Subterráneo</h3>
                    <p>Alberga las carrozas más modernas con autómatas mecánicos (karakuri) que realizan demostraciones.</p>
                    <ul>
                        <li><i class="fa-solid fa-drum"></i> <strong>Tambores Gigantes:</strong> Escondido en una cueva excavada en la montaña, encontraréis los tambores Taiko más grandes del mundo.</li>
                    </ul>
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
                    <p>Un santuario que ofrece paz absoluta, guardián del norte de la ciudad. Es el lugar donde se celebra el espectacular festival de otoño de Takayama.</p>
                    <ul>
                        <li><i class="fa-solid fa-tree"></i> <strong>Naturaleza:</strong> Su recinto está flanqueado por gigantescos cedros centenarios, creando una atmósfera de profundo misticismo.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 13: KAWAGUCHIKO (Llegada) ---
    {
        day: 13, exactDate: "2026-08-08", type: "travel",
        date: "Sáb, 8 Agosto", title: "🗻 Kawaguchiko: El Monte Fuji",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1kBBxFBG6ljPq2zz0f7Ws_UEOyDd6UcE&usp=sharing",
        coords: [35.498, 138.768], zoom: 13,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia13-portada.jpg",

        logistics: [
            { title: "⚠️ Alerta Desvío Bus", text: "Ruta usual Takayama-Hirayu suspendida por desvío. Nuevo itinerario del bus: Takayama (08:50) ➔ Hirayu Onsen (10:25-10:45) ➔ Matsumoto (11:50-12:05) ➔ Kawaguchiko (14:50). Tlf. Emergencia: 090-9541-0363." },
            { title: "Bus", text: "LIMON Bus (COMPRADO). Presentarse 10 minutos antes (08:40) en el punto de encuentro de Takayama." },
            { title: "Coche", text: "Recogida de Budget Rent a Car nada más llegar a la estación (traslado al hotel en coche)." }
        ],

        transportTimeline: [
            { time: "08:40", type: "point", title: "Llegada a Estación de Takayama (10 min antes - CRÍTICO)", icon: "fa-solid fa-bus-simple" },
            {
                time: "08:50",
                type: "transit",
                title: "Autobús Turístico LIMON Bus (Detour Activo - COMPRADO)",
                booking: { id: "bk_fuji_bus", timeframe: "COMPRADO", required: true, link: "https://www.nouhibus.co.jp/english/" },
                price: "10.000 JPY / persona (80.000 JPY total)",
                timeLabel: "6h (Desvío de ruta)",
                link: "https://www.google.com/maps/dir/?api=1&origin=Takayama+Station&destination=Kawaguchiko+Station&travelmode=transit",
                tacticalGuideId: "mission_takayama_to_fuji"
            },
            { time: "14:50", type: "point", title: "Llegada Kawaguchiko Station (Retrasado por desvío)", icon: "fa-solid fa-flag-checkered" },
            { time: "15:05", type: "point", title: "Recogida Coche: Toyota/Budget Fuji Kawaguchiko", icon: "fa-solid fa-car" },
            {
                time: "15:35",
                type: "transit",
                title: "Desplazamiento en coche de alquiler",
                price: "Gasolina compartida",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi"
            },
            { time: "15:45", type: "point", title: "Check-in Hotel Toyoko Inn", icon: "fa-solid fa-bed" },
            { time: "16:45", type: "point", title: "Pagoda Chureito (Luz de tarde)", icon: "fa-solid fa-vihara" },
            { time: "18:45", type: "point", title: "Paseo por el lago", icon: "fa-solid fa-person-walking-zen" },
            { time: "19:30", type: "point", title: "Oishi Park (Atardecer)", icon: "fa-solid fa-cloud-sun" }
        ],

        timeline: [
            { time: "08:50", title: "LIMON Bus a Kawaguchiko", desc: "Trayecto de 6h con desvío por Hirayu y Matsumoto. (Base)" },
            { time: "15:05", title: "Recogida Coche", desc: "Alquiler listo para explorar la zona de los Cinco Lagos. (Base)" },
            { time: "15:45", title: "Check-in Hotel", desc: "Instalación en Toyoko Inn Fuji Kawaguchiko Ohashi. (Base)" },
            { time: "16:45", title: "Pagoda Chureito", desc: "La foto más icónica de Japón con luz de tarde/atardecer. (Base)" },
            { time: "18:45", title: "Paseo por el lago", desc: "Vistas y paz junto al agua. (Base)" },
            { time: "19:30", title: "Atardecer en Oishi Park", desc: "El momento mágico del día frente al Fuji. (Base)" }
        ],

        prices: {
            transport: "Reserva de Bus (~5.000 JPY) + Alquiler coche compartido (~2.000 JPY/pax/día)",
            total: "~7.000 JPY"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Traslado a la región de los Cinco Lagos y primera toma de contacto con el coloso.",
            events: [
                {
                    id: "b1",
                    time: "08:50",
                    title: "Viaje a la falda del Volcán",
                    description: "Jornada de viaje en el LIMON Bus a través de las montañas centrales de Japón.",
                    price: "10.000 JPY",
                    image: "images/fuji_lago.png",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bus"></i> Autobús Turístico LIMON Bus</h3>
                        <p>Aprovechad para descansar. El viaje dura unas 5 horas y a medio camino el paisaje cambia radicalmente revelando la inmensa silueta cónica del Fuji.</p>
                        <ul>
                            <li><i class="fa-solid fa-mountain-sun"></i> <strong>Lado Izquierdo:</strong> Las mejores vistas al aproximarse a Kawaguchiko suelen estar en las ventanillas izquierdas.</li>
                        </ul>
                    `
                },
                {
                    id: "b2",
                    time: "14:15",
                    title: "Recogida de Coche (Budget)",
                    description: "Clave logística: El transporte público alrededor del Fuji es muy deficiente. El coche da alas.",
                    image: "images/dia13-portada.jpg",
                    price: "Coche Alquiler",
                    fullDesc: `
                        <h3><i class="fa-solid fa-car-side"></i> Operación Conducción Nipona</h3>
                        <p>Os tocará conducir por la izquierda. El coche proporciona la única forma de moverse libremente alrededor de los lagos.</p>
                        <ul>
                            <li><i class="fa-solid fa-traffic-light"></i> <strong>Tráfico:</strong> Las carreteras son estupendas, pero los límites de velocidad son estrictos (40-50 km/h).</li>
                            <li><i class="fa-solid fa-stop"></i> <strong>Pasos a Nivel:</strong> Es OBLIGATORIO detener el coche completamente (Stop) antes de cualquier vía de tren, aunque no haya barreras o luces.</li>
                        </ul>
                    `,
                    booking: { id: "bk_coches", timeframe: "2-3 meses antes", required: true, link: "https://www.budgetrentacar.co.jp/en/" }
                },
                {
                    id: "b3",
                    time: "15:00",
                    title: "Check-in y 'Campo Base'",
                    description: "Instalación en el Toyoko Inn para organizar el equipaje y planificar la tarde.",
                    image: "images/hotel-toyoko-kawaguchiko.jpg",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bed"></i> Instalación en Kawaguchiko</h3>
                        <p>Dejad las maletas, refrescaos y preparad las cámaras. Aquí es donde empieza vuestra aventura real en la naturaleza japonesa.</p>
                        <ul>
                            <li><i class="fa-solid fa-cloud"></i> <strong>El Clima:</strong> El Fuji crea su propio microclima; revisad la cámara 'Fuji Live Cam' antes de salir.</li>
                        </ul>
                    `
                },
                {
                    id: "b4",
                    time: "16:30",
                    title: "Pagoda Chureito",
                    description: "Es el momento ideal por la luz de la tarde. Al tener coche, aparcaréis en la zona (aprox. 1.000 JPY) y subiréis los 398 escalones para la foto icónica del viaje.",
                    price: "Gratis (Parking ~1.000 JPY)",
                    image: "images/dia13-chureito.jpg",
                    fullDesc: `
                        <h3><i class="fa-solid fa-vihara"></i> La Pagoda de la Paz: Chureito</h3>
                        <p>Ubicada en el Parque Arakurayama Sengen, esta pagoda de cinco pisos es el símbolo visual de Japón por excelencia.</p>
                        <p><em>Para llegar a la plataforma de observación, deberéis subir exactamente 398 escalones. Al llegar arriba, entenderéis por qué: la alineación perfecta de la pagoda bermellón con el Monte Fuji al fondo crea una composición que parece pintada.</em></p>
                    `
                },
                {
                    id: "b5",
                    time: "18:30",
                    title: "Paseo por el lago",
                    description: "Disfrutad de la tranquilidad de las orillas del lago Kawaguchiko con el coloso de fondo.",
                    price: "Gratis",
                    image: "images/fuji_lago.png",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-walking-zen"></i> Paseo por el Lago</h3>
                        <p>Caminad por los senderos habilitados bordeando el agua. Es el momento perfecto para estirar las piernas tras el largo viaje.</p>
                        <ul>
                            <li><i class="fa-solid fa-camera"></i> <strong>El Reflejo:</strong> Si el viento está en calma al atardecer, es posible capturar el raro "Fuji Invertido" reflejado en el agua.</li>
                        </ul>
                    `
                },
                {
                    id: "b6",
                    time: "19:30",
                    title: "Atardecer en Oishi Park",
                    description: "El momento mágico donde el cielo se tiñe de colores sobre el Monte Fuji.",
                    price: "Gratis",
                    image: "images/oishi_park_atardecer.jpg",
                    fullDesc: `
                        <h3><i class="fa-solid fa-cloud-sun"></i> Sunset en Oishi Park</h3>
                        <p>El Oishi Park ofrece una de las mejores vistas panorámicas, famoso por sus mantos de flores estacionales (lavanda, kochia).</p>
                        <ul>
                            <li><i class="fa-solid fa-image"></i> <strong>Momento Mágico:</strong> Veréis cómo el sol se oculta tras el Fuji, creando una silueta negra imponente contra un cielo encendido.</li>
                        </ul>
                    `
                }
            ]
        },
        complements: [],
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
                    <p>Jardines con estética europea del siglo XIX y panorámicas espectaculares al Fuji.</p>
                    <ul>
                        <li><i class="fa-solid fa-clock-rotate-left"></i> <strong>Cajas Mágicas:</strong> El museo exhibe impresionantes órganos mecánicos antiguos, algunos pensados originalmente para el Titanic.</li>
                    </ul>
                `
            }
        ]
    },

    // --- DÍA 14: EL MONTE FUJI (ESTRUCTURA FLEXIBLE: RELAX VS TREKKING) ---
    {
        day: 14, type: "stay",
        date: "Dom, 9 Agosto", title: "⛰️ Inmersión en el Gigante Sagrado",
        coords: [35.360, 138.727], zoom: 12,
        hotel: "Toyoko Inn Fuji Kawaguchiko Ohashi",
        hotelImage: "images/hotel-toyoko-kawaguchiko.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Toyoko+Inn+Fuji+Kawaguchiko+Ohashi",
        image: "images/dia15-portada.jpg",

        logistics: [
            { title: "Transporte", text: "2 Vehículos de alquiler. Conducción por la izquierda, velocidad 40-50 km/h." },
            { title: "Fuji Subaru Line", text: "En agosto, acceso prohibido a coches privados. Usar Shuttle Bus desde Parking Fujihoku-roku." },
            { title: "Equipaje", text: "Vuestras maletas grandes ya habrán llegado al hotel por Takkyubin; ropa limpia esperándoos tras el onsen." }
        ],

        transportTimeline: [
            { time: "07:30", type: "point", title: "Salida del Hotel (Coches A y B)", icon: "fa-solid fa-car-side" },
            {
                time: "08:30",
                type: "point",
                title: "División de Misiones: 5ª Estación vs Trekking",
                icon: "fa-solid fa-split"
            },
            {
                time: "13:30",
                type: "point",
                title: "Reencuentro en zona de los lagos",
                icon: "fa-solid fa-handshake"
            },
            {
                time: "16:00",
                type: "point",
                title: "Relax en Onsen Fujiyama",
                icon: "fa-solid fa-hot-tub-person"
            },
            {
                time: "18:30",
                type: "point",
                title: "Retorno al Hotel",
                icon: "fa-solid fa-hotel"
            }
        ],

        timeline: [
            { time: "07:30", title: "Salida y División", desc: "Inicio de jornada según preferencia. (Base)" },
            { time: "13:30", title: "Reencuentro y Almuerzo", desc: "Puesta en común en restaurante local. (Base)" },
            { time: "16:00", title: "Protocolo Relax", desc: "Onsen Fujiyama (Baños volcánicos). (Base)" }
        ],

        prices: {
            transport: "Gasolina + Peaje/Shuttle",
            activityCosts: [
                { name: "Tasa Cima (QR)", price: "4.000 JPY" },
                { name: "Bus 5ª Estación", price: "2.500 JPY" },
                { name: "Cuevas Aokigahara", price: "350 JPY" }
            ],
            food: "~2.500 JPY"
        },

        customRightHTML: `
            <div class="sidebar-fuji-custom">
                <div style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:10px;">
                    <span style="color:var(--accent); font-weight:800; text-transform:uppercase;">Dom, 9 Agosto</span>
                    <h2 style="font-size:1.6rem; color:white;">⛰️ El Gigante Sagrado</h2>
                </div>

                <!-- BLOQUE 1: COCHE BASE (A/B/C) -->
                <div class="transport-timeline-container" style="margin-top:10px; background:rgba(56,189,248,0.05); padding:15px; border-radius:12px; border:1px solid rgba(56,189,248,0.2);">
                    <div class="logistics-title" style="margin-bottom:15px; color:var(--neon-blue);"><i class="fa-solid fa-car-side"></i> COCHE BASE (A/B/C)</div>
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:12px;">
                        <span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">08:30</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-split" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">División de Grupos</span>
                        </div>
                    </div>
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:12px;">
                        <span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">13:30</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-utensils" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">Comida y Reencuentro</span>
                        </div>
                    </div>
                    <div class="transport-point" style="display:flex; align-items:center;">
                        <span style="color:var(--neon-blue); font-weight:bold; min-width:55px; font-family:monospace;">16:00</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-hot-tub-person" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">Relax y Onsen</span>
                        </div>
                    </div>
                </div>

                <!-- BLOQUE 2: COCHE CUMBRE (OPCIÓN D) -->
                <div class="transport-timeline-container" style="margin-top:20px; background:rgba(239,68,68,0.05); padding:15px; border-radius:12px; border:1px solid rgba(239,68,68,0.2);">
                    <div class="logistics-title" style="margin-bottom:15px; color:var(--danger);"><i class="fa-solid fa-volcano"></i> COCHE CUMBRE (OPC. D)</div>
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:12px;">
                        <span style="color:var(--danger); font-weight:bold; min-width:55px; font-family:monospace;">05:00</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-bolt" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">Salida Extrema (Parking)</span>
                        </div>
                    </div>
                    <div class="transport-point" style="display:flex; align-items:center; margin-bottom:12px;">
                        <span style="color:var(--danger); font-weight:bold; min-width:55px; font-family:monospace;">12:30</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-mountain" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">¡Cima del Monte Fuji!</span>
                        </div>
                    </div>
                    <div class="transport-point" style="display:flex; align-items:center;">
                        <span style="color:var(--danger); font-weight:bold; min-width:55px; font-family:monospace;">19:00</span>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; display:flex; align-items:center; flex:1;">
                            <i class="fa-solid fa-hotel" style="color:var(--gold); margin-right:8px;"></i>
                            <span style="color:#f0f0f0; font-size:0.9rem;">Regreso Directo Hotel</span>
                        </div>
                    </div>
                </div>

                <!-- GASTOS POR ACTIVIDAD -->
                <div class="prices-box" style="margin-top:20px;">
                    <div class="prices-title"><i class="fa-solid fa-yen-sign"></i> COSTES POR ACTIVIDAD</div>
                    <div class="prices-item"><strong>Tasa Cima (QR):</strong> 4.000 JPY</div>
                    <div class="prices-item"><strong>Bus 5ª Estación:</strong> 2.500 JPY</div>
                    <div class="prices-item"><strong>Cuevas Aokigahara:</strong> 350 JPY</div>
                    <div class="prices-item" style="margin-top:5px; font-size:0.8rem; color:rgba(255,255,255,0.5);">* Gasolina y comida aparte.</div>
                </div>
            </div>
        `,

        isFlexible: true,
        base: { 
            description: "", 
            events: [
                {
                    id: "opt-a",
                    title: "OPCIÓN A: Umbral del Cielo",
                    time: "08:30",
                    description: "5ª Estación (2.305m). Tocar el volcán sin esfuerzo físico.",
                    price: "~2.500 JPY (Bus)",
                    image: "images/dia14-5-estacion-fuji.jpg",
                    fullDesc: `
                        <h3><i class="fa-solid fa-cloud"></i> Fuji 5ª Estación (Yoshida Line)</h3>
                        <p>Ideal para quienes quieran "tocar" el volcán sin esfuerzo físico. Estaréis por encima de las nubes.</p>
                        <ul>
                            <li><i class="fa-solid fa-car"></i> <strong>Trayecto:</strong> 15 min al Parking Fujihoku-roku.</li>
                            <li><i class="fa-solid fa-bus"></i> <strong>Shuttle:</strong> Autobús lanzadera (45 min) hasta la cima accesible.</li>
                            <li><i class="fa-solid fa-shrine"></i> <strong>Santuario Komitake:</strong> Con 1.000 años de historia, comprad amuletos para montañeros.</li>
                            <li><i class="fa-solid fa-camera"></i> <strong>Vistas:</strong> Disfrutad del cráter desde la base de ascenso. Recordad hidrataros bien para la altitud.</li>
                        </ul>
                    `
                },
                {
                    id: "opt-b",
                    title: "OPCIÓN B: Nakanokura Pass",
                    time: "08:00",
                    description: "Trekking Nakanokura Pass + Cuevas de Lava.",
                    price: "Gratis (+350 JPY Cueva)",
                    image: "images/fuji-motosu-1000yen.png",
                    link: "https://es.wikiloc.com/rutas-senderismo/billete-100-yenes-lago-japon-262052990",
                    fullDesc: `
                        <h3><i class="fa-solid fa-person-hiking"></i> Trekking Nakanokura Pass</h3>
                        <p>Para los más activos que buscan la "foto perfecta" del billete de 1.000 yenes sin aglomeraciones.</p>
                        <ul>
                            <li><i class="fa-solid fa-mountain"></i> <strong>Ascenso:</strong> 2 horas de caminata media desde el camping Motosuko.</li>
                            <li><i class="fa-solid fa-money-bill-1"></i> <strong>El Hito:</strong> Mirador Nakanokura, con la vista exacta del billete de 1.000 yenes.</li>
                        </ul>
                    `
                },
                {
                    id: "opt-c",
                    title: "OPCIÓN C: Mar de Árboles",
                    time: "14:30",
                    description: "Bosque Aokigahara y exploración de las milenarias Cuevas de Hielo.",
                    price: "350 JPY",
                    image: "images/add-fuji-caves.jpg",
                    link: "https://es.wikiloc.com/rutas-a-pie/lake-saiko-bat-cave-aokigahara-suicide-forest-narusawa-ice-cave-saikominami-yakema-197462852",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tree"></i> Bosque Aokigahara y Cuevas</h3>
                        <p>Exploración del místico Mar de Árboles, crecido sobre la lava de erupciones milenarias, y descenso a las frías cuevas subterráneas.</p>
                        <ul>
                            <li><i class="fa-solid fa-snowflake"></i> <strong>Aventura Subterránea:</strong> Cueva del Hielo o del Viento en Aokigahara. Temperatura de 0°C a 3°C incluso en verano.</li>
                        </ul>
                    `
                },
                {
                    id: "opt-d",
                    title: "OPCIÓN D: Ascensión al Monte Fuji",
                    time: "04:30",
                    description: "Ascensión a la cima en 1 día por la Ruta Yoshida.",
                    price: "4.000 JPY",
                    image: "images/subir futji.png",
                    link: "https://es.wikiloc.com/rutas-senderismo/mt-fuji-japan-141555584",
                    fullDesc: `
                        <h3><i class="fa-solid fa-volcano" style="color:var(--danger);"></i> Ascensión al Monte Fuji en 1 Día (Ruta Yoshida)</h3>
                        
                        <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid var(--danger); padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                            <h4 style="color:var(--danger); margin-top:0;"><i class="fa-solid fa-bullhorn"></i> RECOMENDACIONES TÁCTICAS</h4>
                            <p style="margin-bottom:8px;"><strong>Ritmo y altitud:</strong> Sube a un ritmo constante y lento, haciendo pausas breves. El mal de altura es el mayor riesgo; si alguien se marea o tiene náuseas, debe perder altitud.</p>
                            <p style="margin-bottom:8px;"><strong>Dinero en efectivo:</strong> Lleva suficientes monedas de 100 yenes. Los baños en la montaña son de pago (200-300 yenes) y el agua en los refugios es cara.</p>
                            <p style="margin-bottom:0;"><strong>Agua:</strong> Lleva al menos 2-3 litros por persona desde abajo, hidratarse bien es clave contra la altitud.</p>
                        </div>

                        <div style="background: rgba(56, 189, 248, 0.1); border-left: 4px solid var(--neon-blue); padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                            <h4 style="color:var(--neon-blue); margin-top:0;"><i class="fa-solid fa-shoe-prints"></i> ROPA RECOMENDADA</h4>
                            <p style="margin-bottom:8px;"><strong>Sistema de 3 capas:</strong> Camiseta térmica transpirable (evitar algodón), forro polar/plumífero ligero, y chaqueta cortavientos/impermeable tipo Gore-Tex (arriba hace frío y viento).</p>
                            <p style="margin-bottom:8px;"><strong>Pies:</strong> Botas de montaña de caña media/alta (nada de zapatillas de ciudad) y polainas (gaiters) obligatorias para evitar que las piedras volcánicas entren en las botas durante el descenso.</p>
                            <p style="margin-bottom:0;"><strong>Accesorios imprescindibles:</strong> Linterna frontal, gafas de sol (alta radiación UV), gorro, guantes y bastones de trekking para proteger las rodillas al bajar.</p>
                        </div>

                        <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid var(--gold); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <h4 style="color:var(--gold); margin-top:0; text-transform:uppercase;"><i class="fa-solid fa-ticket"></i> Trámite Obligatorio (Booking)</h4>
                            <p>Enlace oficial: <a href="https://www.fujisan-climb.jp/en/" target="_blank" style="color:var(--neon-blue);">Fuji Mountain Climbing Official Website</a></p>
                            <ul style="padding-left: 20px; margin-bottom:0;">
                                <li style="margin-bottom:8px;"><strong>Paso 1:</strong> Entrar en la web oficial (generalmente abre a finales de mayo para reservas de agosto).</li>
                                <li style="margin-bottom:8px;"><strong>Paso 2:</strong> Seleccionar la opción de "Day Trip" (Excursión de 1 día) para la Ruta Yoshida (Prefectura de Yamanashi).</li>
                                <li style="margin-bottom:8px;"><strong>Paso 3:</strong> Pagar la tarifa obligatoria (4.000 yenes aprox., que incluye acceso y donación para conservación) para las 8 personas.</li>
                                <li><strong>Paso 4:</strong> Guardar en el móvil el Código QR generado, que será exigido en la barrera de la 5ª Estación para poder acceder al sendero.</li>
                            </ul>
                        </div>
                    `,
                    timeline: [
                        { time: "04:30", title: "Salida del hotel", desc: "Conducción en los coches de alquiler (aprox. desde la zona de Kawaguchiko)." },
                        { time: "05:00", title: "Fujihokuroku Parking Lot", desc: "Aparcamiento obligatorio de los coches privados. Toma del Shuttle Bus oficial hacia la montaña." },
                        { time: "06:15", title: "Llegada a la 5ª Estación (2.300m)", desc: "Desayuno y tiempo de espera de 1 hora estrictamente necesario para la aclimatación a la altitud." },
                        { time: "07:15", title: "Inicio del ascenso", desc: "Comienzo de la caminata por el Sendero Yoshida enseñando el código QR en la barrera." },
                        { time: "12:30", title: "¡La Cima (3.776m)!", desc: "Llegada a la cumbre. Tiempo para fotos, descansar y comer el bento a gran altitud." },
                        { time: "14:00", title: "Inicio del descenso", desc: "Bajada por la ruta exclusiva de descenso (zigzags de arena y grava volcánica)." },
                        { time: "17:30", title: "Fin del trekking", desc: "Llegada de vuelta a la 5ª Estación y embarque en el autobús de bajada." },
                        { time: "18:45", title: "Recuperación de vehículos", desc: "Llegada al parking Fujihokuroku, recogida de los coches de alquiler." },
                        { time: "19:30", title: "Regreso al hotel", desc: "Fin de la jornada (¡tiempo de buscar un onsen!)." }
                    ]
                }
            ]
        },
        complements: [],
        additionalExcursions: [],
        customCenterHTML: `
            <!-- BLOQUE 1: PORTADA CENTRAL -->
            <div class="fuji-custom-hero">
                <img src="images/dia15-portada.jpg" class="fuji-custom-hero-img" alt="Monte Fuji">
                <div class="fuji-custom-hero-content">
                    <h2 style="margin:0; color:var(--neon-blue); text-transform:uppercase; letter-spacing:2px; text-shadow:0 0 10px rgba(0,243,255,0.5);">El Día del Fuji: 4 Caminos, 2 Coches</h2>
                    <p style="color:#e2e8f0; margin-top:10px; font-size:1rem; line-height:1.5;">Hoy dividimos el grupo según la energía de cada uno. Tenemos 2 coches de alquiler y 4 excursiones posibles. Podéis elegir una excursión relajada, combinar un par de ellas si queréis aprovechar a tope, o uniros al 'Equipo Cumbre' para intentar llegar a lo más alto.</p>
                </div>
            </div>

            <!-- BLOQUE 2: LAS 4 EXCURSIONES BASE (GRID) -->
            <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px;">
                <i class="fa-solid fa-map"></i> Las 4 Excursiones Base
            </h3>
            <div class="fuji-excursion-grid">
                <!-- Opción A -->
                <div class="fuji-card" onclick="selectExcursionFromCard(14, 'opt-a', this)" style="border:none; text-align:left; cursor:pointer; width:100%; padding:0; display:block;">
                    <img src="images/dia14-5-estacion-fuji.jpg" class="fuji-card-img" alt="5ª Estación">
                    <div class="fuji-card-content">
                        <div style="background:rgba(56,189,248,0.2); color:var(--neon-blue); display:inline-block; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold; margin-bottom:10px; width:fit-content;">OPCIÓN A (RELAX)</div>
                        <h4 style="margin:0 0 10px 0; color:white; font-size:1.1rem;">Umbral del Cielo</h4>
                        <p style="color:#94a3b8; font-size:0.85rem; margin:0; line-height:1.4;">5ª Estación del Fuji. Vistas y ambiente de montaña sin esfuerzo físico.</p>
                        <div style="display:flex; gap:10px; margin-top:15px; flex-wrap:wrap;">
                            <a href="https://www.google.com/maps/search/?api=1&query=Fuji+Subaru+Line+5th+Station" target="_blank" onclick="event.stopPropagation()" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-map-location-dot"></i> Google Maps</a>
                        </div>
                    </div>
                </div>
                <!-- Opción B -->
                <div class="fuji-card" onclick="selectExcursionFromCard(14, 'opt-b', this)" style="border:none; text-align:left; cursor:pointer; width:100%; padding:0; display:block;">
                    <img src="images/fuji-motosu-1000yen.png" class="fuji-card-img" alt="Nakanokura Pass">
                    <div class="fuji-card-content">
                        <div style="background:rgba(251,191,36,0.2); color:var(--gold); display:inline-block; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold; margin-bottom:10px; width:fit-content;">OPCIÓN B (MEDIO)</div>
                        <h4 style="margin:0 0 10px 0; color:white; font-size:1.1rem;">Nakanokura Pass</h4>
                        <p style="color:#94a3b8; font-size:0.85rem; margin:0; line-height:1.4;">Vista del billete de 1.000¥. Trekking de 2h con el reflejo perfecto.</p>
                        <div style="display:flex; gap:10px; margin-top:15px; flex-wrap:wrap;">
                            <a href="https://es.wikiloc.com/rutas-senderismo/billete-100-yenes-lago-japon-262052990" target="_blank" onclick="event.stopPropagation()" style="background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-route"></i> Wikiloc</a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Motosuko+Camping+Ground" target="_blank" onclick="event.stopPropagation()" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-map-location-dot"></i> Maps</a>
                        </div>
                    </div>
                </div>
                <!-- Opción C -->
                <div class="fuji-card" onclick="selectExcursionFromCard(14, 'opt-c', this)" style="border:none; text-align:left; cursor:pointer; width:100%; padding:0; display:block;">
                    <img src="images/add-fuji-caves.jpg" class="fuji-card-img" alt="Aokigahara">
                    <div class="fuji-card-content">
                        <div style="background:rgba(34,197,94,0.2); color:#4ade80; display:inline-block; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold; margin-bottom:10px; width:fit-content;">OPCIÓN C (NATURALEZA)</div>
                        <h4 style="margin:0 0 10px 0; color:white; font-size:1.1rem;">Mar de Árboles</h4>
                        <p style="color:#94a3b8; font-size:0.85rem; margin:0; line-height:1.4;">Bosque Aokigahara y exploración de las milenarias Cuevas de Hielo.</p>
                        <div style="display:flex; gap:10px; margin-top:15px; flex-wrap:wrap;">
                            <a href="https://es.wikiloc.com/rutas-a-pie/lake-saiko-bat-cave-aokigahara-suicide-forest-narusawa-ice-cave-saikominami-yakema-197462852" target="_blank" onclick="event.stopPropagation()" style="background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-route"></i> Wikiloc</a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Narusawa+Ice+Cave" target="_blank" onclick="event.stopPropagation()" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-map-location-dot"></i> Maps</a>
                        </div>
                    </div>
                </div>
                <!-- Opción D -->
                <div class="fuji-card" onclick="selectExcursionFromCard(14, 'opt-d', this)" style="border:1px solid rgba(239,68,68,0.5); text-align:left; cursor:pointer; width:100%; padding:0; display:block; background:rgba(15,23,42,0.8);">
                    <img src="images/subir futji.png" class="fuji-card-img" alt="Cima Fuji">
                    <div class="fuji-card-content">
                        <div style="background:rgba(239,68,68,0.2); color:var(--danger); display:inline-block; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold; margin-bottom:10px; width:fit-content;">OPCIÓN D (HARDCORE)</div>
                        <h4 style="margin:0 0 10px 0; color:white; font-size:1.1rem;">Desafío del Volcán</h4>
                        <p style="color:#94a3b8; font-size:0.85rem; margin:0; line-height:1.4;">La Ascensión a la Cima (3.776m). 10-12 horas intensas. Opción excluyente.</p>
                        <div style="display:flex; gap:10px; margin-top:15px; flex-wrap:wrap;">
                            <a href="https://es.wikiloc.com/rutas-senderismo/mt-fuji-japan-141555584" target="_blank" onclick="event.stopPropagation()" style="background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:5px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-route"></i> Wikiloc</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- BLOQUE 3: COMBINACIONES LOGÍSTICAS (TABS) -->
            <h3 style="color:var(--accent); margin-bottom:20px; border-bottom:1px solid rgba(249, 115, 22, 0.3); padding-bottom:10px; margin-top:40px;">
                <i class="fa-solid fa-code-merge"></i> Combinaciones Logísticas
            </h3>
            <p style="color:#94a3b8; margin-bottom:15px; font-size:0.9rem;">Estrategias recomendadas para los vehículos (Opciones A, B, C):</p>
            
            <div class="fuji-tabs-container">
                <div class="fuji-tabs-header">
                    <button class="fuji-tab-btn active" onclick="window.switchFujiTab('tab-solo')"><i class="fa-solid fa-mug-hot"></i> Modo Relax (A/B/C)</button>
                    <button class="fuji-tab-btn" onclick="window.switchFujiTab('tab-ab')"><i class="fa-solid fa-cloud"></i> + <i class="fa-solid fa-mountain"></i> Combo A+B</button>
                    <button class="fuji-tab-btn" onclick="window.switchFujiTab('tab-ac')"><i class="fa-solid fa-cloud"></i> + <i class="fa-solid fa-tree"></i> Combo A+C</button>
                    <button class="fuji-tab-btn" onclick="window.switchFujiTab('tab-bc')"><i class="fa-solid fa-mountain"></i> + <i class="fa-solid fa-tree"></i> Combo B+C</button>
                </div>
                
                <!-- Tab: Modo Relax -->
                <div id="tab-solo" class="fuji-tab-content" style="display:block;">
                    <div class="timeline-container" style="border-left:2px solid rgba(56, 189, 248, 0.3); padding-left:20px;">
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">08:30 - Salida Tranquila</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Conducción hacia la excursión elegida (A, B o C).</span>
                        </div>
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">09:30 - Actividad Principal</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Disfrute total de la excursión seleccionada.</span>
                        </div>
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">13:30 - Comida y Reencuentro</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Hoto Noodles en Kawaguchiko.</span>
                        </div>
                        <div class="timeline-item">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">16:00 - Tarde Relax</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Onsen Fujiyama o descanso en el hotel.</span>
                        </div>
                    </div>
                </div>

                <!-- Tab: Combo A+B -->
                <div id="tab-ab" class="fuji-tab-content">
                    <div class="timeline-container" style="border-left:2px solid rgba(56, 189, 248, 0.3); padding-left:20px;">
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">08:00 - 5ª Estación (A)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Vistas panorámicas y Santuario Komitake.</span>
                        </div>
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--gold); display:block; margin-bottom:5px;">11:30 - Nakanokura Pass (B)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Trekking del billete de 1.000¥.</span>
                            <a href="https://es.wikiloc.com/rutas-senderismo/billete-100-yenes-lago-japon-262052990" target="_blank" style="display:inline-flex; align-items:center; gap:5px; margin-top:8px; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:4px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA WIKILOC (MIRADOR)</a>
                        </div>
                        <div class="timeline-item">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">16:00 - Regreso y Onsen</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Cierre de jornada en Kawaguchiko.</span>
                        </div>
                    </div>
                </div>

                <!-- Tab: Combo A+C -->
                <div id="tab-ac" class="fuji-tab-content">
                    <div class="timeline-container" style="border-left:2px solid rgba(56, 189, 248, 0.3); padding-left:20px;">
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">09:00 - 5ª Estación (A)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Mirador del Umbral del Cielo.</span>
                        </div>
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:#4ade80; display:block; margin-bottom:5px;">14:30 - Bosque y Cuevas (C)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Aokigahara y Cuevas de Hielo.</span>
                            <a href="https://es.wikiloc.com/rutas-a-pie/lake-saiko-bat-cave-aokigahara-suicide-forest-narusawa-ice-cave-saikominami-yakema-197462852" target="_blank" style="display:inline-flex; align-items:center; gap:5px; margin-top:8px; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:4px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA WIKILOC (BOSQUE)</a>
                        </div>
                        <div class="timeline-item">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">17:30 - Fin de Ruta</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Retorno al hotel.</span>
                        </div>
                    </div>
                </div>

                <!-- Tab: Combo B+C -->
                <div id="tab-bc" class="fuji-tab-content">
                    <div class="timeline-container" style="border-left:2px solid rgba(56, 189, 248, 0.3); padding-left:20px;">
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:var(--gold); display:block; margin-bottom:5px;">08:30 - Nakanokura Pass (B)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Mirador del billete de 1.000¥.</span>
                            <a href="https://es.wikiloc.com/rutas-senderismo/billete-100-yenes-lago-japon-262052990" target="_blank" style="display:inline-flex; align-items:center; gap:5px; margin-top:8px; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:4px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA WIKILOC (MIRADOR)</a>
                        </div>
                        <div class="timeline-item" style="margin-bottom:15px;">
                            <strong style="color:#4ade80; display:block; margin-bottom:5px;">14:30 - Mar de Árboles (C)</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Cuevas de Lava en Aokigahara.</span>
                            <a href="https://es.wikiloc.com/rutas-a-pie/lake-saiko-bat-cave-aokigahara-suicide-forest-narusawa-ice-cave-saikominami-yakema-197462852" target="_blank" style="display:inline-flex; align-items:center; gap:5px; margin-top:8px; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:4px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA WIKILOC (BOSQUE)</a>
                        </div>
                        <div class="timeline-item">
                            <strong style="color:var(--neon-blue); display:block; margin-bottom:5px;">17:00 - Relax Final</strong>
                            <span style="color:#cbd5e1; font-size:0.9rem;">Retorno y Onsen.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BLOQUE 4: DEEP DIVE - OPCIÓN D (LA ASCENSIÓN) -->
            <div class="fuji-deep-dive-box">
                <h3 style="color:white; margin:0 0 10px 0; font-size:1.5rem; text-transform:uppercase;"><i class="fa-solid fa-volcano" style="color:var(--danger);"></i> Opción D: El Asalto a la Cima</h3>
                <p style="color:#cbd5e1; margin-bottom:20px;">Exclusivo para el 'Equipo Cumbre'. Una jornada física extrema que requiere dedicación absoluta de todo el día.</p>
                
                <div class="timeline-container" style="border-left:2px solid rgba(239, 68, 68, 0.5); padding-left:20px;">
                    <div class="timeline-item" style="margin-bottom:15px;">
                        <strong style="color:var(--danger); display:block; margin-bottom:5px;">06:00 - Toque de Diana</strong>
                        <span style="color:#cbd5e1; font-size:0.9rem;">Desayuno fuerte. Es imperativo estar en el Parking Fujihoku-roku antes de las 07:00 para el primer Shuttle.</span>
                    </div>
                    <div class="timeline-item" style="margin-bottom:15px;">
                        <strong style="color:var(--danger); display:block; margin-bottom:5px;">08:00 - Inicio Yoshida Trail (5ª Estación)</strong>
                        <span style="color:#cbd5e1; font-size:0.9rem;">Control de la tasa de acceso (4.000 JPY pre-reservados) y comienzo del ascenso.</span>
                    </div>
                    <div class="timeline-item" style="margin-bottom:15px;">
                        <strong style="color:var(--danger); display:block; margin-bottom:5px;">14:00 - Cumbre (3.776m)</strong>
                        <span style="color:#cbd5e1; font-size:0.9rem;">Foto en el cráter, oxígeno fino y comienzo del duro y resbaladizo descenso.</span>
                    </div>
                    <div class="timeline-item">
                        <strong style="color:var(--danger); display:block; margin-bottom:5px;">19:00 - Retorno Extenuado</strong>
                        <span style="color:#cbd5e1; font-size:0.9rem;">Llegada de vuelta a la 5ª Estación. Shuttle y coche de vuelta al hotel. ¡Misión cumplida!</span>
                    </div>
                </div>

                <div class="fuji-warning-box" style="background:rgba(239,68,68,0.15); border:1px solid var(--danger);">
                    <h4 style="color:var(--danger); margin:0 0 10px 0; text-transform:uppercase;"><i class="fa-solid fa-ticket"></i> Trámite Crítico: Reserva QR Obligatoria</h4>
                    <p style="color:#cbd5e1; font-size:0.9rem; margin-bottom:10px;">La reserva online de <strong>4.000 JPY</strong> es obligatoria a finales de mayo en la web oficial para obtener el código QR de acceso.</p>
                    <div style="display:flex; gap:10px;">
                        <a href="https://es.wikiloc.com/rutas-senderismo/mt-fuji-japan-141555584" target="_blank" style="flex:1; display:inline-flex; align-items:center; gap:5px; background:rgba(34,197,94,0.1); color:#4ade80; border:1px solid #4ade80; padding:6px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold; justify-content:center;"><i class="fa-solid fa-route"></i> VER RUTA WIKILOC (CIMA)</a>
                        <a href="https://www.fujisan-climb.jp/en/" target="_blank" style="flex:1; display:inline-flex; align-items:center; gap:5px; background:rgba(239,68,68,0.1); color:white; border:1px solid var(--danger); padding:6px 10px; border-radius:4px; font-size:0.75rem; text-decoration:none; font-weight:bold; justify-content:center;"><i class="fa-solid fa-globe"></i> WEB OFICIAL FUJI</a>
                    </div>
                </div>
            </div>
        `
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

        isFlexible: false,
        base: {
            title: "El Gran Roadtrip del Fuji",
            description: "Día de carretera para explorar la cultura y misticismo alrededor del volcán.",
            events: []
        },
        complements: [],
        additionalExcursions: [],
        
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1rR2qzulSCq9o9t_rJ4cQkIqg_9x0CKM&usp=sharing",
        customRightHTML: `
            <div class="sidebar-fuji-custom">
                <div style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:10px;">
                    <span style="color:var(--accent); font-weight:800; text-transform:uppercase;">Lun, 10 Agosto</span>
                    <h2 style="font-size:1.6rem; color:white;">🚙 El Gran Roadtrip</h2>
                </div>

                <!-- Caja 1 - INFO VEHÍCULOS -->
                <div style="background:rgba(15, 23, 42, 0.6); border:1px solid var(--accent); border-radius:8px; padding:15px; margin-bottom:20px;">
                    <h4 style="color:var(--accent); margin:0 0 10px 0; font-size:1rem; display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-car-side"></i> Info Vehículos
                    </h4>
                    <p style="color:#cbd5e1; font-size:0.9rem; margin:0; line-height:1.5;">
                        Dos coches en movimiento. Total conducción estimada hoy: <strong>2 horas</strong> (repartidas en tramos cortos de 15-30 mins). Precaución extrema en los cruces urbanos en Fujiyoshida.
                    </p>
                </div>

                <!-- Caja 2 - PARKINGS -->
                <div style="background:rgba(15, 23, 42, 0.6); border:1px solid #38bdf8; border-radius:8px; padding:15px; margin-bottom:20px;">
                    <h4 style="color:#38bdf8; margin:0 0 10px 0; font-size:1rem; display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-square-parking"></i> Puntos de Estacionamiento
                    </h4>
                    <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px;">
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Honcho+Street+Parking+Fujiyoshida" target="_blank" style="display:flex; justify-content:space-between; align-items:center; background:rgba(56, 189, 248, 0.1); padding:10px; border-radius:6px; color:#cbd5e1; text-decoration:none; font-size:0.9rem; border:1px solid rgba(56, 189, 248, 0.3); transition:all 0.2s;">
                                <span><i class="fa-solid fa-location-dot" style="color:#38bdf8; margin-right:8px;"></i> Parking Honcho St.</span>
                                <i class="fa-solid fa-diamond-turn-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Oshino+Hakkai+Parking" target="_blank" style="display:flex; justify-content:space-between; align-items:center; background:rgba(56, 189, 248, 0.1); padding:10px; border-radius:6px; color:#cbd5e1; text-decoration:none; font-size:0.9rem; border:1px solid rgba(56, 189, 248, 0.3); transition:all 0.2s;">
                                <span><i class="fa-solid fa-location-dot" style="color:#38bdf8; margin-right:8px;"></i> Parking Oshino Hakkai</span>
                                <i class="fa-solid fa-diamond-turn-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=Shiraito+Falls+Parking" target="_blank" style="display:flex; justify-content:space-between; align-items:center; background:rgba(56, 189, 248, 0.1); padding:10px; border-radius:6px; color:#cbd5e1; text-decoration:none; font-size:0.9rem; border:1px solid rgba(56, 189, 248, 0.3); transition:all 0.2s;">
                                <span><i class="fa-solid fa-location-dot" style="color:#38bdf8; margin-right:8px;"></i> Parking Shiraito Falls</span>
                                <i class="fa-solid fa-diamond-turn-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Caja 3 - PRESUPUESTO DEL DÍA -->
                <div style="background:rgba(15, 23, 42, 0.6); border:1px solid #4ade80; border-radius:8px; padding:15px;">
                    <h4 style="color:#4ade80; margin:0 0 10px 0; font-size:1rem; display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-wallet"></i> Presupuesto del Día
                    </h4>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(74, 222, 128, 0.2); padding-bottom:5px;">
                            <span style="color:#cbd5e1; font-size:0.85rem;">Iyashi no Sato (Entrada)</span>
                            <strong style="color:white; font-size:0.85rem;">500 JPY</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(74, 222, 128, 0.2); padding-bottom:5px;">
                            <span style="color:#cbd5e1; font-size:0.85rem;">Alquiler Samurai/Kimono</span>
                            <strong style="color:white; font-size:0.85rem;">~2.000 JPY</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(74, 222, 128, 0.2); padding-bottom:5px;">
                            <span style="color:#cbd5e1; font-size:0.85rem;">Parking Cascadas Shiraito</span>
                            <strong style="color:white; font-size:0.85rem;">300 JPY</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:#cbd5e1; font-size:0.85rem;">Comida Hoto Fudo</span>
                            <strong style="color:white; font-size:0.85rem;">~1.500 JPY / px</strong>
                        </div>
                    </div>
                </div>
            </div>
        `,
        customCenterHTML: `
            <!-- BLOQUE 1: PORTADA CENTRAL -->
            <div class="fuji-custom-hero">
                <img src="images/oshino_hakkai_realistic.png" class="fuji-custom-hero-img" alt="Roadtrip Fuji">
                <div class="fuji-custom-hero-content">
                    <h2 style="margin:0; color:var(--neon-blue); text-transform:uppercase; letter-spacing:2px; text-shadow:0 0 10px rgba(0,243,255,0.5);">El Gran Roadtrip del Fuji</h2>
                    <p style="color:#e2e8f0; margin-top:10px; font-size:1rem; line-height:1.5;">Una expedición unificada en vehículos de alquiler alrededor del gigante sagrado. Exploración, fotografía y gastronomía a tu propio ritmo.</p>
                </div>
            </div>

            <!-- BOTÓN MAPA DEL DÍA (CENTRAL IZQUIERDA) -->
            <div style="display:flex; justify-content:center; width:100%; margin-top:-25px; margin-bottom:30px; position:relative; z-index:20;">
                <div style="width:100%; max-width:800px; display:flex; justify-content:flex-start; padding-left:20px;">
                    <a href="https://www.google.com/maps/d/u/0/edit?mid=1rR2qzulSCq9o9t_rJ4cQkIqg_9x0CKM&usp=sharing" target="_blank" title="VER RUTA DEL ROADTRIP EN GOOGLE MAPS" 
                       style="cursor:pointer; background:rgba(0, 243, 255, 0.2); border:2px solid var(--neon-blue); color:white; padding:10px 20px; border-radius:12px; display:flex; align-items:center; gap:10px; text-decoration:none; animation: pulse-cyan 2s infinite; box-shadow: 0 0 20px rgba(0, 243, 255, 0.4); font-weight:bold; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">
                        <i class="fa-solid fa-map-location-dot" style="font-size:1.2rem;"></i> MAPA INTERACTIVO ROADTRIP
                    </a>
                </div>
            </div>

            <!-- BLOQUE 2: TIMELINE VERTICAL -->
            <div class="roadtrip-timeline-container" style="margin-top:40px;">
                
                <!-- Parada 1 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/dia15-honcho-street.jpg" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Honcho Street">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">08:30</span>Honcho Street (Fujiyoshida)</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Honcho+Street+Fujiyoshida" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> ABRIR EN GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Esta calle comercial de estética retro (Showa) se ha hecho mundialmente famosa porque crea un efecto de túnel visual que enmarca perfectamente la inmensidad del Monte Fuji al fondo. Los faroles tradicionales, los cables eléctricos y los carteles de las tiendas en contraste con el volcán sagrado representan la postal definitiva del Japón moderno conviviendo con la naturaleza.
                        </p>
                        <div style="background:rgba(245, 158, 11, 0.15); border-left:4px solid var(--gold); padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:var(--gold); font-size:0.95rem;"><i class="fa-solid fa-lightbulb"></i> Pro-Tip Logístico</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">¡Mucho cuidado! Es una calle con tráfico real y constante. La foto perfecta se toma desde las aceras o en los pasos de cebra cruzando rápido, <strong>NUNCA</strong> deteniéndose en medio de la calzada. La policía local patrulla la zona debido a los turistas imprudentes.</p>
                        </div>
                    </div>
                </div>

                <!-- Parada 2 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/dia14-sengen.jpg" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Sengen Jinja">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">09:30</span>Kitaguchi Hongu Sengen Jinja</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Kitaguchi+Hongu+Fuji+Sengen+Jinja" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Con más de 1.900 años de historia, este es uno de los santuarios más importantes de Japón. Está dedicado a la deidad sintoísta del Monte Fuji (la princesa Konohanasakuya). Históricamente, este era el punto de partida original para los peregrinos que iban a subir al volcán por el sendero Yoshidaguchi. Está enclavado en un bosque profundo y oscuro.
                        </p>
                        <div style="background:rgba(245, 158, 11, 0.15); border-left:4px solid var(--gold); padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:var(--gold); font-size:0.95rem;"><i class="fa-solid fa-lightbulb"></i> Pro-Tip Logístico</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">Fijaos en los inmensos cedros a la entrada y junto al edificio principal; el "Fuji Taro Sugi" tiene más de 1.000 años de antigüedad. Pasear por el largo camino de linternas de piedra en silencio es la mejor forma de absorber la energía mística del lugar antes de que lleguen los autobuses.</p>
                        </div>
                    </div>
                </div>

                <!-- Parada 3 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/oshino_hakkai_realistic.png" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Oshino Hakkai">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">11:00</span>Oshino Hakkai (Los 8 Estanques)</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Oshino+Hakkai" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Hace siglos, aquí había un sexto lago del Fuji que se secó. Quedaron 8 estanques sagrados alimentados por la nieve que se derrite en la cima del volcán. El agua tarda décadas en filtrarse a través de las capas de lava porosa subterránea, lo que resulta en un agua de manantial tan pura y transparente que parece que los peces vuelan en el vacío.
                        </p>
                        <div style="background:rgba(34, 197, 94, 0.15); border-left:4px solid #4ade80; padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:#4ade80; font-size:0.95rem;"><i class="fa-solid fa-utensils"></i> Pro-Tip Gastronómico</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">Además de maravillaros con los estanques azules, esta zona es un paraíso de la comida callejera. No os vayáis sin probar el <strong>Kusa Mochi</strong> (pastel de arroz verde tostado) y el pescado de río asado con sal en las parrillas de carbón.</p>
                        </div>
                    </div>
                </div>

                <!-- Parada 4 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/hoto_fudo_cloud.png" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Hoto Fudo">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">12:30</span>Almuerzo en Hoto Fudo (Higashikoiji)</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Hoto+Fudo+Higashikoiji" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Diseñado por el arquitecto Takeshi Hosaka, este edificio blanco con forma de nube (o iglú sin puertas) está diseñado para que el aire circule de forma natural, sin aire acondicionado. Es la sucursal más espectacular de la cadena Hoto Fudo, famosa por servir los "Hoto Noodles", el plato de supervivencia de los antiguos samuráis de la región de Yamanashi.
                        </p>
                        <div style="background:rgba(245, 158, 11, 0.15); border-left:4px solid var(--gold); padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:var(--gold); font-size:0.95rem;"><i class="fa-solid fa-lightbulb"></i> Pro-Tip Logístico</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">El plato principal son unos fideos planos (parecidos al udon) en una sopa de miso con calabaza y verduras. Ojo al comer: se sirve en una olla de hierro fundido que quema muchísimo. Pedid también el Inari Sushi (arroz envuelto en tofu frito dulce) para acompañar.</p>
                        </div>
                    </div>
                </div>

                <!-- Parada 5 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/dia15-iyashi.jpg" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Iyashi no Sato">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">14:30</span>Iyashi no Sato (Lago Saiko)</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Iyashi+no+Sato" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Originalmente era un antiguo pueblo agrícola, pero un corrimiento de tierras provocado por un tifón lo destruyó en 1966. Cuarenta años después, se reconstruyó como un museo al aire libre para preservar la arquitectura tradicional Minka (tejados de paja). Hoy en día, cada casa es un taller de artesanía, galería o restaurante, con unas vistas inmejorables del Fuji.
                        </p>
                        <div style="background:rgba(236, 72, 153, 0.15); border-left:4px solid #ec4899; padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:#ec4899; font-size:0.95rem;"><i class="fa-solid fa-camera-retro"></i> Pro-Tip Familiar</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">Esta parada es el clímax para las fotos divertidas. En una de las casas podéis alquilar armaduras samurái de calidad, kimonos de princesa o trajes ninja por muy poco dinero (unos 2.000 JPY), vestiros todos y haceros fotos por el pueblo con el volcán de fondo. A la niña de 9 años le encantará.</p>
                        </div>
                    </div>
                </div>

                <!-- Parada 6 -->
                <div class="roadtrip-stop-card" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56, 189, 248, 0.3); border-radius:12px; margin-bottom:30px; overflow:hidden;">
                    <img src="images/dia14-shiraito.jpg" style="width:100%; height:250px; object-fit:cover; display:block;" alt="Cascadas Shiraito">
                    <div style="padding:20px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; flex-wrap:wrap; gap:10px;">
                            <h3 style="color:white; margin:0; font-size:1.4rem;"><span style="color:var(--neon-blue); margin-right:10px;">16:30</span>Cascadas Shiraito</h3>
                            <a href="https://www.google.com/maps/search/?api=1&query=Shiraito+Falls+Fujinomiya" target="_blank" style="background:rgba(56,189,248,0.1); color:var(--neon-blue); border:1px solid var(--neon-blue); padding:6px 15px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:0.85rem; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-map-location-dot"></i> GOOGLE MAPS</a>
                        </div>
                        <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:15px;">
                            Su nombre significa "Hilos de Seda Blancos". A diferencia de la mayoría de las cascadas, esta no proviene de un río, sino que brota directamente de la pared de roca volcánica en un arco de 150 metros de ancho. Es el agua subterránea del deshielo del Monte Fuji que encuentra una capa impermeable de lava y sale a la superficie.
                        </p>
                        <div style="background:rgba(245, 158, 11, 0.15); border-left:4px solid var(--gold); padding:12px 15px; border-radius:4px;">
                            <h4 style="margin:0 0 5px 0; color:var(--gold); font-size:0.95rem;"><i class="fa-solid fa-lightbulb"></i> Pro-Tip Logístico</h4>
                            <p style="margin:0; color:#e2e8f0; font-size:0.85rem; line-height:1.4;">Hay que bajar bastantes escaleras para llegar a la base de la cascada, así que tenedlo en cuenta para los miembros de 70 años del grupo (la bajada es fácil, la subida hay que hacerla con calma). El microclima allí abajo es súper refrescante, ideal para cerrar la tarde de agosto.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // --- DÍA 16: ÚLTIMO DÍA FUJI Y TOKIO (ESTRUCTURA BASE + COMPLEMENTOS) ---
    {
        day: 16, type: "travel",
        date: "Mar, 11 Agosto", title: "🏙️ Regreso a la Capital",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=19wFMGJpWCb3WbofZ9nepPjzQd_zlaWY&usp=sharing",
        coords: [35.702, 139.774], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/tokio_skyline.png",

        logistics: [
            { title: "Coche", text: "Llenad depósito de gasolina y devolved en Budget Kawaguchiko Station (12:30 max). Guardad ticket." },
            { title: "Transporte", text: "Tren Expreso Fuji Excursion directo a Shinjuku (RESERVA REALIZADA para las 14:08). Alternativa: Highway Bus." },
            { title: "Equipaje", text: "Maletas grandes enviadas desde Kioto u Osaka os estarán esperando en el lobby o habitación del hotel." }
        ],

        transportTimeline: [
            { time: "11:30", type: "point", icon: "fa-solid fa-gas-pump", title: "Repostaje en Gasolinera", link: "https://www.google.com/maps/search/?api=1&query=Gas+Station+near+Kawaguchiko+Station" },
            { time: "12:00", type: "point", icon: "fa-solid fa-car-side", title: "Devolución de Coches (Budget)", link: "https://www.google.com/maps/search/?api=1&query=Budget+Rent+A+Car+Kawaguchiko" },
            {
                time: "14:08",
                type: "transit",
                title: "Tren Express 'Fuji Excursion 32' a Tokio (COMPRADO)",
                price: "Reserva ticketless confirmada.",
                timeLabel: "1h 58m",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kawaguchiko+Station&destination=Shinjuku+Station&travelmode=transit",
                tacticalGuideId: "mission_fuji_excursion",
                tacticalBtnText: "🚀 GUÍA DE TREN (Vagón 2)"
            },
            { time: "16:06", type: "point", title: "Llegada al caos de Shinjuku (Tokio)", icon: "fa-solid fa-city" },
            {
                time: "16:20",
                type: "transit",
                title: "Taxis a Iidabashi (x2 Vans)",
                price: "~4.000 JPY total (2 taxis)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Hotel+Metropolitan+Edmont+Tokyo"
            },
            { time: "16:45", type: "point", title: "Check-in Edmont Tokyo / Descanso", icon: "fa-solid fa-bed" },
            {
                time: "18:30",
                type: "transit",
                title: "Paseo al Barrio Kagurazaka",
                price: "Gratis",
                timeLabel: "10 min a pie",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Kagurazaka&travelmode=walking"
            },
            { time: "18:45", type: "point", title: "Sunset en Santuario Akagi", icon: "fa-solid fa-torii-gate" },
            {
                time: "20:00",
                type: "transit",
                title: "Cena y Regreso al Hotel",
                price: "Gratis",
                timeLabel: "12 min a pie",
                link: "https://www.google.com/maps/dir/?api=1&origin=Akagi+Shrine&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=walking"
            }
        ],

        timeline: [
            { time: "11:30", title: "Gasolinera Kawaguchiko", desc: "Repostaje del coche de alquiler antes de devolverlo. (Base)" },
            { time: "12:00", title: "Devolución Coche", desc: "Recepción en Budget Kawaguchiko. (Base)" },
            { time: "14:08", title: "Traslado a Tokio (COMPRADO)", desc: "Tren Directo Fuji Excursion a Shinjuku. (Base)" },
            { time: "16:06", title: "Llegada Shinjuku", desc: "Cruce de la estación más concurrida del mundo hacia Taxis. (Base)" },
            { time: "16:45", title: "Check-in Edmont", desc: "Recuperad maletas grandes y descanso brutal en el hotel. (Base)" },
            { time: "18:30", title: "Kagurazaka y Akagi", desc: "Paseo por el barrio tradicional de Kagurazaka y el moderno santuario Akagi. (Base)" },
            { time: "20:00", title: "Cena y Regreso", desc: "Cena en Kagurazaka o alrededores del hotel y regreso a pie. (Base)" }
        ],

        prices: {
            transport: "Tren Fuji Excursion (~4.130 JPY) + Taxis Shinjuku (~2.000 JPY/taxi)",
            total: "~6.130 JPY"
        },
        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Regreso desde el aire puro de las montañas a la jungla de neón y cemento de Tokio.",
            events: [
                {
                    id: "b1",
                    time: "12:00",
                    title: "Devolución Vehículo y Gasolinera",
                    description: "En Kawaguchiko Station. Último trámite antes de subir al tren.",
                    image: "images/dia16-coche.jpg",
                    price: "Llenar depósito",
                        fullDesc: `
                            <h3><i class="fa-solid fa-gas-pump"></i> Operación Repostaje</h3>
                            <p>Llenad el depósito en la gasolinera (ENEOS u otra) más cercana a la oficina de Budget en Kawaguchiko.</p>
                            <ul>
                                <li><i class="fa-solid fa-receipt"></i> <strong>Justificante:</strong> Guardad con mucho cuidado el ticket de compra de gasolina de la estación, los agentes de rent-a-car suelen exigirlo.</li>
                            </ul>
                        `
                },
                {
                    id: "b2",
                    time: "14:08",
                    title: "Tren a Shinjuku (Tokio) [COMPRADO]",
                    description: "Tren Expreso Especial que no requiere transbordos. Fin del descanso.",
                    image: "images/tokio_skyline.png",
                    price: "Reserva ticketless confirmada",
                    booking: { id: "bk_fuji_excursion", timeframe: "COMPRADO", required: true, link: "https://www.eki-net.com/en/jreast-train-reservation/Top/Index" },
                        fullDesc: `
                            <h3><i class="fa-solid fa-train"></i> Rumbo a la Capital Ciberpunk</h3>
                            <p>Traslado directo a la estación de Shinjuku mediante el Fuji Excursion. Entrar en Tokio por Shinjuku es un golpe frontal.</p>
                            <ul>
                                <li><i class="fa-solid fa-people-arrows"></i> <strong>Choque Cultural:</strong> Tras días de paz alpina, la multitud de Shinjuku, sus neones incesantes y el volumen general serán apabullantes.</li>
                            </ul>
                        `
                },
                {
                    time: "16:45",
                    title: "Check-in y Reencuentro con Equipaje",
                    description: "Llegada al Hotel Metropolitan Edmont en el barrio de Iidabashi.",
                    type: "gap"
                },
                {
                    id: "b3",
                    time: "18:30",
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
                        <p>Subida hiperveloz gratuita al mirador del Edificio Metropolitano del Gobierno (observatorio Sur o Norte).</p>
                        <ul>
                            <li><i class="fa-solid fa-mountain"></i> <strong>Vistas Gratis:</strong> A diferencia de la Tokyo Skytree, la entrada es libre. En días despejados domina hasta el monte Fuji.</li>
                            <li><i class="fa-solid fa-music"></i> <strong>Piano Público:</strong> Arriba suele haber un grandioso piano decorado por Yayoi Kusama.</li>
                        </ul>
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
                        <p>Un espectáculo de luces, tambores Taiko y coreografías samurái modernas en el corazón del distrito rojo de Shinjuku.</p>
                        <ul>
                            <li><i class="fa-solid fa-bolt"></i> <strong>Kitsch de Neón:</strong> Es el heredero del mítico 'Robot Restaurant'. Muy turístico, escandaloso e increíblemente extravagante y divertido.</li>
                        </ul>
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
                        <p>Construido en el periodo Edo por el clan Tokugawa, es uno de los pulmones verdes con más historia de la ciudad.</p>
                        <ul>
                            <li><i class="fa-solid fa-yin-yang"></i> <strong>Diseño Dual:</strong> Utiliza técnicas de paisajismo que reproducen famosos escenarios naturales chinos y japoneses en forma miniatura.</li>
                        </ul>
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
                        <h3><i class="fa-solid fa-leaf"></i> Parque Imperial Shinjuku Gyoen</h3>
                        <p>Un inmenso parque en medio de los rascacielos. Ideal para caminar en grupo sin agobios y organizar un pícnic bajo los árboles.</p>
                        <ul>
                            <li><i class="fa-solid fa-seedling"></i> <strong>Tres Estilos:</strong> Combina un meticuloso jardín tradicional japonés, un geométrico jardín formal francés y un amplio paisaje paisajista inglés.</li>
                        </ul>
                    `
            }
        ]
    },
];
