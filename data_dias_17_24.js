/* ==========================================
   JAPeON 2026 - DATOS DeIAS 17-24
   ========================================== */

const travelData_17_24 = [
    // --- DÍA 17: ASAKUSA, SKYTREE Y AKIHABARA ---
    {
        day: 17, exactDate: "2026-08-12", type: "stay",
        date: "Mié, 12 Agosto", title: "🗼 Asakusa, Skytree y Akihabara",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1FjG4iziYaIpdzHrHjStsj1Ya6UIE09U&usp=sharing",
        coords: [35.710, 139.810], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia17-asakusa.jpg",

        logistics: [
            { title: "Transporte", text: "Tarjeta Suica/Pasmo en Apple Wallet para el metro. Línea Tozai desde Iidabashi." },
            { title: "Navegación", text: "En Asakusa, tomad la <strong>Salida 1 o 3</strong> (salida inmediata a la puerta Kaminarimon). En Akihabara, buscad siempre la <strong>Electric Town Exit</strong>." },
            { title: "Grupo (8 Pax)", text: "En Akihabara es muy difícil sentar a 8 juntos a comer. Dividíos en 4+4 o id a la octava planta (8F) de restaurantes del macrocentro <em>Yodobashi Akiba</em>." },
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
                tacticalGuideId: "mission_tokyo_metro",
                transitDetails: {
                    origin: "Iidabashi (Hotel)",
                    destination: "Asakusa (Senso-ji)",
                    totalTime: "22 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Iidabashi",
                            code: "T06",
                            line: "Tozai Line (Celeste)",
                            lineColor: "#009bc7",
                            platform: "2",
                            car: "4 o 6"
                        },
                        {
                            type: "transfer",
                            station: "Nihombashi",
                            code: "G12",
                            line: "Ginza Line (Naranja)",
                            lineColor: "#ff9500",
                            instructions: "Sigue las señales naranjas [G]. Transbordo de 3 min a pie por pasillo subterráneo."
                        },
                        {
                            type: "destination",
                            station: "Asakusa",
                            code: "G19",
                            line: "Ginza Line (Naranja)",
                            lineColor: "#ff9500",
                            exit: "1 o 3",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/asakusa.pdf"
                        }
                    ],
                    gpsWarning: "Bajo tierra, ignora el GPS. Sigue exclusivamente los carteles amarillos colgantes hacia las Salidas 1 y 3 (salida directa al templo)."
                }
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
                tacticalGuideId: "route_day17_tobu_skytree",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Asakusa (Tobu)",
                    destination: "Tokyo Skytree",
                    totalTime: "3 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Asakusa (Tobu)",
                            code: "TS01",
                            line: "Tobu Skytree Line (Roja)",
                            lineColor: "#e12128",
                            platform: "1 o 2",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Tokyo Skytree",
                            code: "TS02",
                            line: "Tobu Skytree Line (Roja)",
                            lineColor: "#e12128",
                            exit: "Salida Única",
                            mapUrl: "https://www.tobu.co.jp/en/pdf/yardmap/tokyoskytree.pdf"
                        }
                    ],
                    gpsWarning: "Ignora el GPS. La estación de Tobu Asakusa se encuentra dentro del centro comercial Ekimise."
                }
            },
            { time: "13:30", type: "point", title: "Tokyo Skytree y Solamachi [HORARIO: 24 horas]", icon: "fa-solid fa-tower-broadcast" },
            {
                time: "16:00",
                type: "transit",
                title: "Tren hacia Akihabara",
                price: "Suica",
                timeLabel: "20 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Tokyo+Skytree&destination=Akihabara+Station",
                tacticalGuideId: "route_day17_oshiage_to_akihabara",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Oshiage (Skytree)",
                    destination: "Akihabara (Electric Town)",
                    totalTime: "12 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Oshiage",
                            code: "Z14",
                            line: "Hanzomon Line (Morada)",
                            lineColor: "#8f64ad",
                            platform: "1",
                            car: "2 o 5"
                        },
                        {
                            type: "transfer",
                            station: "Kinshicho",
                            code: "Z13",
                            line: "Hanzomon Line (Morada)",
                            lineColor: "#8f64ad",
                            instructions: "Bájate en Kinshicho y sigue los letreros de transbordo hacia las líneas JR (3 min a pie)."
                        },
                        {
                            type: "destination",
                            station: "Akihabara",
                            code: "JB19",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            exit: "Electric Town Exit"
                        }
                    ],
                    gpsWarning: "En Akihabara es crucial salir por la 'Electric Town Exit' (Salida del Barrio Eléctrico) para estar en la zona comercial principal."
                }
            },
            { time: "16:30", type: "point", title: "Locura Akihabara (Electric Town) [HORARIO: 11:00 - 20:00]", icon: "fa-solid fa-gamepad" },
            {
                time: "20:30",
                type: "transit",
                title: "Tren JR Sobu de vuelta al Hotel",
                price: "Suica (~170 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Akihabara+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "route_day17_akihabara_to_hotel",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Akihabara (JR)",
                    destination: "Iidabashi (Hotel)",
                    totalTime: "7 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Akihabara",
                            code: "JB19",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            platform: "5 (dirección Mitaka)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Iidabashi",
                            code: "JB16",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            exit: "East Exit",
                            mapUrl: "https://www.jreast.co.jp/estation/stations/img/pdf/info_window_108.pdf"
                        }
                    ],
                    gpsWarning: "Baja en la estación de Iidabashi y toma exclusivamente la salida East Exit (Salida Este) para llegar al Hotel Edmont en 5 minutos a pie."
                }
            }
        ],

        timeline: [
            { time: "09:30", title: "Senso-ji [HORARIO: 06:00 - 17:00]", desc: "Templo antiguo y linterna roja Kaminarimon. (Base)" },
            { time: "11:30", title: "Río Sumida [HORARIO: 10:00 - 20:00]", desc: "Paseo fluvial con vistas al skyline. (Base)" },
            { time: "13:30", title: "Tokyo Skytree [HORARIO: 10:00 - 21:00]", desc: "Mirador de 634m o centro comercial Solamachi. (Base)" },
            { time: "16:30", title: "Akihabara [HORARIO: 11:00 - 20:00]", desc: "Neon, anime, retro-gaming y compras otakus. (Base)" },
            { time: "20:30", title: "Regreso al Hotel", desc: "Tren directo JR Sobu Line desde Akihabara a Iidabashi / Suidobashi y vuelta a pie. (Base)" }
        ],

        prices: {
            transport: "Metro/Tren (~960 JPY/día)",
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
                    title: "Templo Senso-ji y Calle Nakamise [HORARIO: 06:00 - 17:00]",
                    description: "El templo budista más antiguo e importante de Tokio. Famoso por su gigantesca linterna roja.",
                    image: "images/dia17-sensoji.jpg",
                    price: "Gratis",
                    link: "https://www.google.com/maps/search/?api=1&query=Sensoji+Temple",
                    tacticalGuideId: "mission_sensoji",
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
                    link: "https://www.google.com/maps/search/?api=1&query=Sumida+Park",
                    fullDesc: `
                        <h3><i class="fa-solid fa-water"></i> Vistas al Sumida</h3>
                        <p>Vistas espectaculares de la modernidad tokiota. A un lado el río con los cruceros futuristas (como el Hotaluna de Leiji Matsumoto) y al otro la torre de telecomunicaciones Tokyo Skytree (634m) junto al surrealista edificio de Asahi Beer coronado por la "flame d'or" (o como lo llaman cariñosamente: el truño dorado).</p>
                    `
                },
                {
                    id: "b3",
                    time: "13:30",
                    title: "Tokyo Skytree [HORARIO: 10:00 - 21:00]",
                    booking: { id: "bk_skytree", timeframe: "1 mes antes", required: true, link: "https://www.tokyo-skytree.jp/en/ticket/" },
                    description: "La estructura más alta de Japón (634m). Vistas que demuestran que Tokio no tiene fin.",
                    image: "images/dia17-skytree.jpg",
                    price: "Opcional 2.100 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=Tokyo+Skytree",
                    tacticalGuideId: "mission_skytree",
                    fullDesc: `
                        <h3><i class="fa-solid fa-tower-broadcast"></i> Tokyo Skytree: Superando las Nubes</h3>
                        <p>Con 634 metros, es la torre de comunicaciones más alta del mundo y un prodigio de la ingeniería antisísmica moderna. Su diseño exterior, de color "Blanco Skytree" (basado en el tinte tradicional japonés <em>aijiro</em>), fusiona la estética neofuturista con la belleza de las pagodas tradicionales de cinco pisos.</p>
                        <p><em>Incluso si decidís no subir a sus observatorios a 350 o 450 metros, el complejo **Tokyo Solamachi** en su base es una ciudad en sí misma, con tiendas oficiales de Ghibli, Pokémon Center y una oferta gastronómica infinita que abarca desde sushi de cinta hasta postres temáticos.</em></p>
                    `,
                },
                {
                    id: "b4",
                    time: "16:30",
                    title: "Akihabara: Electric Town [HORARIO: 11:00 - 20:00]",
                    description: "El paraíso geek. Edificios enteros de neón dedicados a un solo tema: cartas, robótica, retro-gaming o figuritas.",
                    image: "images/dia19-akihabara.jpg",
                    price: "Gratis / Gastos compras",
                    link: "https://www.google.com/maps/search/?api=1&query=Akihabara+Electric+Town",
                    tacticalGuideId: "mission_akihabara_intel",
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
                image: "images/dia17-calle-kappabashi-cocineros.png",
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
                image: "images/dia17-maid-cafe.png",
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
            },
            {
                id: "fukagawa_matsuri",
                title: "🏮 Fukagawa Matsuri 2026 (Festival del Agua)",
                time: "15:30 – 17:30 (Opción A)",
                description: "Uno de los 'Tres Grandes Festivales Sintoístas de Edo'. ¡Tradición, mikoshis y cubos de agua volando!",
                price: "Gratis",
                image: "infografía/Guía_del_Fukagawa_Matsuri_2026.png",
                fullDesc: `
                    <h3><i class="fa-solid fa-droplet"></i> El Festival del Agua (Fukagawa Matsuri)</h3>
                    <p>El Fukagawa Matsuri es uno de los festivales sintoístas más antiguos y espectaculares de Tokio, con decenas de mikoshis (santuarios portátiles) recorriendo las calles del histórico barrio de Fukagawa. La particularidad de este festival es que <strong>los espectadores arrojan cubos de agua limpia</strong> a los portadores de los santuarios para refrescarlos del agobiante calor veraniego.</p>
                    
                    <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); border-radius:10px; padding:15px; margin: 15px 0;">
                        <h4 style="color:#fca5a5; margin:0 0 8px 0; display:flex; align-items:center; gap:6px;"><i class="fa-solid fa-circle-exclamation"></i> ADVERTENCIA PARA VIAJEROS</h4>
                        <p style="margin:0; font-size:0.85rem; color:#cbd5e1; line-height:1.5;"><strong>¡Acabaréis empapados!</strong> Si planeáis estar en primera línea para ver los mikoshis pasar, es fundamental que guardéis y protejáis vuestros teléfonos móviles, cámaras de fotos y cualquier dispositivo electrónico en <strong>fundas impermeables estancas</strong>. ¡Los cubos y chorros de agua vuelan por todas partes!</p>
                    </div>

                    <h4>¿Cómo integrarlo hoy (Día 17)? - Opción A</h4>
                    <p>Tras terminar la visita al **Tokyo Skytree y Solamachi** alrededor de las 15:30/16:00, en lugar de dirigiros de inmediato a Akihabara, tomáis el metro hacia el sur al barrio de Fukagawa (cerca del Santuario Tomioka Hachimangū). Viviréis el ambiente festivo, los primeros rituales y los clásicos puestos de comida (Yatai), y luego terminaréis la noche en Akihabara.</p>
                    
                    <div style="margin-top:20px; display:flex; gap:10px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Tokyo+Skytree&destination=Tomioka+Hachiman+Shrine&travelmode=transit" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; font-size:0.8rem; border-radius:8px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA EN METRO</a>
                        <button onclick="openInfographic('infografía/Guía_del_Fukagawa_Matsuri_2026.png')" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; font-size:0.8rem; border-radius:8px; background:rgba(249,115,22,0.15); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer;"><i class="fa-solid fa-image"></i> ABRIR INFOGRAFÍA</button>
                    </div>
                `
            }
        ],
        additionalExcursions: [
            {
                id: "add_hotaluna",
                title: "Crucero Fluvial Hotaluna [HORARIO: Salidas]",
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
                title: "Sumida Aquarium [HORARIO: 10:00 - 20:00]",
                image: "images/add-sumida-aquarium.png",
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
                image: "images/add-kanda-myojin.png",
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=17Irn8C87e8OPw81lsAfRCHaySqxO7kc&usp=sharing",
        coords: [35.659, 139.701], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/shibuya_crossing.png",

        logistics: [
            { title: "Transporte", text: "Línea central JR Chuo/Sobu desde Iidabashi hasta Yoyogi/Shinjuku, transbordo a JR Yamanote." },
            { title: "Navegación", text: "En Shibuya, es vital buscar y seguir los carteles hacia la <strong>Salida Hachiko (Hachiko Gate)</strong>. Es la salida directa al cruce y a la estatua del famoso perro. En Harajuku, salid por la <strong>Takeshita Exit</strong>." },
            { title: "Grupo (8 Pax)", text: "En Shibuya, los locales pequeños de ramen/sushi no admiten grupos grandes. Una buena opción espacial para comer es la planta de restauración de los centros <em>Shibuya Stream</em> o <em>Shibuya Hikarie</em>." },
            { title: "Reservas", text: "Si queréis subir al mirador Shibuya Sky al atardecer, es IMPRESCINDIBLE reservar con semanas o meses de antelación en su web." }
        ],

        transportTimeline: [
            { time: "09:30", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:15",
                type: "transit",
                title: "Tren JR Sobu/Yamanote a Harajuku",
                price: "JR Pass o Suica (~250 JPY)",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Harajuku+Station&travelmode=transit",
                tacticalGuideId: "route_day18_iidabashi_to_harajuku",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Iidabashi (JR)",
                    destination: "Harajuku (Takeshita)",
                    totalTime: "20 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Iidabashi",
                            code: "JB16",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            platform: "2 (dirección Shinjuku)",
                            car: "Cualquiera"
                        },
                        {
                            type: "transfer",
                            station: "Yoyogi",
                            code: "JY18",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            instructions: "Bájate en Yoyogi (andén 4) y cruza de inmediato al andén 1 (Yamanote Line dirección exterior/Shibuya)."
                        },
                        {
                            type: "destination",
                            station: "Harajuku",
                            code: "JY19",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            exit: "Takeshita Exit"
                        }
                    ],
                    gpsWarning: "Sal exclusivamente por la 'Takeshita Exit' (Salida Takeshita) de la estación de Harajuku para entrar directo a la famosa calle Takeshita."
                }
            },
            { time: "09:45", type: "point", title: "Parque Yoyogi / Meiji Jingu [HORARIO: Amanecer-Ocaso]", icon: "fa-solid fa-tree" },
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
            { time: "15:00", type: "point", title: "Cruce de Shibuya y Hachiko [HORARIO: 24 horas]", icon: "fa-solid fa-people-arrows" },
            {
                time: "17:30",
                type: "transit",
                title: "Subida a Shibuya Sky [HORARIO: 24 horas]",
                price: "~2.200 JPY",
                timeLabel: "En hora de reserva",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shibuya+Crossing&destination=Shibuya+Sky",
                tacticalGuideId: "mission_shibuya_sky"
            },
            {
                time: "20:30",
                type: "transit",
                title: "Tren JR Yamanote/Sobu de vuelta al Hotel",
                price: "Suica (~170 JPY)",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shibuya+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "route_day18_shibuya_to_iidabashi",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Shibuya (JR)",
                    destination: "Iidabashi (Hotel)",
                    totalTime: "22 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Shibuya",
                            code: "JY20",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            platform: "2 (dirección Shinjuku/Ikebukuro)",
                            car: "5 u 8"
                        },
                        {
                            type: "transfer",
                            station: "Yoyogi",
                            code: "JB11",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            instructions: "Bájate en Yoyogi (andén 3) y cambia al andén de la línea Chuo-Sobu (andén 4, dirección Akihabara/Chiba)."
                        },
                        {
                            type: "destination",
                            station: "Iidabashi",
                            code: "JB16",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            exit: "East Exit"
                        }
                    ],
                    gpsWarning: "En Shibuya, sigue atentamente los letreros colgantes verdes de JR para entrar por los tornos Hachiko Gate (cerca de la estatua)."
                }
            }
        ],

        timeline: [
            { time: "09:45", title: "Santuario Meiji [HORARIO: Amanecer-Ocaso]", desc: "El gran bosque sintoísta en medio de la ciudad. (Base)" },
            { time: "11:30", title: "Harajuku opcional", desc: "Takeshita Dori: crepes y cultura kawai. (Complemento)" },
            { time: "15:00", title: "Shibuya Crossing", desc: "El legendario cruce a nivel del suelo. (Base)" },
            { time: "17:30", title: "Shibuya Sky [HORARIO: 10:00 - 22:30]", desc: "Mirador espectacular abierto. (Complemento recomendado)" },
            { time: "20:30", title: "Modo Karaoke 2", desc: "Cantar en cabinas privadas de Shibuya si no se hizo el primer día. (Opcional)" },
            { time: "22:00", title: "Regreso al Hotel", desc: "Tren de vuelta a Iidabashi y descanso. (Base)" }
        ],

        prices: {
            transport: "~500 JPY (Tren)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "El corazón palpitante del oeste de Tokio. Un día de contrastes extremos: la paz del bosque imperial y los neones y cruces abarrotados.",
            events: [{
                    id: "b1",
                    time: "09:45",
                    title: "Santuario Meiji Jingu [HORARIO: Amanecer-Ocaso]",
                    description: "Santuario imperial camuflado en un bosque denso enorme y silencioso.",
                    image: "images/dia18-meiji.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=VN_Kk0KWAvk",
                    tacticalGuideId: "mission_meiji_jingu",
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
                    title: "El Cruce de Shibuya y Hachiko [HORARIO: 24 horas]",
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
                },
                {
                    id: "b3",
                    time: "20:30",
                    title: "🎤 MODO KARAOKE 2: Noche en Shibuya",
                    description: "Opción de cerrar el día cantando en las cabinas privadas de Shibuya, tras bajar del mirador Shibuya Sky.",
                    image: "images/akihabara.png",
                    price: "Variable",
                    fullDesc: `
                        <div style="text-align:center; margin-bottom:25px;">
                            <div class="gastro-radar-wrapper" style="display:inline-block; float:none; margin:0 auto; position:relative;">
                                <button class="gastro-radar-btn pulse-cyan" style="background: rgba(0, 243, 255, 0.15); border: 2px solid var(--neon-blue); color: var(--neon-blue); box-shadow: 0 0 15px rgba(0, 243, 255, 0.4); width:60px; height:60px; font-size:1.5rem; border-radius:50%;" onclick="renderTacticalMission('mode_karaoke', 18)" title="Activar Modo Karaoke">
                                    <i class="fa-solid fa-microphone"></i>
                                </button>
                                <div style="color:var(--neon-blue); font-weight:800; font-size:0.75rem; letter-spacing:1px; margin-top:8px; text-transform:uppercase; text-shadow:0 0 5px rgba(0,243,255,0.4);">Modo Karaoke 2</div>
                            </div>
                        </div>
                        
                        <h3><i class="fa-solid fa-microphone"></i> Karaoke de Noche en Shibuya</h3>
                        <p>Tras disfrutar del atardecer o la noche en Shibuya Sky, podéis dirigiros a alguno de los enormes locales de karaoke de la zona (como Karaoke Kan o Big Echo) situados a escasos metros del cruce.</p>
                        <ul>
                            <li><strong>Ideal si no lo hicisteis el Día 16:</strong> Una excelente oportunidad de experimentar las cabinas privadas con buffet de bebidas en Shibuya.</li>
                        </ul>
                    `
                }
                ]
        },
        complements: [
            {
                id: "c1",
                title: "Shibuya Sky [HORARIO: 10:00 - 22:30]",
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
                title: "Harajuku (Takeshita Street) [HORARIO: 24 horas]",
                time: "11:30",
                description: "El epicentro de la moda adolescente, locura kawaii y el azúcar concentrado.",
                price: "Gratis",
                image: "images/dia18-harajuku.jpg",
                tacticalGuideId: "mission_harajuku_takeshita",
                fullDesc: `
                    <h3><i class="fa-solid fa-ice-cream"></i> Locura Estudiantil Pop</h3>
                    <p>Solo 400 metros de calle, pero extremadamente densa. Veréis tiendas que venden moda lolita gotica punk, enormes tiendas Daiso de todo a 100 yenes y colas larguísimas para probar crepes hiper calóricas dobladas a rebosar de fresas y nata o algodon de azúcar arcoíris tamaño XXL.</p>
                `
            },
            {
                id: "c3",
                title: "Avenida Omotesando [HORARIO: 24 horas]",
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
        date: "Vie, 14 Agosto", title: "🏙️ Tokio Central: Arte Inmersivo, Ginza y Roppongi",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1S0HOcGX89z-4ovHAdNPIx1V1dEeTIB0&usp=sharing",
        coords: [35.671, 139.765], zoom: 12,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/teamlab.png",

        logistics: [
            { title: "Transporte", text: "Metro hacia la estación de Kamiyacho (Línea Hibiya) por la mañana, y uso de metro por la zona céntrica." },
            { title: "Navegación", text: "En Ginza, tomad la <strong>A13 Exit</strong> para salir directo a Chuo-dori (avenida principal). En Roppongi, buscad la <strong>Exit 1C</strong> que conecta de forma subterránea directa con Roppongi Hills." },
            { title: "Grupo (8 Pax)", text: "En Ginza es difícil comer en mesa única. Probad en los restaurantes del centro comercial <em>Ginza Six</em> o las plantas altas del <em>Tokyu Plaza Ginza</em>." },
            { title: "Vestimenta", text: "En Ginza y Roppongi impera la formalidad y el lujo, vestid casual-elegante." }
        ],

        transportTimeline: [
            { time: "09:30", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:45",
                type: "transit",
                title: "Metro a Kamiyacho (Línea Hibiya)",
                price: "Suica",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Kamiyacho+Station&travelmode=transit",
                tacticalGuideId: "route_day19_iidabashi_to_kamiyacho",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Iidabashi (Hotel)",
                    destination: "Kamiyacho (Azabudai Hills)",
                    totalTime: "15 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Iidabashi",
                            code: "Y13",
                            line: "Yurakucho Line (Dorada)",
                            lineColor: "#c1a470",
                            platform: "3 (dirección Shin-Kiba)",
                            car: "5 u 8"
                        },
                        {
                            type: "transfer",
                            station: "Yurakucho / Hibiya",
                            code: "Y18",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            instructions: "Bájate en Yurakucho, camina 3 min por el pasillo de transbordo subterráneo hasta la estación de Hibiya (H08) y toma la línea Hibiya dirección Naka-meguro."
                        },
                        {
                            type: "destination",
                            station: "Kamiyacho",
                            code: "H05",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            exit: "Salida 5 (conecta con Azabudai Hills)"
                        }
                    ],
                    gpsWarning: "En Kamiyacho es fundamental usar la Salida 5. Te deja directamente dentro de los subterráneos de Azabudai Hills sin tener que subir a la calle."
                }
            },
            { time: "10:00", type: "point", title: "TeamLab Borderless (Azabudai Hills) [HORARIO: 10:00 - 20:00]", icon: "fa-solid fa-wand-magic-sparkles" },
            {
                time: "12:30",
                type: "transit",
                title: "Metro Hibiya (Kamiyacho → Ginza)",
                price: "Suica",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kamiyacho+Station&destination=Ginza+Station&travelmode=transit",
                tacticalGuideId: "route_day19_kamiyacho_to_ginza",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Kamiyacho (Azabudai)",
                    destination: "Ginza",
                    totalTime: "8 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Kamiyacho",
                            code: "H05",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            platform: "1 (dirección Kita-senju)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Ginza",
                            code: "H09",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            exit: "A13 Exit",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/ginza.pdf"
                        }
                    ],
                    gpsWarning: "En Ginza toma la Salida A13 para salir directo a Chuo-dori, la gran avenida peatonal peatonalizada los fines de semana."
                }
            },
            { time: "12:45", type: "point", title: "Ginza Luxury (Milla de Oro)", icon: "fa-solid fa-gem" },
            {
                time: "16:00",
                type: "transit",
                title: "Metro Hibiya/Oedo a Roppongi",
                price: "Suica (~180 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Ginza+Station&destination=Roppongi+Station&travelmode=transit",
                tacticalGuideId: "route_day19_ginza_to_roppongi",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Ginza",
                    destination: "Roppongi Hills",
                    totalTime: "9 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Ginza",
                            code: "H09",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            platform: "2 (dirección Naka-meguro)",
                            car: "1 o 3"
                        },
                        {
                            type: "destination",
                            station: "Roppongi",
                            code: "H04",
                            line: "Hibiya Line (Plateada)",
                            lineColor: "#b8b9bb",
                            exit: "Exit 1C",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/roppongi.pdf"
                        }
                    ],
                    gpsWarning: "En Roppongi, usa la Salida 1C (Exit 1C). Tiene un pasaje subterráneo directo que entra a la plaza central de Roppongi Hills sin mojarse si llueve."
                }
            },
            { time: "16:15", type: "point", title: "Roppongi Hills y vistas Torre Tokyo [HORARIO: 24 horas]", icon: "fa-solid fa-city" },
            {
                time: "20:30",
                type: "transit",
                title: "Metro Oedo Line de vuelta al Hotel",
                price: "Suica (~220 JPY)",
                timeLabel: "14 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Roppongi+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "route_day19_roppongi_to_iidabashi",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Roppongi (JR/Metro)",
                    destination: "Iidabashi (Hotel)",
                    totalTime: "14 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Roppongi",
                            code: "E23",
                            line: "Oedo Line (Magenta)",
                            lineColor: "#b6007a",
                            platform: "1 (dirección Tochomae)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Iidabashi",
                            code: "E06",
                            line: "Oedo Line (Magenta)",
                            lineColor: "#b6007a",
                            exit: "Salida C3",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/iidabashi.pdf"
                        }
                    ],
                    gpsWarning: "Advertencia: El andén de la línea Oedo en Roppongi es el más profundo de Japón (42 metros bajo tierra). Sigue las escaleras con paciencia."
                }
            }
        ],

        timeline: [
            { time: "10:00", title: "TeamLab Borderless [HORARIO: 10:00 - 20:00]", desc: "El MORI Building DIGITAL ART MUSEUM en Azabudai Hills. (Base)" },
            { time: "12:45", title: "Ginza Luxury", desc: "Lujo, arquitectura y comida top. (Base)" },
            { time: "16:15", title: "Roppongi Hills y vistas Torre Tokyo [HORARIO: 24 horas]", desc: "Vida nocturna expat, la icónica Torre de Tokio roja y subida a la Mori Tower. (Base)" },
            { time: "20:30", title: "Regreso al Hotel", desc: "Metro directo línea Oedo desde Roppongi a Iidabashi y vuelta a pie. (Base)" }
        ],

        prices: {
            transport: "Metro (~600 JPY)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Día de arte digital futurista e inmersión en los barrios más sofisticados de Tokio. Empezamos en Azabudai Hills, paseamos por las boutiques de Ginza y terminamos en Roppongi con vistas a la espectacular Torre de Tokio.",
            events: [
                {
                    id: "b1",
                    time: "10:00",
                    title: "TeamLab Borderless (Entradas y App dentro) 🎟️ [HORARIO: 10:00 - 20:00]",
                    description: "El MORI Building DIGITAL ART MUSEUM en Azabudai Hills. (Pulsa aquí para descargar tus entradas en PDF y la App oficial de TeamLab).",
                    image: "images/teamlab.png",
                    price: "4.200 JPY",
                    link: "https://www.google.com/maps/search/?api=1&query=teamLab+Borderless+Azabudai+Hills",
                    fullDesc: `
                        <h3><i class="fa-solid fa-hand-sparkles"></i> TeamLab Borderless</h3>
                        <p>Ubicado en el moderno complejo de Azabudai Hills, esta versión del famoso colectivo artístico digital no tiene fronteras: las obras de arte se mueven fuera de las salas, se comunican con otras obras, se influyen mutuamente y a veces se mezclan sin límites.</p>
                        <p><em>Es una experiencia visualmente deslumbrante y tridimensional. A diferencia de Planets, aquí no hay agua, por lo que no es necesario remangar los pantalones.</em></p>
                        
                        <div class="download-container" style="margin-top: 20px; padding: 18px; background: rgba(249, 115, 22, 0.08); border: 1px solid var(--accent); border-radius: 14px; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.15);">
                            <h4 style="margin: 0 0 12px 0; color: white; display: flex; align-items: center; gap: 8px; font-size: 1.05rem; font-weight: 800; border-bottom: 1px solid rgba(249,115,22,0.3); padding-bottom: 6px;"><i class="fa-solid fa-ticket" style="color: var(--accent);"></i> ENTRADAS DE ACCESO</h4>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px;">
                                <a href="https://drive.google.com/file/d/1QYt5BBth_Iq9ekffeMaYAeSwxvzs9gc8/view?usp=drivesdk" target="_blank" class="tactical-btn" style="flex: 1; text-align: center; padding: 10px 14px; font-size: 0.85rem; border-radius: 8px; text-decoration: none; background: rgba(249, 115, 22, 0.15); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                                    <i class="fa-solid fa-file-pdf" style="font-size: 1.1rem;"></i> Ver Entrada 1
                                </a>
                                <a href="https://drive.google.com/file/d/14ukkLlY5oXkAGnxvEbaXenrfJedwAnZE/view?usp=drivesdk" target="_blank" class="tactical-btn" style="flex: 1; text-align: center; padding: 10px 14px; font-size: 0.85rem; border-radius: 8px; text-decoration: none; background: rgba(249, 115, 22, 0.15); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                                    <i class="fa-solid fa-file-pdf" style="font-size: 1.1rem;"></i> Ver Entrada 2
                                </a>
                            </div>
                            <h4 style="margin: 0 0 12px 0; color: white; display: flex; align-items: center; gap: 8px; font-size: 1.05rem; font-weight: 800; border-bottom: 1px solid rgba(0,243,255,0.3); padding-bottom: 6px;"><i class="fa-solid fa-mobile-screen-button" style="color: var(--neon-blue);"></i> DESCARGAR APP OFICIAL</h4>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <a href="https://itunes.apple.com/app/id1389775096?ls=1&mt=8" target="_blank" class="tactical-btn" style="flex: 1; text-align: center; padding: 10px 14px; font-size: 0.85rem; border-radius: 8px; text-decoration: none; background: rgba(0, 243, 255, 0.1); border: 1px solid var(--neon-blue); color: var(--neon-blue); font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;">
                                    <i class="fa-brands fa-apple" style="font-size: 1.1rem;"></i> App Store (iOS)
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=art.teamlab.exhibitions.app" target="_blank" class="tactical-btn" style="flex: 1; text-align: center; padding: 10px 14px; font-size: 0.85rem; border-radius: 8px; text-decoration: none; background: rgba(0, 243, 255, 0.1); border: 1px solid var(--neon-blue); color: var(--neon-blue); font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s ease;">
                                    <i class="fa-brands fa-google-play" style="font-size: 1.1rem;"></i> Google Play (Android)
                                </a>
                            </div>
                        </div>
                    `
                },
                {
                    id: "b2",
                    time: "12:45",
                    title: "La Avenida Principal de Ginza (Chuo Dori)",
                    description: "La zona más elitista comercial de todo el país. Flagships imponentes, boutiques de diseño y restaurantes de estrellas michelin ocultos en rascacielos.",
                    image: "images/dia22-teatro-kabuki-za.jpg",
                    price: "Gratis",
                    tacticalGuideId: "mission_ginza_walk",
                    fullDesc: `
                        <h3><i class="fa-solid fa-gem"></i> Ginza: La Milla de Diamantes</h3>
                        <p>Elegancia pura extrema. Aparte de las flagship stores de alta costura, merece la pena entrar al macro complejo de marcas **Ginza Six** con sus espectaculares bóvedas artísticas interiores, o los showrooms experimentales de grandes marcas tecnológicas japonesas como Nissan Crossing o Sony.</p>
                        <p>Los domingos y sábados al mediodía las grandes avenidas de Ginza cierran al tráfico para ser un gran paseo peatonal masivo. Al ser hoy un día laborable regular, el paseo se realiza por las aceras, pero el ambiente sigue siendo vibrante.</p>
                    `
                },
                {
                    id: "b3",
                    time: "16:15",
                    title: "Roppongi Hills y Torre de Tokio",
                    description: "El complejo futurista expat coronado con vistas a la torre de comunicaciones roja clásica. Subimos a Mori Tower (mirador brutal).",
                    image: "images/dia22-roppongi.jpg",
                    price: "Gratis visual",
                    tacticalGuideId: "mission_roppongi_hills",
                    fullDesc: `
                        <h3><i class="fa-solid fa-martini-glass"></i> Roppongi: Noches de Torre Roja</h3>
                        <p>Roppongi es un barrio transformado: del desenfreno militar al hub de arte y diseño de cristal con ambiente multicultural de millonarios expatriados. Caminar por el complejo **Roppongi Hills** cruzando con la gran escultura de la araña de Louise Bourgeois (Maman). Destaca acercarse caminando a la zona del templo Zojoji o la base de la Tokyo Tower, una increíble estructura de celosía naranja y blanca (copia modernizada de la torre Eiffel de Francia) que se enciende rotundamente al caer la noche destacando sobre los rascacielos sombríos.</p>
                        
                        <div style="background:rgba(0,243,255,0.05); border:1px solid var(--neon-blue); border-radius:12px; padding:15px; margin-top:20px;">
                            <h4 style="color:var(--neon-blue); margin-top:0; display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-tower-broadcast"></i> Subida a Mori Tower & Tokyo City View</h4>
                            <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:10px; line-height:1.5;">La **Torre Mori** es el corazón de Roppongi Hills. Con sus 54 pisos de altura, alberga en su cima una de las mejores experiencias visuales de la capital:</p>
                            <ul style="font-size:0.8rem; color:#cbd5e1; padding-left:20px; display:flex; flex-direction:column; gap:6px; margin-bottom:12px;">
                                <li><strong>Tokyo City View (Planta 52):</strong> Mirador acristalado de 360 grados que ofrece, sin duda, la mejor perspectiva frontal para fotografiar la Torre de Tokio iluminada de noche, la bahía de Tokio e incluso el Monte Fuji en días despejados.</li>
                                <li><strong>Sky Deck (Azotea):</strong> Plataforma de observación exterior al aire libre en el helipuerto del tejado (a 270 metros), donde sentiréis la brisa real de la ciudad con vistas despejadas (sujeto a clima y tarifa extra).</li>
                                <li><strong>Mori Art Museum (Planta 53):</strong> Un prestigioso museo de arte moderno abierto hasta tarde (suele cerrar a las 22:00) cuyas exposiciones temporales suelen estar incluidas con la misma entrada del mirador.</li>
                            </ul>
                            <span style="font-size:0.75rem; color:#94a3b8; display:block;"><i class="fa-solid fa-ticket"></i> **Entrada:** Aprox. 1.800 - 2.200 JPY (recomendable comprar online o en taquilla para la hora del atardecer).</span>
                        </div>
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "Mercado Tsukiji (Exterior) [HORARIO: 05:00 - 14:00]",
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
                title: "Teatro Kabuki-za (Desde fuera) [HORARIO: Varía]",
                time: "15:00",
                description: "La joya arquitectónica del teatro clásico sobreviviendo entre torres modernas de cristal en Ginza.",
                price: "Gratis",
                image: "images/dia19-ginza.jpg",
                fullDesc: `
                    <h3><i class="fa-solid fa-masks-theater"></i> Reflejos Feudales</h3>
                    <p>Reconstruido varias veces, es el teatro principal donde se ejecuta hoy en día el arte dramático tradicional Kabuki de Japón (actuado sólo por varones y con elaborados sets giratorios). Su inmensa techumbre al uso de los castillos feudales es un spot fotográfico magnífico para constatar la dualidad de Ginza entre lo ultra-moderno y lo intocablemente clásico.</p>
                `
            },
            {
                id: "fukagawa_matsuri",
                title: "🏮 Fukagawa Matsuri 2026 (Festival del Agua)",
                time: "13:30 – 16:00 (Opción B)",
                description: "Uno de los 'Tres Grandes Festivales Sintoístas de Edo'. ¡Tradición, mikoshis y cubos de agua volando!",
                price: "Gratis",
                image: "infografía/Guía_del_Fukagawa_Matsuri_2026.png",
                fullDesc: `
                    <h3><i class="fa-solid fa-droplet"></i> El Festival del Agua (Fukagawa Matsuri)</h3>
                    <p>El Fukagawa Matsuri es uno de los festivales sintoístas más antiguos y espectaculares de Tokio, con decenas de mikoshis (santuarios portátiles) recorriendo las calles del histórico barrio de Fukagawa. La particularidad de este festival es que <strong>los espectadores arrojan cubos de agua limpia</strong> a los portadores de los santuarios para refrescarlos del agobiante calor veraniego.</p>
                    
                    <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); border-radius:10px; padding:15px; margin: 15px 0;">
                        <h4 style="color:#fca5a5; margin:0 0 8px 0; display:flex; align-items:center; gap:6px;"><i class="fa-solid fa-circle-exclamation"></i> ADVERTENCIA PARA VIAJEROS</h4>
                        <p style="margin:0; font-size:0.85rem; color:#cbd5e1; line-height:1.5;"><strong>¡Acabaréis empapados!</strong> Si planeáis estar en primera línea para ver los mikoshis pasar, es fundamental que guardéis y protejáis vuestros teléfonos móviles, cámaras de fotos y cualquier dispositivo electrónico en <strong>fundas impermeables estancas</strong>. ¡Los cubos y chorros de agua vuelan por todas partes!</p>
                    </div>

                    <h4>¿Cómo integrarlo hoy (Día 19)? - Opción B</h4>
                    <p>Tras pasear por **Ginza** al mediodía (12:30/13:30), cruzáis el río hacia el east al cercano barrio de Fukagawa (está literalmente al lado). Os mezclaréis con las multitudes ruidosas arrojando agua a los mikoshis. Después, a las 16:15, os dirigiréis a **Roppongi Hills** para ver la espectacular Torre de Tokio al atardecer. ¡Un contraste perfecto entre la modernidad elitista de Ginza y la tradición apasionada de Fukagawa!</p>
                    
                    <div style="margin-top:20px; display:flex; gap:10px;">
                        <a href="https://www.google.com/maps/dir/?api=1&origin=Ginza+Station&destination=Tomioka+Hachiman+Shrine&travelmode=transit" target="_blank" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; font-size:0.8rem; border-radius:8px; background:rgba(0,243,255,0.1); border:1px solid var(--neon-blue); color:var(--neon-blue); text-decoration:none; font-weight:bold;"><i class="fa-solid fa-route"></i> VER RUTA EN METRO</a>
                        <button onclick="openInfographic('infografía/Guía_del_Fukagawa_Matsuri_2026.png')" class="tactical-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 14px; font-size:0.8rem; border-radius:8px; background:rgba(249,115,22,0.15); border:1px solid var(--accent); color:var(--accent); font-weight:bold; cursor:pointer;"><i class="fa-solid fa-image"></i> ABRIR INFOGRAFÍA</button>
                    </div>
                `
            }
        ]
    },


    // --- DÍA 20: UENO, YANAKA Y NAKANO ---
    {
        day: 20, type: "stay",
        date: "Sáb, 15 Agosto", title: "🍃 Ueno, Yanaka y Nakano",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1fkPljMz08YCwqbQzsl_JxZTVOlEzX6U&usp=sharing",
        coords: [35.711, 139.773], zoom: 12,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia20-itinerario-base.jpg",

        logistics: [
            { title: "Transporte", text: "Día completo de moverse en tren. JR Yamanote es la clave para conectar todo." },
            { title: "Navegación", text: "En Ueno, tomad la <strong>Shinobazu Exit</strong> para ir al estanque/parque. En Nakano, salid por la <strong>North Exit</strong> y seguid todo recto por el Sun Mall cubierto hasta Nakano Broadway." },
            { title: "Transición Este-Oeste", text: "A las 15:00 nos desplazaremos del extremo este de Tokio (Nippori) al oeste (Nakano). Son unos 30 min de tren: aprovechad el trayecto en la línea Yamanote/Chuo para sentaros y descansar." },
            { title: "Horarios", text: "Ameyoko y Yanaka cierran sus puestos pronto (sobre las 18:00). Nakano Broadway abre a las 11:00." }
        ],

        transportTimeline: [
            { time: "09:30", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "09:15",
                type: "transit",
                title: "Tren hacia Ueno (vía Akihabara/Ochanomizu)",
                price: "Suica (~160 JPY)",
                timeLabel: "15 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Ueno+Station&travelmode=transit",
                tacticalGuideId: "route_day20_iidabashi_to_ueno",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Iidabashi (JR)",
                    destination: "Ueno (Parque)",
                    totalTime: "12 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Iidabashi",
                            code: "JB16",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            platform: "1 (dirección Akihabara/Chiba)",
                            car: "Cualquiera"
                        },
                        {
                            type: "transfer",
                            station: "Akihabara",
                            code: "JB19",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            instructions: "Bájate en Akihabara (andén 5) y sube las escaleras mecánicas hacia el andén 4 (Yamanote Line norte, dirección Ueno/Uguisudani)."
                        },
                        {
                            type: "destination",
                            station: "Ueno",
                            code: "JY05",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            exit: "Shinobazu Exit"
                        }
                    ],
                    gpsWarning: "En Ueno, sal exclusivamente por la 'Shinobazu Gate' (Salida Shinobazu) para estar cruzando la calle directamente frente al parque y al estanque."
                }
            },
            { time: "09:30", type: "point", title: "Parque Ueno y Estanque Shinobazu [HORARIO: 05:00 - 23:00]", icon: "fa-solid fa-tree" },
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
                link: "https://www.google.com/maps/dir/?api=1&origin=Ueno+Station&destination=Nippori+Station&travelmode=transit",
                tacticalGuideId: "route_day20_ueno_to_nippori",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Ueno (JR)",
                    destination: "Nippori (Yanaka)",
                    totalTime: "4 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Ueno",
                            code: "JY05",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            platform: "3 (dirección Nippori/Ikebukuro)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Nippori",
                            code: "JY07",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            exit: "Yanaka Exit (Oeste)"
                        }
                    ],
                    gpsWarning: "En Nippori busca los carteles hacia la 'Yanaka Exit' (Salida Oeste) para salir a la zona residencial histórica y sus tiendas tradicionales."
                }
            },
            { time: "12:45", type: "point", title: "Yanaka Ginza (Tokio Retro)", icon: "fa-solid fa-cat" },
            {
                time: "15:00",
                type: "transit",
                title: "Tren JR hacia Nakano (vía Shinjuku)",
                price: "Suica (~220 JPY)",
                timeLabel: "25 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nippori+Station&destination=Nakano+Station&travelmode=transit",
                tacticalGuideId: "route_day20_nippori_to_nakano",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Nippori (JR)",
                    destination: "Nakano (Broadway)",
                    totalTime: "25 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Nippori",
                            code: "JY07",
                            line: "JR Yamanote Line (Verde)",
                            lineColor: "#80c31c",
                            platform: "11 (dirección Shinjuku/Shibuya)",
                            car: "4 o 7"
                        },
                        {
                            type: "transfer",
                            station: "Shinjuku",
                            code: "JY17",
                            line: "JR Chuo Line (Naranja)",
                            lineColor: "#f15a22",
                            instructions: "Bájate en Shinjuku (andén 14) y muévete al andén 11/12 (JR Chuo Line Rapid, dirección Mitaka/Takao) para tomar el tren rápido."
                        },
                        {
                            type: "destination",
                            station: "Nakano",
                            code: "JC06",
                            line: "JR Chuo Line (Naranja)",
                            lineColor: "#f15a22",
                            exit: "North Exit"
                        }
                    ],
                    gpsWarning: "En Nakano, cruza la North Exit (Salida Norte). Al salir verás de inmediato la entrada al Sun Mall (calle techada), síguela hasta el final para entrar en Nakano Broadway."
                }
            },
            { time: "15:30", type: "point", title: "Nakano Broadway [HORARIO: 12:00 - 20:00]", icon: "fa-solid fa-box-open" },
            {
                time: "20:00",
                type: "transit",
                title: "Tren JR Chuo-Sobu de vuelta al Hotel",
                price: "Suica (~180 JPY)",
                timeLabel: "16 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nakano+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "route_day20_nakano_to_iidabashi",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Nakano (JR)",
                    destination: "Iidabashi (Hotel)",
                    totalTime: "16 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Nakano",
                            code: "JB09",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            platform: "5 (dirección Tsudanuma/Chiba)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Iidabashi",
                            code: "JB16",
                            line: "JR Chuo-Sobu Line (Amarilla)",
                            lineColor: "#ffd400",
                            exit: "East Exit"
                        }
                    ],
                    gpsWarning: "Fíjate bien que sea la línea Sobu (trenes amarillos locales), ya que los trenes naranjas rápidos de la línea Chuo no paran en Iidabashi de noche."
                }
            }
        ],

        timeline: [
            { time: "09:30", title: "Parque Ueno [HORARIO: 05:00 - 23:00]", desc: "El gran parque cultural y el templo flotante. (Base)" },
            { time: "11:00", title: "Mercado Ameyoko [HORARIO: 10:00 - 20:00]", desc: "Mercado negro postguerra bullicioso. (Base)" },
            { time: "13:00", title: "Yanaka Ginza [HORARIO: 24 horas]", desc: "Barrio gato de la época Showa. Almuerzo callejero. (Base)" },
            { time: "15:30", title: "Nakano Broadway [HORARIO: 12:00 - 20:00]", desc: "Coleccionismo retro y figuras. (Complemento recomendado)" },
            { time: "20:00", title: "Regreso al Hotel", desc: "Tren directo línea JR Chuo-Sobu desde Nakano a Iidabashi y vuelta a pie. (Base)" }
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
                    title: "Parque Ueno y Estanque Shinobazu [HORARIO: 05:00 - 23:00]",
                    description: "El parque público más popular, hogar de museos, un zoo y un estanque de lotos gigante.",
                    image: "images/dia20-itinerario-base-2.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=bgC0Vno1wJo",
                    tacticalGuideId: "mission_ueno_park",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Parque Ueno: El Corazón Cultural</h3>
                        <p>Este inmenso parque fue antiguamente el recinto del templo Kan'ei-ji, uno de los más poderosos de la ciudad, destruido durante la guerra civil Boshin. Hoy es un epicentro cultural que alberga los mejores museos del país y el famoso zoológico de Ueno.</p>
                        <p><em>No os perdáis el <strong>Estanque Shinobazu</strong>, un vasto humedal que en verano se cubre completamente de flores de loto gigantescas, ocultando el agua y creando un mar verde bajo los rascacielos. En su centro flota el templo Bentendo, dedicado a la diosa de la fortuna y el conocimiento.</em></p>
                    `,
                },
                {
                    id: "b2",
                    time: "11:00",
                    title: "Mercado Ameyoko [HORARIO: 10:00 - 20:00]",
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
                    title: "Yanaka Ginza (Barrio Gato) [HORARIO: 24 horas]",
                    description: "Escapando de la guerra y los terremotos, este barrio mantiene la madera y escala de los años 50.",
                    image: "images/dia20-museo-nacional-tokio.jpg",
                    price: "Gratis",
                    tacticalGuideId: "mission_yanaka_ginza",
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
                title: "Nakano Broadway (Cultura Retro) [HORARIO: 12:00 - 20:00]",
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
                        tacticalGuideId: "mission_nakano_broadway"
                    }
                ]
            },
            {
                id: "c2",
                title: "Museo Nacional de Tokio (Ueno) [HORARIO: 09:30 - 17:00]",
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
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1vuFv-5ls7ufVz95wbi7kzbdTVhwXPLU&usp=sharing",
        coords: [36.758, 139.598], zoom: 10,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia21-nikko.jpg",

        logistics: [
            { title: "Decisión Fuerte", text: "Es domingo y tendréis que madrugar mucho para evitar muchedumbres en los trenes. Decidid entre la montaña dorada (Nikko) o la costa budista (Kamakura)." },
            { title: "Navegación", text: "En Nikko, al salir de la estación tomad de inmediato los buses turísticos (Tobu Buses). En Kamakura, salid por la <strong>East Exit</strong> para entrar directo a la calle comercial Komachi-dori." },
            { title: "Grupo (8 Pax)", text: "Al ser domingo, ambos destinos se masifican. Es clave comer muy temprano (11:30) o dividirse, ya que las casas de comidas tradicionales de Nikko y Kamakura son minúsculas." },
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
                tacticalGuideId: "mission_nikko_transfer"
            },
            {
                time: "08:30",
                type: "transit",
                title: "Ruta 2: Tren JR a Kamakura",
                price: "Suica (~1.000 JPY)",
                timeLabel: "1h 15min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Shinjuku+Station&destination=Kamakura+Station&travelmode=transit",
                tacticalGuideId: "mission_kamakura_transfer"
            },
            {
                time: "18:30",
                type: "transit",
                title: "Retorno Opción A: Trenes de vuelta desde Nikko",
                price: "JR Pass o ~5.500 JPY",
                timeLabel: "2h",
                link: "https://www.google.com/maps/dir/?api=1&origin=Nikko+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "mission_nikko_transfer"
            },
            {
                time: "19:00",
                type: "transit",
                title: "Retorno Opción B: Tren JR de vuelta desde Kamakura",
                price: "Suica (~1.000 JPY)",
                timeLabel: "1h 15min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Kamakura+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "mission_kamakura_transfer"
            }
        ],

        timeline: [
            { time: "10:30", title: "Llegada a Nikko / Templos", desc: "Inicio de la ruta visitando primero el Puente sagrado Shinkyo y los templos Rinno-ji y Futarasan Jinja. (Base)" },
            { time: "12:30", title: "Almuerzo local temprano", desc: "Comer especialidades tradicionales en las callejuelas antes de que se llenen. (Base)" },
            { time: "14:30", title: "Santuario Toshogu [HORARIO: 08:00 - 17:00]", desc: "Visita al mausoleo de Ieyasu Tokugawa a última hora para evitar colas de taquilla. (Base)" },
            { time: "19:00", title: "Regreso al Hotel", desc: "Regreso a Tokio (salida en tren desde Nikko a las 18:30). (Base)" }
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
                    tacticalGuideId: "mission_toshogu",
                    fullDesc: `
                        <h3><i class="fa-solid fa-leaf"></i> Nikko: La Morada de los Shogunes</h3>
                        <p style="color:var(--gold); border: 1px solid rgba(251,191,36,0.3); background: rgba(251,191,36,0.05); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                            <strong>⚠️ Para evitar colas:</strong> Para evitar esperas de hasta 30 minutos en Toshogu, hemos reestructurado el orden de visita. Comenzaremos con el Puente Shinkyo y los templos Rinno-ji y Futarasan a la llegada (10:30), almorzaremos temprano a las 12:30, y entraremos a Toshogu a las 14:30 PM, cuando las masas de grupos turísticos ya han comenzado a retirarse.
                        </p>
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
                    tacticalGuideId: "mission_daibutsu",
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
                tacticalGuideId: "mission_enoshima_link",
                fullDesc: `
                    <h3><i class="fa-solid fa-water"></i> Vistas al Fuji</h3>
                    <p>Una pequeña isla rocosa en el mar de Sagami conectada por un puente. Escaleras infernales (o de pago mecánicas) os llevarán a la cima iluminada al atardecer lleno de gatos, pescadores y templos budistas. Si hace un frente claro espectacular, podréis ver el monte Fuji asomar detrás del mar.</p>
                `
            },
            {
                id: "c2",
                title: "Cascadas Kegon o Lago Chuzenji (Si elegís Nikko) [HORARIO: 08:00 - 17:00]",
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
                title: "Templo Engaku-ji [HORARIO: 08:00 - 16:30]",
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
                title: "Kawagoe (Little Edo) [HORARIO: 24 horas]",
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
        date: "Lun, 17 Agosto", title: "🌊 La Bahía de Tokio: Mercado de Toyosu y Odaiba",
        routeMapsLink: "https://www.google.com/maps/d/u/0/edit?mid=1kg_iDGN0oSUuNgVSxmzmvuec42AaR_A&usp=sharing",
        coords: [35.630, 139.776], zoom: 13,
        hotel: "Hotel Metropolitan Edmont Tokyo",
        hotelImage: "images/hotel-metropolitan-tokio.jpg",
        hotelGoogleLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Edmont+Tokyo",
        image: "images/dia22-itinerario-base.jpg",

        logistics: [
            { title: "Transporte", text: "La conexión principal del día será el tren panorámico Yurikamome cruzando la bahía (No entra en el pase de metro regular)." },
            { title: "Navegación", text: "El tren Yurikamome se toma directamente desde la zona de Toyosu para conectar con la bahía y Odaiba." },
            { title: "Grupo (8 Pax)", text: "En Odaiba, los centros comerciales <em>Aqua City</em> y <em>DiverCity</em> tienen enormes zonas de comida (food courts) ideales para almorzar juntos sin esperas largas." },
            { title: "Ropa (TeamLab Planets) [HORARIO: 09:00 - 22:00]", text: "En Planets entraréis descalzos y caminaréis sobre agua por la rodilla. Llevad pantalones que se puedan remangar fácilmente." }
        ],

        transportTimeline: [
            { time: "08:00", type: "point", title: "Salida Hotel Edmont", icon: "fa-solid fa-hotel" },
            {
                time: "08:15",
                type: "transit",
                title: "Metro a Toyosu",
                price: "Suica",
                timeLabel: "30 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Metropolitan+Edmont+Tokyo&destination=Toyosu+Market&travelmode=transit",
                tacticalGuideId: "route_day22_iidabashi_to_toyosu",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Iidabashi (Hotel)",
                    destination: "Toyosu (Mercado)",
                    totalTime: "18 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Iidabashi",
                            code: "Y13",
                            line: "Yurakucho Line (Dorada)",
                            lineColor: "#c1a470",
                            platform: "3 (dirección Shin-Kiba)",
                            car: "Cualquiera"
                        },
                        {
                            type: "destination",
                            station: "Toyosu",
                            code: "Y22",
                            line: "Yurakucho Line (Dorada)",
                            lineColor: "#c1a470",
                            exit: "Salida 6",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/toyosu.pdf"
                        }
                    ],
                    gpsWarning: "En Toyosu, sal por la Salida 6 (Exit 6). Te deja a unos pasos del puente peatonal que conecta directamente con el mercado de Toyosu."
                }
            },
            { time: "08:45", type: "point", title: "Toyosu Market / Senkyaku Banrai [HORARIO: 10:00 - 22:00]", icon: "fa-solid fa-fish" },
            {
                time: "11:30",
                type: "transit",
                title: "Tren Yurikamome hacia Odaiba",
                price: "Suica",
                timeLabel: "10 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Toyosu&destination=Daiba+Station&travelmode=transit",
                tacticalGuideId: "route_day22_toyosu_to_odaiba",
                tacticalBtnText: "RUTA TREN",
                transitDetails: {
                    origin: "Toyosu (Yurikamome)",
                    destination: "Daiba (Odaiba)",
                    totalTime: "16 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Toyosu",
                            code: "U16",
                            line: "Yurikamome Line (Monorriel)",
                            lineColor: "#00918a",
                            platform: "1 o 2",
                            car: "Vagón 1 (¡para ir al frente!)"
                        },
                        {
                            type: "destination",
                            station: "Daiba",
                            code: "U07",
                            line: "Yurikamome Line (Monorriel)",
                            lineColor: "#00918a",
                            exit: "Salida Única",
                            mapUrl: "https://www.yurikamome.co.jp/en/route_guidance/u07/"
                        }
                    ],
                    gpsWarning: "Consejo VIP: El Yurikamome es un monorriel automático elevado sin conductor. Si te sientas en el primer vagón de la parte delantera, tendrás vistas de película cruzando el Rainbow Bridge."
                }
            },
            { time: "12:15", type: "point", title: "Odaiba Seaside: Estatua Libertad y Gundam [HORARIO: 24 horas]", icon: "fa-solid fa-robot" },
            {
                time: "21:00",
                type: "transit",
                title: "Yurikamome y Metro Oedo de vuelta al Hotel desde Odaiba",
                price: "Suica (~550 JPY)",
                timeLabel: "35 min",
                link: "https://www.google.com/maps/dir/?api=1&origin=Daiba+Station&destination=Hotel+Metropolitan+Edmont+Tokyo&travelmode=transit",
                tacticalGuideId: "route_day22_odaiba_to_iidabashi",
                tacticalBtnText: "RUTA METRO",
                transitDetails: {
                    origin: "Daiba (Odaiba)",
                    destination: "Iidabashi (Hotel)",
                    totalTime: "30 min",
                    steps: [
                        {
                            type: "origin",
                            station: "Daiba",
                            code: "U07",
                            line: "Yurikamome Line (Monorriel)",
                            lineColor: "#00918a",
                            platform: "2 (dirección Shimbashi)",
                            car: "Cualquiera"
                        },
                        {
                            type: "transfer",
                            station: "Shiodome",
                            code: "U02",
                            line: "Oedo Line (Magenta)",
                            lineColor: "#b6007a",
                            instructions: "Bájate en Shiodome y sigue las indicaciones hacia la línea de metro Toei Oedo (transbordo subterráneo rápido de 2 min)."
                        },
                        {
                            type: "destination",
                            station: "Iidabashi",
                            code: "E06",
                            line: "Oedo Line (Magenta)",
                            lineColor: "#b6007a",
                            exit: "Salida C3",
                            mapUrl: "https://www.tokyometro.jp/station/pdf/yardmap/iidabashi.pdf"
                        }
                    ],
                    gpsWarning: "El transbordo en Shiodome es el más rápido de la zona de la bahía para conectar con Iidabashi. Sigue los letreros magenta [E]."
                }
            }
        ],

        timeline: [
            { time: "08:45", title: "Toyosu Market / Senkyaku Banrai [HORARIO: 10:00 - 22:00]", desc: "La nueva lonja de pescado y área de ocio de estilo tradicional. (Base)" },
            { time: "11:30", title: "Tren Yurikamome hacia Odaiba", desc: "Vistas panorámicas cruzando la bahía de Tokio y el Rainbow Bridge. (Base)" },
            { time: "12:15", title: "Odaiba Seaside: Estatua Libertad y Gundam [HORARIO: 24 horas]", desc: "Paseo costero, centros comerciales y los grandes iconos de Odaiba. (Base)" },
            { time: "21:00", title: "Regreso al Hotel", desc: "Yurikamome y metro de vuelta a Iidabashi. (Base)" }
        ],

        prices: {
            transport: "~1.000 JPY (Yurikamome es caro)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Adentrarse en la bahía de Tokio. Empezamos en Toyosu para degustar sushi fresco y visitar Senkyaku Banrai, para luego tomar el Yurikamome hacia la isla artificial de Odaiba con sus centros comerciales y vistas espectaculares.",
            events: [
                {
                    id: "b1",
                    time: "08:45",
                    title: "Toyosu Senkyaku Banrai [HORARIO: 10:00 - 22:00]",
                    description: "El nuevo complejo comercial termal junto al mercado mayorista de atunes más grande del mundo.",
                    image: "images/dia22-toyosu.jpg",
                    price: "Gratis",
                    video: "https://www.youtube.com/watch?v=dpPnum86GoA",
                    tacticalGuideId: "mission_toyosu_market",
                    fullDesc: `
                        <h3><i class="fa-solid fa-fish-fins"></i> Toyosu: El Nuevo Legado del Mar</h3>
                        <p>Tras el cierre del icónico Tsukiji, Toyosu se ha convertido en la lonja de pescado más avanzada del mundo. Aunque el área mayorista es de acceso restringido y muy tecnológica, el nuevo complejo **Senkyaku Banrai** ("Mil Huéspedes") recrea un animado mercado del periodo Edo con arquitectura de madera tradicional.</p>
                        <p><em>Es el lugar definitivo para desayunar el sushi mejor seleccionado de la madrugada. No os perdáis el **Manyo Club**, donde podréis disfrutar de un baño de pies (ashiyu) gratuito en la azotea con vistas panorámicas a la bahía de Tokio y al skyline.</em></p>
                    `
                },
                {
                    id: "b2",
                    time: "11:30",
                    title: "El Tren Monorraíl Yurikamome",
                    description: "No es solo transporte, es una verdadera atracción gracias a las vistas cruzando el Rainbow Bridge.",
                    image: "images/dia20-monorail.jpg",
                    price: "Suica/Pasmo",
                    video: "https://www.youtube.com/watch?v=7iSOMLkFizU",
                    tacticalGuideId: "mission_yurikamome",
                    fullDesc: `
                        <h3><i class="fa-solid fa-train"></i> Yurikamome: El Viaje al Futuro</h3>
                        <p>Este sistema de tránsito ligero totalmente automatizado (sin conductor) es el mejor mirador móvil de Tokio. Recibe su nombre de la gaviota de cabeza negra, el ave oficial de la capital.</p>
                        <p><em>El momento culminante es cuando el tren realiza una doble curva de 270 grados para ganar altura antes de cruzar el <strong>Rainbow Bridge</strong>. Las vistas de los rascacielos de Minato a un lado y la bahía al otro son imbatibles. Truco: Intentad sentaros en el gran ventanal del primer vagón.</em></p>
                    `
                },
                {
                    id: "b3",
                    time: "12:15",
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
                    `
                }
            ]
        },
        complements: [
            {
                id: "c1",
                title: "TeamLab Planets TOKYO [HORARIO: 09:00 - 22:00]",
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
                title: "Joypolis Tokyo [HORARIO: 10:00 - 20:00]",
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
            { title: "Traslado Reservado", text: "Traslado privado confirmado en Booking.com. Recogida en el hotel a las 16:30. Tiempo estimado: 29 minutos." },
            { title: "Salida Vuelos", text: "<strong>Vuelo 1:</strong> TK199 despegue de Haneda (HND) a las 21:45. <strong>Vuelo 2:</strong> TK1313 despegue de Estambul (IST) a las 08:20 (19-Ago)." },
            { title: "Tiempos de Aeropuerto", text: "Llegada al Aeropuerto de Haneda a las 17:45 (4 horas antes para el check-in y facturación)." },
            { title: "Estrategia Jet Lag de Vuelta", text: "<strong>Vuelo TK199:</strong> NO dormir de 21:45 a 04:00 (hora JPN). Dormir de 04:00 a 10:15 (hora JPN). <strong>Vuelo TK1313:</strong> Prohibido dormir para forzar el cansancio por la noche en España." }
        ],

        timeline: [
            { time: "10:00", title: "Check-out Hotel Edmont", desc: "Hora de dejar las habitaciones. Podéis dejar las maletas grandes guardadas gratis en la recepción del hotel hasta la tarde." },
            { time: "10:15", title: "Últimas compras por Tokio", desc: "Tiempo libre para hacer compras de última hora en Don Quijote, Akihabara o pasear por vuestros rincones favoritos." },
            { time: "13:00", title: "Almuerzo de Despedida", desc: "Último almuerzo fuerte en Tokio (un buen Ramen o Sushi). Carga de energía recomendada para el largo viaje de vuelta." },
            { time: "16:00", title: "Regreso al Hotel", desc: "Volver a la recepción para recoger las maletas grandes y preparar el traslado." },
            { 
                time: "16:30", 
                title: "🚖 Traslado a Haneda (Booking.com)", 
                desc: "Recogida de los 8 pasajeros en el lobby del Hotel Metropolitan Edmont en traslado privado.<br><br>⏱️ **Husos Horarios:**<br>• 🇯🇵 Japón: **16:30**<br>• 🇹🇷 Turquía: **10:30**<br>• 🇪🇸 España: **09:30**<br><br>Ruta rápida directa de unos 29 minutos hasta la Terminal 3 de Haneda." 
            },
            { 
                time: "17:45", 
                title: "✈️ Llegada a Haneda y Check-in", 
                desc: "Llegada con 4 horas de antelación para facturar con total tranquilidad y evitar imprevistos.<br><br>⏱️ **Husos Horarios:**<br>• 🇯🇵 Japón: **17:45**<br>• 🇹🇷 Turquía: **11:45**<br>• 🇪🇸 España: **10:45**<br><br>Podéis cenar y pasear por la zona temática 'Edo Koji' en la planta superior de la terminal." 
            },
            { 
                time: "21:45", 
                title: "🛫 Despegue Vuelo TK199 (HND ➔ IST)", 
                desc: "Salida del primer vuelo de vuelta de Turkish Airlines.<br><br>⏱️ **Husos Horarios:**<br>• 🇯🇵 Japón: **21:45** (Salida)<br>• 🇹🇷 Turquía: **15:45**<br>• 🇪🇸 España: **14:45**<br><br>Duración estimada: 13h 30m.<br><br>🛌 **ESTRATEGIA DE SUEÑO (Anti-Jet Lag):**<br>• **21:45 - 04:00 JPN (14:45 - 21:00 ESP)**: 🚫 **NO DORMIR**. Ved películas, leed, manteneos despiertos.<br>• **04:00 - 10:15 JPN (21:00 - 03:15 ESP)**: 💤 **DORMIR**. Intentad dormir las últimas 6 horas del vuelo para adaptaros al descanso." 
            },
            { 
                time: "05:15", 
                title: "🛬 Llegada a Estambul (IST) - Escala", 
                desc: "Aterrizaje en Estambul para escala en tránsito.<br><br>⏱️ **Husos Horarios:**<br>• 🇹🇷 Turquía: **05:15** (Llegada del 19-Ago)<br>• 🇪🇸 España: **04:15** (19-Ago)<br>• 🇯🇵 Japón: **11:15** (19-Ago)<br><br>Tiempo de escala: 3 horas 5 minutos. Seguir conexiones y caminar por la terminal." 
            },
            { 
                time: "08:20", 
                title: "🛫 Salida Vuelo TK1313 (IST ➔ VLC)", 
                desc: "Despegue del vuelo final hacia España.<br><br>⏱️ **Husos Horarios:**<br>• 🇹🇷 Turquía: **08:20** (19-Ago - Salida)<br>• 🇪🇸 España: **07:20** (19-Ago)<br>• 🇯🇵 Japón: **14:20** (19-Ago)<br><br>Duración estimada: 4h 10m.<br><br>🚫 **MISIÓN: DESPIERTOS**. Prohibido dormir en este vuelo para poder acostaros en España por la noche y sincronizar el sueño." 
            },
            { 
                time: "11:30", 
                title: "🏠 Llegada a Valencia (VLC)", 
                desc: "Aterrizaje en Valencia. Fin de la expedición.<br><br>⏱️ **Husos Horarios:**<br>• 🇪🇸 España: **11:30** (19-Ago - Llegada)<br>• 🇹🇷 Turquía: **12:30** (19-Ago)<br>• 🇯🇵 Japón: **18:30** (19-Ago)" 
            }
        ],

        prices: {
            transport: "Pagado (Traslado Booking.com)",
            total: "Base +"
        },

        isFlexible: true,
        base: {
            title: "Itinerario Base",
            description: "Es el momento de cerrar las maletas y aprovechar las últimas horas en Tokio antes del traslado al aeropuerto de Haneda para iniciar el regreso a casa.",
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
                        <p><em>**Don Quijote** es una cadena de tiendas de descuento con todo tipo de productos, desde snacks y cosméticos hasta electrónica and disfraces. Es el lugar perfecto para encontrar souvenirs únicos y a buen precio.</em></p>
                    `,
                },
                {
                    time: "13:00",
                    title: "Último Almuerzo Japonés",
                    description: "Última oportunidad para sushi decente o un gran plato de ramen antes de la comida de avión.",
                    type: "gap"
                },
                {
                    time: "16:30",
                    title: "🚖 Traslado Confirmado a Haneda (Booking.com)",
                    description: "Traslado privado ya reservado y confirmado. Recogida a las 16:30 en el lobby del Hotel Metropolitan Edmont. Trayecto directo de unos 29 minutos hasta la Terminal 3 de Haneda. (Puedes consultar los detalles completos de la reserva pulsando el botón superior 'Info Taxi')."
                },
                {
                    time: "17:45",
                    title: "✈️ Llegada a Haneda y Check-in",
                    description: "Llegada al Aeropuerto de Haneda para facturación con 4 horas de antelación.<br><br>⏱️ **Comparativa de Husos Horarios:**<br>• 🇯🇵 Japón: **17:45**<br>• 🇹🇷 Turquía: **11:45**<br>• 🇪🇸 España: **10:45**<br><br>Una vez facturado el equipaje directo a Valencia, podéis cenar y pasear por la zona comercial tematizada 'Edo Koji' en las plantas superiores (4 y 5) de la terminal antes de pasar el control de seguridad."
                },
                {
                    time: "21:45",
                    title: "🛫 Vuelo TK199 rumbo a Estambul",
                    description: "Despegue del vuelo internacional nocturno de Turkish Airlines. Duración: 13h 30m.<br><br>⏱️ **Comparativa de Husos Horarios:**<br>• 🇯🇵 Japón: **21:45** (Salida el 18-Ago)<br>• 🇹🇷 Turquía: **15:45** (18-Ago)<br>• 🇪🇸 España: **14:45** (18-Ago)<br><br>🛌 **ESTRATEGIA DE SUEÑO (Anti-Jet Lag):**<br>• **21:45 - 04:00 JPN (14:45 - 21:00 ESP):** 🚫 **NO DORMIR**. Ved películas, leed, manteneos despiertos.<br>• **04:00 - 10:15 JPN (21:00 - 03:15 ESP):** 💤 **DORMIR**. Intentad dormir las últimas 6 horas del vuelo para adaptaros al descanso."
                },
                {
                    time: "05:15",
                    title: "🛬 Tránsito / Escala en Estambul (IST)",
                    description: "Aterrizaje en Estambul para escala en tránsito de 3h 5m.<br><br>⏱️ **Comparativa de Husos Horarios:**<br>• 🇹🇷 Turquía: **05:15** (Llegada del 19-Ago)<br>• 🇪🇸 España: **04:15** (19-Ago)<br>• 🇯🇵 Japón: **11:15** (19-Ago)<br><br>Seguid los carteles de conexiones internacionales ('International Connections') y caminad por la terminal."
                },
                {
                    time: "08:20",
                    title: "🛫 Vuelo TK1313 rumbo a Valencia",
                    description: "Despegue del vuelo final hacia España. Duración: 4h 10m.<br><br>⏱️ **Comparativa de Husos Horarios:**<br>• 🇹🇷 Turquía: **08:20** (19-Ago - Salida)<br>• 🇪🇸 España: **07:20** (19-Ago)<br>• 🇯🇵 Japón: **14:20** (19-Ago)<br><br>🚫 **Estrategia:** **Misión: Mantenerse despiertos**. Prohibido dormir en este vuelo para forzar el cansancio por la noche en España y regular el sueño rápidamente al llegar."
                },
                {
                    time: "11:30",
                    title: "🏠 Llegada a Valencia (VLC)",
                    description: "Aterrizaje en Valencia y fin de la expedición a Japón.<br><br>⏱️ **Comparativa de Husos Horarios:**<br>• 🇪🇸 España: **11:30** (19-Ago - Llegada)<br>• 🇹🇷 Turquía: **12:30** (19-Ago)<br>• 🇯🇵 Japón: **18:30** (19-Ago)"
                }
            ]
        },
        complements: [],
        additionalExcursions: [],

        visualContent: {
            summary: "Último día en Tokio y despegue de los vuelos de regreso a casa.",
            photoSpot: "Foto de despedida de todo el grupo en la terminal de Haneda."
        }
    },

    // --- DÍA 24: LLEGADA A ESPAÑA ---
    {
        day: 24, type: "stay",
        date: "Mié, 19 Agosto", title: "🏠 Hogar dulce hogar",
        coords: [39.469, -0.376], zoom: 10,
        hotel: "Valencia, España",
        hotelImage: "images/casa.jpg",

        logistics: [
            { title: "Estrategia Jet Lag", text: "NO dormir en el vuelo Estambul-Valencia. Aguantar despiertos hasta las 21:00-22:00 en casa." },
            { title: "Escala", text: "Llegada a Estambul a las 05:15 am. Escala activa: caminad por la terminal." },
            { title: "Llegada", text: "Vuelo TK1313. Llegada a Valencia a las 11:30 am hora local." }
        ],

        transportTimeline: [
            { time: "05:15", type: "point", title: "Aterrizaje en Estambul (IST)", icon: "fa-solid fa-plane-arrival" },
            { time: "06:30", type: "point", title: "Desayuno Activo", icon: "fa-solid fa-coffee", desc: "Luz natural y cafeína para aguantar." },
            {
                time: "08:20",
                type: "transit",
                title: "Despegue Vuelo TK1313",
                price: "Incluido",
                timeLabel: "4h 10m",
                link: "https://www.flightaware.com/live/flight/THY1313",
                desc: "Protocolo: Mantenerse activo, ver pelis, NO dormir."
            },
            { time: "11:30", type: "point", title: "Aterrizaje en Valencia (VLC)", icon: "fa-solid fa-house" }
        ],

        jetLagStrategy: {
            title: "Protocolo Anti-Jet Lag: Fase 2 (Llegada)",
            phases: [
                {
                    name: "ESCALA: Estambul",
                    icon: "fa-solid fa-walking",
                    color: "var(--neon-purple)",
                    steps: [
                        { time: "05:15 - 08:45", activity: "Actividad en Tránsito", desc: "Caminad, estirad piernas, buscad luz natural." }
                    ]
                },
                {
                    name: "VUELO 2: IST ➔ VLC",
                    icon: "fa-solid fa-plane",
                    color: "var(--neon-blue)",
                    steps: [
                        { time: "08:45 - 11:50", activity: "MISIÓN: DESPIERTOS", type: "wake", desc: "Prohibido dormir. Hidratación constante." }
                    ]
                },
                {
                    name: "VALENCIA: El Reto Final",
                    icon: "fa-solid fa-house-user",
                    color: "var(--danger)",
                    steps: [
                        { time: "12:00 - 21:00", activity: "RESISTENCIA", desc: "Aguantar sin siestas hasta la noche española." }
                    ]
                }
            ]
        },

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
