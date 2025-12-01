import React from "react";

import { ProductGrid } from "../componentes/home/ProductGrid";
import { allProductosDominicanos } from "../componentes/home/data/Catalog.jsx";

export const ArticulosPage = () => {
  return (
    <div className="py-16">
      <ProductGrid
        title="Todos los Productos"
        products={allProductosDominicanos}
      />  
    </div>
  );
};
