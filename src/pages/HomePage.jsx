import React from "react";
import { FeatureGrip } from "../componentes/home/FeatureGrip";
import { Brands } from "../componentes/home/Brands";
import { ProductGrid } from "../componentes/home/ProductGrid";


import { allProductosDominicanos } from "../componentes/home/data/catalog";

import {
  recentProductosDominicanos,
  popularProductosDominicanos,
} from "../componentes/home/data/initialData";

import { prepareProducts } from "../helpers";

export const HomePage = () => {
  
  const nuevosProductos = prepareProducts(recentProductosDominicanos);
  const productosDestacados = prepareProducts(popularProductosDominicanos);

  return (
    <div>
      <FeatureGrip />

      <ProductGrid
        title="Catálogo de Productos Dominicanos"
        products={allProductosDominicanos}
      />

      <ProductGrid
        title="Nuevos Productos Dominicanos"
        products={nuevosProductos}
      />

      <ProductGrid
        title="Productos Dominicanos Destacados"
        products={productosDestacados}
      />

      <Brands />
    </div>
  );
};
