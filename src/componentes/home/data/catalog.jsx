export const allProductosDominicanos = [
  // ============================
  //        1. BEBIDAS
  // ============================
  {
    id: 1,
    name: "Ron Barcelo Añejo",
    price: 750,
    colors: ["ámbar"],
    images: ["/img/brugalañejo.jpg"],
    slug: "ron-barcelo-anejo",
    category: "bebidas",
    variants: [
      { id: "1-default", label: "Presentación única", stock: 25 },
    ],
  },
  {
    id: 2,
    name: "Ron Brugal Extra Viejo",
    price: 820,
    colors: ["ámbar"],
    images: ["/img/extrav.jpeg"],
    slug: "ron-brugal-extra-viejo",
    category: "bebidas",
    variants: [
      { id: "2-default", label: "Presentación única", stock: 18 },
    ],
  },
  {
    id: 3,
    name: "Mabi Taino",
    price: 50,
    colors: ["ámbar"],
    images: ["/img/mabi.jpeg"],
    slug: "mabi-taino",
    category: "bebidas",
    variants: [
      { id: "3-default", label: "Presentación única", stock: 40 },
    ],
  },
  {
    id: 4,
    name: "Jugo Rica de Naranja",
    price: 110.99,
    colors: ["amarillo"],
    images: ["/img/naranja.jpg"],
    slug: "jugo-rica-naranja",
    category: "bebidas",
    variants: [
      { id: "4-default", label: "Presentación única", stock: 55 },
    ],
  },

  // ============================
  //       2. DULCES
  // ============================
  {
    id: 5,
    name: "Café Santo Domingo Molido",
    price: 310,
    colors: ["marrón"],
    images: ["/img/cafe.jpg"],
    slug: "cafe-santo-domingo",
    category: "dulces",
    variants: [
      { id: "5-default", label: "Presentación única", stock: 30 },
    ],
  },
  {
    id: 6,
    name: "Chocolate Embajador",
    price: 180,
    colors: ["marrón"],
    images: ["/img/embajador.jpg"],
    slug: "chocolate-embajador",
    category: "dulces",
    variants: [
      { id: "6-default", label: "Presentación única", stock: 22 },
    ],
  },
  {
    id: 7,
    name: "Dulce de Coco Tradicional",
    price: 75,
    colors: ["crema"],
    images: ["/img/coco.png"],
    slug: "dulce-de-coco",
    category: "dulces",
    variants: [
      { id: "7-default", label: "Presentación única", stock: 45 },
    ],
  },
  {
    id: 8,
    name: "Dulce de Leche Cortado",
    price: 80,
    colors: ["crema"],
    images: ["/img/dulcedeleche.png"],
    slug: "dulce-de-leche-cortado",
    category: "dulces",
    variants: [
      { id: "8-default", label: "Presentación única", stock: 38 },
    ],
  },

  // ============================
  //    3. CARNES / EMBUTIDOS
  // ============================
  {
    id: 9,
    name: "Longaniza Dominicana",
    price: 420,
    colors: ["rojo"],
    images: ["/img/longaniza.jpg"],
    slug: "longaniza-dominicana",
    category: "embutidos",
    variants: [
      { id: "9-default", label: "Presentación única", stock: 28 },
    ],
  },
  {
    id: 10,
    name: "Salami Induveca",
    price: 480,
    colors: ["rojo"],
    images: ["/img/salami.jpg"],
    slug: "salami-induveca",
    category: "embutidos",
    variants: [
      { id: "10-default", label: "Presentación única", stock: 35 },
    ],
  },
  {
    id: 11,
    name: "Queso Geo (Tipo Caribe)",
    price: 350,
    colors: ["amarillo"],
    images: ["/img/queso.jpg"],
    slug: "queso-geo",
    category: "embutidos",
    variants: [
      { id: "11-default", label: "Presentación única", stock: 20 },
    ],
  },
  {
    id: 12,
    name: "Agua de Coco Dominicana",
    price: 110,
    colors: ["transparente"],
    images: ["/img/agua.jpg"],
    slug: "agua-de-coco-dominicana",
    category: "embutidos",
    variants: [
      { id: "12-default", label: "Presentación única", stock: 50 },
    ],
  },

  // ============================
  //     4. ARTESANÍAS
  // ============================
  {
    id: 13,
    name: "Figuras Tainas (Talladas a Mano)",
    price: 900,
    colors: ["marrón"],
    images: ["/img/figuras.png"],
    slug: "figuras-tainas",
    category: "artesanias",
    variants: [
      { id: "13-default", label: "Presentación única", stock: 12 },
    ],
  },
  {
    id: 14,
    name: "Pulseras Artesanales de Larimar",
    price: 450,
    colors: ["azul"],
    images: ["/img/pulsera.jpg"],
    slug: "pulseras-larimar",
    category: "artesanias",
    variants: [
      { id: "14-default", label: "Presentación única", stock: 32 },
    ],
  },
  {
    id: 15,
    name: "Cuadros Caribeños Pintados a Mano",
    price: 1000,
    colors: ["multicolor"],
    images: ["/img/cuadros.png"],
    slug: "cuadros-caribenos",
    category: "artesanias",
    variants: [
      { id: "15-default", label: "Presentación única", stock: 7 },
    ],
  },
  {
    id: 16,
    name: "Cartera (Hecha a Mano)",
    price: 680,
    colors: ["morado"],
    images: ["/img/cartera.png"],
    slug: "cartera-yarey",
    category: "artesanias",
    variants: [
      { id: "16-default", label: "Presentación única", stock: 15 },
    ],
  },

  // ============================
  //  5. MICROEMPRESAS / LOCALES
  // ============================
  {
    id: 17,
    name: "Miel Artesanal de Abeja",
    price: 300,
    colors: ["dorado"],
    images: ["/img/miel.jpg"],
    slug: "miel-artesanal",
    category: "microempresas",
    variants: [
      { id: "17-default", label: "Presentación única", stock: 25 },
    ],
  },
  {
    id: 18,
    name: "Sazón Natural Casero",
    price: 90,
    colors: ["verde"],
    images: ["/img/sazon.png"],
    slug: "sazon-natural",
    category: "microempresas",
    variants: [
      { id: "18-default", label: "Presentación única", stock: 40 },
    ],
  },
  {
    id: 19,
    name: "Granola Dominicana Artesanal",
    price: 220,
    colors: ["marrón"],
    images: ["/img/granola.png"],
    slug: "granola-artesanal",
    category: "microempresas",
    variants: [
      { id: "19-default", label: "Presentación única", stock: 27 },
    ],
  },
  {
    id: 20,
    name: "Aceite de Coco Orgánico",
    price: 260,
    colors: ["transparente"],
    images: ["/img/aceite.jpg"],
    slug: "aceite-coco-organico",
    category: "microempresas",
    variants: [
      { id: "20-default", label: "Presentación única", stock: 33 },
    ],
  }
];
