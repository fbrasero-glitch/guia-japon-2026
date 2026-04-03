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
                link: "https://www.google.com/maps/dir/?api=1&origin=Kyoto+Station&destination=Inari+Station+Kyoto&travelmode=transit"
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
            { time: "15:00", type: "point", title: "Check-in Hotel Toyoko Inn", icon: "fa-solid fa-bed" },
            { time: "16:30", type: "point", title: "Pagoda Chureito (Luz de tarde)", icon: "fa-solid fa-vihara" },
            { time: "18:30", type: "point", title: "Paseo por el lago", icon: "fa-solid fa-person-walking-zen" },
            { time: "19:30", type: "point", title: "Oishi Park (Atardecer)", icon: "fa-solid fa-cloud-sun" }
        ],

        timeline: [
            { time: "08:30", title: "Bus a Kawaguchiko", desc: "Trayecto de casi 5h cruzando sierras. (Base)" },
            { time: "13:30", title: "Recogida Coche", desc: "Libertad total para explorar la zona alpina. (Base)" },
            { time: "15:00", title: "Check-in Hotel", desc: "Instalación en el Campo Base. (Base)" },
            { time: "16:30", title: "Pagoda Chureito", desc: "La foto más icónica de Japón con luz de tarde. (Base)" },
            { time: "18:30", title: "Paseo por el lago", desc: "Vistas y paz junto al agua. (Base)" },
            { time: "19:30", title: "Atardecer en Oishi Park", desc: "El momento mágico del día. (Base)" }
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
                    time: "08:30",
                    title: "Viaje a la falda del Volcán",
                    description: "Jornada de descanso visual en el Highway Bus a través de las montañas centrales de Japón.",
                    price: "~5.000 JPY",
                    image: "images/fuji_lago.png",
                    fullDesc: `
                        <h3><i class="fa-solid fa-bus"></i> Expreso Takayama ➔ Kawaguchiko</h3>
                        <p>Aprovechad para dormir. A medio camino el paisaje cambia radicalmente revelando poco a poco la inmensa silueta cónica del Fuji.</p>
                        <ul>
                            <li><i class="fa-solid fa-mountain-sun"></i> <strong>Lado Izquierdo:</strong> Las mejores vistas al aproximarse a Kawaguchiko suelen estar en las ventanillas izquierdas.</li>
                        </ul>
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
                        <p>Iván o Felipe: Os tocará conducir por la izquierda. El coche proporciona la única forma de moverse libremente alrededor de los lagos.</p>
                        <ul>
                            <li><i class="fa-solid fa-traffic-light"></i> <strong>Tráfico:</strong> Las carreteras son estupendas, pero los límites de velocidad rondan 40-50 km/h y hay que pararse 100% en pasos a nivel.</li>
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
                description: "Senderismo (2h de subida) con la vista exacta del billete de 1.000 yenes.",
                price: "Gratis",
                image: "images/dia15-ryugatake.jpg",
                recommended: true,
                video: "https://www.youtube.com/watch?v=azaJ9W5kXfU",
                fullDesc: `
                    <h3><i class="fa-solid fa-person-hiking"></i> Plan Trekking: El Mirador del Dragón</h3>
                    <p>Una jornada diseñada para los amantes de la fotografía y la montaña. El objetivo es alcanzar la cima del Monte Ryugatake para capturar la silueta del Fuji tal como aparece en los billetes de 1.000 yenes.</p>
                    
                    <div class="itinerary-mini-step">
                        <img src="images/dia15-ryugatake.jpg" alt="Trekking Ryugatake">
                        <div class="step-content">
                            <h4>08:00 – Inicio del Trekking</h4>
                            <p>Ascenso de unas 2 horas entre raíces y senderos alpinos. Esfuerzo físico medio con recompensa visual máxima en la cima.</p>
                        </div>
                    </div>

                    <div class="itinerary-mini-step">
                        <img src="images/add-fuji-caves.jpg" alt="Cuevas del Fuji">
                        <div class="step-content">
                            <h4>12:15 – Bosque de Aokigahara y Cuevas</h4>
                            <p>Infiltración en el místico "Mar de Árboles". Visitad la Cueva del Hielo o del Viento; un contraste térmico brutal (0°C) ideal para agosto.</p>
                        </div>
                    </div>

                    <div class="itinerary-mini-step">
                        <img src="images/saiko_lake.png" alt="Lago Saiko">
                        <div class="step-content">
                            <h4>13:30 – Almuerzo en la Zona de los Lagos</h4>
                            <p>Recuperación de energía en algún restaurante local de la zona de Saiko o Kawaguchiko tras la caminata.</p>
                        </div>
                    </div>

                    <div class="itinerary-mini-step">
                        <img src="images/onsen_fuji.png" alt="Onsen Fuji">
                        <div class="step-content">
                            <h4>16:00 – Tiempo de Relax o Baños Termales</h4>
                            <p>Tras el esfuerzo, el cuerpo pedirá descanso. Momento ideal para un onsen con vistas o relax total en el hotel.</p>
                        </div>
                    </div>
                `,
                tacticalOptions: [
                    {
                        title: "RUTA AL DRAGÓN",
                        time: "08:00 - 17:00",
                        description: "Día completo de montaña y cuevas. Requiere coche para moverse ágilmente entre el camping Motosu y las cuevas.",
                        schedule: [
                            { time: "08:00", event: "Inicio Subida Ryugatake" },
                            { time: "10:30", event: "Cima (Fotos Billete 1.000Y)" },
                            { time: "12:15", event: "Exploración Cuevas" },
                            { time: "13:30", event: "Almuerzo en Lagos" },
                            { time: "16:00", event: "Sesión Onsen / Relax" }
                        ],
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
                image: "images/dia14-5-estacion-fuji.jpg",
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
                        <ul>
                            <li><i class="fa-solid fa-icicles"></i> <strong>Cueva del Viento/Hielo:</strong> Con temperaturas medias de 3°C en verano, fue usada históricamente como almacén natural.</li>
                        </ul>
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
                        <p>Un muro curvo de 150 metros de ancho por donde se vierten las aguas del deshielo del monte Fuji creando innumerables saltos finos como hilos de seda.</p>
                        <ul>
                            <li><i class="fa-solid fa-camera"></i> <strong>Brisa Refrescante:</strong> El rocío constante de las cataratas ofrece un alivio térmico perfecto frente al sol estival y forma arcoíris espectaculares.</li>
                        </ul>
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
                        <p>Antiguo poblado agrícola a orillas del lago Saiko reconstruido maravillosamente con casas de tejados de paja (kayabuki).</p>
                        <ul>
                            <li><i class="fa-solid fa-mask"></i> <strong>Armaduras Samurái:</strong> Podréis alquilar kimonos o armaduras por 500 JPY y haceros fotos épicas con el pueblo medieval y volcán Fuji de fondo.</li>
                        </ul>
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
                        <p>Honcho Street tiene esa vibra noventera retro. La avenida de cables y rótulos enmarca maravillosamente el imponente Monte Fuji.</p>
                        <ul>
                            <li><i class="fa-solid fa-triangle-exclamation"></i> <strong>Peligro Vehicular:</strong> Ojo con el tráfico, la policía local está cansada de los turistas parando en medio. Disparad desde aceras.</li>
                        </ul>
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
                        <p>El santuario principal de los más de 1.300 dedicados a Sengen en todo Japón, protector tradicional del cráter del volcán.</p>
                        <ul>
                            <li><i class="fa-solid fa-droplet"></i> <strong>Wakutama-ike:</strong> Posee un estanque de agua cristalina que brota directamente de la roca volcánica tras décadas de filtrado.</li>
                        </ul>
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
                            <p>Llenad el depósito en la gasolinera (ENEOS u otra) más cercana a la oficina de Budget en Kawaguchiko.</p>
                            <ul>
                                <li><i class="fa-solid fa-receipt"></i> <strong>Justificante:</strong> Guardad con mucho cuidado el ticket de compra de gasolina de la estación, los agentes de rent-a-car suelen exigirlo.</li>
                            </ul>
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
                            <h3><i class="fa-solid fa-train"></i> Rumbo a la Capital Ciberpunk</h3>
                            <p>Traslado directo a la estación de Shinjuku mediante el Fuji Excursion. Entrar en Tokio por Shinjuku es un golpe frontal.</p>
                            <ul>
                                <li><i class="fa-solid fa-people-arrows"></i> <strong>Choque Cultural:</strong> Tras días de paz alpina, la multitud de Shinjuku, sus neones incesantes y el volumen general serán apabullantes.</li>
                            </ul>
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
