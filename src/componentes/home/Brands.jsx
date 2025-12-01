import React from 'react'

const brands = [
  {
    image: '/img/brands/Brugal.jpg',
    alt: 'Brugal',
  },
  {
    image: '/img/brands/cafe.jpg',
    alt: 'Café',
  },
  {
    image: '/img/brands/chocolate.jpg',
    alt: 'Chocolate',
  },
  {
    image: '/img/brands/dulceria.jpg',
    alt: 'Dulcería',
  },
  {
    image: '/img/brands/induveca.jpg',
    alt: 'Induveca',
  }
];

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-16 pb-12">
      <h2 className="text-2xl font-semibold">Productos disponibles</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Gran variedad de productos artesanales y locales de la República Dominicana, cuidadosamente seleccionados para ti.
      </p>

      {/* Grid corregido */}
      <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img
              src={brand.image}
              alt={brand.alt}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
