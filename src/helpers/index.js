// Función para formatear el precio a dólares
{/*export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Función para preparar los productos - (CELULARES)
export const prepareProducts = (products) => {
  return products.map((product) => {
    // Agrupar variantes por color
    const colors = product.variants.reduce((acc, variant) => {
      const existingColor = acc.find((item) => item.color === variant.color);

      if (existingColor) {
        // Mantener el precio mínimo
        existingColor.price = Math.min(existingColor.price, variant.price);
      } else {
        acc.push({
          color: variant.color,
          price: variant.price,
          name: variant.color_name,
        });
      }

      return acc;
    }, []);

    // Precio más bajo
    const price = Math.min(...colors.map((item) => item.price));

    // Retornar producto formateado
    return {
      ...product,
      price,
      colors: colors.map(({ name, color }) => ({ name, color })),
      variants: product.variants,
    };
  });
};
*/}
 // Formatear precio en pesos dominicanos (RD$)
export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Preparar productos dominicanos
export const prepareProducts = (products) => {
  return products.map((product) => {
    const colors = product.variants.reduce((acc, variant) => {
      const existingColor = acc.find((item) => item.color === variant.color);

      if (existingColor) {
        existingColor.price = Math.min(existingColor.price, variant.price);
      } else {
        acc.push({
          color: variant.color,
          price: variant.price,
          name: variant.color_name,
        });
      }
      return acc;
    }, []);

    const price = Math.min(...colors.map((item) => item.price));

    return {
      ...product,
      price,
      colors: colors.map(({ name, color }) => ({ name, color })),
      variants: product.variants,
    };
  });
};
