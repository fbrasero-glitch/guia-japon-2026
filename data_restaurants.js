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
    }
];

// Exportación global
window.restaurantData = restaurantData;
