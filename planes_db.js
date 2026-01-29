// data.js - BASE DE DATOS MAESTRA (COLECCIÓN COMPLETA V50)

// 1. PESOS Y MEDIDAS (Conversión de unidades a gramos)
window.NUTRI_WEIGHTS = { 
    'huevo': 60, 'tortilla': 1, 'yogur': 125, 'tortitas': 8, 'platano': 100, 
    'fruta': 150, 'manzana': 180, 'kiwi': 80, 'pan_molde': 28, 'tostada': 20, 
    'gelatina': 125, 'cafe': 200, 'bacon': 40, 'galletas': 6, 'tortita_trigo': 40, 
    'biscotes': 9, 'piña': 150, 'burger': 1, 'sandwich': 60, 'rebanada': 30
};

// 2. DICCIONARIO NUTRICIONAL (Macros por 100g)
window.NUTRI_DB = {
    // PROTEINAS
    'pollo': {k:110,p:23,f:1.2,c:0}, 'ternera': {k:130,p:21,f:4,c:0}, 'pavo': {k:105,p:22,f:2,c:0},
    'lomo': {k:145,p:21,f:6,c:0}, 'lomo_embuchado': {k:190,p:38,f:6,c:0}, 'jamon_cocido': {k:105,p:18,f:3,c:1},
    'jamon_serrano': {k:240,p:30,f:12,c:0}, 'hamburguesa': {k:220,p:17,f:15,c:1}, 'burger_pollo_90': {k:140,p:20,f:6,c:2},
    'hamburguesa_ternera': {k:220,p:17,f:15,c:1}, 'bacon': {k:500,p:14,f:50,c:1}, 'salchichas_pavo': {k:170,p:14,f:12,c:1},
    'albondigas_pollo': {k:160,p:18,f:8,c:4}, 'bacalao': {k:82,p:18,f:0.7,c:0}, 'surimi': {k:95,p:8,f:2,c:10},
    'gambas': {k:95,p:20,f:1.5,c:0}, 'gambitas': {k:95,p:20,f:1.5,c:0}, 'langostinos': {k:95,p:20,f:1.5,c:0},
    'sepia': {k:80,p:16,f:1,c:1}, 'anchoas': {k:210,p:29,f:10,c:0}, 'gulas': {k:150,p:12,f:10,c:2},
    'merluza': {k:80,p:17,f:1,c:0}, 'atun_lata': {k:100,p:24,f:1,c:0}, 'salmon': {k:208,p:20,f:13,c:0},
    'costilla': {k:250,p:19,f:19,c:0}, 'carne_picada': {k:220,p:18,f:15,c:0}, 'calamares': {k:175,p:15,f:11,c:2},
    
    // HUEVOS Y LACTEOS
    'huevo': {k:143,p:12.5,f:9.5,c:0.7}, 'claras': {k:52,p:11,f:0.2,c:0.7}, 'tortilla': {k:150,p:11,f:10,c:1},
    'leche': {k:45,p:3,f:1.5,c:5}, 'leche_entera': {k:62,p:3,f:3.5,c:5}, 'yogur': {k:60,p:4.5,f:3,c:4},
    'queso_fresco': {k:70,p:11,f:2,c:3}, 'queso_batido': {k:46,p:8,f:0.1,c:3.5}, 'queso_fundir': {k:300,p:20,f:22,c:1},
    'queso_cabra': {k:360,p:22,f:30,c:0}, 'queso_ricotta': {k:174,p:11,f:13,c:3}, 'mozarella': {k:280,p:18,f:22,c:3},

    // HIDRATOS
    'pan': {k:260,p:8,f:2,c:50}, 'pan_integral': {k:250,p:9,f:3,c:45}, 'pan_molde': {k:260,p:8,f:3,c:48},
    'arroz': {k:360,p:7,f:1,c:78}, 'pasta': {k:350,p:12,f:1.5,c:72}, 'patata': {k:77,p:2,f:0.1,c:17},
    'boniato': {k:86,p:1.6,f:0.1,c:20}, 'avena': {k:370,p:13,f:7,c:60}, 'garbanzos': {k:120,p:7,f:2,c:20},
    'lentejas': {k:115,p:9,f:0.5,c:20}, 'guisantes': {k:81,p:5,f:0.5,c:14}, 'habitas': {k:80,p:6,f:0.5,c:12},
    'biscotes': {k:390,p:10,f:6,c:72}, 'tortitas': {k:380,p:8,f:3,c:80}, 'tortita_trigo': {k:300,p:8,f:5,c:50},
    'fideos': {k:350,p:11,f:1,c:72}, 'cuscus': {k:112,p:3.8,f:0.2,c:23}, 'galletas': {k:450,p:7,f:15,c:70},
    'judias': {k:31,p:1.8,f:0.2,c:7}, 'pizza': {k:266,p:11,f:10,c:33},

    // FRUTAS Y VERDURAS
    'fruta': {k:50,p:0.5,f:0.2,c:12}, 'platano': {k:89,p:1,f:0.3,c:23}, 'manzana': {k:52,p:0.3,f:0.2,c:14},
    'kiwi': {k:61,p:1,f:0.5,c:15}, 'piña': {k:50,p:0.5,f:0.1,c:13}, 'melon': {k:34,p:0.8,f:0.2,c:8},
    'fresas': {k:32,p:0.7,f:0.3,c:8}, 'naranja': {k:47,p:0.9,f:0.1,c:12}, 'pera': {k:57,p:0.4,f:0.1,c:15},
    'mango': {k:60,p:0.8,f:0.4,c:15}, 'arandanos': {k:57,p:0.7,f:0.3,c:14}, 'uvas': {k:67,p:0.6,f:0.4,c:17},
    'membrillo': {k:230,p:0.4,f:0.1,c:55}, 'caqui': {k:70,p:0.6,f:0.2,c:19}, 'papaya': {k:43,p:0.5,f:0.1,c:10},
    'verdura': {k:30,p:2,f:0.2,c:5}, 'tomate': {k:18,p:1,f:0.2,c:4}, 'espinacas': {k:23,p:3,f:0.4,c:3.6},
    'calabacin': {k:17,p:1,f:0.3,c:3}, 'champinones': {k:22,p:3,f:0.3,c:3}, 'zanahoria': {k:41,p:0.9,f:0.2,c:10},
    'rucula': {k:25,p:2.6,f:0.7,c:3.7}, 'canonigos': {k:21,p:2,f:0.4,c:3}, 'pisto': {k:80,p:2,f:5,c:8},
    'esparragos': {k:20,p:2,f:0.1,c:4}, 'calabaza': {k:26,p:1,f:0.1,c:6}, 'pepino': {k:15,p:0.7,f:0.1,c:3},
    'endivias': {k:17,p:1,f:0.2,c:3}, 'berenjena': {k:25,p:1,f:0.2,c:6}, 'ensalada': {k:20,p:1,f:0.2,c:3},

    // GRASAS Y EXTRAS
    'aceite': {k:884,p:0,f:100,c:0}, 'aguacate': {k:160,p:2,f:15,c:9}, 'nueces': {k:654,p:15,f:65,c:14},
    'almendras': {k:579,p:21,f:50,c:22}, 'pistachos': {k:560,p:20,f:45,c:27}, 'anacardos': {k:553,p:18,f:44,c:30},
    'avellanas': {k:628,p:15,f:60,c:17}, 'crema_cacahuete': {k:590,p:25,f:49,c:16}, 'mayonesa': {k:300,p:1,f:30,c:5},
    'aceitunas': {k:115,p:0.8,f:10,c:0}, 'pesto': {k:400,p:5,f:40,c:5}, 'miel': {k:304,p:0,f:0,c:82},
    'cacao': {k:300,p:20,f:10,c:15}, 'gelatina': {k:10,p:1,f:0,c:0}, 'cafe': {k:2,p:0,f:0,c:0},
    'caldo': {k:10,p:0.5,f:0.2,c:1}, 'salsa': {k:80,p:1,f:0,c:20}, 'te': {k:1,p:0,f:0,c:0}, 'mermelada': {k:250,p:0,f:0,c:60}
};

// 3. COLECCIÓN DE PLANES (25 al 5)
window.NUTRI_PLANS = [
    // PLAN 25
    {
        nombre: "8 Junio 2025 (Volumen Alto)",
        dias: {
            "Lunes": {
                "Desayuno": [{k:"pan",n:"Pan",q:120},{k:"huevo",n:"Huevo",q:1},{k:"aguacate",n:"Aguacate",q:60},{k:"cafe",n:"Café",q:1}],
                "Media Mañana": [{k:"fruta",n:"Pieza Fruta",q:1}],
                "Comida": [{k:"garbanzos",n:"Garbanzos",q:300},{k:"pollo",n:"Pollo",q:200},{k:"pisto",n:"Pisto",q:150}],
                "Merienda": [{k:"pan",n:"Pan",q:80},{k:"lomo_embuchado",n:"Lomo",q:25},{k:"nueces",n:"Nueces",q:15}],
                "Cena": [{k:"claras",n:"Revuelto Claras",q:100},{k:"huevo",n:"Huevo",q:2},{k:"yogur",n:"Yogur Griego",q:125},{k:"pan",n:"Pan",q:100}]
            },
            "Martes": {
                "Desayuno": [{k:"pan",n:"Pan",q:80},{k:"fruta",n:"Pieza Fruta",q:1},{k:"lomo_embuchado",n:"Lomo",q:25},{k:"aguacate",n:"Aguacate",q:60},{k:"cafe",n:"Café",q:1}],
                "Media Mañana": [{k:"pan",n:"Pan",q:1}], 
                "Comida": [{k:"pasta",n:"Pasta",q:70},{k:"ternera",n:"Ternera",q:200},{k:"queso_fundir",n:"Queso",q:45}],
                "Merienda": [{k:"tortitas",n:"Tortitas Maíz",q:4},{k:"pavo",n:"Pavo",q:50},{k:"nueces",n:"Nueces",q:15}],
                "Cena": [{k:"calabacin",n:"Calabacín/Cebolla",q:150},{k:"atun_lata",n:"Atún",q:120},{k:"yogur",n:"Yogur Proteico",q:125},{k:"pan",n:"Pan",q:100}]
            },
            "Miércoles": { "Desayuno":[{k:"pan",n:"Pan",q:120},{k:"huevo",n:"Huevo",q:1},{k:"aguacate",n:"Aguacate",q:60}], "Media Mañana":[{k:"fruta",n:"Pieza Fruta",q:1}], "Comida":[{k:"lentejas",n:"Lentejas",q:300},{k:"atun_lata",n:"Atún",q:120},{k:"huevo",n:"Huevo",q:2},{k:"aguacate",n:"Aguacate",q:90}], "Merienda":[{k:"platano",n:"Plátano",q:1},{k:"queso_batido",n:"Queso Batido",q:90},{k:"crema_cacahuete",n:"Crema CC",q:15}], "Cena":[{k:"pollo",n:"Pollo Soja",q:150},{k:"champinones",n:"Champiñones",q:50},{k:"pan",n:"Pan",q:100}] },
            "Jueves": { "Desayuno":[{k:"pan",n:"Pan",q:80},{k:"fruta",n:"Fruta",q:1},{k:"pavo",n:"Pavo",q:50},{k:"aceite",n:"Aceite",q:10}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"salmon",n:"Salmón",q:160}], "Merienda":[{k:"platano",n:"Plátano",q:1},{k:"queso_batido",n:"Queso Batido",q:90},{k:"crema_cacahuete",n:"Crema CC",q:15}], "Cena":[{k:"ternera",n:"Fajita Ternera",q:90},{k:"tortita_trigo",n:"Tortitas",q:2},{k:"verdura",n:"Verduras",q:100},{k:"yogur",n:"Yogur Griego",q:125},{k:"pan",n:"Pan",q:100}] },
            "Viernes": { "Desayuno":[{k:"pan",n:"Pan",q:40},{k:"pavo",n:"Pavo",q:50},{k:"aceite",n:"Aceite",q:10}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"verdura",n:"Revuelto Verduras",q:150},{k:"lomo",n:"Solomillo",q:160}], "Merienda":[{k:"tortitas",n:"Tortitas",q:4},{k:"pavo",n:"Pavo",q:50},{k:"nueces",n:"Nueces",q:15}], "Cena":[{k:"verdura",n:"Ensalada",q:100},{k:"huevo",n:"Huevo",q:1},{k:"atun_lata",n:"Atún",q:60},{k:"aceitunas",n:"Aceitunas",q:15},{k:"pan",n:"Pan",q:100}] },
            "Sábado": { "Desayuno":[{k:"pan",n:"Pan",q:120},{k:"huevo",n:"Huevo",q:1},{k:"aguacate",n:"Aguacate",q:60}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pisto",n:"Pisto",q:100},{k:"cuscus",n:"Cuscús",q:75},{k:"pollo",n:"Pollo",q:200}], "Merienda":[{k:"pan",n:"Pan",q:80},{k:"lomo_embuchado",n:"Lomo",q:25},{k:"nueces",n:"Nueces",q:15}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"claras",n:"Claras",q:100},{k:"espinacas",n:"Espinacas",q:50},{k:"pan",n:"Pan",q:100}] },
            "Domingo": { "Desayuno":[{k:"pan",n:"Pan",q:80},{k:"aceite",n:"Aceite",q:10},{k:"lomo_embuchado",n:"Lomo",q:25}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"burger_pollo_90",n:"Hamburguesa",q:200}], "Merienda":[{k:"tortitas",n:"Tortitas",q:4},{k:"pavo",n:"Pavo",q:50},{k:"nueces",n:"Nueces",q:15}], "Cena":[{k:"salmon",n:"Salmón",q:120},{k:"pisto",n:"Pisto",q:100},{k:"pan",n:"Pan",q:100}] }
        }
    },
    // PLAN 24
    {
        nombre: "9-22 Junio 2025",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70},{k:"jamon_cocido",n:"Jamón",q:30},{k:"aceite",n:"Aceite",q:10},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}],
                "Media Mañana":[{k:"pan_molde",n:"Tostada Integral",q:90},{k:"jamon_serrano",n:"Jamón",q:45}],
                "Comida":[{k:"lentejas",n:"Lentejas Setas",q:175},{k:"champinones",n:"Setas",q:50},{k:"pollo",n:"Pollo",q:150},{k:"tomate",n:"Tomate",q:50},{k:"fresas",n:"Fresas",q:150}],
                "Merienda":[{k:"fresas",n:"Fresas",q:150},{k:"yogur",n:"Yogur",q:125}],
                "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"claras",n:"Claras",q:70},{k:"espinacas",n:"Espinacas",q:70},{k:"queso_fresco",n:"Queso",q:60},{k:"manzana",n:"Manzana",q:1}]
            },
            "Martes": { 
                "Desayuno":[{k:"leche",n:"Leche Calcio",q:150},{k:"pan_integral",n:"Pan",q:40},{k:"tomate",n:"Tomate",q:30},{k:"jamon_serrano",n:"Jamón",q:15},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}],
                "Media Mañana":[{k:"queso_batido",n:"Queso Batido",q:120},{k:"avellanas",n:"Avellanas",q:15},{k:"fresas",n:"Fresas",q:120}],
                "Comida":[{k:"pasta",n:"Espaguetis",q:40},{k:"salmon",n:"Salmón",q:170},{k:"canonigos",n:"Canónigos",q:50},{k:"manzana",n:"Manzana",q:1}],
                "Merienda":[{k:"fresas",n:"Fresas",q:150},{k:"yogur",n:"Yogur",q:125}],
                "Cena":[{k:"burger_pollo_90",n:"Hamburguesa",q:130},{k:"pisto",n:"Pisto",q:100},{k:"platano",n:"Plátano",q:1}]
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70},{k:"aguacate",n:"Aguacate",q:50}], "Media Mañana":[{k:"pan_molde",n:"Tostada",q:90},{k:"aguacate",n:"Aguacate",q:75}], "Comida":[{k:"lentejas",n:"Lentejas",q:80},{k:"pavo",n:"Pavo",q:200}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"atun_lata",n:"Atun",q:100}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:125},{k:"platano",n:"Platano",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:40},{k:"hamburguesa_ternera",n:"Hamburguesa",q:130}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"claras",n:"Claras",q:35}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan_molde",n:"Tostada",q:90}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"salmon",n:"Salmon",q:75}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"pollo",n:"Pollo",q:100}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"yogur",n:"Yogur",q:250},{k:"nueces",n:"Nueces",q:10}], "Comida":[{k:"guisantes",n:"Guisantes",q:150},{k:"gambas",n:"Gambas",q:100},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"pavo",n:"Pavo",q:125}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan_molde",n:"Tostada",q:90}], "Comida":[{k:"pasta",n:"Pasta",q:40},{k:"atun_lata",n:"Atun",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"salmon",n:"Salmon",q:120}] }
        }
    },
    // PLAN 23
    {
        nombre: "19 Mayo - 1 Junio 2025",
        dias: {
             "Lunes": { "Desayuno":[{k:"leche",n:"Leche Entera",q:150},{k:"pan",n:"Pan Integral",q:40},{k:"aguacate",n:"Aguacate",q:25},{k:"pavo",n:"Pavo",q:15},{k:"platano",n:"Plátano",q:1}], "Media Mañana":[{k:"pan_molde",n:"Tostada Molde",q:90},{k:"lomo_embuchado",n:"Lomo",q:40}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"espinacas",n:"Espinacas",q:50},{k:"patata",n:"Patata",q:50},{k:"pollo",n:"Pollo",q:120}], "Merienda":[{k:"queso_batido",n:"Queso Batido",q:240},{k:"nueces",n:"Nueces",q:15},{k:"manzana",n:"Manzana",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"champinones",n:"Champiñón",q:50},{k:"jamon_cocido",n:"Jamón",q:30},{k:"fresas",n:"Fresas",q:150}] },
             "Martes": { "Desayuno":[{k:"leche",n:"Leche Entera",q:150},{k:"pan",n:"Pan Barra",q:70},{k:"lomo_embuchado",n:"Lomo",q:30}], "Media Mañana":[{k:"yogur",n:"Yogur Natural",q:250},{k:"avellanas",n:"Avellanas",q:25}], "Comida":[{k:"pasta",n:"Espaguetis",q:60},{k:"burger_pollo_90",n:"Hamburguesa",q:130},{k:"pisto",n:"Pisto",q:100}], "Merienda":[{k:"fresas",n:"Fresas",q:150},{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"hamburguesa_ternera",n:"Hamburguesa",q:130},{k:"esparragos",n:"Espárragos",q:100},{k:"kiwi",n:"Kiwi",q:1}] },
             "Miércoles": { "Desayuno":[{k:"leche",n:"Leche Entera",q:150},{k:"pan",n:"Pan Integral",q:40},{k:"aguacate",n:"Aguacate",q:25},{k:"pavo",n:"Pavo",q:15},{k:"platano",n:"Plátano",q:1}], "Media Mañana":[{k:"pan_molde",n:"Tostada Molde",q:90},{k:"aguacate",n:"Aguacate",q:75},{k:"jamon_cocido",n:"Jamón",q:45}], "Comida":[{k:"lentejas",n:"Lentejas",q:250},{k:"pollo",n:"Pollo",q:120},{k:"cebolla",n:"Cebolleta",q:30},{k:"tomate",n:"Tomate",q:50}], "Merienda":[{k:"fresas",n:"Fresas",q:150},{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"pavo",n:"Pavo",q:100},{k:"tomate",n:"Tomate",q:50},{k:"lechuga",n:"Lechuga",q:50},{k:"manzana",n:"Manzana",q:1}] },
             "Jueves": { "Desayuno":[{k:"leche",n:"Leche Desnatada",q:225},{k:"pan",n:"Pan Barra",q:70},{k:"aguacate",n:"Aguacate",q:50},{k:"jamon_cocido",n:"Jamón",q:30},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}], "Media Mañana":[{k:"yogur",n:"Yogur",q:125},{k:"platano",n:"Plátano",q:1},{k:"nueces",n:"Frutos Secos",q:30}], "Comida":[{k:"pasta",n:"Macarrones",q:40},{k:"jamon_cocido",n:"Jamón",q:20},{k:"hamburguesa_ternera",n:"Hamburguesa",q:130},{k:"lechuga",n:"Lechuga",q:50},{k:"tomate",n:"Tomate",q:50},{k:"manzana",n:"Manzana",q:1}], "Merienda":[{k:"yogur",n:"Yogur",q:125},{k:"almendras",n:"Almendras",q:15},{k:"fresas",n:"Fresas",q:100}], "Cena":[{k:"huevo",n:"Huevo",q:1},{k:"claras",n:"Claras",q:35},{k:"piña",n:"Piña",q:1}] },
             "Viernes": { "Desayuno":[{k:"leche",n:"Leche Entera",q:225},{k:"pan",n:"Pan Integral",q:70},{k:"aguacate",n:"Aguacate",q:50},{k:"pavo",n:"Pavo",q:30},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}], "Media Mañana":[{k:"pan_molde",n:"Tostada Molde",q:90},{k:"aguacate",n:"Aguacate",q:75},{k:"pavo",n:"Pavo",q:45}], "Comida":[{k:"arroz",n:"Arroz Integral",q:70},{k:"salmon",n:"Salmón",q:75},{k:"manzana",n:"Manzana",q:1}], "Merienda":[{k:"yogur",n:"Yogur",q:125},{k:"fresas",n:"Fresas",q:100},{k:"nueces",n:"Frutos Secos",q:30}], "Cena":[{k:"pollo",n:"Pollo",q:85},{k:"boniato",n:"Boniato",q:150},{k:"mango",n:"Mango",q:1}] },
             "Sábado": { "Desayuno":[{k:"leche",n:"Leche Entera",q:225},{k:"pan",n:"Pan Barra",q:100},{k:"tomate",n:"Tomate",q:75},{k:"jamon_serrano",n:"Jamón",q:45},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}], "Media Mañana":[{k:"yogur",n:"Yogur Desn.",q:250},{k:"nueces",n:"Nueces",q:10}], "Comida":[{k:"guisantes",n:"Guisantes",q:150},{k:"gambitas",n:"Gambitas",q:100},{k:"ternera",n:"Filete Ternera",q:150},{k:"tomate",n:"Tomate",q:50},{k:"manzana",n:"Manzana",q:1}], "Merienda":[{k:"yogur",n:"Yogur Calcio",q:125},{k:"anacardos",n:"Anacardos",q:20}], "Cena":[{k:"pavo",n:"Pechuga Pavo",q:125},{k:"tomate",n:"Tomate Asado",q:100},{k:"piña",n:"Piña",q:1}] },
             "Domingo": { "Desayuno":[{k:"leche",n:"Leche Entera",q:225},{k:"pan_integral",n:"Pan Integral",q:70},{k:"aguacate",n:"Aguacate",q:50},{k:"pavo",n:"Pavo",q:30},{k:"platano",n:"Plátano",q:1},{k:"almendras",n:"Almendras",q:15}], "Media Mañana":[{k:"pan_molde",n:"Tostada Molde",q:90},{k:"aguacate",n:"Aguacate",q:75},{k:"pavo",n:"Pavo",q:45}], "Comida":[{k:"pasta",n:"Macarrones",q:40},{k:"atun_lata",n:"Atún",q:100},{k:"endivias",n:"Endivias",q:50},{k:"anchoas",n:"Anchoas",q:20},{k:"fresas",n:"Fresas",q:150}], "Merienda":[{k:"fresas",n:"Fresas",q:150},{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"salmon",n:"Salmón",q:120},{k:"zanahoria",n:"Zanahoria",q:50},{k:"verdura",n:"Maíz",q:30},{k:"pera",n:"Pera",q:1}] }
        }
    },
    // PLAN 22
    {
        nombre: "5-18 Mayo 2025 (Volumen)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Entera",q:225},{k:"pan",n:"Pan Molde",q:60},{k:"jamon_cocido",n:"Jamón",q:70}], 
                "Media Mañana":[{k:"platano",n:"Plátano",q:1},{k:"yogur",n:"Yogur",q:1}], 
                "Comida":[{k:"garbanzos",n:"Garbanzos",q:175},{k:"pollo",n:"Pollo",q:180},{k:"espinacas",n:"Espinacas",q:50},{k:"patata",n:"Patata",q:50}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1},{k:"pan",n:"Pan",q:70},{k:"pavo",n:"Pavo",q:30}], 
                "Cena":[{k:"atun_lata",n:"Revuelto Atún",q:82},{k:"huevo",n:"Huevo",q:1},{k:"claras",n:"Claras",q:70},{k:"tomate",n:"Tomate",q:50}] 
            },
            "Martes": { 
                "Desayuno":[{k:"leche",n:"Leche Entera",q:225},{k:"pan",n:"Pan Barra",q:70},{k:"huevo",n:"Huevo",q:1}], 
                "Media Mañana":[{k:"pan",n:"Tostada",q:60},{k:"jamon_serrano",n:"Jamón",q:30},{k:"aguacate",n:"Aguacate",q:50}], 
                "Comida":[{k:"pasta",n:"Pasta",q:60},{k:"salmon",n:"Salmón",q:170},{k:"canonigos",n:"Canónigos",q:50}], 
                "Merienda":[{k:"pan",n:"Tostada",q:40},{k:"queso_fresco",n:"Queso",q:35},{k:"membrillo",n:"Membrillo",q:20}], 
                "Cena":[{k:"burger_pollo_90",n:"Hamburguesa",q:150},{k:"verdura",n:"Brócoli",q:50},{k:"kiwi",n:"Kiwi",q:1}] 
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"lentejas",n:"Lentejas",q:175},{k:"pollo",n:"Pollo",q:180}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Pan",q:40}], "Cena":[{k:"merluza",n:"Merluza",q:150},{k:"patata",n:"Patata",q:100}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:70},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"jamon_cocido",n:"Jamón",q:50}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:50}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Paella",q:80},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] }
        }
    },
    // PLAN 21
    {
        nombre: "12-27 Abril 2025 (Corte)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"yogur",n:"Yogur Desnatado",q:125},{k:"pan_molde",n:"Pan Molde",q:60},{k:"jamon_serrano",n:"Jamón",q:30},{k:"cafe",n:"Café",q:1},{k:"fresas",n:"Fresas",q:150}], 
                "Media Mañana":[{k:"almendras",n:"Almendras",q:15},{k:"biscotes",n:"Biscotes",q:27},{k:"jamon_cocido",n:"Jamón",q:30},{k:"queso_fresco",n:"Queso",q:30}], 
                "Comida":[{k:"lentejas",n:"Ensalada Lentejas",q:100},{k:"pollo",n:"Pollo",q:120},{k:"tomate",n:"Tomate",q:45},{k:"aceitunas",n:"Aceitunas",q:15},{k:"aguacate",n:"Aguacate",q:50}], 
                "Merienda":[{k:"yogur",n:"Yogur Desn.",q:125},{k:"tortita_trigo",n:"Enrollado Lomo",q:80},{k:"lomo_embuchado",n:"Lomo",q:60},{k:"aguacate",n:"Guacamole",q:40}], 
                "Cena":[{k:"huevo",n:"Tortilla Espinacas",q:1},{k:"claras",n:"Claras",q:70},{k:"espinacas",n:"Espinacas",q:75},{k:"fresas",n:"Fresas",q:150}] 
            },
            "Martes": { 
                "Desayuno":[{k:"yogur",n:"Bol Yogur Fresas",q:125},{k:"fresas",n:"Fresas",q:150},{k:"nueces",n:"Frutos Secos",q:30},{k:"cafe",n:"Café",q:1}], 
                "Media Mañana":[{k:"platano",n:"Plátano",q:1},{k:"yogur",n:"Yogur Desn.",q:125},{k:"nueces",n:"Nueces",q:10}], 
                "Comida":[{k:"arroz",n:"Arroz Atún",q:40},{k:"atun_lata",n:"Atún",q:35},{k:"salmon",n:"Salmón Zanahoria",q:170},{k:"zanahoria",n:"Zanahoria",q:50}], 
                "Merienda":[{k:"yogur",n:"Yogur Proteico",q:125},{k:"tortita_trigo",n:"Enrollado Pavo",q:40},{k:"pavo",n:"Pavo",q:40},{k:"aguacate",n:"Guacamole",q:30},{k:"fresas",n:"Fresas",q:150}], 
                "Cena":[{k:"huevo",n:"Tortilla Espárragos",q:1},{k:"claras",n:"Claras",q:70},{k:"esparragos",n:"Espárragos",q:75},{k:"manzana",n:"Manzana",q:1}] 
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Tostada",q:70}], "Media Mañana":[{k:"biscotes",n:"Biscotes",q:70}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"pollo",n:"Pollo",q:120}], "Merienda":[{k:"pan_molde",n:"Sandwich",q:60}], "Cena":[{k:"bacalao",n:"Bacalao",q:150}] },
            "Jueves": { "Desayuno":[{k:"pan",n:"Tostada Huevo",q:70},{k:"huevo",n:"Huevo",q:1}], "Media Mañana":[{k:"pan",n:"Tostada",q:70}], "Comida":[{k:"arroz",n:"Ensalada Arroz",q:70},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"pan_molde",n:"Tostada",q:30}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"yogur",n:"Bol Yogur",q:125}], "Media Mañana":[{k:"pan",n:"Tostada",q:70}], "Comida":[{k:"pasta",n:"Espaguetis",q:60}], "Merienda":[{k:"pan_molde",n:"Sandwich",q:60}], "Cena":[{k:"pollo",n:"Pollo",q:100}] },
            "Sábado": { "Desayuno":[{k:"pan",n:"Tostada",q:70},{k:"aguacate",n:"Aguacate",q:50}], "Media Mañana":[{k:"yogur",n:"Yogur",q:250}], "Comida":[{k:"lentejas",n:"Lentejas",q:90},{k:"lomo",n:"Solomillo",q:200}], "Merienda":[{k:"tortita_trigo",n:"Enrollado",q:40}], "Cena":[{k:"pavo",n:"Pavo",q:100}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"avena",n:"Porridge",q:30}], "Media Mañana":[{k:"biscotes",n:"Biscotes",q:36}], "Comida":[{k:"arroz",n:"Arroz Surimi",q:40},{k:"surimi",n:"Surimi",q:50}], "Merienda":[{k:"claras",n:"Bollito Fit",q:105}], "Cena":[{k:"atun_lata",n:"Atún",q:55}] }
        }
    },
    // PLAN 20
    {
        nombre: "1-13 Abril 2025 (Volumen)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:150},{k:"pan",n:"Pan Barra",q:125},{k:"jamon_cocido",n:"Jamón",q:60}], 
                "Media Mañana":[{k:"pan",n:"Sandwich Pavo",q:30},{k:"lomo_embuchado",n:"Lomo",q:20},{k:"aguacate",n:"Aguacate",q:25}], 
                "Comida":[{k:"lentejas",n:"Lentejas Curry",q:175},{k:"arroz",n:"Arroz Basmati",q:80},{k:"pollo",n:"Pollo",q:150},{k:"calabacin",n:"Calabacín",q:100}], 
                "Merienda":[{k:"yogur",n:"Yogur Cacao",q:125},{k:"cacao",n:"Cacao",q:5},{k:"pan",n:"Tostada Pavo",q:90},{k:"pavo",n:"Pavo",q:75}], 
                "Cena":[{k:"claras",n:"Claras",q:70},{k:"atun_lata",n:"Atún",q:82},{k:"fresas",n:"Fresas",q:150}] 
            },
            "Martes": { 
                "Desayuno":[{k:"cafe",n:"Café",q:1},{k:"kiwi",n:"Kiwi",q:100},{k:"nueces",n:"Nueces",q:15},{k:"leche_entera",n:"Leche Entera",q:225},{k:"pan",n:"Pan",q:70},{k:"huevo",n:"Huevos",q:60}], 
                "Media Mañana":[{k:"pan",n:"Tostada Lomo",q:60},{k:"lomo_embuchado",n:"Lomo",q:30}], 
                "Comida":[{k:"pasta",n:"Macarrones Queso",q:80},{k:"queso_fundir",n:"Parmesano",q:20},{k:"hamburguesa_ternera",n:"Hamburguesa",q:150},{k:"tomate",n:"Tomate",q:50}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:125},{k:"aguacate",n:"Aguacate",q:75},{k:"pan",n:"Pan",q:100},{k:"queso_fresco",n:"Queso",q:110}], 
                "Cena":[{k:"huevo",n:"Huevo",q:2},{k:"champinones",n:"Setas",q:100},{k:"jamon_serrano",n:"Jamón",q:30},{k:"fresas",n:"Fresas",q:150}] 
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Porridge",q:225}], "Media Mañana":[{k:"pan",n:"Sandwich",q:60}], "Comida":[{k:"guisantes",n:"Guisantes",q:95},{k:"patata",n:"Patata",q:75}], "Merienda":[{k:"pan",n:"Tostada",q:100}], "Cena":[{k:"piña",n:"Piña",q:150}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:150}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"arroz",n:"Arroz",q:70}], "Merienda":[{k:"queso_batido",n:"Queso",q:125}], "Cena":[{k:"huevo",n:"Revuelto",q:2}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:150}], "Media Mañana":[{k:"pan_molde",n:"Sandwich",q:60}], "Comida":[{k:"pasta",n:"Macarrones",q:80}], "Merienda":[{k:"pan",n:"Tostada",q:120}], "Cena":[{k:"pollo",n:"Pollo",q:200}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:150}], "Media Mañana":[{k:"pan_molde",n:"Tostada",q:60}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150}], "Merienda":[{k:"huevo",n:"Huevo",q:2}], "Cena":[{k:"lomo",n:"Lomo",q:200}] },
            "Domingo": { "Desayuno":[{k:"yogur",n:"Yogur",q:125}], "Media Mañana":[{k:"pan",n:"Sandwich",q:60}], "Comida":[{k:"pasta",n:"Macarrones",q:80}], "Merienda":[{k:"pan",n:"Tostada",q:120}], "Cena":[{k:"atun_lata",n:"Revuelto",q:82}] }
        }
    },
    // PLAN 19
    {
        nombre: "17-31 Marzo 2025 (Mantenimiento Alto)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:400},{k:"pan",n:"Pan Barra",q:125},{k:"lomo_embuchado",n:"Lomo",q:60},{k:"yogur",n:"Yogur",q:125},{k:"nueces",n:"Nueces",q:10},{k:"kiwi",n:"Kiwi",q:1},{k:"tomate",n:"Tomate",q:90}], 
                "Media Mañana":[{k:"pan",n:"Bocadillo Pavo",q:100},{k:"pavo",n:"Pavo",q:150},{k:"tomate",n:"Tomate",q:45},{k:"kiwi",n:"Kiwi",q:1},{k:"nueces",n:"Nueces",q:5}], 
                "Comida":[{k:"lentejas",n:"Lentejas Setas",q:275},{k:"pollo",n:"Solomillo Pollo",q:240},{k:"pepino",n:"Pepino",q:50},{k:"calabaza",n:"Calabaza",q:100}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:125},{k:"fresas",n:"Fresas",q:150},{k:"pan_molde",n:"Tostada Jamón",q:60},{k:"jamon_cocido",n:"Jamón",q:30}], 
                "Cena":[{k:"espinacas",n:"Revuelto Espinacas",q:75},{k:"atun_lata",n:"Atún",q:55},{k:"queso_batido",n:"Queso Batido",q:120}] 
            },
            "Martes": { 
                "Desayuno":[{k:"leche_entera",n:"Leche Entera",q:150},{k:"pan",n:"Pan Barra",q:125},{k:"aguacate",n:"Aguacate",q:100},{k:"jamon_cocido",n:"Jamón",q:60}], 
                "Media Mañana":[{k:"pan",n:"Bocadillo Tortilla",q:100},{k:"tortilla",n:"Tortilla",q:1},{k:"aguacate",n:"Aguacate",q:75}], 
                "Comida":[{k:"arroz",n:"Arroz Espinacas",q:70},{k:"huevo",n:"Huevo Escalfado",q:1},{k:"salmon",n:"Salmón",q:220}], 
                "Merienda":[{k:"pan",n:"Tostada Pavo",q:40},{k:"pavo",n:"Pavo",q:30}], 
                "Cena":[{k:"hamburguesa_ternera",n:"Hamburguesa",q:130},{k:"esparragos",n:"Espárragos",q:50},{k:"queso_batido",n:"Queso Batido",q:120}] 
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Porridge",q:225}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:100}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100}], "Merienda":[{k:"pan_molde",n:"Tostada",q:30}], "Cena":[{k:"espinacas",n:"Tortilla Espinacas",q:35}] },
            "Jueves": { "Desayuno":[{k:"pan",n:"Tostada",q:100}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:100}], "Comida":[{k:"arroz",n:"Arroz",q:40}], "Merienda":[{k:"biscotes",n:"Biscotes",q:18}], "Cena":[{k:"huevo",n:"Huevos",q:1}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:150}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:70}], "Comida":[{k:"pasta",n:"Macarrones",q:100}], "Merienda":[{k:"pan_molde",n:"Sandwich",q:60}], "Cena":[{k:"pollo",n:"Pechuga Pollo",q:100}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:300}], "Media Mañana":[{k:"garbanzos",n:"Garbanzos",q:225}], "Comida":[{k:"yogur",n:"Yogur Avena",q:125}], "Merienda":[{k:"pan",n:"Bocadillo",q:70}], "Cena":[{k:"lomo",n:"Solomillo",q:120}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Porridge",q:225}], "Media Mañana":[{k:"pasta",n:"Macarrones",q:100}], "Comida":[{k:"tortita_trigo",n:"Enrollado",q:2}], "Merienda":[{k:"pan",n:"Bocadillo",q:70}], "Cena":[{k:"calabacin",n:"Tortilla Calabacín",q:105}] }
        }
    },
    // PLAN 18
    {
        nombre: "3-16 Marzo 2025",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:400},{k:"pan",n:"Pan Barra",q:125},{k:"tomate",n:"Tomate",q:90},{k:"lomo_embuchado",n:"Lomo",q:60}], 
                "Media Mañana":[{k:"pan",n:"Bocadillo",q:70},{k:"pavo",n:"Pavo",q:100}], 
                "Comida":[{k:"lentejas",n:"Lentejas",q:150},{k:"pollo",n:"Pollo",q:200}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1},{k:"pan",n:"Tostada",q:60}], 
                "Cena":[{k:"atun_lata",n:"Atún",q:82},{k:"huevo",n:"Huevo",q:1}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100},{k:"jamon_cocido",n:"Jamón",q:45}], "Media Mañana":[{k:"platano",n:"Plátano",q:1},{k:"nueces",n:"Nueces",q:15}], "Comida":[{k:"pasta",n:"Pasta",q:80},{k:"salmon",n:"Salmón",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:125}], "Cena":[{k:"hamburguesa",n:"Hamburguesa",q:130}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:60}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Pan",q:40}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"pavo",n:"Pavo",q:50}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:70},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pollo",n:"Pollo",q:150}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:50}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Paella",q:80},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] }
        }
    },
    // PLAN 17
    {
        nombre: "16 Feb - 2 Mar (Volumen Alto)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:400},{k:"pan",n:"Pan Barra",q:125},{k:"jamon_cocido",n:"Jamón",q:60}], 
                "Media Mañana":[{k:"pan",n:"Bocadillo Pavo",q:100},{k:"pavo",n:"Pavo",q:150}], 
                "Comida":[{k:"lentejas",n:"Lentejas",q:150},{k:"pollo",n:"Pollo",q:200}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1},{k:"pan",n:"Tostada",q:90}], 
                "Cena":[{k:"atun_lata",n:"Atún",q:82},{k:"huevo",n:"Huevo",q:1}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:80}], "Comida":[{k:"pasta",n:"Pasta",q:100},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150},{k:"pollo",n:"Pollo",q:180}], "Merienda":[{k:"pan",n:"Bocadillo",q:60}], "Cena":[{k:"huevo",n:"Tortilla",q:2}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:80}], "Comida":[{k:"arroz",n:"Arroz",q:80},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:100},{k:"salmon",n:"Salmon",q:150}], "Merienda":[{k:"pan",n:"Bocadillo",q:60}], "Cena":[{k:"pollo",n:"Pollo",q:150}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:80}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"arroz",n:"Paella",q:100},{k:"gambas",n:"Gambas",q:120}], "Merienda":[{k:"pan",n:"Bocadillo",q:60}], "Cena":[{k:"atun_lata",n:"Atún",q:100}] }
        }
    },
    // PLAN 16
    {
        nombre: "3-16 Febrero 2025 (Mantenimiento)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan Barra",q:125},{k:"jamon_cocido",n:"Jamón",q:60}], 
                "Media Mañana":[{k:"pan",n:"Bocadillo Pavo",q:70},{k:"pavo",n:"Pavo",q:30},{k:"aguacate",n:"Aguacate",q:50},{k:"kiwi",n:"Kiwi",q:80}], 
                "Comida":[{k:"lentejas",n:"Lentejas",q:100},{k:"arroz",n:"Arroz",q:20},{k:"patata",n:"Patata",q:50},{k:"burger_pollo_90",n:"Hamburguesa",q:180}], 
                "Merienda":[{k:"piña",n:"Piña",q:150},{k:"yogur",n:"Yogur",q:125},{k:"pan_molde",n:"Tostada Lomo",q:90},{k:"lomo_embuchado",n:"Lomo",q:40}], 
                "Cena":[{k:"espinacas",n:"Espinacas",q:105},{k:"huevo",n:"Huevo",q:2},{k:"queso_fresco",n:"Queso",q:75}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan_integral",n:"Bocadillo Tortilla",q:70},{k:"tortilla",n:"Tortilla",q:1}], "Comida":[{k:"pasta",n:"Espaguetis",q:40},{k:"ternera",n:"Ternera",q:130}], "Merienda":[{k:"pan_molde",n:"Tostada",q:60}], "Cena":[{k:"atun_lata",n:"Atun",q:100},{k:"berenjena",n:"Berenjena",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"pan_integral",n:"Bocadillo",q:70}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:175},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"pollo",n:"Brochetas",q:120}], "Cena":[{k:"atun_lata",n:"Tortilla Atun",q:35},{k:"huevo",n:"Huevo",q:2}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan_integral",n:"Bocadillo",q:70}], "Comida":[{k:"calabaza",n:"Calabaza",q:200},{k:"arroz",n:"Arroz",q:40},{k:"huevo",n:"Huevo",q:1}], "Merienda":[{k:"salmon",n:"Salmon",q:120},{k:"pan_molde",n:"Tostada",q:60}], "Cena":[{k:"pollo",n:"Revuelto Pollo",q:70}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan_integral",n:"Pan",q:100}], "Media Mañana":[{k:"yogur",n:"Yogur Piña",q:125}], "Comida":[{k:"pasta",n:"Lasaña (aprox)",q:250}], "Merienda":[{k:"pavo",n:"Pavo Patata",q:125},{k:"patata",n:"Patata",q:100}], "Cena":[{k:"yogur",n:"Yogur",q:125}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan_integral",n:"Pan",q:70}], "Media Mañana":[{k:"pan_integral",n:"Bocadillo",q:70}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100},{k:"champinones",n:"Setas",q:100}], "Merienda":[{k:"lomo_embuchado",n:"Lomo Patatas",q:180},{k:"patata",n:"Patata",q:100}], "Cena":[{k:"hamburguesa_ternera",n:"Hamburguesa",q:130}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan_integral",n:"Bocadillo",q:70}], "Comida":[{k:"arroz",n:"Wok Arroz",q:40},{k:"ternera",n:"Ternera",q:50}], "Merienda":[{k:"yogur",n:"Yogur Avena",q:250},{k:"avena",n:"Avena",q:30},{k:"cacao",n:"Choco",q:20}], "Cena":[{k:"salmon",n:"Salmon",q:120}] }
        }
    },
    // PLAN 15
    {
        nombre: "20 Ene - 2 Feb 2025 (Carga Cíclica)",
        dias: {
            "Lunes": {
                "Desayuno": [{k:"leche",n:"Leche Desn.",q:400},{k:"pan",n:"Pan Barra",q:125},{k:"tomate",n:"Tomate",q:90},{k:"aceite",n:"Aceite",q:15}],
                "Media Mañana": [{k:"arroz",n:"Arroz",q:70},{k:"atun_lata",n:"Atún",q:55}],
                "Comida": [{k:"lentejas",n:"Lentejas",q:100},{k:"ternera",n:"Solomillo Ternera",q:150},{k:"queso_cabra",n:"Queso Cabra",q:20},{k:"nueces",n:"Nueces",q:15}],
                "Merienda": [{k:"pan",n:"Pan",q:100},{k:"pavo",n:"Pavo",q:45},{k:"yogur",n:"Yogur Natural",q:250}],
                "Cena": [{k:"champinones",n:"Revuelto Champi",q:150},{k:"huevo",n:"Huevo",q:2},{k:"piña",n:"Piña",q:100}]
            },
            "Martes": {
                "Desayuno": [{k:"leche_entera",n:"Leche Entera",q:150},{k:"pan",n:"Pan",q:100},{k:"jamon_cocido",n:"Jamón",q:45},{k:"queso_fresco",n:"Queso 0%",q:110}],
                "Media Mañana": [{k:"tortita_trigo",n:"Enrollado Pavo",q:80},{k:"pavo",n:"Pavo",q:80},{k:"verdura",n:"Lechuga",q:20}],
                "Comida": [{k:"fideos",n:"Sopa",q:40},{k:"pollo",n:"Pollo Limón",q:270}],
                "Merienda": [{k:"pan_integral",n:"Tostada Integral",q:90},{k:"pavo",n:"Pavo",q:45},{k:"yogur",n:"Yogur Cacao",q:125},{k:"crema_cacahuete",n:"Crema CC",q:10}],
                "Cena": [{k:"atun_lata",n:"Tortilla Atún",q:60},{k:"huevo",n:"Huevo",q:1},{k:"piña",n:"Piña",q:100}]
            },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:400},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"arroz",n:"Arroz Atun",q:70}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"pollo",n:"Pollo",q:100}], "Merienda":[{k:"pan",n:"Pan",q:90}], "Cena":[{k:"burger_pollo_90",n:"Hamburguesa",q:90}] },
            "Jueves": { "Desayuno":[{k:"leche_entera",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"tortita_trigo",n:"Enrollado",q:80}], "Comida":[{k:"pasta",n:"Pasta",q:40},{k:"atun_lata",n:"Atun",q:80}], "Merienda":[{k:"pan_integral",n:"Tostada",q:90}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"pavo",n:"Pavo",q:40}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan_integral",n:"Pan",q:100}], "Media Mañana":[{k:"arroz",n:"Arroz",q:70}], "Comida":[{k:"arroz",n:"Arroz Salmon",q:40},{k:"salmon",n:"Salmon",q:50}], "Merienda":[{k:"pan",n:"Pan",q:120}], "Cena":[{k:"pollo",n:"Pollo",q:180}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"tortita_trigo",n:"Enrollado",q:80}], "Comida":[{k:"lentejas",n:"Lentejas",q:120},{k:"pollo",n:"Pollo",q:100}], "Merienda":[{k:"pan",n:"Pan",q:90}], "Cena":[{k:"lomo",n:"Lomo",q:100}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:400},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"arroz",n:"Arroz",q:70}], "Comida":[{k:"arroz",n:"Arroz Surimi",q:40},{k:"ternera",n:"Guiso",q:100}], "Merienda":[{k:"pan",n:"Pan",q:90}], "Cena":[{k:"boniato",n:"Tortilla Boniato",q:70},{k:"huevo",n:"Huevo",q:1}] }
        }
    },
    // PLAN 14
    {
        nombre: "12-26 Enero 2025 (Práctico)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:300},{k:"pan",n:"Pan Barra",q:70},{k:"tomate",n:"Tomate",q:90},{k:"aceite",n:"Aceite",q:10}], 
                "Media Mañana":[{k:"fruta",n:"Pieza Fruta",q:1}], 
                "Comida":[{k:"pan",n:"Bocadillo",q:40},{k:"tortilla",n:"Tortilla Francesa",q:1},{k:"tomate",n:"Tomate",q:50}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1}], 
                "Cena":[{k:"pavo",n:"Pavo",q:100},{k:"esparragos",n:"Espárragos",q:100}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:60},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"hamburguesa",n:"Hamburguesa",q:130}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"lentejas",n:"Lentejas",q:100},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"jamon_cocido",n:"Jamón",q:50}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:60}], "Media Mañana":[{k:"pan",n:"Bocadillo",q:50}], "Comida":[{k:"arroz",n:"Paella",q:80},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"fideos",n:"Sopa",q:60},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"atun_lata",n:"Atún",q:85}] }
        }
    },
    // PLAN 13
    {
        nombre: "Plan 13 - Alta Proteína",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche Desnatada",q:225},{k:"pan",n:"Pan Barra",q:70},{k:"pavo",n:"Pavo",q:30}], 
                "Media Mañana":[{k:"fruta",n:"Pieza Fruta",q:1},{k:"nueces",n:"Nueces",q:10}], 
                "Comida":[{k:"pavo",n:"Pavo Plancha",q:130},{k:"arroz",n:"Arroz",q:50},{k:"verdura",n:"Verdura",q:150}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1},{k:"biscotes",n:"Biscotes",q:18}], 
                "Cena":[{k:"atun_lata",n:"Atún",q:150},{k:"tomate",n:"Tomate",q:100}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:40},{k:"lomo_embuchado",n:"Lomo",q:20}], "Comida":[{k:"lentejas",n:"Lentejas",q:100},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"huevo",n:"Huevo",q:2},{k:"jamon_serrano",n:"Jamón",q:30}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"ternera",n:"Ternera",q:150},{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"merluza",n:"Merluza",q:180}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pollo",n:"Pollo",q:150}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100},{k:"bacalao",n:"Bacalao",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"tortilla",n:"Tortilla",q:1},{k:"queso_fresco",n:"Queso",q:50}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Paella",q:80},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"hamburguesa_ternera",n:"Hamburguesa",q:150},{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] }
        }
    },
    // PLAN 12
    {
        nombre: "17 Dic - 1 Ene 2024 (Navidad)",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100},{k:"mermelada",n:"Mermelada",q:15}], 
                "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], 
                "Comida":[{k:"guisantes",n:"Guisantes",q:200},{k:"pollo",n:"Pollo",q:150},{k:"patata",n:"Patata",q:100}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1}], 
                "Cena":[{k:"hamburguesa_ternera",n:"Hamburguesa",q:200},{k:"ensalada",n:"Ensalada",q:100}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:80},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:2},{k:"jamon_serrano",n:"Jamón",q:40}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"pan",n:"Tostada",q:50}], "Comida":[{k:"lentejas",n:"Lentejas",q:150},{k:"arroz",n:"Arroz",q:50}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"judias",n:"Judías Verdes",q:200},{k:"ternera",n:"Ternera",q:150},{k:"patata",n:"Patata",q:100}], "Merienda":[{k:"pan",n:"Tostada",q:50}], "Cena":[{k:"pollo",n:"Pollo",q:150}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:80},{k:"calamares",n:"Calamares",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"pizza",n:"Pizza Casera",q:1}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"pan",n:"Tostada",q:50}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:100}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"fideos",n:"Sopa",q:80},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:50}], "Cena":[{k:"salmon",n:"Salmón",q:150}] }
        }
    },
    // PLAN 11
    {
        nombre: "3-17 Noviembre 2024",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90},{k:"aceite",n:"Aceite",q:10}], 
                "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], 
                "Comida":[{k:"lentejas",n:"Lentejas",q:100},{k:"pollo",n:"Pollo",q:250},{k:"patata",n:"Patata",q:100}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1}], 
                "Cena":[{k:"huevo",n:"Tortilla",q:1},{k:"queso_fresco",n:"Queso",q:60}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:90},{k:"atun_lata",n:"Atún",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"hamburguesa",n:"Hamburguesa",q:180}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"pan",n:"Tostada",q:60}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"ternera",n:"Ternera",q:180}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:90},{k:"pollo",n:"Pollo",q:200}], "Merienda":[{k:"pan",n:"Tostada",q:60}], "Cena":[{k:"huevo",n:"Tortilla",q:2}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:200},{k:"patata",n:"Patata",q:150},{k:"jamon_serrano",n:"Jamón",q:50}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:180}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"pan",n:"Tostada",q:60}], "Comida":[{k:"fideos",n:"Fideuá",q:90},{k:"gambas",n:"Gambas",q:120}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:180}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:90}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:200},{k:"costilla",n:"Costilla",q:200}], "Merienda":[{k:"pan",n:"Tostada",q:60}], "Cena":[{k:"atun_lata",n:"Atún",q:100},{k:"tomate",n:"Tomate",q:100}] }
        }
    },
    // PLAN 10
    {
        nombre: "21 Oct - 3 Nov 2024",
        dias: {
            "Lunes": { 
                "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125},{k:"mermelada",n:"Mermelada",q:20}], 
                "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], 
                "Comida":[{k:"patata",n:"Patata",q:200},{k:"pollo",n:"Pollo",q:275}], 
                "Merienda":[{k:"yogur",n:"Yogur",q:1}], 
                "Cena":[{k:"pan",n:"Pan",q:125},{k:"atun_lata",n:"Atun",q:35},{k:"tomate",n:"Tomate",q:100}] 
            },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:80},{k:"ternera",n:"Ternera",q:200}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200},{k:"verdura",n:"Verdura",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan",n:"Tostada",q:60}], "Comida":[{k:"lentejas",n:"Lentejas",q:120},{k:"arroz",n:"Arroz",q:30},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:2},{k:"queso_fresco",n:"Queso",q:50}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:90},{k:"carne_picada",n:"Carne Picada",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:60}], "Cena":[{k:"pavo",n:"Pavo",q:180},{k:"ensalada",n:"Ensalada",q:100}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:150},{k:"bacalao",n:"Bacalao",q:200}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"pizza",n:"Pizza",q:1}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"pan",n:"Tostada",q:60}], "Comida":[{k:"arroz",n:"Paella",q:90},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:180}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:125}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:200},{k:"ternera",n:"Ternera",q:200}], "Merienda":[{k:"pan",n:"Tostada",q:60}], "Cena":[{k:"salmon",n:"Salmón",q:180}] }
        }
    },
    // PLAN 9
    {
        nombre: "6-20 Octubre 2023",
        dias: {
            "Lunes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:130}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pollo",n:"Pollo",q:120}] },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60},{k:"ternera",n:"Ternera",q:120}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"lentejas",n:"Lentejas",q:130}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:60},{k:"pollo",n:"Pollo",q:120}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"pavo",n:"Pavo",q:100}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:150},{k:"patata",n:"Patata",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:120}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"fideos",n:"Fideuá",q:60},{k:"gambas",n:"Gambas",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:120}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:300},{k:"pan",n:"Pan",q:40}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:150},{k:"costilla",n:"Costilla",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"atun_lata",n:"Atún",q:80}] }
        }
    },
    // PLAN 8
    {
        nombre: "20 Oct - 2 Nov (Mantenimiento)",
        dias: {
            "Lunes": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:490}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:2}] },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:70},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"lentejas",n:"Lentejas",q:120}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"pavo",n:"Pavo",q:120}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:70},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"huevo",n:"Huevo",q:2}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"arroz",n:"Paella",q:70}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:120}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:200},{k:"pan",n:"Pan",q:80}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"fideos",n:"Sopa",q:70},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"atun_lata",n:"Atún",q:80}] }
        }
    },
    // PLAN 7
    {
        nombre: "1-15 Diciembre 2024",
        dias: {
            "Lunes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pavo",n:"Pavo",q:130}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"atun_lata",n:"Atun",q:150}] },
            "Martes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:60},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:150}] },
            "Miércoles": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"lentejas",n:"Lentejas",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60},{k:"ternera",n:"Ternera",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"pavo",n:"Pavo",q:120}] },
            "Viernes": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:150}] },
            "Sábado": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"pan",n:"Tostada",q:40}], "Comida":[{k:"arroz",n:"Paella",q:60}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"leche",n:"Leche",q:225},{k:"pan",n:"Pan",q:70}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"fideos",n:"Sopa",q:60}], "Merienda":[{k:"pan",n:"Tostada",q:40}], "Cena":[{k:"atun_lata",n:"Atún",q:80}] }
        }
    },
    // PLAN 6
    {
        nombre: "24 Nov - 8 Dic 2025",
        dias: {
            "Lunes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:40},{k:"langostinos",n:"Langostinos",q:50}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"bacalao",n:"Bacalao",q:200}] },
            "Martes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:40},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Miércoles": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"lentejas",n:"Lentejas",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Viernes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:200}] },
            "Sábado": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"arroz",n:"Paella",q:40}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"atun_lata",n:"Atún",q:100}] }
        }
    },
    // PLAN 5
    {
        nombre: "14-28 Diciembre 2025",
        dias: {
            "Lunes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"bacalao",n:"Bacalao",q:200}] },
            "Martes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:60}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Miércoles": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"lentejas",n:"Lentejas",q:120}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Viernes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:200}] },
            "Sábado": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"arroz",n:"Paella",q:60}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"atun_lata",n:"Atún",q:100}] }
        }
    },
    // MALDO NOVIEMBRE
    {
        nombre: "Maldo Noviembre (Definición)",
        dias: {
            "Lunes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:40},{k:"langostinos",n:"Langostinos",q:50}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"bacalao",n:"Bacalao",q:200}] },
            "Martes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:40},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Miércoles": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"lentejas",n:"Lentejas",q:100}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:100}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Viernes": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:200}] },
            "Sábado": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"arroz",n:"Paella",q:40}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"queso_ricotta",n:"Ricotta",q:150}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"atun_lata",n:"Atún",q:100}] }
        }
    },
    // MALDO DICIEMBRE
    {
        nombre: "Maldo Diciembre (Volumen)",
        dias: {
            "Lunes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"garbanzos",n:"Garbanzos",q:120},{k:"atun_lata",n:"Atun",q:112}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"bacalao",n:"Bacalao",q:200}] },
            "Martes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"arroz",n:"Arroz",q:60},{k:"pollo",n:"Pollo",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"merluza",n:"Merluza",q:200}] },
            "Miércoles": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"lentejas",n:"Lentejas",q:120}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"huevo",n:"Tortilla",q:1}] },
            "Jueves": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"pasta",n:"Pasta",q:60}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"pavo",n:"Pavo",q:150}] },
            "Viernes": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"yogur",n:"Yogur",q:1}], "Comida":[{k:"judias",n:"Judías",q:150}], "Merienda":[{k:"fruta",n:"Fruta",q:1}], "Cena":[{k:"salmon",n:"Salmón",q:200}] },
            "Sábado": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"pan",n:"Tostada",q:30}], "Comida":[{k:"arroz",n:"Paella",q:60}], "Merienda":[{k:"yogur",n:"Yogur",q:1}], "Cena":[{k:"lomo",n:"Lomo",q:150}] },
            "Domingo": { "Desayuno":[{k:"pan",n:"Pan",q:60},{k:"huevo",n:"Huevo",q:4}], "Media Mañana":[{k:"fruta",n:"Fruta",q:1}], "Comida":[{k:"patata",n:"Patata",q:150}], "Merienda":[{k:"pan",n:"Tostada",q:30}], "Cena":[{k:"atun_lata",n:"Atún",q:100}] }
        }
    }
];
