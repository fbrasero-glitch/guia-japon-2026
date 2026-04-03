/**
 * BASE DE DATOS DE RESTAURANTES - JAPÓN 2026
 * Organizado por ciudades y áreas para integración contextual.
 */

const restaurantData = [
    {
        id: "my-neighbor",
        name: "MY NEIGHBOR",
        category: "Café & Brunch",
        description: "Un café moderno y acogedor, famoso por sus desayunos, repostería casera y café de especialidad. Ideal para empezar el día.",
        area: "Nishi Ward, Osaka",
        city: "OSAKA",
        address: "Grand-K, 1-chōme-13-33 Nishihonmachi, Nishi Ward, Osaka, 550-0005, Japón",
        google_maps_place_id: "ChIJYeGbSVXnAGARqeazBcJQF3I",
        image: "images/restaurantes/my-neighbor.jpg",
        nearTo: ["Castillo de Osaka"] // Áreas cercanas para recomendación
    },
    {
        id: "yakiniku-kitan-minamisenba",
        name: "Yakiniku KITAN Minamisenba",
        category: "Yakiniku (Barbacoa Japonesa)",
        description: "Un restaurante de Yakiniku elegante y muy bien valorado, conocido por su carne Wagyu de excelente calidad y su ambiente sofisticado.",
        area: "Minamisenba, Osaka",
        city: "OSAKA",
        address: "4-chōme-11-22 B1FYOC Minamisenba, Chuo Ward, Osaka, 542-0081, Japón",
        google_maps_place_id: "ChIJoRGXxY7nAGARAdFPBOBTQ78",
        image: "images/restaurantes/yakiniku-kitan-minamisenba.jpg",
        nearTo: ["Shinsaibashi Parco", "Umeda Sky Building"]
    },
    {
        id: "nikugoro-amerikamura",
        name: "Nikugoro Amerikamura (肉五郎)",
        category: "Yakiniku (Barbacoa Japonesa)",
        description: "Especializado en barbacoa japonesa. Es un lugar animado y popular entre los locales, situado en el corazón del barrio joven de la ciudad.",
        area: "Amerikamura, Osaka",
        city: "OSAKA",
        address: "2-chōme-3-16 Nishishinsaibashi, Chuo Ward, Osaka, 542-0086, Japón",
        google_maps_place_id: "ChIJL8JR_4znAGAR7tEWPJpWtR0",
        image: "images/restaurantes/nikugoro-amerikamura.jpg",
        nearTo: ["Shinsaibashi Parco", "Dotonbori"]
    },
    {
        id: "kitan-hibiki-yakiniku",
        name: "KITAN HIBIKI YAKINIKU & STEAK (㐂舌 響)",
        category: "Yakiniku & Steak Premium",
        description: "Ofrece cortes premium de carne y una experiencia de cena de alta calidad, enfocada en el sabor auténtico del buey japonés (Wagyu).",
        area: "Namba, Osaka",
        city: "OSAKA",
        address: "1-chōme-1-7 Namba, Chuo Ward, Osaka, 542-0076, Japón",
        google_maps_place_id: "ChIJtZqLbwDnAGARfxhkdtkKOX0",
        image: "images/restaurantes/kitan-hibiki-yakiniku.jpg",
        nearTo: ["Santuario Namba Yasaka", "Calle Ebisubashisuji", "Dotonbori"]
    },
    {
        id: "matsusakagyu-yakiniku-m-namba",
        name: "Matsusakagyu Yakiniku M (Namba Branch)",
        category: "Yakiniku (Carne de Matsusaka)",
        description: "Famoso por servir la exclusiva carne de Matsusaka (una de las tres mejores de Japón). Es una parada obligatoria para los amantes de la carne.",
        area: "Namba, Osaka",
        city: "OSAKA",
        address: "3-11 Nanbasennichimae, Chuo Ward, Osaka, 542-0075, Japón",
        google_maps_place_id: "ChIJ2eIiAvvnAGARmbapWO_xuK4",
        image: "images/restaurantes/matsusakagyu-yakiniku-m-namba.jpg",
        nearTo: ["Santuario Namba Yasaka", "Dotonbori"]
    },
    {
        id: "yakiniku-m-hozenji",
        name: "Yakiniku M Hozenji Yokocho",
        category: "Yakiniku (Carne de Matsusaka)",
        description: "Sucursal de la prestigiosa cadena 'M', ubicada en un callejón histórico con mucho encanto (Hozenji Yokocho), ofreciendo una atmósfera más tradicional.",
        area: "Hozenji Yokocho (Namba), Osaka",
        city: "OSAKA",
        address: "1-chōme-1-19 Namba, Chuo Ward, Osaka, 542-0076, Japón",
        google_maps_place_id: "ChIJa0f0lRTnAGARXNWOLs7nBqg",
        image: "images/restaurantes/yakiniku-m-hozenji.jpg",
        nearTo: ["Calle Ebisubashisuji", "Dotonbori"]
    },
    // --- RESTAURANTES DE KIOTO ---
    {
        id: "gyukatsu-motomura-kyoto",
        name: "Gyukatsu Motomura (Kyoto Sanjo)",
        category: "Gyukatsu (Ternera empanada)",
        description: "Famoso por su ternera empanada (Gyukatsu) servida poco hecha, que puedes terminar a la plancha en tu propia piedra caliente. ¡Obligatorio probarlo!",
        area: "Sanjo Kawaramachi, Kioto",
        city: "KYOTO",
        address: "Sanjo-dori, Nakagyo Ward, Kyoto",
        google_maps_place_id: "ChIJWf83XhQIAWARz6N_8sL7wT4", 
        image: "images/restaurantes/gyukatsu-motomura-kyoto.jpg",
        nearTo: ["Calle Comercial Kawaramachi", "Paseo por el río Kamo", "Pontocho"]
    },
    {
        id: "chao-chao-gyoza-kiyamachi",
        name: "Chao Chao Gyoza (Sanjo Kiyamachi)",
        category: "Gyozas & Taberna",
        description: "Uno de los locales de gyozas más divertidos y populares de Kioto. Auténtico ambiente de izakaya local con unas empanadillas excepcionales increíbles de probar a un súper precio.",
        area: "Sanjo Kiyamachi, Kioto",
        city: "KYOTO",
        address: "117 Ishiyacho, Nakagyo Ward, Kyoto",
        google_maps_place_id: "ChIJxY2YI2EIAWARNqVqL1Q1eE4",
        image: "images/restaurantes/chao-chao-gyoza-kiyamachi.jpg",
        nearTo: ["Calle Comercial Kawaramachi", "Pontocho", "Gion"]
    },
    {
        id: "tempura-no-mise-gen",
        name: "Tempura no Mise Gen",
        category: "Tempura Especializada",
        description: "Un íntimo local especializado en tempura tradicional de Kioto. Podréis sentaros en la barra a comer unos espectaculares tendon (cuencos de arroz recubiertos de tempura recién frita).",
        area: "Sanjo, Kioto",
        city: "KYOTO",
        address: "Nakagyo Ward, Kyoto",
        google_maps_place_id: "ChIJbXz0yBEIAWARuV7qI92s01I",
        image: "images/restaurantes/tempura-no-mise-gen.jpg",
        nearTo: ["Calle Comercial Kawaramachi", "Paseo por el río Kamo"]
    },
    {
        id: "unagi-sumito",
        name: "Unagi Sumito",
        category: "Anguila (Unagi / Hitsumabushi)",
        description: "Especialistas en anguila de agua dulce de primera calidad asada al carbón. Su hitsumabushi (estilo de Nagoya) se come en varias fases con té y condimentos.",
        area: "Higashiyama, Kioto",
        city: "KYOTO",
        address: "Nichome 51 B1F, Higashiyama Ward, Kyoto",
        google_maps_place_id: "ChIJW-H7fRMIAWARC9Z2pUf5y8o",
        image: "images/restaurantes/unagi-sumito.jpg",
        nearTo: ["Higashiyama", "Kiyomizu-dera", "Santuario Yasaka", "Gion"]
    },
    // --- RESTAURANTES DE TOKIO ---
    {
        id: "hikiniku-to-come-tokyo",
        name: "Hikiniku To come",
        category: "Hamburguesas de Wagyu (Parrilla)",
        description: "Increíble experiencia donde preparan hamburguesas de carne Wagyu a la plancha de carbón directamente frente a ti. Muy popular, id a por la mañana a coger ticket o reservad con tiempo.",
        area: "Shibuya, Tokio",
        city: "TOKYO",
        address: "Dogenzaka, Shibuya, Tokyo",
        google_maps_place_id: "ChIJ8XJ6_4uMGGARz9B_5Xm7Z2k", 
        image: "images/restaurantes/hikiniku-to-come-tokyo.jpg",
        nearTo: ["Shibuya", "Harajuku", "Omotesando"]
    },
    {
        id: "kanimamire-ikebukuro",
        name: "Kanimamire Tokyo Ikebukuro",
        category: "Buffet libre de Cangrejo",
        description: "El paraíso para los amantes del marisco. Ofrecen un buffet libre de espectacular cangrejo nevado gigante, patas de rey y mucho más. Una comilona épica.",
        area: "Ikebukuro, Tokio",
        city: "TOKYO",
        address: "Ikebukuro, Toshima City, Tokyo",
        google_maps_place_id: "ChIJk-tQ6OaNGGARO1-JXZ63x6M", 
        image: "images/restaurantes/kanimamire-ikebukuro.jpg",
        nearTo: ["Ikebukuro", "Sunshine City"]
    },
    {
        id: "ramen-nagi-shinjuku",
        name: "Ramen Nagi",
        category: "Ramen de Anchoas (Niboshi)",
        description: "Una pequeña joya oculta de ramen en el bullicio de Shinjuku. Famoso por su potentísimo y súper umami caldo Niboshi (hecho de abundantes anchoas secas).",
        area: "Shinjuku, Tokio",
        city: "TOKYO",
        address: "Kabukicho, Shinjuku, Tokyo",
        google_maps_place_id: "ChIJFbz9zpuMGGARhJt243VqTjg", 
        image: "images/restaurantes/ramen-nagi-shinjuku.jpg",
        nearTo: ["Shinjuku", "Kabukicho", "Golden Gai", "Gobierno Metropolitano"]
    },
    {
        id: "yakiniku-washino-shinjuku",
        name: "Yakiniku Washino Shinjuku",
        category: "Yakiniku (Barbacoa Wagyu)",
        description: "Opción premium de Yakiniku en Shinjuku. Si queréis daros un homenaje de carne Wagyu A5 que se deshace en la boca, con cortes espectaculares y gran ambiente.",
        area: "Shinjuku, Tokio",
        city: "TOKYO",
        address: "Shinjuku, Tokyo",
        google_maps_place_id: "ChIJJXk6zJuMGGARcR49V4uXZ_I", 
        image: "images/restaurantes/yakiniku-washino-shinjuku.jpg",
        nearTo: ["Shinjuku", "Kabukicho", "Godzilla", "Omoide Yokocho"]
    },
    {
        id: "pizza-marumo-tokyo",
        name: "Pizza Marumo",
        category: "Pizza Napolitana Premium",
        description: "Un respiro occidental excelente. Famosos por conseguir unas masas de pizza napolitana increíbles (toda una religión en Japón) en un ambiente moderno y de diseño.",
        area: "Ebisu, Tokio",
        city: "TOKYO",
        address: "Ebisu, Shibuya City, Tokyo",
        google_maps_place_id: "ChIJV1D22lqLGGARUj58R9wG-bU", 
        image: "images/restaurantes/pizza-marumo-tokyo.jpg",
        nearTo: ["Ebisu", "Shibuya", "Daikanyama", "Roppongi"]
    },
    {
        id: "wagyu-burger-hirokiya",
        name: "Wagyu Burger Hirokiya",
        category: "Hamburguesas Extremas (Wagyu)",
        description: "Se hizo muy viral por aplastar físicamente (smash) bolas de carne de Wagyu en la plancha, resultando en unas burgers increíblemente grasas y sabrosas.",
        area: "Ebisu / Shibuya, Tokio",
        city: "TOKYO",
        address: "Ebisu, Shibuya City, Tokyo",
        google_maps_place_id: "ChIJG-V98VqLGGARq1qT89uT-7I", 
        image: "images/restaurantes/wagyu-burger-hirokiya.jpg",
        nearTo: ["Ebisu", "Shibuya", "Daikanyama"]
    },
    {
        id: "yakiniku-kappo-note",
        name: "Yakiniku Kappo Note",
        category: "Yakiniku Elegante (Kappo)",
        description: "Para una experiencia más enfocada en la atención detallada (Kappo). La carne es seleccionada y asada con precisión milimétrica en un ambiente inmejorable.",
        area: "Ginza, Tokio",
        city: "TOKYO",
        address: "Ginza, Chuo City, Tokyo",
        google_maps_place_id: "ChIJy-T13BKLGGARIv0M6uQkO_A", 
        image: "images/restaurantes/yakiniku-kappo-note.jpg",
        nearTo: ["Ginza", "Tsukiji", "Palacio Imperial", "Marunouchi"]
    },
    {
        id: "rare-tendon-mitsuyoshi",
        name: "Rare Tendon Ginza Mitsuyoshi",
        category: "Rare Tendon (Tempura Poco Hecha)",
        description: "Su especialidad es un bol de arroz enorme cubierto de una montaña de ingredientes de primer nivel en una espectacular y crujiente floritura de tempura 'poco hecha'.",
        area: "Ginza, Tokio",
        city: "TOKYO",
        address: "Ginza, Chuo City, Tokyo",
        google_maps_place_id: "ChIJZ3U2xBKLGGARH29qCwq-u_M", 
        image: "images/restaurantes/rare-tendon-mitsuyoshi.jpg",
        nearTo: ["Ginza", "Tsukiji", "Tsukiji Outer Market", "Mercado de Pescado"]
    },
    {
        id: "ginza-kagari-ramen",
        name: "Ginza Kagari",
        category: "Ramen Tori Paitan (Caldo de Pollo)",
        description: "Considerado uno de los mejores ramen de pollo de Tokio. Su caldo es tan cremoso, blanco y espeso que parece un potaje premium adornado de vegetales exquisitos.",
        area: "Ginza, Tokio",
        city: "TOKYO",
        address: "Ginza, Chuo City, Tokyo",
        google_maps_place_id: "ChIJYf_7vxKLGGARZ_pB-9_9q-M", 
        image: "images/restaurantes/ginza-kagari-ramen.jpg",
        nearTo: ["Ginza", "Tsukiji", "Palacio Imperial", "Yurakucho", "Estación de Tokio"]
    },
    {
        id: "ginza-cafe-hanon",
        name: "Ginza Cafe Hanon",
        category: "Café & Pankakes",
        description: "Sus fluffy pancakes (tortitas suflé híper esponjosas que tiemblan al mover el plato) atraen a todo el mundo a Ginza. Genial para matar el gusanillo dulce al mediodía.",
        area: "Ginza, Tokio",
        city: "TOKYO",
        address: "Ginza, Chuo City, Tokyo",
        google_maps_place_id: "ChIJk-UqpxKLGGARB55yP9Wsz84", 
        image: "images/restaurantes/ginza-cafe-hanon.jpg",
        nearTo: ["Ginza", "Tsukiji", "Marunouchi", "Estación de Tokio"]
    }
];

// Exportación global
window.restaurantData = restaurantData;
