 export const allProductosDominicanos = [
	{
		brand: 'Induban',
		colors: [{ color: '#8B4513', color_name: 'Marrón' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Café dominicano de tueste medio, ideal para preparar café filtrado y espresso.' },
					],
				},
			],
		},
		features: ['100% Arábica', 'Tueste Medio', 'Producto Dominicano'],
		id: 'caf-ind-001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Café Santo Domingo - Tueste Medio',
		price: 8.99,
		slug: 'cafe-santo-domingo-tueste-medio',
		variants: [
			{
				color: '#8B4513',
				color_name: 'Marrón',
				id: 'caf-ind-var-001',
				price: 8.99,
				stock: 50,
				storage: '500g',
			},
		],
	},

	{
		brand: 'Rizek Cacao',
		colors: [{ color: '#5C3317', color_name: 'Cacao' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Cacao orgánico dominicano premium, perfecto para chocolate artesanal.' },
					],
				},
			],
		},
		features: ['Orgánico', 'Grado Premium', 'Exportación'],
		id: 'cac-rzk-001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Cacao Rizek Orgánico',
		price: 12.49,
		slug: 'cacao-rizek-organico',
		variants: [
			{
				color: '#5C3317',
				color_name: 'Cacao',
				id: 'cac-rzk-var-001',
				price: 12.49,
				stock: 40,
				storage: '500g',
			},
		],
	},

	{
		brand: 'Brugal',
		colors: [{ color: '#1A1A1A', color_name: 'Negro' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Ron dominicano añejo, uno de los más reconocidos internacionalmente.' },
					],
				},
			],
		},
		features: ['Ron Añejo', 'Producto Nacional', 'Calidad Premium'],
		id: 'ron-brg-001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Ron Brugal Añejo',
		price: 18.99,
		slug: 'ron-brugal-anejo',
		variants: [
			{
				color: '#1A1A1A',
				color_name: 'Negro',
				id: 'ron-brg-var-001',
				price: 18.99,
				stock: 30,
				storage: '750ml',
			},
		],
	},

	{
		brand: 'Flor de Gurabo',
		colors: [{ color: '#DAA520', color_name: 'Dorado' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Miel de abejas dominicana, totalmente natural y sin aditivos.' },
					],
				},
			],
		},
		features: ['100% Natural', 'Artesanal', 'Producto Local'],
		id: 'mel-gur-001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Miel Flor de Gurabo',
		price: 7.50,
		slug: 'miel-flor-de-gurabo',
		variants: [
			{
				color: '#DAA520',
				color_name: 'Dorado',
				id: 'mel-gur-var-001',
				price: 7.50,
				stock: 32,
				storage: '480ml',
			},
		],
	},

	{
		brand: 'La Aurora',
		colors: [{ color: '#654321', color_name: 'Tabaco' }],
		created_at: new Date().toISOString(),
		description: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'Tabaco dominicano premium elaborado a mano.' },
					],
				},
			],
		},
		features: ['Premium', 'Hecho a Mano', 'Exportación'],
		id: 'tab-aur-001',
		images: ['https://ui.shadcn.com/placeholder.svg'],
		name: 'Tabaco La Aurora Preferidos',
		price: 14.99,
		slug: 'tabaco-la-aurora-preferidos',
		variants: [
			{
				color: '#654321',
				color_name: 'Tabaco',
				id: 'tab-aur-var-001',
				price: 14.99,
				stock: 25,
				storage: 'Unidad',
			},
		],
	},
];

 // =========================
//      RECIENTES
// =========================

export const recentProductosDominicanos = [
  allProductosDominicanos[0],
  allProductosDominicanos[1],
  allProductosDominicanos[2],
];

// =========================
//      POPULARES
// =========================

export const popularProductosDominicanos = [
  allProductosDominicanos[2],
  allProductosDominicanos[3],
  allProductosDominicanos[4],
];
